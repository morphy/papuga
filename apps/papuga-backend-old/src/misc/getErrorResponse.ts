import { Response } from "express";
import { getReasonPhrase } from "http-status-codes";

const getErrorResponse = (res: Response, code: number, details: any = "") => {
  res.status(code).json({
    code: code + " " + getReasonPhrase(code),
    details
  });
};

export default getErrorResponse;
