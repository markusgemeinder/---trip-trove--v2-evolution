import {
  InfoCard,
  InfoCardHeader,
  InfoPagination,
  InfoAvatar,
  InfoTitle,
  InfoHeadline,
  InfoText,
  InfoListContainer,
  InfoList,
} from "@/components/Info/Info.styled";

export default function InfoContact({ currentCard, totalCards }) {
  return (
    <InfoCard>
      <InfoCardHeader>
        <InfoPagination>
          {currentCard} / {totalCards}
        </InfoPagination>
        <InfoAvatar
          src="/images/gmndr-pic.jpg"
          width={100}
          height={100}
          alt="Project"
        ></InfoAvatar>
      </InfoCardHeader>
      <InfoTitle>Contact</InfoTitle>
      <InfoHeadline>Headline</InfoHeadline>
      <InfoText>
        Nulla consequat massa quis enim. Nullam dictum felis eu pede mollis
        pretium.
      </InfoText>
      <InfoListContainer>
        <InfoList>Name</InfoList>
        <InfoList>Phone</InfoList>
        <InfoList>Mail</InfoList>
        <InfoList>IG/FB</InfoList>
      </InfoListContainer>
    </InfoCard>
  );
}
