import type { StorybookConfig } from '@storybook/web-components-vite';

export interface StorybookConfigOptions {
  /** Glob patterns for story files */
  stories?: string[];
  /** Additional addons */
  addons?: string[];
}

/**
 * Creates a shared Storybook configuration for adesso forge packages.
 */
export function createStorybookConfig(
  options: StorybookConfigOptions = {}
): StorybookConfig {
  const {
    stories = ['../src/**/*.stories.ts'],
    addons = [],
  } = options;

  return {
    stories,
    framework: '@storybook/web-components-vite',
    addons: [
      '@storybook/addon-essentials',
      '@storybook/addon-a11y',
      ...addons,
    ],
    docs: {
      autodocs: true,
    },
  };
}
