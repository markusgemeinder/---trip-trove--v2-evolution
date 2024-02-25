import PresetCard from "@/components/Card/PresetCard";
import { CardListContainer, CardList } from "@/components/Card/Card.styled";

export default function PresetList({ presets }) {
  return (
    <>
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
