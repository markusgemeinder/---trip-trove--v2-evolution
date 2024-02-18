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
        <option value="">Select a preset...</option>
        {packingLists.map((packingList) => (
          <option key={packingList._id} value={packingList.preset}>
            {packingList.preset}
          </option>
        ))}
      </StyledSelect>
      {selectedPreset && (
        <PackListContainer>
          <PackList>
            {packingLists
              .find((list) => list.preset === selectedPreset)
              .items.map((item) => (
                <li key={item._id}>
                  {item.itemName}: {item.itemQuantity}
                </li>
              ))}
          </PackList>
        </PackListContainer>
      )}
    </div>
  );
}
