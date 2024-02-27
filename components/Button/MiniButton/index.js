import styled from "styled-components";
import { defaultFont } from "@/styles.js";

export const MiniButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.4rem;
  margin-bottom: 0.2rem;
`;

export const MiniButtonLabel = styled.label`
  margin: 0;
  padding: 0;
  justify-self: center;
  margin-top: 0.4rem;
  margin-bottom: 0.1rem;
  font-size: 0.7rem;
  font-weight: bold;
  color: var(--color-form-item-label);

  @media (min-width: 600px) and (min-height: 600px) {
    font-size: 0.8rem;
  }
`;

export const StyledMiniButton = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem;
  background-color: ${(props) => {
    switch (props.action) {
      case "add":
        return "var(--color-mini-button-add)";
      case "delete":
        return "var(--color-mini-button-delete)";
      default:
        return "var(--color-mini-button)";
    }
  }};
  color: ${(props) => {
    switch (props.action) {
      case "add":
        return "var(--color-mini-button-add-text)";
      case "delete":
        return "var(--color-mini-button-delete-text)";
      default:
        return "var(--color-mini-button-text)";
    }
  }};
  border: 0px;
  border-radius: 8px;
  font-family: ${defaultFont.style.fontFamily};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  @media (min-width: 600px) and (min-height: 600px) {
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.5rem;
    border-radius: 10px;
  }

  &:active,
  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: ${(props) => {
      switch (props.action) {
        case "add":
          return "var(--color-mini-button-add-hover)";
        case "delete":
          return "var(--color-mini-button-delete-hover)";
        default:
          return "var(--color-mini-button-hover)";
      }
    }};
    cursor: pointer;
    transform: scale(1.03);
  }
`;
