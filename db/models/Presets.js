import mongoose from "mongoose";

const { Schema } = mongoose;

const presetSchema = new Schema(
  {
    presetName: { type: String, required: true },
    items: [
      {
        itemName: { type: String, required: true },
        itemQuantity: { type: Number },
        isPacked: { type: Boolean },
      },
    ],
  },
  { timestamps: true }
);

const Preset = mongoose.models.Preset || mongoose.model("Preset", presetSchema);

export default Preset;
