import mongoose, { Schema } from "mongoose";

const OccurrenceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    kind: { type: String, required: true },
  },
  { timestamps: true }
);
const OccurrenceModel = mongoose.model("Occurrences", OccurrenceSchema);

export { OccurrenceModel };
