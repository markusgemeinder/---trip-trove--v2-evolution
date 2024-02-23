import TripDetailed from "@/components/Card/TripDetailed";
import BackButton from "@/components/Button/BackButton";

export default function DetailsPage() {
  return (
    <>
      <TripDetailed />
      <BackButton href="/" />
    </>
  );
}
