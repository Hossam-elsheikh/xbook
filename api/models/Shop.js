const mongoose = require("mongoose");
// user here is writer or reader
// reader can switch to writer later
const shopSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: {
      country: String,
      city: String,
      region: String,
      // this is geospatial data, you can't change the fields names. meant to find nearby users
      // arrange books lookup according to the nearest users own books
      location: {
        type: "Point",
        coordinates: [Number, Number], // [longitude, latitude]
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  pic: String,
  cover: String,
  bio: String,
  resetPasswordToken: String,
  // array of strings of ids of genres from tags collection
  collections: [
    {
      title: String,
      books: [
        {
          bookID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Books",
          },
          price: Number,
          quantity: Number,
        },
      ], // array of strings of ids of books collection
    },
  ],

  
});

module.exports = mongoose.model("Shops", shopSchema);
