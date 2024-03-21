import { Decimal128 } from "mongodb";
import mongoose from "mongoose";
import tagModel from "./tag.model";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserModel",
  },
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
  },
});

export default mongoose.model("BookModel", bookSchema);
