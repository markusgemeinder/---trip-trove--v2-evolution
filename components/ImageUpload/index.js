import { useState, useEffect } from "react";
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
  console.log("url:", url);
  console.log("width:", width);
  console.log("height:", height);
  return { url, width, height };
}

export default function ImageUpload({ onImageUpdate }) {
  const [fetchedImageUrl, setFetchedImageUrl] = useState("");
  const [fetchedImageWidth, setFetchedImageWidth] = useState(null);
  const [fetchedImageHeight, setFetchedImageHeight] = useState(null);
  const [uploadInProgress, setUploadInProgress] = useState(false);

  // Use effect to update preview when image data changes
  // useEffect(() => {
  //   setFetchedImageUrl(image.url || null);
  //   setFetchedImageWidth(image.width || null);
  //   setFetchedImageHeight(image.height || null);
  // }, [image]);

  async function handleImageSelection(event) {
    const file = event.target.files[0];
    if (file) {
      setUploadInProgress(true);
      try {
        const uploadedImage = await uploadImage(file);
        setFetchedImageUrl(uploadedImage.url);
        setFetchedImageWidth(uploadedImage.width);
        setFetchedImageHeight(uploadedImage.height);
        onImageUpdate(fetchedImageUrl, fetchedImageWidth, fetchedImageHeight);
        setUploadInProgress(false);
      } catch (error) {
        console.log(error);
        alert("Error uploading image");
        setUploadInProgress(false);
      }
    }
  }

  return (
    <>
      <UploadBox visible={!fetchedImageUrl}>
        <UploadArea>
          <UploadIcon />
          {!fetchedImageUrl && !uploadInProgress && (
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
          {!fetchedImageUrl && uploadInProgress && (
            <>
              <UploadHeadline>Upload in progress...</UploadHeadline>
            </>
          )}
        </UploadArea>
      </UploadBox>
      {/* {fetchedImageUrl && (
        <PreviewBox visible={fetchedImageUrl && !uploadInProgress}>
          <PreviewArea>
            <PreviewImage
              src={fetchedImageUrl}
              alt="Preview"
              width={fetchedImageWidth}
              height={fetchedImageHeight}
              style={{
                width: fetchedImageWidth ? "auto" : "100%",
                height: fetchedImageHeight ? "auto" : "100%",
                maxWidth:
                  fetchedImageWidth > fetchedImageHeight ? "240px" : "none",
                maxHeight:
                  fetchedImageHeight > fetchedImageWidth ? "240px" : "none",
              }}
              priority={false}
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
      )} */}
    </>
  );
}
