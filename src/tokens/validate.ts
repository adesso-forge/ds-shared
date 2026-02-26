import { readFile } from 'node:fs/promises';

/** A parsed design token with its name and value */
export interface DesignToken {
  name: string;
  value: string;
}

/** Result of a token diff between two sets */
export interface TokenDiff {
  added: DesignToken[];
  removed: DesignToken[];
  changed: Array<{ name: string; oldValue: string; newValue: string }>;
  unchanged: DesignToken[];
}

/** Result of a token validation check */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Extracts CSS custom properties (design tokens) from a CSS string.
 * Only extracts properties prefixed with `--wa-`.
 */
export function extractTokens(css: string): DesignToken[] {
  const tokens: DesignToken[] = [];
  const regex = /(--wa-[\w-]+)\s*:\s*([^;]+)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(css)) !== null) {
    tokens.push({
      name: match[1],
      value: match[2].trim(),
    });
  }

  return tokens;
}

/**
 * Extracts CSS custom properties from a CSS file.
 */
export async function extractTokensFromFile(filePath: string): Promise<DesignToken[]> {
  const css = await readFile(filePath, 'utf-8');
  return extractTokens(css);
}

/**
 * Validates that override tokens reference valid WA token names.
 *
 * @param overrideTokens - Tokens from an override CSS file
 * @param baseTokens - Tokens from the base WA theme file
 */
export function validateOverrides(
  overrideTokens: DesignToken[],
  baseTokens: DesignToken[]
): ValidationResult {
  const baseNames = new Set(baseTokens.map((t) => t.name));
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const token of overrideTokens) {
    if (!baseNames.has(token.name)) {
      errors.push(
        `[adesso-forge] Unknown token "${token.name}" — not found in base WA theme. Check for typos.`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Computes the diff between two sets of tokens.
 */
export function diffTokens(
  baseTokens: DesignToken[],
  overrideTokens: DesignToken[]
): TokenDiff {
  const baseMap = new Map(baseTokens.map((t) => [t.name, t.value]));
  const overrideMap = new Map(overrideTokens.map((t) => [t.name, t.value]));

  const added: DesignToken[] = [];
  const removed: DesignToken[] = [];
  const changed: TokenDiff['changed'] = [];
  const unchanged: DesignToken[] = [];

  for (const [name, value] of overrideMap) {
    if (!baseMap.has(name)) {
      added.push({ name, value });
    } else if (baseMap.get(name) !== value) {
      changed.push({ name, oldValue: baseMap.get(name)!, newValue: value });
    } else {
      unchanged.push({ name, value });
    }
  }

  for (const [name, value] of baseMap) {
    if (!overrideMap.has(name)) {
      removed.push({ name, value });
    }
  }

  return { added, removed, changed, unchanged };
}
