import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

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
});

export default mongoose.model("Book", bookSchema);
