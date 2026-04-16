import styled from 'styled-components'
import { PERSONALITY_SLOTS, RACE_SLOTS, PERSONALITY_COLORS, RACE_COLORS } from '../data/apostles'

const GridWrapper = styled.div`
  background: linear-gradient(145deg, #fff8fd, #f8f8ff);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(160, 100, 200, 0.12);
  width: 100%;
  max-width: 440px;
  box-sizing: border-box;
`

const SectionLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  color: #b0a0c0;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;

  &:not(:first-child) {
    margin-top: 16px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`

const Slot = styled.div`
  aspect-ratio: 1;
  border-radius: 14px;
  border: 2px solid ${p => p.$borderColor || '#e0d8ea'};
  background: ${p => p.$bg || '#faf8fc'};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`

const PlaceholderBox = styled.div`
  width: 52%;
  height: 52%;
  border-radius: 10px;
  background: ${p => p.$color || '#ddd'};
  opacity: 0.35;
`

const ApostleIcon = styled.img`
  width: 65%;
  height: 65%;
  object-fit: contain;
`

const SlotLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${p => p.$color || '#a090b8'};
  line-height: 1;
`

const ApostleName = styled.span`
  font-size: 0.62rem;
  color: #7a6890;
  text-align: center;
  padding: 0 4px;
  line-height: 1.1;
`

const EmptyCell = styled.div`
  aspect-ratio: 1;
`

function ApostleGrid({ selectedApostles, onSlotClick, gridRef }) {
  const renderSlot = (slot) => {
    const selected = selectedApostles[slot.id]
    const colors =
      slot.type === 'personality'
        ? PERSONALITY_COLORS[slot.category]
        : RACE_COLORS[slot.category]

    return (
      <Slot
        key={slot.id}
        $bg={colors?.bg}
        $borderColor={colors?.border}
        onClick={() => onSlotClick(slot)}
      >
        {selected ? (
          <>
            {selected.skillIcon ? (
              <ApostleIcon src={selected.skillIcon} alt={selected.name} />
            ) : (
              <PlaceholderBox $color={colors?.border} style={{ opacity: 0.6 }} />
            )}
            <ApostleName>{selected.name}</ApostleName>
          </>
        ) : (
          <>
            <PlaceholderBox $color={colors?.border} />
            <SlotLabel $color={colors?.text}>{slot.category}</SlotLabel>
          </>
        )}
      </Slot>
    )
  }

  return (
    <GridWrapper ref={gridRef}>
      <SectionLabel>성격</SectionLabel>
      <Grid>
        {PERSONALITY_SLOTS.map(renderSlot)}
        <EmptyCell />
      </Grid>

      <SectionLabel>종족</SectionLabel>
      <Grid>
        {RACE_SLOTS.map(renderSlot)}
        <EmptyCell />
      </Grid>
    </GridWrapper>
  )
}

export default ApostleGrid
