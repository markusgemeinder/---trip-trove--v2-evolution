import {
  InfoCard,
  InfoAvatar,
  InfoTitle,
  InfoHeadline,
  InfoImage,
  InfoImageWithLink,
  InfoText,
  InfoListContainer,
  InfoList,
  InfoLink,
} from "@/components/Info/Info.styled";

export default function InfoContact({ currentCard, totalCards }) {
  return (
    <InfoCard>
      <InfoText>
        {currentCard} / {totalCards}
      </InfoText>
      <InfoAvatar
        src="/images/gmndr-pic.jpg"
        width={100}
        height={100}
        alt="Project"
      ></InfoAvatar>
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
