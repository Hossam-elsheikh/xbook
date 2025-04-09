import { Request, Response } from "express";
import { createUserSchema } from "../../shared/types/create-user";
import { ZodError } from "zod";
const { User, Writer } = require("../models/User");
const Book = require("../models/Book");
const Exchange = require("../models/Exchange");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  // here we're excluding the password
  // lean() will make the response clean from unwanted methods i.e json data only
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users Found!" });
  }
  res.json(users);
});

const addNewUser = asyncHandler(async (req: Request, res: Response) => {
  const results = createUserSchema.safeParse(req.body);

  if (!results.success) {
    const formattedErrors: Record<string, string[]> = {};
    results.error.errors.forEach((e) => {
      const field = e.path.join(".");
      if (!formattedErrors[field]) {
        formattedErrors[field] = [];
      }
      formattedErrors[field].push(e.message);
    });

    return res.status(400).json({
      message: "Validation failed",
      errors: formattedErrors,
    });
  }
  const validatedData = results.data;
  // check dublicates
  const dublicateUsername = await User.findOne({
    userName: validatedData.userName,
  })
    .lean()
    .exec();
  const dublicateEmail = await User.findOne({ email: validatedData.email })
    .lean()
    .exec();
  if (dublicateEmail) {
    return res
      .status(400)
      .json({ message: "This email is already registerd!" });
  }
  if (dublicateUsername) {
    return res
      .status(400)
      .json({ message: "This username is used!, please choose another one" });
  }

  // hash password
  const hashedPwd = await bcrypt.hash(validatedData.password, 10);

  validatedData.password = hashedPwd;

  const userInfo = { validatedData };
  const user = await User.create(userInfo);

  if (user) {
    res.status(201).json({ message: "user created" });
  } else {
    res.status(400).json({ message: "error validating the data" });
  }
});

module.exports = {
  getAllUsers,
  addNewUser,
};
