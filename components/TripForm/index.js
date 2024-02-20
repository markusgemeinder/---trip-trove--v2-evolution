import { useState } from "react";
import { formatDateForInput } from "@/lib/utils";
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
  DateContainer,
  PreviewContainer,
  PreviewArea,
  PreviewImage,
  PackingListContainer,
  PresetContainer,
} from "@/components/TripForm/TripForm.styled";
import { useFormData } from "@/components/TripForm/TripForm.handlers";
import ImageUpload from "@/components/TripForm/ImageUpload";
import PresetSelect from "@/components/TripForm/PresetSelect";
import PackingList, {
  generateObjectId,
} from "@/components/TripForm/PackingList";

const INITIAL_DATA = {
  destination: "",
  start: "",
  end: "",
  imageURL: "",
  image: {
    width: null,
    height: null,
    url: "",
  },
  notes: "",
  packingList: [],
};

export default function TripForm({
  defaultData = INITIAL_DATA,
  isEditMode,
  onSubmit,
}) {
  const {
    formDisabled,
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

  function generateListFromPreset(selectedPresetData) {
    const selectedPreset = selectedPresetData.preset;

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

  return (
    <StyledForm
      aria-label={isEditMode ? "edit trip form" : "create trip form"}
      onSubmit={handleSubmit}
      formDisabled={formDisabled}
    >
      <StyledLabel htmlFor="destination">Destination</StyledLabel>
      <StyledInput
        id="destination"
        name="destination"
        type="text"
        value={handoverData?.destination || ""}
        onInput={handleInput}
        required
        disabled={formDisabled}
        autoFocus
      />

      <DateContainer>
        <StyledLabel htmlFor="start">Start</StyledLabel>
        <StyledInput
          id="start"
          name="start"
          type="date"
          value={formatDateForInput(handoverData?.start || "")}
          onInput={handleInput}
          required
          disabled={formDisabled}
        />
        <StyledLabel htmlFor="end">End</StyledLabel>
        <StyledInput
          id="end"
          name="end"
          type="date"
          value={formatDateForInput(handoverData?.end || "")}
          onInput={handleInput}
          required
          disabled={formDisabled}
        />
      </DateContainer>

      <StyledLabel htmlFor="imageURL">Image</StyledLabel>

      {handoverData?.image?.url && (
        <PreviewContainer disabled={formDisabled}>
          <PreviewArea>
            <PreviewImage
              src={handoverData?.image?.url}
              alt="Preview"
              width={handoverData?.image?.width}
              height={handoverData?.image?.height}
              style={{
                width: handoverData?.image?.width ? "auto" : "100%",
                height: handoverData?.image?.height ? "auto" : "100%",
                maxWidth:
                  handoverData?.image?.width > handoverData?.image?.height
                    ? "240px"
                    : "none",
                maxHeight:
                  handoverData?.image?.height > handoverData?.image?.width
                    ? "240px"
                    : "none",
              }}
              priority={false}
            />
            <StyledTextButtonMediumSize
              type="button"
              onClick={handleDeleteImage}
              disabled={formDisabled}
            >
              Delete
            </StyledTextButtonMediumSize>
          </PreviewArea>
        </PreviewContainer>
      )}
      {!handoverData?.image?.url && (
        <ImageUpload
          onImageUpdate={handleImageUpdate}
          disabled={formDisabled}
        />
      )}

      <StyledLabel htmlFor="notes">Notes</StyledLabel>
      <StyledInput
        id="notes"
        name="notes"
        type="text"
        value={handoverData?.notes || ""}
        onInput={handleInput}
        disabled={formDisabled}
      />

      <PackingListContainer disabled={formDisabled}>
        <StyledLabel htmlFor="packingList">Packing List</StyledLabel>
        <PresetContainer>
          <PresetSelect
            id="template"
            name="template"
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
          handoverData={handoverData}
          setHandoverData={setHandoverData}
          setHasChanges={setHasChanges}
          formDisabled={formDisabled}
          selectedPresetData={selectedPresetData}
          setSelectedPresetData={setSelectedPresetData}
        />
      </PackingListContainer>

      <ButtonContainer>
        <StyledTextButton
          type="button"
          onClick={handleReset}
          disabled={formDisabled}
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