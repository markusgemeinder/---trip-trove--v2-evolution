import React, { useState } from "react";
import styled from "styled-components";
import { defaultFont } from "@/styles.js";
import useSWR from "swr";

const StyledSelect = styled.select`
  font-family: ${defaultFont.style.fontFamily};
  font-size: inherit;
  background-color: var(--color-form-input);
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 0.3rem;

  @media (min-width: 600px) {
    padding: 0.5rem;
  }
`;

export default function PresetSelect() {
  const {
    data: packingLists,
    error,
    isLoading,
  } = useSWR("/api/presets", {
    fallbackData: [],
  });

  const [selectedPreset, setSelectedPreset] = useState("");

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handlePresetChange = (event) => {
    setSelectedPreset(event.target.value);
  };

  return (
    <div>
      <StyledSelect value={selectedPreset} onChange={handlePresetChange}>
        <option value="">Select a preset...</option>
        <hr />
        {packingLists.map((packingList) => (
          <React.Fragment key={packingList._id}>
            <option value={packingList.preset}>{packingList.preset}</option>
            {packingList.items.map((item) => (
              <option key={item._id} value={item.itemName} disabled>
                {item.itemName}
                {item.itemQuantity && ` (${item.itemQuantity}x)`}
              </option>
            ))}
            <hr />
          </React.Fragment>
        ))}
      </StyledSelect>
    </div>
  );
}
