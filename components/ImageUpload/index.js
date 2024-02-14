import { useState } from "react";
import UploadIcon from "@/components/ImageUpload/UploadIcon/";
import {
  UploadBox,
  UploadArea,
  UploadHeadline,
  UploadText,
  UploadInput,
} from "@/components/ImageUpload/ImageUpload.styled";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = "trip-trove";

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const { url, width, height, public_id } = await response.json();
  return { url, width, height, public_id };
}

export async function deleteImage(publicId) {
  const formData = new FormData();
  formData.append("public_id", publicId);
  formData.append("upload_preset", UPLOAD_PRESET);
  try {
    // Log request parameters
    console.log("DELETE Request Parameters:", {
      public_id: publicId,
      upload_preset: UPLOAD_PRESET,
    });
    return;
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`,
      {
        method: "DELETE",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete image from Cloudinary");
    }
  } catch (error) {
    console.error(error);
    // Handle the error as needed
    throw error; // Re-throw the error to be handled in the calling component
  }
}

export default function ImageUpload({ onImageUpdate }) {
  const [uploadInProgress, setUploadInProgress] = useState(false);

  async function handleImageSelection(event) {
    const file = event.target.files[0];
    if (file) {
      setUploadInProgress(true);
      try {
        const { url, width, height } = await uploadImage(file);
        onImageUpdate(url, width, height);
      } catch (error) {
        console.error(error);
        alert("Error uploading image");
      } finally {
        setUploadInProgress(false);
      }
    }
  }

  return (
    <UploadBox visible={true}>
      <UploadArea>
        <UploadIcon />
        {!uploadInProgress && (
          <>
            <UploadHeadline>Click or drag & drop to upload</UploadHeadline>
            <UploadText>Maximum file size 10MB</UploadText>
            <UploadInput
              id="image"
              name="image"
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              onChange={handleImageSelection}
            />
          </>
        )}
        {uploadInProgress && (
          <>
            <UploadHeadline>Upload in progress...</UploadHeadline>
          </>
        )}
      </UploadArea>
    </UploadBox>
  );
}
