import { type UserConfig } from 'vite';
import { resolve } from 'node:path';

export interface BaseConfigOptions {
  /** Absolute path to the package root directory */
  root: string;
  /** Entry point relative to root (default: 'src/index.ts') */
  entry?: string;
  /** Additional external packages to exclude from bundle */
  external?: string[];
}

/**
 * Creates a shared Vite library build configuration for adesso forge packages.
 * Externalizes @awesome.me/*, @adesso-forge/*, and lit by default.
 */
export function createBaseConfig(options: BaseConfigOptions): UserConfig {
  const { root, entry = 'src/index.ts', external = [] } = options;

  return {
    root,
    build: {
      lib: {
        entry: resolve(root, entry),
        formats: ['es'],
      },
      outDir: 'dist',
      rollupOptions: {
        external: [/^@awesome\.me\//, /^@adesso-forge\//, /^lit/, ...external],
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
      },
      cssCodeSplit: true,
      target: 'es2022',
      minify: false,
    },
    resolve: {
      alias: {
        '@': resolve(root, 'src'),
      },
    },
  };
}
