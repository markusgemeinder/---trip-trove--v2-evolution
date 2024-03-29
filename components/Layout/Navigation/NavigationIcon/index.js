import styled from "styled-components";

const StyledIconSvg = styled.svg`
  display: block;
  margin: ${(props) => (props.isBurgerNavigation ? "0" : "auto")};
  margin-bottom: ${(props) => (props.isBurgerNavigation ? "0" : "0.2rem")};
  width: ${(props) => (props.isBurgerNavigation ? "28px" : "40px")};
  height: ${(props) => (props.isBurgerNavigation ? "28px" : "40px")};
`;

const StyledIconPath = styled.path`
  fill: ${(props) =>
    props.isBurgerNavigation
      ? "var(--color-burger-menu-item)"
      : "var(--color-navigation-item)"};
`;

export function TripListIcon({ isBurgerNavigation }) {
  return (
    <>
      <StyledIconSvg
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 60 60"
        isBurgerNavigation={isBurgerNavigation}
      >
        <StyledIconPath
          fillRule="nonzero"
          isBurgerNavigation={isBurgerNavigation}
          d="M19.647 36.486V31.31h20.706v5.176H19.647Zm0 7.765v-5.176h20.706v5.176H19.647Zm0 7.765v-5.177h20.706v5.177H19.647ZM30 8.016 55.882 31.31h-7.764v20.706h-5.177V28.722H17.059v23.294h-5.177V31.31H4.118L30 8.016Zm0 6.988-9.576 8.541h19.152L30 15.004Zm-9.576 8.541h19.152-19.152Z"
        />
      </StyledIconSvg>
    </>
  );
}

export function TripCreateIcon({ isBurgerNavigation }) {
  return (
    <>
      <StyledIconSvg
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 60 60"
        isBurgerNavigation={isBurgerNavigation}
      >
        <StyledIconPath
          fillRule="nonzero"
          isBurgerNavigation={isBurgerNavigation}
          d="M27.6 42.016h4.8v-9.6H42v-4.8h-9.6v-9.6h-4.8v9.6H18v4.8h9.6v9.6Zm2.4 12c-3.32 0-6.44-.63-9.36-1.89-2.92-1.26-5.46-2.97-7.62-5.13-2.16-2.16-3.87-4.7-5.13-7.62-1.26-2.92-1.89-6.04-1.89-9.36 0-3.32.63-6.44 1.89-9.36 1.26-2.92 2.97-5.46 5.13-7.62 2.16-2.16 4.7-3.87 7.62-5.13 2.92-1.26 6.04-1.89 9.36-1.89 3.32 0 6.44.63 9.36 1.89 2.92 1.26 5.46 2.97 7.62 5.13 2.16 2.16 3.87 4.7 5.13 7.62 1.26 2.92 1.89 6.04 1.89 9.36 0 3.32-.63 6.44-1.89 9.36-1.26 2.92-2.97 5.46-5.13 7.62-2.16 2.16-4.7 3.87-7.62 5.13-2.92 1.26-6.04 1.89-9.36 1.89Zm0-4.8c5.36 0 9.9-1.86 13.62-5.58 3.72-3.72 5.58-8.26 5.58-13.62 0-5.36-1.86-9.9-5.58-13.62-3.72-3.72-8.26-5.58-13.62-5.58-5.36 0-9.9 1.86-13.62 5.58-3.72 3.72-5.58 8.26-5.58 13.62 0 5.36 1.86 9.9 5.58 13.62 3.72 3.72 8.26 5.58 13.62 5.58Z"
        />
      </StyledIconSvg>
    </>
  );
}

