import styled from "styled-components";

export const BurgerMenuButton = styled.div`
  /* background-color: var(--color-burger-menu); */
  position: fixed;
  top: 70px;
  left: 0px;
  display: block;
  margin: 10px 0 10px 10px;
  padding: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 4;
  transition: color 0.6s ease, transform 0.6s ease;

  &:hover {
    /* background-color: var(--color-burger-menu); */
    transform: scale(1.2);
  }

  @media (min-width: 600px) and (min-height: 600px) {
    display: none;
    /* top: 90px; */
  }
`;

export const BurgerMenuButtonSvg = styled.svg`
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;

  line {
    stroke-width: 2;
    stroke: ${(props) =>
      props.isOpen
        ? "var(--color-burger-menu-x-icon)"
        : "var(--color-burger-menu-icon)"};
  }
`;

export const BurgerMenuNavigation = styled.nav`
  background-color: var(--color-burger-menu);
  opacity: 0.95;
  position: fixed;
  top: 70px;
  left: 0px;
  width: 54%;
  height: 100vh;
  padding-top: 54px;
  z-index: 3;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});

  @media (min-width: 600px) and (min-height: 600px) {
    display: none;
  }
`;

export const BurgerMenuList = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  transition: display 0.3s ease-in-out;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--color-burger-menu-text);

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: var(--color-burger-menu-text);
  }
`;

export const BurgerMenuItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 25px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  border-top: 2px solid var(--color-burger-menu-border);

  &:hover {
    background-color: var(--color-burger-menu-hover);
  }

  ${({ $active }) =>
    $active && "background-color: var(--color-burger-menu-active);"}
`;

export const BurgerMenuItemText = styled.p`
  padding: 0;
  margin: 0;
  padding-left: 10px;
  font-size: 0.8rem;
  color: var(--color-burger-menu-text);

  @media (min-width: 600px) and (min-height: 600px) {
    font-size: 1rem;
  }
`;

export const NavigationContainer = styled.nav`
  display: block;
  background-color: var(--color-navigation);
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;

  @media (max-width: 600px) or (max-height: 600px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  height: 60px;
  padding: 0;
  margin: 0;

  @media (min-width: 600px) and (min-height: 600px) {
    height: 80px;
  }
`;

export const NavigationItem = styled.li`
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

export const NavigationItemText = styled.a`
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

  @media (min-width: 600px) and (min-height: 600px) {
    font-size: 0.9rem;
  }
`;
