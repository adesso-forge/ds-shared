/**
 * Shared Prettier configuration for adesso forge packages.
 */
export const prettierConfig = {
  singleQuote: true,
  trailingComma: "all" as const,
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  arrowParens: "always" as const,
  endOfLine: "lf" as const,
};
