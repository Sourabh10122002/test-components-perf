// Story helper copied from origin/progress
/* ---------------------------- PALETTE CLASSES ------------------------------- */

import {
  accentColors,
  availableColorPalettes,
  semanticColors,
} from "@inventive-ui/framework";

export interface ProgressPaletteClasses {
  /**
   * A light tint of the palette. Paints the track under a strong bar, so the whole bar
   * sits in one colour family. The light half is the shade Button paints a soft chip with, so
   * a strong bar and a soft button of the same colour read as one surface.
   *
   * The dark half sits one step above that chip, at `-900` rather than `-950`: a dark page is
   * itself a `-950` surface, so a track at that shade has nothing to read against and the bar
   * looks like a bare fill floating on the page. Raising it costs the Button match in the dark
   * theme and buys the track back.
   */
  tint: string;
  tintDark: string;
  /**
   * The tint for a strong track that also carries a hairline. A step lighter than
   * {@link tint} so the border has something to sit against — Button's soft chip makes the
   * same step when it is outlined.
   *
   * Only in the light theme: {@link tint} was raised to the shade this already sits at, so a
   * bordered dark track and a plain one share a background and differ by the hairline alone.
   */
  tintOutlined: string;
  tintOutlinedDark: string;
  /** The palette's core shade — the fill under dualTone. */
  core: string;
  coreDark: string;
  /**
   * The fill under strong — the palette at full strength, against the soft tint behind it.
   *
   * Held at the core shade in both themes rather than following {@link tint} down its ramp:
   * the indicator is the part being read, so it stays the one shade that names the palette
   * whatever the track does. Separate from {@link core} because the greys step that one for
   * dualTone's neutral track, and strong has no such track to clear.
   */
  fillStrong: string;
  fillStrongDark: string;
  /**
   * Hairline for a strong track: the shades Button outlines a soft chip with, so a bordered
   * bar and an outlined soft button share an edge colour. Empty for the shadeless palettes,
   * which have no step to take — those fall back to the neutral hairline.
   */
  borderTint: string;
  borderTintDark: string;
  /** The same hairline for the ring, as a `text-*` class. @see coreRing */
  borderTintRing: string;
  borderTintRingDark: string;
  /** Colour of the value read-out. */
  valueText: string;
  valueTextDark: string;
  /**
   * Ring colours for Progress.Circular. These are `text-*` classes, not `stroke-*`: the
   * build compiles no palette stroke utilities, so the ring is drawn with
   * `stroke="currentColor"` and coloured through the text colour. Shades match the bar's,
   * so a ring and a bar of the same colour read identically.
   */
  tintRing: string;
  tintRingDark: string;
  /** @see tintOutlined — the rail behind a bordered ring. */
  tintOutlinedRing: string;
  tintOutlinedRingDark: string;
  coreRing: string;
  coreRingDark: string;
  /** @see fillStrong — the arc of a strong ring. */
  fillStrongRing: string;
  fillStrongRingDark: string;
}

/**
 * Palettes the theme defines as a single colour rather than a ramp. Strong and dualTone
 * render the same, they do not shift in dark theme, and the value read-out borrows neutral
 * so it stays legible on the page rather than matching a bar that is white or black.
 */
export const SHADELESS_PALETTES = ["white", "black"];

/**
 * Palettes whose fill would otherwise vanish into the neutral track dualTone paints. A
 * coloured fill reads against that track by hue, but a grey fill at the track's own shade is
 * invisible — zinc-200 is #d3d3d4 against a #d3d4d4 track — so these step the core shade and
 * read by lightness instead. `slate` is not one: it carries enough hue to read at the usual
 * shades.
 *
 * Only dualTone needs the step. Strong tints its own track, so a grey bar reads against it at
 * the core shade like every other palette.
 */
export const NEUTRAL_FAMILY_PALETTES = ["neutral", "stone", "zinc"];

/** Palette used when a colour resolves to something that cannot name a class. */
export const FALLBACK_PALETTE = "brand";

/** A token that can appear in a utility class: lowercase, no spaces, no shade suffix. */
const PALETTE_TOKEN = /^[a-z][a-z0-9-]*$/;

/**
 * The palettes the theme currently defines, asked of the Framework rather than listed here
 * — that is what lets a project's own accent slots paint without Progress knowing them.
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
 * The palette to paint with.
 *
 * A colour the theme does not define would otherwise build a class no stylesheet carries —
 * an invisible bar — so it falls back to {@link FALLBACK_PALETTE}, which is what a typo'd
 * `color` has always done here.
 *
 * The accent slots only exist once the config has initialised. Until then there is nothing
 * to check against, and falling back would paint every accent bar brand on the server and
 * flip it after hydration, so an unrecognised token is trusted rather than replaced.
 */
function resolvePalette(palette: string): string {
  if (!PALETTE_TOKEN.test(palette)) return FALLBACK_PALETTE;
  if (Object.keys(accentColors ?? {}).length === 0) return palette;
  return themePalettes().includes(palette) ? palette : FALLBACK_PALETTE;
}

