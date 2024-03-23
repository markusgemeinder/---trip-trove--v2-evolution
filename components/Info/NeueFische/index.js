//

import React, { useState } from "react";

import {
  InfoCard,
  InfoAvatar,
  InfoTitle,
  InfoHeadline,
  InfoImage,
  InfoImageWithLink,
  InfoText,
  InfoListContainer,
  InfoList,
  InfoLink,
} from "@/components/Info/Info.styled";

export default function InfoNeueFische({ currentCard, totalCards }) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImageSrc, setExpandedImageSrc] = useState("");

  function handleImageClick(src) {
    setIsImageExpanded(true);
    setExpandedImageSrc(src);
  }

  function handleCloseImage() {
    setIsImageExpanded(false);
    setExpandedImageSrc("");
  }

  return (
    <InfoCard>
      <InfoText>
        Page {currentCard} of {totalCards}
      </InfoText>
      <InfoAvatar
        src="/images/logo_neue-fische.png"
        width={100}
        height={100}
        alt="Project"
      ></InfoAvatar>
      <InfoTitle>Web Development Bootcamp</InfoTitle>
      <InfoHeadline>Bootcamp</InfoHeadline>
      <InfoLink href="https://neuefische.de" target="_blank">
        neue fische | School and Pool for Digital Talent
      </InfoLink>
      <InfoText>
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
        dictum felis eu pede mollis pretium.
      </InfoText>

      <div>
        <InfoImage
          src="/images/neue_fische_certificate_1.png"
          width={1800}
          height={1272}
          alt="Certificate (front)"
          onClick={() =>
            handleImageClick("/images/neue_fische_certificate_1.png")
          }
        ></InfoImage>
        <InfoImage
          src="/images/neue_fische_certificate_2.png"
          width={1800}
          height={1272}
          alt="Certificate (back)"
          onClick={() =>
            handleImageClick("/images/neue_fische_certificate_2.png")
          }
        ></InfoImage>
      </div>

      {isImageExpanded && (
        <div>
          <div
            onClick={handleCloseImage}
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <img
            src={expandedImageSrc}
            alt="Expanded Image"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "80vh",
              maxWidth: "80vw",
              zIndex: 9999,
            }}
          />
        </div>
      )}
    </InfoCard>
  );
}
