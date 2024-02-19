import { formatDateForInput } from "@/lib/utils";
import {
  ButtonContainer,
  StyledTextButton,
  StyledTextButtonMediumSize,
} from "@/components/Button/TextButton";
import {
  MiniButtonContainer,
  MiniButtonLabel,
  StyledMiniButton,
} from "@/components/Button/MiniButton";
import {
  TripForm,
  StyledLabel,
  StyledInput,
  DateContainer,
  PreviewContainer,
  PreviewArea,
  PreviewImage,
  PackListContainer,
  PackList,
  TemplateContainer,
  InputContainer,
  ItemHeaderLabel,
  ItemNumberContainer,
  ItemNumberLabel,
  ItemNameLabel,
  ItemQuantityLabel,
  InputItem,
  InputQuantity,
} from "@/components/Form/Form.styled";
import { useFormData } from "@/components/Form/Form.handlers";
import ImageUpload from "@/components/ImageUpload";
import PresetSelect from "@/components/PresetSelect";

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

export default function Form({
  defaultData = INITIAL_DATA,
  isEditMode,
  onSubmit,
}) {
  const {
    formDisabled,
    handoverData,
    hasChanges,
    handleImageUpdate,
    handleDeleteImage,
    newPackingListItem,
    selectedPresetData,
    setSelectedPresetData,
    generatePackingListFromTemplate,
    handleUpdateNewPackingListItemName,
    handleUpdateNewPackingListItemQuantity,
    handleAddPackingListItem,
    handleInput,
    handleUpdateItem,
    handleRemoveItem,
    handleReset,
    handleSubmit,
  } = useFormData(defaultData, onSubmit, isEditMode);

  return (
    <TripForm
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
      <PackListContainer disabled={formDisabled}>
        <StyledLabel htmlFor="packingList">Packing List</StyledLabel>
        <TemplateContainer>
          <PresetSelect
            id="template"
            name="template"
            onSelectPreset={setSelectedPresetData}
            formDisabled={formDisabled}
          />
          <StyledTextButtonMediumSize
            type="button"
            onClick={() => generatePackingListFromTemplate(selectedPresetData)}
            disabled={formDisabled}
          >
            Apply
          </StyledTextButtonMediumSize>
        </TemplateContainer>
        <PackList>
          {handoverData.packingList.length > 0 && (
            <ItemHeaderLabel>
              <ItemNumberLabel>No.</ItemNumberLabel>
              <ItemNameLabel>Item</ItemNameLabel>
              <ItemQuantityLabel>Qty.</ItemQuantityLabel>
            </ItemHeaderLabel>
          )}
          {handoverData.packingList.map((item, index) => (
            <InputContainer key={item._id}>
              <ItemNumberContainer>
                <ItemNumberLabel>{index + 1}</ItemNumberLabel>
              </ItemNumberContainer>
              <InputItemAndQuantity
                item={item}
                handleUpdateItem={handleUpdateItem}
                handleRemoveItem={handleRemoveItem}
                formDisabled={formDisabled}
              />
            </InputContainer>
          ))}
          {handoverData.showNewPackingListItem && (
            <NewPackingListItem
              newPackingListItem={newPackingListItem}
              handleUpdateNewPackingListItemName={
                handleUpdateNewPackingListItemName
              }
              handleUpdateNewPackingListItemQuantity={
                handleUpdateNewPackingListItemQuantity
              }
              formDisabled={formDisabled}
            />
          )}
          <MiniButtonContainer>
            <StyledMiniButton
              type="button"
              id="add"
              action="add"
              fontSize={"1.4rem"}
              onClick={handleAddPackingListItem}
              disabled={formDisabled}
            >
              +
            </StyledMiniButton>
            <MiniButtonLabel>Add Packing List Item</MiniButtonLabel>
          </MiniButtonContainer>
        </PackList>
      </PackListContainer>

      <StyledLabel htmlFor="notes">Notes</StyledLabel>
      <StyledInput
        id="notes"
        name="notes"
        type="text"
        value={handoverData?.notes || ""}
        onInput={handleInput}
        disabled={formDisabled}
      />
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
    </TripForm>
  );
}

function InputItemAndQuantity({
  item,
  handleUpdateItem,
  handleRemoveItem,
  formDisabled,
}) {
  return (
    <>
      <InputItem
        id={`packingList_${item._id}`}
        name={`packingList_${item._id}`}
        type="text"
        value={item.itemName}
        onChange={(event) =>
          handleUpdateItem(item._id, event.target.value, item.itemQuantity)
        }
        disabled={formDisabled}
      />
      <InputQuantity
        id={`packingList_quantity_${item._id}`}
        name={`packingList_quantity_${item._id}`}
        type="number"
        value={item.itemQuantity}
        onChange={(event) =>
          handleUpdateItem(item._id, item.itemName, event.target.value)
        }
        disabled={formDisabled}
        min="0"
        max="999"
      />
      <StyledMiniButton
        type="button"
        id="delete"
        action="delete"
        onClick={() => handleRemoveItem(item._id)}
        disabled={formDisabled}
      >
        X
      </StyledMiniButton>
    </>
  );
}

function NewPackingListItem({
  newPackingListItem,
  handleUpdateNewPackingListItemName,
  handleUpdateNewPackingListItemQuantity,
  formDisabled,
}) {
  return (
    <InputContainer>
      <InputItem
        type="text"
        disabled={formDisabled}
        value={newPackingListItem.itemName}
        onChange={(event) =>
          handleUpdateNewPackingListItemName(event.target.value)
        }
      />
      <InputQuantity
        type="number"
        disabled={formDisabled}
        value={newPackingListItem.itemQuantity}
        onChange={(event) =>
          handleUpdateNewPackingListItemQuantity(event.target.value)
        }
        min="0"
        max="999"
      />
    </InputContainer>
  );
}
