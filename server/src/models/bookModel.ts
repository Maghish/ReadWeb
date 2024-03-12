import { Decimal128 } from "mongodb";
import mongoose from "mongoose";
import tagModel from "./tagModel";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ratings: { type: Decimal128, default: 5.0, required: true },
  reviews: { type: [], default: [], required: true },
  content: { type: [], required: true },

  /*
    Content: 
      [
        {
          chapter: String || "Introduction",
          content: String || "Lorem Ipsum..........",
        },
        {
          chapter: String || "Background Story",
          content: String || "Lorem Ipsum..........",
        },
        {
          chapter: String || "Ending",
          content: String || "Lorem Ipsum.........."
        }
      ]
  */

  tags: {
    type: [{ type: String, ref: "TagModel" }],
    required: true,
    validate: {
      validator: async (v: []) => {
        const validIds = await Promise.all(
          v.map(async (name) => await tagModel.findOne({ name: name }))
        );
        return validIds.every((doc) => !!doc); // Check for falsy values (null or undefined)
      },
      message:
        "Invalid TagModel references. Please ensure all IDs exist in TagModel collection.",
    },
  },
});

export default mongoose.model("BookModel", bookSchema);
