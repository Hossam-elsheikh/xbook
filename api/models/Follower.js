const mongoose = require("mongoose");
// a separate collection for followers to enhance the scalability of the system
const followerSchema = new mongoose.Schema({
  userID: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Users"
  },
  followerID:{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Users"
  }
});

module.exports = mongoose.model("Followers", followerSchema);
