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

export default function InfoNeueFische() {
  return (
    <InfoCard>
      <InfoAvatar
        src="/images/logo_neue-fische.png"
        width={100}
        height={100}
        alt="Project"
      ></InfoAvatar>
      <InfoTitle>Web Development Bootcamp</InfoTitle>
      <InfoHeadline>Bootcamp</InfoHeadline>
      <InfoLink href="https://neuefische.de" target="_blank">
        neue fische | School and Pool for Digital Talent
      </InfoLink>
      <InfoText>
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
        dictum felis eu pede mollis pretium.
      </InfoText>

      <InfoImage
        src="/images/neue_fische_certificate_1.png"
        width={1800}
        height={1272}
        alt="Certificate (front)"
      ></InfoImage>
      <InfoImage
        src="/images/neue_fische_certificate_2.png"
        width={1800}
        height={1272}
        alt="Certificate (back)"
      ></InfoImage>
    </InfoCard>
  );
}
