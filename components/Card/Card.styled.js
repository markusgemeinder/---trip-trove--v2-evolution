import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const CardListContainer = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

export const CardList = styled.li`
  margin: 0.6rem 0;
  list-style: none;

  @media (min-width: 600px) {
    margin: 0.8rem 0;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.2rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 360px;
  padding: 0.2rem 1rem;
  margin-bottom: 0.1rem;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;

  @media (min-width: 600px) {
    width: 480px;
    padding: 0.4rem 1.2rem;
  }
`;

export const StyledBadge = styled.div`
  margin: 0;
  padding: 0.8rem;
  width: 100%;
  border-radius: 6px;
  background-color: var(--color-badge);
  gap: 8px;
  margin-top: 0.3rem;

  &:last-child {
    margin-bottom: 0.8rem;
  }
`;

export const StyledBadgeOnBadge = styled.div`
  background-color: var(--color-badge-on-badge);
  border-radius: 4px;
  padding: 0.5rem;
  align-self: flex-start;
  height: 100%;

  @media (min-width: 600px) {
    border-radius: 8px;
    padding: 0.7rem;
  }
`;

export const CardImage = styled(Image)`
  margin: 0;
  padding: 0;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  align-self: center;
`;

export const CardImageWithLink = styled(CardImage)`
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const CardLink = styled(Link)`
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

export const CardTitle = styled.h2`
  margin: 0.8rem;
  padding-top: 0.4rem;
  text-align: center;
  align-self: center;
  color: var(--color-card-title);
  font-size: 1.6rem;

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const CardText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: var(--color-card-text);

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

export const CardTextHighlight = styled.p``;

export const CardTextCallToAction = styled(CardText)`
  margin: 0.6rem;
  padding: 0;
  align-self: center;
  color: var(--color-card-text-call-to-action);
`;

export const CardLabel = styled.p``;

export const CardLabelSub = styled.p``;

export const DetailsLabel = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 0.2rem;
  color: var(--color-badge-label-dark);
  font-size: 0.6rem;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const PackListContainer = styled.ul`
  margin: auto;
  padding: 0;
`;

export const PackList = styled.li`
  display: grid;
  grid-template-columns: 1.1fr 5.6fr 1.4fr;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  margin-top: 6px;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 0.8fr 6fr 1.2fr;
  }
`;

export const PackListLabelContainer = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 5.6fr 1.4fr;
  justify-content: center;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;

  @media (min-width: 600px) {
    grid-template-columns: 0.8fr 6fr 1.2fr;
  }
`;

export const PackListLabelCentered = styled.p`
  justify-self: center;
  font-size: 0.6rem;
  color: var(--color-badge-label);
  padding: 0;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const PackListLabelLeft = styled(PackListLabelCentered)`
  justify-self: flex-start;
  padding-left: 14px;
`;

export const StyledCheckBox = styled.input`
  width: 20px;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const PackListItemName = styled(CardText)`
  word-break: break-all;
`;

export const PackListItemQuantity = styled(CardText)`
  text-align: center;
`;
