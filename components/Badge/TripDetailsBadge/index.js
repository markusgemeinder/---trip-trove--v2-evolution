import styled from "styled-components";
import {
  calculateStartDays,
  calculateDurationDays,
  formatDate,
} from "@/lib/utils";
import { StyledBadge } from "@/components/Card/Card.styled";

const BadgeContainer = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  border-radius: 6px;
  gap: 6px;
  margin-bottom: 0.3rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const StartDurationContainer = styled.div`
  margin: 0;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  background-color: var(--color-badge);
  border-radius: inherit;
`;

const StartDurationText = styled.p`
  margin: 0;
  padding: 0.1rem;
  color: var(--color-badge-label);
  font-weight: bold;
  font-size: 0.6rem;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

const StartDurationDays = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: var(--color-badge-highlight);
  font-size: 1.2rem;

  @media (min-width: 600px) {
    font-size: 1.6rem;
  }
`;

const ScheduledContainer = styled.div`
  margin: 0;
  padding: 0.3rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  background-color: var(--color-badge);
  border-radius: inherit;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 3fr;
`;

const ScheduledText = styled(StartDurationText)`
  margin: 0;
  padding: 0;
  text-align: left;
`;

const ScheduledDate = styled.p`
  margin: 0;
  padding: 0.1rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--color-badge-text);

  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
`;

export default function TripDetailsBadge({ startDate, endDate }) {
  return (
    <BadgeContainer>
      <StartDurationContainer>
        {calculateStartDays(startDate) <= 0 ? (
          <StartDurationText>Overdue</StartDurationText>
        ) : (
          <StartDurationText>Start in</StartDurationText>
        )}
        <StartDurationDays>{calculateStartDays(startDate)}</StartDurationDays>
        <StartDurationText>
          {calculateStartDays(startDate) === 1 ? "day" : "days"}
        </StartDurationText>
      </StartDurationContainer>
      <ScheduledContainer>
        <ScheduledText>Scheduled from</ScheduledText>
        <ScheduledDate>{formatDate(startDate)}</ScheduledDate>
        <ScheduledText>until</ScheduledText>
        <ScheduledDate>{formatDate(endDate)}</ScheduledDate>
      </ScheduledContainer>
      <StartDurationContainer>
        <StartDurationText>Duration</StartDurationText>
        <StartDurationDays>
          {calculateDurationDays(startDate, endDate)}
        </StartDurationDays>
        <StartDurationText>
          {calculateDurationDays(startDate, endDate) === 1 ? "day" : "days"}
        </StartDurationText>
      </StartDurationContainer>
    </BadgeContainer>
  );
}
