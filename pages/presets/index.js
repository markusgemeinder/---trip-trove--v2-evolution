import { useEffect, useState } from "react";
import useSWR from "swr";
import BackButton from "@/components/Button/BackButton";
import { StyledLink } from "@/components/Card/Card.styled";
import LoadingMessage from "@/components/Message/LoadingMessage";
import ErrorMessage from "@/components/Message/ErrorMessage";
import { isLoadingMessageDuration } from "@/lib/utils";

import {
  ButtonContainerWithoutMargin,
  StyledTextButton,
} from "@/components/Button/TextButton";

import PresetList from "@/components/Card/PresetList";

export default function PresetsPage() {
  const [isLoadingTimeout, setIsLoadingTimeout] = useState(true);
  const {
    data: presets,
    error,
    isLoading,
  } = useSWR("/api/presets", {
    fallbackData: [],
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingTimeout(false);
    }, isLoadingMessageDuration);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading || isLoadingTimeout) return <LoadingMessage />;

  if (error) return <ErrorMessage />;

  return (
    <>
      <ButtonContainerWithoutMargin>
        <StyledLink href={"/presets/create"}>
          <StyledTextButton type={"button"}>New Preset</StyledTextButton>
        </StyledLink>
      </ButtonContainerWithoutMargin>
      <PresetList presets={presets} />
      <BackButton href="/" />
    </>
  );
}
