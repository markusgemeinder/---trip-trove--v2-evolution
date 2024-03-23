import React, { useState } from "react";
import InfoProject from "@/components/Info/Project";
import InfoNeueFische from "@/components/Info/NeueFische";
import InfoTechstack from "@/components/Info/Techstack";
import InfoContact from "@/components/Info/Contact";
import PreviousPageButton from "@/components/Button/PreviousPageButton";
import NextPageButton from "@/components/Button/NextPageButton";

export default function InfoPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = 4; // Total number of cards

  const goToNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === totalCards - 1 ? 0 : prevCard + 1
    );
  };

  const goToPrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? totalCards - 1 : prevCard - 1
    );
  };

  return (
    <div>
      {currentCard === 0 && <InfoProject />}
      {currentCard === 1 && <InfoNeueFische />}
      {currentCard === 2 && <InfoTechstack />}
      {currentCard === 3 && <InfoContact />}

      <PreviousPageButton onClick={goToPrevCard} />
      <NextPageButton onClick={goToNextCard} />
    </div>
  );
}
