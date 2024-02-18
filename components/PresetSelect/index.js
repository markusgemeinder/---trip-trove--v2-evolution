import styled from "styled-components";
import { defaultFont } from "@/styles.js";
import { useState } from "react";
import useSWR from "swr";
// import { packingListTemplates } from "@/lib/packingListTemplates";
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

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //   const [selectedPreset, setSelectedPreset] = useState(
  //     Object.keys(packingListTemplates)[0]
  //   );

  //   const handlePresetChange = (event) => {
  //     setSelectedPreset(event.target.value);
  //   };

  return (
    <div>
      {packingLists.map((packingList) => (
        <div key={packingList._id}>
          <h2>{packingList.preset}</h2>
          <ul>
            {packingList.items.map((item) => (
              <li key={item._id}>
                {item.itemName}
                {item.itemQuantity && <> ({item.itemQuantity})</>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// <PackListContainer>
//   <PackList>
//     {packingListTemplates[selectedPreset].map((item, index) => (
//       <li key={index}>
//         {item.itemName}: {item.itemQuantity}
//       </li>
//     ))}
//   </PackList>
// </PackListContainer>
