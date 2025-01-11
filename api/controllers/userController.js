const User = require("../models/User");
const Book = require("../models/Book");
const Exchange = require("../models/Exchange");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc get all users
// @route GET /users
// @access private

const getAllUsers = asyncHandler(async (req, res) => {
  // here we're excluding the password
  // lean() will make the response clean from unwanted methods i.e json data only
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users Found!" });
  }
  res.json(users);
});

// @desc create new user
// @route POST /users
// @access private

const addNewUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, userName, mobile, password, roles } = req.body;

  // check data
  if (
    !firstName ||
    !lastName ||
    !userName ||
    !mobile ||
    !password ||
    !Array.isArray(roles) ||
    !roles.length
  ) {
    return res.status(400).json({ message: "please provide all data needed" });
  }

  // chech dublicates 
  const dublicate = await User.findOne({userName}).lean().exec()
  if ( dublicate){
    return res.status(400).json({message:'This user already exist!'})
  }

  // hash password 
  const hashedPwd = await bcrypt.hash(password,10)

  const userInfo = {firstName,lastName,userName,mobile,'password':hashedPwd,roles}
  const user = await User.create(userInfo)

  if(user){
    res.status(201).json({message:'user created'})
  }else {
    res.status(400).json({message:'error validating the data'})
  }

});

module.exports = {
  getAllUsers,
  addNewUser,
};
