// Story helpers copied from origin/tag:src/components/Tag/utils.ts + constants.ts
// (not exported by @inventive-ui/components/Tag). Only what the Tag Showcase story uses.
import type React from "react";

export const BASE_SIZES = {
  xs: 24,
  sm: 32,
  base: 40,
  lg: 48,
  xl: 56,
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

export const H_PADDING_MATRIX: Record<string, Record<string, string>> = {
  xs: { compact: "px-1", standard: "px-1.5", spacious: "px-2" },
  sm: { compact: "px-1.5", standard: "px-2", spacious: "px-2.5" },
  base: { compact: "px-2", standard: "px-2.5", spacious: "px-3" },
  lg: { compact: "px-2.5", standard: "px-3", spacious: "px-3.5" },
  xl: { compact: "px-3", standard: "px-3.5", spacious: "px-4" },
};

export const V_PADDING_MATRIX: Record<string, Record<string, string>> = {
  xs: { compact: "py-0.5", standard: "py-1", spacious: "py-1.5" },
  sm: { compact: "py-1", standard: "py-1.5", spacious: "py-2" },
  base: { compact: "py-1.5", standard: "py-2", spacious: "py-2.5" },
  lg: { compact: "py-2", standard: "py-2.5", spacious: "py-3" },
  xl: { compact: "py-2.5", standard: "py-3", spacious: "py-3.5" },
};
export const HELPER_TEXT_BASE_SIZES = {
  xs: 40,
  sm: 48,
  base: 56,
  lg: 64,
  xl: 72,
} as const;

export const HELPER_TEXT_ICON_SIZES = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 28,
} as const;

export const HELPER_TEXT_H_PADDING_MATRIX: Record<
  string,
  Record<string, string>
> = {
  xs: { compact: "px-1.5", standard: "px-2", spacious: "px-2.5" },
  sm: { compact: "px-1.5", standard: "px-2", spacious: "px-2.5" },
  base: { compact: "px-2", standard: "px-2.5", spacious: "px-3" },
  lg: { compact: "px-2", standard: "px-2.5", spacious: "px-3" },
  xl: { compact: "px-2.5", standard: "px-3", spacious: "px-3.5" },
};

export const HELPER_TEXT_V_PADDING_MATRIX: Record<
  string,
  Record<string, string>
> = {
  xs: { compact: "py-1", standard: "py-1.5", spacious: "py-2" },
  sm: { compact: "py-1", standard: "py-1.5", spacious: "py-2" },
  base: { compact: "py-1.5", standard: "py-2", spacious: "py-2.5" },
  lg: { compact: "py-1.5", standard: "py-2", spacious: "py-2.5" },
  xl: { compact: "py-2", standard: "py-2.5", spacious: "py-3" },
};

export const HELPER_TEXT_GAP_MATRIX: Record<string, Record<string, string>> = {
  xs: { compact: "gap-1", standard: "gap-1.5", spacious: "gap-2" },
  sm: { compact: "gap-1", standard: "gap-1.5", spacious: "gap-2" },
  base: { compact: "gap-1.5", standard: "gap-2", spacious: "gap-2.5" },
  lg: { compact: "gap-1.5", standard: "gap-2", spacious: "gap-2.5" },
  xl: { compact: "gap-2", standard: "gap-2.5", spacious: "gap-3" },
};


