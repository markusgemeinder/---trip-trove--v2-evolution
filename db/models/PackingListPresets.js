import mongoose from "mongoose";

const { Schema } = mongoose;

const packingListPresetSchema = new Schema(
  {
    packingListPreset: { type: String, required: true },
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

const PackingListPreset =
  mongoose.models.PackingListPreset ||
  mongoose.model("PackingListPreset", packingListPresetSchema);

export default PackingListPreset;
