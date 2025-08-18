import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//for form data
app.use(express.json({ limit: "16kb" }));
//for url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//for static data like in public repo
app.use(express.static("pulic"));
app.use(cookieParser());

//import routes
import userRouter from "./routes/user.routes.js";

//routes decalaration
app.use("/api/user", userRouter);
export { app };
