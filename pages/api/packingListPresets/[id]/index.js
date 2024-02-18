import dbConnect from "@/db/connect";
import PackingListPreset from "@/db/models/PackingListPresets";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).json({ status: `Invalid ID` });
  }

  if (request.method === "GET") {
    try {
      const packingListPreset = await PackingListPreset.findById(id);

      if (!packingListPreset) {
        return response.status(404).json({ status: `Not found` });
      }

      response.status(200).json(packingListPreset);
    } catch (error) {
      response.status(500).json({ status: `Server error` });
    }
  }

  if (request.method === "PATCH") {
    try {
      const updatedPackingListPreset =
        await PackingListPreset.findByIdAndUpdate(
          id,
          { $set: request.body },
          { new: true }
        );

      if (!updatedPackingListPreset) {
        return response
          .status(404)
          .json({ status: `Packing List Preset not found` });
      }

      response
        .status(200)
        .json({
          status: `Packing List Preset updated`,
          updatedPackingListPreset,
        });
    } catch (error) {
      response.status(500).json({ status: `Server error` });
    }
  }

  if (request.method === "DELETE") {
    await PackingListPreset.findByIdAndDelete(id);

    response
      .status(200)
      .json({ status: `Packing List Preset successfully deleted.` });
  }
}
