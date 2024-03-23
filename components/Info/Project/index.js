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

export default function InfoProject({ currentCard, totalCards }) {
  return (
    <InfoCard>
      <InfoText>
        Page {currentCard} of {totalCards}
      </InfoText>
      <InfoAvatar
        src="/images/logo_triptrove_heart.png"
        width={100}
        height={100}
        alt="Project"
      ></InfoAvatar>
      <InfoTitle>Project</InfoTitle>
      <InfoHeadline>Headline</InfoHeadline>
      <InfoLink
        href="https://trip-trove-v1-neue-fische-capstone-finale-20240209.vercel.app/"
        target="_blank"
      >
        "TripTrove" (Version 1)
      </InfoLink>
      <InfoLink
        href="https://github.com/markusgemeinder/---trip-trove--v1-neue-fische-capstone-finale-20240209"
        target="_blank"
      >
        Code GitHub (Version 1)
      </InfoLink>
      <InfoText>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium.
      </InfoText>
      <InfoLink
        href="https://github.com/markusgemeinder/---trip-trove--v2-evolution"
        target="_blank"
      >
        Code GitHub (Version 2)
      </InfoLink>
      <InfoListContainer>
        <InfoList>sdjfkaödsjfklaös</InfoList>
        <InfoList>aödsjfklaös sadfasdf</InfoList>
      </InfoListContainer>
    </InfoCard>
  );
}
