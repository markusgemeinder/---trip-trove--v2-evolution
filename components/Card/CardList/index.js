import React, { useState } from "react";
import styled from "styled-components";
import OverviewCard from "@/components/Card/OverviewCard";
import Sort from "@/components/Sort";

const StyledCardList = styled.ul`
  margin: 1.8rem auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

export default function CardList({ data }) {
  const [sortedData, setSortedData] = useState(
    [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  );

  function handleSortChange(sortedData) {
    setSortedData(sortedData);
  }

  return (
    <>
      <Sort data={data} onChange={handleSortChange} />
      <StyledCardList>
        {sortedData.map((trip) => (
          <OverviewCard trip={trip} key={trip._id} />
        ))}
      </StyledCardList>
    </>
  );
}