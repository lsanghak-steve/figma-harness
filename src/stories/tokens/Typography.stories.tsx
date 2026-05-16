import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const FIGMA_URL =
  'https://www.figma.com/design/WljNxoKAjQQklok7ulnZ5K/-MTOU--%EC%8B%A4%EC%8A%B5%EC%98%88%EC%A0%9C--Copy-?node-id=58-445&m=dev';

// ── 데이터 ────────────────────────────────────────────────────────────────

interface TypeToken {
  scale: string;
  figmaName: string;
  sizeToken: string;
  weightToken: string;
  lineHeightToken: string;
  size: string;
  weight: string;
  lineHeight: string;
  sample?: string;
}

const HEADING: TypeToken[] = [
  {
    scale: 'heading/md',
    figmaName: 'heading/md',
    sizeToken: '--font-size-heading-md',
    weightToken: '--font-weight-heading-md',
    lineHeightToken: '--line-height-heading-md',
    size: '18px',
    weight: '700 Bold',
    lineHeight: '1',
    sample: '상품명 / 페이지 제목',
  },
];

const LABELS: TypeToken[] = [
  {
    scale: 'label/md',
    figmaName: 'label/md',
    sizeToken: '--font-size-label-md',
    weightToken: '--font-weight-label-md',
    lineHeightToken: '--line-height-label-md',
    size: '14px',
    weight: '500 Medium',
    lineHeight: '1',
    sample: '버튼 텍스트 / 탭 라벨',
  },
  {
    scale: 'label/md-bold',
    figmaName: 'label/md-bold',
    sizeToken: '--font-size-label-md-bold',
    weightToken: '--font-weight-label-md-bold',
    lineHeightToken: '--line-height-label-md-bold',
    size: '14px',
    weight: '700 Bold',
    lineHeight: '1',
    sample: '강조 버튼 / 가격 표시',
  },
  {
    scale: 'label/sm',
    figmaName: 'label/sm',
    sizeToken: '--font-size-label-sm',
    weightToken: '--font-weight-label-sm',
    lineHeightToken: '--line-height-label-sm',
    size: '13px',
    weight: '500 Medium',
    lineHeight: '1',
    sample: '보조 라벨 / 태그',
  },
  {
    scale: 'label/xs',
    figmaName: 'label/xs',
    sizeToken: '--font-size-label-xs',
    weightToken: '--font-weight-label-xs',
    lineHeightToken: '--line-height-label-xs',
    size: '12px',
    weight: '500 Medium',
    lineHeight: '1',
    sample: '뱃지 / 칩',
  },
  {
    scale: 'label/xs-bold',
    figmaName: 'label/xs-bold',
    sizeToken: '--font-size-label-xs-bold',
    weightToken: '--font-weight-label-xs-bold',
    lineHeightToken: '--line-height-label-xs-bold',
    size: '12px',
    weight: '700 Bold',
    lineHeight: '16px',
    sample: '강조 뱃지',
  },
];

const BODY: TypeToken[] = [
  {
    scale: 'body/sm',
    figmaName: 'body/sm',
    sizeToken: '--font-size-body-sm',
    weightToken: '--font-weight-body-sm',
    lineHeightToken: '--line-height-body-sm',
    size: '13px',
    weight: '500 Medium',
    lineHeight: '18px',
    sample: '상품 설명 · 본문 텍스트가 여러 줄로 이어집니다',
  },
  {
    scale: 'body/xs',
    figmaName: 'body/xs',
    sizeToken: '--font-size-body-xs',
    weightToken: '--font-weight-body-xs',
    lineHeightToken: '--line-height-body-xs',
    size: '12px',
    weight: '400 Regular',
    lineHeight: '16px',
    sample: '보조 설명 · 작은 본문 텍스트가 여러 줄로 이어집니다',
  },
];

const CAPTIONS: TypeToken[] = [
  {
    scale: 'caption/sm',
    figmaName: 'caption/sm',
    sizeToken: '--font-size-caption-sm',
    weightToken: '--font-weight-caption-sm',
    lineHeightToken: '--line-height-caption-sm',
    size: '10px',
    weight: '500 Medium',
    lineHeight: '12px',
    sample: '날짜 · 부가 정보 여러 줄',
  },
  {
    scale: 'caption/xs',
    figmaName: 'caption/xs',
    sizeToken: '--font-size-caption-xs',
    weightToken: '--font-weight-caption-xs',
    lineHeightToken: '--line-height-caption-xs',
    size: '10px',
    weight: '400 Regular',
    lineHeight: '1',
    sample: '최소 캡션',
  },
];

