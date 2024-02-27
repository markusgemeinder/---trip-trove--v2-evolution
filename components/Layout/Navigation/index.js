import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  TripListIcon,
  TripCreateIcon,
  PresetsIcon,
} from "@/components/Layout/Navigation/NavigationIcon";
import {
  BurgerMenuButton,
  BurgerMenuButtonSvg,
  BurgerMenuNavigation,
  BurgerMenuList,
  BurgerMenuItem,
  StyledLink,
  BurgerMenuItemText,
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationItemText,
} from "@/components/Layout/Navigation/Navigation.styled";

export default function Navigation() {
  return (
    <>
      <BurgerNavigation />
      <StandardNavigation />
    </>
  );
}

export function BurgerNavigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <BurgerMenuButton onClick={toggleMenu}>
        <BurgerMenuButtonSvg viewBox="0 0 24 24" isOpen={isOpen}>
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
        </BurgerMenuButtonSvg>
      </BurgerMenuButton>
      <BurgerMenuNavigation isOpen={isOpen}>
        <BurgerMenuList isOpen={isOpen}>
          <StyledLink href="/">
            <BurgerMenuItem $active={router.pathname === "/"}>
              <TripListIcon isBurgerNavigation={true} />
              <BurgerMenuItemText>All Trips</BurgerMenuItemText>
            </BurgerMenuItem>
          </StyledLink>
          <StyledLink href="/trips/create">
            <BurgerMenuItem $active={router.pathname === "/trips/create"}>
              <TripCreateIcon isBurgerNavigation={true} />
              <BurgerMenuItemText>New Trip</BurgerMenuItemText>
            </BurgerMenuItem>
          </StyledLink>
          <StyledLink href="/presets">
            <BurgerMenuItem $active={router.pathname === "/presets"}>
              <PresetsIcon isBurgerNavigation={true} />
              <BurgerMenuItemText>Presets</BurgerMenuItemText>
            </BurgerMenuItem>
          </StyledLink>
        </BurgerMenuList>
      </BurgerMenuNavigation>
    </>
  );
}

export function StandardNavigation() {
  const router = useRouter();

  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem $active={router.pathname === "/"}>
          <Link href="/">
            <TripListIcon isBurgerNavigation={false} />
          </Link>
          <NavigationItemText href="/">All Trips</NavigationItemText>
        </NavigationItem>

        <NavigationItem $active={router.pathname === "/trips/create"}>
          <Link href="/trips/create">
            <TripCreateIcon isBurgerNavigation={false} />
          </Link>
          <NavigationItemText href="/trips/create">New Trip</NavigationItemText>
        </NavigationItem>
        <NavigationItem $active={router.pathname === "/presets"}>
          <Link href="/presets">
            <PresetsIcon isBurgerNavigation={false} />
          </Link>
          <NavigationItemText href="/presets">Presets</NavigationItemText>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
}
