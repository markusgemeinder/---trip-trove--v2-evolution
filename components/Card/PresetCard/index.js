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
  StyledLink,
} from "@/components/Card/Card.styled";
import {
  ButtonContainer,
  StyledTextButton,
} from "@/components/Button/TextButton";

import CreateDateBadge from "@/components/Badge/CreateDateBadge";

export default function PresetCard({ preset, onDelete, onEdit }) {
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
        <StyledTextButton type={"button"} onClick={onDelete}>
          Delete
        </StyledTextButton>
        <StyledTextButton type={"button"} onClick={onEdit}>
          Edit
        </StyledTextButton>
      </ButtonContainer>
      <CreateDateBadge
        createdAt={preset.createdAt}
        updatedAt={preset.updatedAt}
        isTripData={false}
      />
    </StyledCard>
  );
}
