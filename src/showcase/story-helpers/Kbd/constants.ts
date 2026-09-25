// Story helper copied from origin/kbd:src/components/Kbd/constants.ts (KEY_SYMBOLS, SYMBOL_LABELS) — not exported by installed v0.0.35

/**
 * Key name → the glyph printed on the cap.
 * Lookup is case-insensitive; anything unlisted is rendered as typed.
 */
export const KEY_SYMBOLS: Record<string, string> = {
  command: "⌘",
  cmd: "⌘",
  option: "⌥",
  alt: "⌥",
  control: "⌃",
  ctrl: "⌃",
  shift: "⇧",
  enter: "↵",
  return: "⏎",
  backspace: "⌫",
  delete: "⌦",
  escape: "⎋",
  esc: "⎋",
  tab: "⇥",
  capslock: "⇪",
  "caps-lock": "⇪",
  left: "←",
  right: "→",
  up: "↑",
  down: "↓",
  space: "␣",
};

/**
 * Glyph → the words a screen reader should announce.
 * Reverse of {@link KEY_SYMBOLS}, plus the glyphs consumers type directly.
 */
export const SYMBOL_LABELS: Record<string, string> = {
  "⌘": "Command",
  "⌥": "Option",
  "⌃": "Control",
  "⇧": "Shift",
  "↵": "Enter",
  "⏎": "Return",
  "⌫": "Backspace",
  "⌦": "Delete",
  "⎋": "Escape",
  "⇥": "Tab",
  "⇪": "Caps Lock",
  "←": "Left Arrow",
  "→": "Right Arrow",
  "↑": "Up Arrow",
  "↓": "Down Arrow",
  "␣": "Space",
  "⎵": "Space",
};
