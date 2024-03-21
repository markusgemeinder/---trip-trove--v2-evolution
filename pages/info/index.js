import styled from "styled-components";
import Tile from "@/components/Tile";

const TileContainer = styled.div`
  padding: 0;
  margin: 0.2rem auto;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 10px;
`;

const StyledPopUp = styled.div`
  display: flex;
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

export default function InfoPage() {
  return (
    <TileContainer>
      <Tile
        href={"/info/project"}
        src={"/images/logo_triptrove_heart.png"}
        text={"Project"}
      />
      <Tile
        href={"/info/neuefische"}
        src={"/images/logo_neue-fische.png"}
        text={"neue fische"}
      />
      <Tile
        href={"/info/techstack"}
        src={"/images/logo_next-js.png"}
        text={"Techstack"}
      />
      <Tile
        href={"/info/contact"}
        src={"/images/gmndr-pic.jpg"}
        text={"Contact"}
      />
    </TileContainer>
  );
}

export function ProjectPopUp() {
  return (
    <>
      <StyledPopUp>
        <h2>Hello (Project)</h2>
      </StyledPopUp>
    </>
  );
}

export function NeuefischePopUp() {
  return (
    <>
      <StyledPopUp>
        <h2>Hello (neue fische GmbH)</h2>
      </StyledPopUp>
    </>
  );
}

export function TechstackPopUp() {
  return (
    <>
      <StyledPopUp>
        <h2>Hello (Techstack)</h2>
      </StyledPopUp>
    </>
  );
}

export function ContactPopUp() {
  return (
    <>
      <StyledPopUp>
        <h2>Hello (Contact)</h2>
      </StyledPopUp>
    </>
  );
}
