import { RequestHandler } from "express";
import { decodeJwt } from "jose";
import createError from "http-errors";

import { logError, logInfo, logSuccess, logWarning } from "@pck/utils";

export type Role = "user" | "admin";

const authMiddleware =
  (roles: Role[]): RequestHandler =>
  async (req, _res, next) => {
    if (!req.oidc.isAuthenticated()) {
      return next(createError(401, "User is not authenticated"));
    }

    const token = req.oidc.accessToken;

    if (!token) {
      return next(createError(401, "User hasn't provided a token"));
    }

    let decodedToken;
    let tokenRoles: string[];

    try {
      decodedToken = decodeJwt(token.access_token) as any;
      tokenRoles = decodedToken?.resource_access?.papuga?.roles || [];
    } catch (error) {
      logError("Error during JWT decoding", error);
      return next(createError(500, "Error during JWT decoding"));
    }

    if (token.isExpired()) {
      logInfo(`Refreshing access token for sub: ${decodedToken?.sub}`);

      try {
        await token.refresh();
      } catch (error) {
        logWarning("Refresh token is invalid");
        return next(createError(401, "Refresh token is invalid"));
      }

      logSuccess("Access token refreshed");
    }

    if (!roles.some((role) => tokenRoles.includes(role))) {
      return next(createError(403, "User doesn't have required roles"));
    }

    next();
  };

export default authMiddleware;
