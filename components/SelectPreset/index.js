import React, { useState } from "react";
import useSWR from "swr";
import { StyledSelect } from "@/components/TripForm/TripForm.styled";

export default function SelectPreset({ onSelectPreset }) {
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

  function handlePresetChange(event) {
    const selectedPresetName = event.target.value;
    const selectedPresetData = packingLists.find(
      (preset) => preset.presetName === selectedPresetName
    );
    setSelectedPreset(selectedPresetName); // Update selected preset name
    onSelectPreset(selectedPresetData); // Pass the selected preset object back to the parent component
  }

  return (
    <>
      <StyledSelect value={selectedPreset} onChange={handlePresetChange}>
        <option value="">Select a Preset...</option>
        <hr />
        {packingLists.map((packingList) => (
          <React.Fragment key={packingList._id}>
            <option value={packingList.presetName}>
              {packingList.presetName}
            </option>
            {packingList.items.map((item) => (
              <option key={item._id} value={item.itemName} disabled>
                &#xA0;&#xA0;&#xA0;&#x25B6;&nbsp;
                {item.itemName.length > 16
                  ? `${item.itemName.slice(0, 16)}...`
                  : item.itemName}
                {item.itemQuantity && ` (${item.itemQuantity}x)`}
              </option>
            ))}
            <hr />
          </React.Fragment>
        ))}
      </StyledSelect>
    </>
  );
}
