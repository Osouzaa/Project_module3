import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    patient: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Patient' }],
    photo: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Files",
      //required:true
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };

