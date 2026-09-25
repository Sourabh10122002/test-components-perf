// @ts-nocheck
// Ported from origin/slider:src/components/Slider/stories/Slider.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/slider:src/components/Slider/stories/Slider.stories.tsx
import React from "react";
import { Slider } from "@inventive-ui/components/Slider";
import { getPaletteClasses } from "../story-helpers/Slider/palette";
import type { SliderAppearance, SliderBaseProps, SliderMarkType, SliderPlacement, SliderRadius, SliderSide, SliderSize, SliderSpacing, SliderThumbType, SliderVariant } from "@inventive-ui/components/Slider";
import { cn, semanticColors } from "@inventive-ui/framework";
import { LazySection } from "../storybook";
import { getStorybookAccentColorKeys } from "../storybook";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS, SHOWCASE_HEADER_WRAP_CLASS, SHOWCASE_TITLE_CLASS, SHOWCASE_SUBTITLE_CLASS, SHOWCASE_SECTION_CLASS, SHOWCASE_SECTION_TITLE_CLASS, SHOWCASE_SECTION_DESC_CLASS, SHOWCASE_ROW_CLASS, SHOWCASE_SCROLL_X_CLASS } from "../storybook";
const SIZE_LABEL_WIDTH = 40;
const VERTICAL_RAIL_HEIGHT = 260;
/** One matrix cell. Wide enough that a rail still reads as a rail at every size. */
const MATRIX_CELL_WIDTH = 192;
/** The placement matrix needs more: a label parked beside the rail eats into its width. */
const PLACEMENT_CELL_WIDTH = 224;

const CARD_CLASS =
  "flex flex-col gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700";
const DARK_CARD_CLASS = "flex flex-col gap-3 p-4 rounded-lg bg-neutral-900";
const CAPTION_CLASS = "text-xs text-neutral-500 dark:text-neutral-400";
const CAPTION_ON_DARK_CLASS = "text-xs text-white/80";
const GRID_2_CLASS = "grid grid-cols-2 gap-4";
/** The motion section's preset buttons — a value the page sets, rather than a drag. */
const PRESET_BUTTON_CLASS =
  "rounded-md border border-neutral-300 dark:border-neutral-600 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800";

const SIZES: SliderSize[] = ["xs", "sm", "base", "lg", "xl"];
const VARIANTS: SliderVariant[] = [
  "solid",
  "solid-outline",
  "outline",
  "ghost",
];
const APPEARANCES: SliderAppearance[] = ["strong", "dualTone", "onColor"];
const THUMB_TYPES: SliderThumbType[] = ["circle", "square", "pill", "bar"];
const MARK_TYPES: SliderMarkType[] = ["dot", "line"];
const ROUNDINGS: SliderRadius[] = ["none", "sm", "md", "lg", "full"];
const SPACINGS: SliderSpacing[] = ["compact", "standard", "spacious"];

/** Values the motion section jumps between. Each press is a page-set value, not a drag. */
const MOTION_PRESETS = [0, 25, 50, 75, 100];

/** Columns of the state matrix. Not props — each one is a different pair of booleans. */
const STATES = ["default", "disabled", "readOnly"] as const;

/**
 * The twelve-point placement set, as a side and an alignment along it.
 *
 * The suffix is spelled differently on each axis — `top-start` on a horizontal side,
 * `start-top` on a vertical one — so the columns are named for what they mean rather than for
 * the word they use, and {@link placementAt} rebuilds the token per cell.
 */
const PLACEMENT_SIDES: SliderSide[] = ["top", "start", "end", "bottom"];
const PLACEMENT_ALIGNMENTS = ["at the start", "centred", "at the end"] as const;

type PlacementAlignment = (typeof PLACEMENT_ALIGNMENTS)[number];

function placementAt(
  side: SliderSide,
  alignment: PlacementAlignment,
): SliderPlacement {
  if (alignment === "centred") return side;
  const horizontal = side === "top" || side === "bottom";
  const suffix =
    alignment === "at the start"
      ? horizontal
        ? "start"
        : "top"
      : horizontal
        ? "end"
        : "bottom";
  return `${side}-${suffix}` as SliderPlacement;
}

