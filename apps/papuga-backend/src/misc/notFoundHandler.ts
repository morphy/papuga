import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import getErrorResponse from "misc/getErrorResponse";

const notFoundHandler: RequestHandler = (_req, res) => {
  return getErrorResponse(
    res,
    StatusCodes.NOT_FOUND,
    "The requested route could not be found"
  );
};

export default notFoundHandler;
