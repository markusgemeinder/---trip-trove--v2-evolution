import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const InfoCardContainer = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 10px;
`;

export const InfoLink = styled(Link)`
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

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:link,
  &:visited {
    color: inherit;
  }
`;

export const StyledInfoCard = styled.div`
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

  @media (min-width: 768px) and (min-height: 768px) {
    width: 240px;
    padding: 0.4rem 1.2rem;
  }
`;

export const StyledInfoCardWithTransition = styled(StyledInfoCard)`
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const InfoImage = styled(Image)`
  margin: 0;
  padding: 0;
  margin-top: 1.2rem;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  align-self: center;
`;

export const InfoImageWithLink = styled(InfoImage)`
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const InfoTitle = styled.h2`
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

export const InfoText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: var(--color-card-text);

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.1rem;
  }
`;

export const InfoTextCallToAction = styled(InfoText)`
  margin: 0.6rem;
  padding: 0;
  align-self: center;
  color: var(--color-card-text-call-to-action);
`;
