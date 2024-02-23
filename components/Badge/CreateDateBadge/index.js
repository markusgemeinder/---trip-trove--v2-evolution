import styled from "styled-components";
import { formatTimestamp } from "@/lib/utils";
import { StyledBadge } from "@/components/Card/Card.styled";

// const BadgeContainer = styled.div`
//   margin: 0;
//   padding: 0.2rem;
//   width: 100%;
//   border-radius: 8px;
//   background-color: var(--color-badge);
//   gap: 8px;
//   margin-top: 0.3rem;
// `;

const StyledCreateDateText = styled.p`
  margin: 0.2rem;
  padding: 0;
  color: var(--color-badge-label);
  text-align: center;
  font-weight: bold;
  font-size: 0.6rem;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

export default function CreateDateBadge({ createdAt, updatedAt }) {
  const isUpdated = updatedAt && updatedAt !== createdAt;

  return (
    <StyledBadge>
      <StyledCreateDateText>
        Trip created: {formatTimestamp(createdAt)}
      </StyledCreateDateText>
      {isUpdated && (
        <StyledCreateDateText>
          Last updated: {formatTimestamp(updatedAt)}
        </StyledCreateDateText>
      )}
    </StyledBadge>
  );
}
