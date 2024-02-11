import styled from "styled-components";
import { formatDate, formatTimestamp } from "@/lib/utils";

const BadgeContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-badge);
  gap: 8px;
  margin-top: 0.3rem;
`;

const StyledCreateUpdateText = styled.p`
  margin: 0.2rem;
  padding: 0;
  color: var(--color-badge-label-light);
  text-align: center;
  font-size: 0.6rem;

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

export default function CreateUpdateDateBadge({ createdAt, updatedAt }) {
  const isUpdated = updatedAt && updatedAt !== createdAt;

  return (
    <BadgeContainer>
      <StyledCreateUpdateText>
        Trip created: {formatTimestamp(createdAt)}
      </StyledCreateUpdateText>
      {isUpdated && (
        <StyledCreateUpdateText>
          Updated: {formatTimestamp(updatedAt)}
        </StyledCreateUpdateText>
      )}
    </BadgeContainer>
  );
}
