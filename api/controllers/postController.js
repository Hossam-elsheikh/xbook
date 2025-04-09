const {
  Post,
  DiscussionPost,
  ArticlePost,
  ReviewPost,
} = require("../models/Post");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res) => {
  // lean() will make the response clean from unwanted methods i.e json data only
  const posts = await Post.find().lean();
  if (!posts?.length) {
    return res.status(400).json({ message: "No users Found!" });
  }
  res.json(posts);
});

const addNewPost = asyncHandler(async (req, res) => {
  const { userID, postType, bookID } = req.body;
  if (!userID || !postType) {
    return res.status(400).json({ message: "please provide all data needed" });
  }
  switch (postType) {
    case "discussion":
      const { activeTimeByHours, postContent } = req.body;
      if (!activeTimeByHours || !postContent) {
        return res
          .status(400)
          .json({ message: "please provide all data needed" });
      }
      const discussionPost = await DiscussionPost.create({
        userID,
        postType,
        bookID,
        activeTimeByHours,
        postContent,
      });
      return res.status(201).json(discussionPost);

    case "article":
      const { articleTitle, articleContent } = req.body;
      if (!articleTitle || !articleContent) {
        return res
          .status(400)
          .json({ message: "please provide all data needed" });
      }
      const articlePost = await ArticlePost.create({
        userID,
        postType,
        bookID,
        articleTitle,
        articleContent,
      });
      return res.status(201).json(articlePost);

    case "review":
      const { rating, reviewContent } = req.body;
      if (!rating || !reviewContent) {
        return res
          .status(400)
          .json({ message: "please provide all data needed" });
      }
      const reviewPost = await ReviewPost.create({
        userID,
        postType,
        bookID,
        rating,
        reviewContent,
      });
      return res.status(201).json(reviewPost);

    case "lookingFor":
      const lookingForPost = await Post.create({ userID, postType, bookID });
      return res.status(201).json(lookingForPost);
    default:
      break;
  }
});

module.exports = {
  getAllPosts,
  addNewPost,
};
