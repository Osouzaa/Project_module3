import mongoose, { Schema } from "mongoose";

const PatientSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    contact: { type: String, required: true },
    demands: { type: String, required: true },
    personalAnnotations: { type: String, required: true },
    timelines: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Timeline" }],
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User"},
  },
  { timestamps: true }
);

const PatientModel = mongoose.model("Patient", PatientSchema);

export { PatientModel };
