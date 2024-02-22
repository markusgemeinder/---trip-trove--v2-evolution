import React, { useState } from "react";
import styled from "styled-components";
import PresetCard from "@/components/PresetCard";

const StyledCardList = styled.ul`
  margin: 1.8rem auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

export default function PresetCardList({ presets }) {
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
