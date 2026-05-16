import type { Meta, StoryObj } from '@storybook/react';

const colorTokens = [
  { name: '--color-bg-primary', label: 'bg/primary' },
  { name: '--color-bg-secondary', label: 'bg/secondary' },
  { name: '--color-text-primary', label: 'text/primary' },
  { name: '--color-text-secondary', label: 'text/secondary' },
  { name: '--color-border-default', label: 'border/default' },
  { name: '--color-brand-primary', label: 'brand/primary' },
  { name: '--color-status-success', label: 'status/success' },
  { name: '--color-status-error', label: 'status/error' },
];

const spacingTokens = [
  { name: '--spacing-xs', label: 'xs (4px)' },
  { name: '--spacing-sm', label: 'sm (8px)' },
  { name: '--spacing-md', label: 'md (12px)' },
  { name: '--spacing-lg', label: 'lg (16px)' },
  { name: '--spacing-xl', label: 'xl (24px)' },
  { name: '--spacing-2xl', label: '2xl (32px)' },
];

function ColorSwatch({ name, label }: { name: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-sm)',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-md)',
          backgroundColor: `var(${name})`,
          border: '1px solid var(--color-border-default)',
          flexShrink: 0,
        }}
      />
      <div>
        <div
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'monospace',
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

function SpacingRow({ name, label }: { name: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-sm)',
      }}
    >
      <div
        style={{
          height: 20,
          width: `var(${name})`,
          backgroundColor: 'var(--color-brand-primary)',
          borderRadius: 2,
          minWidth: 4,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          fontFamily: 'monospace',
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>{label}</div>
    </div>
  );
}

function TokensPage() {
  return (
    <div
      style={{ padding: 'var(--spacing-xl)', fontFamily: 'var(--font-family-sans)', maxWidth: 600 }}
    >
      <h1
        style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-xl)',
        }}
      >
        Design Tokens
      </h1>

      <h2
        style={{
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-md)',
        }}
      >
        Colors
      </h2>
      {colorTokens.map((t) => (
        <ColorSwatch key={t.name} {...t} />
      ))}

      <h2
        style={{
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-text-primary)',
          marginTop: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-md)',
        }}
      >
        Spacing
      </h2>
      {spacingTokens.map((t) => (
        <SpacingRow key={t.name} {...t} />
      ))}
    </div>
  );
}

const meta = {
  title: 'Tokens/Design Tokens',
  component: TokensPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TokensPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
