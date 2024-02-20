import useSWR from "swr";
import TripForm from "@/components/TripForm";
import BackButton from "@/components/Button/BackButton";
import toast, { Toaster } from "react-hot-toast";

export default function CreateTripPage() {
  const { mutate } = useSWR("/api/trips");

  async function handleSubmit(tripData) {
    const response = await fetch(`/api/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
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

  return (
    <>
      <Toaster />
      <TripForm onSubmit={handleSubmit} isEditMode={false} />
      <BackButton href="/" />
    </>
  );
}
