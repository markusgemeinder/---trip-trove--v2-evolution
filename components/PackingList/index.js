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
} from "@/components/TripForm/TripForm.styled";

export function generateObjectId() {
  const { ObjectId } = mongoose.Types;
  const newObjectId = new ObjectId().toString();
  return newObjectId;
}

export default function PackingList({
  packingList,
  setPackingList,
  formDisabled,
}) {
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemQuantity: null,
    isPacked: false,
  });

  function handleAddItem() {
    if (formDisabled) return;

    const lastItem = packingList[packingList.length - 1];
    if (lastItem && lastItem.itemName === "") return;

    const nextItem = {
      ...newItem,
      _id: generateObjectId(),
    };
    const updatedPackingList = [...packingList, nextItem];

    setPackingList(updatedPackingList);

    setNewItem({
      itemName: "",
      itemQuantity: null,
      isPacked: false,
    });
  }

  function handleRemoveItem(itemIdToRemove) {
    if (formDisabled) return;

    const updatedPackingList = packingList.filter(
      (item) => item._id !== itemIdToRemove
    );
    setPackingList(updatedPackingList);
  }

  function handleUpdateItem(itemId, updatedProperties) {
    const updatedPackingList = packingList.map((item) =>
      item._id === itemId ? { ...item, ...updatedProperties } : item
    );
    setPackingList(updatedPackingList);
  }

  function handleUpdateNewItem(updates) {
    setNewItem((prev) => ({ ...prev, ...updates }));
  }

  return (
    <>
      <PackList>
        {packingList.length > 0 && (
          <ItemHeaderLabel>
            <ItemNumberLabel>No.</ItemNumberLabel>
            <ItemNameLabel>Item</ItemNameLabel>
            <ItemQuantityLabel>Qty.</ItemQuantityLabel>
          </ItemHeaderLabel>
        )}
        {packingList.map((item, index) => (
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
        {packingList.showNewItem && (
          <NewItem
            newItem={newItem}
            handleUpdateNewItem={handleUpdateNewItem}
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

function NewItem({ newItem, handleUpdateNewItem, formDisabled }) {
  const handleInputChange = (key, value) => {
    handleUpdateNewItem({ [key]: value });
  };

  return (
    <InputContainer>
      <InputItemName
        type="text"
        disabled={formDisabled}
        value={newItem.itemName}
        onChange={(event) => handleInputChange("itemName", event.target.value)}
      />
      <InputItemQuantity
        type="number"
        disabled={formDisabled}
        value={newItem.itemQuantity}
        onChange={(event) =>
          handleInputChange("itemQuantity", event.target.value)
        }
        min="0"
        max="999"
      />
    </InputContainer>
  );
}
