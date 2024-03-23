import React, { useState } from "react";
import InfoProject from "@/components/Info/Project";
import InfoNeueFische from "@/components/Info/NeueFische";
import InfoTechstack from "@/components/Info/Techstack";
import InfoContact from "@/components/Info/Contact";
import PreviousPageButton from "@/components/Button/PreviousPageButton";
import NextPageButton from "@/components/Button/NextPageButton";

export default function InfoPage() {
  const [currentCard, setCurrentCard] = useState(1);
  const totalCards = 4; // Total number of cards

  const goToNextCard = () => {
    setCurrentCard((prevCard) => (prevCard === totalCards ? 1 : prevCard + 1));
  };

  const goToPrevCard = () => {
    setCurrentCard((prevCard) => (prevCard === 1 ? totalCards : prevCard - 1));
  };

  return (
    <>
      {currentCard === 1 && (
        <InfoProject currentCard={currentCard} totalCards={totalCards} />
      )}
      {currentCard === 2 && (
        <InfoNeueFische currentCard={currentCard} totalCards={totalCards} />
      )}
      {currentCard === 3 && (
        <InfoTechstack currentCard={currentCard} totalCards={totalCards} />
      )}
      {currentCard === 4 && (
        <InfoContact currentCard={currentCard} totalCards={totalCards} />
      )}

      <PreviousPageButton onClick={goToPrevCard} />
      <NextPageButton onClick={goToNextCard} />
    </>
  );
}
