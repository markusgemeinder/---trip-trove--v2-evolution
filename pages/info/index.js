import styled from "styled-components";
import Tile from "@/components/Tile";

export const TileContainer = styled.div`
  padding: 0;
  margin: 0.2rem auto;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 10px;
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
