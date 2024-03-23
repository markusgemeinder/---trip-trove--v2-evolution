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

export default function InfoContactEN({ currentCard, totalCards }) {
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
          alt="Contact"
        ></InfoAvatar>
      </InfoCardHeader>
      <InfoTitle>Contact</InfoTitle>
      <InfoText>
        Open to new challenges in the field of web development. (Fully available
        during my coaching off-season from November to February – limited
        availability during the main season from March to October.)
      </InfoText>
      <InfoListContainer>
        <InfoList>Name: Markus Gemeinder</InfoList>
        <InfoList>Phone: +49 171 6444010</InfoList>
        <InfoList>E-Mail: info(at)gemeinder-coaching.de</InfoList>
        <InfoList>GitHub: markusgemeinder</InfoList>
        <InfoList>IG/FB: @gemeindercoaching</InfoList>
      </InfoListContainer>
    </InfoCard>
  );
}
