import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./controllers/index.js";
import mongoose from "mongoose";
dotenv.config();

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URI, {});

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);
app.use("/all-posts", router);
app.use("/about-me", router);
app.use("/add-user", router);
app.use("/add-post", router);
app.use("/add-comment", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
