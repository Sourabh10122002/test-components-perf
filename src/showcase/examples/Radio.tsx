// Showcase ported from origin/radio:src/components/Radio/stories/Radio.stories.tsx
import React from "react";
import { Radio } from "@inventive-ui/components/Radio";
import type { RadioProps, RadioCardProps } from "@inventive-ui/components/Radio";
import { cn, semanticColors } from "@inventive-ui/framework";

import {
  RADIO_APPEARANCES,
  RADIO_CARD_UNSELECTED_APPEARANCES,
  RADIO_CARD_SELECTED_APPEARANCES,
} from "../story-helpers/Radio/constants";
import { LazySection } from "../storybook";
import { getStorybookAccentColorKeys } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_HEADER_WRAP_CLASS,
  SHOWCASE_SCROLL_X_CLASS,
  SHOWCASE_SECTION_CLASS,
  SHOWCASE_SECTION_DESC_CLASS,
  SHOWCASE_SECTION_TITLE_CLASS,
  SHOWCASE_SUBTITLE_CLASS,
  SHOWCASE_TITLE_CLASS,
} from "../storybook";

const SHOWCASE_SIZES: RadioProps["size"][] = ["xs", "sm", "base", "lg", "xl"];
const SHOWCASE_VARIANTS: RadioCardProps["variant"][] = [
  "solid",
  "solid-outline",
  "outline",
];

// ============================================================================
// SHOWCASE / OVERVIEW STORY
// ============================================================================

// Story chrome is authored inline, so every surface and text class carries its
// own light/dark pair — the Storybook canvas themes the background only.
// `gray-*` is not a 50–950 ramp in this theme (it paints nothing); use neutral.
const SC_PANEL =
  "rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900";
const SC_PANEL_PAD = cn(SC_PANEL, "p-6");
const SC_H3 = "text-sm font-semibold text-neutral-900 dark:text-neutral-100";
const SC_CAPTION =
  "text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400";
const SC_CODE = "font-mono text-xs text-neutral-600 dark:text-neutral-400";
const SC_TH =
  "px-5 py-3 text-start text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800";
const SC_ROW =
  "border-b border-neutral-200 dark:border-neutral-800 last:border-0";
const SC_ROW_HEAD = "px-5 py-5 align-middle";

const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Section heading + description, shared by every showcase block. */
const ShowcaseSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <section className={SHOWCASE_SECTION_CLASS}>
    <div>
      <h2 className={SHOWCASE_SECTION_TITLE_CLASS}>{title}</h2>
      <p className={SHOWCASE_SECTION_DESC_CLASS}>{description}</p>
    </div>
    {children}
  </section>
);

/**
 * onColor treatments are designed to sit on a filled palette surface, so they
 * are shown on the toolbar colour's 600 shade instead of the bare canvas.
 */
const OnColorSurface = ({
  color,
  enabled,
  children,
}: {
  color: string;
  enabled: boolean;
  children: React.ReactNode;
}) =>
  enabled ? (
    <div
      className="rounded-lg p-4"
      style={{ backgroundColor: `var(--iui-color-${color}-600)` }}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );

const SHOWCASE_GROUP_ITEMS = [
  { value: "1", label: "Starter", description: "Up to 3 projects" },
  { value: "2", label: "Pro", description: "Unlimited projects" },
  { value: "3", label: "Team", description: "Shared workspaces" },
];

/** Interactive group — each instance keeps its own selection. */
const ShowcaseGroup = ({
  title,
  direction = "row",
  columns,
  cards = false,
  indicator,
}: {
  title: string;
  direction?: "row" | "column" | "grid";
  columns?: number;
  cards?: boolean;
  indicator?: RadioCardProps["indicator"];
}) => {
  const [value, setValue] = React.useState("1");
  return (
    <div className={cn(SC_PANEL_PAD, "space-y-4")}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className={SC_H3}>{title}</h3>
        <code className={SC_CODE}>
          direction="{direction}"{columns ? ` columns={${columns}}` : ""}
        </code>
      </div>
      <Radio.Group
        direction={direction}
        columns={columns}
        value={value}
        onChange={(val) => val && setValue(val)}
      >
        {SHOWCASE_GROUP_ITEMS.map((item) =>
          cards ? (
            <Radio.Card
              key={item.value}
              {...item}
              indicator={indicator}
              variant="solid-outline"
              appearance="soft"
            />
          ) : (
            <Radio key={item.value} {...item} />
          ),
        )}
      </Radio.Group>
    </div>
  );
};

