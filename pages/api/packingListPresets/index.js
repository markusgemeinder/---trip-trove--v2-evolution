import dbConnect from "@/db/connect";
import PackingListPreset from "@/db/models/PackingListPresets";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const packingListPresets = await PackingListPreset.find();
      response.status(200).json(packingListPresets);
    } else if (request.method === "POST") {
      const packingListPresetData = request.body;
      await PackingListPreset.create(packingListPresetData);
      response.status(201).json({ status: "Packing List Preset added" });
    } else {
      response.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: error.message });
  }
}
