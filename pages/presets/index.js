import useSWR from "swr";
import BackButton from "@/components/Button/BackButton";
import PresetList from "@/components/Card/PresetList";

export default function PresetsPage() {
  const {
    data: presets,
    error,
    isLoading,
  } = useSWR("/api/presets", {
    fallbackData: [],
  });

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <PresetList presets={presets} />
      <BackButton href="/" />
    </>
  );
}

// import styled from "styled-components";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import useSWR, { mutate } from "swr";
// import { toastDuration } from "@/lib/utils";
// import {
//   ButtonContainer,
//   StyledTextButton,
// } from "@/components/Button/TextButton";
// import toast, { Toaster } from "react-hot-toast";
// import { ToastMessage } from "@/components/ToastMessage";

// const StyledMessage = styled.h2`
//   margin: 2rem auto;
// `;

// export default function TripDetailed() {
//   const router = useRouter();
//   const { isReady } = router;
//   const { id } = router.query;

//   const { data: trip, isLoading, error } = useSWR(`/api/trips/${id}`);

//   const [buttonsDisabled, setButtonsDisabled] = useState(false);

//   async function handleEdit() {
//     router.push(`${id}/edit`);
//   }

//   async function handleDelete() {
//     setButtonsDisabled(true);
//     toast(
//       <ToastMessage
//         message="Are you sure to delete trip?"
//         textConfirmButton="Yes, delete."
//         messageAfterConfirm="Trip successfully deleted."
//         textCancelButton="No, don&rsquo;t delete!"
//         messageAfterCancel="Trip not deleted."
//         onConfirm={() => {
//           deleteTrip();
//         }}
//         onCancel={() => {
//           setButtonsDisabled(false);
//         }}
//       />,
//       { duration: Infinity }
//     );
//   }

//   async function deleteTrip() {
//     try {
//       await fetch(`/api/trips/${id}`, {
//         method: "DELETE",
//       });
//       await new Promise((resolve) => setTimeout(resolve, toastDuration));
//       router.push("/");
//     } catch (error) {
//       setButtonsDisabled(false);
//       toast.dismiss();
//       toast.error("Error deleting trip!"), { duration: toastDuration };
//     }
//   }

//   async function handleCheckIsPacked(itemId) {
//     const updatedPackingList = trip.packingList.map((item) => {
//       if (item._id === itemId) {
//         return { ...item, isPacked: !item.isPacked };
//       }
//       return item;
//     });

//     try {
//       const response = await fetch(`/api/trips/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ packingList: updatedPackingList }),
//       });

//       if (response.ok) {
//         const updatedTrip = {
//           ...trip,
//           packingList: updatedPackingList,
//           updatedAt: new Date().toISOString(),
//         };
//         mutate(`/api/trips/${id}`, updatedTrip, false);
//       } else {
//         throw new Error("Failed to update packing list");
//       }
//     } catch (error) {
//       toast.dismiss();
//       toast.error("Error updating packing list!"), { duration: toastDuration };
//     }
//   }

//   if (error)
//     return <StyledMessage>Error, please try again later...</StyledMessage>;
//   if (!isReady || isLoading) return <StyledMessage>Loading...</StyledMessage>;

//   const filteredPackingList = trip?.packingList?.filter(
//     (item) => item.itemName && item.itemName.trim() !== ""
//   );
