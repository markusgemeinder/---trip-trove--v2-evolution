import { useState } from "react";
import React from "react";
import toast from "react-hot-toast";
import {
  ButtonContainer,
  StyledTextButton,
  StyledTextButtonMediumSize,
} from "@/components/Button/TextButton";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
  DateContainer,
  PreviewContainer,
  PreviewArea,
  PreviewImage,
  PackingListContainer,
  PresetContainer,
} from "@/components/TripForm/TripForm.styled";
import SelectPreset from "@/components/SelectPreset";
import PackingList from "@/components/PackingList";

const INITIAL_DATA = {
  preset: "",
  items: {
    itemName: "",
    itemQuantity: null,
    isPacked: false,
  },
};

export default function PresetForm(INITIAL_DATA) {
  const [formDisabled, setFormDisabled] = useState(false);
  const [handoverData, setHandoverData] = useState(INITIAL_DATA);
  const [hasChanges, setHasChanges] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [selectedPresetData, setSelectedPresetData] = useState([]);
  const [lastAppliedPreset, setLastAppliedPreset] = useState(null);

  function generateListFromPreset(selectedPresetData) {
    const selectedPreset = selectedPresetData.preset;
    console.log("SelectedPresetData:", selectedPresetData);
    return;
    if (!selectedPreset) {
      toast.error("No preset selected yet.", {
        duration: toastDuration,
      });
      return;
    }
    if (lastAppliedPreset === selectedPreset) {
      return;
    }
    setLastAppliedPreset(selectedPreset);

    const updatedPackingList = [...handoverData.packingList];

    const lastItem = updatedPackingList[updatedPackingList.length - 1];
    if (lastItem && lastItem.itemName === "") {
      updatedPackingList.pop();
      updatedPackingList.push(
        ...selectedPresetData.items.map((item) => ({
          ...item,
          _id: generateObjectId(),
        }))
      );
    } else {
      updatedPackingList.push(
        ...selectedPresetData.items.map((item) => ({
          ...item,
          _id: generateObjectId(),
        }))
      );
    }

    setHandoverData((prevData) => ({
      ...prevData,
      packingList: updatedPackingList,
    }));
    setHasChanges(true);
  }

  function handleSubmit() {
    event.preventDefault();
    console.log("Submitted!", INITIAL_DATA, handoverData);
  }
  return (
    <>
      <h2>Alles okay</h2>
      <StyledForm
        aria-label="edit preset form"
        onSubmit={handleSubmit}
        formDisabled={formDisabled}
      >
        <PackingListContainer disabled={formDisabled}>
          <StyledLabel htmlFor="preset">Existing Presets:</StyledLabel>
          <PresetContainer>
            <SelectPreset
              id="selectPreset"
              name="selectPreset"
              onSelectPreset={setSelectedPresetData}
              formDisabled={formDisabled}
            />{" "}
            <StyledTextButtonMediumSize
              type="button"
              onClick={() => generateListFromPreset(selectedPresetData)}
              disabled={formDisabled}
            >
              Apply
            </StyledTextButtonMediumSize>
          </PresetContainer>
          {/* <PackingList
            handoverData={handoverData}
            formDisabled={formDisabled}
            selectedPresetData={selectedPresetData}
            setSelectedPresetData={setSelectedPresetData}
          /> */}
        </PackingListContainer>
        <ButtonContainer>
          <StyledTextButton type="submit" disabled={formDisabled}>
            Submit
          </StyledTextButton>
        </ButtonContainer>
      </StyledForm>
    </>
  );
}

{
  /* <StyledSelect value={selectedPreset} onChange={handlePresetChange}>
  <option value="">Select a Preset...</option>
  <hr />
  {presets.map((preset) => (
    <React.Fragment key={presets._id}>
      <option value={preset.preset}>{preset.preset}</option>
      {preset.items.map((item) => (
        <option key={item._id} value={item.itemName} disabled>
          {item.itemName}
          {item.itemQuantity && ` (${item.itemQuantity}x)`}
        </option>
      ))}
      <hr />
    </React.Fragment>
  ))}
</StyledSelect>; */
}

// aria-label={isEditMode ? "edit trip form" : "create trip form"}
//   <StyledLabel htmlFor="destination">Destination</StyledLabel>
//   <StyledInput
//     id="destination"
//     name="destination"
//     type="text"
//     value={handoverData?.destination || ""}
//     onInput={handleInput}
//     required
//     disabled={formDisabled}
//     autoFocus
//   />

//   <DateContainer>
//     <StyledLabel htmlFor="start">Start</StyledLabel>
//     <StyledInput
//       id="start"
//       name="start"
//       type="date"
//       value={formatDateForInput(handoverData?.start || "")}
//       onInput={handleInput}
//       required
//       disabled={formDisabled}
//     />
//     <StyledLabel htmlFor="end">End</StyledLabel>
//     <StyledInput
//       id="end"
//       name="end"
//       type="date"
//       value={formatDateForInput(handoverData?.end || "")}
//       onInput={handleInput}
//       required
//       disabled={formDisabled}
//     />
//   </DateContainer>

//   <StyledLabel htmlFor="notes">Notes</StyledLabel>
//   <StyledInput
//     id="notes"
//     name="notes"
//     type="text"
//     value={handoverData?.notes || ""}
//     onInput={handleInput}
//     disabled={formDisabled}
//   />

//   <PackingListContainer disabled={formDisabled}>
//     <StyledLabel htmlFor="packingList">Packing List</StyledLabel>
//     <PresetContainer>
//       <SelectPreset
//         id="template"
//         name="template"
//         onSelectPreset={setSelectedPresetData}
//         formDisabled={formDisabled}
//       />
//       <StyledTextButtonMediumSize
//         type="button"
//         onClick={() => generateListFromPreset(selectedPresetData)}
//         disabled={formDisabled}
//       >
//         Apply
//       </StyledTextButtonMediumSize>
//     </PresetContainer>

//     <PackingList
//       handoverData={handoverData}
//       setHandoverData={setHandoverData}
//       setHasChanges={setHasChanges}
//       formDisabled={formDisabled}
//       selectedPresetData={selectedPresetData}
//       setSelectedPresetData={setSelectedPresetData}
//     />
//   </PackingListContainer>
