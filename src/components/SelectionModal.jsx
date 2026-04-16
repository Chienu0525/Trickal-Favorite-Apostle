import { useState } from 'react'
import styled from 'styled-components'
import { apostles, PERSONALITY_COLORS, RACE_COLORS } from '../data/apostles'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(80, 40, 120, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 16px;
`

const Modal = styled.div`
  background: #fff;
  border-radius: 24px;
  width: 100%;
  max-width: 380px;
  max-height: 78vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(80, 40, 120, 0.2);
`

const ModalHeader = styled.div`
  padding: 16px 20px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0ebf8;
`

const ModalTitle = styled.h2`
  font-size: 0.95rem;
  font-weight: 700;
  color: #5a3a80;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: #b0a0c0;
  cursor: pointer;
  padding: 0 2px;

  &:hover {
    color: #5a3a80;
  }
`

const SearchInput = styled.input`
  margin: 12px 16px 8px;
  padding: 8px 16px;
  border: 1.5px solid #e0d8f0;
  border-radius: 20px;
  font-size: 0.88rem;
  font-family: inherit;
  outline: none;
  color: #4a3060;
  background: #fff;

  &:focus {
    border-color: #c084f5;
    box-shadow: 0 0 0 3px rgba(192, 132, 245, 0.15);
  }

  &::placeholder {
    color: #c0b0d8;
  }
`

const ApostleList = styled.div`
  overflow-y: auto;
  padding: 4px 16px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`

const ApostleCard = styled.div`
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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`

const CardPlaceholder = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 8px;
  background: ${p => p.$color || '#ddd'};
  opacity: 0.5;
`

const CardIcon = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
`

const CardName = styled.span`
  font-size: 0.62rem;
  color: #7a6890;
  text-align: center;
  padding: 0 4px;
  line-height: 1.2;
`

const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  color: #c0b0d8;
  font-size: 0.88rem;
  text-align: center;
  padding: 32px 0;
  margin: 0;
`

function SelectionModal({ slot, onSelect, onClose }) {
  const [search, setSearch] = useState('')

  const filtered = apostles.filter(a => {
    const matchesFilter =
      slot.type === 'personality'
        ? a.personality === slot.category || a.personality === '공명'
        : a.race === slot.category
    return matchesFilter && a.name.includes(search)
  })

  const getColors = (apostle) =>
    slot.type === 'personality'
      ? PERSONALITY_COLORS[slot.category]
      : RACE_COLORS[apostle.race]

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{slot.category} 사도 선택</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <SearchInput
          placeholder="사도 이름 검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <ApostleList>
          {filtered.length === 0 && (
            <EmptyMessage>해당하는 사도가 없습니다.</EmptyMessage>
          )}
          {filtered.map(apostle => {
            const colors = getColors(apostle)
            return (
              <ApostleCard
                key={apostle.id}
                $bg={colors?.bg}
                $borderColor={colors?.border}
                onClick={() => onSelect(apostle)}
              >
                {apostle.skillIcon ? (
                  <CardIcon src={apostle.skillIcon} alt={apostle.name} />
                ) : (
                  <CardPlaceholder $color={colors?.border} />
                )}
                <CardName>{apostle.name}</CardName>
              </ApostleCard>
            )
          })}
        </ApostleList>
      </Modal>
    </Overlay>
  )
}

export default SelectionModal
