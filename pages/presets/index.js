import useSWR from "swr";
import BackButton from "@/components/Button/BackButton";
import { StyledLink } from "@/components/Card/Card.styled";

import {
  ButtonContainer,
  StyledTextButton,
} from "@/components/Button/TextButton";

import PresetList from "@/components/Card/PresetList";

export default function PresetsPage() {
  const {
    data: presets,
    error,
    isLoading,
  } = useSWR("/api/presets", {
    fallbackData: [],
  });

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <ButtonContainer>
        <StyledLink href={"/presets/create"}>
          <StyledTextButton type={"button"}>New Preset</StyledTextButton>
        </StyledLink>
      </ButtonContainer>
      <PresetList presets={presets} />
      <BackButton href="/" />
    </>
  );
}
