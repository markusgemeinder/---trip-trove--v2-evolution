import useSWR from "swr";
import { useRouter } from "next/router";
import PresetForm from "@/components/Form/PresetForm";
import BackButton from "@/components/Button/BackButton";
import { toast, Toaster } from "react-hot-toast";

export default function EditPreset() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const {
    data: preset,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/presets/${id}`);

  const handleSubmit = async (presetData) => {
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
  };

  return (
    <>
      <Toaster />
      <PresetForm
        onSubmit={handleSubmit}
        defaultData={preset}
        isEditMode={true}
      />
      {/* <PresetForm /> */}
      <BackButton href={"/presets/"} />
    </>
  );
}
