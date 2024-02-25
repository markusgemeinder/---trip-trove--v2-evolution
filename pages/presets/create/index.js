import useSWR from "swr";
import PresetForm from "@/components/Form/PresetForm";
import BackButton from "@/components/Button/BackButton";
import toast, { Toaster } from "react-hot-toast";
import LoadingMessage from "@/components/Message/LoadingMessage";
import ErrorMessage from "@/components/Message/ErrorMessage";

export default function CreatePreset() {
  const { isLoading, error, mutate } = useSWR("/api/trips");

  async function handleSubmit(presetData) {
    const response = await fetch(`/api/presets`, {
      method: "POST",
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
      <PresetForm onSubmit={handleSubmit} isEditMode={false} />
      {/* <PresetForm /> */}
      <BackButton href="/presets" />
    </>
  );
}
