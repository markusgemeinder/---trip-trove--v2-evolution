import styled from "styled-components";

export const UploadBox = styled.fieldset`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 100%;
  height: 120px;
  margin: auto;
  margin-top: 0.3rem;
  margin-bottom: 0.4rem;
  padding: 0.6rem;
  background-color: var(--color-image-upload);
  border: 1px solid var(--color-image-upload-border);
  border-radius: 8px;
  transition: color 0.3s ease, transform 0.3s ease;

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 0.8rem;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
    height: 160px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    background-color: var(--color-image-upload-hover);
  }
`;

export const UploadArea = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  border-radius: inherit;
  border: 1px dashed var(--color-image-upload-dash-line);
  padding: 0.1rem;
  position: relative;
  transition: none;
  
  @media (min-width: 768px) and (min-height: 768px) {
    padding: 0.2rem;
    border: 3px dashed var(--color-image-upload-dash-line);

`;

export const UploadHeadline = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: var(--color-image-upload-headline);

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.1rem;
`;

export const UploadText = styled.p`
  margin: 6px;
  padding: 0;
  font-size: 0.8rem;
  color: var(--color-image-upload-text);
  
  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 0.9rem;

`;

export const UploadInput = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
`;
