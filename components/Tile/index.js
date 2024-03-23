import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const TileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  &:link,
  &:visited {
    color: inherit;
  }
`;

const StyledTile = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 100px;
  padding-bottom: 0.4rem;
  margin: 0.1rem;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) and (min-height: 768px) {
    width: 160px;
    padding: 0.4rem 1.2rem;
  }
`;

const ActiveTile = styled(StyledTile)`
  background-color: var(--color-card-active);
`;

const TileImage = styled(Image)`
  margin: 0;
  padding: 0;
  margin-top: 0.8rem;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  align-self: center;

  @media (min-width: 768px) and (min-height: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const TileText = styled.p`
  margin: 0.4rem;
  padding-top: 0.2rem;
  text-align: center;
  align-self: center;
  color: var(--color-card-title);
  font-size: 1rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.2rem;
  }
`;

export default function Tile({ src, text, onClick, isActive }) {
  const TileComponent = isActive ? ActiveTile : StyledTile;
  return (
    <>
      <TileComponent onClick={onClick}>
        <TileImage src={src} width={100} height={100} alt={text} />
        <TileText>{text}</TileText>
      </TileComponent>
    </>
  );
}