export const getTagHeight = (
  size: "xs" | "sm" | "base" | "lg" | "xl",
  globalSpacing:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "compact"
    | "standard"
    | "spacious" = "base",
  hasHelperText: boolean = false,
): number => {
  const baseSize = hasHelperText
    ? HELPER_TEXT_BASE_SIZES[size] || HELPER_TEXT_BASE_SIZES.base
    : BASE_SIZES[size] || BASE_SIZES.base;
  const adjustment = DENSITY_ADJUSTMENT[globalSpacing] || 0;
  return baseSize + adjustment;
};
export const getDynamicTagSizeStyles = (
  size: "xs" | "sm" | "base" | "lg" | "xl",
  globalSpacing:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "compact"
    | "standard"
    | "spacious" = "base",
  hasHelperText: boolean = false,
  customClass?: string,
): React.CSSProperties => {
  // Resolve density key
  let densityKey = globalSpacing as string;
  if (!["compact", "standard", "spacious"].includes(densityKey)) {
    densityKey = "standard"; // Default legacy/unknown to standard
  }

  // Helper to extract numeric pixel value from matrix class (e.g. "py-[4px]" -> "4px")
  const getValue = (cls: string | undefined, fallback: string) => {
    let valString = fallback;

    if (cls) {
      // Handle arbitrary values: px-[4px]
      if (cls.includes("-[") && cls.includes("]")) {
        valString = cls.replace(/^.*-\[/, "").replace("]", "");
      }
      // Handle standard spacing classes: px-1, py-2.5, etc.
      else {
        const match = cls.match(/-([0-9.]+)$/);
        if (match) {
          const val = parseFloat(match[1]);
          if (!isNaN(val)) {
            valString = `${val * 4}px`;
          }
        }
      }
    }

    return valString;
  };

  const vPadValue = getValue(
    hasHelperText
      ? HELPER_TEXT_V_PADDING_MATRIX[size]?.[densityKey]
      : V_PADDING_MATRIX[size]?.[densityKey],
    "4px",
  );
  const hPadValue = getValue(
    hasHelperText
      ? HELPER_TEXT_H_PADDING_MATRIX[size]?.[densityKey]
      : H_PADDING_MATRIX[size]?.[densityKey],
    "8px",
  );

  // Calculate min-height based on size and normalized densityKey
  // getTagHeight handles normalization and alignment with BASE_SIZES + DENSITY_ADJUSTMENT
  const minHeightValue = getTagHeight(
    size,
    densityKey as
      | "xs"
      | "sm"
      | "base"
      | "lg"
      | "xl"
      | "compact"
      | "standard"
      | "spacious",
    hasHelperText,
  );

  // Detect padding overrides in customClass so inline styles don't beat the user's classes.
  // Horizontal: physical (pl-, pr-, px-) and logical (ps-, pe-) and shorthand (p-).
  // Vertical:   physical (pt-, pb-, py-) and shorthand (p-).
  // Height:     h-, min-h-, max-h-, plus anything that affects height (p-, py-, pt-, pb-).
  const hasHPadOverride =
    /(?:^|\s)(?:[a-zA-Z0-9-]+:)*!?(?:p-|px-|pl-|pr-|ps-|pe-)(?:[^\s]+)(?:\s|$)/.test(
      customClass || "",
    );
  const hasVPadOverride =
    /(?:^|\s)(?:[a-zA-Z0-9-]+:)*!?(?:p-|py-|pt-|pb-)(?:[^\s]+)(?:\s|$)/.test(
      customClass || "",
    );
  const hasHeightOverride =
    /(?:^|\s)(?:[a-zA-Z0-9-]+:)*!?(?:h-|min-h-|max-h-|p-|py-|pt-|pb-)(?:[^\s]+)(?:\s|$)/.test(
      customClass || "",
    );

  const styles: React.CSSProperties = {};
  if (!hasVPadOverride) {
    styles.paddingTop = vPadValue;
    styles.paddingBottom = vPadValue;
  }
  if (!hasHPadOverride) {
    styles.paddingLeft = hPadValue;
    styles.paddingRight = hPadValue;
  }
  if (!hasHeightOverride) {
    styles.minHeight = `${minHeightValue}px`;
    styles.height = "auto";
  }
  return styles;
};
export const getBorderRadiusValue = (
  globalRadius: string,
  // size argument is kept for compatibility but ignored for calculation as per new spec
  _size: "xs" | "sm" | "base" | "lg" | "xl",
) => {
  if (globalRadius === "none") return 0;
  if (globalRadius === "full") return 9999;

  // Fixed mapping based on globalRadius setting (sm/md/lg -> 2/4/8)
  const radiusMap: Record<string, number> = {
    sm: 2,
    md: 4,
    lg: 8,
  };

  return radiusMap[globalRadius] || 4; // Default to 4px (md)
};
const LEGACY_GAP_MAP: Record<string, string> = {
  compact: "gap-0.5",
  standard: "gap-1",
  spacious: "gap-1.5",
};

/**
 * Tag spacing mapping - Updated to use correct gap classes aligned with design tokens
 */
const GAP_MATRIX: Record<string, Record<string, string>> = {
  xs: { compact: "gap-0.5", standard: "gap-1", spacious: "gap-1.5" },
  sm: { compact: "gap-1", standard: "gap-1.5", spacious: "gap-2" },
  base: { compact: "gap-1.5", standard: "gap-2", spacious: "gap-2.5" },
  lg: { compact: "gap-2.5", standard: "gap-3", spacious: "gap-3.5" },
  xl: { compact: "gap-3", standard: "gap-3.5", spacious: "gap-4" },
};

export function mapSpacingToGap(
  spacing: string,
  size: "xs" | "sm" | "base" | "lg" | "xl" = "base",
  hasHelperText: boolean = false,
): string {
  // Check if spacing is one of the matrix keys
  if (
    spacing === "compact" ||
    spacing === "standard" ||
    spacing === "spacious"
  ) {
    const matrix = hasHelperText ? HELPER_TEXT_GAP_MATRIX : GAP_MATRIX;
    return matrix[size]?.[spacing] ?? matrix[size]?.standard ?? "gap-1";
  }
  // Legacy/other spacing support
  return LEGACY_GAP_MAP[spacing] ?? "gap-2";
}

