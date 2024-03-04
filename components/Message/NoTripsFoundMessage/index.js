import {
  MessageContainer,
  StyledMessage,
} from "@/components/Message/Message.styled";
import ErrorAnimation from "@/components/Animation/ErrorAnimation";

export default function NoTripsFoundMessage() {
  return (
    <>
      <MessageContainer>
        <StyledMessage>No trips found!</StyledMessage>
        <ErrorAnimation />
      </MessageContainer>
    </>
  );
}
