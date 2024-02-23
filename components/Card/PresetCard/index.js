import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledCard = styled.li`
  display: flex;
  flex-flow: column wrap;
  gap: 0.1rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 300px;
  padding: 0.2rem 1.2rem;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const StyledLink = styled(Link)`
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

const CardTitle = styled.h2`
  margin: 0.8rem;
  padding: 0;
  text-align: center;
  align-self: center;
  color: var(--color-card-title);
  font-size: 1.6rem;

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }
`;

const ItemContainer = styled.ul``;

const ItemList = styled.li``;

export default function PresetCard({ preset }) {
  return (
    // <StyledLink href={`presets/${preset._id}`}>
    <StyledCard>
      <CardTitle>{preset.presetName}</CardTitle>
      <ItemContainer>
        {preset.items.map((item) => (
          <ItemList key={item._id}>
            {item.itemName}: {item.itemQuantity}
          </ItemList>
        ))}
      </ItemContainer>
    </StyledCard>
    // </StyledLink>
  );
}
