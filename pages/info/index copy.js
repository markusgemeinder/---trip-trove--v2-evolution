import { useState } from "react";
import styled from "styled-components";
import Tile from "@/components/Tile";
import Popup, {
  PopupHeadline,
  PopupSubline,
  PopupText,
  PopupLink,
} from "@/components/Popup/Popup.styled";

const TileContainer = styled.nav`
  padding: 0;
  margin: 0.2rem auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  gap: 10px;

  @media (min-width: 768px) and (min-height: 768px) {
    gap: 20px;
  }
`;

const PopupWrapper = styled.div`
  /* Add overflow-y to ensure content is scrollable */
  overflow-y: auto;
  /* Add max-height to limit Popup height if needed */
  max-height: 80vh; /* Adjust as needed */
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 100%; /* Position the Popup below the Tiles */
  left: 50%; /* Center the Popup horizontally */
  transform: translateX(-50%);
  z-index: 999; /* Ensure Popup appears above other elements */
`;

export default function InfoPage() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popup) => {
    setActivePopup(popup);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const popupContent = {
    project: (
      <>
        <PopupHeadline>Das Projekt</PopupHeadline>
        <PopupText>
          Hi! Was Sie hier sehen ist "TripTrove" (Version 2). Eine
          Reise-Planungs-App, die in ihrer ersten Version am 9.2.2024 als
          Abschlussprojekt des "neue fische" Web Developer Bootcamps präsentiert
          wurde.
        </PopupText>
        <PopupSubline>Version 1</PopupSubline>
        <PopupText>
          Version 1 entstand in einer 4-wöchigen Gruppenarbeit (Team bestehend
          aus Aika Akymbaeva, Uwe Bury, Felix Jentsch, Markus Gemeinder) und
          zeichnet sich durch seine komplexe Formularfunktionalität aus.
        </PopupText>
        <PopupLink
          href="https://trip-trove-v1-neue-fische-capstone-finale-20240209.vercel.app/"
          target="_blank"
        >
          "TripTrove" (Version 1)
        </PopupLink>
        <PopupLink
          href="https://github.com/markusgemeinder/---trip-trove--v1-neue-fische-capstone-finale-20240209"
          target="_blank"
        >
          Code GitHub (Version 1)
        </PopupLink>
        <PopupSubline>Version 2</PopupSubline>
        <PopupText>
          Version 2 ist eine individuelle Weiterentwicklung von Markus Gemeinder
          und beinhaltet über Version 1 hinaus u.a. folgende Features:
        </PopupText>
        <PopupText>
          &#x25B6;&nbsp;Responsive Design mit Sandwich Menu
          &nbsp;&#x25B6;&nbsp;Optimiertes UX/UI Design &nbsp;&#x25B6;&nbsp;
          Packing List PresetsDatenbankanbindung)&nbsp;&#x25B6;&nbsp; Packing
          List Checkboxen (User kann bereits gepackte Gegenstände abhaken, mit
          direkter Datenbankanbindung) &nbsp;&#x25B6;&nbsp;Drag & Drop Image
          Upload (Cloudinary) &nbsp;&#x25B6;&nbsp;Page Exit Szenario (User
          erhält beim Verlassen der Seite Warnhinweis, falls Daten nicht
          gespeichert wurden) &nbsp;&#x25B6;&nbsp;Suchfunktion (Echtzeitsuche)
          &nbsp;&#x25B6;&nbsp;Lade- und Error-Animation
        </PopupText>
        <PopupLink
          href="https://github.com/markusgemeinder/---trip-trove--v2-evolution"
          target="_blank"
        >
          Code GitHub (Version 2)
        </PopupLink>
      </>
    ),
    neuefische: <>{/* Content for the "neuefische" popup */}</>,
    techstack: <>{/* Content for the "techstack" popup */}</>,
    contact: <>{/* Content for the "contact" popup */}</>,
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

      <PopupWrapper>
        <PopupContainer>
          <Popup
            show={activePopup !== null}
            onClose={closePopup}
            content={popupContent[activePopup]}
          />
        </PopupContainer>
      </PopupWrapper>
    </>
  );
}
