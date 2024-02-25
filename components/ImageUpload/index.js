import { useState } from "react";
import UploadIcon from "@/components/ImageUpload/UploadIcon/";
import {
  UploadBox,
  UploadArea,
  UploadHeadline,
  UploadText,
  UploadInput,
} from "@/components/ImageUpload/ImageUpload.styled";
import LoadingAnimation from "@/components/Animation/LoadingAnimation";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = "trip-trove";

// ======================================

// const API_KEY = process.env.CLOUDINARY_API_KEY;
// const API_SECRET = process.env.CLOUDINARY_API_SECRET;

// function generateSHA1(data) {
//   const hash = crypto.createHash("sha1");
//   hash.update(data);
//   return hash.digest("hex");
// }

// function generateSignature(publicId, API_SECRET) {
//   const timestamp = new Date().getTime();
//   const signatureData = `public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`;
//   const signature = generateSHA1(signatureData);
//   return signature;
// }

// export async function deleteImage(CLOUD_NAME, API_KEY, API_SECRET, publicId) {
//   const timestamp = new Date().getTime();
//   const signature = generateSHA1(generateSignature(publicId, API_SECRET));

//   try {
//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`,
//       {
//         method: "DELETE",
//         public_id: publicId,
//         signature: signature,
//         api_key: API_KEY,
//         timestamp: timestamp,
//       }
//     );
//     console.error(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// ======================================

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

export default function ImageUpload({ onImageUpdate }) {
  const [uploadInProgress, setUploadInProgress] = useState(false);

  async function handleImageSelection(event) {
    const file = event.target.files[0];
    if (file) {
      setUploadInProgress(true);
      try {
        const { url, width, height, public_id } = await uploadImage(file);
        onImageUpdate(url, width, height, public_id);
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
            <UploadHeadline>Upload in progress</UploadHeadline>
            <LoadingAnimation />
          </>
        )}
      </UploadArea>
    </UploadBox>
  );
}
