// export default function PresetForm() {
//   return (
//     <>
//       <h2>Hier gibt es nix zu sehen!</h2>
//     </>
//   );
// }

import { useState } from "react";
import { toastDuration, formatDateForInput } from "@/lib/utils";
import toast from "react-hot-toast";
import { ToastMessage } from "@/components/ToastMessage";
import {
  ButtonContainer,
  StyledTextButton,
  StyledTextButtonMediumSize,
} from "@/components/Button/TextButton";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  DateContainer,
  PreviewContainer,
  PreviewArea,
  PreviewImage,
  PackingListContainer,
  PresetContainer,
} from "@/components/Form/Form.styled";
import { useFormData } from "@/components/Form/TripForm/TripForm.handlers";
import ImageUpload from "@/components/ImageUpload";
import SelectPreset from "@/components/SelectPreset";
import PackingList, { generateObjectId } from "@/components/PackingList";

const INITIAL_DATA = {
  presetName: "",
  items: {
    itemName: "",
    itemQuantity: null,
    isPacked: false,
  },
};

export default function PresetForm({
  defaultData = INITIAL_DATA,
  isEditMode,
  onSubmit,
}) {
  const {
    formDisabled,
    setFormDisabled,
    handoverData,
    setHandoverData,
    hasChanges,
    setHasChanges,
    handleImageUpdate,
    handleDeleteImage,
    handleInput,
    handleReset,
    handleSubmit,
  } = useFormData(defaultData, onSubmit, isEditMode);

  const [selectedPresetData, setSelectedPresetData] = useState([]);
  const [lastAppliedPreset, setLastAppliedPreset] = useState(null);

  function handlePackingListChange(newPackingList) {
    setHandoverData((prevData) => ({
      ...prevData,
      packingList: newPackingList,
    }));
    setHasChanges(true);
  }

  // function generateListFromPreset(selectedPresetData) {
  //   setLastAppliedPreset(selectedPresetData);
  //   const selectedPreset = selectedPresetData.presetName;
  //   if (!selectedPreset) {
  //     toast.error("No preset selected yet.", {
  //       duration: toastDuration,
  //     });
  //     return;
  //   }
  //   if (lastAppliedPreset === selectedPreset) {
  //     toast.dismiss();
  //     setFormDisabled(true);

  //     toast(
  //       <ToastMessage
  //         message="Are you sure to apply the same preset once again?"
  //         textConfirmButton="Yes, apply."
  //         textCancelButton="No, don&rsquo;t apply!"
  //         onConfirm={() => {
  //           setLastAppliedPreset(selectedPreset);

  //           const updatedPackingList = [...handoverData.packingList];

  //           const lastItem = updatedPackingList[updatedPackingList.length - 1];
  //           if (lastItem && lastItem.itemName === "") {
  //             updatedPackingList.pop();
  //             updatedPackingList.push(
  //               ...selectedPresetData.items.map((item) => ({
  //                 ...item,
  //                 _id: generateObjectId(),
  //               }))
  //             );
  //           } else {
  //             updatedPackingList.push(
  //               ...selectedPresetData.items.map((item) => ({
  //                 ...item,
  //                 _id: generateObjectId(),
  //               }))
  //             );
  //           }

  //           setHandoverData((prevData) => ({
  //             ...prevData,
  //             packingList: updatedPackingList,
  //           }));
  //           setHasChanges(true);
  //           setFormDisabled(false);
  //         }}
  //         onCancel={() => {
  //           setFormDisabled(false);
  //           return;
  //         }}
  //       />,
  //       { duration: Infinity }
  //     );
  //   }

  //   if (lastAppliedPreset !== selectedPreset) {
  //     setLastAppliedPreset(selectedPreset);

  //     const updatedPackingList = [...handoverData.packingList];

  //     const lastItem = updatedPackingList[updatedPackingList.length - 1];
  //     if (lastItem && lastItem.itemName === "") {
  //       updatedPackingList.pop();
  //       updatedPackingList.push(
  //         ...selectedPresetData.items.map((item) => ({
  //           ...item,
  //           _id: generateObjectId(),
  //         }))
  //       );
  //     } else {
  //       updatedPackingList.push(
  //         ...selectedPresetData.items.map((item) => ({
  //           ...item,
  //           _id: generateObjectId(),
  //         }))
  //       );
  //     }

  //     setHandoverData((prevData) => ({
  //       ...prevData,
  //       packingList: updatedPackingList,
  //     }));
  //     setHasChanges(true);
  //   }
  // }

  return (
    <StyledForm
      aria-label={isEditMode ? "edit preset form" : "create preset form"}
      onSubmit={handleSubmit}
      formDisabled={formDisabled}
    >
      <StyledLabel htmlFor="presetName">Preset Name</StyledLabel>
      <StyledInput
        id="presetName"
        name="presetName"
        type="text"
        value={handoverData?.presetName || ""}
        onInput={handleInput}
        required
        disabled={formDisabled}
        autoFocus
      />

      <PackingListContainer disabled={formDisabled}>
        <StyledLabel htmlFor="packingList">Packing List</StyledLabel>
        <PresetContainer>
          <SelectPreset
            id="selectPresetTripForm"
            name="selectPresetTripForm"
            onSelectPreset={setSelectedPresetData}
            formDisabled={formDisabled}
          />
          <StyledTextButtonMediumSize
            type="button"
            onClick={() => generateListFromPreset(selectedPresetData)}
            disabled={formDisabled}
          >
            Apply
          </StyledTextButtonMediumSize>
        </PresetContainer>

        <PackingList
          packingList={handoverData.packingList}
          setPackingList={handlePackingListChange}
          formDisabled={formDisabled}
        />
      </PackingListContainer>

      <ButtonContainer>
        <StyledTextButton
          type="button"
          onClick={handleReset}
          disabled={formDisabled || !hasChanges}
        >
          {isEditMode ? "Discard" : "Reset"}
        </StyledTextButton>
        <StyledTextButton type="submit" disabled={formDisabled}>
          Save
        </StyledTextButton>
      </ButtonContainer>
    </StyledForm>
  );
}
