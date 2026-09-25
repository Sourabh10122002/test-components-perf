// Story helper copied from origin/kbd:src/components/Kbd/utils.ts (resolveKeyName, getAccessibleLabel, getShortcutLabel) — not exported by installed v0.0.35
import { KEY_SYMBOLS, SYMBOL_LABELS } from "./constants";

/**
 * Resolve a key name to the glyph printed on the cap.
 * Unrecognised names are returned trimmed, so `keys="F5"` prints "F5".
 */
export const resolveKeyName = (keyName: string): string => {
  const trimmed = String(keyName).trim();
  return KEY_SYMBOLS[trimmed.toLowerCase()] ?? trimmed;
};

/**
 * The spoken form of a key's content, or `undefined` when the text already
 * reads correctly ("K", "Esc"). Only glyphs need translating — a screen reader
 * announces "⌘" as nothing useful on its own.
 */
export const getAccessibleLabel = (content: string): string | undefined => {
  if (!content) return undefined;

  let hasTranslation = false;
  const spoken = content
    .split("")
    .map((character) => {
      const label = SYMBOL_LABELS[character];
      if (!label) return character;
      hasTranslation = true;
      // Padded so a glyph next to text reads as two words: "⌘K" → "Command K".
      return ` ${label} `;
    })
    .join("")
    .trim()
    .replace(/\s+/g, " ");

  return hasTranslation ? spoken : undefined;
};


/**
 * Spoken form of a whole shortcut — `["command", "k"]` → "Command K".
 * Single characters are upper-cased so a screen reader says "K", not "kay".
 */
export const getShortcutLabel = (keys: string[]): string =>
  keys
    .map((key) => {
      const glyph = resolveKeyName(key);
      const spoken = getAccessibleLabel(glyph) ?? glyph;
      return spoken.length === 1 ? spoken.toUpperCase() : spoken;
    })
    .join(" ");
