// Story helper copied from origin/slider
/* ---------------------------- PALETTE CLASSES ------------------------------- */

import {
  accentColors,
  availableColorPalettes,
  semanticColors,
} from "@inventive-ui/framework";

export interface SliderPaletteClasses {
  /**
   * A light tint of the palette. Paints the track under a strong slider, so the whole control
   * sits in one colour family. The same shades Button paints a soft chip with, so a strong
   * slider and a soft button of one colour read as the same surface. @see tintOutlined
   */
  tint: string;
  tintDark: string;
  /**
   * The tint for a strong track that also carries a hairline. A step lighter than
   * {@link tint} so the border has something to sit against — Button's soft chip makes the
   * same step when it is outlined.
   *
   * Light only: in a dark theme both land on the same shade, so an outlined strong track is
   * told apart by its hairline rather than by its surface.
   */
  tintOutlined: string;
  tintOutlinedDark: string;
  /** The palette's core shade — the filled span and the thumb. */
  core: string;
  coreDark: string;
  /** Core one step darker, for a hovered thumb. */
  coreHover: string;
  coreHoverDark: string;
  /** Core two steps darker, for a thumb being dragged. */
  coreActive: string;
  coreActiveDark: string;
  /**
   * Hairline for a strong track: the shades Button outlines a soft chip with, so a bordered
   * slider and an outlined soft button share an edge colour. Empty for the shadeless
   * palettes, which have no step to take — those fall back to the neutral hairline.
   */
  borderTint: string;
  borderTintDark: string;
  /** Hairline at the core shade — the outlined variants' track and thumb edge. */
  border: string;
  borderDark: string;
  /** Colour of the value read-out. */
  valueText: string;
  valueTextDark: string;
  /**
   * Focus-ring colour for the thumb.
   *
   * Colour only — `ring-<palette>-600` sets `--iui-ring-color` and draws nothing on its own.
   * The ring itself comes from the `focus-visible:ring-2` in {@link base.thumbClasses}, so
   * the thumb still rings only on focus-visible even though this class is always applied.
   *
   * Written that way on purpose rather than as `focus-visible:ring-<palette>-600`: the
   * Framework's pattern scanner expands only the bare, `dark:`, `hover:`, `active:`, `focus:`
   * and `disabled:` prefixes, and drops `focus-visible:` on the way through. A ring built
   * with that prefix would compile for the palettes someone happened to type and silently
   * focus with no colour for every palette a consumer adds to `iui.config.ts`.
   */
  ring: string;
  ringDark: string;
}

/**
 * Palettes the theme defines as a single colour rather than a ramp. Strong and dualTone
 * render the same, they do not shift in a dark theme, and the value read-out borrows neutral
 * so it stays legible on the page rather than matching a thumb that is white or black.
 */
export const SHADELESS_PALETTES = ["white", "black"];

/**
 * Palettes whose fill would otherwise vanish into the neutral track dualTone paints. A
 * coloured fill reads against that track by hue, but a grey fill at the track's own shade is
 * invisible — zinc-200 is #d3d3d4 against a #d3d4d4 track — so these step the core shade and
 * read by lightness instead. `slate` is not one: it carries enough hue to read at the usual
 * shades.
 *
 * Only the fill steps. The tints follow the same recipe every palette does, so a grey strong
 * slider is Button's soft neutral chip. Unlike Progress, which holds a strong bar at the core
 * shade through a separate `fillStrong`, the stepped shade carries into strong here — fill
 * and thumb are one colour on a slider, and splitting them would leave a grey thumb a shade
 * off the span it caps.
 */
export const NEUTRAL_FAMILY_PALETTES = ["neutral", "stone", "zinc"];

/** Palette used when a colour resolves to something that cannot name a class. */
export const FALLBACK_PALETTE = "brand";

/** A token that can appear in a utility class: lowercase, no spaces, no shade suffix. */
const PALETTE_TOKEN = /^[a-z][a-z0-9-]*$/;

