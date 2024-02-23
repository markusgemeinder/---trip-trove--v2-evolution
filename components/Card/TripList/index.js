import React, { useState } from "react";
import styled from "styled-components";
import TripCard from "@/components/Card/TripCard";
import SortTrips from "@/components/SortTrips";

const StyledCardList = styled.ul`
  margin: 1.8rem auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

export default function TripList({ data }) {
  const [sortedData, setSortedData] = useState(
    [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  );

  function handleSortChange(sortedData) {
    setSortedData(sortedData);
  }

  return (
    <>
      <SortTrips data={data} onChange={handleSortChange} />
      <StyledCardList>
        {sortedData.map((trip) => (
          <TripCard trip={trip} key={trip._id} />
        ))}
      </StyledCardList>
    </>
  );
}
