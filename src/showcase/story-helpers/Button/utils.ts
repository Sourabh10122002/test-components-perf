// Story helper copied from origin/button:src/components/Button/utils.ts (getDynamicButtonSizeStyles) — not exported by installed v0.0.35
import type React from "react";
import {
  BASE_SIZES,
  DENSITY_ADJUSTMENT,
  H_PADDING_MATRIX,
  V_PADDING_MATRIX,
  HELP_TEXT_HEIGHTS,
} from "./constants";

export const getDynamicButtonSizeStyles = (
  size: "xs" | "sm" | "base" | "lg" | "xl",
  globalSpacing:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "compact"
    | "standard"
    | "spacious" = "md",
  customClass?: string,
  isIconOnly?: boolean,
  hasHelperText?: boolean,
): React.CSSProperties => {
  // Use help text heights when helper text is present
  const baseHeight = hasHelperText ? HELP_TEXT_HEIGHTS[size] : BASE_SIZES[size];

  const adjustment = DENSITY_ADJUSTMENT[globalSpacing] ?? 0;
  const height = baseHeight + adjustment;

  // Check if customClass contains height or padding overrides that affect height
  const hasHeightOverride =
    /(?:^|\s)(?:[a-zA-Z0-9-]+:)*!?(?:h-|min-h-|max-h-|p-|py-|pt-|pb-)(?:[^\s]+)(?:\s|$)/.test(
      customClass || "",
    );

  // Icon-only buttons handle their own padding via icon.ts
  if (isIconOnly) {
    const styles: React.CSSProperties = {};
    if (!hasHeightOverride) {
      styles.minHeight = `${height}px`;
      styles.minWidth = `${height}px`; // Force 1:1 ratio
      styles.height = "auto";
    }
    return styles;
  }

  // Resolve density key (matching Chip's compact/standard/spacious pattern)
  const densityKey =
    globalSpacing === "xs" ||
    globalSpacing === "sm" ||
    globalSpacing === "compact"
      ? "compact"
      : globalSpacing === "lg" ||
          globalSpacing === "xl" ||
          globalSpacing === "spacious"
        ? "spacious"
        : "standard";

  // Helper to extract numeric pixel value from Tailwind class (e.g. "px-2.5" -> "10px")
  // Matches the Chip component's getDynamicChipSizeStyles getValue helper
  const getValue = (cls: string | undefined, fallback: string): string => {
    if (!cls) return fallback;
    // Handle arbitrary values: px-[4px]
    if (cls.includes("-[") && cls.includes("]")) {
      return cls.replace(/^.*-\[/, "").replace("]", "");
    }
    // Handle standard spacing classes: px-1, py-2.5, etc.
    const match = cls.match(/-([0-9.]+)$/);
    if (match) {
      const val = parseFloat(match[1]);
      if (!isNaN(val)) return `${val * 4}px`;
    }
    return fallback;
  };

  // Check if customClass contains horizontal or vertical padding overrides separately
  // Robustly handle word boundaries and important (!) modifier
  const hasHPadOverride =
    /(?:^|\s)(?:[a-zA-Z0-9-]+:)*!?(?:p-|px-|pl-|pr-|ps-|pe-)(?:[^\s]+)(?:\s|$)/.test(
      customClass || "",
    );
  const hasVPadOverride =
    /(?:^|\s)(?:[a-zA-Z0-9-]+:)*!?(?:p-|py-|pt-|pb-)(?:[^\s]+)(?:\s|$)/.test(
      customClass || "",
    );

  const styles: React.CSSProperties = {};

  // Apply horizontal padding unless overridden by custom class
  if (!hasHPadOverride) {
    const hPadValue = getValue(H_PADDING_MATRIX[size]?.[densityKey], "8px");
    styles.paddingLeft = hPadValue;
    styles.paddingRight = hPadValue;
  }

  // Apply vertical padding unless overridden by custom class
  if (!hasVPadOverride) {
    const vPadValue = getValue(V_PADDING_MATRIX[size]?.[densityKey], "4px");
    styles.paddingTop = vPadValue;
    styles.paddingBottom = vPadValue;
  }

  // Apply height unless overridden by custom class
  if (!hasHeightOverride) {
    styles.minHeight = `${height}px`;
    styles.height = "auto";
  }

  return styles;
};
