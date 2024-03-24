import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px;
  right: 0;
  height: 0;
  margin: 8px 8px 0 0;
  z-index: 2;
  align-items: center;
  gap: 4px;

  @media (min-width: 768px) and (min-height: 768px) {
    margin: 14px 28px 0 0;
    top: 90px;
  }
`;

const ToggleText = styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: var(--color-toggle-text);

  @media (min-width: 768px) and (min-height: 768px) {
    height: 40px;
    width: 32px;
    border-radius: 28px;
    font-size: 1rem;
  }
`;

const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleFrame = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 68px;
  width: 36px;
  border-radius: 18px;
  background-color: var(--color-toggle-background);
  border: 2px solid var(--color-toggle-border);
  transition: top 0.3s ease-in-out, bottom 0.3s ease-in-out;
  cursor: pointer;

  @media (min-width: 768px) and (min-height: 768px) {
    height: 72px;
    width: 40px;
    border-radius: 20px;
  }
`;

const ToggleButton = styled.div`
  position: absolute;
  background-color: var(--color-toggle-button);
  height: 36px;
  width: 28px;
  border-radius: 14px;
  top: ${({ isEnglish }) => (isEnglish ? "2px" : "26px")};
  bottom: ${({ isEnglish }) => (isEnglish ? "26px" : "2px")};
  transition: top 0.15s ease, bottom 0.15s ease;

  @media (min-width: 768px) and (min-height: 768px) {
    height: 40px;
    width: 32px;
    border-radius: 28px;
  }
`;

export default function LanguageToggleButton({ isEnglish, toggleLanguage }) {
  return (
    <>
      <ToggleContainer aria-label="toggle button for language selection English / German">
        <ToggleText>EN</ToggleText>
        <Toggle>
          <ToggleFrame onClick={toggleLanguage}>
            <ToggleButton isEnglish={isEnglish} />
          </ToggleFrame>
        </Toggle>
        <ToggleText>DE</ToggleText>
      </ToggleContainer>
    </>
  );
}
