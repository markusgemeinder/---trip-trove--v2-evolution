import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const InfoCard = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.1rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 360px;
  padding: 0.2rem 0.6rem;
  margin-top: 0.6rem;
  margin-bottom: 0.1rem;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;

  @media (min-width: 768px) and (min-height: 768px) {
    width: 480px;
    padding: 0.4rem 0.8rem;
  }
`;

export const InfoCardHeader = styled.div`
  display: grid;
  margin: 0.6rem auto;
  padding: 0;
  margin-top: 1.2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "nothing avatar pagination";
  /* justify-content: center; */
  align-items: flex-start;
`;

export const InfoAvatar = styled(Image)`
  grid-area: avatar;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  align-self: flex-start;

  @media (min-width: 768px) and (min-height: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const InfoPagination = styled.div`
  grid-area: pagination;
  justify-self: flex-end;
  align-self: flex-start;
  padding: 8px;
  border-radius: 12px;
  background-color: var(--color-info-pagination-background);
  color: var(--color-info-pagination-text);
  text-align: center;
  font-size: 0.8rem;
`;

export const InfoTitle = styled.h2`
  margin: 0.6rem;
  text-align: center;
  align-self: center;
  color: var(--color-info-title);
  font-size: 1.6rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 2rem;
  }
`;

export const InfoHeadline = styled.h3`
  margin-top: 0.8rem;
  margin-bottom: 0.1rem;
  padding: 0.4rem 0.8rem;
  text-align: center;
  align-self: center;
  border-bottom: 1px solid var(--color-info-headline-border);
  /* border-radius: 8px; */
  /* background-color: var(--color-info-headline-background); */
  color: var(--color-info-headline);
  font-size: 1.2rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.6rem;
  }
`;

export const InfoLinkContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 0.6rem;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
`;

export const InfoLink = styled(Link)`
  margin: 0 auto;
  background-color: var(--color-button);
  border: 2px solid var(--color-button-border);
  width: 80%;
  padding: 0.6rem;
  border-radius: 30px;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  &:hover,
  &:link,
  &:visited {
    color: inherit;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.2rem;
  }
`;

export const InfoImageContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
`;

export const InfoImage = styled(Image)`
  margin: 0;
  padding: 0;
  border-radius: 6px;
  border: 1px solid var(--color-border);

  width: 100%;
  height: 100%;
  align-self: center;
`;

export const InfoImageWithLink = styled(InfoImage)`
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const InfoText = styled.p`
  margin: 0.4rem 1.6rem;
  text-align: center;
  color: var(--color-text);
  font-size: 1.05rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.25rem;
  }
`;

export const InfoListContainer = styled.ul`
  margin: 0;
  padding: 0 2.4rem 0 4.8rem;
  list-style-type: none;

  @media (min-width: 768px) and (min-height: 768px) {
    margin: 0.8rem 0;
  }
`;

export const InfoList = styled.li`
  margin: 0.6rem 0;
  font-size: 1rem;
  line-height: 1.1;
  position: relative;

  &:before {
    content: "\u25B7";
    position: absolute;
    left: -1.6rem;
    color: var(--color-info-list-bullet);
    font-weight: bold;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    margin: 0.8rem 0;
    font-size: 1.2rem;
  }
`;