// ── 서브 컴포넌트 ─────────────────────────────────────────────────────────

function TypeRow({
  scale,
  sizeToken,
  weightToken,
  lineHeightToken,
  size,
  weight,
  lineHeight,
  sample,
}: TypeToken) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 180px',
        gap: 'var(--spacing-4)',
        alignItems: 'start',
        padding: 'var(--spacing-4) 0',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      {/* 샘플 텍스트 */}
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-family-sans)',
          fontSize: `var(${sizeToken})`,
          fontWeight: `var(${weightToken})`,
          lineHeight: `var(${lineHeightToken})`,
          color: 'var(--color-text-primary)',
        }}
      >
        {sample ?? scale}
      </p>

      {/* 토큰 메타 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <code
          style={{
            fontSize: 'var(--font-size-caption-xs)',
            fontFamily: 'monospace',
            color: 'var(--color-text-brand)',
          }}
        >
          {scale}
        </code>
        <span
          style={{ fontSize: 'var(--font-size-caption-xs)', color: 'var(--color-text-secondary)' }}
        >
          {size} · {weight}
        </span>
        <span
          style={{ fontSize: 'var(--font-size-caption-xs)', color: 'var(--color-text-tertiary)' }}
        >
          line-height: {lineHeight}
        </span>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2
      style={{
        fontSize: 'var(--font-size-label-md)',
        fontWeight: 'var(--font-weight-label-md-bold)',
        color: 'var(--color-text-primary)',
        margin: '0 0 var(--spacing-2)',
        paddingBottom: 'var(--spacing-3)',
        borderBottom: '2px solid var(--color-brand-primary)',
      }}
    >
      {children}
    </h2>
  );
}

// ── 페이지 컴포넌트 ───────────────────────────────────────────────────────

interface TypographyPageProps {
  section?: 'all' | 'heading' | 'label' | 'body' | 'caption';
}

function TypographyPage({ section = 'all' }: TypographyPageProps) {
  const show = (s: string) => section === 'all' || section === s;

  return (
    <div
      style={{
        padding: 'var(--spacing-8)',
        fontFamily: 'var(--font-family-sans)',
        maxWidth: 680,
        backgroundColor: 'var(--color-bg-base)',
      }}
    >
      <h1
        style={{
          fontSize: 'var(--font-size-heading-md)',
          fontWeight: 'var(--font-weight-heading-md)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-2)',
        }}
      >
        Typography Tokens
      </h1>
      <p
        style={{
          fontSize: 'var(--font-size-body-xs)',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--spacing-8)',
          fontFamily: 'var(--font-family-sans)',
        }}
      >
        폰트: Pretendard Variable · CSS 토큰 기반
      </p>

      {show('heading') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Heading</SectionTitle>
          {HEADING.map((t) => (
            <TypeRow key={t.scale} {...t} />
          ))}
        </section>
      )}

      {show('label') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Label</SectionTitle>
          {LABELS.map((t) => (
            <TypeRow key={t.scale} {...t} />
          ))}
        </section>
      )}

      {show('body') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Body</SectionTitle>
          {BODY.map((t) => (
            <TypeRow key={t.scale} {...t} />
          ))}
        </section>
      )}

      {show('caption') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Caption</SectionTitle>
          {CAPTIONS.map((t) => (
            <TypeRow key={t.scale} {...t} />
          ))}
        </section>
      )}
    </div>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────

const meta = {
  title: 'Tokens/Typography',
  component: TypographyPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    section: {
      control: 'select',
      options: ['all', 'heading', 'label', 'body', 'caption'],
    },
  },
} satisfies Meta<typeof TypographyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ───────────────────────────────────────────────────────────────

export const All: Story = {
  args: { section: 'all' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Typography Tokens')).toBeInTheDocument();
    await expect(canvas.getByText('Heading')).toBeInTheDocument();
    await expect(canvas.getByText('Label')).toBeInTheDocument();
  },
};

export const Heading: Story = {
  args: { section: 'heading' },
};

export const Labels: Story = {
  args: { section: 'label' },
};

export const Body: Story = {
  args: { section: 'body' },
};

export const Caption: Story = {
  args: { section: 'caption' },
};
