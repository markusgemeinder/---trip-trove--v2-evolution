import dbConnect from "@/db/connect";
import Preset from "@/db/models/Presets";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).json({ status: `Invalid ID` });
  }

  if (request.method === "GET") {
    try {
      const preset = await Preset.findById(id);

      if (!preset) {
        return response.status(404).json({ status: `Not found` });
      }

      response.status(200).json(preset);
    } catch (error) {
      response.status(500).json({ status: `Server error` });
    }
  }

  if (request.method === "PATCH") {
    try {
      const updatedPreset = await Preset.findByIdAndUpdate(
        id,
        { $set: request.body },
        { new: true }
      );

      if (!updatedPreset) {
        return response.status(404).json({ status: `Preset not found` });
      }

      response.status(200).json({
        status: `Preset updated`,
        updatedPreset,
      });
    } catch (error) {
      response.status(500).json({ status: `Server error` });
    }
  }

  if (request.method === "DELETE") {
    await Preset.findByIdAndDelete(id);

    response.status(200).json({ status: `Preset successfully deleted.` });
  }
}
