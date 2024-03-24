import React, { useState } from "react";

import {
  InfoCard,
  InfoCardHeader,
  InfoPagination,
  InfoAvatar,
  InfoTitle,
  InfoImageContainer,
  InfoImageWithLink,
  InfoText,
  InfoLinkContainer,
  InfoLink,
} from "@/components/Info/Info.styled";

export default function InfoNeueFischeDE({ currentCard, totalCards }) {
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
      <InfoCardHeader>
        <InfoPagination>
          {currentCard} / {totalCards}
        </InfoPagination>
        <InfoAvatar
          src="/images/logo_neue-fische.png"
          width={100}
          height={100}
          alt="neue fische"
        ></InfoAvatar>
      </InfoCardHeader>
      <InfoTitle>Web Development Bootcamp</InfoTitle>
      <InfoText>
        Erfolgreich teilgenommen (3 Monate Vollzeit) und abgeschlossen im
        Februar 2024.
      </InfoText>
      <InfoImageContainer>
        <InfoImageWithLink
          src="/images/neue_fische_certificate_1.png"
          width={1800}
          height={1272}
          alt="Certificate (front)"
          onClick={() =>
            handleImageClick("/images/neue_fische_certificate_1.png")
          }
        ></InfoImageWithLink>
        <InfoImageWithLink
          src="/images/neue_fische_certificate_2.png"
          width={1800}
          height={1272}
          alt="Certificate (back)"
          onClick={() =>
            handleImageClick("/images/neue_fische_certificate_2.png")
          }
        ></InfoImageWithLink>
      </InfoImageContainer>

      {isImageExpanded && (
        <>
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
        </>
      )}
      <InfoLinkContainer>
        <InfoLink href="https://neuefische.de" target="_blank">
          neue fische Website
        </InfoLink>
      </InfoLinkContainer>
    </InfoCard>
  );
}
