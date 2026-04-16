export const PERSONALITY_SLOTS = [
  { id: 'slot-광기', type: 'personality', category: '광기' },
  { id: 'slot-냉정', type: 'personality', category: '냉정' },
  { id: 'slot-순수', type: 'personality', category: '순수' },
  { id: 'slot-우울', type: 'personality', category: '우울' },
  { id: 'slot-활발', type: 'personality', category: '활발' },
]

export const RACE_SLOTS = [
  { id: 'slot-요정', type: 'race', category: '요정' },
  { id: 'slot-수인', type: 'race', category: '수인' },
  { id: 'slot-엘프', type: 'race', category: '엘프' },
  { id: 'slot-정령', type: 'race', category: '정령' },
  { id: 'slot-유령', type: 'race', category: '유령' },
  { id: 'slot-용족', type: 'race', category: '용족' },
  { id: 'slot-마녀', type: 'race', category: '마녀' },
  { id: 'slot-미스틱', type: 'race', category: '미스틱' },
]

export const PERSONALITY_COLORS = {
  '광기': { bg: '#fdeef2', border: '#EC849D', text: '#a83050' },
  '냉정': { bg: '#e8f3fd', border: '#84BAEC', text: '#2d6090' },
  '순수': { bg: '#eafaf0', border: '#65C17B', text: '#1a6b35' },
  '우울': { bg: '#f5eafd', border: '#C684EC', text: '#7a30a8' },
  '활발': { bg: '#fdf9e8', border: '#ECDC84', text: '#8a7010' },
}

export const RACE_COLORS = {
  '요정':   { bg: '#fdf5d9', border: '#E9BE3A', text: '#8a6500' },
  '수인':   { bg: '#fde8e2', border: '#E77A5A', text: '#a83018' },
  '엘프':   { bg: '#e5f8fb', border: '#5BCEE1', text: '#1a7a88' },
  '정령':   { bg: '#eefad9', border: '#84D953', text: '#3a7818' },
  '유령':   { bg: '#fae8f5', border: '#DF80BD', text: '#903070' },
  '용족':   { bg: '#ecf0f1', border: '#93A8AA', text: '#3d5c60' },
  '마녀':   { bg: '#f2e8fb', border: '#A76DDE', text: '#5c1890' },
  '미스틱': { bg: '#e8e9fc', border: '#575AE9', text: '#1a1ea8' },
}

// 프로토타입용 샘플 데이터 — 실제 JSON/이미지로 교체 예정
export const apostles = [
  { id: 'uros',    name: '우로스', personality: '공명', race: '미스틱', skillIcon: null },
  { id: 'erpin',   name: '에르핀', personality: '순수', race: '요정',   skillIcon: null },
  { id: 'apl-광1', name: '사도A',  personality: '광기', race: '수인',   skillIcon: null },
  { id: 'apl-광2', name: '사도B',  personality: '광기', race: '마녀',   skillIcon: null },
  { id: 'apl-냉1', name: '사도C',  personality: '냉정', race: '엘프',   skillIcon: null },
  { id: 'apl-냉2', name: '사도D',  personality: '냉정', race: '용족',   skillIcon: null },
  { id: 'apl-순1', name: '사도E',  personality: '순수', race: '정령',   skillIcon: null },
  { id: 'apl-우1', name: '사도F',  personality: '우울', race: '유령',   skillIcon: null },
  { id: 'apl-우2', name: '사도G',  personality: '우울', race: '수인',   skillIcon: null },
  { id: 'apl-활1', name: '사도H',  personality: '활발', race: '엘프',   skillIcon: null },
  { id: 'apl-활2', name: '사도I',  personality: '활발', race: '요정',   skillIcon: null },
]
