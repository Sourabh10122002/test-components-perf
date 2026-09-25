// Showcase ported from origin/progress:src/components/Progress/stories/Progress.stories.tsx
import React from "react";
import { Progress } from "@inventive-ui/components/Progress";
import { getPaletteClasses } from "../story-helpers/Progress/palette";
import type { ProgressAppearance, ProgressCircularSize, ProgressPlacement, ProgressSize, ProgressVariant } from "@inventive-ui/components/Progress";
import { availableColorPalettes, cn } from "@inventive-ui/framework";
import { LazySection } from "../storybook";
import { getStorybookColorOptions, getStorybookAccentColorKeys } from "../storybook";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS, SHOWCASE_HEADER_WRAP_CLASS, SHOWCASE_TITLE_CLASS, SHOWCASE_SUBTITLE_CLASS, SHOWCASE_SECTION_CLASS, SHOWCASE_SECTION_TITLE_CLASS, SHOWCASE_SECTION_DESC_CLASS, SHOWCASE_ROW_CLASS, SHOWCASE_SCROLL_X_CLASS, SHOWCASE_PALETTE_GRID_CLASS } from "../storybook";
const MATRIX_CELL_WIDTH = 192;
const VERTICAL_BAR_HEIGHT = 128;
const SIZE_LABEL_WIDTH = 40;

const CARD_CLASS =
  "flex flex-col gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700";
const DARK_CARD_CLASS = "flex flex-col gap-3 p-4 rounded-lg bg-neutral-900";
const CAPTION_CLASS = "text-xs text-neutral-500 dark:text-neutral-400";
const CAPTION_ON_DARK_CLASS = "text-xs text-white/80";
const GRID_2_CLASS = "grid grid-cols-2 gap-4";
const GRID_3_CLASS = "grid grid-cols-2 md:grid-cols-3 gap-4";
const SUBHEAD_CLASS =
  "text-lg font-semibold text-neutral-800 dark:text-neutral-100";
const STAT_LABEL_CLASS =
  "text-sm font-medium text-neutral-700 dark:text-neutral-200";

const SIZES: ProgressSize[] = ["xs", "sm", "base", "lg", "xl"];

/** The ring runs three steps past the bar. @see ProgressCircularSize */
const CIRCULAR_SIZES_LIST: ProgressCircularSize[] = [
  ...SIZES,
  "2xl",
  "3xl",
  "4xl",
];

const PLACEMENTS: ProgressPlacement[] = [
  "top-start",
  "top",
  "top-end",
  "start-top",
  "start",
  "start-bottom",
  "end-top",
  "end",
  "end-bottom",
  "bottom-start",
  "bottom",
  "bottom-end",
  "none",
];
const VARIANTS: ProgressVariant[] = [
  "solid",
  "solid-outline",
  "outline",
  "ghost",
];
const APPEARANCES: ProgressAppearance[] = ["strong", "dualTone", "onColor"];
/**
 * Colour options come from `iui.config.ts` through Storybook's shared getters. Progress
 * builds its classes from the palette token, so anything the config defines is paintable —
 * the filter only keeps out tokens with no theme colours behind them, which would render a
 * bar the browser paints with an undefined variable.
 */
const PAINTABLE_PALETTES = new Set(getStorybookColorOptions());
const paintable = (color: string) => PAINTABLE_PALETTES.has(color);

/** The framework's own palettes — the showcase's "Semantic" grid. */
const SEMANTIC_PALETTES = availableColorPalettes.filter(paintable);

/**
 * The config's accent slots — the "Extended" grid. Slots that duplicate a framework palette
 * are dropped here for the same reason `getStorybookColorOptions` drops them: `white` is
 * both, and it belongs with the semantic set rather than appearing in both grids.
 */
const EXTENDED_PALETTES = getStorybookAccentColorKeys().filter(
  (color) =>
    paintable(color) &&
    // The framework types this as a union of its own palette names, so widen to compare.
    !(availableColorPalettes as readonly string[]).includes(color),
);

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

/** A showcase section. Everything but the first is mounted lazily, as Button does. */
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

  return lazy ? <LazySection estimatedHeight={320}>{body}</LazySection> : body;
}