/* ----------------------------------------------------------------------------
 * The classes below are built from the palette token instead of being written out
 * per palette, so a project whose `iui.config.ts` defines its own accent slots gets bars
 * in those colours — a fixed list only ever covers the palettes someone typed.
 *
 * That works because the Framework scans these patterns rather than only finished class
 * names: `scan-palette-patterns.mjs` picks up `` `bg-${palette}-200` `` and
 * `resolvePaletteUtilities` expands it across the *consumer's* configured palettes. Four
 * things keep that scan working, and all four fail silently — no CSS, no error:
 *
 * 1. The property (`bg`/`text`/`border`) and the shade digits must be literal in the
 *    template. `` `${prop}-${palette}-${shade}` `` matches nothing.
 * 2. The palette parameter must keep a name the scanner knows (`palette`, `color`,
 *    `cssColorName`, …) and must **not** take a default value — a default narrows the
 *    expansion to that one palette.
 * 3. No object literal in this file may have two or more keys starting with a palette name
 *    (`brand`, `neutral`, `white`, …). That marks the file as holding a palette map and
 *    narrows every pattern in it to those keys.
 * 4. Only the bare, `dark:`, `hover:`, `active:`, `focus:` and `disabled:` prefixes are
 *    expanded. `focus-within:` and `focus-visible:` are dropped on the way through.
 *
 * Within this repo the classes are covered regardless: the compile safelist already carries
 * every `{bg,text,border}-{palette}-{shade}` pair with and without `dark:`.
 * -------------------------------------------------------------------------- */

/** The default recipe: a light tint, the core shade, and a hairline between them. */
function chromaticClasses(palette: string): ProgressPaletteClasses {
  return {
    tint: `bg-${palette}-100`,
    tintDark: `dark:bg-${palette}-900`,
    tintOutlined: `bg-${palette}-50`,
    tintOutlinedDark: `dark:bg-${palette}-900`,
    core: `bg-${palette}-500`,
    coreDark: `dark:bg-${palette}-500`,
    fillStrong: `bg-${palette}-500`,
    fillStrongDark: `dark:bg-${palette}-500`,
    borderTint: `border-${palette}-300`,
    borderTintDark: `dark:border-${palette}-700`,
    borderTintRing: `text-${palette}-300`,
    borderTintRingDark: `dark:text-${palette}-700`,
    valueText: `text-${palette}-600`,
    valueTextDark: `dark:text-${palette}-400`,
    tintRing: `text-${palette}-100`,
    tintRingDark: `dark:text-${palette}-900`,
    tintOutlinedRing: `text-${palette}-50`,
    tintOutlinedRingDark: `dark:text-${palette}-900`,
    coreRing: `text-${palette}-500`,
    coreRingDark: `dark:text-${palette}-500`,
    fillStrongRing: `text-${palette}-500`,
    fillStrongRingDark: `dark:text-${palette}-500`,
  };
}

/**
 * @see NEUTRAL_FAMILY_PALETTES — the default recipe with the core shade stepped darker, so a
 * grey dualTone fill clears the neutral track it sits on. Strong is untouched: its own tinted
 * track already separates the fill.
 */
function neutralFamilyClasses(palette: string): ProgressPaletteClasses {
  return {
    ...chromaticClasses(palette),
    core: `bg-${palette}-600`,
    coreDark: `dark:bg-${palette}-300`,
    coreRing: `text-${palette}-600`,
    coreRingDark: `dark:text-${palette}-300`,
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
function shadelessClasses(palette: string): ProgressPaletteClasses {
  const isBlack = palette === "black";
  const fill = isBlack ? "bg-black" : "bg-white";
  const ring = isBlack ? "text-black" : "text-white";

  return {
    tint: fill,
    tintDark: "",
    tintOutlined: fill,
    tintOutlinedDark: "",
    core: fill,
    coreDark: "",
    fillStrong: fill,
    fillStrongDark: "",
    borderTint: "",
    borderTintDark: "",
    borderTintRing: "",
    borderTintRingDark: "",
    valueText: "text-neutral-600",
    valueTextDark: "dark:text-neutral-400",
    tintRing: ring,
    tintRingDark: "",
    tintOutlinedRing: ring,
    tintOutlinedRingDark: "",
    coreRing: ring,
    coreRingDark: "",
    fillStrongRing: ring,
    fillStrongRingDark: "",
  };
}

/**
 * Cached so a palette keeps one object identity across renders, the way a static map did —
 * `useProgressStyles` and the ring both read these on every render.
 */
const classesByPalette = new Map<string, ProgressPaletteClasses>();

/**
 * Resolves a palette token to its classes.
 *
 * The token arrives canonicalised by `useComponentColor`, which folds `warm`/`cool` into
 * neutral and passes everything else through — so the check for a palette the theme
 * actually defines happens here. @see resolvePalette
 */
export function getPaletteClasses(palette: string): ProgressPaletteClasses {
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
