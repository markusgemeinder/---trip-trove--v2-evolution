import mongoose from "mongoose";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { toastDuration, validateTripDates } from "@/lib/utils";
import { ToastMessage } from "@/components/ToastMessage";
// import { packingListTemplates } from "@/lib/packingListTemplates";
import { deleteImage } from "@/components/ImageUpload";

export function generateObjectId() {
  const { ObjectId } = mongoose.Types;
  const newObjectId = new ObjectId().toString();
  return newObjectId;
}

export function useFormData(defaultData, onSubmit, isEditMode) {
  const [formDisabled, setFormDisabled] = useState(false);
  const [handoverData, setHandoverData] = useState(defaultData);
  const [hasChanges, setHasChanges] = useState(false);
  const { ObjectId } = mongoose.Types;
  const [newPackingListItem, setNewPackingListItem] = useState({
    itemName: "",
    itemQuantity: null,
  });
  const [selectedPreset, setSelectedPreset] = useState([]);
  const [lastAppliedTemplate, setLastAppliedTemplate] = useState(null);

  const router = useRouter();
  const id = defaultData?._id;

  useEffect(() => {
    function handleRouteChange(url) {
      if (hasChanges) {
        showCustomToastPageExit();
        throw "routeChange aborted.";
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", () => {
        if (hasChanges) {
          showCustomToastPageExit();
        }
      });

      const router = require("next/router").default;
      router.events.on("routeChangeStart", handleRouteChange);

      return () => {
        router.events.off("routeChangeStart", handleRouteChange);
      };
    }
  }, [hasChanges]);

  function determinePageExitDestinationUrl() {
    if (isEditMode) {
      return `/trips/${id}`;
    } else {
      return "/";
    }
  }

  function showCustomToastPageExit() {
    toast.dismiss();
    setFormDisabled(true);

    toast(
      <ToastMessage
        message="You have unsaved changes. Leave this page without saving?"
        textConfirmButton="Yes, leave."
        // messageAfterConfirm="Page left without saving data." // doesn't work properly with /pages/create/index.js
        textCancelButton="No, stay!"
        messageAfterCancel="Don&rsquo;t forget to save your data."
        onConfirm={() => {
          setFormDisabled(false);
          setHasChanges(false);
          const destinationUrl = determinePageExitDestinationUrl();
          setTimeout(toastDuration);
          toast.dismiss();
          router.push(destinationUrl);
        }}
        onCancel={() => {
          setFormDisabled(false);
          setTimeout(toastDuration);
          toast.dismiss;
        }}
      />,
      { duration: Infinity }
    );
  }

  async function handleImageUpdate(url, width, height, public_id) {
    setHandoverData((prevData) => ({
      ...prevData,
      image: {
        url: url,
        width: width,
        height: height,
        publicId: public_id,
      },
    }));
    setHasChanges(true);
  }

  async function handleDeleteImage() {
    toast.dismiss();
    setFormDisabled(true);

    toast(
      <ToastMessage
        message="Are you sure to delete image?"
        textConfirmButton="Yes, delete please."
        messageAfterConfirm="Ok, image deleted."
        textCancelButton="No, don&rsquo;t delete!"
        messageAfterCancel="Ok, image not deleted."
        onConfirm={() => {
          // onConfirm={async () => {
          // await deleteImage(handoverData.image.publicId);
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

  function generatePackingListFromTemplate(selectedPreset) {
    console.log("Apply:", selectedPreset);
    const isSelected = selectedPreset.preset ? true : false;

    console.log("isSelected:", isSelected);

    if (!isSelected) {
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
  // function generatePackingListFromTemplate() {
  //   if (!selectedTemplate) {
  //     toast.error("Please select a preset before applying.", {
  //       duration: toastDuration,
  //     });
  //     return;
  //   }
  //   if (lastAppliedTemplate === selectedTemplate) {
  //     return;
  //   }

  //   setLastAppliedTemplate(selectedTemplate);

  //   const template = packingListTemplates[selectedTemplate];
  //   const updatedPackingList = [...handoverData.packingList];

  //   const lastItem = updatedPackingList[updatedPackingList.length - 1];
  //   if (lastItem && lastItem.itemName === "") {
  //     updatedPackingList.pop();
  //     updatedPackingList.push(
  //       ...template.map((item) => ({
  //         ...item,
  //         _id: generateObjectId(),
  //       }))
  //     );
  //   } else {
  //     updatedPackingList.push(
  //       ...template.map((item) => ({
  //         ...item,
  //         _id: generateObjectId(),
  //       }))
  //     );
  //   }

  //   setHandoverData((prevData) => ({
  //     ...prevData,
  //     packingList: updatedPackingList,
  //   }));
  //   setHasChanges(true);
  // }

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
    hasChanges,
    handleImageUpdate,
    handleDeleteImage,
    newPackingListItem,
    selectedPreset,
    setSelectedPreset,
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
