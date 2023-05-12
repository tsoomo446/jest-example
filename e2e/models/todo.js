import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

export default mongoose.model("Todo", todoSchema);