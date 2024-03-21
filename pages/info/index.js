import { useState } from "react";
import styled from "styled-components";
import Tile from "@/components/Tile";
import Popup, { PopupText, Link } from "@/components/Popup";

const TileContainer = styled.div`
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

const PopupContainer = styled.div`
  position: relative;
  grid-column: span 4;
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
        <h3>Das Projekt</h3>
        <PopupText>
          Hi! Was Sie hier sehen ist "TripTrove" (Version 2) – eine
          Reise-Planungs-App, die in ihrer ersten Version als Abschlussprojekt
          des neue fische Web Developer Bootcamps am 9.2.2024 präsentiert wurde.
        </PopupText>
        <PopupText>
          Version 1 entstand im Teamwork (Aika Akymbaeva | Uwe Bury | Felix
          Jentsch | Markus Gemeinder) und zeichnet sich durch eine sehr komplexe
          Formularfunktionalität aus:
        </PopupText>
        <Link
          href="https://trip-trove-v1-neue-fische-capstone-finale-20240209.vercel.app/"
          target="_blank"
        >
          "TripTrove" (Version 1)
        </Link>
        <Link
          href="https://github.com/markusgemeinder/---trip-trove--v1-neue-fische-capstone-finale-20240209"
          target="_blank"
        >
          Code GitHub (Version 1)
        </Link>
        <PopupText>
          Version 2 ist eine individuelle Weiterentwicklung von Markus Gemeinder
          und beinhaltet über Version 1 hinaus u.a. folgende Features:
        </PopupText>
        <ul>
          <li>Responsive Design inklusive Burger Menu</li>
          <li>Optimiertes UX/UI Design</li>
          <li>
            Packing List Presets (durch User modifizierbar, Datenbankanbindung)
          </li>
          <li>
            Packing List Checkboxen (User kann bereits gepackte Gegenstände
            abhaken, mit direkter Datenbankanbindung)
          </li>
          <li>Drag & Drop Image Upload (Cloudinary)</li>
          <li>
            Page Exit Szenario (User erhält beim Verlassen der Seite
            Warnhinweis, falls Daten nicht gespeichert wurden)
          </li>
          <li>Suchfunktion (Echtzeitsuche)</li>
          <li>Lade- und Error-Animation</li>
        </ul>
        <Link
          href="https://github.com/markusgemeinder/---trip-trove--v2-evolution"
          target="_blank"
        >
          Code GitHub (Version 2)
        </Link>
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

      <PopupContainer>
        <Popup
          show={activePopup !== null}
          onClose={closePopup}
          content={popupContent[activePopup]}
        />
      </PopupContainer>
    </>
  );
}
