const {User} = require("../models/User");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "please provide the email and the password!" });
  }
  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser ) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.status(401).json({ message: "Invalid email or password!" });
  const accessToken = jwt.sign(
    {
      UserInfo: {
        userName: foundUser.userName,
        role: foundUser.role,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
  const refreshToken = jwt.sign(
    { userName: foundUser.userName },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "15d" }
  );
  // create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true, //accessible only by web server
    secure: false, //https
    sameSite: "none", // cross-site cookie
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15days =  set to match refresh token
  });
  // send accessToken containing username and role
  res.json({accessToken});
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
        { expiresIn: "1h" }
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
