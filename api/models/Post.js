const mongoose = require("mongoose");
// create indexes for the postType field
const postSchema = new mongoose.Schema(
    // global schema for all post types and for looking for without any additional fields
  {
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    postType: { type: String, enum: ["lookingFor", "article", "discussion", "review"], required: true },
    bookID: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

// Discriminator: Discussion
const DiscussionPost = Post.discriminator(
  "discussion",
  new mongoose.Schema({
    activeStatus: { type: String, enum: ["active", "closed"], default: "active" },
    activeTimeByHours: Number,
    postContent: { type: String, required: true },
  })
);

// Discriminator: Article
const ArticlePost = Post.discriminator(
  "article",
  new mongoose.Schema({
    articleTitle: { type: String, required: true },
    articleContent: { type: String, required: true },
  })
);

// Discriminator: Review
const ReviewPost = Post.discriminator(
  "review",
  new mongoose.Schema({
    rating: { type: Number, required: true },
    reviewContent: { type: String, required: true },
  })
);


module.exports = {
    Post,            // Base Model, For lookingFor type
    DiscussionPost,  // For "discussion" type
    ArticlePost,     // For "article" type
    ReviewPost,      // For "review" type
  };