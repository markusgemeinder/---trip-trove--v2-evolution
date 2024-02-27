//

import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const NavigationContainer = styled.nav`
  background-color: var(--color-navigation);
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  height: 60px;
  padding: 0;
  margin: 0;

  @media (min-width: 600px) {
    height: 80px;
  }
`;

const NavigationItem = styled.li`
  padding: 10px;
  width: 100%;
  align-items: center;
  text-align: center;
  border-left: 2px solid var(--color-navigation-border);
  &:first-child {
    border-left: 0px;
  }
  &:hover {
    background-color: var(--color-navigation-hover);
  }

  ${({ $active }) =>
    $active && "background-color: var(--color-navigation-active);"}
`;

const NavigationItemText = styled.a`
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-size: 0.7rem;
  color: var(--color-navigation-item-text);

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: var(--color-navigation-item-text);
  }

  @media (min-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StyledNavigationSvg = styled.svg`
  display: block;
  margin: auto;
  width: 24px;
  height: 24px;

  @media (min-width: 600px) {
    width: 36px;
    height: 36px;
    margin-bottom: 0.2rem;
  }
`;

const StyledNavigationPath = styled.path`
  fill: var(--color-navigation-item);
`;

const BurgerMenuContainer = styled.nav`
  background-color: var(--color-navigation);
  position: fixed;
  top: 70px;
  left: 0px;
  width: auto;
  z-index: 1;
`;

const BurgerMenuButton = styled.div`
  display: block;
  margin: auto;
  width: 36px;
  height: 36px;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

const BurgerMenuLinks = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: display 0.3s ease-in-out;

  @media (min-width: 600px) {
    display: block;
  }
`;

const BurgerMenuItem = styled.div`
  padding: 10px;
  width: 100%;
  align-items: center;
  text-align: center;
  border-left: 2px solid var(--color-navigation-border);
  &:first-child {
    border-left: 0px;
  }
  &:hover {
    background-color: var(--color-navigation-hover);
  }

  ${({ $active }) =>
    $active && "background-color: var(--color-navigation-active);"}
`;

const StyledBurgerMenuSvg = styled.svg`
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;

  line {
    stroke-width: 2;
    stroke: ${(props) =>
      props.isOpen ? "var(--color-burger-menu-x)" : "var(--color-burger-menu)"};
  }
