import {
  MessageContainer,
  StyledMessage,
} from "@/components/Message/Message.styled";
import LoadingAnimation from "@/components/Animation/LoadingAnimation";

export default function LoadingMessage() {
  return (
    <>
      <MessageContainer>
        <StyledMessage>Loading</StyledMessage>
        <LoadingAnimation />
      </MessageContainer>
    </>
  );
}
