// ================================ v4

// ================================ v3

import { useState } from "react";
import { packingListTemplates } from "@/lib/packingListTemplates";
import {
  StyledSelect,
  PackListContainer,
  PackList,
} from "@/components/Form/Form.styled.js";

export default function TestPage() {
  const [selectedPreset, setSelectedPreset] = useState(
    Object.keys(packingListTemplates)[0]
  );

  const handlePresetChange = (event) => {
    setSelectedPreset(event.target.value);
  };

  return (
    <>
      <a href="/">Home</a>
      <h2>Test Page</h2>
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

// ================================ v2
// import { useState } from "react";
// import { packingListTemplates } from "@/lib/packingListTemplates";

// export default function TestPage() {
//   const [selectedPreset, setSelectedPreset] = useState(
//     Object.keys(packingListTemplates)[0]
//   );

//   const handlePresetChange = (event) => {
//     setSelectedPreset(event.target.value);
//   };

//   return (
//     <>
//       <a href="/">Home</a>
//       <h2>Test Page</h2>
//       <select value={selectedPreset} onChange={handlePresetChange}>
//         {Object.keys(packingListTemplates).map((key) => (
//           <option key={key} value={key}>
//             {key}
//           </option>
//         ))}
//       </select>
//       <ul>
//         {packingListTemplates[selectedPreset].map((item, index) => (
//           <li key={index}>
//             {item.itemName}: {item.itemQuantity}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ================================ v1
// import { packingListTemplates } from "@/lib/packingListTemplates";

// export default function TestPage() {
//   const presets = packingListTemplates;

//   return (
//     <>
//       <a href="/">Home</a>
//       <h2>Test Page</h2>
//       <ul>
//         {Object.keys(presets).map((key) => (
//           <li key={key}>
//             <h3>{key}</h3>
//             <ul>
//               {presets[key].map((item, index) => (
//                 <li key={index}>
//                   {item.itemName}: {item.itemQuantity}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
