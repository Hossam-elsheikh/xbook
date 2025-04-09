import { NextFunction, Request, Response } from "express";

const { logEvent } = require("./logger");
import { ZodError } from "zod";


const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logEvent(
    `${error.name}:${error.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errorLog.log"
  );
  console.log(error.stack);

  const status = error.statusCode || res.statusCode || 500;

  res.status(status).json({
    message: error.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
