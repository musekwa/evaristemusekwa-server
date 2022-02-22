import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import User from "../models/User.js";
import { GetData } from "../models/index.js";

export class Handlers {
  static getAllPosts = async (req, res) => {
    try {
      const allPosts = await GetData.getAllPosts();
      res.status(200).json(allPosts);
    } catch (err) {
      res.status(501).json({ message: "Fetching post failed!" });
    }
  };

  static getAllMostPopularPosts = async (req, res) => {
    let posts = [];
    try {
      posts = await Post.find();
      return res.send(posts);
    } catch (err) {
      console.log("Cannot fetch all posts now!");
      return res.send({ message: err.message });
    }
  };

  static getAboutMePost = (req, res) => {
    res.send("Get About Me Post");
  };

  static postComment = async (req, res) => {
    try {
      const { comment, userId, postId } = req.body;
      const newComment = await Comment.create({
        comment,
        user: userId,
        post: postId,
      });
      return res.json(newComment);
    } catch (err) {
      return res.json({ message: "Couldn't add new post ", err });
    }
  };

  static postPost = async (req, res) => {
    const { title, desc, keywords, image, content } = req.body;
    const createdAt = new Date()
    try {
      
      const post = await Post.create({
        title,
        desc,
        content,
        keywords,
        image,
        createdAt,
      });
      return res.status(200).json(post);
    } catch (err) {
      return res.json({ message: "Couldn't add new post ", err });
    }
  };

  static postUser = async (req, res) => {
    try {
      const { email, username } = req.body;
      const user = await User.create({ email, username });
      return res.status(200).json(user);
    } catch (err) {
      console.log(`Couldn't add new user: ${err}`);
      return res.status(501).json({ message: "Couldn't add new user! ", err });
    }
  };
}
