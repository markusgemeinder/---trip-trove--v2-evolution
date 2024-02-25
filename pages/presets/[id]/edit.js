import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { toastDuration } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import { ToastMessage } from "@/components/ToastMessage";
import PresetForm from "@/components/Form/PresetForm";
import BackButton from "@/components/Button/BackButton";
import LoadingMessage from "@/components/Message/LoadingMessage";
import ErrorMessage from "@/components/Message/ErrorMessage";

export default function EditPreset() {
  const router = useRouter();
  // const { isReady } = router;
  const { id } = router.query;

  const {
    data: preset,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/presets/${id}`);

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  async function handleEdit() {
    router.push(`${id}/edit`);
  }

  async function handleDelete() {
    setButtonsDisabled(true);
    toast(
      <ToastMessage
        message="Are you sure to delete preset?"
        textConfirmButton="Yes, delete."
        messageAfterConfirm="Preset successfully deleted."
        textCancelButton="No, don&rsquo;t delete!"
        messageAfterCancel="Preset not deleted."
        onConfirm={() => {
          deletePreset();
        }}
        onCancel={() => {
          setButtonsDisabled(false);
        }}
      />,
      { duration: Infinity }
    );
  }

  async function deletePreset() {
    try {
      await fetch(`/api/presets/${id}`, {
        method: "DELETE",
      });
      await new Promise((resolve) => setTimeout(resolve, toastDuration));
      router.push("/presets");
    } catch (error) {
      setButtonsDisabled(false);
      toast.dismiss();
      toast.error("Error deleting preset!"), { duration: toastDuration };
    }
  }

  async function handleSubmit(presetData) {
    const response = await fetch(`/api/presets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(presetData),
    });

    if (response.ok) {
      mutate();
    }

    if (!response.ok) {
      toast.error(
        "Oops! Something went wrong while processing your request. Please check your input and try again."
      );
    }
  }

  if (isLoading) return <LoadingMessage />;

  if (error) return <ErrorMessage />;

  return (
    <>
      <Toaster />
      <PresetForm
        onSubmit={handleSubmit}
        defaultData={preset}
        isEditMode={true}
      />
      <BackButton href={"/presets/"} />
    </>
  );
}