/**
 * Visual reference for every radio variant, appearance, size, colour and state.
 * Every combination is shown unselected *and* selected — an appearance that only
 * breaks while unselected is otherwise invisible here.
 */
export default function RadioShowcase() {
    const globals = {};
    const theme = getShowcaseTheme(globals);
    // `color` stays unset on the radios so the unselected state renders its
    // neutral default; the toolbar colour reaches the selected state through
    // theme.globalColor. It is only used directly for the onColor surfaces.
    const surfaceColor = theme.color ?? "brand";
    const variants = SHOWCASE_VARIANTS;
    const palettes = Array.from(
      new Set([
        ...Object.keys(semanticColors ?? {}),
        ...getStorybookAccentColorKeys(),
      ]),
    ).filter((c) => c !== "white" && c !== "black");

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <header className={SHOWCASE_HEADER_WRAP_CLASS}>
          <h1 className={SHOWCASE_TITLE_CLASS}>Radio</h1>
          <p className={SHOWCASE_SUBTITLE_CLASS}>
            Variants, appearances, sizes, colours and states — each shown
            unselected and selected.
          </p>
        </header>

        {/* Sizes */}
        <ShowcaseSection
          title="Sizes"
          description="Five sizes; the label and description scale with the circle."
        >
          <div className={cn(SC_PANEL_PAD, "flex flex-wrap items-end gap-10")}>
            {SHOWCASE_SIZES.map((size) => (
              <div key={size} className="flex flex-col items-start gap-3">
                <Radio size={size} label="Unselected" />
                <Radio size={size} label="Selected" checked />
                <span className={SC_CAPTION}>{size}</span>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        {/* Variant × Appearance */}
        <LazySection>
          <ShowcaseSection
            title="Variant × Appearance"
            description="Every variant and appearance, unselected and selected. onColor sits on a filled surface in the toolbar colour."
          >
            <div className={cn(SC_PANEL, SHOWCASE_SCROLL_X_CLASS)}>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className={SC_TH}>Variant</th>
                    {RADIO_APPEARANCES.map((a) => (
                      <th key={a} className={cn(SC_TH, "text-center")}>
                        {a}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {variants.map((v) => (
                    <tr key={v} className={SC_ROW}>
                      <td className={SC_ROW_HEAD}>
                        <code className={SC_CODE}>{v}</code>
                      </td>
                      {RADIO_APPEARANCES.map((a) => (
                        <td key={a} className="px-5 py-5">
                          <div className="flex justify-center">
                            <OnColorSurface
                              color={surfaceColor}
                              enabled={a === "onColor"}
                            >
                              <div className="flex items-start gap-6">
                                {[false, true].map((checked) => (
                                  <div
                                    key={String(checked)}
                                    className="flex flex-col items-center gap-2"
                                  >
                                    <Radio
                                      variant={v}
                                      appearance={a}
                                      checked={checked}
                                    />
                                    <span
                                      className={cn(
                                        "text-2.5 font-medium uppercase tracking-wider",
                                        a === "onColor"
                                          ? "text-white"
                                          : "text-neutral-600 dark:text-neutral-400",
                                      )}
                                    >
                                      {checked ? "on" : "off"}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </OnColorSurface>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Radio Card matrix */}
        <LazySection>
          <ShowcaseSection
            title="Radio Card · Variant × Appearance"
            description="Columns set the selected treatment. Unselected cards use the same appearance where it is supported and fall back to soft for strong."
          >
            <div className={cn(SC_PANEL, SHOWCASE_SCROLL_X_CLASS)}>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className={SC_TH}>Variant</th>
                    {RADIO_CARD_SELECTED_APPEARANCES.map((a) => (
                      <th key={a} className={SC_TH}>
                        {a}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {variants.map((v) => (
                    <tr key={v} className={SC_ROW}>
                      <td className={SC_ROW_HEAD}>
                        <code className={SC_CODE}>{v}</code>
                      </td>
                      {RADIO_CARD_SELECTED_APPEARANCES.map((a) => {
                        const unselectedAppearance = (
                          RADIO_CARD_UNSELECTED_APPEARANCES as readonly string[]
                        ).includes(a)
                          ? (a as RadioCardProps["appearance"])
                          : "soft";
                        return (
                          <td key={a} className="px-5 py-5 align-top">
                            <OnColorSurface
                              color={surfaceColor}
                              enabled={a === "onColor"}
                            >
                              <div className="flex w-44 flex-col gap-3">
                                {[false, true].map((checked) => (
                                  <Radio.Card
                                    key={String(checked)}
                                    variant={v}
                                    appearance={unselectedAppearance}
                                    selectStyle={{ variant: v, appearance: a }}
                                    checked={checked}
                                    label="Option"
                                    description={
                                      checked ? "Selected" : "Unselected"
                                    }
                                  />
                                ))}
                              </div>
                            </OnColorSurface>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* States */}
        <LazySection>
          <ShowcaseSection
            title="States"
            description="Disabled dims and blocks input; read-only blocks input without dimming; invalid only sets aria-invalid."
          >
            <div
              className={cn(SC_PANEL_PAD, "flex flex-wrap gap-x-16 gap-y-8")}
            >
              {(
                [
                  ["Default", {}],
                  ["Disabled", { disabled: true }],
                  ["Read-only", { readOnly: true }],
                  ["Invalid", { invalid: true }],
                ] as const
              ).map(([name, props]) => (
                <div key={name} className="flex flex-col gap-3">
                  <span className={SC_CAPTION}>{name}</span>
                  <Radio {...props} label="Unselected" />
                  <Radio {...props} label="Selected" checked />
                </div>
              ))}
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Colours */}
        <LazySection>
          <ShowcaseSection
            title="Colours"
            description="An explicit color paints both states. Left to right: outline off, outline on, solid on."
          >
            <div className="flex flex-wrap gap-4">
              {palettes.map((c) => (
                <div
                  key={c}
                  className={cn(
                    SC_PANEL,
                    "flex w-36 flex-col items-center gap-3 p-4",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Radio color={c} variant="outline" />
                    <Radio
                      color={c}
                      variant="outline"
                      checked
                      selectStyle={{ variant: "outline", appearance: "strong" }}
                    />
                    <Radio
                      color={c}
                      variant="solid"
                      checked
                      selectStyle={{ variant: "solid", appearance: "strong" }}
                    />
                  </div>
                  <span className={SC_CODE}>{c}</span>
                </div>
              ))}
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Labels & indicator placement */}
        <LazySection>
          <ShowcaseSection
            title="Labels & Indicator Placement"
            description="Descriptions sit under the label; cards place the indicator at any edge."
          >
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className={cn(SC_PANEL_PAD, "flex flex-col gap-4")}>
                <h3 className={SC_H3}>With description</h3>
                <Radio
                  label="Push notifications"
                  description="Real-time alerts on this device"
                  checked
                />
                <Radio
                  label="Email digest"
                  description="A summary once a day"
                />
              </div>
              <div
                className={cn(
                  SC_PANEL_PAD,
                  "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-2",
                )}
              >
                {(["start", "end", "top", "bottom"] as const).map(
                  (placement) => (
                    <Radio.Card
                      key={placement}
                      label={titleCase(placement)}
                      description={`indicator.placement="${placement}"`}
                      indicator={{ placement }}
                      variant="solid-outline"
                      appearance="soft"
                      checked={placement === "start"}
                    />
                  ),
                )}
              </div>
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Groups */}
        <LazySection>
          <ShowcaseSection
            title="Groups"
            description="Radio.Group lays items out in a row, a column or a grid. These are live — click to select."
          >
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
              <ShowcaseGroup title="Row" direction="row" />
              <ShowcaseGroup title="Column" direction="column" />
              <ShowcaseGroup
                title="Card grid"
                direction="grid"
                columns={3}
                cards
              />
              <ShowcaseGroup
                title="Cards without indicator"
                direction="grid"
                columns={3}
                cards
                indicator={{ type: "none" }}
              />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Radius */}
        <LazySection>
          <ShowcaseSection
            title="Radius"
            description="rounded shapes the card body and focus ring; the circle stays round."
          >
            <div
              className={cn(
                SC_PANEL_PAD,
                "grid grid-cols-2 gap-4 xl:grid-cols-5",
              )}
            >
              {(["none", "sm", "md", "lg", "full"] as const).map((r) => (
                <Radio.Card
                  key={r}
                  rounded={r}
                  label={titleCase(r)}
                  description={`rounded="${r}"`}
                  variant="solid-outline"
                  appearance="soft"
                  checked
                />
              ))}
            </div>
          </ShowcaseSection>
        </LazySection>
      </ShowcaseShell>
    );
}
