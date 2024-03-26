import { ErrorRequestHandler } from "express";
import { ValidateError } from "@tsoa/runtime";
import { StatusCodes } from "http-status-codes";
import { HttpError } from "http-errors";

import { logInfo, logWarning } from "@pck/utils";

import getErrorResponse from "misc/getErrorResponse";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidateError) {
    logWarning(
      `${req.method} ${req.path} ${err.name}: ${err.message}`,
      err.fields
    );

    return getErrorResponse(res, StatusCodes.UNPROCESSABLE_ENTITY, err.fields);
  }

  if (err instanceof HttpError) {
    logInfo(
      `${req.method} ${req.path} ${err.status} ${err.name}: ${err.message}`
    );

    return getErrorResponse(res, err.status, err.message);
  }

  if (err instanceof Error) {
    logWarning(`${req.method} ${req.path}`, err);

    return getErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR);
  }

  next();
};

export default errorHandler;
