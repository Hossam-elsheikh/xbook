const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @desc get all users
// @route GET /users
// @access private

const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  const foundUser = await User.findOne({ userName }).exec();
  if (!foundUser || !foundUser.active) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.status(401).json({ message: "Unauthorized" });
  const accessToken = jwt.sign(
    {
      UserInfo: {
        userName: foundUser.userName,
        roles: foundUser.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10s" }
  );
  const refreshToken = jwt.sign(
    { userName: foundUser.userName },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  // create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true, //accessible only by web server
    secure: false, //https
    sameSite: "none", // cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7days =  set to match refresh token
  });
  // send accessTpken containing username and roles
  res.json({ accessToken });
});

const refresh = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });
  const refreshToken = cookies.jwt;
  // verifying the cookie
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden!" });
      const foundUser = await User.findOne({
        userName: decoded.userName,
      }).exec();
      if (!foundUser) return res.status(401).json({ message: "Unauthorized" });
      // recreate the access token
      const accessToken = jwt.sign(
        {
          UserInfo: {
            userName: foundUser.userName,
            roles: foundUser.roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10s" }
      );
      res.json({ accessToken });
    })
  );
};

const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // no content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: false });
  res.json({message:'Cookie cleared'})
};
module.exports = {
  login,
  refresh,
  logout,
};
