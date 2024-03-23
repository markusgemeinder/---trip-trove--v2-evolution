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
  InfoLink,
} from "@/components/Info/Info.styled";

export default function InfoProject({ currentCard, totalCards }) {
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
      <InfoTitle>Herzlich willkommen!</InfoTitle>

      <InfoText>
        Was Sie hier sehen ist “TripTrove“ in der weiterentwickelten Version 2.
      </InfoText>
      <InfoHeadline>Version 1</InfoHeadline>
      <InfoText>
        Die erste Version der Reiseplanungs-App wurde im Teamwork von Aika
        Akymbaeva, Uwe Bury, Felix Jentsch und Markus Gemeinder entwickelt und
        am 9.2.2024 als Abschlussprojekt des neue fische Web Developer Bootcamps
        präsentiert.
      </InfoText>
      <InfoText>
        Teil der Aufgabenstellung war eine Backend-Datenbank-Anbindung, das
        Frontend zeichnet sich durch eine komplexe Formularfunktionalität mit
        ansprechend gestalteten "Toast Messages" (Warnhinweisen) aus.
      </InfoText>
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
        Code GitHub (Version 1)
      </InfoLink>
      <InfoHeadline>Version 2</InfoHeadline>

      <InfoText>
        Version 2 ist eine individuelle Weiterentwicklung von Markus Gemeinder
        und beinhaltet über Version 1 hinaus u.a. folgende Features:
      </InfoText>
      <InfoListContainer>
        <InfoList>Responsive Design mit Sandwich-Menu</InfoList>
        <InfoList>Optimiertes UX/UI Design</InfoList>
        <InfoList>Packlisten-Presets jetzt durch User modifizierbar</InfoList>
        <InfoList>
          Checkboxen zum Abhaken bereits gepackter Gegenstände
        </InfoList>
        <InfoList>Drag & Drop Image Upload (Cloudinary)</InfoList>
        <InfoList>
          Page Exit: Warnhinweis beim Verlassen der Seite ohne vorheriges
          Speichern
        </InfoList>
        <InfoList>Suchfunktion (Echtzeitsuche)</InfoList>
        <InfoList>Lade- und Error-Animation</InfoList>
      </InfoListContainer>

      <InfoLink
        href="https://github.com/markusgemeinder/---trip-trove--v2-evolution"
        target="_blank"
      >
        Code GitHub (Version 2)
      </InfoLink>
    </InfoCard>
  );
}
