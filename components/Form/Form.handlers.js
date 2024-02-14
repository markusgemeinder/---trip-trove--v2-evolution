import mongoose from "mongoose";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { toastDuration, validateTripDates } from "@/lib/utils";
import { ToastMessage } from "@/components/ToastMessage";
import { packingListTemplates } from "@/lib/packingListTemplates";
import { deleteImage } from "@/components/ImageUpload";

export function generateObjectId() {
  const { ObjectId } = mongoose.Types;
  const newObjectId = new ObjectId().toString();
  return newObjectId;
}

export function useFormData(defaultData, onSubmit) {
  const [formDisabled, setFormDisabled] = useState(false);
  const [handoverData, setHandoverData] = useState(defaultData);
  const [hasChanges, setHasChanges] = useState(false);
  const { ObjectId } = mongoose.Types;
  const [newPackingListItem, setNewPackingListItem] = useState({
    itemName: "",
    itemQuantity: null,
  });
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [lastAppliedTemplate, setLastAppliedTemplate] = useState(null);
  const [lastImageData, setLastImageData] = useState(defaultData?.image); // Initialize with defaultData?.image

  useEffect(() => {
    // Update lastImageData whenever url, width, or height changes
    setLastImageData((prevImageData) => ({
      image: {
        url: handoverData?.image?.url || prevImageData?.image?.url,
        width: handoverData?.image?.width || prevImageData?.image?.width,
        height: handoverData?.image?.height || prevImageData?.image?.height,
        publicId:
          handoverData?.image?.publicId || prevImageData?.image?.publicId,
      },
    }));
  }, [handoverData?.image?.url]);

  function handleImageUpdate(url, width, height, public_id) {
    setHandoverData((prevData) => ({
      ...prevData,
      image: {
        url: url,
        width: width,
        height: height,
        publicId: public_id,
      },
    }));

    // Move the console.log statement outside the setHandoverData function
    console.log("handleImageUpdate Parameters:", {
      url: url,
      width: width,
      height: height,
      publicId: public_id,
    });
  }

  useEffect(() => {
    console.log("handoverData:", handoverData);
  }, [handoverData]);

  function handleDeleteImage() {
    toast.dismiss();
    setFormDisabled(true);

    toast(
      <ToastMessage
        message="Are you sure to delete image?"
        textConfirmButton="Yes, delete please."
        messageAfterConfirm="Ok, image deleted."
        textCancelButton="No, don&rsquo;t delete!"
        messageAfterCancel="Ok, image not deleted."
        onConfirm={async () => {
          await deleteImage(handoverData.image.public_id);
          setHandoverData((prevData) => ({
            ...prevData,
            imageURL: "",
            image: {
              url: "",
              width: null,
              height: null,
              publicId: null,
            },
          }));
          setFormDisabled(false);
          setHasChanges(true);
        }}
        onCancel={() => {
          setFormDisabled(false);
          setHasChanges(false);
        }}
      />,
      { duration: Infinity }
    );
  }

  function generatePackingListFromTemplate() {
    if (!selectedTemplate) {
      toast.error("Please select a preset before applying.", {
        duration: toastDuration,
      });
      return;
    }
    if (lastAppliedTemplate === selectedTemplate) {
      return;
    }

    setLastAppliedTemplate(selectedTemplate);

    const template = packingListTemplates[selectedTemplate];
    const updatedPackingList = [...handoverData.packingList];

    const lastItem = updatedPackingList[updatedPackingList.length - 1];
    if (lastItem && lastItem.itemName === "") {
      updatedPackingList.pop();
      updatedPackingList.push(
        ...template.map((item) => ({
          ...item,
          _id: generateObjectId(),
        }))
      );
    } else {
      updatedPackingList.push(
        ...template.map((item) => ({
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

  function handleUpdateNewPackingListItemName(
    newName,
    newPackingListItem,
    setNewPackingListItem
  ) {
    const updatedNewPackingListItem = {
      itemName: newName,
      itemQuantity: newPackingListItem.itemQuantity,
    };
    setNewPackingListItem(updatedNewPackingListItem);
  }

  function handleUpdateNewPackingListItemQuantity(
    newQuantity,
    newPackingListItem,
    setNewPackingListItem
  ) {
    const updatedNewPackingListItem = {
      itemQuantity: newQuantity,
      itemName: newPackingListItem.itemName,
    };
    setNewPackingListItem(updatedNewPackingListItem);
  }

  function handleAddPackingListItem() {
    if (formDisabled) {
      return;
    }

    const lastItem =
      handoverData.packingList[handoverData.packingList.length - 1];

    if (lastItem && lastItem.itemName === "") {
      return;
    }

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

  function handleInput(event) {
    setHandoverData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setHasChanges(true);
  }

  function handleUpdateItem(itemId, itemName, itemQuantity) {
    setHandoverData((prev) => {
      const updatedPackingList = prev.packingList.map((item) =>
        item._id === itemId ? { ...item, itemName, itemQuantity } : item
      );

      return {
        ...prev,
        packingList: updatedPackingList,
      };
    });

    setHasChanges(true);
  }

  function handleRemoveItem(itemIdToRemove) {
    if (formDisabled) {
      return;
    }

    setHandoverData((prevData) => {
      const updatedPackingList = handoverData.packingList.filter((item) => {
        return item._id !== itemIdToRemove;
      });

      return {
        ...prevData,
        packingList: updatedPackingList,
      };
    });
    setHasChanges(true);
  }

  function handleReset() {
    toast.dismiss();
    setFormDisabled(true);
    if (!hasChanges) {
      toast.error("No entries yet, nothing to reset.", {
        duration: toastDuration,
      });
      setFormDisabled(false);
      return;
    }

    toast(
      <ToastMessage
        message="Are you sure to reset form?"
        textConfirmButton="Yes, reset please."
        messageAfterConfirm="Ok, form reset."
        textCancelButton="No, don&rsquo;t reset!"
        messageAfterCancel="Ok, no reset."
        onConfirm={() => {
          setHandoverData(defaultData);
          setNewPackingListItem({
            itemName: "",
            itemQuantity: null,
          });
          setFormDisabled(false);
          setHasChanges(false);
        }}
        onCancel={() => {
          setFormDisabled(false);
        }}
      />,
      { duration: Infinity }
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    toast.dismiss();
    setFormDisabled(true);

    if (!hasChanges) {
      toast.error("No changes yet, nothing to save.", {
        duration: toastDuration,
      });
      setFormDisabled(false);
      return;
    }

    if (!validateTripDates(handoverData)) {
      toast.error("End date earlier than start date.", {
        duration: toastDuration,
      });
      setFormDisabled(false);
      return;
    }

    toast(
      <ToastMessage
        message="Are you sure to save all changes?"
        textConfirmButton="Yes, save please."
        messageAfterConfirm="Data successfully saved."
        textCancelButton="No, don&rsquo;t save."
        messageAfterCancel="Data not saved."
        onConfirm={() => {
          onSubmit(handoverData);
          setFormDisabled(false);
          setHasChanges(false);
        }}
        onCancel={() => {
          setFormDisabled(false);
        }}
      />,
      { duration: Infinity }
    );
  }

  return {
    formDisabled,
    handoverData,
    handleImageUpdate,
    handleDeleteImage,
    newPackingListItem,
    selectedTemplate,
    setSelectedTemplate,
    generatePackingListFromTemplate,
    handleUpdateNewPackingListItemName,
    handleUpdateNewPackingListItemQuantity,
    handleAddPackingListItem,
    handleInput,
    handleUpdateItem,
    handleRemoveItem,
    handleReset,
    handleSubmit,
  };
}
