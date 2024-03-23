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

export default function InfoTechstack({ currentCard, totalCards }) {
  return (
    <InfoCard>
      <InfoCardHeader>
        <InfoPagination>
          {currentCard} / {totalCards}
        </InfoPagination>
        <InfoAvatar
          src="/images/logo_techstack.png"
          width={100}
          height={100}
          alt="Project"
        ></InfoAvatar>
      </InfoCardHeader>
      <InfoTitle>Techstack</InfoTitle>
      <InfoHeadline>Headline</InfoHeadline>
      <InfoText>
        Nulla consequat massa quis enim. Nullam dictum felis eu pede mollis
        pretium.
      </InfoText>
      <InfoListContainer>
        <InfoList>sdjfkaödsjfklaös</InfoList>
        <InfoList>aödsjfklaös sadfasdf</InfoList>
      </InfoListContainer>
    </InfoCard>
  );
}
