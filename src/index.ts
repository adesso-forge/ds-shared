// @adesso-forge/ds-shared — public API

// Build utilities
export { createBaseConfig } from './build/vite.config.base.js';
export type { BaseConfigOptions } from './build/vite.config.base.js';

// Storybook config
export { createStorybookConfig } from './storybook/main.js';
export type { StorybookConfigOptions } from './storybook/main.js';
export { basePreview } from './storybook/preview.js';

// Component registration
export {
  registerPassThrough,
  registerPassThroughAsync,
  registerAll,
} from './components/register.js';

// WA component list
export {
  WA_FREE_COMPONENTS,
  WA_FREE_COMPONENT_NAMES,
} from './components/wa-components.js';
export type { WaComponentDefinition } from './components/wa-components.js';

// Token utilities
export {
  extractTokens,
  extractTokensFromFile,
  validateOverrides,
  diffTokens,
} from './tokens/validate.js';
export type {
  DesignToken,
  TokenDiff,
  ValidationResult,
} from './tokens/validate.js';

export { toScss, toTypeScript } from './tokens/export.js';
