// Showcase ported from origin/button:src/components/Button/stories/Button.stories.tsx
import React from "react";
import { cn, fontMap as fontFamily, useStates } from "@inventive-ui/framework";
import { SlotRenderer } from "@inventive-ui/framework/slots";
import { Button } from "@inventive-ui/components/Button";
import { getDynamicButtonSizeStyles } from "../story-helpers/Button/utils";
import type { ButtonProps } from "@inventive-ui/components/Button";
import type { ButtonMenuState, BadgeSlot } from "../story-helpers/Button/types";
import { SLOT_SIZE_MAP } from "../story-helpers/Button/constants";

import type { LogoSlot, ColorLogoSlot, EmojiSlot } from "../story-helpers/Button/types";

import { LazySection } from "../storybook";
import { getStorybookAccentColorKeys } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_HEADER_WRAP_CLASS,
  SHOWCASE_ROW_CLASS,
  SHOWCASE_SCROLL_X_CLASS,
  SHOWCASE_SUBTITLE_CLASS,
  SHOWCASE_TITLE_CLASS,
} from "../storybook";

// --- STORY STYLING CONSTANTS ---
const STORY_SECTION_CLASS = "space-y-4";
const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1";
const STORY_SECTION_DESC_CLASS =
  "text-sm text-neutral-600 dark:text-neutral-400";
const STORY_CARD_CLASS =
  "flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800";
const STORY_GRID_CLASS = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
const STORY_FLEX_WRAP_CLASS = SHOWCASE_ROW_CLASS;
//const STORY_LABEL_HINT_CLASS ="text-xs text-neutral-500 font-medium mb-1";
const STORY_DARK_BG_CLASS =
  "flex flex-col items-center gap-2 p-4 bg-neutral-900 rounded-lg";
const STORY_FULL_WIDTH_WRAPPER =
  "w-full bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg";
//const STORY_FLEX_GAP_4 ="flex gap-4";
const STORY_FLEX_COL_GAP_2 = "flex flex-col items-left gap-2";
const STORY_MENU_ANCHOR_CLASS = "inline-flex";

// Radius presets mirror the global theme steps; each row renders every button
// type so multi-box types (menu, split) can be checked against the default.
const RADIUS_PRESETS = [
  { label: "None", style: { borderRadius: "0px" } },
  { label: "Sm", style: { borderRadius: "4px" } },
  { label: "Md", style: { borderRadius: "8px" } },
  { label: "Lg", style: { borderRadius: "12px" } },
  { label: "Full", style: { borderRadius: "9999px" } },
] as const;

const RADIUS_TYPE_ROWS = [
  { type: "default" as const, label: "Default" },
  { type: "menu" as const, label: "Menu" },
  { type: "split" as const, label: "Split" },
] as const;

const STORY_TABLE_CLASS =
  "border-collapse border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm";
const STORY_THEAD_CLASS = "";
const STORY_TH_CLASS =
  "border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-start text-sm font-semibold text-neutral-700 dark:text-neutral-300";
const STORY_TH_CENTER_CLASS =
  "border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300";
const STORY_TD_LABEL_CLASS =
  "border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300";
const STORY_TD_CONTENT_CLASS =
  "border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center";
const STORY_CENTER_FLEX_CLASS = "flex items-center justify-center";
const STORY_H3_CLASS =
  "text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4";
/**
 * Surface behind `appearance="onColor"` demos. Tracks the toolbar Theme Color so
 * the backdrop matches the button's palette instead of being pinned to brand.
 * `white`/`black` have no numeric shades, so they use their single-value class.
 */
const getOnColorWrapperClass = (color: string) =>
  cn(
    color === "white" || color === "black" ? `bg-${color}` : `bg-${color}-500`,
    "p-4 rounded-lg",
  );
const STORY_TABLE_WIDE_CLASS =
  "min-w-full border-collapse border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm rounded-lg overflow-hidden";
const STORY_TABLE_WRAPPER_OVERFLOW = SHOWCASE_SCROLL_X_CLASS;
const STORY_ADAPTIVE_CONTAINER =
  "dark bg-neutral-900 p-8 rounded-lg flex flex-wrap items-center gap-12 border border-neutral-800 shadow-inner w-full max-w-full";
const STORY_ADAPTIVE_COL = "flex flex-col items-center gap-3";
const STORY_SPAN_LABEL =
  "text-neutral-400 text-xs font-medium uppercase tracking-wider";
const STORY_GROUP_TITLE_CLASS =
  "text-lg font-semibold text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2";
const STORY_CAPTION_CLASS = "text-2.5 text-neutral-400 font-mono";
const STORY_CAPTION_UPPER_CLASS =
  "text-2.5 text-neutral-400 font-mono uppercase";
const STORY_SIZE_COL_CLASS = "flex flex-col items-center gap-1.5";
const STORY_MT_8 = "mt-8";

const STYLE_HOVER = {
  filter: "brightness(1.1)",
  transform: "translateY(-1px)",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
};
const STYLE_PRESSED = {
  filter: "brightness(0.9)",
  transform: "translateY(0px)",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
};

/**
 * Preview of the *global* focused state (`states.focused` in iui.config.ts).
 *
 * The real ring reaches the button as `focus-visible:ring-*` classes from
 * `useStates`, so it paints nothing on a swatch that never takes focus. This
 * repaints the same resolved values — width, offset, offset color, and the
 * light/dark shade of the component's own palette — as the box-shadow that
 * `ring-*` compiles to, so the showcase follows the config and the toolbar
 * color instead of carrying a ring of its own.
 */
const focusRingColor = (token: string, fallback: string) =>
  token === "white" || token === "black" || token === "transparent"
    ? token
    : `var(--iui-color-${token}, ${fallback})`;

const FocusStateButton = ({
  color,
  mode,
  children,
}: {
  color: string;
  mode: string;
  children: React.ReactNode;
}) => {
  const { focused } = useStates({ componentColor: color });
  const { shades, style } = focused.config;

  const isDark = mode === "dark";
  const width = parseFloat(String(style.width)) || 2;
  const offset = parseFloat(String(style.offset)) || 2;
  const ring = focusRingColor(
    `${color}-${isDark ? shades.dark : shades.light}`,
    "currentColor",
  );
  const gap = focusRingColor(
    String((isDark ? style.offsetColor?.dark : style.offsetColor?.light) ?? ""),
    "transparent",
  );
  const focusRingStyle = {
    boxShadow: `0 0 0 ${offset}px ${gap}, 0 0 0 ${offset + width}px ${ring}`,
  };

  return (
    <Button
      cTag="button"
      size="base"
      variant="solid"
      appearance="strong"
      color={color}
      style={focusRingStyle}
    >
      {children}
    </Button>
  );
};

const STYLE_HYPER_GRADIENT = {
  background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
  border: "none",
  borderRadius: "9999px",
  padding: "0 32px",
  color: "white",
  fontWeight: "bold",
  boxShadow: "0 10px 20px rgba(121, 40, 202, 0.3)",
  transition: "all 0.3s ease",
};

const STYLE_NEO_BRUTALIST = {
  backgroundColor: "#2DD4BF",
  color: "black",
  fontWeight: "900",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  border: "3px solid black",
  borderRadius: "0",
  boxShadow: "6px 6px 0px 0px black",
  transform: "translate(-2px, -2px)",
};

