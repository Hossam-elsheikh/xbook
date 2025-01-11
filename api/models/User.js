const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: {
        country:String,
        city: String,
        region:String
    }
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      default: "user",
    }
  ],
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('User',userShema)
