import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const CardListContainer = styled.ul`
  margin: 1.8rem auto;
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
  margin-top: 0.8rem;
  display: flex;
  flex-flow: column wrap;
  gap: 0.2rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 360px;
  padding: 0.2rem 1.2rem;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;

  @media (min-width: 600px) {
    width: 480px;
    margin-top: 2.6rem;
    padding: 1rem 2rem;
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

export const CardImage = styled(Image)`
  margin: 0;
  padding: 0;
  border-radius: 8px;
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

export const CardText = styled.p`
  margin: 0.6rem;
  padding: 0;
  align-self: center;
  color: var(--color-card-call-to-action);
`;

export const DetailsText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: var(--color-badge-text);

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

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
