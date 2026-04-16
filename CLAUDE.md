# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

트릭컬 리바이브(수집형 RPG)의 사도(캐릭터)를 성격·종족별로 분류하여, 사용자가 '최애 사도'를 선택하고 하나의 이미지로 저장·공유할 수 있는 웹 서비스.

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (Vite HMR)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과물 미리보기
npm run lint     # ESLint 검사
```

## 기술 스택

- **React 19** (Vite 기반, JSX)
- **styled-components v6** — 모든 스타일링은 styled-components 사용
- **html2canvas** — 슬롯 영역을 PNG로 캡처할 때 `scale: 2` 옵션 적용
- 테스트 프레임워크 없음

## 핵심 데이터 구조

사도(Apostle) JSON 스키마:
```json
{
  "id": "erpin",
  "name": "에르핀",
  "personality": "순수",   // 우울 | 활발 | 순수 | 냉정 | 광기 | 공명
  "race": "요정",           // 요정 | 수인 | 엘프 | 정령 | 용족 | 마녀 | 유령 | 미스틱
  "skillIcon": "/images/icons/high_erpin.webp"  // 고학년 스킬 아이콘 경로
}
```

### 공명(共鳴) 성격 특수 규칙

- **공명**은 사도 **우로스**만 가진 고유 성격.
- 게임 내에서 우로스는 파티에 넣으면 5가지 성격(우울·활발·순수·냉정·광기) 중 하나로 동작함.
- **모달 필터링 동작:** 5가지 성격 슬롯(우울/활발/순수/냉정/광기) 중 어느 것을 클릭해도 우로스가 목록에 포함되어야 함.
- 구현 시 `personality === "공명"` 인 사도는 모든 성격 필터에서 항상 포함되도록 처리.

## 메인 레이아웃 구조

13개 슬롯으로 구성된 그리드:
- **상단 — 성격 섹션 (5칸):** 2×3 그리드
  - 1행: 광기(#EC849D) / 냉정(#84BAEC) / 순수 (#65C17B)
  - 2행: 우울(#C684EC) / 활발(#ECDC84) 
- **하단 — 종족 섹션 (8칸):** 3×3 그리드 (마지막 칸 비움 or 장식)
  - 요정(#E9BE3A) / 수인(#E77A5A) / 엘프(#5BCEE1) / 정령(#84D953) / 유령(#DF80BD) / 용족(#93A8AA) / 마녀(#A76DDE) / 미스틱(#575AE9)

## 구현할 주요 컴포넌트

| 컴포넌트 | 역할 |
|---|---|
| `ApostleGrid` | 13개 슬롯 메인 테이블 |
| `SelectionModal` | 슬롯 클릭 시 열리는 사도 선택 모달 (자동 필터링 + 이름 검색) |

슬롯 클릭 → 해당 성격 또는 종족에 맞는 사도만 모달에 표시 → 선택 시 고학년 스킬 아이콘이 슬롯에 채워짐.

## 디자인 가이드

- 트릭컬 리바이브 특유의 **파스텔톤 컬러**, **둥글둥글한 UI** 요소
- 모바일 대응 필수 — CSS Grid 레이아웃 최적화
