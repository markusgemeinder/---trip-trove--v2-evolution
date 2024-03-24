import React, { useState } from "react";
import InfoProjectEN from "@/components/Info/InfoProjectEN";
import InfoProjectDE from "@/components/Info/InfoProjectDE";
import InfoNeueFischeEN from "@/components/Info/InfoNeueFischeEN";
import InfoNeueFischeDE from "@/components/Info/InfoNeueFischeDE";
import InfoTechstackEN from "@/components/Info/InfoTechstackEN";
import InfoTechstackDE from "@/components/Info/InfoTechstackDE";
import InfoContactEN from "@/components/Info/InfoContactEN";
import InfoContactDE from "@/components/Info/InfoContactDE";
import PreviousPageButton from "@/components/Button/PreviousPageButton";
import NextPageButton from "@/components/Button/NextPageButton";
import LanguageToggleButton from "@/components/Button/LanguageToggleButton";

export default function InfoPage() {
  const [currentCard, setCurrentCard] = useState(1);
  const totalCards = 4;
  const [isEnglish, setIsEnglish] = useState(true);

  function toggleLanguage() {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  }

  function goToNextCard() {
    setCurrentCard((prevCard) => (prevCard === totalCards ? 1 : prevCard + 1));
  }

  function goToPrevCard() {
    setCurrentCard((prevCard) => (prevCard === 1 ? totalCards : prevCard - 1));
  }

  return (
    <>
      <LanguageToggleButton
        isEnglish={isEnglish}
        toggleLanguage={toggleLanguage}
      />
      {currentCard === 1 &&
        (isEnglish ? (
          <InfoProjectEN currentCard={currentCard} totalCards={totalCards} />
        ) : (
          <InfoProjectDE currentCard={currentCard} totalCards={totalCards} />
        ))}
      {currentCard === 2 &&
        (isEnglish ? (
          <InfoNeueFischeEN currentCard={currentCard} totalCards={totalCards} />
        ) : (
          <InfoNeueFischeDE currentCard={currentCard} totalCards={totalCards} />
        ))}
      {currentCard === 3 &&
        (isEnglish ? (
          <InfoTechstackEN currentCard={currentCard} totalCards={totalCards} />
        ) : (
          <InfoTechstackDE currentCard={currentCard} totalCards={totalCards} />
        ))}
      {currentCard === 4 &&
        (isEnglish ? (
          <InfoContactEN currentCard={currentCard} totalCards={totalCards} />
        ) : (
          <InfoContactDE currentCard={currentCard} totalCards={totalCards} />
        ))}
      <PreviousPageButton onClick={goToPrevCard} />
      <NextPageButton onClick={goToNextCard} />
    </>
  );
}
