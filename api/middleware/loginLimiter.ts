import { NextFunction, Request, Response } from "express";

const rateLimit = require("express-rate-limit");
const { logEvent } = require("./logger");

type RateLimitOptions = {
  windwoMs: number;
  max: number;
  message: {
    message: string;
  };
  statusCode: number;
};

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 10, // limit each ip to 10 login attempts per min
  message: {
    message:
      "Too many login attempts, please try again after 60 seconeds break.",
  },
  handler: (
    req: Request,
    res: Response,
    next: NextFunction,
    options: RateLimitOptions
  ) => {
    logEvent(
      `Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      "errLog.log"
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, //return rate limit info in the ratelimit headers
  legacyHeaders: false, // disable the x-ratelimit headers
});

module.exports = loginLimiter;
