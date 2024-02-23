import useSWR from "swr";
import Link from "next/link";
import {
  ButtonContainer,
  StyledTextButton,
} from "@/components/Button/TextButton";
import BackButton from "@/components/Button/BackButton";
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
        <Link href={"/presets/create"}>
          <StyledTextButton>New Preset</StyledTextButton>
        </Link>
      </ButtonContainer>

      <PresetList presets={presets} />
      <BackButton href="/" />
    </>
  );
}
