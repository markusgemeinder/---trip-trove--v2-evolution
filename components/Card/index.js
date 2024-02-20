import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import TripDetailsBadge from "@/components/Badge/TripDetailsBadge";
import CreateDateBadge from "@/components/Badge/CreateDateBadge";

const StyledCard = styled.li`
  display: flex;
  flex-flow: column wrap;
  gap: 0.1rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-card-border);
  border-radius: 8px;
  width: 300px;
  padding: 0.2rem 1.2rem;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const CardDestination = styled.h2`
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

const CardImage = styled(Image)`
  margin: 0;
  padding: 0;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  align-self: center;
`;

const CardText = styled.p`
  margin: 0.6rem;
  padding: 0;
  align-self: center;
  color: var(--color-card-call-to-action);
`;

export default function Card({ trip }) {
  return (
    <StyledLink href={`trips/${trip._id}`}>
      <StyledCard>
        <CardDestination>{trip.destination}</CardDestination>
        <TripDetailsBadge startDate={trip.start} endDate={trip.end} />
        <CardImage
          src={
            trip.image.url !== ""
              ? trip.image.url
              : "/images/default.png?t=" + new Date().getTime()
          }
          width={300}
          height={300}
          alt={trip.destination}
        />
        <CreateDateBadge
          createdAt={trip.createdAt}
          updatedAt={trip.updatedAt}
        />
        <CardText>More Details</CardText>
      </StyledCard>
    </StyledLink>
  );
}
