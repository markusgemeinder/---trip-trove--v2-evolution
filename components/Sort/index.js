// components/Sort/index.js

import React, { useState } from "react";
import styled from "styled-components";

const SortSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 0.4rem;
  gap: 0.6rem;

  @media (min-width: 600px) {
    margin-top: 2rem;
    gap: 0.8rem;
  }
`;

const StyledSortSelectLabel = styled.label`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
  color: var(--color-form-label);
`;

const StyledSortSelect = styled.select`
  width: auto;
  padding: 0.3rem;
  background-color: var(--color-sort-selector);
  border: 2px solid var(--color-sort-selector-border);
  border-radius: 8px;
  font-family: var(--font-family);
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 600px) {
    padding: 0.5rem;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border-color: var(--color-sort-selector-focus);
  }
`;

export default function Sort({ data, onChange }) {
  const [sortMethod, setSortMethod] = useState("default");

  const sortTrips = (method) => {
    switch (method) {
      case "startDateAsc":
        return [...data].sort((a, b) => new Date(a.start) - new Date(b.start));
      case "startDateDesc":
        return [...data].sort((a, b) => new Date(b.start) - new Date(a.start));
      case "durationAsc":
        return [...data].sort(
          (a, b) =>
            new Date(a.end) -
            new Date(a.start) -
            (new Date(b.end) - new Date(b.start))
        );
      case "durationDesc":
        return [...data].sort(
          (a, b) =>
            new Date(b.end) -
            new Date(b.start) -
            (new Date(a.end) - new Date(a.start))
        );
      case "destinationAsc":
        return [...data].sort((a, b) =>
          a.destination.localeCompare(b.destination)
        );
      case "destinationDesc":
        return [...data].sort((a, b) =>
          b.destination.localeCompare(a.destination)
        );
      case "createdAtAsc":
        return [...data].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "createdAtDesc":
        return [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "updatedAtAsc":
        return [...data].sort(
          (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
        );
      case "updatedAtDesc":
        return [...data].sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );

      default:
        return [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }
  };

  const handleSortChange = (event) => {
    const method = event.target.value;
    setSortMethod(method);
    const sortedData = sortTrips(method);
    onChange(sortedData);
  };

  return (
    <SortSelectContainer>
      <StyledSortSelectLabel htmlFor="sortSelect">
        Sort Trips:
      </StyledSortSelectLabel>
      <StyledSortSelect onChange={handleSortChange}>
        <option value="">Select a Sort Method...</option>
        <hr />
        <option value="startDateAsc">
          Start Date: Earliest &#8593; Latest &#8595;
        </option>
        <option value="startDateDesc">
          Start Date: Latest &#8593; Earliest &#8595;
        </option>
        <hr />
        <option value="destinationAsc">Destination: A &#8593; Z &#8595;</option>
        <option value="destinationDesc">
          Destination: Z &#8593; A &#8595;
        </option>
        <hr />
        <option value="durationAsc">
          Duration: Shortest &#8593; Longest &#8595;
        </option>
        <option value="durationDesc">
          Duration: Longest &#8593; Shortest &#8595;
        </option>
        <hr />
        <option value="createdAtDesc">
          Create Date: Newest &#8593; Oldest &#8595;
        </option>
        <option value="createdAtAsc">
          Create Date: Oldest &#8593; Newest &#8595;
        </option>
        <hr />
        <option value="updatedAtDesc">
          Last Updated: Newest &#8593; Oldest &#8595;
        </option>
        <option value="updatedAtAsc">
          Last Updated: Oldest &#8593; Newest &#8595;
        </option>
      </StyledSortSelect>
    </SortSelectContainer>
  );
}
