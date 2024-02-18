import mongoose from "mongoose";

const { Schema } = mongoose;

const presetSchema = new Schema(
  {
    preset: { type: String, required: true },
    items: [
      {
        // _id: { type: Schema.Types.ObjectId, required: true },
        itemName: { type: String, required: true },
        itemQuantity: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const Preset = mongoose.models.Preset || mongoose.model("Preset", presetSchema);

export default Preset;
