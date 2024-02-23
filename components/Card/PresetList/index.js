import React, { useState } from "react";
import styled from "styled-components";
import PresetCard from "@/components/Card/PresetCard";

const StyledCardList = styled.ul`
  margin: 1.8rem auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export default function PresetList({ presets }) {
  return (
    <>
      <StyledCardList>
        {presets.map((preset) => (
          <PresetCard preset={preset} key={preset._id} />
        ))}
      </StyledCardList>
    </>
  );
}
