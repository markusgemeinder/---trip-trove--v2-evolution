import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { toastDuration } from "@/lib/utils";
import { ToastMessage } from "@/components/ToastMessage";

export function usePresetFormData(defaultData, onSubmit, isEditMode) {
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

    function determinePageExitDestinationUrl() {
      return "/presets/";
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
  }, [hasChanges]);

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

    const emptyItemIndex = handoverData.items.findIndex(
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

    const hasEmptyItems = handoverData.items.some(
      (item) => item.itemName.trim() === "" && item.itemQuantity === null
    );

    if (
      handoverData.items.length === 0 ||
      (handoverData.items.length === 1 && hasEmptyItems)
    ) {
      toast.error("Empty packing list! Please add items.", {
        duration: toastDuration,
      });
      return;
    }
    const modifiedHandoverData =
      handoverData?.items.length === 1 && hasEmptyItems
        ? {
            ...handoverData,
            items: [],
          }
        : handoverData?.items.length > 1 && hasEmptyItems
        ? {
            ...handoverData,
            items: handoverData.items.filter(
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
    handleInput,
    handleReset,
    handleSubmit,
  };
}
