import styled from "styled-components";
import Image from "next/image";
import { defaultFont } from "@/styles.js";

export const TripForm = styled.form`
  display: grid;
  width: 300px;
  margin: 0.6rem auto;
  gap: 0.1rem;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    margin: 2rem auto;
    width: 500px;
    gap: 0.3rem;
    padding: 1rem 1.6rem;
  }
`;

export const StyledLabel = styled.label`
  margin-top: 0.4rem;
  margin-bottom: 0.1rem;
  font-weight: bold;
  font-size: 0.8rem;
  color: var(--color-form-label);

  @media (min-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const StyledInput = styled.input`
  font-family: ${defaultFont.style.fontFamily};
  font-size: inherit;
  background-color: var(--color-form-input);
  border: 1px solid #ddd;
  padding: 0.3rem;
  border-radius: 8px;
  margin-bottom: 0.1rem;

  @media (min-width: 600px) {
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

  @media (min-width: 600px) {
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

export const PackListContainer = styled.fieldset`
  margin-top: 0.4rem;
  padding: 0;
  border: none;
  max-width: auto;
`;

export const PackList = styled.ul`
  margin: auto;
  padding: 0;
`;

export const TemplateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledSelect = styled.select`
  font-family: ${defaultFont.style.fontFamily};
  font-size: inherit;
  background-color: var(--color-form-input);
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 0.3rem;

  @media (min-width: 600px) {
    padding: 0.5rem;
  }
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

  @media (min-width: 600px) {
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

  @media (min-width: 600px) {
    grid-template-columns: 0.8fr 6.7fr 1.6fr 0.9fr;
    gap: 6px;
  }
`;

export const ItemNumberContainer = styled.div`
  background-color: var(--color-form-input);
  border: 1px solid #ddd;
  padding: 0.3rem;
  border-radius: 8px;
  margin-bottom: 0.1rem;
  text-align: center;

  @media (min-width: 600px) {
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

export const InputItem = styled(StyledInput)`
  width: 100%;
  margin: 0;
`;

export const InputQuantity = styled(StyledInput)`
  text-align: right;
  width: 100%;
  margin: 0;
`;
