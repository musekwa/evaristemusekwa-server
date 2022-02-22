import Post from "./Post.js";
import Comment from "./Comment.js";

export class GetData {
  static getAllPosts = async () => {
    try {   
      return await Post.find({});
    } catch (err) {
      console.log("Couldn't get all the posts ", err);
      return;
    }
  };
}

// export class PostData {

// }
