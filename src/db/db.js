import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `Database Connected!! Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("\n Database Connection error :( \n", error);
    process.exit(1);
  }
};

export default connectDB;
