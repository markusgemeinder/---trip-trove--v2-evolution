import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { toastDuration } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import { ToastMessage } from "@/components/ToastMessage";
import PresetCard from "@/components/Card/PresetCard";
import { CardListContainer, CardList } from "@/components/Card/Card.styled";
import LoadingMessage from "@/components/Message/LoadingMessage";
import ErrorMessage from "@/components/Message/ErrorMessage";

export default function PresetList() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: presets, isLoading, error } = useSWR("/api/presets/");

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  async function handleEdit(presetId) {
    router.push(`/presets/${presetId}/edit`);
  }

  async function handleDelete(presetId) {
    setButtonsDisabled(true);
    toast(
      <ToastMessage
        message="Are you sure to delete preset?"
        textConfirmButton="Yes, delete."
        messageAfterConfirm="Preset successfully deleted."
        textCancelButton="No, don&rsquo;t delete!"
        messageAfterCancel="Preset not deleted."
        onConfirm={() => {
          deleteTrip(presetId);
        }}
        onCancel={() => {
          setButtonsDisabled(false);
        }}
      />,
      { duration: Infinity }
    );
  }

  async function deleteTrip(presetId) {
    try {
      await fetch(`/api/presets/${presetId}`, {
        method: "DELETE",
      });
      mutate("/api/presets/");
      await new Promise((resolve) => setTimeout(resolve, toastDuration));
      router.push("/presets");
    } catch (error) {
      setButtonsDisabled(false);
      toast.dismiss();
      toast.error("Error deleting preset!"), { duration: toastDuration };
    }
  }

  if (isLoading) return <LoadingMessage />;

  if (error) return <ErrorMessage />;

  return (
    <>
      <Toaster />

      <CardListContainer>
        {presets.map((preset) => (
          <CardList preset={preset} key={preset._id}>
            <PresetCard
              preset={preset}
              key={preset._id}
              onDelete={() => handleDelete(preset._id)}
              onEdit={() => handleEdit(preset._id)}
            />
          </CardList>
        ))}
      </CardListContainer>
    </>
  );
}
