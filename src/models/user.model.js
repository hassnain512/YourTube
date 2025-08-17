import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema(
  {
    userName: {
      type: string,
      required: true,
      trim: true,
      index: true,
      lowercase: true,
      unique: true,
    },

    fullName: {
      type: string,
      required: true,
      trim: true,
      index: true,
    },

    email: {
      type: string,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },

    avatar: {
      type: string,
      required: true,
    },

    coverImage: {
      type: string,
    },

    refreshToken: {
      type: string,
      required: true,
    },

    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Videos",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      userName: this.userName,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    }
  );
};
