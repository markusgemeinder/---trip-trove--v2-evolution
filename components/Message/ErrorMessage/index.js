import {
  MessageContainer,
  StyledMessage,
} from "@/components/Message/Message.styled";
import ErrorAnimation from "@/components/Animation/ErrorAnimation";

export default function ErrorMessage() {
  return (
    <>
      <MessageContainer>
        <StyledMessage>Oops! Something went wrong...</StyledMessage>
        <ErrorAnimation />
      </MessageContainer>
    </>
  );
}
