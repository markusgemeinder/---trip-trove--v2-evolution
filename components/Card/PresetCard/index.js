import Link from "next/link";
import {
  StyledCard,
  CardTitle,
  StyledBadge,
  StyledBadgeOnBadge,
  PackListContainer,
  PackList2Columns,
  PackList2ColumnsLabelContainer,
  PackListLabelCentered,
  PackListLabelLeft,
  PackListItemName,
  PackListItemQuantity,
} from "@/components/Card/Card.styled";
import {
  ButtonContainer,
  StyledTextButton,
} from "@/components/Button/TextButton";

export default function PresetCard({ preset }) {
  return (
    <StyledCard>
      <CardTitle>{preset.presetName}</CardTitle>
      <StyledBadge>
        <PackList2ColumnsLabelContainer>
          <PackListLabelLeft>Item</PackListLabelLeft>
          <PackListLabelCentered>Qty</PackListLabelCentered>
        </PackList2ColumnsLabelContainer>
        <PackListContainer>
          {preset.items.map((item) => (
            <PackList2Columns key={item._id}>
              <StyledBadgeOnBadge>
                <PackListItemName text={item.itemName}>
                  {item.itemName}
                </PackListItemName>
              </StyledBadgeOnBadge>
              {item.itemQuantity && (
                <>
                  <StyledBadgeOnBadge>
                    <PackListItemQuantity>
                      {item.itemQuantity}
                    </PackListItemQuantity>
                  </StyledBadgeOnBadge>
                </>
              )}
            </PackList2Columns>
          ))}
        </PackListContainer>
      </StyledBadge>
      <ButtonContainer>
        <Link href={`presets/${preset._id}/edit`}>
          <StyledTextButton>Edit</StyledTextButton>
        </Link>
      </ButtonContainer>
    </StyledCard>
  );
}
