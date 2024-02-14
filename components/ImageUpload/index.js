import { useState, useEffect } from "react";
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
import toast from "react-hot-toast";
import { ToastMessage } from "@/components/ToastMessage";

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

export default function ImageUpload(image) {
  const [imageLinkExists, setImageLinkExists] = useState(image?.url);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [previewImageWidth, setPreviewImageWidth] = useState(null);
  const [previewImageHeight, setPreviewImageHeight] = useState(null);
  const [uploadInProgress, setUploadInProgress] = useState(false);

  useEffect(() => {
    if (imageLinkExists && previewImageUrl === null) {
      // Set preview image URL only once when imageLinkExists changes to true
      setPreviewImageUrl(imageLinkExists);
      setPreviewImageWidth(image?.width);
      setPreviewImageHeight(image?.height);
    }
  }, [imageLinkExists, previewImageUrl]);

  async function handleImageSelection(event) {
    const file = event.target.files[0];
    if (file) {
      setUploadInProgress(true);
      try {
        const uploadedImage = await uploadImage(file);
        setPreviewImageUrl(uploadedImage.url);
        setPreviewImageWidth(uploadedImage.width);
        setPreviewImageHeight(uploadedImage.height);
        setUploadInProgress(false);
        await console.log(previewImageUrl);
      } catch (error) {
        console.log(error);
        alert("Error uploading image");
        setUploadInProgress(false);
      }
    }
  }

  function handleDeleteImage() {
    toast.dismiss();

    toast(
      <ToastMessage
        message="Are you sure to delete image link?"
        textConfirmButton="Yes, delete please."
        messageAfterConfirm="Ok, image link deleted."
        textCancelButton="No, don&rsquo;t delete!"
        messageAfterCancel="Ok, image link not deleted."
        onConfirm={() => {
          console.log("Delete button CONFIRM clicked!");
          setPreviewImageUrl(null);
          // If you need to perform additional actions, uncomment and modify the following lines:
          // setHandoverData((prevData) => ({
          //   ...prevData,
          //   image: {
          //     width: null,
          //     height: null,
          //     url: "",
          //   },
          // }));
          // setFormDisabled(false);
          // setHasChanges(true);
        }}
        onCancel={() => {
          console.log("Delete button CANCEL clicked!");
          // If you need to perform additional actions, uncomment and modify the following lines:
          // setFormDisabled(false);
          // setHasChanges(false);
        }}
      />,
      { duration: Infinity }
    );
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
        <PreviewBox visible={previewImageUrl && !uploadInProgress}>
          <PreviewArea>
            <PreviewImage
              src={previewImageUrl}
              alt="Preview"
              width={previewImageWidth}
              height={previewImageHeight}
              style={{
                width: previewImageWidth ? "auto" : "100%",
                height: previewImageHeight ? "auto" : "100%",
                maxWidth:
                  previewImageWidth > previewImageHeight ? "240px" : "none",
                maxHeight:
                  previewImageHeight > previewImageWidth ? "240px" : "none",
              }}
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