export function PresetsIcon({ isBurgerNavigation }) {
  return (
    <>
      <StyledIconSvg
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 60 60"
        isBurgerNavigation={isBurgerNavigation}
      >
        <StyledIconPath
          fillRule="nonzero"
          isBurgerNavigation={isBurgerNavigation}
          d="M18.03327 51.6c-1.32 0-2.4504-.4704-3.3888-1.4088-.9408-.9408-1.4112-2.0712-1.4112-3.3912V20.4c0-1.32.4704-2.4504 1.4112-3.3912.9384-.9384 2.0688-1.4088 3.3888-1.4088h4.8v-4.8c0-1.32.4704-2.4504 1.4112-3.3912C25.18287 6.4704 26.31327 6 27.63327 6h4.8c1.32 0 2.4504.4704 3.3912 1.4088.9384.9408 1.4088 2.0712 1.4088 3.3912v4.8h4.8c1.32 0 2.4504.4704 3.3912 1.4088.9384.9408 1.4088 2.0712 1.4088 3.3912v26.4c0 1.32-.4704 2.4504-1.4088 3.3912-.9408.9384-2.0712 1.4088-3.3912 1.4088 0 .6792-.2304 1.2504-.6888 1.7088-.4608.4608-1.032.6912-1.7112.6912s-1.2504-.2304-1.7088-.6912c-.4608-.4584-.6912-1.0296-.6912-1.7088h-14.4c0 .6792-.2304 1.2504-.6888 1.7088-.4608.4608-1.032.6912-1.7112.6912s-1.2504-.2304-1.7088-.6912c-.4608-.4584-.6912-1.0296-.6912-1.7088Zm0-4.8h24V20.4h-24v26.4Zm4.8-2.4h4.8V22.8h-4.8v21.6Zm9.6 0h4.8V22.8h-4.8v21.6Zm-4.8-28.8h4.8v-4.8h-4.8v4.8Z"
        />
      </StyledIconSvg>
    </>
  );
}

export function InfoIcon({ isBurgerNavigation }) {
  return (
    <>
      <StyledIconSvg
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 60 60"
        isBurgerNavigation={isBurgerNavigation}
      >
        <StyledIconPath
          fillRule="nonzero"
          isBurgerNavigation={isBurgerNavigation}
          d="M27.633 43.386h4.8V25.184h-4.8v18.202ZM30 23.005c.905 0 1.664-.307 2.277-.919.612-.613.918-1.372.918-2.277s-.306-1.664-.918-2.277c-.613-.612-1.372-.918-2.277-.918s-1.664.306-2.277.918c-.612.613-.918 1.372-.918 2.277s.306 1.664.918 2.277c.613.612 1.372.919 2.277.919Zm.033 31.011c-3.32 0-6.44-.63-9.36-1.89-2.92-1.26-5.46-2.97-7.62-5.13-2.16-2.16-3.87-4.7-5.13-7.62-1.26-2.92-1.89-6.04-1.89-9.36 0-3.32.63-6.44 1.89-9.36 1.26-2.92 2.97-5.46 5.13-7.62 2.16-2.16 4.7-3.87 7.62-5.13 2.92-1.26 6.04-1.89 9.36-1.89 3.32 0 6.44.63 9.36 1.89 2.92 1.26 5.46 2.97 7.62 5.13 2.16 2.16 3.87 4.7 5.13 7.62 1.26 2.92 1.89 6.04 1.89 9.36 0 3.32-.63 6.44-1.89 9.36-1.26 2.92-2.97 5.46-5.13 7.62-2.16 2.16-4.7 3.87-7.62 5.13-2.92 1.26-6.04 1.89-9.36 1.89Zm0-4.8c5.36 0 9.9-1.86 13.62-5.58 3.72-3.72 5.58-8.26 5.58-13.62 0-5.36-1.86-9.9-5.58-13.62-3.72-3.72-8.26-5.58-13.62-5.58-5.36 0-9.9 1.86-13.62 5.58-3.72 3.72-5.58 8.26-5.58 13.62 0 5.36 1.86 9.9 5.58 13.62 3.72 3.72 8.26 5.58 13.62 5.58Z"
        />
      </StyledIconSvg>
    </>
  );
}
