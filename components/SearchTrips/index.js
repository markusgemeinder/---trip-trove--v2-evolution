import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid var(--color-sort-selector-border);
  border-radius: 8px;
  font-family: var(--font-family);
  font-size: 0.8rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-sort-selector-focus);
  }
`;

export default function SearchTrips({ data, onChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(event) {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredData = data.filter((trip) => {
      return (
        (trip.destination && trip.destination.toLowerCase().includes(value)) ||
        (trip.notes && trip.notes.toLowerCase().includes(value)) ||
        (trip.packingList &&
          trip.packingList.some(
            (item) =>
              (item.itemName && item.itemName.toLowerCase().includes(value)) ||
              (item.notes && item.notes.toLowerCase().includes(value))
          ))
      );
    });
    onChange(filteredData);
  }

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search trips..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </SearchBarContainer>
  );
}
