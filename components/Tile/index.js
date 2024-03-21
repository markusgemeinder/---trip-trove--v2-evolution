import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const TileLink = styled(Link)`
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

export const StyledTile = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 160px;
  padding-bottom: 0.4rem;
  margin: 0.2rem;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) and (min-height: 768px) {
    width: 240px;
    padding: 0.4rem 1.2rem;
  }
`;

export const TileImage = styled(Image)`
  margin: 0;
  padding: 0;
  margin-top: 1.2rem;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  align-self: center;
`;

export const TileText = styled.h2`
  margin: 0.4rem;
  padding-top: 0.2rem;
  text-align: center;
  align-self: center;
  color: var(--color-card-title);
  font-size: 1.2rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.4rem;
  }
`;

export default function Tile({ href, src, text }) {
  return (
    <>
      <TileLink href={href}>
        <StyledTile>
          <TileImage src={src} width={120} height={120} alt={text} />
          <TileText>{text}</TileText>
        </StyledTile>
      </TileLink>
    </>
  );
}
