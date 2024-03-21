import React, { useState } from "react";
import styled from "styled-components";
import Tile from "@/components/Tile";

const TileContainer = styled.div`
  padding: 0;
  margin: 0.2rem auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  gap: 10px;
`;

const StyledPopUp = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-flow: column wrap;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 360px;
  padding-bottom: 0.4rem;
  margin: 0.2rem;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) and (min-height: 768px) {
    width: 480px;
    padding: 0.4rem 1.2rem;
  }
`;

const CloseButton = styled.span`
  align-self: flex-end;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export default function InfoPage() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popup) => {
    setActivePopup(popup);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <TileContainer>
        <Tile
          onClick={() => openPopup("project")}
          src={"/images/logo_triptrove_heart.png"}
          text={"Project"}
          isActive={activePopup === "project"}
        />
        <Tile
          onClick={() => openPopup("neuefische")}
          src={"/images/logo_neue-fische.png"}
          text={"neue fische"}
          isActive={activePopup === "neuefische"}
        />
        <Tile
          onClick={() => openPopup("techstack")}
          src={"/images/logo_techstack.png"}
          text={"Techstack"}
          isActive={activePopup === "techstack"}
        />
        <Tile
          onClick={() => openPopup("contact")}
          src={"/images/gmndr-pic.jpg"}
          text={"Contact"}
          isActive={activePopup === "contact"}
        />
      </TileContainer>

      <StyledPopUp show={activePopup === "project"}>
        <CloseButton onClick={closePopup}>X</CloseButton>
        <h2>Hello (Project)</h2>
      </StyledPopUp>

      <StyledPopUp show={activePopup === "neuefische"}>
        <CloseButton onClick={closePopup}>X</CloseButton>
        <h2>Hello (neue fische GmbH)</h2>
      </StyledPopUp>

      <StyledPopUp show={activePopup === "techstack"}>
        <CloseButton onClick={closePopup}>X</CloseButton>
        <h2>Hello (Techstack)</h2>
      </StyledPopUp>

      <StyledPopUp show={activePopup === "contact"}>
        <CloseButton onClick={closePopup}>X</CloseButton>
        <h2>Hello (Contact)</h2>
      </StyledPopUp>
    </>
  );
}
