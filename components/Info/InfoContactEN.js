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
      <InfoHeadline>Markus Gemeinder</InfoHeadline>

      <InfoText>
        Self-employed in the field of coaching and marketing - open to new
        opportunities and seeking a side job in web development.
      </InfoText>
      <InfoText>
        Available from November to February (with limitations during the
        coaching main season from March to October).
      </InfoText>
      <InfoLinkContainer>
        <InfoLink href="tel:+491716444010">Phone: +49 171 6444010</InfoLink>
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
