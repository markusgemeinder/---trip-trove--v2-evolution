import React, { useState } from "react";
import styled from "styled-components";

const ToggleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px;
  right: 0;
  height: 0;
  margin: 15px 20px;
  z-index: 2;
  align-items: center;
  gap: 4px;

  @media (min-width: 768px) and (min-height: 768px) {
    top: 90px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Toggle = styled.div`
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  height: 68px;
  width: 36px;
  border-radius: 18px;

  @media (min-width: 768px) and (min-height: 768px) {
    height: 76px;
    width: 40px;
    border-radius: 20px;
  }
`;

const ToggleBackground = styled.div`
  position: absolute;
  background-color: var(--color-toggle-background);
  border: 2px solid var(--color-toggle-border);
  height: 68px;
  width: 36px;
  border-radius: 18px;

  @media (min-width: 768px) and (min-height: 768px) {
    height: 76px;
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

  @media (min-width: 768px) and (min-height: 768px) {
    height: 40px;
    width: 32px;
    border-radius: 28px;
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

export default function LanguageToggleButton({ isEnglish, toggleLanguage }) {
  return (
    <>
      <ToggleButtonWrapper aria-label="toggle button for language selection English / German">
        <ToggleText>EN</ToggleText>
        <ToggleContainer>
          <Toggle onClick={toggleLanguage}>
            <ToggleBackground />
            <ToggleButton
              style={{
                top: isEnglish ? 4 : "auto",
                bottom: isEnglish ? "auto" : 4,
              }}
            />
          </Toggle>
        </ToggleContainer>
        <ToggleText>DE</ToggleText>
      </ToggleButtonWrapper>
    </>
  );
}
