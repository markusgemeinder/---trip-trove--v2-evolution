import styled from "styled-components";
import {
  calculateStartDays,
  calculateDurationDays,
  formatDate,
} from "@/lib/utils";

const BadgeContainer = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: 0.7fr 2.2fr 0.7fr;
  border-radius: 8px;
  gap: 8px;
  margin-bottom: 0.3rem;

  @media (min-width: 600px) {
    grid-template-columns: 0.8fr 2fr 0.8fr;
  }
`;

const DaysContainer = styled.div`
  margin: 0;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  background-color: var(--color-badge);
  border-radius: inherit;
`;

const StyledDays = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: var(--color-badge-highlight);
  font-size: 1.2rem;

  @media (min-width: 600px) {
    font-size: 1.6rem;
  }
`;

const StyledDaysLabel = styled.p`
  margin: 0;
  padding: 0;
  color: var(--color-badge-label);
  font-weight: bold;
  font-size: 0.6rem;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

const DateContainer = styled.div`
  margin: 0;
  padding: 0.5rem 0.8rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "scheduled scheduled" "from start" "until end";
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-badge);
  border-radius: inherit;
`;

const DateContainerLabel = styled(StyledDaysLabel)`
  margin: 0;
  padding: 0;
  text-align: left;
`;

const LabelScheduled = styled(DateContainerLabel)`
  grid-area: scheduled;
`;
const LabelStart = styled(DateContainerLabel)`
  grid-area: from;
`;

const LabelEnd = styled(DateContainerLabel)`
  grid-area: until;
`;

const StyledDate = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.7rem;
  font-weight: bold;
  color: var(--color-badge-text);

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

const StyledStartDate = styled(StyledDate)`
  grid-area: start;
`;

const StyledEndDate = styled(StyledDate)`
  grid-area: end;
`;

export default function TripDetailsBadge({ startDate, endDate }) {
  return (
    <BadgeContainer>
      <DaysContainer>
        {calculateStartDays(startDate) <= 0 ? (
          <StyledDaysLabel>Overdue</StyledDaysLabel>
        ) : (
          <StyledDaysLabel>Start in</StyledDaysLabel>
        )}
        <StyledDays>{calculateStartDays(startDate)}</StyledDays>
        <StyledDaysLabel>
          {calculateStartDays(startDate) === 1 ? "day" : "days"}
        </StyledDaysLabel>
      </DaysContainer>
      <DateContainer>
        <LabelScheduled>Scheduled</LabelScheduled>
        <LabelStart>from:</LabelStart>
        <StyledStartDate>{formatDate(startDate)}</StyledStartDate>
        <LabelEnd>until:</LabelEnd>
        <StyledEndDate>{formatDate(endDate)}</StyledEndDate>
      </DateContainer>
      <DaysContainer>
        <StyledDaysLabel>Duration</StyledDaysLabel>
        <StyledDays>{calculateDurationDays(startDate, endDate)}</StyledDays>
        <StyledDaysLabel>
          {calculateDurationDays(startDate, endDate) === 1 ? "day" : "days"}
        </StyledDaysLabel>
      </DaysContainer>
    </BadgeContainer>
  );
}
