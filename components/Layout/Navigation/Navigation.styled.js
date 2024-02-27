import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: none;

  @media (min-width: 600px) {
    display: block;
    background-color: var(--color-navigation);
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
  }
`;

export const NavigationList = styled.ul`
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

  @media (min-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const StyledNavigationSvg = styled.svg`
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

export const StyledNavigationPath = styled.path`
  fill: var(--color-navigation-item);
`;

export const BurgerMenuContainer = styled.nav`
  background-color: var(--color-burger-menu);
  position: fixed;
  top: 80px;
  left: 10px;
  width: auto;
  z-index: 1;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const BurgerMenuButton = styled.div`
  display: block;
  margin: auto;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const BurgerMenuLinks = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: display 0.3s ease-in-out;

  @media (min-width: 600px) {
    display: block;
  }
`;

export const BurgerMenuItem = styled.div`
  padding: 10px;
  width: 100%;
  align-items: center;
  text-align: left;
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

export const BurgerMenuItemText = styled.a`
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-size: 0.7rem;
  color: var(--color-burger-menu-text);

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: var(--color-burger-menu-text);
  }

  @media (min-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const StyledBurgerMenuSvg = styled.svg`
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
