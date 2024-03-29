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
  InfoLinkContainer,
  InfoLink,
} from "@/components/Info/Info.styled";

export default function InfoProjectDE({ currentCard, totalCards }) {
  return (
    <InfoCard>
      <InfoCardHeader>
        <InfoPagination>
          {currentCard} / {totalCards}
        </InfoPagination>
        <InfoAvatar
          src="/images/logo_triptrove_heart.png"
          width={100}
          height={100}
          alt="Project"
        ></InfoAvatar>
      </InfoCardHeader>
      <InfoTitle>Welcome!</InfoTitle>

      <InfoText>
        What you see here is &quot;TripTrove&quot; in its evolved Version 2.
      </InfoText>
      <InfoHeadline>Version 1</InfoHeadline>
      <InfoText>
        The first version of the travel planning app was developed in teamwork
        by Aika Akymbaeva / Uwe Bury / Felix Jentsch / Markus Gemeinder, and
        presented on 9th February 2024 as the final project of the neue fische
        Web Developer Bootcamp.
      </InfoText>
      <InfoText>
        Part of the task was a backend database connection; the frontend
        features a complex form functionality with individually designed
        &quot;toast messages&quot; (warning messages).
      </InfoText>
      <InfoLinkContainer>
        <InfoLink
          href="https://trip-trove-v1-neue-fische-capstone-finale-20240209.vercel.app/"
          target="_blank"
        >
          Vercel Deployment (Version 1)
        </InfoLink>
        <InfoLink
          href="https://github.com/markusgemeinder/---trip-trove--v1-neue-fische-capstone-finale-20240209"
          target="_blank"
        >
          GitHub Code (Version 1)
        </InfoLink>
      </InfoLinkContainer>
      <InfoHeadline>Version 2</InfoHeadline>
      <InfoText>
        Version 2 is an individual advancement by me (Markus Gemeinder) and
        includes, beyond Version 1, the following exemplary features:
      </InfoText>
      <InfoListContainer>
        <InfoList>
          Responsive design for mobile devices with sandwich menu
        </InfoList>
        <InfoList>Optimized UX/UI design</InfoList>
        <InfoList>Pack list presets now modifiable by users</InfoList>
        <InfoList>Checkboxes for checking off already packed items</InfoList>
        <InfoList>Drag & Drop Image Upload (Cloudinary)</InfoList>
        <InfoList>
          Page exit: Warning when leaving the page without prior saving
        </InfoList>
        <InfoList>Search function (real-time search)</InfoList>
        <InfoList>Loading and error animations</InfoList>
        <InfoList>
          Info section with language selection toggle button EN/DE
        </InfoList>
      </InfoListContainer>
      <InfoLinkContainer>
        <InfoLink
          href="https://github.com/markusgemeinder/---trip-trove--v2-evolution"
          target="_blank"
        >
          GitHub Code (Version 2)
        </InfoLink>
      </InfoLinkContainer>
    </InfoCard>
  );
}
