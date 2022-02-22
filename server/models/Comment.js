import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    comment: String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    upvotes: Number,
    downvotes: Number,
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
