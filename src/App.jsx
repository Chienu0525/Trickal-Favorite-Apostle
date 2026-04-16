import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import styled from 'styled-components'
import ApostleGrid from './components/ApostleGrid'
import SelectionModal from './components/SelectionModal'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(150deg, #fce4f8 0%, #ede8ff 50%, #e4f0ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 16px 48px;
  box-sizing: border-box;
`

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  color: #6b3a9a;
  margin: 0 0 28px;
  text-align: center;
  letter-spacing: -0.3px;
`

const SaveButton = styled.button`
  margin-top: 24px;
  padding: 12px 36px;
  background: linear-gradient(135deg, #c084f5, #818cf8);
  color: #fff;
  border: none;
  border-radius: 28px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(160, 100, 240, 0.3);
  transition: opacity 0.15s ease, transform 0.15s ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

function App() {
  const [selectedApostles, setSelectedApostles] = useState({})
  const [activeSlot, setActiveSlot] = useState(null)
  const gridRef = useRef(null)

  const handleSelectApostle = (apostle) => {
    setSelectedApostles(prev => ({ ...prev, [activeSlot.id]: apostle }))
    setActiveSlot(null)
  }

  const handleSave = async () => {
    if (!gridRef.current) return
    const canvas = await html2canvas(gridRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    })
    const link = document.createElement('a')
    link.download = 'trickal-favorite.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <PageWrapper>
      <Title>트릭컬 최애 사도 표 메이커</Title>

      <ApostleGrid
        gridRef={gridRef}
        selectedApostles={selectedApostles}
        onSlotClick={setActiveSlot}
      />

      <SaveButton onClick={handleSave}>이미지로 저장</SaveButton>

      {activeSlot && (
        <SelectionModal
          slot={activeSlot}
          onSelect={handleSelectApostle}
          onClose={() => setActiveSlot(null)}
        />
      )}
    </PageWrapper>
  )
}

export default App
