import { Decimal128 } from "mongodb";
import mongoose from "mongoose";
import tagModel from "./tagModel";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  ratings: { type: Decimal128, default: 5.0, required: true },
  reviews: { type: [], default: [], required: true },

  /*
    reviews: [
      {
        author: string || "Foo",
        content: string || "Hello! This book is amazing!"
      },
      {
        author: string || "Bar",
        content: string || "Awesome book!"
      },
      {
        author: string || "Baz",
        content: string || "Deserves 5/5 reviews!"
      }
    ]
  */

  content: { type: [], required: true },

  /*
    content: 
      [
        {
          chapter: string || "Introduction",
          content: string || "Lorem Ipsum..........",
        },
        {
          chapter: string || "Background Story",
          content: string || "Lorem Ipsum..........",
        },
        {
          chapter: string || "Ending",
          content: string || "Lorem Ipsum.........."
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
