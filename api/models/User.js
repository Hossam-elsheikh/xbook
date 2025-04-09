const mongoose = require("mongoose");
// user here is writer or reader
// reader can switch to writer later
// create indexes for the role field
const userShema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    DateOfBirth: Date,
    address:  {
        country: String,
        city: String,
        region: String,
        // this is geospatial data, you can't change the fields names. meant to find nearby users
        // arrange books lookup according to the nearest users own books
        location: {
          type: { type: String, enum: ['Point'], default: 'Point' },
          coordinates: { type: [Number] }
        },
    },
    password: {
      type: String,
      required: true,
    },
    role: 
      {
        type: String,
        enum: ["reader", "writer"],
        default: "reader",
      }
    ,
    active: {
      type: Boolean,
      default: true,
    },
    pic: String,
    cover: String,
    bio: String,
    resetPasswordToken: String,
    intersts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tags",
      },
    ], // array of strings of ids of genres from tags collection
    collections: [
      {
        title: String,
        books: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Books",
          },
        ], // array of strings of ids of books collection
      },
    ],
    preferedShops: [String], // array of strings of ids of shops collection
  },
  {
    timestamps: true,
    discriminatorKey: "role",
  }
);

const Writer = userShema.discriminator(
  "writer",
  new mongoose.Schema({
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
      },
    ],
    currentlyWriting: {
      title: String,
      description: String,
    },
    profileVerified: {
      type: Boolean,
      default: false,
    },
  })
);

const User = mongoose.model("Users", userShema);
module.exports = {
  User, // base user, for reader type
  Writer // for writer type
};


