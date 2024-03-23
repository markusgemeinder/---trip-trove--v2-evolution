import styled from "styled-components";

const NextPageButtonContainer = styled.div`
  display: flex;
  position: fixed;
  top: 46%;
  right: 0;
  transform: translateY(-50%);
  margin: 15px 10px;
  z-index: 2;
  
  
  @media (min-width: 768px) and (min-height: 768px) {
    margin: 5px 10px;
`;

const NextPageButtonSvg = styled.svg`
  margin: auto;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  transition: color 0.6s ease, transform 0.6s ease;

  &:hover {
    /* background-color: var(--color-previous-next-page-button-hover); */
    transform: scale(1.2);
  }
  @media (min-width: 768px) and (min-height: 768px) {
    width: 64px;
    height: 64px;
  }
`;

const NextPageButtonPath = styled.path`
  fill: var(--color-previous-next-page-button);
  }    
`;

export default function NextPageButton({ onClick }) {
  return (
    <NextPageButtonContainer>
      <NextPageButtonSvg
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 60 60"
        onClick={onClick}
      >
        <NextPageButtonPath
          fillRule="nonzero"
          d="m18.636 22.71028 7.38 7.38-7.38 7.38 3.36 3.42 10.8-10.8-10.8-10.8-3.36 3.42Zm10.0248 0 7.38 7.38-7.38 7.38 3.36 3.42 10.8-10.8-10.8-10.8-3.36 3.42ZM6 30.01588c0-3.3192.6288-6.4392 1.8912-9.36 1.2576-2.9208 2.9688-5.46 5.1288-7.62s4.6992-3.8688 7.62-5.1288c2.9208-1.26 6.0408-1.8912 9.36-1.8912 3.3192 0 6.4392.6312 9.36 1.8912s5.46 2.9688 7.62 5.1288 3.8688 4.6992 5.1312 7.62c1.26 2.9208 1.8888 6.0408 1.8888 9.36 0 3.3192-.6288 6.4392-1.8888 9.36-1.2624 2.9208-2.9712 5.46-5.1312 7.62-2.16 2.16-4.6992 3.8712-7.62 5.1312-2.9208 1.26-6.0408 1.8888-9.36 1.8888-3.3192 0-6.4392-.6288-9.36-1.8888s-5.46-2.9712-7.62-5.1312c-2.16-2.16-3.8712-4.6992-5.1288-7.62C6.6288 36.45508 6 33.33508 6 30.01588Zm4.8 0c0 5.3592 1.86 9.9 5.58 13.62 3.72 3.72 8.2608 5.58 13.62 5.58 5.3592 0 9.9-1.86 13.62-5.58 3.72-3.72 5.58-8.2608 5.58-13.62 0-5.3592-1.86-9.9-5.58-13.62-3.72-3.72-8.2608-5.58-13.62-5.58-5.3592 0-9.9 1.86-13.62 5.58-3.72 3.72-5.58 8.2608-5.58 13.62Z"
        />
      </NextPageButtonSvg>
    </NextPageButtonContainer>
  );
}
