import { ErrorRequestHandler } from "express";
import { ValidateError } from "@tsoa/runtime";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { logInfo, logWarning } from "@pck/utils";

import { HttpError } from "http-errors";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidateError) {
    logWarning(
      `${req.method} ${req.path}`,
      err.name + ": " + err.message,
      err.fields
    );

    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: ReasonPhrases.UNPROCESSABLE_ENTITY,
      details: err.fields
    });
  }

  if (err instanceof HttpError) {
    logInfo(
      `${req.method} ${req.path} ${err.status} ${err.name}: ${err.message}`
    );

    return res.status(err.status).json({
      message: err.name + ": " + err.message
    });
  }

  if (err instanceof Error) {
    logWarning(`${req.method} ${req.path}`, err);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR
    });
  }

  next();
};

export default errorHandler;
