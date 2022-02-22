import express from "express";
import { Handlers } from "./handlers.js";

const router = express.Router();

router
  .get("/all-posts", Handlers.getAllPosts)
  .get("/", Handlers.getAllMostPopularPosts)
  .post("/add-user", Handlers.postUser)
  .post("/add-post", Handlers.postPost)
  .post("/add-comment", Handlers.postComment);

export default router;
