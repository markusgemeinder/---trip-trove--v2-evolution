import React from "react";
import styled from "styled-components";
import { defaultFont } from "@/styles.js";
import { useState } from "react";
import useSWR from "swr";
import { PackListContainer, PackList } from "@/components/Form/Form.styled.js";

export const StyledSelect = styled.select`
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
        <option value="">Select a category...</option>
        <hr />
        {packingLists.map((packingList) => (
          <React.Fragment key={packingList._id}>
            <option value={packingList.preset} className="category">
              {packingList.preset}
            </option>
            {/* <optgroup label={"-----"} className="hidden"> */}
            {packingList.items.map((item) => (
              <option key={item._id} value={item.itemName} disabled>
                {item.itemName}: {item.itemQuantity}
              </option>
            ))}
            {/* </optgroup> */}
            <hr />
          </React.Fragment>
        ))}
      </StyledSelect>
    </div>
  );
}
