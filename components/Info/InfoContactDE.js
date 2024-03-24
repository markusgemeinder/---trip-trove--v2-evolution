import {
  InfoCard,
  InfoCardHeader,
  InfoPagination,
  InfoAvatar,
  InfoTitle,
  InfoHeadline,
  InfoText,
  InfoLinkContainer,
  InfoLink,
} from "@/components/Info/Info.styled";

export default function InfoContactDE({ currentCard, totalCards }) {
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
          alt="Kontakt"
        ></InfoAvatar>
      </InfoCardHeader>
      <InfoTitle>Kontakt</InfoTitle>
      <InfoHeadline>Markus Gemeinder</InfoHeadline>
      <InfoText>
        Selbständig im Bereich Coaching und Marketing – offen für neue Aufgaben
        im Bereich Web Development.
      </InfoText>

      <InfoText>
        Frei verfügbar von November bis Februar (während der
        Coaching-Hauptsaison von März bis Oktober mit Einschränkung).
      </InfoText>
      <InfoLinkContainer>
        <InfoLink href="tel:+491716444010">Tel.: +49 171 6444010</InfoLink>
        <InfoLink href="mailto:info@gemeinder-coaching.de">
          info(at)gemeinder-coaching.de
        </InfoLink>
        <InfoLink href="https://www.gemeinder-coaching.de" target="_blank">
          www.gemeinder-coaching.de
        </InfoLink>
        <InfoLink href="https://github.com/markusgemeinder" target="_blank">
          GitHub: markusgemeinder
        </InfoLink>
        <InfoLink
          href="https://www.instagram.com/gemeindercoaching"
          target="_blank"
        >
          Instagram: @gemeindercoaching
        </InfoLink>
        <InfoLink
          href="https://www.facebook.com/gemeindercoaching"
          target="_blank"
        >
          Facebook: @gemeindercoaching
        </InfoLink>
      </InfoLinkContainer>
    </InfoCard>
  );
}
