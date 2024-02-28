import React, { useState } from "react";
import styled from "styled-components";
import { StyledLabel } from "@/components//Form/Form.styled";

const SortSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0;
  gap: 0.8rem;

  @media (min-width: 768px) and (min-height: 768px) {
    margin: 0.2rem 0;
  }
`;

const StyledSortSelectLabel = styled(StyledLabel)`
  margin: 0;
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

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border-color: var(--color-sort-selector-focus);
  }
`;

export default function SortTrips({ data, onChange }) {
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
        <option value="">Please select...</option>
        <hr />
        <option value="startDateAsc">Start | Earliest &#8593;</option>
        <option value="startDateDesc">Start | Latest &#8593;</option>
        <hr />
        <option value="destinationAsc">Destination | A-Z &#8593;</option>
        <option value="destinationDesc">Destination | Z-A &#8593;</option>
        <hr />
        <option value="durationAsc">Duration | Shortest &#8593;</option>
        <option value="durationDesc">Duration | Longest &#8593;</option>
        <hr />
        <option value="createdAtDesc">Created | Newest &#8593;</option>
        <option value="createdAtAsc">Created | Oldest &#8593;</option>
        <hr />
        <option value="updatedAtDesc">Updated | Newest &#8593;</option>
        <option value="updatedAtAsc">Updated | Oldest &#8593;</option>
      </StyledSortSelect>
    </SortSelectContainer>
  );
}