/** Every flavour, size, variant, palette and state at a glance. */
// Story params were: (_args, { globals })
export default function ProgressShowcase() {
  const globals = {};
    const color = getShowcaseTheme(globals).color;

    /**
     * The on-colour treatment is for a bar sitting on a coloured surface, so the matrix
     * shows it on the toolbar's own palette rather than a fixed black. The class comes from
     * the palette map, which holds literals — a `bg-${color}-500` would compile to nothing.
     * White is the exception: a white bar on a white surface would be invisible.
     */
    const onColorSurface =
      color === "white" ? "bg-neutral-900" : getPaletteClasses(color).core;

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className={SHOWCASE_HEADER_WRAP_CLASS}>
          <h1 className={SHOWCASE_TITLE_CLASS}>Progress Component Showcase</h1>
          <p className={SHOWCASE_SUBTITLE_CLASS}>
            Visual reference for every flavour, size, variant, palette and state
          </p>
        </div>

        <Section
          title="Flavours"
          description="Four ways to draw progress, two of which can be drawn as segments. All share one shell, so label, description, read-out and ARIA behave identically."
          lazy={false}
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="Progress.Linear — tracks a value">
              <Progress
                color={color}
                value={40}
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
            <Sample caption="Progress.Linear indeterminate — unknown length">
              <Progress.Linear indeterminate color={color} />
            </Sample>
            <Sample caption="Progress.Dashed — countable steps">
              <Progress.Dashed color={color} value={60} />
            </Sample>
            <Sample caption="Progress.Striped — striped fill">
              <Progress.Striped color={color} value={60}>
                <Progress.Label>Transferring</Progress.Label>
              </Progress.Striped>
            </Sample>
            <Sample caption="Progress.Circular — ring">
              <Progress.Circular
                color={color}
                value={65}
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
            <Sample caption="Progress.Circular dashed — tick scale">
              <Progress.Circular
                color={color}
                dashed
                size="2xl"
                value={65}
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Sizes"
          description="Bars step 2px a size, 4px through 12px. The ring steps 8px and runs three sizes further."
        >
          <div className={GRID_2_CLASS}>
            <div className={CARD_CLASS}>
              <span className={CAPTION_CLASS}>Bars</span>
              {SIZES.map((size) => (
                <div key={size} className="flex items-center gap-3">
                  <span
                    className={CAPTION_CLASS}
                    style={{ width: SIZE_LABEL_WIDTH }}
                  >
                    {size}
                  </span>
                  <div className="flex-1">
                    <Progress color={color} size={size} value={45} />
                  </div>
                </div>
              ))}
            </div>
            <div className={CARD_CLASS}>
              <span className={CAPTION_CLASS}>Rings</span>
              <div className={SHOWCASE_ROW_CLASS}>
                {CIRCULAR_SIZES_LIST.map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <Progress.Circular color={color} size={size} value={65} />
                    <span className={CAPTION_CLASS}>{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Style variants"
          description="How the track is drawn behind the fill, across every appearance."
        >
          <div className={SHOWCASE_SCROLL_X_CLASS}>
            <table className="w-full" style={{ minWidth: "max-content" }}>
              <thead>
                <tr>
                  <th className={`${CAPTION_CLASS} p-3 text-left`} />
                  {APPEARANCES.map((appearance) => (
                    <th
                      key={appearance}
                      className={`${CAPTION_CLASS} p-3 text-left`}
                    >
                      {appearance}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VARIANTS.map((variant) => (
                  <tr key={variant}>
                    <td className={`${CAPTION_CLASS} p-3`}>{variant}</td>
                    {APPEARANCES.map((appearance) => (
                      <td key={appearance} className="p-3">
                        <div
                          className={
                            appearance === "onColor"
                              ? cn("rounded-lg p-3", onColorSurface)
                              : undefined
                          }
                          style={{ width: MATRIX_CELL_WIDTH }}
                        >
                          <Progress
                            color={color}
                            variant={variant}
                            appearance={appearance}
                            value={55}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          title="Colour palette"
          description="Both grids come from iui.config: the framework's semantic palettes, then the accent slots the config defines."
        >
          <h3 className={SUBHEAD_CLASS}>Semantic</h3>
          <div className={SHOWCASE_PALETTE_GRID_CLASS}>
            {SEMANTIC_PALETTES.map((palette) => (
              <Sample key={palette} caption={palette}>
                <Progress color={palette} value={65} />
              </Sample>
            ))}
          </div>
          <h3 className={SUBHEAD_CLASS}>Accent</h3>
          <div className={SHOWCASE_PALETTE_GRID_CLASS}>
            {EXTENDED_PALETTES.map((palette) => (
              <Sample key={palette} caption={palette}>
                <Progress color={palette} value={65} />
              </Sample>
            ))}
          </div>
        </Section>

        <Section
          title="Value read-out"
          description="Placement puts the read-out above, beside or below the bar; align moves it within its row."
        >
          <div className={GRID_3_CLASS}>
            {(["above", "inline", "below"] as const).map((placement) => (
              <Sample key={placement} caption={`placement: ${placement}`}>
                <Progress
                  color={color}
                  value={70}
                  valueDisplay={{ placement }}
                />
              </Sample>
            ))}
            {(["start", "middle", "end"] as const).map((align) => (
              <Sample key={align} caption={`align: ${align}`}>
                <Progress
                  color={color}
                  value={70}
                  valueDisplay={{ placement: "above", align }}
                />
              </Sample>
            ))}
            <Sample caption="format: value / max">
              <Progress
                color={color}
                value={7}
                max={12}
                valueDisplay={{
                  placement: "inline",
                  format: (value, max) => `${value}/${max}`,
                }}
              />
            </Sample>
            <Sample caption="text: literal override">
              <Progress
                color={color}
                value={70}
                valueDisplay={{ placement: "inline", text: "Almost there" }}
              />
            </Sample>
            <Sample caption="placement: none (default)">
              <Progress color={color} value={70} />
            </Sample>
          </div>
        </Section>

        <Section
          title="Placement"
          description="The twelve-point set: a side, then where the block sits along it. Top and bottom blocks span the bar; start and end blocks sit beside it."
        >
          <div className={GRID_3_CLASS}>
            {PLACEMENTS.filter((placement) => placement !== "none").map(
              (placement) => (
                <Sample key={placement} caption={placement}>
                  <Progress color={color} value={45}>
                    <Progress.Label placement={placement}>
                      Restoring
                    </Progress.Label>
                  </Progress>
                </Sample>
              ),
            )}
          </div>
        </Section>

        <Section
          title="Label and description"
          description="Both are full-width blocks above or below the bar. The -start / -end suffix only sets text alignment."
        >
          <div className={GRID_2_CLASS}>
            {(
              ["top-start", "top-end", "bottom-start", "bottom-end"] as const
            ).map((placement) => (
              <Sample key={placement} caption={placement}>
                <Progress color={color} value={45}>
                  <Progress.Label placement={placement}>
                    Restoring backup
                  </Progress.Label>
                </Progress>
              </Sample>
            ))}
            <Sample caption="label above, description below">
              <Progress color={color} value={45}>
                <Progress.Label>Restoring backup</Progress.Label>
                <Progress.Description>2 minutes remaining</Progress.Description>
              </Progress>
            </Sample>
            <Sample caption="label, description and read-out together">
              <Progress
                color={color}
                value={45}
                valueDisplay={{ placement: "above", align: "end" }}
              >
                <Progress.Label>Restoring backup</Progress.Label>
                <Progress.Description>2 minutes remaining</Progress.Description>
              </Progress>
            </Sample>
          </div>
        </Section>

        <Section
          title="Orientation"
          description="A vertical bar fills bottom to top and takes its height from the container."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {[25, 50, 75, 100].map((value) => (
              <div key={value} className={CARD_CLASS}>
                <span className={CAPTION_CLASS}>{value}%</span>
                <div style={{ height: VERTICAL_BAR_HEIGHT }}>
                  <Progress
                    color={color}
                    orientation="vertical"
                    value={value}
                  />
                </div>
              </div>
            ))}
            <div className={CARD_CLASS}>
              <span className={CAPTION_CLASS}>vertical indeterminate</span>
              <div style={{ height: VERTICAL_BAR_HEIGHT }}>
                <Progress.Linear
                  indeterminate
                  color={color}
                  orientation="vertical"
                />
              </div>
            </div>
            <div className={CARD_CLASS}>
              <span className={CAPTION_CLASS}>with label and description</span>
              <div style={{ height: VERTICAL_BAR_HEIGHT }}>
                <Progress color={color} orientation="vertical" value={60}>
                  <Progress.Label>Disk</Progress.Label>
                  <Progress.Description>12 GB free</Progress.Description>
                </Progress>
              </div>
            </div>
            <div className={CARD_CLASS}>
              <span className={CAPTION_CLASS}>vertical dashed</span>
              <div style={{ height: VERTICAL_BAR_HEIGHT }}>
                <Progress.Dashed
                  color={color}
                  orientation="vertical"
                  value={60}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Dashed"
          description="Segment count, the gap between segments, explicit segment states, and the same sizes as the solid bar."
        >
          <div className={GRID_2_CLASS}>
            {[3, 5, 8, 12].map((dashCount) => (
              <Sample key={dashCount} caption={`dashCount: ${dashCount}`}>
                <Progress.Dashed
                  color={color}
                  value={60}
                  dashCount={dashCount}
                />
              </Sample>
            ))}
            <Sample caption="dashGap: 8 / 2 — a wide gap counts, a tight one measures">
              <Progress.Dashed
                color={color}
                value={60}
                dashCount={12}
                dashGap={8}
              />
              <Progress.Dashed
                color={color}
                value={60}
                dashCount={32}
                dashGap={2}
              />
            </Sample>
            <Sample caption="thickness: 24 — a tall tick scale">
              <Progress.Dashed
                color={color}
                value={60}
                dashCount={32}
                dashGap={2}
                thickness={24}
                rounded="none"
              />
            </Sample>
            <Sample caption="dashStates: explicit">
              <Progress.Dashed
                color={color}
                dashStates={[true, true, false, true, false]}
              />
            </Sample>
            <Sample caption="with label and read-out">
              <Progress.Dashed
                color={color}
                value={60}
                valueDisplay={{ placement: "inline" }}
              >
                <Progress.Label>Setup</Progress.Label>
              </Progress.Dashed>
            </Sample>
            <Sample caption="sizes">
              {SIZES.map((size) => (
                <Progress.Dashed
                  key={size}
                  color={color}
                  size={size}
                  value={60}
                />
              ))}
            </Sample>
            <Sample caption="disabled">
              <Progress.Dashed color={color} value={60} disabled />
            </Sample>
          </div>
        </Section>

        <Section
          title="Striped"
          description="A determinate bar with a travelling texture — for transfers that are measurable but ongoing."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="sizes">
              {SIZES.map((size) => (
                <Progress.Striped
                  key={size}
                  color={color}
                  size={size}
                  value={60}
                />
              ))}
            </Sample>
            <Sample caption="appearances">
              <Progress.Striped color={color} value={60} />
              <Progress.Striped
                color={color}
                appearance="dualTone"
                value={60}
              />
            </Sample>
            <Sample caption="stripe size: 4 / 8 / 16">
              {[4, 8, 16].map((stripeSize) => (
                <Progress.Striped
                  key={stripeSize}
                  color={color}
                  value={60}
                  stripeSize={stripeSize}
                />
              ))}
            </Sample>
            <Sample caption="still — animation off, and disabled">
              <Progress.Striped color={color} value={60} animation={false} />
              <Progress.Striped color={color} value={60} disabled />
            </Sample>
          </div>
        </Section>

        <Section
          title="Circular"
          description="Ring thickness, read-out, the dashed tick scale, spinner mode and surrounding text."
        >
          <div className={GRID_3_CLASS}>
            <Sample caption="values">
              <div className={SHOWCASE_ROW_CLASS}>
                {[25, 50, 75, 100].map((value) => (
                  <Progress.Circular
                    key={value}
                    color={color}
                    value={value}
                    valueDisplay={{ placement: "inline" }}
                  />
                ))}
              </div>
            </Sample>
            <Sample caption="variants">
              <div className={SHOWCASE_ROW_CLASS}>
                {VARIANTS.map((variant) => (
                  <div
                    key={variant}
                    className="flex flex-col items-center gap-2"
                  >
                    <Progress.Circular
                      color={color}
                      variant={variant}
                      value={65}
                    />
                    <span className={CAPTION_CLASS}>{variant}</span>
                  </div>
                ))}
              </div>
            </Sample>
            <Sample caption="thickness">
              <div className={SHOWCASE_ROW_CLASS}>
                {[2, 4, 8].map((thickness) => (
                  <Progress.Circular
                    key={thickness}
                    color={color}
                    value={65}
                    size="lg"
                    thickness={thickness}
                  />
                ))}
              </div>
            </Sample>
            <Sample caption="dashed — ticks instead of an arc">
              <div className={SHOWCASE_ROW_CLASS}>
                {[25, 50, 75, 100].map((value) => (
                  <Progress.Circular
                    key={value}
                    color={color}
                    dashed
                    size="2xl"
                    value={value}
                    valueDisplay={{ placement: "inline" }}
                  />
                ))}
              </div>
            </Sample>
            <Sample caption="dashed — dashCount: 12 / 24 / 40 / 60">
              <div className={SHOWCASE_ROW_CLASS}>
                {[12, 24, 40, 60].map((dashCount) => (
                  <Progress.Circular
                    key={dashCount}
                    color={color}
                    dashed
                    dashCount={dashCount}
                    size="2xl"
                    value={65}
                  />
                ))}
              </div>
            </Sample>
            <Sample caption="spinner">
              <div className={SHOWCASE_ROW_CLASS}>
                {CIRCULAR_SIZES_LIST.map((size) => (
                  <Progress.Circular
                    key={size}
                    color={color}
                    indeterminate
                    size={size}
                  />
                ))}
              </div>
            </Sample>
            <Sample caption="dashed spinner — the lit ticks turn">
              <div className={SHOWCASE_ROW_CLASS}>
                {["base", "lg", "2xl", "4xl"].map((size) => (
                  <Progress.Circular
                    key={size}
                    color={color}
                    dashed
                    indeterminate
                    size={size as ProgressCircularSize}
                  />
                ))}
              </div>
            </Sample>
            <Sample caption="dualTone appearance">
              <Progress.Circular
                color={color}
                appearance="dualTone"
                value={65}
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
            <Sample caption="with label and description">
              <Progress.Circular
                color={color}
                value={65}
                valueDisplay={{ placement: "inline" }}
              >
                <Progress.Label>Compressing</Progress.Label>
                <Progress.Description>4 of 6 folders</Progress.Description>
              </Progress.Circular>
            </Sample>
            <Sample caption="disabled">
              <Progress.Circular
                color={color}
                value={65}
                disabled
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="Indeterminate"
          description="The sweeping segment across sizes and variants. It reports no value, only that work is happening."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="sizes">
              {SIZES.map((size) => (
                <Progress.Linear
                  indeterminate
                  key={size}
                  color={color}
                  size={size}
                />
              ))}
            </Sample>
            <Sample caption="variants">
              {VARIANTS.map((variant) => (
                <Progress.Linear
                  indeterminate
                  key={variant}
                  color={color}
                  variant={variant}
                />
              ))}
            </Sample>
            <Sample caption="speed: 800ms / 1500ms / 2500ms">
              {[800, 1500, 2500].map((duration) => (
                <Progress.Linear
                  indeterminate
                  key={duration}
                  color={color}
                  animationDuration={duration}
                />
              ))}
            </Sample>
            <Sample caption="disabled — the sweep stops">
              <Progress.Linear indeterminate color={color} disabled />
            </Sample>
          </div>
        </Section>

        <Section
          title="States"
          description="Every state keeps the bar in the accessibility tree; disabled mutes it rather than hiding it."
        >
          <div className={GRID_3_CLASS}>
            <Sample caption="empty">
              <Progress color={color} value={0} />
            </Sample>
            <Sample caption="in progress">
              <Progress
                color={color}
                value={45}
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
            <Sample caption="complete">
              <Progress
                color="success"
                value={100}
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
            <Sample caption="failed">
              <Progress color="danger" value={35}>
                <Progress.Description>
                  Upload failed at 35%
                </Progress.Description>
              </Progress>
            </Sample>
            <Sample caption="disabled">
              <Progress
                color={color}
                value={45}
                disabled
                valueDisplay={{ placement: "inline" }}
              />
            </Sample>
            <Sample caption="animation off">
              <Progress color={color} value={45} animation={false} />
            </Sample>
            <Sample caption="custom track colour">
              <Progress color={color} value={45} trackColor="#e2e8f0" />
            </Sample>
            <Sample caption="adaptive off — keeps light shades in dark mode">
              <Progress color={color} value={45} adaptive={false} />
            </Sample>
            <Sample caption="max other than 100">
              <Progress
                color={color}
                value={7}
                max={12}
                valueDisplay={{
                  placement: "inline",
                  format: (value, max) => `${value}/${max}`,
                }}
              />
            </Sample>
          </div>
        </Section>

        <Section
          title="On a coloured background"
          description="appearance='onColor' swaps palette shades for white on translucent white, in both themes."
        >
          <div className={GRID_2_CLASS}>
            <Sample caption="on neutral-900" onDark>
              <Progress
                appearance="onColor"
                value={60}
                valueDisplay={{ placement: "inline" }}
              >
                <Progress.Label>Downloading</Progress.Label>
              </Progress>
              <Progress.Dashed appearance="onColor" value={60} />
              <Progress.Linear indeterminate appearance="onColor" />
            </Sample>
            <div
              className="flex flex-col gap-3 p-4 rounded-lg"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #4c1d95 0%, #2563eb 100%)",
              }}
            >
              <span className={CAPTION_ON_DARK_CLASS}>on a gradient</span>
              <Progress
                appearance="onColor"
                value={60}
                valueDisplay={{ placement: "inline" }}
              />
              <div className={SHOWCASE_ROW_CLASS}>
                <Progress.Circular
                  appearance="onColor"
                  value={60}
                  valueDisplay={{ placement: "inline" }}
                />
                <Progress.Circular appearance="onColor" indeterminate />
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="In context"
          description="How the flavours read inside real surfaces."
        >
          <div className={GRID_3_CLASS}>
            <div className={CARD_CLASS}>
              <span className={STAT_LABEL_CLASS}>Uploading assets</span>
              <Progress
                color={color}
                value={68}
                valueDisplay={{ placement: "above", align: "end" }}
              >
                <Progress.Description>12.4 MB of 18.2 MB</Progress.Description>
              </Progress>
            </div>

            <div className={CARD_CLASS}>
              <span className={STAT_LABEL_CLASS}>Storage</span>
              {[
                { label: "Documents", value: 42, palette: "info" },
                { label: "Media", value: 78, palette: "warning" },
                { label: "Backups", value: 94, palette: "danger" },
              ].map((row) => (
                <div key={row.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className={CAPTION_CLASS}>{row.label}</span>
                    <span
                      className={CAPTION_CLASS}
                      style={{ marginInlineStart: "auto" }}
                    >
                      {row.value}%
                    </span>
                  </div>
                  <Progress color={row.palette} size="sm" value={row.value} />
                </div>
              ))}
            </div>

            <div className={CARD_CLASS}>
              <span className={STAT_LABEL_CLASS}>Onboarding</span>
              <Progress.Dashed color={color} dashCount={5} value={60}>
                <Progress.Description>Step 3 of 5</Progress.Description>
              </Progress.Dashed>
              <span className={CAPTION_CLASS}>Next: connect a repository</span>
            </div>

            <div className={CARD_CLASS}>
              <span className={STAT_LABEL_CLASS}>Job queue</span>
              <Progress.Linear indeterminate color={color} size="sm">
                <Progress.Description>
                  Waiting for a runner…
                </Progress.Description>
              </Progress.Linear>
            </div>

            <div className={CARD_CLASS}>
              <span className={STAT_LABEL_CLASS}>System health</span>
              <div className={SHOWCASE_ROW_CLASS}>
                {[
                  { label: "CPU", value: 32, palette: "info" },
                  { label: "Memory", value: 61, palette: "warning" },
                  { label: "Disk", value: 88, palette: "danger" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <Progress.Circular
                      color={stat.palette}
                      value={stat.value}
                      valueDisplay={{ placement: "inline" }}
                    />
                    <span className={CAPTION_CLASS}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={CARD_CLASS}>
              <span className={STAT_LABEL_CLASS}>Deployment</span>
              <Progress
                color="success"
                value={100}
                valueDisplay={{ placement: "inline" }}
              >
                <Progress.Label>Build</Progress.Label>
              </Progress>
              <Progress
                color={color}
                value={45}
                valueDisplay={{ placement: "inline" }}
              >
                <Progress.Label>Deploy</Progress.Label>
              </Progress>
              <Progress color={color} value={0} disabled>
                <Progress.Label>Smoke tests</Progress.Label>
              </Progress>
            </div>
          </div>
        </Section>
      </ShowcaseShell>
    );
  }
