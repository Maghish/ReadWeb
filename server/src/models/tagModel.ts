import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model("TagModel", tagSchema);
