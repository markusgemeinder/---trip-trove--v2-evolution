import styled from "styled-components";
import { StyledTextButtonMediumSize } from "@/components/Button/TextButton";

export const UploadBox = styled.div`
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

  @media (min-width: 600px) {
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
  border: 3px dashed var(--color-image-upload-dash-line);
  padding: 0.1rem;
  position: relative;
  transition: none;
  
  @media (min-width: 600px) {
    padding: 0.2rem;

`;

export const UploadHeadline = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: var(--color-image-upload-headline);

  @media (min-width: 600px) {
    font-size: 1.1rem;
`;

export const UploadText = styled.p`
  margin: 6px;
  padding: 0;
  font-size: 0.8rem;
  color: var(--color-image-upload-text);
  
  @media (min-width: 600px) {
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

export const PreviewBox = styled(UploadBox)`
  height: auto;
  text-align: center;
  transition: none;
  padding: 0.6rem;

  &:hover {
    cursor: default;
    transform: none;
    background-color: var(--color-image-upload);
  }
`;

export const PreviewArea = styled(UploadArea)`
  border: none;
  border-radius: none;
  padding: 0;
  position: relative;
`;

export const PreviewImage = styled.img`
  border-radius: 4px;
  opacity: 0.6;
`;

export const PreviewLoadingText = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Apply both translateX and translateY */
  z-index: 1;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  color: var(--color-image-upload-in-progress);
`;
