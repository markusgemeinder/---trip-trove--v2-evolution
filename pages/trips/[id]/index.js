import TripCardDetailed from "@/components/TripCardDetailed";
import BackButton from "@/components/Button/BackButton";

export default function DetailsPage() {
  return (
    <>
      <TripCardDetailed />
      <BackButton href="/" />
    </>
  );
}
