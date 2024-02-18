import { useState } from "react";
import { packingListTemplates } from "@/lib/packingListTemplates";
import {
  StyledSelect,
  PackListContainer,
  PackList,
} from "@/components/Form/Form.styled.js";

export default function PresetSelect() {
  const [selectedPreset, setSelectedPreset] = useState(
    Object.keys(packingListTemplates)[0]
  );

  const handlePresetChange = (event) => {
    setSelectedPreset(event.target.value);
  };

  return (
    <>
      <div>
        <StyledSelect value={selectedPreset} onChange={handlePresetChange}>
          {Object.keys(packingListTemplates).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </StyledSelect>
        <PackListContainer>
          <PackList>
            {packingListTemplates[selectedPreset].map((item, index) => (
              <li key={index}>
                {item.itemName}: {item.itemQuantity}
              </li>
            ))}
          </PackList>
        </PackListContainer>
      </div>
    </>
  );
}

// <StyledSelect
// id="template"
// name="template"
// onChange={(event) => setSelectedTemplate(event.target.value)}
// value={selectedTemplate}
// disabled={formDisabled}
// >
// <option value="" disabled>
//   Please select preset
// </option>
// <option value="weekend">Weekend</option>
// <option value="one week">One week</option>
// <option value="two weeks">Two weeks</option>
// <option value="three weeks">Three weeks</option>
// </StyledSelect>
