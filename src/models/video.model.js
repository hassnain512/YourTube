import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  videoFile: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  duration: {
    type: number,
    required: true,
  },
  views: {
    type: number,
    default: 0,
  },
  isPublished: {
    type: Boolean,
  },
},{timestamps : true });

export const Video = mongoose.model("Video", videoSchema);