`;

export default function Navigation() {
  return (
    <>
      <OriginalNavigation />
      <BurgerMenu />
    </>
  );
}

export function OriginalNavigation() {
  const router = useRouter();

  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem $active={router.pathname === "/"}>
          <Link href="/">
            <StyledNavigationSvg
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 60 60"
            >
              <StyledNavigationPath
                fillRule="nonzero"
                d="M19.647 36.486V31.31h20.706v5.176H19.647Zm0 7.765v-5.176h20.706v5.176H19.647Zm0 7.765v-5.177h20.706v5.177H19.647ZM30 8.016 55.882 31.31h-7.764v20.706h-5.177V28.722H17.059v23.294h-5.177V31.31H4.118L30 8.016Zm0 6.988-9.576 8.541h19.152L30 15.004Zm-9.576 8.541h19.152-19.152Z"
              />
            </StyledNavigationSvg>
          </Link>
          <NavigationItemText href="/">Trip Overview</NavigationItemText>
        </NavigationItem>

        <NavigationItem $active={router.pathname === "/trips/create"}>
          <Link href="/trips/create">
            <StyledNavigationSvg
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 60 60"
            >
              <StyledNavigationPath
                fillRule="nonzero"
                d="M27.6 42.016h4.8v-9.6H42v-4.8h-9.6v-9.6h-4.8v9.6H18v4.8h9.6v9.6Zm2.4 12c-3.32 0-6.44-.63-9.36-1.89-2.92-1.26-5.46-2.97-7.62-5.13-2.16-2.16-3.87-4.7-5.13-7.62-1.26-2.92-1.89-6.04-1.89-9.36 0-3.32.63-6.44 1.89-9.36 1.26-2.92 2.97-5.46 5.13-7.62 2.16-2.16 4.7-3.87 7.62-5.13 2.92-1.26 6.04-1.89 9.36-1.89 3.32 0 6.44.63 9.36 1.89 2.92 1.26 5.46 2.97 7.62 5.13 2.16 2.16 3.87 4.7 5.13 7.62 1.26 2.92 1.89 6.04 1.89 9.36 0 3.32-.63 6.44-1.89 9.36-1.26 2.92-2.97 5.46-5.13 7.62-2.16 2.16-4.7 3.87-7.62 5.13-2.92 1.26-6.04 1.89-9.36 1.89Zm0-4.8c5.36 0 9.9-1.86 13.62-5.58 3.72-3.72 5.58-8.26 5.58-13.62 0-5.36-1.86-9.9-5.58-13.62-3.72-3.72-8.26-5.58-13.62-5.58-5.36 0-9.9 1.86-13.62 5.58-3.72 3.72-5.58 8.26-5.58 13.62 0 5.36 1.86 9.9 5.58 13.62 3.72 3.72 8.26 5.58 13.62 5.58Z"
              />
            </StyledNavigationSvg>
          </Link>
          <NavigationItemText href="/trips/create">
            Create Trip
          </NavigationItemText>
        </NavigationItem>
        <NavigationItem $active={router.pathname === "/presets"}>
          <Link href="/presets">
            <StyledNavigationSvg
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 60 60"
            >
              <StyledNavigationPath
                fillRule="nonzero"
                d="M18.03327 51.6c-1.32 0-2.4504-.4704-3.3888-1.4088-.9408-.9408-1.4112-2.0712-1.4112-3.3912V20.4c0-1.32.4704-2.4504 1.4112-3.3912.9384-.9384 2.0688-1.4088 3.3888-1.4088h4.8v-4.8c0-1.32.4704-2.4504 1.4112-3.3912C25.18287 6.4704 26.31327 6 27.63327 6h4.8c1.32 0 2.4504.4704 3.3912 1.4088.9384.9408 1.4088 2.0712 1.4088 3.3912v4.8h4.8c1.32 0 2.4504.4704 3.3912 1.4088.9384.9408 1.4088 2.0712 1.4088 3.3912v26.4c0 1.32-.4704 2.4504-1.4088 3.3912-.9408.9384-2.0712 1.4088-3.3912 1.4088 0 .6792-.2304 1.2504-.6888 1.7088-.4608.4608-1.032.6912-1.7112.6912s-1.2504-.2304-1.7088-.6912c-.4608-.4584-.6912-1.0296-.6912-1.7088h-14.4c0 .6792-.2304 1.2504-.6888 1.7088-.4608.4608-1.032.6912-1.7112.6912s-1.2504-.2304-1.7088-.6912c-.4608-.4584-.6912-1.0296-.6912-1.7088Zm0-4.8h24V20.4h-24v26.4Zm4.8-2.4h4.8V22.8h-4.8v21.6Zm9.6 0h4.8V22.8h-4.8v21.6Zm-4.8-28.8h4.8v-4.8h-4.8v4.8Z"
              />
            </StyledNavigationSvg>
          </Link>
          <NavigationItemText href="/presets">Presets</NavigationItemText>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
}

export function BurgerMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <BurgerMenuContainer>
      <BurgerMenuButton onClick={toggleMenu}>
        <StyledBurgerMenuSvg viewBox="0 0 24 24" isOpen={isOpen}>
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </StyledBurgerMenuSvg>
      </BurgerMenuButton>
      <BurgerMenuLinks isOpen={isOpen}>
        <BurgerMenuItem $active={router.pathname === "/"}>
          <NavigationItemText href="/">Trip Overview</NavigationItemText>
        </BurgerMenuItem>
        <BurgerMenuItem $active={router.pathname === "/trips/create"}>
          <NavigationItemText href="/trips/create">
            Create Trip
          </NavigationItemText>
        </BurgerMenuItem>
        <BurgerMenuItem $active={router.pathname === "/presets"}>
          <NavigationItemText href="/presets">Presets</NavigationItemText>
        </BurgerMenuItem>
      </BurgerMenuLinks>
    </BurgerMenuContainer>
  );
}
