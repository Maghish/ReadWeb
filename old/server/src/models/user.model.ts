import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    //  General Information
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

    // This application based information
    favoriteBooks: { type: [], required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserModel", userSchema);
