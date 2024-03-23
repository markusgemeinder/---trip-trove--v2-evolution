import styled from "styled-components";

export const ToggleContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  margin: 10px 0 10px 10px;
  padding: 0;

  @media (min-width: 768px) and (min-height: 768px) {
    top: 90px;
  }
`;

export const ToggleSlider = styled.div`
  position: relative;
  width: 100px;
  height: 24px;
  border-radius: 12px;
  background-color: #ccc;
`;

export const ToggleSliderButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  left: ${({ isEnglish }) => (isEnglish ? "0" : "50%")};
  transform: ${({ isEnglish }) =>
    isEnglish ? "translateX(0)" : "translateX(100%)"};
`;

export const ToggleSliderText = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isEnglish }) => (isEnglish ? "0" : "50%")};
  transform: ${({ isEnglish }) =>
    isEnglish ? "translateX(0)" : "translateX(-50%)"};
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

// export const ToggleButton = styled.button`
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   /* background-color: transparent; */
//   background-color: green;
//   border: none;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   z-index: 10;
//   display: flex;
//   align-items: center;
// `;

// export const ToggleIcon = styled.span`
//   width: 24px;
//   height: 24px;
//   background-image: url("path/to/slider-icon.png"); /* Replace 'path/to/slider-icon.png' with the actual path to your slider icon */
//   background-size: cover;
//   transition: transform 0.3s ease;
//   transform: ${({ isEnglish }) =>
//     isEnglish
//       ? "translateX(0)"
//       : "translateX(100%)"}; /* Assuming the slider starts at the left (English) position */

//   ${ToggleButton}:hover & {
//     transform: ${({ isEnglish }) =>
//       isEnglish ? "translateX(100%)" : "translateX(0)"};
//   }
// `;

// export const ToggleText = styled.span`
//   margin-right: 8px;
// `;

// export const ToggleButtonText = styled.span`
//   transition: opacity 0.3s ease;
//   opacity: ${({ isEnglish }) => (isEnglish ? "1" : "0")};
// `;

// export const ToggleButtonIcon = styled.span`
//   transition: opacity 0.3s ease;
//   opacity: ${({ isEnglish }) => (isEnglish ? "0" : "1")};
// `;
