import React, { useState } from "react";
import TripCard from "@/components/Card/TripCard";
import { CardListContainer, CardList } from "@/components/Card/Card.styled";
import SortTrips from "@/components/SortTrips";

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
      <CardListContainer>
        {sortedData.map((trip) => (
          <CardList trip={trip} key={trip._id}>
            <TripCard trip={trip} />
          </CardList>
        ))}
      </CardListContainer>
    </>
  );
}
