import { RequestHandler } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const notFoundHandler: RequestHandler = (_req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: ReasonPhrases.NOT_FOUND
  });
};

export default notFoundHandler;
