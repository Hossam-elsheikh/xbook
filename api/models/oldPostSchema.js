const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    postType: {
      type: String,
      enum: ["lookingFor", "article", "discussion", "review"],
      required: true,
    },
    // not in article fields
    postContent: {
      type: String,
      required: true,
      // validate here for max length
    },

    bookID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Books",
    },
    // discussion only fields
    activeStatus: {
      type: String,
      enum: ["active", "closed"],
      default: "active",
    },
    activeTimeByHours: Number,
    // article only fields
    articleTitle: String,
    articleContent: {
      type: String,
      required: true,
    // validate for min and max length here
    },
    // review only fields
    rating: Number,
    reviewContent: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
