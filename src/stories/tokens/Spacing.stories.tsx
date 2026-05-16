import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const FIGMA_URL =
  'https://www.figma.com/design/WljNxoKAjQQklok7ulnZ5K/-MTOU--%EC%8B%A4%EC%8A%B5%EC%98%88%EC%A0%9C--Copy-?node-id=58-445&m=dev';

// ── 데이터 ────────────────────────────────────────────────────────────────

interface SpacingToken {
  token: string;
  label: string;
  value: string;
}

interface RadiusToken {
  token: string;
  label: string;
  value: string;
}

const NUMERIC: SpacingToken[] = [
  { token: '--spacing-1', label: 'spacing/1', value: '2px' },
  { token: '--spacing-2', label: 'spacing/2', value: '4px' },
  { token: '--spacing-3', label: 'spacing/3', value: '6px' },
  { token: '--spacing-4', label: 'spacing/4', value: '8px' },
  { token: '--spacing-5', label: 'spacing/5', value: '10px' },
  { token: '--spacing-6', label: 'spacing/6', value: '12px' },
  { token: '--spacing-7', label: 'spacing/7', value: '14px' },
  { token: '--spacing-8', label: 'spacing/8', value: '20px' },
];

const COMPONENT: SpacingToken[] = [
  { token: '--spacing-component-xs', label: 'component/xs', value: '2px' },
  { token: '--spacing-component-sm', label: 'component/sm', value: '4px' },
  { token: '--spacing-component-md', label: 'component/md', value: '8px' },
  { token: '--spacing-component-lg', label: 'component/lg', value: '12px' },
  { token: '--spacing-component-xl', label: 'component/xl', value: '20px' },
];

const LAYOUT: SpacingToken[] = [
  { token: '--spacing-layout-sm', label: 'layout/sm', value: '14px' },
  { token: '--spacing-layout-md', label: 'layout/md', value: '20px' },
];

const RADIUS: RadiusToken[] = [
  { token: '--radius-xs', label: 'radius/xs', value: '2px' },
  { token: '--radius-sm', label: 'radius/sm', value: '3px' },
  { token: '--radius-md', label: 'radius/md', value: '4px' },
  { token: '--radius-lg', label: 'radius/lg', value: '8px' },
  { token: '--radius-full', label: 'radius/full', value: '9999px' },
];

// ── 서브 컴포넌트 ─────────────────────────────────────────────────────────

function SpacingRow({ token, label, value }: SpacingToken) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        marginBottom: 'var(--spacing-3)',
      }}
    >
      {/* 시각적 바 — 최소 4px, 최대 200px 스케일 */}
      <div style={{ width: 200, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            height: 20,
            width: `var(${token})`,
            minWidth: 4,
            backgroundColor: 'var(--color-brand-primary)',
            borderRadius: 'var(--radius-xs)',
          }}
        />
      </div>
      <code
        style={{
          fontSize: 'var(--font-size-label-xs)',
          fontWeight: 'var(--font-weight-label-xs-bold)',
          color: 'var(--color-text-primary)',
          fontFamily: 'monospace',
          whiteSpace: 'nowrap',
        }}
      >
        var({token})
      </code>
      <span
        style={{
          marginLeft: 'auto',
          fontSize: 'var(--font-size-caption-xs)',
          color: 'var(--color-text-secondary)',
          whiteSpace: 'nowrap',
        }}
      >
        {label} · {value}
      </span>
    </div>
  );
}

function RadiusRow({ token, label, value }: RadiusToken) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        marginBottom: 'var(--spacing-4)',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          flexShrink: 0,
          backgroundColor: 'var(--color-bg-surface)',
          border: '2px solid var(--color-brand-primary)',
          borderRadius: `var(${token})`,
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
        <span
          style={{
            fontSize: 'var(--font-size-caption-xs)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {label} · {value}
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
        marginBottom: 'var(--spacing-4)',
        paddingBottom: 'var(--spacing-3)',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      {children}
    </h2>
  );
}

// ── 페이지 컴포넌트 ───────────────────────────────────────────────────────

interface SpacingPageProps {
  section?: 'all' | 'numeric' | 'component' | 'layout' | 'radius';
}

function SpacingPage({ section = 'all' }: SpacingPageProps) {
  const show = (s: string) => section === 'all' || section === s;

  return (
    <div
      style={{
        padding: 'var(--spacing-8)',
        fontFamily: 'var(--font-family-sans)',
        maxWidth: 640,
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
        Spacing Tokens
      </h1>

      {show('numeric') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Numeric Scale</SectionTitle>
          {NUMERIC.map((t) => (
            <SpacingRow key={t.token} {...t} />
          ))}
        </section>
      )}

      {show('component') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Component Spacing</SectionTitle>
          {COMPONENT.map((t) => (
            <SpacingRow key={t.token} {...t} />
          ))}
        </section>
      )}

      {show('layout') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Layout Spacing</SectionTitle>
          {LAYOUT.map((t) => (
            <SpacingRow key={t.token} {...t} />
          ))}
        </section>
      )}

      {show('radius') && (
        <section style={{ marginBottom: 'var(--spacing-8)' }}>
          <SectionTitle>Radius</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)' }}>
            {RADIUS.map((t) => (
              <RadiusRow key={t.token} {...t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────

const meta = {
  title: 'Tokens/Spacing',
  component: SpacingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    section: {
      control: 'select',
      options: ['all', 'numeric', 'component', 'layout', 'radius'],
    },
  },
} satisfies Meta<typeof SpacingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Stories ───────────────────────────────────────────────────────────────

export const All: Story = {
  args: { section: 'all' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Spacing Tokens')).toBeInTheDocument();
    await expect(canvas.getByText('Numeric Scale')).toBeInTheDocument();
    await expect(canvas.getByText('Radius')).toBeInTheDocument();
  },
};

export const NumericScale: Story = {
  args: { section: 'numeric' },
};

export const ComponentSpacing: Story = {
  args: { section: 'component' },
};

export const LayoutSpacing: Story = {
  args: { section: 'layout' },
};

export const Radius: Story = {
  args: { section: 'radius' },
};
