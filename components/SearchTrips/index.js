import React, { useState } from "react";
import styled from "styled-components";
import { defaultFont } from "@/styles.js";

const SearchBarContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: var(--color-search-bar);
  border: 2px solid var(--color-search-bar-border);
  border-radius: 20px;
  transition: border-color 0.3s ease;
  display: grid;
  grid-template-columns: 6fr auto;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  &:focus {
    outline: none;
    border-color: var(--color-sort-search-bar);
  }

  @media (min-width: 768px) and (min-height: 768px) {
    border-radius: 30px;
  }
`;

const SearchInput = styled.input`
  margin: auto 0.2rem;
  padding: 0.4rem 0.8rem;
  width: 100%;
  background-color: transparent;
  color: var(--color-search-bar-text);
  font-family: ${defaultFont.style.fontFamily};
  font-size: 0.8rem;
  border: none;

  &:focus {
    outline: none;
    border-color: var(--color-sort-search-bar);
  }
  @media (min-width: 768px) and (min-height: 768px) {
    margin: auto 0.2rem;
    padding: 0.6rem 1rem;
    font-size: 1rem;
  }
`;

const SearchIconSvg = styled.svg`
  margin: auto 0.6rem;
  padding: 0.1rem;
  width: 24px;
  height: 24px;
  transition: fill 0.6s ease;

  @media (min-width: 768px) and (min-height: 768px) {
    margin: auto 0.8rem;
    width: 30px;
    height: 30px;
  }
`;

const SearchIconPath = styled.path`
  fill: var(--color-search-bar-icon);
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
      <SearchIconSvg
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 60 60"
      >
        <SearchIconPath
          fillRule="nonzero"
          d="M50.300002 54.00007 33.499981 37.200049c-1.333335 1.066668-2.86667025 1.91200239-4.60000575 2.5333365-1.7333355.62133411-3.57867114.9333345-5.53334025.9333345-4.84533939 0-8.94401118-1.67733543-12.29868204-5.03467296C7.71061543 32.27737618 6.03328 28.17870439 6.03328 23.333365c0-4.84533939 1.67733543-8.94401118 5.03467296-12.30134871C14.42262382 7.67734543 18.52129561 6.00001 23.366635 6.00001c4.84533939 0 8.94401118 1.67733543 12.30134871 5.03200629C39.02265457 14.38935382 40.69999 18.48802561 40.69999 23.333365c0 1.95466911-.31200039 3.80000475-.9333345 5.53334025-.62133411 1.7333355-1.4666685 3.26667075-2.5333365 4.60000575L54.03334 50.266732l-3.733338 3.733338ZM23.366635 35.33338c3.3333375 0 6.16800771-1.16533479 8.50134396-3.49867104C34.20131521 29.50137271 35.36665 26.6667025 35.36665 23.333365s-1.16533479-6.16534104-3.49867104-8.49867729C29.53464271 12.50135146 26.6999725 11.33335 23.366635 11.33335s-6.16534104 1.16800146-8.49867729 3.50133771C12.53462146 17.16802396 11.36662 20.0000275 11.36662 23.333365s1.16800146 6.16800771 3.50133771 8.50134396C17.20129396 34.16804521 20.0332975 35.33338 23.366635 35.33338Z"
        />
      </SearchIconSvg>
    </SearchBarContainer>
  );
}
