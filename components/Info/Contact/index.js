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
      <InfoTitle>Kontakt</InfoTitle>
      <InfoText>
        Offen für neue Aufgaben im Bereich Web Development. (Voll verfügbar in
        meiner Coaching-Nebensaison von November bis Februar – eingeschränkt
        verfügbar in der Hauptsaison von März bis Oktober.)
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
