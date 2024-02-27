import styled from "styled-components";

export const MessageContainer = styled.div`
  margin: auto;
  padding: 0;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const StyledMessage = styled.h2`
  text-align: center;
  font-size: 1.2rem;

  @media (min-width: 600px) and (min-height: 600px) {
    font-size: 1.4rem;
  }
`;
