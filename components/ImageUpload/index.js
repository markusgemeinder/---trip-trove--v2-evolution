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
  const { url, width, height } = await response.json();
  return { url, width, height };
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
