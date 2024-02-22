import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { toastDuration, validateTripDates } from "@/lib/utils";
import { ToastMessage } from "@/components/ToastMessage";

export function useFormData(defaultData, onSubmit, isEditMode) {
  const [formDisabled, setFormDisabled] = useState(false);
  const [handoverData, setHandoverData] = useState(defaultData);
  const [hasChanges, setHasChanges] = useState(false);

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

  function handleInput(event) {
    setHandoverData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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

    const emptyItemIndex = handoverData.packingList.findIndex(
      (item) => item.itemName.trim() === "" && item.itemQuantity !== null
    );

    if (emptyItemIndex !== -1) {
      const itemNumber = emptyItemIndex + 1;
      toast.error(`Please name item or delete No. ${itemNumber}!`, {
        duration: toastDuration,
      });
      setFormDisabled(false);
      return;
    }

    const hasEmptyItems = handoverData.packingList.some(
      (item) => item.itemName.trim() === "" && item.itemQuantity === null
    );

    if (
      handoverData.packingList.length === 0 ||
      (handoverData.packingList.length === 1 && hasEmptyItems)
    ) {
      toast.error(
        "Empty packing list! Don\u2019t forget to add items if required.",
        {
          duration: toastDuration,
        }
      );
    }
    const modifiedHandoverData =
      handoverData?.packingList.length === 1 && hasEmptyItems
        ? {
            ...handoverData,
            packingList: [],
          }
        : handoverData?.packingList.length > 1 && hasEmptyItems
        ? {
            ...handoverData,
            packingList: handoverData.packingList.filter(
              (item) =>
                item.itemName.trim() !== "" || item.itemQuantity !== null
            ),
          }
        : handoverData;

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
  };
}
