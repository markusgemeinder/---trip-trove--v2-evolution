import {
  InfoCard,
  InfoCardHeader,
  InfoPagination,
  InfoAvatar,
  InfoTitle,
  InfoText,
} from "@/components/Info/Info.styled";

export default function InfoTechstackDE({ currentCard, totalCards }) {
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
          alt="Techstack"
        ></InfoAvatar>
      </InfoCardHeader>
      <InfoTitle>Techstack</InfoTitle>
      <InfoText>Used technologies and tools:</InfoText>
      <InfoText>
        ● Next.js ● React ● Github ● Node.js ● Vercel ● useSWR ● react-hot-toast
        ● MongoDB ● Cloudinary ● Figma ● Lottie Files ● Affinity Designer (SVG)
      </InfoText>
    </InfoCard>
  );
}
