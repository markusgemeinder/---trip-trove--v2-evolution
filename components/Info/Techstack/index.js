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

export default function InfoTechstack() {
  return (
    <InfoCard>
      <InfoAvatar
        src="/images/logo_techstack.png"
        width={100}
        height={100}
        alt="Project"
      ></InfoAvatar>
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
