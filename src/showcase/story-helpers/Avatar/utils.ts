// Copied from origin/avatar:src/components/Avatar/utils.ts (stacking helpers the Showcase story imports; not exported by @inventive-ui/components/Avatar)
import type { AvatarSize } from "@inventive-ui/components/Avatar";

// Z-index classes for stacking
export const Z_INDEX_CLASSES = ["z-10", "z-20", "z-30", "z-33"] as const;

type StackingMarginMap = Record<AvatarSize, Record<string, string>>;

/**
 * Generate theme-aware stacking margins based on global spacing and avatar size
 * Larger avatars have MORE spacing (less negative margin = more visible space)
 *
 * @param globalSpacing - The global spacing theme setting (xs, sm, md, lg)
 * @returns Mapping of spacing values for different avatar sizes and layouts
 */
export const generateStackingMargins = (
  globalSpacing: string,
): StackingMarginMap => {
  const spacingMap: Record<string, StackingMarginMap> = {
    compact: {
      // compact -> tightest overlap (~56%)
      xs: { "left-stacked": "me-[-10px]", "right-stacked": "ms-[-10px]" },
      sm: { "left-stacked": "me-[-12px]", "right-stacked": "ms-[-12px]" },
      base: { "left-stacked": "me-[-14px]", "right-stacked": "ms-[-14px]" },
      lg: { "left-stacked": "me-[-16px]", "right-stacked": "ms-[-16px]" },
      xl: { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      "2xl": { "left-stacked": "me-[-20px]", "right-stacked": "ms-[-20px]" },
      "3xl": { "left-stacked": "me-[-24px]", "right-stacked": "ms-[-24px]" },
      "4xl": { "left-stacked": "me-[-28px]", "right-stacked": "ms-[-28px]" },
      "5xl": { "left-stacked": "me-[-32px]", "right-stacked": "ms-[-32px]" },
      "6xl": { "left-stacked": "me-[-38px]", "right-stacked": "ms-[-38px]" },
      "7xl": { "left-stacked": "me-[-40px]", "right-stacked": "ms-[-40px]" },
      "8xl": { "left-stacked": "me-[-54px]", "right-stacked": "ms-[-54px]" },
      "9xl": { "left-stacked": "me-[-68px]", "right-stacked": "ms-[-68px]" },
      "10xl": { "left-stacked": "me-[-72px]", "right-stacked": "ms-[-72px]" },
    },
    standard: {
      // standard -> balanced overlap (50%)
      xs: { "left-stacked": "me-[-8px]", "right-stacked": "ms-[-8px]" },
      sm: { "left-stacked": "me-[-10px]", "right-stacked": "ms-[-10px]" },
      base: { "left-stacked": "me-[-12px]", "right-stacked": "ms-[-12px]" },
      lg: { "left-stacked": "me-[-14px]", "right-stacked": "ms-[-14px]" },
      xl: { "left-stacked": "me-[-16px]", "right-stacked": "ms-[-16px]" },
      "2xl": { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      "3xl": { "left-stacked": "me-[-20px]", "right-stacked": "ms-[-20px]" },
      "4xl": { "left-stacked": "me-[-24px]", "right-stacked": "ms-[-24px]" },
      "5xl": { "left-stacked": "me-[-28px]", "right-stacked": "ms-[-28px]" },
      "6xl": { "left-stacked": "me-[-32px]", "right-stacked": "ms-[-32px]" },
      "7xl": { "left-stacked": "me-[-36px]", "right-stacked": "ms-[-36px]" },
      "8xl": { "left-stacked": "me-[-48px]", "right-stacked": "ms-[-48px]" },
      "9xl": { "left-stacked": "me-[-60px]", "right-stacked": "ms-[-60px]" },
      "10xl": { "left-stacked": "me-[-64px]", "right-stacked": "ms-[-64px]" },
    },
    spacious: {
      // spacious -> loosest overlap (~44%)
      xs: { "left-stacked": "me-[-7px]", "right-stacked": "ms-[-7px]" },
      sm: { "left-stacked": "me-[-9px]", "right-stacked": "ms-[-9px]" },
      base: { "left-stacked": "me-[-10px]", "right-stacked": "ms-[-10px]" },
      lg: { "left-stacked": "me-[-12px]", "right-stacked": "ms-[-12px]" },
      xl: { "left-stacked": "me-[-14px]", "right-stacked": "ms-[-14px]" },
      "2xl": { "left-stacked": "me-[-16px]", "right-stacked": "ms-[-16px]" },
      "3xl": { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      "4xl": { "left-stacked": "me-[-22px]", "right-stacked": "ms-[-22px]" },
      "5xl": { "left-stacked": "me-[-26px]", "right-stacked": "ms-[-26px]" },
      "6xl": { "left-stacked": "me-[-30px]", "right-stacked": "ms-[-30px]" },
      "7xl": { "left-stacked": "me-[-32px]", "right-stacked": "ms-[-32px]" },
      "8xl": { "left-stacked": "me-[-42px]", "right-stacked": "ms-[-42px]" },
      "9xl": { "left-stacked": "me-[-52px]", "right-stacked": "ms-[-52px]" },
      "10xl": { "left-stacked": "me-[-56px]", "right-stacked": "ms-[-56px]" },
    },
    xs: {
      // globalSpacing = xs -> tightest (~65%)
      xs: { "left-stacked": "me-[-12px]", "right-stacked": "ms-[-12px]" },
      sm: { "left-stacked": "me-[-14px]", "right-stacked": "ms-[-14px]" },
      base: { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      lg: { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      xl: { "left-stacked": "me-[-22px]", "right-stacked": "ms-[-22px]" },
      "2xl": { "left-stacked": "me-[-24px]", "right-stacked": "ms-[-24px]" },
      "3xl": { "left-stacked": "me-[-26px]", "right-stacked": "ms-[-26px]" },
      "4xl": { "left-stacked": "me-[-30px]", "right-stacked": "ms-[-30px]" },
      "5xl": { "left-stacked": "me-[-36px]", "right-stacked": "ms-[-36px]" },
      "6xl": { "left-stacked": "me-[-40px]", "right-stacked": "ms-[-40px]" },
      "7xl": { "left-stacked": "me-[-44px]", "right-stacked": "ms-[-44px]" },
      "8xl": { "left-stacked": "me-[-58px]", "right-stacked": "ms-[-58px]" },
      "9xl": { "left-stacked": "me-[-72px]", "right-stacked": "ms-[-72px]" },
      "10xl": { "left-stacked": "me-[-76px]", "right-stacked": "ms-[-76px]" },
    },
    sm: {
      // globalSpacing = sm (~58%)
      xs: { "left-stacked": "me-[-10px]", "right-stacked": "ms-[-10px]" },
      sm: { "left-stacked": "me-[-12px]", "right-stacked": "ms-[-12px]" },
      base: { "left-stacked": "me-[-16px]", "right-stacked": "ms-[-16px]" },
      lg: { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      xl: { "left-stacked": "me-[-20px]", "right-stacked": "ms-[-20px]" },
      "2xl": { "left-stacked": "me-[-22px]", "right-stacked": "ms-[-22px]" },
      "3xl": { "left-stacked": "me-[-24px]", "right-stacked": "ms-[-24px]" },
      "4xl": { "left-stacked": "me-[-28px]", "right-stacked": "ms-[-28px]" },
      "5xl": { "left-stacked": "me-[-34px]", "right-stacked": "ms-[-34px]" },
      "6xl": { "left-stacked": "me-[-38px]", "right-stacked": "ms-[-38px]" },
      "7xl": { "left-stacked": "me-[-40px]", "right-stacked": "ms-[-40px]" },
      "8xl": { "left-stacked": "me-[-54px]", "right-stacked": "ms-[-54px]" },
      "9xl": { "left-stacked": "me-[-68px]", "right-stacked": "ms-[-68px]" },
      "10xl": { "left-stacked": "me-[-72px]", "right-stacked": "ms-[-72px]" },
    },
    md: {
      // globalSpacing = md -> balanced (50%)
      xs: { "left-stacked": "me-[-8px]", "right-stacked": "ms-[-8px]" },
      sm: { "left-stacked": "me-[-10px]", "right-stacked": "ms-[-10px]" },
      base: { "left-stacked": "me-[-12px]", "right-stacked": "ms-[-12px]" },
      lg: { "left-stacked": "me-[-14px]", "right-stacked": "ms-[-14px]" },
      xl: { "left-stacked": "me-[-16px]", "right-stacked": "ms-[-16px]" },
      "2xl": { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      "3xl": { "left-stacked": "me-[-20px]", "right-stacked": "ms-[-20px]" },
      "4xl": { "left-stacked": "me-[-24px]", "right-stacked": "ms-[-24px]" },
      "5xl": { "left-stacked": "me-[-28px]", "right-stacked": "ms-[-28px]" },
      "6xl": { "left-stacked": "me-[-32px]", "right-stacked": "ms-[-32px]" },
      "7xl": { "left-stacked": "me-[-36px]", "right-stacked": "ms-[-36px]" },
      "8xl": { "left-stacked": "me-[-48px]", "right-stacked": "ms-[-48px]" },
      "9xl": { "left-stacked": "me-[-60px]", "right-stacked": "ms-[-60px]" },
      "10xl": { "left-stacked": "me-[-64px]", "right-stacked": "ms-[-64px]" },
    },
    lg: {
      // globalSpacing = lg -> loosest (~44%)
      xs: { "left-stacked": "me-[-7px]", "right-stacked": "ms-[-7px]" },
      sm: { "left-stacked": "me-[-9px]", "right-stacked": "ms-[-9px]" },
      base: { "left-stacked": "me-[-10px]", "right-stacked": "ms-[-10px]" },
      lg: { "left-stacked": "me-[-12px]", "right-stacked": "ms-[-12px]" },
      xl: { "left-stacked": "me-[-14px]", "right-stacked": "ms-[-14px]" },
      "2xl": { "left-stacked": "me-[-16px]", "right-stacked": "ms-[-16px]" },
      "3xl": { "left-stacked": "me-[-18px]", "right-stacked": "ms-[-18px]" },
      "4xl": { "left-stacked": "me-[-22px]", "right-stacked": "ms-[-22px]" },
      "5xl": { "left-stacked": "me-[-26px]", "right-stacked": "ms-[-26px]" },
      "6xl": { "left-stacked": "me-[-30px]", "right-stacked": "ms-[-30px]" },
      "7xl": { "left-stacked": "me-[-32px]", "right-stacked": "ms-[-32px]" },
      "8xl": { "left-stacked": "me-[-42px]", "right-stacked": "ms-[-42px]" },
      "9xl": { "left-stacked": "me-[-52px]", "right-stacked": "ms-[-52px]" },
      "10xl": { "left-stacked": "me-[-56px]", "right-stacked": "ms-[-56px]" },
    },
  };

  return spacingMap[globalSpacing] || spacingMap.md;
};

/**
 * Get stacking margin based on avatar size and layout
 *
 * @param stackingMargins - Pre-generated stacking margins from generateStackingMargins
 * @param isStacked - Whether the avatars are in a stacked layout
 * @param avatarSize - The size of the avatar (xs, sm, base, lg, xl, 2xl, 3xl, 4xl)
 * @param layoutType - The layout direction (first-on-top or last-on-top)
 * @param isFirst - Whether this is the first avatar in the group
 * @returns CSS class string for margin
 */
export const getStackingMargin = (
  stackingMargins: ReturnType<typeof generateStackingMargins>,
  isStacked: boolean,
  avatarSize: AvatarSize,
  layoutType: string,
  isFirst: boolean,
): string => {
  if (!isStacked || isFirst) return "";
  const normalizedLayoutType =
    layoutType === "last-on-top" || layoutType === "first-on-top"
      ? "right-stacked"
      : layoutType;
  return (
    stackingMargins[avatarSize]?.[normalizedLayoutType] ||
    stackingMargins.base[normalizedLayoutType] ||
    ""
  );
};

/**
 * Get z-index class for stacked avatars
 * Ensures proper layering in avatar groups
 *
 * @param index - The index of the avatar in the group
 * @returns CSS z-index class string
 */
export const getZIndexClass = (index: number): string => {
  return Z_INDEX_CLASSES[Math.min(index, Z_INDEX_CLASSES.length - 1)];
};
