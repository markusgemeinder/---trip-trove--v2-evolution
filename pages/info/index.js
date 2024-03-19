import {
  InfoCardContainer,
  InfoLink,
  InfoBreadcrumb,
  StyledLink,
  StyledInfoCardWithTransition,
  InfoImage,
  InfoTitle,
} from "@/components/Info/Info.styled";

export default function InfoPage() {
  return (
    <InfoCardContainer>
      <InfoLink href="/info/project">
        <StyledInfoCardWithTransition>
          <InfoImage
            src="/images/logo_triptrove_heart.png"
            width={120}
            height={120}
            alt="Project"
          />
          <InfoTitle>Project</InfoTitle>
        </StyledInfoCardWithTransition>
      </InfoLink>

      <InfoLink href={"/info/neuefische"}>
        <StyledInfoCardWithTransition>
          <InfoImage
            src="/images/logo_neue-fische.png"
            width={120}
            height={120}
            alt="neue fische"
          />
          <InfoTitle>neue fische</InfoTitle>
        </StyledInfoCardWithTransition>
      </InfoLink>

      <InfoLink href={"/info/techstack"}>
        <StyledInfoCardWithTransition>
          <InfoImage
            src="/images/logo_next-js.png"
            width={120}
            height={120}
            alt="Techstack"
          />
          <InfoTitle>Techstack</InfoTitle>
        </StyledInfoCardWithTransition>
      </InfoLink>

      <StyledLink href={"/info/contact"}>
        <StyledInfoCardWithTransition>
          <InfoImage
            src="/images/gmndr-pic.jpg"
            width={120}
            height={120}
            alt="Contact"
          />
          <InfoTitle>Contact</InfoTitle>
        </StyledInfoCardWithTransition>
      </StyledLink>
    </InfoCardContainer>
  );
}
