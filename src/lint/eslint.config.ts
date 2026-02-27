import tseslint, { type ConfigArray } from "typescript-eslint";
import litPlugin from "eslint-plugin-lit";
import wcPlugin from "eslint-plugin-wc";
import eslintConfigPrettier from "eslint-config-prettier";

export interface EslintConfigOptions {
  /** Additional files/globs to ignore */
  ignores?: string[];
}

/**
 * Creates a shared ESLint flat config for adesso forge packages.
 * Includes TypeScript, Lit, Web Component, and Prettier rules.
 */
export function createEslintConfig(
  options: EslintConfigOptions = {},
): ConfigArray {
  const { ignores = [] } = options;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- third-party plugin configs lack exact types
  const pluginCast = (cfg: unknown) => cfg as any;

  return tseslint.config(
    {
      ignores: [
        "dist/",
        "node_modules/",
        "**/*.stories.ts",
        "**/*.config.*",
        ...ignores,
      ],
    },
    ...tseslint.configs.recommended,
    pluginCast(litPlugin.configs["flat/recommended"]),
    pluginCast(wcPlugin.configs["flat/recommended"]),
    pluginCast(eslintConfigPrettier),
    {
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  );
}