const STYLE_3D_PUSH = {
  backgroundColor: "#EF4444",
  color: "white",
  fontWeight: "bold",
  borderRadius: "16px",
  border: "none",
  boxShadow: "0 6px 0 #991B1B",
  transform: "translateY(0)",
  transition: "none",
};

const STYLE_CYBERPUNK = {
  backgroundColor: "transparent",
  color: "#0ff",
  fontFamily: "monospace",
  border: "1px solid #0ff",
  borderRadius: "4px",
  boxShadow: "0 0 10px #0ff, inset 0 0 5px #0ff",
  textShadow: "0 0 5px #0ff",
};

// Menu item shape for the popup slots below. Declared locally rather than
// imported from the Menu component: Button models menu data loosely
// (`MenuItemType`, `MenuSlot`) and takes no direct dependency on Menu.
type StoryMenuItem = { label: string; value: string };

// Showcase data — module scope avoids reallocation on every render
const TOGGLE_MENU_ITEMS: StoryMenuItem[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];
const SHOWCASE_SIZES: NonNullable<ButtonProps["size"]>[] = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
];
const SHOWCASE_VARIANTS: NonNullable<ButtonProps["variant"]>[] = [
  "solid",
  "solid-outline",
  "outline",
  "ghost",
];
const SHOWCASE_APPEARANCES: NonNullable<ButtonProps["appearance"]>[] = [
  "strong",
  "soft",
  "dualTone",
  "onColor",
];

// `badges` corners, in the order they render around the button
const SHOWCASE_BADGE_CORNERS = [
  "topStart",
  "topEnd",
  "bottomStart",
  "bottomEnd",
] as const;

// Corner badge used by the position/variant demos; the button resolves it
// through the slot renderer and supplies the size.
const SHOWCASE_CORNER_DOT_SLOT: BadgeSlot = {
  type: "badge-dot",
  variant: "solid",
  appearance: "strong",
  color: "danger",
} as any;

// Slot objects accepted by every corner; each omits `size` so the button
// derives it from its own size.
const SHOWCASE_BADGE_SLOT_TYPES: { caption: string; slot: BadgeSlot }[] = [
  {
    caption: 'type: "badge-dot"',
    slot: {
      type: "badge-dot",
      variant: "solid",
      appearance: "strong",
      color: "danger",
    } as any,
  },
  {
    caption: 'type: "badge-status-indicator"',
    slot: {
      type: "badge-status-indicator",
      variant: "solid",
      appearance: "strong",
      color: "success",
    } as any,
  },
  {
    caption: 'type: "badge-counter"',
    slot: {
      type: "badge-counter",
      counter: 8,
      variant: "solid",
      appearance: "strong",
      color: "danger",
    } as any,
  },
  {
    caption: 'type: "badge-label"',
    slot: {
      type: "badge-label",
      label: "NEW",
      variant: "solid",
      appearance: "strong",
      color: "danger",
    } as any,
  },
];

// Dot and counter badges derive xs on xs/sm buttons, which reads too small;
// the size showcase gives them the base button's badge size there instead.
const SHOWCASE_BASE_BADGE_TYPES = new Set(["badge-dot", "badge-counter"]);
const SHOWCASE_BASE_BADGE_BUTTON_SIZES = new Set(["xs", "sm"]);
const showcaseBadgeSlotForSize = (
  slot: BadgeSlot,
  size: NonNullable<ButtonProps["size"]>,
): BadgeSlot =>
  SHOWCASE_BASE_BADGE_TYPES.has((slot as { type?: string }).type ?? "") &&
  SHOWCASE_BASE_BADGE_BUTTON_SIZES.has(size)
    ? ({ ...slot, size: SLOT_SIZE_MAP.base } as any)
    : slot;
const SIZE_DENSITY_STYLES: Record<string, React.CSSProperties> =
  Object.fromEntries(
    SHOWCASE_SIZES.flatMap((size) =>
      (["compact", "standard", "spacious"] as const).map((d) => [
        `${size}-${d}`,
        getDynamicButtonSizeStyles(size, d),
      ]),
    ),
  );

// ============================================================================
// SHOWCASE / OVERVIEW STORY
// ============================================================================

// Helper component for Type Variants with arrow key navigation

/**
 * Split button whose label and icon follow the toggle, not just its color,
 * optionally with a working dropdown on the secondary.
 *
 * `selected` is held here because the caption has to swap with it, which makes
 * the button controlled — and `useButtonState` treats any defined `selected` as
 * controlled, so the `onToggle` updater is what keeps it live. A bare
 * `selected={false}` would pin it and swallow every click.
 *
 * `Menu` paints only when it receives BOTH `open` and a resolvable `anchorEl`:
 * with no anchor it computes no coordinates and stays `visibility: hidden`, and
 * with no `open` it returns `null` outright. The `{ isOpen, close }` render prop
 * hands back neither, so the trigger is captured through a callback ref into
 * state — that re-renders once the node exists, which a plain `useRef` would
 * not do in time.
 */
const MuteSplitToggle = ({
  color,
  items,
}: {
  color: ButtonProps["color"];
  items?: StoryMenuItem[];
}) => {
  const [muted, setMuted] = React.useState(false);
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);
  const label = muted ? "Unmute" : "Mute";
  const micIcon = { type: "icon" as const, name: muted ? "mic_off" : "mic" };

  const renderMenu = ({ isOpen, close }: ButtonMenuState) =>
    isOpen && (
      <SlotRenderer
        slot={{
          type: "menu",
          open: true,
          anchorEl: anchor,
          items: items ?? [],
          onClose: close,
          placement: "bottom-start",
          size: "base",
        }}
      />
    );
  const popup = items ? renderMenu : undefined;

  return (
    <div ref={setAnchor} className={STORY_MENU_ANCHOR_CLASS}>
      <Button.Split
        size="base"
        variant="solid"
        appearance="soft"
        color="neutral"
        toggle={true}
        selected={muted}
        onToggle={setMuted}
        selectStyle={{ color, appearance: "soft" }}
        prefix={micIcon}
        label={label}
      >
        {popup}
      </Button.Split>
    </div>
  );
};

/**
 * Comprehensive showcase displaying all button variants, sizes, appearances,
 * types, colors, and states in a single visual reference page.
 */

