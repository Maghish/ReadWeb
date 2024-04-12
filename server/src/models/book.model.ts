import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    author: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [], required: true, default: [] },
    /*
      tags: [
        "Action",
        "Comedy",
        "Fantasy",
      ]
    */
    ratings: { type: Decimal128, required: true, default: 5.0 },
    clicked: { type: Number, required: true, default: 1 },
    comments: { type: [], required: true, default: [] },
    /*
      comments: [
        {
          author: String | "Foo",
          content: String | "This book is amazing!",
          writtenAt: Date,
        }
      ]
    */
    content: { type: [], required: true, default: [] },
    /*
      content: [
        {
          chapter: String | "Chapter 1 - Rebirth",
          content: String | "Once upon a time..",
        },
        {
          chapter: String | "Chapter 2 - Rebuild",
          content: String | "Soon after..",
        }
      ]
    */
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BookModel", bookSchema);