import { useState, useEffect } from "react";
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
} from "@/components/ImageUpload/ImageUpload.styled";
import { StyledTextButtonMediumSize } from "@/components/Button/TextButton";

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

export default function ImageUpload({ imageLinkExists, onDeleteImageLink }) {
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [uploadInProgress, setUploadInProgress] = useState(false);

  useEffect(() => {
    if (imageLinkExists && previewImageUrl === null) {
      // Set preview image URL only once when imageLinkExists changes to true
      setPreviewImageUrl(imageLinkExists);
    }
  }, [imageLinkExists, previewImageUrl]);

  async function handleImageSelection(event) {
    const file = event.target.files[0];
    if (file) {
      setUploadInProgress(true);
      try {
        const uploadedImage = await uploadImage(file);
        setPreviewImageUrl(uploadedImage.url);
        setUploadInProgress(false);
      } catch (error) {
        console.log(error);
        alert("Error uploading image");
        setUploadInProgress(false);
      }
    }
  }

  function handleDeleteImage() {
    onDeleteImageLink();
    setPreviewImageUrl(null);
  }

  return (
    <>
      <UploadBox visible={!previewImageUrl}>
        <UploadArea>
          <UploadIcon />
          {!previewImageUrl && !uploadInProgress && (
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
          {!previewImageUrl && uploadInProgress && (
            <>
              <UploadHeadline>Upload in progress...</UploadHeadline>
            </>
          )}
        </UploadArea>
      </UploadBox>
      {previewImageUrl && (
        <PreviewBox visible={previewImageUrl || uploadInProgress}>
          <PreviewArea>
            <PreviewImage
              src={previewImageUrl}
              alt="Preview"
              width={160}
              height={160}
              layout="responsive"
              objectFit="contain"
            />
            {!uploadInProgress && (
              <StyledTextButtonMediumSize
                type="button"
                onClick={handleDeleteImage}
              >
                Delete
              </StyledTextButtonMediumSize>
            )}
          </PreviewArea>
        </PreviewBox>
      )}
    </>
  );
}