export default function ButtonShowcase() {
  const globals: Record<string, any> = {};
  const theme = getShowcaseTheme(globals);

  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      {/* Header */}
      <div className={SHOWCASE_HEADER_WRAP_CLASS}>
        <h1 className={SHOWCASE_TITLE_CLASS}>Button Component Showcase</h1>
        <p className={SHOWCASE_SUBTITLE_CLASS}>
          Comprehensive visual reference of all button variants, sizes, and
          states
        </p>
      </div>
      {/* Type Variants */}
      <section className={STORY_SECTION_CLASS}>
        <div>
          <h2 className={STORY_SECTION_TITLE_CLASS}>Type Variants</h2>
          <p className={STORY_SECTION_DESC_CLASS}>
            Different button types for specific interactions
          </p>
        </div>
        <div className={STORY_FLEX_WRAP_CLASS}>
          <div className={STORY_FLEX_COL_GAP_2}>
            <Button
              size="base"
              cTag="button"
              variant="solid"
              appearance="strong"
              color={theme.color}
              type="default"
            >
              Default
            </Button>
          </div>
          <div className={STORY_FLEX_COL_GAP_2}>
            <Button.Menu
              size="base"
              variant="solid"
              appearance="strong"
              color={theme.color}
            >
              Menu
            </Button.Menu>
          </div>
          <div className={STORY_FLEX_COL_GAP_2}>
            <Button.Split
              size="base"
              variant="solid"
              appearance="strong"
              color={theme.color}
            >
              Split
            </Button.Split>
          </div>
        </div>
      </section>

      {/* Popup Usage */}
      <section className={STORY_SECTION_CLASS}>
        <div>
          <h2 className={STORY_SECTION_TITLE_CLASS}>Popup Usage</h2>
          <p className={STORY_SECTION_DESC_CLASS}>
            Button.Menu and Button.Split are pure trigger buttons. Pass a
            render prop as children to supply any popup — Menu, Listbox, or
            any custom component.
          </p>
        </div>
        <div className={STORY_FLEX_WRAP_CLASS}>
          <div className={STORY_FLEX_COL_GAP_2}>
            <span className={STORY_SPAN_LABEL}>Button.Menu</span>
            <Button.Menu
              size="base"
              variant="solid"
              appearance="strong"
              color={theme.color}
              label="Actions"
            >
              {({ isOpen, close }: ButtonMenuState) =>
                isOpen && (
                  <SlotRenderer
                    slot={
                      {
                        type: "menu",
                        data: [
                          { label: "Edit", value: "edit" },
                          { label: "Duplicate", value: "duplicate" },
                          { label: "Delete", value: "delete" },
                        ],
                        onSelect: close,
                        size: "base",
                      } as any
                    }
                  />
                )
              }
            </Button.Menu>
          </div>
          <div className={STORY_FLEX_COL_GAP_2}>
            <span className={STORY_SPAN_LABEL}>Button.Split</span>
            <Button.Split
              size="base"
              variant="solid"
              appearance="strong"
              color={theme.color}
              label="Save"
            >
              {({ isOpen, close }: ButtonMenuState) =>
                isOpen && (
                  <SlotRenderer
                    slot={
                      {
                        type: "menu",
                        data: [
                          { label: "Save as Draft", value: "draft" },
                          { label: "Save as Template", value: "template" },
                        ],
                        onSelect: close,
                        size: "md",
                      } as any
                    }
                  />
                )
              }
            </Button.Split>
          </div>
        </div>
      </section>

      <LazySection>
        {/* Color Palette */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Color Palette</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Comprehensive display of all available semantic and base color
              palettes in the system.
            </p>
          </div>

          <div className="space-y-10">
            {/* Semantic Roles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                Semantic Roles
              </h3>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {[
                  "brand",
                  "neutral",
                  "success",
                  "warning",
                  "danger",
                  "info",
                ].map((color) => (
                  <div key={color} className={STORY_FLEX_COL_GAP_2}>
                    <Button
                      cTag="button"
                      size="base"
                      variant="solid"
                      appearance="strong"
                      color={color as any}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Colors — sourced from iui.config.ts → theme.colors.accent */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                Accent Colors
              </h3>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {getStorybookAccentColorKeys().map((color: string) => (
                  <div key={color} className={STORY_FLEX_COL_GAP_2}>
                    <Button
                      cTag="button"
                      size="base"
                      variant="solid"
                      appearance="strong"
                      color={color as any}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Global Radius Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Radius Variants</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Different corner radius presets from the global theme. Menu and
              Split render more than one box, so the preset shapes the outer
              corners of the pair and leaves the junction edge flat.
            </p>
          </div>
          {RADIUS_TYPE_ROWS.map((row) => (
            <div key={row.type} className={STORY_FLEX_COL_GAP_2}>
              <span className={STORY_SPAN_LABEL}>{row.label}</span>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {RADIUS_PRESETS.map((preset) => (
                  <div key={preset.label} className={STORY_CARD_CLASS}>
                    <Button
                      cTag="button"
                      type={row.type}
                      size="base"
                      variant="solid"
                      appearance="strong"
                      color={theme.color}
                      style={preset.style}
                    >
                      {preset.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </LazySection>

      <LazySection>
        {/* Global Font Family Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              Font Family Variants
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Different font families from the global theme
            </p>
          </div>
          <div className={STORY_FLEX_WRAP_CLASS}>
            {Object.entries(fontFamily)
              .filter(([name]) => ["inter", "arial", "mono"].includes(name))
              .map(([name]) => {
                const fontClass = `font-${name}`;
                return (
                  <div key={name} className={STORY_CARD_CLASS}>
                    <Button
                      size="base"
                      variant="solid"
                      appearance="strong"
                      color={theme.color}
                      className={fontClass}
                    >
                      <span className={fontClass}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </span>
                    </Button>
                  </div>
                );
              })}
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Size × Density Matrix */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>
              Size × Density Matrix
            </h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Visual comparison of all size and density (spacing) combinations
            </p>
          </div>
          <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
            <table className={STORY_TABLE_WIDE_CLASS}>
              <thead>
                <tr>
                  <th className={STORY_TH_CLASS}>Size</th>
                  <th className={STORY_TH_CENTER_CLASS}>Compact</th>
                  <th className={STORY_TH_CENTER_CLASS}>Normal</th>
                  <th className={STORY_TH_CENTER_CLASS}>Spacious</th>
                </tr>
              </thead>
              <tbody>
                {SHOWCASE_SIZES.map((size) => {
                  return (
                    <tr key={size}>
                      <td className={STORY_TD_LABEL_CLASS}>
                        {size.toUpperCase()}
                      </td>
                      {/* Compact */}
                      <td className={STORY_TD_CONTENT_CLASS}>
                        <div className={STORY_CENTER_FLEX_CLASS}>
                          <Button
                            cTag="button"
                            size={size}
                            variant="solid"
                            appearance="strong"
                            color={theme.color}
                            prefix={{
                              type: "icon",
                              name: "@placeholder",
                            }}
                            style={SIZE_DENSITY_STYLES[`${size}-compact`]}
                          >
                            Button
                          </Button>
                        </div>
                      </td>
                      {/* Standard */}
                      <td className={STORY_TD_CONTENT_CLASS}>
                        <div className={STORY_CENTER_FLEX_CLASS}>
                          <Button
                            cTag="button"
                            size={size}
                            variant="solid"
                            appearance="strong"
                            color={theme.color}
                            prefix={{
                              type: "icon",
                              name: "@placeholder",
                            }}
                            style={SIZE_DENSITY_STYLES[`${size}-standard`]}
                          >
                            Button
                          </Button>
                        </div>
                      </td>
                      {/* Spacious */}
                      <td className={STORY_TD_CONTENT_CLASS}>
                        <div className={STORY_CENTER_FLEX_CLASS}>
                          <Button
                            cTag="button"
                            size={size}
                            variant="solid"
                            appearance="strong"
                            color={theme.color}
                            prefix={{
                              type: "icon",
                              name: "@placeholder",
                            }}
                            style={SIZE_DENSITY_STYLES[`${size}-spacious`]}
                          >
                            Button
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Style Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Style Variants</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Different visual styles for various use cases
            </p>
          </div>
          <div className={STORY_FLEX_WRAP_CLASS}>
            {SHOWCASE_VARIANTS.map((variant) => {
              const label =
                variant === "solid-outline"
                  ? "Solid-Outline"
                  : variant.charAt(0).toUpperCase() + variant.slice(1);
              return (
                <div key={variant} className={STORY_FLEX_COL_GAP_2}>
                  <Button
                    cTag="button"
                    size="base"
                    variant={variant}
                    appearance="strong"
                    color={theme.color}
                  >
                    {label}
                  </Button>
                </div>
              );
            })}
          </div>

          <div className={STORY_MT_8}>
            <h3 className={STORY_H3_CLASS}>Variant x Hover Matrix</h3>
            <p className={STORY_SECTION_DESC_CLASS}>
              Explore how different style variants interact with hover
              behaviors
            </p>
            <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr className={STORY_THEAD_CLASS}>
                    <th className={STORY_TH_CLASS}>Style / Interaction</th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Filled
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Outlined
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "180px" }}
                    >
                      Solid-Outline
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Ghost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SHOWCASE_VARIANTS.map((variant) => {
                    const label =
                      variant === "solid-outline"
                        ? "Solid-Outline"
                        : variant.charAt(0).toUpperCase() + variant.slice(1);

                    return (
                      <tr key={variant}>
                        <td className={STORY_TD_LABEL_CLASS}>{label}</td>
                        <td className={STORY_TD_CONTENT_CLASS}>
                          <div className={STORY_CENTER_FLEX_CLASS}>
                            <Button
                              cTag="button"
                              size="base"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              hoverStyle={{ variant: "solid" }}
                            >
                              Button
                            </Button>
                          </div>
                        </td>
                        <td className={STORY_TD_CONTENT_CLASS}>
                          <div className={STORY_CENTER_FLEX_CLASS}>
                            <Button
                              cTag="button"
                              size="base"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              hoverStyle={{ variant: "outline" }}
                            >
                              Button
                            </Button>
                          </div>
                        </td>
                        <td className={STORY_TD_CONTENT_CLASS}>
                          <div className={STORY_CENTER_FLEX_CLASS}>
                            <Button
                              cTag="button"
                              size="base"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              hoverStyle={{ variant: "solid-outline" }}
                            >
                              Button
                            </Button>
                          </div>
                        </td>
                        <td className={STORY_TD_CONTENT_CLASS}>
                          <div className={STORY_CENTER_FLEX_CLASS}>
                            <Button
                              cTag="button"
                              size="base"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              hoverStyle={{ variant: "ghost" }}
                            >
                              Button
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* Menu: Variant x Hover Matrix */}
          <div className={STORY_MT_8}>
            <h3 className={STORY_H3_CLASS}>Menu: Variant x Hover Matrix</h3>
            <p className={STORY_SECTION_DESC_CLASS}>
              Explore how menu buttons interact with hover behaviors across
              all variants. Hover over the buttons to see the effects.
            </p>
            <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr className={STORY_THEAD_CLASS}>
                    <th className={STORY_TH_CLASS}>
                      Variant / Hover Variant
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Solid
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Outline
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "180px" }}
                    >
                      Solid-Outline
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Ghost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SHOWCASE_VARIANTS.map((variant) => {
                    const label =
                      variant === "solid-outline"
                        ? "Solid-Outline"
                        : variant.charAt(0).toUpperCase() + variant.slice(1);

                    return (
                      <tr key={variant}>
                        <td className={STORY_TD_LABEL_CLASS}>{label}</td>
                        {(
                          [
                            "solid",
                            "outline",
                            "solid-outline",
                            "ghost",
                          ] as const
                        ).map((hoverV) => (
                          <td key={hoverV} className={STORY_TD_CONTENT_CLASS}>
                            <div className={STORY_CENTER_FLEX_CLASS}>
                              <Button.Menu
                                size="base"
                                variant={variant}
                                appearance="strong"
                                color={theme.color}
                                hoverStyle={{ variant: hoverV }}
                                menuData={[
                                  { label: "Action 1", value: "1" },
                                  { label: "Action 2", value: "2" },
                                ]}
                              >
                                Menu
                              </Button.Menu>
                            </div>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Split: Variant x Hover Matrix */}
          <div className={STORY_MT_8}>
            <h3 className={STORY_H3_CLASS}>Split: Variant x Hover Matrix</h3>
            <p className={STORY_SECTION_DESC_CLASS}>
              Explore how split buttons interact with hover behaviors across
              all variants. Hover over the buttons to see the effects.
            </p>
            <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr className={STORY_THEAD_CLASS}>
                    <th className={STORY_TH_CLASS}>
                      Variant / Hover Variant
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Solid
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Outline
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "180px" }}
                    >
                      Solid-Outline
                    </th>
                    <th
                      className={STORY_TH_CENTER_CLASS}
                      style={{ minWidth: "150px" }}
                    >
                      Ghost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SHOWCASE_VARIANTS.map((variant) => {
                    const label =
                      variant === "solid-outline"
                        ? "Solid-Outline"
                        : variant.charAt(0).toUpperCase() + variant.slice(1);

                    return (
                      <tr key={variant}>
                        <td className={STORY_TD_LABEL_CLASS}>{label}</td>
                        {(
                          [
                            "solid",
                            "outline",
                            "solid-outline",
                            "ghost",
                          ] as const
                        ).map((hoverV) => (
                          <td key={hoverV} className={STORY_TD_CONTENT_CLASS}>
                            <div className={STORY_CENTER_FLEX_CLASS}>
                              <Button.Split
                                size="base"
                                variant={variant}
                                appearance="strong"
                                color={theme.color}
                                hoverStyle={{ variant: hoverV }}
                                menuData={[
                                  { label: "Action 1", value: "1" },
                                  { label: "Action 2", value: "2" },
                                ]}
                              >
                                Split
                              </Button.Split>
                            </div>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className={STORY_MT_8}>
            <h3 className={STORY_H3_CLASS}>Variant x Appearance Matrix</h3>
            <p className={STORY_SECTION_DESC_CLASS}>
              Visual comparison of style variants across different appearance
              intensities
            </p>
            <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr className={STORY_THEAD_CLASS}>
                    <th className={STORY_TH_CLASS}>Style / Appearance</th>
                    <th className={STORY_TH_CENTER_CLASS}>Strong</th>
                    <th className={STORY_TH_CENTER_CLASS}>Soft</th>
                    <th className={STORY_TH_CENTER_CLASS}>DualTone</th>
                    <th className={STORY_TH_CENTER_CLASS}>OnColor</th>
                  </tr>
                </thead>
                <tbody>
                  {SHOWCASE_VARIANTS.map((variant) => {
                    const label =
                      variant === "solid-outline"
                        ? "Solid-Outline"
                        : variant.charAt(0).toUpperCase() + variant.slice(1);

                    return (
                      <tr key={variant}>
                        <td className={STORY_TD_LABEL_CLASS}>{label}</td>
                        {SHOWCASE_APPEARANCES.map((appearance) => {
                          const button = (
                            <Button
                              cTag="button"
                              size="base"
                              variant={variant}
                              appearance={appearance}
                              color={theme.color}
                            >
                              Button
                            </Button>
                          );

                          return (
                            <td
                              key={appearance}
                              className={STORY_TD_CONTENT_CLASS}
                            >
                              <div className={STORY_CENTER_FLEX_CLASS}>
                                {appearance === "onColor" ? (
                                  <div
                                    className={getOnColorWrapperClass(
                                      theme.color,
                                    )}
                                  >
                                    {button}
                                  </div>
                                ) : (
                                  button
                                )}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Appearance x interactionAppearance Variant */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>
              Appearance x interactionAppearance Variant
            </h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Interaction appearance states for different appearance types
            </p>
          </div>
          <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
            <table className={STORY_TABLE_CLASS}>
              <thead>
                <tr className={STORY_THEAD_CLASS}>
                  <th className={STORY_TH_CLASS}>
                    Appearance / Int. Appearance
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    Soft
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    Strong
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    DualTone
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Updated to use the correct 'hover' prop structure */}
                {[
                  {
                    label: "Soft (Neutral)",
                    appearance: "soft",
                    color: "neutral",
                    interactionColor: "brand",
                  },
                  {
                    label: "DualTone (Brand)",
                    appearance: "dualTone",
                    color: theme.color,
                  },
                  {
                    label: "Soft (Brand)",
                    appearance: "soft",
                    color: theme.color,
                  },
                ].map((row) => {
                  return (
                    <tr key={row.label}>
                      <td className={STORY_TD_LABEL_CLASS}>{row.label}</td>
                      {(["soft", "strong", "dualTone"] as const).map(
                        (interactionAppearance) => {
                          return (
                            <td
                              key={interactionAppearance}
                              className={STORY_TD_CONTENT_CLASS}
                            >
                              <div className={STORY_CENTER_FLEX_CLASS}>
                                <Button
                                  cTag="button"
                                  size="base"
                                  variant="solid"
                                  appearance={row.appearance as any}
                                  color={row.color as any}
                                  hoverStyle={{
                                    variant: "solid",
                                    appearance: interactionAppearance as any,
                                    color: (row as any).interactionColor,
                                  }}
                                >
                                  Button
                                </Button>
                              </div>
                            </td>
                          );
                        },
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Menu: Appearance x interactionAppearance Variant */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>
              Menu: Appearance x interactionAppearance Variant
            </h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Interaction appearance states for different appearance types in
              Menu buttons.
            </p>
          </div>
          <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
            <table className={STORY_TABLE_CLASS}>
              <thead>
                <tr className={STORY_THEAD_CLASS}>
                  <th className={STORY_TH_CLASS}>
                    Appearance / Int. Appearance
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    Soft
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    Strong
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    DualTone
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Soft (Neutral)",
                    appearance: "soft",
                    color: "neutral",
                    interactionColor: "brand",
                  },
                  {
                    label: "DualTone (Brand)",
                    appearance: "dualTone",
                    color: theme.color,
                  },
                  {
                    label: "Soft (Brand)",
                    appearance: "soft",
                    color: theme.color,
                  },
                ].map((row) => {
                  return (
                    <tr key={row.label}>
                      <td className={STORY_TD_LABEL_CLASS}>{row.label}</td>
                      {(["soft", "strong", "dualTone"] as const).map(
                        (interactionAppearance) => {
                          return (
                            <td
                              key={interactionAppearance}
                              className={STORY_TD_CONTENT_CLASS}
                            >
                              <div className={STORY_CENTER_FLEX_CLASS}>
                                <Button.Menu
                                  size="base"
                                  variant="solid"
                                  appearance={row.appearance as any}
                                  color={row.color as any}
                                  hoverStyle={{
                                    variant: "solid",
                                    appearance: interactionAppearance as any,
                                    color: (row as any).interactionColor,
                                  }}
                                  menuData={[
                                    { label: "Action 1", value: "1" },
                                    { label: "Action 2", value: "2" },
                                  ]}
                                >
                                  Menu
                                </Button.Menu>
                              </div>
                            </td>
                          );
                        },
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Split: Appearance x interactionAppearance Variant */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>
              Split: Appearance x interactionAppearance Variant
            </h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Interaction appearance states for different appearance types in
              Split buttons.
            </p>
          </div>
          <div className={STORY_TABLE_WRAPPER_OVERFLOW}>
            <table className={STORY_TABLE_CLASS}>
              <thead>
                <tr className={STORY_THEAD_CLASS}>
                  <th className={STORY_TH_CLASS}>
                    Appearance / Int. Appearance
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    Soft
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    Strong
                  </th>
                  <th
                    className={STORY_TH_CENTER_CLASS}
                    style={{ minWidth: "150px" }}
                  >
                    DualTone
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Soft (Neutral)",
                    appearance: "soft",
                    color: "neutral",
                    interactionColor: "brand",
                  },
                  {
                    label: "DualTone (Brand)",
                    appearance: "dualTone",
                    color: theme.color,
                  },
                  {
                    label: "Soft (Brand)",
                    appearance: "soft",
                    color: theme.color,
                  },
                ].map((row) => {
                  return (
                    <tr key={row.label}>
                      <td className={STORY_TD_LABEL_CLASS}>{row.label}</td>
                      {(["soft", "strong", "dualTone"] as const).map(
                        (interactionAppearance) => {
                          return (
                            <td
                              key={interactionAppearance}
                              className={STORY_TD_CONTENT_CLASS}
                            >
                              <div className={STORY_CENTER_FLEX_CLASS}>
                                <Button.Split
                                  size="base"
                                  variant="solid"
                                  appearance={row.appearance as any}
                                  color={row.color as any}
                                  hoverStyle={{
                                    variant: "solid",
                                    appearance: interactionAppearance as any,
                                    color: (row as any).interactionColor,
                                  }}
                                  menuData={[
                                    { label: "Action 1", value: "1" },
                                    { label: "Action 2", value: "2" },
                                  ]}
                                >
                                  Split
                                </Button.Split>
                              </div>
                            </td>
                          );
                        },
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Appearance Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Appearance Variants</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Different intensity levels and color treatments
            </p>
          </div>
          <div className={STORY_FLEX_WRAP_CLASS}>
            {SHOWCASE_APPEARANCES.map((appearance) => {
              const label =
                appearance.charAt(0).toUpperCase() + appearance.slice(1);

              const button = (
                <Button
                  cTag="button"
                  size="base"
                  variant="solid"
                  appearance={appearance}
                  color={theme.color}
                >
                  {label}
                </Button>
              );

              const wrappedAppearance =
                appearance === "onColor" ? (
                  <div className={getOnColorWrapperClass(theme.color)}>
                    {button}
                  </div>
                ) : (
                  button
                );

              return (
                <div key={appearance} className={STORY_FLEX_COL_GAP_2}>
                  {wrappedAppearance}
                </div>
              );
            })}
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Adaptive Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Adaptive Variants</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Automatic dark mode adjustment for seamless integration
            </p>
          </div>
          <div className={STORY_ADAPTIVE_CONTAINER}>
            <div className={STORY_ADAPTIVE_COL}>
              <span className={STORY_SPAN_LABEL}>Adaptive: False</span>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                adaptive={false}
              >
                Standard
              </Button>
            </div>

            <div className={STORY_ADAPTIVE_COL}>
              <span className={STORY_SPAN_LABEL}>Adaptive: True</span>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                adaptive={true}
              >
                Adaptive
              </Button>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Menu: Adaptive Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>
              Menu: Adaptive Variants
            </h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Automatic dark mode adjustment for Menu buttons
            </p>
          </div>
          <div className={STORY_ADAPTIVE_CONTAINER}>
            <div className={STORY_ADAPTIVE_COL}>
              <span className={STORY_SPAN_LABEL}>Adaptive: False</span>
              <Button.Menu
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                adaptive={false}
                menuData={[
                  { label: "Option 1", value: "1" },
                  { label: "Option 2", value: "2" },
                ]}
              >
                Standard
              </Button.Menu>
            </div>

            <div className={STORY_ADAPTIVE_COL}>
              <span className={STORY_SPAN_LABEL}>Adaptive: True</span>
              <Button.Menu
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                adaptive={true}
                menuData={[
                  { label: "Option 1", value: "1" },
                  { label: "Option 2", value: "2" },
                ]}
              >
                Adaptive
              </Button.Menu>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Split: Adaptive Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>
              Split: Adaptive Variants
            </h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Automatic dark mode adjustment for Split buttons
            </p>
          </div>
          <div className={STORY_ADAPTIVE_CONTAINER}>
            <div className={STORY_ADAPTIVE_COL}>
              <span className={STORY_SPAN_LABEL}>Adaptive: False</span>
              <Button.Split
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                adaptive={false}
                menuData={[
                  { label: "Save", value: "save" },
                  { label: "Cancel", value: "cancel" },
                ]}
              >
                Standard
              </Button.Split>
            </div>

            <div className={STORY_ADAPTIVE_COL}>
              <span className={STORY_SPAN_LABEL}>Adaptive: True</span>
              <Button.Split
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                adaptive={true}
                menuData={[
                  { label: "Save", value: "save" },
                  { label: "Cancel", value: "cancel" },
                ]}
              >
                Adaptive
              </Button.Split>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Helper Text Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>
              Helper Text Variants
            </h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Additional context or hints for button actions
            </p>
          </div>
          <div className={STORY_FLEX_WRAP_CLASS}>
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="lg"
                variant="solid"
                appearance="strong"
                color={theme.color}
                description={{ text: "Bottom text", placement: "bottom" }}
              >
                Button
              </Button>
            </div>

            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="lg"
                variant="solid"
                appearance="strong"
                color={theme.color}
                description={{ text: "Top text", placement: "top" }}
              >
                Button
              </Button>
            </div>
          </div>

          <div className={STORY_FLEX_COL_GAP_2}>
            <h3 className={STORY_SECTION_TITLE_CLASS}>Helper Text Sizes</h3>
            <div className={STORY_FLEX_WRAP_CLASS}>
              {SHOWCASE_SIZES.map((s) => (
                <div key={s} className={STORY_FLEX_COL_GAP_2}>
                  <span className={STORY_SPAN_LABEL}>{s}</span>
                  <Button
                    cTag="button"
                    size={s}
                    variant="solid"
                    appearance="strong"
                    color={theme.color}
                    description={{ text: `Size ${s}` }}
                  >
                    Button
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* State Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>State Variants</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Different button states for various interactions
            </p>
          </div>
          <div className={STORY_FLEX_WRAP_CLASS}>
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
              >
                Enabled
              </Button>
            </div>
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                style={STYLE_HOVER}
              >
                Hover
              </Button>
            </div>
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                style={STYLE_PRESSED}
              >
                Pressed
              </Button>
            </div>
            <div className={STORY_FLEX_COL_GAP_2}>
              <FocusStateButton color={theme.color} mode={theme.resolvedMode}>
                Focus
              </FocusStateButton>
            </div>
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                loading
              >
                Loading
              </Button>
            </div>
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                disabled
              >
                Disabled
              </Button>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Icon Only Variants */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Icon Only Variants</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Comprehensive display of icon-only buttons across all types,
              variants, and sizes.
            </p>
          </div>
          <div className="space-y-10">
            {(
              [
                { label: "Default", type: "default" },
                { label: "Menu", type: "menu" },
                { label: "Split", type: "split" },
              ] as const
            ).map((bt) => (
              <div key={bt.type} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                  {bt.label} Buttons
                </h3>
                <div className="space-y-6">
                  {SHOWCASE_VARIANTS.map((v) => {
                    const variantLabel =
                      v === "solid-outline"
                        ? "Solid-Outline"
                        : v.charAt(0).toUpperCase() + v.slice(1);

                    return (
                      <div key={v} className="space-y-2">
                        <span className={STORY_SPAN_LABEL}>
                          {variantLabel}
                        </span>
                        <div className={STORY_FLEX_WRAP_CLASS}>
                          {SHOWCASE_SIZES.map((s) => (
                            <div
                              key={s}
                              className="flex flex-col items-center gap-1.5"
                            >
                              {bt.type === "default" && (
                                <Button
                                  cTag="button"
                                  size={s}
                                  variant={v}
                                  appearance="strong"
                                  color={theme.color}
                                  icon={
                                    {
                                      type: "icon",
                                      name: "@placeholder",
                                    } as any
                                  }
                                />
                              )}
                              {bt.type === "menu" && (
                                <Button.Menu
                                  size={s}
                                  variant={v}
                                  appearance="strong"
                                  color={theme.color}
                                  isMenuIconOnly={true}
                                  prefix={{
                                    type: "icon",
                                    name: "@placeholder",
                                  }}
                                />
                              )}
                              {bt.type === "split" && (
                                <Button.Split
                                  size={s}
                                  variant={v}
                                  appearance="strong"
                                  color={theme.color}
                                  isSplitIconOnly={true}
                                  prefix={{
                                    type: "icon",
                                    name: "@placeholder",
                                  }}
                                  menuData={[
                                    { label: "Action 1" },
                                    { label: "Action 2" },
                                  ]}
                                />
                              )}
                              <span className="text-2.5 text-neutral-400 font-mono uppercase">
                                {s}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Button Compositions */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Button Compositions</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Different button content structures
            </p>
          </div>
          <div className={STORY_FLEX_WRAP_CLASS}>
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
              >
                Label Only
              </Button>
            </div>
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                icon={
                  {
                    type: "icon",
                    name: "@placeholder",
                  } as any
                }
              ></Button>
            </div>
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                prefix={{
                  type: "icon",
                  name: "@placeholder",
                }}
              >
                With Prefix Slot
              </Button>
            </div>
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                suffix={{
                  type: "icon",
                  name: "@placeholder",
                }}
              >
                With Suffix Slot
              </Button>
            </div>
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                prefix={{
                  type: "icon",
                  name: "@placeholder",
                }}
                suffix={{
                  type: "icon",
                  name: "@placeholder",
                }}
              >
                With Prefix and Suffix Slot
              </Button>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Prefix Slot Options */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Prefix Slot Options</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              All available slot types that can be used in the prefix position
            </p>
          </div>
          <div className={STORY_GRID_CLASS}>
            {/* Icon */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                prefix={{
                  type: "icon",
                  name: "@placeholder",
                }}
              >
                Icon
              </Button>
            </div>

            {/* Logo */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                prefix={
                  {
                    type: "logo",
                    name: "@placeholder",
                    color: "currentcolor",
                  } as LogoSlot
                }
              >
                Logo
              </Button>
            </div>

            {/* Avatar */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                prefix={{
                  type: "avatar",
                  name: "profile",
                  img: { src: "https://i.pravatar.cc/300", alt: "User" },
                  size: "sm",
                }}
              >
                Avatar
              </Button>
            </div>

            {/* Counter Badge */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                prefix={{
                  type: "badge-counter",
                  counter: 99,
                  size: "sm",
                  color: theme.color,
                  variant: "solid",
                  appearance: "strong",
                }}
              >
                Counter
              </Button>
            </div>
            {/* File Type */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={
                  {
                    type: "file-type",
                    extension: "@placeholder",
                    size: "base",
                  } as any
                }
              >
                File Type
              </Button>
            </div>

            {/* Flag */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={
                  {
                    type: "flag",
                    code: "@placeholder",
                    shape: "rectangle",
                    size: "base",
                  } as any
                }
              >
                Flag
              </Button>
            </div>
            {/* Status Indicator */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={{
                  type: "badge-status-indicator",
                  appearance: "strong",
                  color: "success",
                  size: "base",
                }}
              >
                Status
              </Button>
            </div>

            {/* Dot Badge */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={{
                  type: "badge-dot",
                  variant: "solid",
                  appearance: "strong",
                  color: "success",
                  size: "lg",
                }}
              >
                Dot Badge
              </Button>
            </div>

            {/* Color Logo */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={
                  {
                    type: "color-logo",
                    name: "@placeholder",
                  } as ColorLogoSlot
                }
              >
                Color Logo
              </Button>
            </div>

            {/* Emoji */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={
                  {
                    type: "emoji",
                    name: "@placeholder",
                  } as EmojiSlot
                }
              >
                Emoji
              </Button>
            </div>

            {/* Label Badge */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={{
                  type: "badge-label",
                  color: "success",
                  label: "new",
                  size: "xs",
                }}
              >
                Label Badge
              </Button>
            </div>

            {/* Loader */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={
                  {
                    type: "loader",
                    size: "md",
                  } as any
                }
              >
                Loader
              </Button>
            </div>

            {/* Keyboard Key */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={{
                  type: "kbd",
                  label: "C",
                  size: "xs",
                  appearance: "soft",
                }}
              >
                Keyboard Key
              </Button>
            </div>

            {/* Color Swatch */}
            <div className={STORY_CARD_CLASS}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="soft"
                color="neutral"
                prefix={
                  {
                    type: "color-swatch",
                    color: "#3b82f6",
                    ratio: "1:1",
                  } as any
                }
              >
                Color Swatch
              </Button>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Badges Prop */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Badges Prop</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Corner overlays configured through the badges prop — topStart,
              topEnd, bottomStart and bottomEnd. Each corner takes a badge
              slot object that the button resolves through the slot renderer,
              so no Badge component is imported here. Corner badges render on
              default buttons (including icon-only); Button.Menu and
              Button.Split do not carry them.
            </p>
          </div>

          <div className="space-y-10">
            {/* Corner Positions */}
            <div className={STORY_SECTION_CLASS}>
              <h3 className={STORY_GROUP_TITLE_CLASS}>Corner Positions</h3>
              <p className={STORY_SECTION_DESC_CLASS}>
                The same badge-dot slot in each corner. The button anchors it
                to the border arc, so the badge centre tracks the visible
                rounded edge instead of the bounding box.
              </p>
              <div className={STORY_GRID_CLASS}>
                {SHOWCASE_BADGE_CORNERS.map((corner) => (
                  <div key={corner} className={STORY_CARD_CLASS}>
                    <Button
                      cTag="button"
                      size="base"
                      variant="solid"
                      appearance="strong"
                      color={theme.color}
                      badges={{ [corner]: SHOWCASE_CORNER_DOT_SLOT }}
                    >
                      Inbox
                    </Button>
                    <span className={STORY_CAPTION_CLASS}>{corner}</span>
                  </div>
                ))}
                <div className={STORY_CARD_CLASS}>
                  <Button
                    cTag="button"
                    size="base"
                    variant="solid"
                    appearance="strong"
                    color={theme.color}
                    badges={{
                      topStart: SHOWCASE_CORNER_DOT_SLOT,
                      topEnd: SHOWCASE_CORNER_DOT_SLOT,
                      bottomStart: SHOWCASE_CORNER_DOT_SLOT,
                      bottomEnd: SHOWCASE_CORNER_DOT_SLOT,
                    }}
                  >
                    Inbox
                  </Button>
                  <span className={STORY_CAPTION_CLASS}>
                    all four corners
                  </span>
                </div>
              </div>
            </div>

            {/* Badge Slot Types */}
            <div className={STORY_SECTION_CLASS}>
              <h3 className={STORY_GROUP_TITLE_CLASS}>Badge Slot Types</h3>
              <p className={STORY_SECTION_DESC_CLASS}>
                Slot objects accepted in every corner. A slot that omits size
                inherits one from the button.
              </p>
              <div className={STORY_GRID_CLASS}>
                {SHOWCASE_BADGE_SLOT_TYPES.map((badge) => (
                  <div key={badge.caption} className={STORY_CARD_CLASS}>
                    <Button
                      cTag="button"
                      size="base"
                      variant="solid"
                      appearance="strong"
                      color={theme.color}
                      badges={{ topEnd: badge.slot }}
                    >
                      Inbox
                    </Button>
                    <span className={STORY_CAPTION_CLASS}>
                      {badge.caption}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges Across Sizes */}
            <div className={STORY_SECTION_CLASS}>
              <h3 className={STORY_GROUP_TITLE_CLASS}>Badges Across Sizes</h3>
              <p className={STORY_SECTION_DESC_CLASS}>
                Every badge slot type against every button size. These slots
                leave size unset, so each badge scales with the button — xs/sm
                buttons take an xs badge, base takes sm, lg/xl take base. Dot
                and counter badges on xs/sm buttons use the base button&apos;s
                sm badge instead.
              </p>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className={STORY_SPAN_LABEL}>With Label</span>
                  {SHOWCASE_BADGE_SLOT_TYPES.map((badge) => (
                    <div key={badge.caption} className="space-y-2">
                      <span className={STORY_CAPTION_CLASS}>
                        {badge.caption}
                      </span>
                      <div className={STORY_FLEX_WRAP_CLASS}>
                        {SHOWCASE_SIZES.map((s) => (
                          <div key={s} className={STORY_SIZE_COL_CLASS}>
                            <Button
                              cTag="button"
                              size={s}
                              variant="solid"
                              appearance="strong"
                              color={theme.color}
                              badges={{
                                topEnd: showcaseBadgeSlotForSize(
                                  badge.slot,
                                  s,
                                ),
                              }}
                            >
                              Inbox
                            </Button>
                            <span className={STORY_CAPTION_UPPER_CLASS}>
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <span className={STORY_SPAN_LABEL}>Icon Only</span>
                  {SHOWCASE_BADGE_SLOT_TYPES.map((badge) => (
                    <div key={badge.caption} className="space-y-2">
                      <span className={STORY_CAPTION_CLASS}>
                        {badge.caption}
                      </span>
                      <div className={STORY_FLEX_WRAP_CLASS}>
                        {SHOWCASE_SIZES.map((s) => (
                          <div key={s} className={STORY_SIZE_COL_CLASS}>
                            <Button
                              cTag="button"
                              size={s}
                              variant="solid"
                              appearance="strong"
                              color={theme.color}
                              aria-label={`Inbox (${s})`}
                              icon={
                                {
                                  type: "icon",
                                  name: "@placeholder",
                                } as any
                              }
                              badges={{
                                topEnd: showcaseBadgeSlotForSize(
                                  badge.slot,
                                  s,
                                ),
                              }}
                            />
                            <span className={STORY_CAPTION_UPPER_CLASS}>
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badges Across Style Variants */}
            <div className={STORY_SECTION_CLASS}>
              <h3 className={STORY_GROUP_TITLE_CLASS}>
                Badges Across Style Variants
              </h3>
              <p className={STORY_SECTION_DESC_CLASS}>
                Badges anchor to the button&apos;s border arc; ghost buttons
                pull them slightly inward so they clear the invisible hover
                boundary.
              </p>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {SHOWCASE_VARIANTS.map((variant) => (
                  <div key={variant} className={STORY_CARD_CLASS}>
                    <Button
                      cTag="button"
                      size="base"
                      variant={variant}
                      appearance="strong"
                      color={theme.color}
                      badges={{ topEnd: SHOWCASE_CORNER_DOT_SLOT }}
                    >
                      Inbox
                    </Button>
                    <span className={STORY_CAPTION_CLASS}>{variant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Full Width Buttons */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Full Width Buttons</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Buttons that span the full width of their container
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Default Button Variants */}
            <div className={STORY_FULL_WIDTH_WRAPPER}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                fullWidth
                description={{ text: "Default button with helper text" }}
              >
                Default Button
              </Button>
            </div>
            <div className={STORY_FULL_WIDTH_WRAPPER}>
              <Button
                cTag="button"
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                fullWidth
                prefix={{
                  type: "icon",
                  name: "@placeholder",
                }}
              >
                Default Button with Prefix
              </Button>
            </div>

            {/* Menu Button Variants */}
            <div className={STORY_FULL_WIDTH_WRAPPER}>
              <Button.Menu
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                fullWidth
                description={{ text: "Menu button with helper text" }}
                menuData={[{ label: "Action 1" }]}
              >
                Menu Button
              </Button.Menu>
            </div>
            <div className={STORY_FULL_WIDTH_WRAPPER}>
              <Button.Menu
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                fullWidth
                prefix={{ type: "icon", name: "@placeholder" }}
                menuData={[{ label: "Action 1" }]}
              >
                Menu Button with Prefix
              </Button.Menu>
            </div>

            {/* Split Button Variants */}
            <div className={STORY_FULL_WIDTH_WRAPPER}>
              <Button.Split
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                fullWidth
                description={{ text: "Split button with helper text" }}
                menuData={[{ label: "Action 1" }]}
              >
                Split Button
              </Button.Split>
            </div>
            <div className={STORY_FULL_WIDTH_WRAPPER}>
              <Button.Split
                size="base"
                variant="solid"
                appearance="strong"
                color={theme.color}
                fullWidth
                prefix={{ type: "icon", name: "@placeholder" }}
                menuData={[{ label: "Action 1" }]}
              >
                Split Button with Prefix
              </Button.Split>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        <section className={cn(STORY_SECTION_CLASS, "pb-48")}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Toggle Buttons</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              Live toggles — click each one to drive the color transition from
              neutral soft to brand soft.
            </p>
          </div>
          <div className="flex flex-col space-y-10 w-full">
            {/* Default Button (Toggle) */}
            <div className="space-y-4 w-full">
              <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                Default Button
              </h4>
              <div className="flex items-center gap-6 flex-wrap">
                <div className={STORY_CARD_CLASS}>
                  <span className="text-2xs text-neutral-400 font-medium mb-1">
                    Click to toggle — neutral soft to brand soft
                  </span>
                  <Button
                    size="base"
                    variant="solid"
                    appearance="soft"
                    color="neutral"
                    toggle={true}
                    selectStyle={{ color: theme.color, appearance: "soft" }}
                  >
                    Toggle
                  </Button>
                </div>
              </div>
            </div>

            {/* Split Button (Toggle Primary) */}
            <div className="space-y-4 w-full">
              <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                Split Button (Toggle Primary)
              </h4>
              <div className="flex items-center gap-6 flex-wrap">
                <div className={STORY_CARD_CLASS}>
                  <span className="text-2xs text-neutral-400 font-medium mb-1">
                    Click the label — color, icon and caption all follow
                  </span>
                  <MuteSplitToggle color={theme.color} />
                </div>
              </div>
            </div>

            {/* Split Button (Toggle Secondary) */}
            <div className="space-y-4 w-full">
              <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                Split Button (Toggle Secondary)
              </h4>
              <div className="flex items-center gap-6 flex-wrap">
                <div className={STORY_CARD_CLASS}>
                  <span className="text-2xs text-neutral-400 font-medium mb-1">
                    Chevron opens the menu only — the secondary highlights
                    while open, the primary is left alone
                  </span>
                  <MuteSplitToggle
                    color={theme.color}
                    items={TOGGLE_MENU_ITEMS}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Custom Styling */}
        <section className={STORY_SECTION_CLASS}>
          <div>
            <h2 className={STORY_SECTION_TITLE_CLASS}>Custom Styling</h2>
            <p className={STORY_SECTION_DESC_CLASS}>
              One-off style overrides using inline styles
            </p>
          </div>
          <div className={STORY_FLEX_WRAP_CLASS}>
            {/* Variant 1: Hyper Gradient */}
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="lg"
                variant="solid"
                appearance="strong"
                color={theme.color}
                style={STYLE_HYPER_GRADIENT}
              >
                Hyper Gradient
              </Button>
            </div>

            {/* Variant 2: Neo-Brutalist */}
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="lg"
                variant="solid"
                appearance="strong"
                color={theme.color}
                style={STYLE_NEO_BRUTALIST}
              >
                Neo-Brutalist
              </Button>
            </div>

            {/* Variant 3: 3D Game Button */}
            <div className={STORY_FLEX_COL_GAP_2}>
              <Button
                cTag="button"
                size="lg"
                variant="solid"
                appearance="strong"
                color={theme.color}
                style={STYLE_3D_PUSH}
              >
                3D Push
              </Button>
            </div>

            {/* Variant 4: Cyberpunk Neon */}
            <div className={STORY_DARK_BG_CLASS}>
              <Button
                cTag="button"
                size="lg"
                variant="outline"
                appearance="strong"
                color={theme.color}
                style={STYLE_CYBERPUNK}
              >
                CYBERPUNK
              </Button>
            </div>
          </div>
        </section>
      </LazySection>
    </ShowcaseShell>
  );
}
