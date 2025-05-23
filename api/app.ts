import { Request, Response } from "express";

// requiering dotenv like that makes it global
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const { logEvent } = require("./middleware/logger");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
// here's if you want to serve static files
const path = require("path");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

connectDB();
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));

app.use("/users", require("./routes/userRoutes.js"));
app.use("/auth", require("./routes/authRoutes.js"));
app.use("/posts", require("./routes/postRoutes.js"));

app.all("*", (req: Request, res: Response) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log("server running ..."));
});

mongoose.connection.on("error", (error: any) => {
  console.log("error connecting to mongoDB");
  console.log(error);
  logEvent(
    `${error.no}: ${error.code}\t${error.syscall}\t${error.hostname}`,
    "mongoErrLog.log"
  );
});
