import TripDetailsBadge from "@/components/Badge/TripDetailsBadge";
import CreateDateBadge from "@/components/Badge/CreateDateBadge";
import {
  StyledCard,
  CardTitle,
  CardImage,
  CardLink,
  CardText,
} from "@/components/Card/Card.styled";

export default function TripCard({ trip }) {
  return (
    <CardLink href={`trips/${trip._id}`}>
      <StyledCard>
        <CardTitle>{trip.destination}</CardTitle>
        <TripDetailsBadge startDate={trip.start} endDate={trip.end} />
        <CardImage
          src={
            trip.image.url !== ""
              ? trip.image.url
              : "/images/default.png?t=" + new Date().getTime()
          }
          width={300}
          height={300}
          alt={trip.destination}
        />
        <CreateDateBadge
          createdAt={trip.createdAt}
          updatedAt={trip.updatedAt}
        />
        <CardText>More Details</CardText>
      </StyledCard>
    </CardLink>
  );
}
