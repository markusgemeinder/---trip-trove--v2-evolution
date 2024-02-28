import styled from "styled-components";
import {
  calculateStartDays,
  calculateDurationDays,
  formatDate,
} from "@/lib/utils";
import {
  CardText,
  CardTextHighlight,
  CardLabel,
} from "@/components/Card/Card.styled";

const BadgeContainer = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1.8fr 1fr;
  border-radius: 6px;
  gap: 6px;
  margin-bottom: 0.3rem;

  @media (min-width: 768px) and (min-height: 768px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const StyledBadge = styled.div`
  margin: 0;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  background-color: var(--color-badge);
  border-radius: inherit;
`;

const StyledBadgeLabel = styled(CardLabel)`
  margin: 0.1rem 0;
`;

export default function TripDetailsBadge({ startDate, endDate }) {
  return (
    <BadgeContainer>
      <StyledBadge>
        {calculateStartDays(startDate) <= 0 ? (
          <StyledBadgeLabel>Overdue</StyledBadgeLabel>
        ) : (
          <StyledBadgeLabel>Start in</StyledBadgeLabel>
        )}
        <CardTextHighlight>{calculateStartDays(startDate)}</CardTextHighlight>
        <StyledBadgeLabel>
          {calculateStartDays(startDate) === 1 ? "day" : "days"}
        </StyledBadgeLabel>
      </StyledBadge>
      <StyledBadge>
        <StyledBadgeLabel>Scheduled from</StyledBadgeLabel>
        <CardText>{formatDate(startDate)}</CardText>
        <StyledBadgeLabel>until</StyledBadgeLabel>
        <CardText>{formatDate(endDate)}</CardText>
      </StyledBadge>
      <StyledBadge>
        <StyledBadgeLabel>Duration</StyledBadgeLabel>
        <CardTextHighlight>
          {calculateDurationDays(startDate, endDate)}
        </CardTextHighlight>
        <StyledBadgeLabel>
          {calculateDurationDays(startDate, endDate) === 1 ? "day" : "days"}
        </StyledBadgeLabel>
      </StyledBadge>
    </BadgeContainer>
  );
}
