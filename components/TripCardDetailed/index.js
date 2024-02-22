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
import TripDetailsBadge from "@/components/Badge/TripDetailsBadge";
import CreateDateBadge from "@/components/Badge/CreateDateBadge";

const StyledMessage = styled.h2`
  margin: 2rem auto;
`;

const StyledCard = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-flow: column wrap;
  gap: 0.2rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 300px;
  padding: 0.2rem 1.2rem;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;

  @media (min-width: 600px) {
    width: 500px;
    margin-top: 2.6rem;
    padding: 1rem 2rem;
`;

const CardDestination = styled.h2`
  margin: 0.8rem;
  padding-top: 0.4rem;
  text-align: center;
  align-self: center;
  color: var(--color-card-title);
  font-size: 1.6rem;
  
  @media (min-width: 600px) {
    font-size: 1.8rem;

`;

const CardImage = styled(Image)`
  margin: 0;
  padding: 0;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  align-self: center;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const DetailsContainer = styled.div`
  margin: 0;
  padding: 0.8rem;
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-badge);
  gap: 8px;
  margin-top: 0.3rem;

  &:last-child {
    margin-bottom: 0.8rem;
  }
`;

const DetailsLabel = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 0.2rem;
  color: var(--color-badge-label-dark);
  font-size: 0.6rem;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

const DetailsText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: var(--color-badge-text);

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

const PackList = styled.ul`
  margin: auto;
  padding: 0;
`;

const PackListHeader = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 5.6fr 1.4fr;
  justify-content: center;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;

  @media (min-width: 600px) {
    grid-template-columns: 0.8fr 6fr 1.2fr;
  }
`;

const PackListHeaderText = styled.p`
  justify-self: center;
  font-size: 0.6rem;
  color: var(--color-badge-label);
  padding: 0;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

const PackListHeaderTextLeft = styled(PackListHeaderText)`
  justify-self: flex-start;
  padding-left: 14px;
`;

const PackListContainer = styled.li`
  display: grid;
  grid-template-columns: 1.1fr 5.6fr 1.4fr;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  margin-top: 6px;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 0.8fr 6fr 1.2fr;
  }
`;

const PackListField = styled.div`
  background-color: var(--color-badge-on-badge);
  border-radius: 5px;
  padding: 0.5rem;
  align-self: flex-start;
  height: 100%;

  @media (min-width: 600px) {
    border-radius: 8px;
    padding: 0.7rem;
  }
`;

const StyledCheckBox = styled.input`
  width: 20px;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const StyledItemName = styled(DetailsText)`
  word-break: break-all;
`;

const StyledItemQuantity = styled(DetailsText)`
  text-align: center;
`;

export default function TripCardDetailed() {
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
        <CardDestination>{trip.destination}</CardDestination>
        <TripDetailsBadge startDate={trip.start} endDate={trip.end} />

        <CardImage
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
            <DetailsContainer>
              <DetailsLabel>Notes:</DetailsLabel>
              <DetailsText>{trip.notes}</DetailsText>
            </DetailsContainer>
          </>
        )}
        {trip.packingList && trip.packingList.length !== 0 && (
          <>
            <DetailsContainer>
              <DetailsLabel>Packing List:</DetailsLabel>
              <PackListHeader>
                <PackListHeaderText>Done</PackListHeaderText>
                <PackListHeaderTextLeft>Item</PackListHeaderTextLeft>
                <PackListHeaderText>Qty</PackListHeaderText>
              </PackListHeader>
              <PackList>
                {filteredPackingList?.map((item) => (
                  <PackListContainer key={item._id}>
                    <PackListField>
                      <StyledCheckBox
                        type="checkbox"
                        checked={item.isPacked}
                        onChange={() => handleCheckIsPacked(item._id)}
                      />
                    </PackListField>
                    <PackListField>
                      <StyledItemName>{item.itemName}</StyledItemName>
                    </PackListField>
                    {item.itemQuantity && (
                      <>
                        <PackListField>
                          <StyledItemQuantity>
                            {item.itemQuantity}
                          </StyledItemQuantity>
                        </PackListField>
                      </>
                    )}
                  </PackListContainer>
                ))}
              </PackList>
            </DetailsContainer>
          </>
        )}
      </StyledCard>
    </>
  );
}
