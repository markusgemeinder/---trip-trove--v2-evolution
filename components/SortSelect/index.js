import React from "react";
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
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 600px) {
    padding: 0.5rem;
    font-size: 1.1rem;
  }

  &:focus {
    outline: none;
    border-color: var(--color-sort-selector-focus);
  }
`;

export default function SortSelect({ onChange }) {
  return (
    <SortSelectContainer>
      <StyledSortSelectLabel htmlFor="sortSelect">
        Sort Trips:
      </StyledSortSelectLabel>
      <StyledSortSelect onChange={onChange}>
        <option value="default">Create Date | Newest &#8593;</option>
        <option value="dateAsc">Start Date | Earliest &#8593;</option>
        <option value="dateDesc">Start Date | Latest &#8593;</option>
        <option value="durationAsc">Duration | Shortest &#8593;</option>
        <option value="durationDesc">Duration | Longest &#8593;</option>
        <option value="alphaAsc">Destination (A-Z) &#8595;</option>
        <option value="alphaDesc">Destination (Z-A) &#8593;</option>
      </StyledSortSelect>
    </SortSelectContainer>
  );
}
