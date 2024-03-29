import styled from "styled-components";
import Image from "next/image";
import { defaultFont } from "@/styles.js";

export const StyledForm = styled.form`
  display: grid;
  width: 300px;
  margin: 0 auto;
  gap: 0.1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px var(--color-box-shadow);

  @media (min-width: 768px) and (min-height: 768px) {
    margin: 0.4rem auto;
    width: 500px;
    gap: 0.3rem;
    padding: 1rem 1.6rem;
  }
`;

export const StyledLabel = styled.label`
  margin-top: 0.4rem;
  margin-bottom: 0.1rem;
  /* font-weight: bold; */
  font-size: 0.8rem;
  color: var(--color-form-label);

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 0.9rem;
  }
`;

export const StyledInput = styled.input`
  font-family: ${defaultFont.style.fontFamily};
  font-size: inherit;
  background-color: var(--color-form-input);
  border: 1px solid var(--color-border);
  padding: 0.3rem;
  border-radius: 8px;
  margin-bottom: 0.1rem;

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 0.5rem;
  }
`;

export const StyledSelect = styled.select`
  font-family: ${defaultFont.style.fontFamily};
  font-size: inherit;
  background-color: var(--color-form-input);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0.3rem;

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 0.5rem;
  }
`;

export const DateContainer = styled.fieldset`
  margin: 0;
  padding: 0;
  border-color: transparent;

  display: grid;
  grid-template-columns: 48% 48%;
  grid-template-rows: auto auto;
  gap: inherit;
  grid-auto-flow: column;
  justify-content: space-between;
`;

export const PreviewContainer = styled.fieldset`
  margin: auto;
  width: 100%;
  height: auto;
  text-align: center;
  transition: none;
  padding: 0.6rem;
  margin-top: 0.3rem;
  margin-bottom: 0.4rem;
  padding: 0.6rem;
  background-color: var(--color-image-upload);
  border: 1px solid var(--color-image-upload-border);
  border-radius: 8px;

  @media (min-width: 768px) and (min-height: 768px) {
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
    padding: 0.8rem;
  }
`;

export const PreviewArea = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: none;
  padding: 0;
  position: relative;
  gap: 0.6rem;
`;

export const PreviewImage = styled(Image)`
  border-radius: 4px;
`;

export const PackingListContainer = styled.fieldset`
  margin-top: 0.4rem;
  padding: 0;
  border: none;
  max-width: auto;
`;

export const PackList = styled.ul`
  margin: auto;
  padding: 0;
`;

export const PresetContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  gap: 10px;
`;

export const InputContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 6fr 2.1fr 0.9fr;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 0;
  margin-top: 6px;
  width: 100%;

  @media (min-width: 768px) and (min-height: 768px) {
    grid-template-columns: 0.7fr 6.8fr 1.6fr 0.9fr;
    gap: 6px;
  }
`;

export const ItemHeaderLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 2.1fr 0.9fr;
  gap: 0.6rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;

  @media (min-width: 768px) and (min-height: 768px) {
    grid-template-columns: 0.8fr 6.7fr 1.6fr 0.9fr;
    gap: 6px;
  }
`;

export const ItemNumberContainer = styled.div`
  background-color: var(--color-form-input);
  border: 1px solid var(--color-border);
  padding: 0.3rem;
  border-radius: 8px;
  margin-bottom: 0.1rem;
  text-align: center;

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 0.5rem;
  }
`;

export const ItemNumberLabel = styled.p`
  justify-self: center;
  font-size: 0.8rem;
  color: var(--color-form-item-label);
  padding: 0;
  margin: 0;
`;

export const ItemNameLabel = styled(ItemNumberLabel)`
  justify-self: inherit;
`;
export const ItemQuantityLabel = styled(ItemNumberLabel)`
  justify-self: center;
`;

export const InputItemName = styled(StyledInput)`
  width: 100%;
  margin: 0;
`;

export const InputItemQuantity = styled(StyledInput)`
  text-align: right;
  width: 100%;
  margin: 0;
`;