/**
 * Every colour a slider can be given, offered in full.
 *
 * Built from the two sources that are populated the moment this module is evaluated: the
 * framework's semantic set, and the accent slots read straight out of `iui.config.ts`. Adding
 * a palette to that config adds it here — Slider derives its classes from the token, so there
 * is no list to keep in step.
 *
 * Deliberately *not* filtered against `availableColorPalettes`, and not against Slider's own
 * `isPaletteToken`. That array is declared with eight entries and grown at runtime by
 * `initFramework`, which the preview calls after story modules are evaluated — so anything
 * checked against it here answers for a half-built theme and silently narrows the control to
 * the few semantic names. (`isPaletteToken` reads the same array, which is correct at render
 * time, when a slider actually paints, and wrong at module-eval time, which is here.)
 *
 * It also keeps `gray`, `warm` and `cool` out without naming them: those are in the safelist
 * but carry no `--iui-color-*` values, and they appear in neither source below — so a slider
 * that paints nothing is never offered.
 */
const COLOR_OPTIONS = [
  ...new Set([
    ...Object.keys(semanticColors ?? {}),
    ...getStorybookAccentColorKeys(),
  ]),
];

/** The framework's own palettes — the showcase's "Semantic" grid. */
const SEMANTIC_PALETTES = Object.keys(semanticColors ?? {});

/**
 * The config's accent slots — the "Extended" grid, everything above that is not semantic.
 * Compared against {@link SEMANTIC_PALETTES} rather than `availableColorPalettes` for the
 * same module-eval reason: that array is still eight entries long at this point, so every
 * accent slot would look "extended" and the two grids would repeat each other.
 */
const EXTENDED_PALETTES = COLOR_OPTIONS.filter(
  (color) => !SEMANTIC_PALETTES.includes(color),
);

/* ---------------------------- SHOWCASE CHROME ------------------------------- */

/** One labelled example. */
function Sample({
  caption,
  onDark = false,
  children,
}: {
  caption: string;
  onDark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={onDark ? DARK_CARD_CLASS : CARD_CLASS}>
      <span className={onDark ? CAPTION_ON_DARK_CLASS : CAPTION_CLASS}>
        {caption}
      </span>
      {children}
    </div>
  );
}

/** A showcase section. Everything but the first is mounted lazily, as Progress does. */
function Section({
  title,
  description,
  lazy = true,
  children,
}: {
  title: string;
  description: string;
  lazy?: boolean;
  children: React.ReactNode;
}) {
  const body = (
    <section className={SHOWCASE_SECTION_CLASS}>
      <div>
        <h2 className={SHOWCASE_SECTION_TITLE_CLASS}>{title}</h2>
        <p className={SHOWCASE_SECTION_DESC_CLASS}>{description}</p>
      </div>
      {children}
    </section>
  );

  return lazy ? <LazySection estimatedHeight={280}>{body}</LazySection> : body;
}

/**
 * A cross-product table — one row per `rows` entry, one column per `cols` entry.
 *
 * Wide by construction, so it scrolls inside its own region: the showcase container hides
 * overflow, and a matrix allowed to push past it would take the whole page sideways. Same
 * shape Progress's matrix uses, so the two pages read alike.
 */