/**
 * The palettes the theme currently defines, asked of the Framework rather than listed here
 * — that is what lets a project's own accent slots paint without Slider knowing them.
 *
 * `availableColorPalettes` is an array in some builds and a lookup in others, the same
 * shape check `resolveCanonicalColorToken` makes.
 */
function themePalettes(): string[] {
  const base = Array.isArray(availableColorPalettes)
    ? [...availableColorPalettes]
    : Object.values(
        (availableColorPalettes ?? {}) as unknown as Record<string, string>,
      );

  return [
    ...base,
    ...Object.keys(semanticColors ?? {}),
    ...Object.keys(accentColors ?? {}),
  ];
}

/**
 * Whether a string names a palette the theme defines, rather than a raw CSS colour.
 *
 * The painted rails need the distinction — a token resolves to a custom property and follows
 * the theme, a literal is the colour being edited — and so does the showcase, which offers
 * only the colours a slider can actually paint. Both used to ask a static map whether it had
 * an entry, which answered "no" for every palette a project added to its own config.
 */
export function isPaletteToken(value: string): boolean {
  if (!PALETTE_TOKEN.test(value)) return false;
  return themePalettes().includes(value);
}

/**
 * The palette to paint with.
 *
 * A colour the theme does not define would otherwise build a class no stylesheet carries —
 * an invisible slider — so it falls back to {@link FALLBACK_PALETTE}, which is what a typo'd
 * `color` has always done here.
 *
 * The accent slots only exist once the config has initialised. Until then there is nothing
 * to check against, and falling back would paint every accent slider brand on the server and
 * flip it after hydration, so an unrecognised token is trusted rather than replaced.
 */
function resolvePalette(palette: string): string {
  if (!PALETTE_TOKEN.test(palette)) return FALLBACK_PALETTE;
  if (Object.keys(accentColors ?? {}).length === 0) return palette;
  return themePalettes().includes(palette) ? palette : FALLBACK_PALETTE;
}

/* ----------------------------------------------------------------------------
 * The classes below are built from the palette token instead of being written out
 * per palette, so a project whose `iui.config.ts` defines its own accent slots gets sliders
 * in those colours — a fixed list only ever covers the palettes someone typed.
 *
 * That works because the Framework scans these patterns rather than only finished class
 * names: `scan-palette-patterns.mjs` picks up `` `bg-${palette}-100` `` and
 * `resolvePaletteUtilities` expands it across the *consumer's* configured palettes. Four
 * things keep that scan working, and all four fail silently — no CSS, no error:
 *
 * 1. The property (`bg`/`text`/`border`/`ring`) and the shade digits must be literal in the
 *    template. `` `${prop}-${palette}-${shade}` `` matches nothing.
 * 2. The palette parameter must keep a name the scanner knows (`palette`, `color`,
 *    `cssColorName`, …) and must **not** take a default value — a default narrows the
 *    expansion to that one palette.
 * 3. No object literal in this file may have two or more keys starting with a palette name
 *    (`brand`, `neutral`, `white`, …). That marks the file as holding a palette map and
 *    narrows every pattern in it to those keys. It is why the shadeless pair below is a
 *    ternary rather than a `{ white, black }` lookup.
 * 4. Only the bare, `dark:`, `hover:`, `active:`, `focus:` and `disabled:` prefixes are
 *    expanded. `focus-within:` and `focus-visible:` are dropped on the way through — @see
 *    SliderPaletteClasses.ring for what that costs and how the ring works around it.
 *
 * Within this repo the classes are covered regardless: the compile safelist already carries
 * every `{bg,text,border,ring}-{palette}-{shade}` pair with and without `dark:`.
 * -------------------------------------------------------------------------- */

