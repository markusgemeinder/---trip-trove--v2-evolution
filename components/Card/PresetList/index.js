import {
  ButtonContainer,
  StyledTextButton,
} from "@/components/Button/TextButton";
import PresetCard from "@/components/Card/PresetCard";
import {
  CardListContainer,
  CardList,
  StyledLink,
} from "@/components/Card/Card.styled";

export default function PresetList({ presets }) {
  return (
    <>
      <ButtonContainer>
        <StyledLink href={"/presets/create"}>
          <StyledTextButton type={"button"}>New Preset</StyledTextButton>
        </StyledLink>
      </ButtonContainer>

      <CardListContainer>
        {presets.map((preset) => (
          <CardList preset={preset} key={preset._id}>
            <PresetCard preset={preset} />
          </CardList>
        ))}
      </CardListContainer>
    </>
  );
}
