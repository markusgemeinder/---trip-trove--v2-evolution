import mongoose from "mongoose";

const { Schema } = mongoose;

const tripSchema = new Schema(
  {
    destination: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    image: {
      type: new Schema({
        width: Number,
        height: Number,
        url: String,
        publicId: String,
      }),
    },
    imageURL: { type: String, default: "" },
    packingList: [
      {
        itemName: { type: String },
        itemQuantity: { type: Number },
        isPacked: { type: Boolean },
      },
    ],
    notes: { type: String },
  },
  { timestamps: true }
);

const Trip = mongoose.models.Trip || mongoose.model("Trip", tripSchema);

export default Trip;
