import mongoose, { Schema } from "mongoose";

const OccurrenceSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    kind: { type: String, required: true },
    files: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Files" }],
  },
  { timestamps: true }
);
const OccurrenceModel = mongoose.model("Occurence", OccurrenceSchema);

export { OccurrenceModel };