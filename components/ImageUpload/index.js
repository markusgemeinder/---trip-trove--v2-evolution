import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UploadIcon from "@/components/ImageUpload/UploadIcon/";
import {
  UploadBox,
  UploadArea,
  UploadHeadline,
  UploadText,
  UploadInput,
  PreviewBox,
  PreviewArea,
  PreviewImage,
  PreviewLoadingText,
} from "@/components/ImageUpload/ImageUpload.styled";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = "trip-trove";

async function uploadImage(file) {
  const formData = new FormData();
  const fileName = `${uuidv4()}.${file.name.split(".").pop()}`;
  formData.append("file", file, fileName);
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

const UploadComponent = ({ visible, onImageSelection }) => (
  <UploadBox visible={visible}>
    <UploadArea>
      <UploadIcon />
      <UploadHeadline>{"Click or drag & drop to upload"}</UploadHeadline>
      <UploadText>Maximum file size 10MB</UploadText>
      <UploadInput
        id="image"
        name="image"
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={onImageSelection}
      />
    </UploadArea>
  </UploadBox>
);

const PreviewComponent = ({ visible, previewImageUrl, image }) => (
  <PreviewBox visible={visible}>
    {previewImageUrl && (
      <PreviewArea>
        <PreviewImage
          src={previewImageUrl}
          alt="Preview"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
        <PreviewLoadingText>Upload in Progress...</PreviewLoadingText>
      </PreviewArea>
    )}
  </PreviewBox>
);

export default function ImageUpload() {
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [uploadBoxVisible, setUploadBoxVisible] = useState(true);
  const [previewBoxVisible, setPreviewBoxVisible] = useState(false);
  const [image, setImage] = useState(null); // Add state to store uploaded image data

  async function handleImageSelection(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setPreviewBoxVisible(true);
      try {
        const uploadedImage = await uploadImage(file); // Store uploaded image data
        setImage(uploadedImage); // Set the uploaded image data in the state
        console.log("Uploaded Image URL:", uploadedImage.url);
      } catch (error) {
        console.log(error);
        alert("Error uploading image");
      }
    }
  }

  return (
    <>
      <UploadComponent
        visible={!previewImageUrl}
        onImageSelection={handleImageSelection}
      />
      <PreviewComponent
        visible={previewBoxVisible}
        previewImageUrl={previewImageUrl}
        image={image} // Pass the uploaded image data to PreviewComponent
      />
    </>
  );
}
