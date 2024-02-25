// import { useEffect } from "react";
import {
  ButtonContainer,
  StyledTextButton,
  StyledTextButtonMediumSize,
} from "@/components/Button/TextButton";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  PackingListContainer,
} from "@/components/Form/Form.styled";
import { usePresetFormData } from "@/components/Form/PresetForm/PresetForm.handlers";
import PackingList from "@/components/PackingList";

const INITIAL_DATA = {
  presetName: "",
  items: [],
};
// const INITIAL_DATA = {
//   presetName: "",
//   items: {
//     itemName: "",
//     itemQuantity: null,
//     isPacked: false,
//   },
// };

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
    handleInput,
    handleReset,
    handleSubmit,
  } = usePresetFormData(defaultData, onSubmit, isEditMode);

  function handlePackingListChange(newPackingList) {
    setHandoverData((prevData) => ({
      ...prevData,
      items: newPackingList,
    }));
    setHasChanges(true);
  }

  // useEffect(() => {
  //   console.log(handoverData);
  // }, [handoverData]);

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
        <PackingList
          listData={handoverData.items}
          isForm={"preset"}
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
