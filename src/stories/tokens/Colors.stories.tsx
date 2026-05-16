import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const FIGMA_URL =
  'https://www.figma.com/design/WljNxoKAjQQklok7ulnZ5K/-MTOU--%EC%8B%A4%EC%8A%B5%EC%98%88%EC%A0%9C--Copy-?node-id=58-445&m=dev';

// ── 데이터 ────────────────────────────────────────────────────────────────

interface ColorToken {
  token: string;
  label: string;
  description?: string;
  dark?: boolean; // 스워치 배경이 어두울 때 (투명 색상 확인용)
}

const PRIMITIVES: ColorToken[] = [
  { token: '--primitive-white', label: 'white', description: '#ffffff' },
  { token: '--primitive-black', label: 'black', description: '#000000' },
  { token: '--primitive-gray-100', label: 'gray-100', description: '#f4f4f4' },
  { token: '--primitive-gray-200', label: 'gray-200', description: '#c6c6c6' },
  { token: '--primitive-gray-400', label: 'gray-400', description: '#939393' },
  { token: '--primitive-gray-600', label: 'gray-600', description: '#5d5d5d' },
  { token: '--primitive-gray-900', label: 'gray-900', description: '#474747' },
  { token: '--primitive-brand-600', label: 'brand-600', description: '#ff4800' },
  {
    token: '--primitive-gray-600-a64',
    label: 'gray-600 / 64%',
    description: '#5d5d5da3',
    dark: true,
  },
  {
    token: '--primitive-gray-600-a08',
    label: 'gray-600 / 8%',
    description: '#5d5d5d14',
    dark: true,
  },
  {
    token: '--primitive-gray-600-a16',
    label: 'gray-600 / 16%',
    description: '#5d5d5d29',
    dark: true,
  },
];

const TEXT_COLORS: ColorToken[] = [
  { token: '--color-text-primary', label: 'text/primary', description: 'primary text' },
  { token: '--color-text-secondary', label: 'text/secondary', description: 'secondary text' },
  {
    token: '--color-text-tertiary',
    label: 'text/tertiary',
    description: '3차 텍스트 (64%)',
    dark: true,
  },
  { token: '--color-text-disabled', label: 'text/disabled', description: 'disabled text' },
  {
    token: '--color-text-on-dark',
    label: 'text/on-dark',
    description: '어두운 배경 위',
    dark: true,
  },
  { token: '--color-text-brand', label: 'text/brand', description: 'brand text' },
];

const BG_COLORS: ColorToken[] = [
  { token: '--color-bg-base', label: 'bg/base', description: '기본 배경' },
  { token: '--color-bg-surface', label: 'bg/surface', description: '카드·서피스' },
  { token: '--color-bg-tag', label: 'bg/tag', description: '태그 배경 (8%)', dark: true },
];

const BORDER_COLORS: ColorToken[] = [
  { token: '--color-border-default', label: 'border/default', description: '기본 테두리' },
  {
    token: '--color-divider-default',
    label: 'divider/default',
    description: '구분선 (16%)',
    dark: true,
  },
];

const ICON_COLORS: ColorToken[] = [
  { token: '--color-icon-primary', label: 'icon/primary', description: '주요 아이콘' },
  { token: '--color-icon-secondary', label: 'icon/secondary', description: '보조 아이콘' },
  { token: '--color-icon-disabled', label: 'icon/disabled', description: '비활성 아이콘' },
];

const BRAND_COLORS: ColorToken[] = [
  { token: '--color-brand-primary', label: 'brand/primary', description: '브랜드 주요색' },
  { token: '--color-status-sale', label: 'status/sale', description: '세일·할인' },
];

// ── 서브 컴포넌트 ─────────────────────────────────────────────────────────

function Swatch({ token, label, description, dark }: ColorToken) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        marginBottom: 'var(--spacing-3)',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-md)',
          backgroundColor: `var(${token})`,
          border: '1px solid var(--color-border-default)',
          background: dark
            ? `var(${token}), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 12px 12px`
            : `var(${token})`,
          flexShrink: 0,
        }}
      />
      <div>
        <code
          style={{
            display: 'block',
            fontSize: 'var(--font-size-label-xs)',
            fontWeight: 'var(--font-weight-label-xs-bold)',
            color: 'var(--color-text-primary)',
            fontFamily: 'monospace',
          }}
        >
          var({token})
        </code>
        {description && (
          <span
            style={{
              fontSize: 'var(--font-size-caption-xs)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {description}
          </span>
        )}
      </div>
      <span
        style={{
          marginLeft: 'auto',
          fontSize: 'var(--font-size-caption-xs)',
          color: 'var(--color-text-tertiary)',
          fontFamily: 'var(--font-family-sans)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Section({ title, tokens }: { title: string; tokens: ColorToken[] }) {
  return (
    <section style={{ marginBottom: 'var(--spacing-8)' }}>
      <h2
        style={{
          fontSize: 'var(--font-size-label-md)',
          fontWeight: 'var(--font-weight-label-md-bold)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-4)',
          paddingBottom: 'var(--spacing-3)',
          borderBottom: '1px solid var(--color-border-default)',
        }}
      >
        {title}
      </h2>
      {tokens.map((t) => (
        <Swatch key={t.token} {...t} />
      ))}
    </section>
  );
}

// ── 페이지 컴포넌트 ───────────────────────────────────────────────────────

interface ColorsPageProps {
  section?: 'all' | 'primitives' | 'semantic';
}

function ColorsPage({ section = 'all' }: ColorsPageProps) {
  const showPrimitives = section === 'all' || section === 'primitives';
  const showSemantic = section === 'all' || section === 'semantic';

  return (
    <div
      style={{
        padding: 'var(--spacing-8)',
        fontFamily: 'var(--font-family-sans)',
        maxWidth: 560,
        backgroundColor: 'var(--color-bg-base)',
      }}
    >
      <h1
        style={{
          fontSize: 'var(--font-size-heading-md)',
          fontWeight: 'var(--font-weight-heading-md)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-8)',
        }}
      >
        Color Tokens
      </h1>

      {showPrimitives && <Section title="Primitives" tokens={PRIMITIVES} />}
      {showSemantic && (
        <>
          <Section title="Text" tokens={TEXT_COLORS} />
          <Section title="Background" tokens={BG_COLORS} />
          <Section title="Border & Divider" tokens={BORDER_COLORS} />
          <Section title="Icon" tokens={ICON_COLORS} />
          <Section title="Brand & Status" tokens={BRAND_COLORS} />
        </>
      )}
    </div>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────

const meta = {
  title: 'Tokens/Colors',
  component: ColorsPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    section: {
      control: 'select',
      options: ['all', 'primitives', 'semantic'],
    },
  },
} satisfies Meta<typeof ColorsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ───────────────────────────────────────────────────────────────

export const All: Story = {
  args: { section: 'all' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Color Tokens')).toBeInTheDocument();
    await expect(canvas.getByText('Primitives')).toBeInTheDocument();
    await expect(canvas.getByText('Text')).toBeInTheDocument();
  },
};

export const Primitives: Story = {
  args: { section: 'primitives' },
};

export const Semantic: Story = {
  args: { section: 'semantic' },
};
