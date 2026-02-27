export interface VitestConfigOptions {
  /** Glob patterns for coverage inclusion (default: ['src/components/** /*.ts']) */
  coverageInclude?: string[];
}

/**
 * Creates shared Vitest test configuration for adesso forge packages.
 * Returns the `test` block — merge with your Vite config via `mergeConfig`.
 */
export function createVitestConfig(options: VitestConfigOptions = {}) {
  const { coverageInclude = ['src/components/**/*.ts'] } = options;

  return {
    environment: 'happy-dom' as const,
    include: ['src/**/*.test.ts'],
    globals: true,
    coverage: {
      provider: 'v8' as const,
      include: coverageInclude,
      exclude: ['**/*.stories.ts', '**/*.test.ts', '**/__tests__/**'],
    },
  };
}
