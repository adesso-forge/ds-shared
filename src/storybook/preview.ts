interface Preview {
  parameters?: Record<string, unknown>;
}

/**
 * Shared Storybook preview configuration for adesso forge packages.
 */
export const basePreview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Light', value: '#FFFFFF' },
        { name: 'Dark', value: '#1A1A1A' },
        { name: 'Neutral', value: '#F5F5F5' },
      ],
      default: 'Light',
    },
    docs: {
      source: {
        format: 'html',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
};
