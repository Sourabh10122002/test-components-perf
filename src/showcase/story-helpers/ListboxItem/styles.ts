// Story helper copied from origin/listboxitem:src/components/ListboxItem/styles/index.ts (getFinalHeight + its height maps; not exported by the installed subpath)
export const BASE_HEIGHT_MAP: Record<string, number> = {
  xs: 24,
  sm: 32,
  base: 40,
  lg: 48,
  xl: 56,
};

// Base heights when helper text is present (label lh + helper lh + padding)
export const HELPER_TEXT_BASE_HEIGHT_MAP: Record<string, number> = {
  xs: 44,
  sm: 52,
  base: 56,
  lg: 68,
  xl: 72,
};


export const getFinalHeight = (
  size: string,
  spacing: "compact" | "standard" | "spacious",
  hasHelperText?: boolean,
) => {
  const baseHeightMap = hasHelperText
    ? HELPER_TEXT_BASE_HEIGHT_MAP
    : BASE_HEIGHT_MAP;
  const baseHeight =
    baseHeightMap[size] ??
    (hasHelperText ? HELPER_TEXT_BASE_HEIGHT_MAP.base : BASE_HEIGHT_MAP.base);
  let finalHeight = baseHeight;
  if (spacing === "compact") finalHeight = baseHeight - 4;
  if (spacing === "spacious") finalHeight = baseHeight + 4;
  return finalHeight;
};

