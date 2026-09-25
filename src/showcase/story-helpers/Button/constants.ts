// Story helper copied from origin/button:src/components/Button/constants.ts (only what the Showcase story needs) — not exported by installed v0.0.35

// Base sizes for default density (globalSpacing = "md")
export const BASE_SIZES = {
  xs: 24, // fontSize: 12px
  sm: 32, // fontSize: 14px
  base: 40, // fontSize: 16px
  lg: 48, // fontSize: 18px
  xl: 56, // fontSize: 18px
} as const;

// Heights for buttons with help text (from design specs)
// These are 16px taller than basic buttons to accommodate secondary text
export const HELP_TEXT_HEIGHTS = {
  xs: 40,
  sm: 48,
  base: 56,
  lg: 64,
  xl: 72,
} as const;

export const DENSITY_ADJUSTMENT: Record<string, number> = {
  compact: -4,
  standard: 0,
  spacious: 4,
  xs: -4,
  sm: -2,
  md: 0,
  lg: 4,
  xl: 8,
} as const;


// Horizontal padding matrix based on size and density mode (Tailwind classes)
// Matches the Chip component's H_PADDING_MATRIX pattern
export const H_PADDING_MATRIX: Record<string, Record<string, string>> = {
  xs: { compact: "px-1", standard: "px-1.5", spacious: "px-2" },
  sm: { compact: "px-1.5", standard: "px-2", spacious: "px-2.5" },
  base: { compact: "px-2", standard: "px-2.5", spacious: "px-3" },
  lg: { compact: "px-3", standard: "px-3.5", spacious: "px-4" },
  xl: { compact: "px-3.5", standard: "px-4", spacious: "px-4.5" },
};

// Vertical padding matrix based on size and density mode (Tailwind classes)
export const V_PADDING_MATRIX: Record<string, Record<string, string>> = {
  xs: { compact: "py-0.5", standard: "py-1", spacious: "py-1.5" },
  sm: { compact: "py-1", standard: "py-1.5", spacious: "py-2" },
  base: { compact: "py-1.5", standard: "py-2", spacious: "py-2.5" },
  lg: { compact: "py-2", standard: "py-2.5", spacious: "py-3" },
  xl: { compact: "py-2.5", standard: "py-3", spacious: "py-3.5" },
};


export type SlotSizeMap = Record<string, "xs" | "sm" | "base" | "lg" | "xl">;
export const SLOT_SIZE_MAP: SlotSizeMap = {
  xs: "xs",
  sm: "xs",
  base: "sm",
  lg: "base",
  xl: "base",
} as const;
