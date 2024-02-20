import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import SortSelect from "@/components/SortSelect";

const StyledCardList = styled.ul`
  margin: 1.8rem auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
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
          <Card trip={trip} key={trip._id} />
        ))}
      </StyledCardList>
    </>
  );
}
