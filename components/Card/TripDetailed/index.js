import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import { toastDuration } from "@/lib/utils";
import {
  ButtonContainer,
  StyledTextButtonMediumSize,
} from "@/components/Button/TextButton";
import toast, { Toaster } from "react-hot-toast";
import { ToastMessage } from "@/components/ToastMessage";
import {
  StyledCard,
  CardTitle,
  CardText,
  CardImageWithLink,
  DetailsLabel,
  StyledBadge,
  StyledBadgeOnBadge,
  PackList,
  PackListHeader,
  PackListHeaderText,
  PackListHeaderTextLeft,
  PackListContainer,
  StyledCheckBox,
  StyledItemName,
  StyledItemQuantity,
} from "@/components/Card/Card.styled";

import TripDetailsBadge from "@/components/Badge/TripDetailsBadge";
import CreateDateBadge from "@/components/Badge/CreateDateBadge";

const StyledMessage = styled.h2`
  margin: 2rem auto;
`;

export default function TripDetailed() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: trip, isLoading, error } = useSWR(`/api/trips/${id}`);

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  async function handleEdit() {
    router.push(`${id}/edit`);
  }

  async function handleDelete() {
    setButtonsDisabled(true);
    toast(
      <ToastMessage
        message="Are you sure to delete trip?"
        textConfirmButton="Yes, delete."
        messageAfterConfirm="Trip successfully deleted."
        textCancelButton="No, don&rsquo;t delete!"
        messageAfterCancel="Trip not deleted."
        onConfirm={() => {
          deleteTrip();
        }}
        onCancel={() => {
          setButtonsDisabled(false);
        }}
      />,
      { duration: Infinity }
    );
  }

  async function deleteTrip() {
    try {
      await fetch(`/api/trips/${id}`, {
        method: "DELETE",
      });
      await new Promise((resolve) => setTimeout(resolve, toastDuration));
      router.push("/");
    } catch (error) {
      setButtonsDisabled(false);
      toast.dismiss();
      toast.error("Error deleting trip!"), { duration: toastDuration };
    }
  }

  async function handleCheckIsPacked(itemId) {
    const updatedPackingList = trip.packingList.map((item) => {
      if (item._id === itemId) {
        return { ...item, isPacked: !item.isPacked };
      }
      return item;
    });

    try {
      const response = await fetch(`/api/trips/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ packingList: updatedPackingList }),
      });

      if (response.ok) {
        const updatedTrip = {
          ...trip,
          packingList: updatedPackingList,
          updatedAt: new Date().toISOString(),
        };
        mutate(`/api/trips/${id}`, updatedTrip, false);
      } else {
        throw new Error("Failed to update packing list");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error updating packing list!"), { duration: toastDuration };
    }
  }

  if (error)
    return <StyledMessage>Error, please try again later...</StyledMessage>;
  if (!isReady || isLoading) return <StyledMessage>Loading...</StyledMessage>;

  const filteredPackingList = trip?.packingList?.filter(
    (item) => item.itemName && item.itemName.trim() !== ""
  );

  return (
    <>
      <Toaster />
      <StyledCard>
        <CardTitle>{trip.destination}</CardTitle>
        <TripDetailsBadge startDate={trip.start} endDate={trip.end} />

        <CardImageWithLink
          src={
            trip.image.url !== ""
              ? trip.image.url
              : "/images/default.png?t=" + new Date().getTime()
          }
          width={300}
          height={300}
          alt={trip.destination}
          onClick={handleEdit}
        />
        <CreateDateBadge
          createdAt={trip.createdAt}
          updatedAt={trip.updatedAt}
        />
        <ButtonContainer>
          <StyledTextButtonMediumSize
            onClick={handleDelete}
            disabled={buttonsDisabled}
          >
            Delete
          </StyledTextButtonMediumSize>
          <StyledTextButtonMediumSize
            onClick={handleEdit}
            disabled={buttonsDisabled}
          >
            Edit
          </StyledTextButtonMediumSize>
        </ButtonContainer>
        {trip.notes !== "" && (
          <>
            <StyledBadge>
              <DetailsLabel>Notes:</DetailsLabel>
              <CardText>{trip.notes}</CardText>
            </StyledBadge>
          </>
        )}
        {trip.packingList && trip.packingList.length !== 0 && (
          <>
            <StyledBadge>
              <DetailsLabel>Packing List:</DetailsLabel>
              <PackListHeader>
                <PackListHeaderText>Done</PackListHeaderText>
                <PackListHeaderTextLeft>Item</PackListHeaderTextLeft>
                <PackListHeaderText>Qty</PackListHeaderText>
              </PackListHeader>
              <PackList>
                {filteredPackingList?.map((item) => (
                  <PackListContainer key={item._id}>
                    <StyledBadgeOnBadge>
                      <StyledCheckBox
                        type="checkbox"
                        checked={item.isPacked}
                        onChange={() => handleCheckIsPacked(item._id)}
                      />
                    </StyledBadgeOnBadge>
                    <StyledBadgeOnBadge>
                      <StyledItemName>{item.itemName}</StyledItemName>
                    </StyledBadgeOnBadge>
                    {item.itemQuantity && (
                      <>
                        <StyledBadgeOnBadge>
                          <StyledItemQuantity>
                            {item.itemQuantity}
                          </StyledItemQuantity>
                        </StyledBadgeOnBadge>
                      </>
                    )}
                  </PackListContainer>
                ))}
              </PackList>
            </StyledBadge>
          </>
        )}
      </StyledCard>
    </>
  );
}
