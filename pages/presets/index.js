// import React from "react";
// import {
//   ButtonContainer,
//   StyledTextButton,
//   StyledTextButtonMediumSize,
// } from "@/components/Button/TextButton";
// import {
//   MiniButtonContainer,
//   MiniButtonLabel,
//   StyledMiniButton,
// } from "@/components/Button/MiniButton";
// import {
//   TripForm,
//   StyledLabel,
//   PackListContainer,
//   PackList,
//   TemplateContainer,
//   InputContainer,
//   ItemHeaderLabel,
//   ItemNumberContainer,
//   ItemNumberLabel,
//   ItemNameLabel,
//   ItemQuantityLabel,
//   InputItem,
//   InputQuantity,
// } from "@/components/Form/Form.styled";

export default function Presets() {
  return (
    <h2>To be defined...</h2>
    //     <TripForm
    //       aria-label="packing list presets form"
    //       // onSubmit={handleSubmit}
    //       formDisabled={formDisabled}
    //     >
    //       <PackListContainer disabled={formDisabled}>
    //         <StyledLabel htmlFor="packingList">Packing List</StyledLabel>
    //         <TemplateContainer>
    //           <PresetSelect
    //             id="template"
    //             name="template"
    //             onSelectPreset={setSelectedPresetData}
    //             formDisabled={formDisabled}
    //           />
    //           <StyledTextButtonMediumSize
    //             type="button"
    //             onClick={() => generatePackingListFromTemplate(selectedPresetData)}
    //             disabled={formDisabled}
    //           >
    //             Apply
    //           </StyledTextButtonMediumSize>
    //         </TemplateContainer>
    //         <PackList>
    //           {handoverData.packingList.length > 0 && (
    //             <ItemHeaderLabel>
    //               <ItemNumberLabel>No.</ItemNumberLabel>
    //               <ItemNameLabel>Item</ItemNameLabel>
    //               <ItemQuantityLabel>Qty.</ItemQuantityLabel>
    //             </ItemHeaderLabel>
    //           )}
    //           {handoverData.packingList.map((item, index) => (
    //             <InputContainer key={item._id}>
    //               <ItemNumberContainer>
    //                 <ItemNumberLabel>{index + 1}</ItemNumberLabel>
    //               </ItemNumberContainer>
    //               <InputItemAndQuantity
    //                 item={item}
    //                 handleUpdateItem={handleUpdateItem}
    //                 handleRemoveItem={handleRemoveItem}
    //                 formDisabled={formDisabled}
    //               />
    //             </InputContainer>
    //           ))}
    //           {handoverData.showNewPackingListItem && (
    //             <NewPackingListItem
    //               newPackingListItem={newPackingListItem}
    //               handleUpdateNewPackingListItemName={
    //                 handleUpdateNewPackingListItemName
    //               }
    //               handleUpdateNewPackingListItemQuantity={
    //                 handleUpdateNewPackingListItemQuantity
    //               }
    //               formDisabled={formDisabled}
    //             />
    //           )}
    //           <MiniButtonContainer>
    //             <StyledMiniButton
    //               type="button"
    //               id="add"
    //               action="add"
    //               fontSize={"1.4rem"}
    //               onClick={handleAddPackingListItem}
    //               disabled={formDisabled}
    //             >
    //               +
    //             </StyledMiniButton>
    //             <MiniButtonLabel>Add Packing List Item</MiniButtonLabel>
    //           </MiniButtonContainer>
    //         </PackList>
    //       </PackListContainer>
    //       <ButtonContainer>
    //         <StyledTextButton
    //           type="button"
    //           onClick={handleReset}
    //           disabled={formDisabled}
    //         >
    //           {isEditMode ? "Discard" : "Reset"}
    //         </StyledTextButton>
    //         <StyledTextButton type="submit" disabled={formDisabled}>
    //           Save
    //         </StyledTextButton>
    //       </ButtonContainer>
    //     </TripForm>
    //   );
    // }

    // function InputItemAndQuantity({
    //   item,
    //   handleUpdateItem,
    //   handleRemoveItem,
    //   formDisabled,
    // }) {
    //   return (
    //     <>
    //       <InputItem
    //         id={`packingList_${item._id}`}
    //         name={`packingList_${item._id}`}
    //         type="text"
    //         value={item.itemName}
    //         onChange={(event) =>
    //           handleUpdateItem(item._id, event.target.value, item.itemQuantity)
    //         }
    //         disabled={formDisabled}
    //       />
    //       <InputQuantity
    //         id={`packingList_quantity_${item._id}`}
    //         name={`packingList_quantity_${item._id}`}
    //         type="number"
    //         value={item.itemQuantity}
    //         onChange={(event) =>
    //           handleUpdateItem(item._id, item.itemName, event.target.value)
    //         }
    //         disabled={formDisabled}
    //         min="0"
    //         max="999"
    //       />
    //       <StyledMiniButton
    //         type="button"
    //         id="delete"
    //         action="delete"
    //         onClick={() => handleRemoveItem(item._id)}
    //         disabled={formDisabled}
    //       >
    //         X
    //       </StyledMiniButton>
    //     </>
    //   );
    // }

    // function NewPackingListItem({
    //   newPackingListItem,
    //   handleUpdateNewPackingListItemName,
    //   handleUpdateNewPackingListItemQuantity,
    //   formDisabled,
    // }) {
    //   return (
    //     <InputContainer>
    //       <InputItem
    //         type="text"
    //         disabled={formDisabled}
    //         value={newPackingListItem.itemName}
    //         onChange={(event) =>
    //           handleUpdateNewPackingListItemName(event.target.value)
    //         }
    //       />
    //       <InputQuantity
    //         type="number"
    //         disabled={formDisabled}
    //         value={newPackingListItem.itemQuantity}
    //         onChange={(event) =>
    //           handleUpdateNewPackingListItemQuantity(event.target.value)
    //         }
    //         min="0"
    //         max="999"
    //       />
    //     </InputContainer>
  );
}