function Matrix<R extends string, C extends string>({
  rows,
  cols,
  cellWidth = MATRIX_CELL_WIDTH,
  cellClassName,
  children,
}: {
  rows: readonly R[];
  cols: readonly C[];
  cellWidth?: number;
  /** Extra classes for a whole column — the on-colour surface, and nothing else so far. */
  cellClassName?: (col: C) => string | undefined;
  children: (row: R, col: C) => React.ReactNode;
}) {
  return (
    <div className={SHOWCASE_SCROLL_X_CLASS}>
      <table className="w-full" style={{ minWidth: "max-content" }}>
        <thead>
          <tr>
            <th className={`${CAPTION_CLASS} p-3 text-left`} />
            {cols.map((col) => (
              <th key={col} className={`${CAPTION_CLASS} p-3 text-left`}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <td className={`${CAPTION_CLASS} p-3`}>{row}</td>
              {cols.map((col) => (
                <td key={col} className="p-3 align-top">
                  <div
                    className={cellClassName?.(col)}
                    style={{ width: cellWidth }}
                  >
                    {children(row, col)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * One slider plus the presets that drive it from outside.
 *
 * `animation` only ever applies to a value the page set, so a showcase sample that can only be
 * dragged would show nothing at all — the presets are the demonstration, not decoration.
 *
 * It is its own component rather than markup inlined in the showcase because it holds state:
 * a hook called straight from a story's `render` runs outside Storybook's hooks window, which
 * is the same reason the meta carries no `useArgs` decorator.
 */
function MotionSample({
  caption,
  color,
  animation,
  animationDuration,
}: {
  caption: string;
  color: SliderBaseProps["color"];
  animation?: boolean;
  animationDuration?: number;
}) {
  const [value, setValue] = React.useState(MOTION_PRESETS[1]);

  return (
    <Sample caption={caption}>
      <Slider
        color={color}
        value={value}
        onChange={(next) => setValue(next)}
        animation={animation}
        animationDuration={animationDuration}
        aria-label={caption}
      />
      <div className="flex gap-2">
        {MOTION_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            className={PRESET_BUTTON_CLASS}
            onClick={() => setValue(preset)}
          >
            {preset}
          </button>
        ))}
      </div>
    </Sample>
  );
}

/** Every flavour, size, variant, palette, motion and state at a glance. */
// Story params were: (_args, { globals })
export default function SliderShowcase() {
  const globals = {};
    const { color, direction } = getShowcaseTheme(globals);

    /**
     * The on-colour treatment is for a slider sitting on a coloured surface, so the matrix
     * shows it on the toolbar's own palette rather than a fixed black. The class comes from
     * the palette map, which holds literals — a `bg-${color}-500` would compile to nothing.
     * White is the exception: a white control on a white surface would be invisible.
     */
    const onColorSurface =
      color === "white" ? "bg-neutral-900" : getPaletteClasses(color).core;

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className={SHOWCASE_HEADER_WRAP_CLASS}>
          <h1 className={SHOWCASE_TITLE_CLASS}>Slider Component Showcase</h1>
          <p className={SHOWCASE_SUBTITLE_CLASS}>
            Visual reference for every flavour, size, variant, palette, motion
            and state
          </p>
        </div>

        <Section
          title="Flavours"
          description="Five ways to pick a value. All share one shell and one interaction core, so labels, ticks, keyboard behaviour and ARIA are identical across them."
          lazy={false}
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="Slider — one thumb, filled from the start">
              <Slider
                color={color}
                defaultValue={40}
                valueDisplay={{ placement: "thumb", trigger: "interaction" }}
              />
            </Sample>
            <Sample caption="Slider.Range — a span between two thumbs">
              <Slider.Range color={color} defaultValue={[20, 70]} />
            </Sample>
            <Sample caption="Slider.Color — a hue rail">
              <Slider.Color aria-label="Hue" defaultValue={200} max={360} />
            </Sample>
            <Sample caption="Slider.Opacity — alpha over a checkerboard">
              <Slider.Opacity
                aria-label="Opacity"
                defaultValue={70}
                color={color}
              />
            </Sample>
            <Sample caption="Slider.Gradient — stops on a ramp (Enter adds, Delete removes)">
              <Slider.Gradient
                aria-label="Gradient stops"
                defaultValue={[20, 60]}
                colors={["#f43f5e", "#f59e0b", "#22c55e"]}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Multi-thumb rules"
          description="What changes once a rail carries more than one handle: how close they may get, how many there may be, and what each one is called when it is read out."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="minDistance — neither thumb comes within 20 of the other">
              <Slider.Range
                color={color}
                defaultValue={[30, 60]}
                minDistance={20}
              />
            </Sample>
            <Sample caption="without it — either thumb may be pushed up to the other">
              <Slider.Range color={color} defaultValue={[30, 60]} />
            </Sample>
            <Sample caption="thumbLabels — what each handle answers to, in order">
              <Slider.Range
                color={color}
                defaultValue={[20, 80]}
                thumbLabels={["Lowest price", "Highest price"]}
              />
            </Sample>
            <Sample caption="maxThumbs — this ramp holds three stops and refuses a fourth">
              <Slider.Gradient
                aria-label="Gradient stops"
                defaultValue={[25, 75]}
                maxThumbs={3}
                colors={["#6366f1", "#ec4899"]}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Sizes"
          description="Track thickness steps 4 / 6 / 8 / 10 / 12px, with the thumb and the corner radius scaling alongside it."
        >
          <div className={CARD_CLASS}>
            {SIZES.map((size) => (
              <div key={size} className="flex items-center gap-3">
                <span
                  className={CAPTION_CLASS}
                  style={{ width: SIZE_LABEL_WIDTH }}
                >
                  {size}
                </span>
                <div className="flex-1">
                  <Slider color={color} size={size} defaultValue={45} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Thumb"
          description="`thumb` settles two questions at once: `size` is how big the handle is, `type` is what shape it takes. A pill and a circle of the same size share a height and differ only across the axis they travel."
        >
          <div className={GRID_2_CLASS}>
            {THUMB_TYPES.map((type) => (
              <Sample key={type} caption={`type: ${type}`}>
                <Slider
                  color={color}
                  defaultValue={55}
                  thumb={{ type }}
                  aria-label={type}
                />
              </Sample>
            ))}
          </div>
          <div className={CARD_CLASS}>
            <span className={CAPTION_CLASS}>
              size, independent of the track — every one here sits on the same
              `base` rail
            </span>
            {SIZES.map((thumbSize) => (
              <div key={thumbSize} className="flex items-center gap-3">
                <span
                  className={CAPTION_CLASS}
                  style={{ width: SIZE_LABEL_WIDTH }}
                >
                  {thumbSize}
                </span>
                <div className="flex-1">
                  <Slider
                    color={color}
                    defaultValue={45}
                    thumb={{ size: thumbSize }}
                    aria-label={thumbSize}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Style variants"
          description="How the track is drawn behind the fill, and whether the thumb is filled or hollow."
        >
          <div className={GRID_2_CLASS}>
            {VARIANTS.map((variant) => (
              <Sample key={variant} caption={variant}>
                <Slider color={color} variant={variant} defaultValue={55} />
              </Sample>
            ))}
          </div>
        </Section>

        <Section
          title="Appearances"
          description="Strong tints the track with the palette, so the control sits in one colour family; dualTone leaves the track neutral under a palette fill. On-colour renders white on a coloured surface."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="strong — track tinted with the palette">
              <Slider color={color} appearance="strong" defaultValue={55} />
            </Sample>
            <Sample caption="dualTone — neutral track, palette fill">
              <Slider color={color} appearance="dualTone" defaultValue={55} />
            </Sample>
            <div className={`${CARD_CLASS} ${onColorSurface}`}>
              <span className={CAPTION_ON_DARK_CLASS}>
                onColor — on a coloured surface
              </span>
              <Slider appearance="onColor" defaultValue={55} />
            </div>
          </div>
        </Section>

        <Section
          title="Variant × appearance"
          description="The two style axes crossed. Down a column: `solid` and `solid-outline` paint the unfilled track, while `outline` and `ghost` leave it transparent and differ only in the hairline. Across a row: `strong` tints the track with the palette, `dualTone` leaves it neutral, and `onColor` drops the palette altogether for white on a coloured surface — which is why that column is drawn on one."
        >
          <Matrix
            rows={VARIANTS}
            cols={APPEARANCES}
            cellClassName={(appearance) =>
              appearance === "onColor"
                ? cn("rounded-lg p-3", onColorSurface)
                : undefined
            }
          >
            {(variant, appearance) => (
              <Slider
                color={color}
                variant={variant}
                appearance={appearance}
                defaultValue={55}
                aria-label={`${variant} ${appearance}`}
              />
            )}
          </Matrix>
        </Section>

        <Section
          title="Size × thumb type"
          description="Every handle shape at every track thickness. The thumb scales with the track by default, and the narrow types hit a floor before the track does: a `bar` at `xs` computes to 2px and is held at 4, because a proportional handle there is one a pointer cannot catch and a hairline display may not draw at all."
        >
          <Matrix rows={SIZES} cols={THUMB_TYPES}>
            {(size, type) => (
              <Slider
                color={color}
                size={size}
                thumb={{ type }}
                defaultValue={55}
                aria-label={`${size} ${type}`}
              />
            )}
          </Matrix>
        </Section>

        <Section
          title="Track and shape"
          description="Three knobs that leave the palette alone: what the unfilled rail is painted, how its corners are cut, and how much air the text around it gets."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="default — a neutral rail behind the fill">
              <Slider
                color={color}
                defaultValue={55}
                aria-label="Default track"
              />
            </Sample>
            <Sample caption="trackColor — a raw CSS colour, so it does not shift in a dark theme">
              <Slider
                color={color}
                defaultValue={55}
                trackColor="#c7d2fe"
                aria-label="Custom track"
              />
            </Sample>
          </div>
          <div className={CARD_CLASS}>
            <span className={CAPTION_CLASS}>
              rounded — track and thumb together, over the theme&apos;s own
              radius. Shown on a square thumb: every other shape is already
              defined by its outline and ignores this.
            </span>
            {ROUNDINGS.map((rounded) => (
              <div key={rounded} className="flex items-center gap-3">
                <span
                  className={CAPTION_CLASS}
                  style={{ width: SIZE_LABEL_WIDTH }}
                >
                  {rounded}
                </span>
                <div className="flex-1">
                  <Slider
                    color={color}
                    size="xl"
                    rounded={rounded}
                    thumb={{ type: "square" }}
                    defaultValue={45}
                    aria-label={rounded}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={GRID_2_CLASS}>
            {SPACINGS.map((spacing) => (
              <Sample key={spacing} caption={`spacing: ${spacing}`}>
                <Slider color={color} spacing={spacing} defaultValue={45}>
                  <Slider.Label>Volume</Slider.Label>
                  <Slider.Description>
                    Applies to every output
                  </Slider.Description>
                </Slider>
              </Sample>
            ))}
          </div>
        </Section>

        <Section
          title="Origin"
          description="`origin` moves the point the fill grows out of. The default reads as 'this much of the range'; an origin reads as 'this far from here', which is what a balance, a pan or an EQ band actually measures. Single-thumb only — a range already fills between its own two thumbs."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="no origin — the fill runs from min">
              <Slider
                color={color}
                defaultValue={70}
                valueDisplay={{ placement: "inline" }}
                aria-label="From min"
              />
            </Sample>
            <Sample caption="origin={50} — above centre, the fill runs to the right">
              <Slider
                color={color}
                origin={50}
                defaultValue={72}
                valueDisplay={{ placement: "inline" }}
                aria-label="Above centre"
              />
            </Sample>
            <Sample caption="origin={50} — below it, the same fill, mirrored">
              <Slider
                color={color}
                origin={50}
                defaultValue={28}
                valueDisplay={{ placement: "inline" }}
                aria-label="Below centre"
              />
            </Sample>
            <Sample caption="origin={max} — the fill hangs back from the top">
              <Slider
                color={color}
                origin={100}
                defaultValue={65}
                valueDisplay={{ placement: "inline" }}
                aria-label="From max"
              />
            </Sample>
          </div>
          <div className={CARD_CLASS}>
            <span className={CAPTION_CLASS}>
              a signed range, where the origin sits where the unit says zero is
              — a cut fills to the left of it, a boost to the right
            </span>
            <Slider
              color={color}
              min={-12}
              max={12}
              origin={0}
              defaultValue={-5}
              valueDisplay={{
                placement: "inline",
                format: (value) => `${value > 0 ? "+" : ""}${value} dB`,
              }}
              getAriaValueText={(value) =>
                `${value > 0 ? "plus " : ""}${value} decibels`
              }
              aria-label="Gain"
            />
          </div>
        </Section>

        <Section
          title="Marks"
          description="`marks` draws the ticks and, when it lists explicit values, restricts the thumb to them."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="marks — one tick per step">
              <Slider color={color} marks step={25} defaultValue={50} />
            </Sample>
            <Sample caption="marks.labels — captioned ticks">
              <Slider
                color={color}
                marks={{ values: true, labels: true }}
                step={25}
                defaultValue={50}
              />
            </Sample>
            <Sample caption="explicit values — the only resting points">
              <Slider
                color={color}
                marks={{ values: [0, 15, 35, 67, 100], labels: true }}
                defaultValue={35}
              />
            </Sample>
            <Sample caption="captioned stops">
              <Slider
                color={color}
                marks={{
                  values: [
                    { value: 0, label: "Off" },
                    { value: 50, label: "Half" },
                    { value: 100, label: "Full" },
                  ],
                  labels: true,
                }}
                defaultValue={50}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Tick style"
          description="`marks.type` decides how a tick is drawn and `marks.placement` decides where it sits — both travel in the same prop as the values they describe. On the rail a dot rests inside the track, a stop the thumb can settle on, while a line crosses it and stands clear at each end, a division of the scale. Placement takes the rail's own axis — `top`/`bottom` across a horizontal rail, `start`/`end` beside a vertical one — and a value from the wrong axis is read as the matching side rather than dropped."
        >
          <div className={GRID_2_CLASS}>
            {MARK_TYPES.map((markType) => (
              <Sample key={markType} caption={`markType: ${markType}`}>
                <Slider
                  color={color}
                  marks={{ values: true, type: markType }}
                  step={25}
                  defaultValue={50}
                  aria-label={markType}
                />
              </Sample>
            ))}
          </div>
          <div className={CARD_CLASS}>
            <span className={CAPTION_CLASS}>
              placement on a horizontal rail, captions following the ticks out
            </span>
            {(["top", "bottom"] as const).map((markPlacement) =>
              MARK_TYPES.map((markType) => (
                <div
                  key={`${markPlacement}-${markType}`}
                  className="flex items-center gap-3"
                >
                  <span
                    className={CAPTION_CLASS}
                    style={{ width: SIZE_LABEL_WIDTH * 2 }}
                  >
                    {markPlacement} · {markType}
                  </span>
                  <div className="flex-1">
                    <Slider
                      color={color}
                      marks={{
                        values: [0, 25, 50, 75, 100],
                        labels: true,
                        type: markType,
                        placement: markPlacement,
                      }}
                      defaultValue={50}
                      aria-label={`${markPlacement} ${markType}`}
                    />
                  </div>
                </div>
              )),
            )}
          </div>
          <div className={CARD_CLASS}>
            <span className={CAPTION_CLASS}>
              placement on a vertical rail — start and end follow the page
              direction, so they swap with the toolbar
            </span>
            <div className={SHOWCASE_ROW_CLASS}>
              {(["start", "end"] as const).map((markPlacement) =>
                MARK_TYPES.map((markType) => (
                  <div
                    key={`${markPlacement}-${markType}`}
                    className="flex flex-col items-center gap-2"
                  >
                    <div style={{ height: VERTICAL_RAIL_HEIGHT }}>
                      <Slider
                        color={color}
                        orientation="vertical"
                        marks={{
                          values: [0, 50, 100],
                          labels: true,
                          type: markType,
                          placement: markPlacement,
                        }}
                        defaultValue={50}
                        aria-label={`${markPlacement} ${markType}`}
                      />
                    </div>
                    <span className={CAPTION_CLASS}>
                      {markPlacement} · {markType}
                    </span>
                  </div>
                )),
              )}
            </div>
          </div>
        </Section>

        <Section
          title="Thumb tooltip"
          description="`tooltip` puts the design system's Tooltip on every handle. It portals out of the rail, so it is never clipped by a container the slider sits in, and it brings the arrow, the delays and the dismiss behaviour every other tooltip on the page has. `valueDisplay: { placement: 'thumb' }` draws its read-out with the same Tooltip."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="tooltip — the formatted value, on hover">
              <Slider
                color={color}
                defaultValue={40}
                tooltip
                aria-label="Volume"
              />
            </Sample>
            <Sample caption="content — anything, per thumb">
              <Slider
                color={color}
                defaultValue={40}
                tooltip={{ content: (value) => `${value}% of full` }}
                aria-label="Volume"
              />
            </Sample>
            <Sample caption="placement and trigger">
              <Slider
                color={color}
                defaultValue={40}
                tooltip={{ placement: "bottom", trigger: "click" }}
                aria-label="Volume"
              />
            </Sample>
            <Sample caption="a range names each end">
              <Slider.Range
                color={color}
                defaultValue={[20, 80]}
                tooltip={{
                  content: (value, index) =>
                    `${index === 0 ? "from" : "to"} ${value}`,
                }}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Value read-out"
          description="`thumb` follows the handle; the parked placements sit in a fixed spot relative to the control."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="thumb — floats above the handle">
              <Slider
                color={color}
                defaultValue={40}
                valueDisplay={{ placement: "thumb" }}
              />
            </Sample>
            <Sample caption="thumb, on interaction only">
              <Slider
                color={color}
                defaultValue={40}
                valueDisplay={{ placement: "thumb", trigger: "interaction" }}
              />
            </Sample>
            <Sample caption="inline — beside the rail">
              <Slider
                color={color}
                defaultValue={40}
                valueDisplay={{ placement: "inline", format: (v) => `${v}%` }}
              />
            </Sample>
            <Sample caption="bottom — under the rail">
              <Slider
                color={color}
                defaultValue={40}
                valueDisplay={{ placement: "bottom", align: "end" }}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Composed text"
          description="Slider.Label and Slider.Description take any content and sit on any of twelve points around the rail. The label also names the control through aria-labelledby."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="label above, description below">
              <Slider color={color} defaultValue={40}>
                <Slider.Label>Volume</Slider.Label>
                <Slider.Description>Applies to every output</Slider.Description>
              </Slider>
            </Sample>
            <Sample caption="label beside the rail">
              <Slider color={color} defaultValue={40}>
                <Slider.Label placement="start">Volume</Slider.Label>
              </Slider>
            </Sample>
            <Sample caption="label and read-out at opposite ends">
              <Slider
                color={color}
                defaultValue={40}
                valueDisplay={{ placement: "top", align: "end" }}
              >
                <Slider.Label placement="top-start">Brightness</Slider.Label>
              </Slider>
            </Sample>
            <Sample caption="description only">
              <Slider color={color} defaultValue={40} aria-label="Volume">
                <Slider.Description placement="bottom-end">
                  Drag to adjust
                </Slider.Description>
              </Slider>
            </Sample>
          </div>
        </Section>

        <Section
          title="Placement × side"
          description="The twelve points a text block can sit on, as the side it sits against and where along that side it sits. `top` and `bottom` blocks span the track's width; `start` and `end` sit beside it and take width from the rail. A thirteenth value, `none`, drops the block without removing it from the accessible name."
        >
          <Matrix
            rows={PLACEMENT_SIDES}
            cols={PLACEMENT_ALIGNMENTS}
            cellWidth={PLACEMENT_CELL_WIDTH}
          >
            {(side, alignment) => {
              const placement = placementAt(side, alignment);
              return (
                <div className="flex flex-col gap-2">
                  <span className={CAPTION_CLASS}>{placement}</span>
                  <Slider color={color} size="sm" defaultValue={40}>
                    <Slider.Label placement={placement}>Volume</Slider.Label>
                  </Slider>
                </div>
              );
            }}
          </Matrix>
        </Section>

        <Section
          title="Orientation"
          description="A vertical slider fills bottom to top. `inverted` flips either axis, and the arrow keys follow the rail rather than the abstract range."
        >
          <div className={CARD_CLASS}>
            <div className={SHOWCASE_ROW_CLASS}>
              {(
                [
                  { caption: "horizontal", props: {} },
                  {
                    caption: "horizontal, inverted",
                    props: { inverted: true },
                  },
                ] as const
              ).map(({ caption, props }) => (
                <div key={caption} className="flex flex-col gap-2 flex-1">
                  <span className={CAPTION_CLASS}>{caption}</span>
                  <Slider color={color} defaultValue={30} {...props} />
                </div>
              ))}
            </div>
            <div className={SHOWCASE_ROW_CLASS}>
              {(
                [
                  { caption: "vertical", props: {} },
                  { caption: "vertical, inverted", props: { inverted: true } },
                ] as const
              ).map(({ caption, props }) => (
                <div key={caption} className="flex flex-col items-center gap-2">
                  <div style={{ height: VERTICAL_RAIL_HEIGHT }}>
                    <Slider
                      color={color}
                      orientation="vertical"
                      defaultValue={30}
                      {...props}
                    />
                  </div>
                  <span className={CAPTION_CLASS}>{caption}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          title="Direction"
          description="A horizontal rail is the one part of this component with an inline axis, so it is the one part that reverses. Direction comes from the theme, which reads `<html dir>` — there is no prop, and a `dir` on a single element inside the page is not read."
        >
          <div className={CARD_CLASS}>
            <span className={CAPTION_CLASS}>
              The toolbar&apos;s Direction control currently reads{" "}
              <strong>{direction}</strong>. Flip it and every horizontal rail
              below reverses, the fill included; the vertical one does not move.
            </span>
            <div className={SHOWCASE_ROW_CLASS}>
              <div className="flex flex-col gap-2 flex-1">
                <span className={CAPTION_CLASS}>
                  a plain rail — fills from the inline start
                </span>
                <Slider color={color} defaultValue={35} aria-label="Plain" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <span className={CAPTION_CLASS}>
                  inverted — flips the axis again, so the two compose
                </span>
                <Slider
                  color={color}
                  defaultValue={35}
                  inverted
                  aria-label="Inverted"
                />
              </div>
            </div>
            <div className={SHOWCASE_ROW_CLASS}>
              <div className="flex flex-col gap-2 flex-1">
                <span className={CAPTION_CLASS}>
                  ticks and their captions follow the rail
                </span>
                <Slider
                  color={color}
                  defaultValue={50}
                  marks={{ values: true, labels: true }}
                  step={25}
                  aria-label="Marks"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div style={{ height: VERTICAL_RAIL_HEIGHT }}>
                  <Slider
                    color={color}
                    orientation="vertical"
                    defaultValue={35}
                    aria-label="Vertical"
                  />
                </div>
                <span className={CAPTION_CLASS}>
                  vertical — no inline axis to reverse
                </span>
              </div>
            </div>
            <span className={CAPTION_CLASS}>
              Left and Right swap with the rail; Up and Down never do — which is
              what a native `input[type=range]` does in the same direction.
            </span>
          </div>
        </Section>

        <Section
          title="States"
          description="Disabled mutes the control and removes it from the tab order. Read-only keeps both — the value is being reported, not collected."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="default">
              <Slider color={color} defaultValue={55} aria-label="Default" />
            </Sample>
            <Sample caption="disabled — muted and out of the tab order">
              <Slider
                color={color}
                defaultValue={55}
                disabled
                aria-label="Disabled"
              />
            </Sample>
            <Sample caption="readOnly — full colour, focusable, not movable">
              <Slider
                color={color}
                defaultValue={55}
                readOnly
                aria-label="Read only"
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Variant × state"
          description="How each variant mutes. Disabled drains the palette out of track, fill and thumb alike; read-only keeps every colour and changes only the cursor, which is the point — the value is still being reported, so it should still look like a value."
        >
          <Matrix rows={VARIANTS} cols={STATES}>
            {(variant, state) => (
              <Slider
                color={color}
                variant={variant}
                defaultValue={55}
                disabled={state === "disabled"}
                readOnly={state === "readOnly"}
                aria-label={`${variant} ${state}`}
              />
            )}
          </Matrix>
        </Section>

        <Section
          title="Motion"
          description="`animation` eases the fill and the handle to a value the page set — press a preset to see it. A drag is always followed exactly, because a handle easing towards the pointer reads as lag, and the whole thing is dropped when the platform reports `prefers-reduced-motion` (these will jump rather than ease if yours does)."
        >
          <div className={GRID_2_CLASS}>
            <MotionSample color={color} caption="default — 150ms, ease-out" />
            <MotionSample
              color={color}
              animation={false}
              caption="animation={false} — the value lands with no travel"
            />
            <MotionSample
              color={color}
              animationDuration={600}
              caption="animationDuration={600} — slow enough to watch the easing"
            />
            <MotionSample
              color={color}
              animationDuration={50}
              caption="animationDuration={50} — on, but barely"
            />
          </div>
        </Section>

        <Section
          title="Accessibility"
          description="What a screen reader hears, and what a finger can hit. The rest of the contract — role, the value triple, the orientation and the disabled and read-only states — is set by the component and needs nothing from the page."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="an xs bar thumb travels on 4px — its pointer target is still 24×24">
              <Slider
                color={color}
                size="xs"
                thumb={{ type: "bar" }}
                defaultValue={55}
                aria-label="Fine control"
              />
            </Sample>
            <Sample caption="a captioned tick is announced instead of its number — this reads 'Half'">
              <Slider
                color={color}
                marks={{
                  values: [
                    { value: 0, label: "Off" },
                    { value: 50, label: "Half" },
                    { value: 100, label: "Full" },
                  ],
                  labels: true,
                }}
                defaultValue={50}
                aria-label="Fan speed"
              />
            </Sample>
            <Sample caption="getAriaValueText — spells out the unit the number is in">
              <Slider
                color={color}
                defaultValue={40}
                getAriaValueText={(value) => `${value} percent`}
                valueDisplay={{
                  placement: "inline",
                  format: (value) => `${value}%`,
                }}
                aria-label="Volume"
              />
            </Sample>
            <Sample caption="name — renders a hidden input, so the value posts with the form">
              <Slider
                color={color}
                name="volume"
                defaultValue={40}
                aria-label="Volume"
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Semantic palettes"
          description="The framework's own palettes. Each is a literal entry in the compiled palette map."
        >
          <div className={CARD_CLASS}>
            {SEMANTIC_PALETTES.map((palette) => (
              <div key={palette} className="flex items-center gap-3">
                <span
                  className={CAPTION_CLASS}
                  style={{ width: SIZE_LABEL_WIDTH * 2 }}
                >
                  {palette}
                </span>
                <div className="flex-1">
                  <Slider
                    color={palette}
                    defaultValue={60}
                    aria-label={palette}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Extended palettes"
          description="The accent slots from iui.config.ts, minus the ones that duplicate a semantic palette."
        >
          <div className={CARD_CLASS}>
            {EXTENDED_PALETTES.map((palette) => (
              <div key={palette} className="flex items-center gap-3">
                <span
                  className={CAPTION_CLASS}
                  style={{ width: SIZE_LABEL_WIDTH * 2 }}
                >
                  {palette}
                </span>
                <div className="flex-1">
                  <Slider
                    color={palette}
                    defaultValue={60}
                    aria-label={palette}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </ShowcaseShell>
    );
  }
