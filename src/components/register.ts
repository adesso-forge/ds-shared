// Test Pipeline

/**
 * Component registration utilities for adesso forge.
 *
 * These helpers register Web Awesome components under custom prefixes
 * at each layer of the design system inheritance chain.
 */

/**
 * Synchronously registers a Web Awesome component under a new tag name.
 * The source component must already be defined in the custom elements registry.
 *
 * @param sourceTag - The tag name of the already-registered component (e.g., 'wa-button')
 * @param targetTag - The new tag name to register (e.g., 'forge-button')
 */
export function registerPassThrough(sourceTag: string, targetTag: string): void {
  const Source = customElements.get(sourceTag);
  if (!Source) {
    console.warn(
      `[adesso-forge] Cannot register <${targetTag}>: source <${sourceTag}> is not defined. ` +
        `Make sure the source component is imported before calling registerPassThrough().`,
    );
    return;
  }

  if (customElements.get(targetTag)) {
    return; // Already registered — skip silently
  }

  customElements.define(
    targetTag,
    class extends (Source as unknown as typeof HTMLElement) {} as unknown as CustomElementConstructor,
  );
}

/**
 * Asynchronously registers a Web Awesome component under a new tag name.
 * Waits for the source component to be defined before registering.
 *
 * @param sourceTag - The tag name of the source component (e.g., 'wa-button')
 * @param targetTag - The new tag name to register (e.g., 'forge-button')
 */
export async function registerPassThroughAsync(
  sourceTag: string,
  targetTag: string,
): Promise<void> {
  if (customElements.get(targetTag)) {
    return; // Already registered
  }

  await customElements.whenDefined(sourceTag);
  const Source = customElements.get(sourceTag)!;
  customElements.define(
    targetTag,
    class extends (Source as unknown as typeof HTMLElement) {} as unknown as CustomElementConstructor,
  );
}

/**
 * Registers all listed components under a new prefix.
 * Each component's source tag is assumed to follow the pattern `{sourcePrefix}-{name}`.
 *
 * @param sourcePrefix - The prefix of source components (e.g., 'wa' or 'forge')
 * @param targetPrefix - The prefix for newly registered components (e.g., 'forge' or 'alpha')
 * @param names - Array of component base names (e.g., ['button', 'card', 'input'])
 */
export function registerAll(sourcePrefix: string, targetPrefix: string, names: string[]): void {
  for (const name of names) {
    registerPassThrough(`${sourcePrefix}-${name}`, `${targetPrefix}-${name}`);
  }
}
