import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "@/components/Layout/Navigation";
import PageUpButton from "@/components/Button/PageUpButton";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 0.2rem;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  margin: 100px auto;
  padding: 0px 15px;

  @media (min-width: 768px) and (min-height: 768px) {
    margin: 120px auto;
  }
`;

export default function Layout({ children }) {
  const [showPageUpButton, setShowPageUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setShowPageUpButton(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <LayoutContainer>
        <Header />
        <Main>{children}</Main>
        <Navigation />
        {showPageUpButton && <PageUpButton />}
      </LayoutContainer>
    </>
  );
}
