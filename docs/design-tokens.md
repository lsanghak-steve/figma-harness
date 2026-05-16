# 디자인 토큰 매핑 테이블

> Figma 변수명 ↔ CSS custom property 매핑.
> Claude Code가 Figma 디자인 구현 시 이 문서를 참조합니다.
> 토큰 추가/변경 시 이 문서도 업데이트하세요.

**출처**: `WljNxoKAjQQklok7ulnZ5K` (MTOU 실습예제)  
**추출일**: 2026-05-16

## 네이밍 규칙

Figma `/` → CSS `-` 변환. 예: `text/primary` → `--color-text-primary`

---

## 색상 — Primitives

| Figma 변수명    | CSS Property             | 값        |
| --------------- | ------------------------ | --------- |
| color/white     | --primitive-white        | #ffffff   |
| color/black     | --primitive-black        | #000000   |
| color/gray/100  | --primitive-gray-100     | #f4f4f4   |
| color/gray/200  | --primitive-gray-200     | #c6c6c6   |
| color/gray/400  | --primitive-gray-400     | #939393   |
| color/gray/600  | --primitive-gray-600     | #5d5d5d   |
| color/gray/900  | --primitive-gray-900     | #474747   |
| color/brand/600 | --primitive-brand-600    | #ff4800   |
| (derived)       | --primitive-gray-600-a64 | #5d5d5da3 |
| (derived)       | --primitive-gray-600-a08 | #5d5d5d14 |
| (derived)       | --primitive-gray-600-a16 | #5d5d5d29 |

## 색상 — Text

| Figma 변수명   | CSS Property           | 참조                          | 용도                  |
| -------------- | ---------------------- | ----------------------------- | --------------------- |
| text/primary   | --color-text-primary   | var(--primitive-black)        | 주요 텍스트           |
| text/secondary | --color-text-secondary | var(--primitive-gray-900)     | 보조 텍스트           |
| text/tertiary  | --color-text-tertiary  | var(--primitive-gray-600-a64) | 3차 텍스트 (64% 투명) |
| text/disabled  | --color-text-disabled  | var(--primitive-gray-200)     | 비활성 텍스트         |
| text/on-dark   | --color-text-on-dark   | var(--primitive-white)        | 어두운 배경 위 텍스트 |
| text/brand     | --color-text-brand     | var(--primitive-brand-600)    | 브랜드 컬러 텍스트    |

## 색상 — Background

| Figma 변수명       | CSS Property       | 참조                          | 용도           |
| ------------------ | ------------------ | ----------------------------- | -------------- |
| background/base    | --color-bg-base    | var(--primitive-white)        | 기본 배경      |
| background/surface | --color-bg-surface | var(--primitive-gray-100)     | 카드/서피스    |
| background/tag     | --color-bg-tag     | var(--primitive-gray-600-a08) | 태그 배경 (8%) |

## 색상 — Border & Divider

| Figma 변수명    | CSS Property            | 참조                          | 용도         |
| --------------- | ----------------------- | ----------------------------- | ------------ |
| border/default  | --color-border-default  | var(--primitive-gray-100)     | 기본 테두리  |
| divider/default | --color-divider-default | var(--primitive-gray-600-a16) | 구분선 (16%) |

## 색상 — Icon

| Figma 변수명   | CSS Property           | 참조                      | 용도          |
| -------------- | ---------------------- | ------------------------- | ------------- |
| icon/primary   | --color-icon-primary   | var(--primitive-black)    | 주요 아이콘   |
| icon/secondary | --color-icon-secondary | var(--primitive-gray-600) | 보조 아이콘   |
| icon/disabled  | --color-icon-disabled  | var(--primitive-gray-400) | 비활성 아이콘 |

## 색상 — Brand & Status

| Figma 변수명  | CSS Property          | 참조                       | 용도          |
| ------------- | --------------------- | -------------------------- | ------------- |
| brand/primary | --color-brand-primary | var(--primitive-brand-600) | 브랜드 주요색 |
| status/sale   | --color-status-sale   | var(--primitive-brand-600) | 세일/할인 색  |

---

## 스페이싱 — 숫자 스케일

| Figma 변수명 | CSS Property | 값   |
| ------------ | ------------ | ---- |
| spacing/1    | --spacing-1  | 2px  |
| spacing/2    | --spacing-2  | 4px  |
| spacing/3    | --spacing-3  | 6px  |
| spacing/4    | --spacing-4  | 8px  |
| spacing/5    | --spacing-5  | 10px |
| spacing/6    | --spacing-6  | 12px |
| spacing/7    | --spacing-7  | 14px |
| spacing/8    | --spacing-8  | 20px |

## 스페이싱 — Component

| Figma 변수명         | CSS Property           | 값   |
| -------------------- | ---------------------- | ---- |
| spacing/component/xs | --spacing-component-xs | 2px  |
| spacing/component/sm | --spacing-component-sm | 4px  |
| spacing/component/md | --spacing-component-md | 8px  |
| spacing/component/lg | --spacing-component-lg | 12px |
| spacing/component/xl | --spacing-component-xl | 20px |

## 스페이싱 — Layout

| Figma 변수명      | CSS Property        | 값   |
| ----------------- | ------------------- | ---- |
| spacing/layout/sm | --spacing-layout-sm | 14px |
| spacing/layout/md | --spacing-layout-md | 20px |

---

## Radius

| Figma 변수명 | CSS Property  | 값     |
| ------------ | ------------- | ------ |
| radius/xs    | --radius-xs   | 2px    |
| radius/sm    | --radius-sm   | 3px    |
| radius/md    | --radius-md   | 4px    |
| radius/lg    | --radius-lg   | 8px    |
| radius/full  | --radius-full | 9999px |

---

## 타이포그래피

폰트 패밀리: `--font-family-sans` = `'Pretendard Variable', sans-serif`

각 타입 스케일은 `--font-size-*`, `--font-weight-*`, `--line-height-*` 세 토큰으로 구성됩니다.

| Figma 변수명      | font-size | font-weight | line-height |
| ----------------- | --------- | ----------- | ----------- |
| heading/md        | 18px      | 700         | 1           |
| label/md          | 14px      | 500         | 1           |
| label/md-bold     | 14px      | 700         | 1           |
| label/sm          | 13px      | 500         | 1           |
| label/xs          | 12px      | 500         | 1           |
| label/xs-bold     | 12px      | 700         | 16px        |
| label/xs-bold-100 | 12px      | 700         | 1           |
| body/sm           | 13px      | 500         | 18px        |
| body/xs           | 12px      | 400         | 16px        |
| caption/sm        | 10px      | 500         | 12px        |
| caption/sm-100    | 10px      | 500         | 1           |
| caption/xs        | 10px      | 400         | 1           |

CSS 사용 예:

```css
font-family: var(--font-family-sans);
font-size: var(--font-size-label-md);
font-weight: var(--font-weight-label-md);
line-height: var(--line-height-label-md);
```

---

## Claude용 규칙

1. Figma MCP가 hex 색상 반환 → 이 테이블에서 찾아서 `var(--color-*)` 사용
2. Figma가 스페이싱 숫자 반환 → `var(--spacing-*)` 매핑  
   예: `8` → `var(--spacing-4)` 또는 `var(--spacing-component-md)`
3. 테이블에 없는 값 → 새 변수 만들지 말고 `/* ⚠️ 누락된 토큰 */` 플래그
4. 반투명 색상은 `-a64`, `-a08`, `-a16` suffix 붙은 primitive 참조
