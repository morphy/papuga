import { ErrorRequestHandler } from "express";
import { ValidateError } from "@tsoa/runtime";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { logWarning } from "@pck/utils";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidateError) {
    logWarning(`Validation Error for ${req.path}`, err.fields);

    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: ReasonPhrases.UNPROCESSABLE_ENTITY,
      details: err.fields
    });
  }

  if (err instanceof Error) {
    logWarning(`Internal server error for ${req.path}`, err);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR
    });
  }

  next();
};

export default errorHandler;
