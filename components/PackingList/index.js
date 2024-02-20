import { useState } from "react";
import mongoose from "mongoose";
import {
  MiniButtonContainer,
  MiniButtonLabel,
  StyledMiniButton,
} from "@/components/Button/MiniButton";
import {
  PackList,
  InputContainer,
  ItemHeaderLabel,
  ItemNumberContainer,
  ItemNumberLabel,
  ItemNameLabel,
  ItemQuantityLabel,
  InputItemName,
  InputItemQuantity,
} from "@/components/Form/Form.styled";

export function generateObjectId() {
  const { ObjectId } = mongoose.Types;
  const newObjectId = new ObjectId().toString();
  return newObjectId;
}

export default function PackingList({
  handoverData,
  setHandoverData,
  setHasChanges,
  formDisabled,
}) {
  const [newPackingListItem, setNewPackingListItem] = useState({
    itemName: "",
    itemQuantity: null,
  });

  function handleAddItem() {
    if (formDisabled) return;

    const lastItem =
      handoverData.packingList[handoverData.packingList.length - 1];
    if (lastItem && lastItem.itemName === "") return;

    const nextPackingListItem = {
      ...newPackingListItem,
      _id: generateObjectId(),
    };
    const updatedPackingList = [
      ...handoverData.packingList,
      nextPackingListItem,
    ];

    setHandoverData((prevData) => ({
      ...prevData,
      packingList: updatedPackingList,
    }));

    setNewPackingListItem({ itemName: "", itemQuantity: null });
    setHasChanges(true);
  }

  function handleRemoveItem(itemIdToRemove) {
    if (formDisabled) return;

    setHandoverData((prevData) => {
      const updatedPackingList = handoverData.packingList.filter(
        (item) => item._id !== itemIdToRemove
      );
      return { ...prevData, packingList: updatedPackingList };
    });
    setHasChanges(true);
  }

  function handleUpdateItem(itemId, updatedProperties) {
    setHandoverData((prev) => {
      const updatedPackingList = prev.packingList.map((item) =>
        item._id === itemId ? { ...item, ...updatedProperties } : item
      );
      return { ...prev, packingList: updatedPackingList };
    });
    setHasChanges(true);
  }

  function handleUpdateNewPackingListItem(updates) {
    setNewPackingListItem((prev) => ({ ...prev, ...updates }));
  }

  return (
    <>
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
            handleUpdateNewPackingListItem={handleUpdateNewPackingListItem}
            formDisabled={formDisabled}
          />
        )}
        <MiniButtonContainer>
          <StyledMiniButton
            type="button"
            id="add"
            action="add"
            fontSize={"1.2rem"}
            onClick={handleAddItem}
            disabled={formDisabled}
          >
            +
          </StyledMiniButton>
          <MiniButtonLabel>Add Packing List Item</MiniButtonLabel>
        </MiniButtonContainer>
      </PackList>
    </>
  );
}

function InputItemAndQuantity({
  item,
  handleUpdateItem,
  handleRemoveItem,
  formDisabled,
}) {
  const handleInputChange = (key, value) => {
    handleUpdateItem(item._id, { [key]: value });
  };

  return (
    <>
      <InputItemName
        id={`packingList_${item._id}`}
        name={`packingList_${item._id}`}
        type="text"
        value={item.itemName}
        onChange={(event) => handleInputChange("itemName", event.target.value)}
        disabled={formDisabled}
      />
      <InputItemQuantity
        id={`packingList_quantity_${item._id}`}
        name={`packingList_quantity_${item._id}`}
        type="number"
        value={item.itemQuantity}
        onChange={(event) =>
          handleInputChange("itemQuantity", event.target.value)
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
  handleUpdateNewPackingListItem,
  formDisabled,
}) {
  const handleInputChange = (key, value) => {
    handleUpdateNewPackingListItem({ [key]: value });
  };

  return (
    <InputContainer>
      <InputItemName
        type="text"
        disabled={formDisabled}
        value={newPackingListItem.itemName}
        onChange={(event) => handleInputChange("itemName", event.target.value)}
      />
      <InputItemQuantity
        type="number"
        disabled={formDisabled}
        value={newPackingListItem.itemQuantity}
        onChange={(event) =>
          handleInputChange("itemQuantity", event.target.value)
        }
        min="0"
        max="999"
      />
    </InputContainer>
  );
}
