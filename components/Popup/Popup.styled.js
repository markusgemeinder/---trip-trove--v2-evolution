import styled from "styled-components";

export const StyledPopUp = styled.div`
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
  transition: opacity 0.3s ease;
  display: flex;

  flex-flow: column wrap;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 90%;
  padding-bottom: 0.4rem;
  margin: 0 auto;
  margin-top: 0.8rem;

  box-shadow: 0 4px 8px var(--color-box-shadow);
  list-style: none;

  position: absolute;
  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 0.4rem 1.2rem;
    top: calc(100% + 10px);
  }
`;

export const CloseButton = styled.span`
  align-self: flex-end;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const PopupHeadline = styled.h2`
  margin: 0.6rem;
  text-align: center;
  align-self: center;
  color: var(--color-card-title);
  font-size: 1.6rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 2rem;
  }
`;

export const PopupSubline = styled.h3`
  margin: 0.6rem;
  padding-top: 0.4rem;
  text-align: center;
  align-self: center;
  color: var(--color-card-title);
  font-size: 1.4rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.8rem;
  }
`;

export const PopupText = styled.p`
  margin: 0.4rem 1.6rem;
  text-align: center;
  color: var(--color-text);
  font-size: 1rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.2rem;
  }
`;

export const PopupLink = styled.a`
  color: blue;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;

export default function Popup({ show, onClose, content }) {
  return (
    <StyledPopUp show={show}>
      <CloseButton onClick={onClose}>X</CloseButton>
      {content}
    </StyledPopUp>
  );
}
