import { ObjectId } from "mongodb";
import mongoose from "mongoose";

// const PostSchema = new mongoose.Schema(
//   {
//     title: { type: String, index: true, required: true, unique: true },
//     desc: {
//       type: String,
//     },
//     content: {
//       type: String,
//     },
//     comments: {
//       type: ObjectId
//     },
//     slug: { type: String, slug: "title" },
//     upvotes: Number,
//     downvotes: Number,
//     keywords: {
//       type: [String],
//       index: true,
//     },
//     image: String,
//   },
//   { timestamps: true }
// );
const PostSchema = new mongoose.Schema(
  {
    title: { type: String, index: true, required: true, unique: true },
    createdAt: {
      type: Date,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
    },
    slug: { type: String, slug: "title" },
    upvotes: Number,
    downvotes: Number,
    keywords: {
      type: [String],
      index: true,
    },
    image: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
