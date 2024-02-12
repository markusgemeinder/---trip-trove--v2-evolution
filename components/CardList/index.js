import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

import SortSelect from "@/components/SortSelect";

import TripDetailsBadge from "@/components/Badge/TripDetailsBadge";
import CreateUpdateDateBadge from "@/components/Badge/CreateUpdateDateBadge";

const StyledCardList = styled.ul`
  margin: 1.8rem auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

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

export default function CardList() {
  const { data, error, isLoading } = useSWR("/api/trips", {
    fallbackData: [],
  });
  const [sortMethod, setSortMethod] = useState("default");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (data) {
      setSortedData(sortTrips(data, sortMethod));
    }
  }, [sortMethod, data]);

  const sortTrips = (trips, method) => {
    switch (method) {
      case "dateAsc":
        return [...trips].sort((a, b) => new Date(a.start) - new Date(b.start));
      case "dateDesc":
        return [...trips].sort((a, b) => new Date(b.start) - new Date(a.start));
      case "durationAsc":
        return [...trips].sort(
          (a, b) =>
            new Date(a.end) -
            new Date(a.start) -
            (new Date(b.end) - new Date(b.start))
        );
      case "durationDesc":
        return [...trips].sort(
          (a, b) =>
            new Date(b.end) -
            new Date(b.start) -
            (new Date(a.end) - new Date(a.start))
        );
      case "alphaAsc":
        return [...trips].sort((a, b) =>
          a.destination.localeCompare(b.destination)
        );
      case "alphaDesc":
        return [...trips].sort((a, b) =>
          b.destination.localeCompare(a.destination)
        );
      default:
        return [...trips].reverse();
    }
  };

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <SortSelect onChange={(event) => setSortMethod(event.target.value)} />
      <StyledCardList>
        {sortedData.map((trip) => (
          <StyledLink href={`trips/${trip._id}`} key={trip._id}>
            <StyledCard>
              <CardDestination>{trip.destination}</CardDestination>
              <TripDetailsBadge startDate={trip.start} endDate={trip.end} />
              <CardImage
                src={
                  trip.image.url !== ""
                    ? trip.image.url
                    : "/images/triptrove-default.png"
                }
                width={300}
                height={300}
                alt={trip.destination}
              />

              <CreateUpdateDateBadge
                createdAt={trip.createdAt}
                updatedAt={trip.updatedAt}
              />
              <CardText>More Details</CardText>
            </StyledCard>
          </StyledLink>
        ))}
      </StyledCardList>
    </>
  );
}
