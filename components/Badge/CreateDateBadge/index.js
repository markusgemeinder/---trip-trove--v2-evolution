import styled from "styled-components";
import { formatTimestamp } from "@/lib/utils";
import { CardLabel, StyledBadge } from "@/components/Card/Card.styled";

const StyledTimestamp = styled(CardLabel)`
  padding: 0;
  margin: 0.1rem 0;
  text-align: center;
`;

export default function CreateDateBadge({ createdAt, updatedAt, isTripData }) {
  const isUpdated = updatedAt && updatedAt !== createdAt;

  return (
    <StyledBadge>
      <StyledTimestamp>
        {isTripData
          ? `Trip created: ${formatTimestamp(createdAt)}`
          : `Preset created: ${formatTimestamp(createdAt)}`}
      </StyledTimestamp>
      {isUpdated && (
        <StyledTimestamp>
          Last updated: {formatTimestamp(updatedAt)}
        </StyledTimestamp>
      )}
    </StyledBadge>
  );
}
