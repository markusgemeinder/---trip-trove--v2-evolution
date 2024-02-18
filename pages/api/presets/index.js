import dbConnect from "@/db/connect";
import Preset from "@/db/models/Presets";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const presets = await Preset.find();
      response.status(200).json(presets);
    } else if (request.method === "POST") {
      const presetData = request.body;
      await Preset.create(presetData);
      response.status(201).json({ status: "Preset added" });
    } else {
      response.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: error.message });
  }
}
