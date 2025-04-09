const mongoose = require("mongoose");
// books are added from google books api to the db upon user search for book to add to his library
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
    authors: {
      type: [String],
    },
    publishedDate: {
      type: String
    },
    pageCount: {
      type: Number
    },
    categories: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tags",
        }
      ],
    },
    averageRating: {
      type: Number
    },
    ratingsCount: {
      type: Number
    },
    cover:{
        type:String,

    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Books", bookSchema);
