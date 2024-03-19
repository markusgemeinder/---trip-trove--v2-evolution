import styled from "styled-components";
import { useRouter } from "next/router";
import Logo from "@/components/Layout/Logo";

const HeaderContainer = styled.header`
  margin: 0;
  background: linear-gradient(
    to right,
    var(--color-header),
    var(--color-header-lightened)
  );
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  z-index: 10;

  @media (min-width: 768px) and (min-height: 768px) {
    height: 90px;
  }
`;

const HeaderTitle = styled.h1`
  color: var(--color-header-title);
  font-size: 1.4rem;

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 1.8rem;
`;

export default function Header() {
  const router = useRouter();

  let pageTitle = "TripTrove";

  switch (true) {
    case router.pathname === "/":
      pageTitle = "Trip Overview";
      break;
    case router.pathname === "/trips/create":
      pageTitle = "New Trip";
      break;
    case router.pathname === "/presets":
      pageTitle = "Pack List Presets";
      break;
    case router.pathname.startsWith("/info"):
      pageTitle = "About Trip Trove";
      break;
    case router.pathname === "/presets/create":
      pageTitle = "New Preset";
      break;
    case router.pathname.startsWith("/presets/") &&
      router.pathname.includes("/edit"):
      pageTitle = "Edit Preset";
      break;
    case router.pathname.startsWith("/trips/") &&
      !router.pathname.includes("/edit"):
      pageTitle = "Trip Details";
      break;
    case router.pathname.startsWith("/trips/") &&
      router.pathname.includes("/edit"):
      pageTitle = "Edit Trip";
      break;
    default:
      pageTitle = "Trip Trove";
      break;
  }

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>{pageTitle}</HeaderTitle>
        <Logo />
      </HeaderContainer>
    </>
  );
}
