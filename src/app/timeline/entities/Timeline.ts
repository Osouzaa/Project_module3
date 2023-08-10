import mongoose, { Schema } from "mongoose"

const TimelineSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    occurrences: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Occurrences'}],
    patientId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Patient' },
},
    { timestamps: true }
)

const TimelineModel = mongoose.model("Timeline", TimelineSchema)

export { TimelineModel }