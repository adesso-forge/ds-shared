import type { StorybookConfig } from '@storybook/web-components-vite';

export interface StorybookConfigOptions {
  /** Glob patterns for story files */
  stories?: string[];
  /** Additional addons */
  addons?: string[];
}

/**
 * Creates a shared Storybook configuration for adesso forge packages.
 * Includes viteFinal to resolve linked package dependencies from project root.
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
      '@storybook/addon-docs',
      '@storybook/addon-a11y',
      ...addons,
    ],
    async viteFinal(config) {
      const { mergeConfig } = await import('vite');
      const { join } = await import('node:path');

      // Resolve the project root (where Storybook is running)
      const root = config.root || process.cwd();
      const nm = join(root, 'node_modules');

      return mergeConfig(config, {
        resolve: {
          dedupe: [
            '@awesome.me/webawesome',
            'lit',
            '@adesso-forge/core-ds',
            '@adesso-forge/ds-shared',
          ],
          // Force bare-specifier imports from linked packages (ds-core, ds-shared)
          // to resolve from this project's node_modules (pnpm isolation fix)
          alias: [
            {
              find: /^@awesome\.me\/webawesome(\/.*)?$/,
              replacement: join(nm, '@awesome.me/webawesome') + '$1',
            },
            {
              find: /^lit(\/.*)?$/,
              replacement: join(nm, 'lit') + '$1',
            },
          ],
        },
      });
    },
  };
}