/** The default recipe: a light tint, the core shade, and a hairline between them. */
function chromaticClasses(palette: string): SliderPaletteClasses {
  return {
    tint: `bg-${palette}-100`,
    tintDark: `dark:bg-${palette}-900`,
    tintOutlined: `bg-${palette}-50`,
    tintOutlinedDark: `dark:bg-${palette}-900`,
    core: `bg-${palette}-500`,
    coreDark: `dark:bg-${palette}-500`,
    coreHover: `hover:bg-${palette}-600`,
    coreHoverDark: `dark:hover:bg-${palette}-400`,
    coreActive: `active:bg-${palette}-700`,
    coreActiveDark: `dark:active:bg-${palette}-300`,
    borderTint: `border-${palette}-300`,
    borderTintDark: `dark:border-${palette}-700`,
    border: `border-${palette}-500`,
    borderDark: `dark:border-${palette}-500`,
    valueText: `text-${palette}-600`,
    valueTextDark: `dark:text-${palette}-400`,
    ring: `ring-${palette}-600`,
    ringDark: `dark:ring-${palette}-400`,
  };
}

/**
 * @see NEUTRAL_FAMILY_PALETTES — the default recipe with the fill stepped darker, so a grey
 * span and thumb clear the neutral track they sit on. The tints are untouched.
 */
function neutralFamilyClasses(palette: string): SliderPaletteClasses {
  return {
    ...chromaticClasses(palette),
    core: `bg-${palette}-600`,
    coreDark: `dark:bg-${palette}-300`,
    coreHover: `hover:bg-${palette}-700`,
    coreHoverDark: `dark:hover:bg-${palette}-200`,
    coreActive: `active:bg-${palette}-800`,
    coreActiveDark: `dark:active:bg-${palette}-100`,
    border: `border-${palette}-500`,
    borderDark: `dark:border-${palette}-300`,
  };
}

/**
 * @see SHADELESS_PALETTES — one colour, so there is no shade to step to and no dark half.
 *
 * These are the only finished class names in the file, because there is no ramp to derive
 * them from: `bg-white` has no shade suffix, and the read-out borrows neutral rather than
 * painting white on the page. Written as a ternary rather than a `{ white, black }` object
 * on purpose — an object keyed by palette names would narrow every pattern above to those
 * two keys.
 */
function shadelessClasses(palette: string): SliderPaletteClasses {
  const isBlack = palette === "black";
  const fill = isBlack ? "bg-black" : "bg-white";
  const hover = isBlack ? "hover:bg-black" : "hover:bg-white";
  const active = isBlack ? "active:bg-black" : "active:bg-white";
  const edge = isBlack ? "border-black" : "border-white";
  const ring = isBlack ? "ring-black" : "ring-white";

  return {
    tint: fill,
    tintDark: "",
    tintOutlined: fill,
    tintOutlinedDark: "",
    core: fill,
    coreDark: "",
    coreHover: hover,
    coreHoverDark: "",
    coreActive: active,
    coreActiveDark: "",
    borderTint: "",
    borderTintDark: "",
    border: edge,
    borderDark: "",
    valueText: "text-neutral-600",
    valueTextDark: "dark:text-neutral-400",
    ring,
    ringDark: "",
  };
}

/**
 * Cached so a palette keeps one object identity across renders, the way the static map did —
 * every one of the slider's parts reads these on every render.
 */
const classesByPalette = new Map<string, SliderPaletteClasses>();

/**
 * Resolves a palette token to its classes.
 *
 * The token arrives canonicalised by `useComponentColor`, which folds `warm`/`cool` into
 * neutral and passes everything else through — so the check for a palette the theme
 * actually defines happens here. @see resolvePalette
 */
export function getPaletteClasses(palette: string): SliderPaletteClasses {
  const token = resolvePalette(palette);

  const cached = classesByPalette.get(token);
  if (cached) return cached;

  const classes = SHADELESS_PALETTES.includes(token)
    ? shadelessClasses(token)
    : NEUTRAL_FAMILY_PALETTES.includes(token)
      ? neutralFamilyClasses(token)
      : chromaticClasses(token);

  classesByPalette.set(token, classes);
  return classes;
}
