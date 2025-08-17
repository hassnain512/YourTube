import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
dotenv.config({ path: "./env" });
const app = express();
app.listen(process.env.PORT, () => {
  console.log(`YOUR SERVER IS RUNNING AT PORT NUMBER ${process.env.PORT}`);
});
  connectDB();
