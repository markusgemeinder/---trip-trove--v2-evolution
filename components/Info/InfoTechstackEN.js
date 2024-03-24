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
        ●&nbsp;Next.js ●&nbsp;React ●&nbsp;HTML ●&nbsp;CSS ●&nbsp;JavaScript
        ●&nbsp;Github ●&nbsp;Node.js ●&nbsp;Vercel ●&nbsp;useSWR
        ●&nbsp;react-hot-toast ●&nbsp;MongoDB ●&nbsp;Cloudinary ●&nbsp;Figma
        ●&nbsp;Lottie Files ●&nbsp;Affinity Designer
      </InfoText>
      <InfoText></InfoText>
    </InfoCard>
  );
}
