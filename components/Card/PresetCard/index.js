import {
  StyledLink,
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
  CardTextCallToAction,
} from "@/components/Card/Card.styled";

export default function PresetCard({ preset }) {
  return (
    <StyledLink href={`presets/${preset._id}`}>
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
        <CardTextCallToAction>Edit Preset</CardTextCallToAction>
      </StyledCard>
    </StyledLink>
  );
}
