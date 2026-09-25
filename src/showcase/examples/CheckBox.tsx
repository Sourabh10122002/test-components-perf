// Showcase ported from origin/checkbox:src/components/Checkbox/stories/CheckBox.stories.tsx
import React from "react";
import { Checkbox } from "@inventive-ui/components/Checkbox";
import type { CheckboxProps } from "@inventive-ui/components/Checkbox";
import { cn } from "@inventive-ui/framework";
import {
  availableColorPalettes,
  setSpacing,
  themeManager,
} from "@inventive-ui/framework";
import { LazySection, ShowcaseShell } from "../storybook";

const SHOWCASE_SIZES: CheckboxProps["size"][] = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
];
const SHOWCASE_VARIANTS: CheckboxProps["variant"][] = [
  "solid",
  "solid-outline",
  "outline",
];
const SHOWCASE_APPEARANCES: NonNullable<CheckboxProps["appearance"]>[] = [
  "strong",
  "soft",
  "dualTone",
  "onColor",
];
const SHOWCASE_CARD_APPEARANCES: NonNullable<CheckboxProps["appearance"]>[] = [
  "strong",
  "soft",
  "dualTone",
  "onColor",
];

// --- STORY STYLING CONSTANTS ---
const STORY_SECTION_CLASS = "space-y-4";
const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1";
const STORY_SECTION_DESC_CLASS = "text-sm text-gray-600 dark:text-gray-400";
const STORY_ONCOLOR_WRAPPER = "p-4 rounded-lg";
const STORY_SPAN_LABEL =
  "text-neutral-400 text-xs font-medium uppercase tracking-wider";
const STORY_TABLE_CLASS = "min-w-full border-collapse";
const STORY_TH_CLASS =
  "border border-gray-300 dark:border-gray-700 px-4 py-2 text-start text-sm font-semibold text-gray-900 dark:text-gray-100";
const STORY_SHOWCASE_WRAPPER = "space-y-12 p-8 min-h-screen";
const STORY_HEADER_WRAPPER = "space-y-2";
const STORY_H1_CLASS = "text-4xl font-bold text-gray-900 dark:text-gray-100";
const STORY_SUBTITLE_CLASS = "text-lg text-gray-600 dark:text-gray-400";

/**
 * Comprehensive showcase displaying all checkbox variants, sizes, appearances,
 * colors, and states in a single visual reference page.
 */
export default function CheckBoxShowcase() {
    const globals = {};
    // Root color stays unset so unselected checkboxes render neutral; the
    // toolbar color reaches every selected state via theme.globalColor.
    // ShowcaseShell already applies direction/font/mode from globals.
    const color: CheckboxProps["color"] = undefined;
    const paletteColors = availableColorPalettes.filter(
      (c) =>
        !["brand", "neutral", "success", "warning", "danger", "info"].includes(
          c,
        ),
    );
    const showcaseSizes = SHOWCASE_SIZES;
    const showcaseVariants = SHOWCASE_VARIANTS;
    const showcaseAppearances = SHOWCASE_APPEARANCES;
    const cardAppearances = SHOWCASE_CARD_APPEARANCES;
    /** Internal Group Showcase for interactive demonstrations */
    const CheckboxGroupShowcase = ({
      direction = "row",
      columns = 2,
      label = "Layout",
      useCards = false,
    }: {
      direction?: "row" | "column";
      columns?: number;
      label?: string;
      useCards?: boolean;
    }) => {
      const [value, setValue] = React.useState<string[]>(["1"]);
      const items = [
        { value: "1", label: "Option 1", description: "Description 1" },
        { value: "2", label: "Option 2", description: "Description 2" },
        { value: "3", label: "Option 3", description: "Description 3" },
      ];
      return (
        <div className="flex flex-col gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm w-full max-w-md">
          <div className="flex items-center justify-between border-b dark:border-gray-700 pb-2 mb-1">
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
              {label}
            </span>
            <span className="text-xs font-medium text-gray-400">
              {useCards ? `grid-cols-${columns}` : `direction="${direction}"`}
            </span>
          </div>
          <Checkbox.Group
            value={value}
            onChange={setValue}
            direction={useCards ? "row" : direction}
            className={
              useCards ? cn("grid", `grid-cols-${columns}`, "gap-3") : ""
            }
          >
            {items.map((item) =>
              useCards ? (
                <Checkbox
                  key={item.value}
                  {...item}
                  variant="card"
                  color={"neutral"}
                  appearance="soft"
                />
              ) : (
                <Checkbox key={item.value} {...item} color={"neutral"} />
              ),
            )}
          </Checkbox.Group>
        </div>
      );
    };

    return (
      <ShowcaseShell globals={globals} className={STORY_SHOWCASE_WRAPPER}>
        {/* Header */}
        <div className={STORY_HEADER_WRAPPER}>
          <h1 className={STORY_H1_CLASS}>Checkbox Component Showcase</h1>
          <p className={STORY_SUBTITLE_CLASS}>
            Comprehensive visual reference of all checkbox variants, sizes, and
            states
          </p>
        </div>

        {/* Quick Reference: Sizes */}
        <div className="flex items-center justify-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          {showcaseSizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-3">
              <Checkbox size={size} checked label="Check" color={color} />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                {size}
              </span>
            </div>
          ))}
        </div>

        {/* 1. Layout Configurations */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Layout Configurations
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Demonstrating various layout directions for checkbox groups and
                cards
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Standard Group
                </h3>
                <div className="flex flex-col gap-6">
                  <CheckboxGroupShowcase direction="row" label="Horizontal" />
                  <CheckboxGroupShowcase direction="column" label="Vertical" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Card Grid
                </h3>
                <div className="flex flex-col gap-6">
                  <CheckboxGroupShowcase
                    useCards
                    columns={2}
                    label="2 Columns Grid"
                  />
                  <CheckboxGroupShowcase
                    useCards
                    columns={3}
                    label="3 Columns Grid"
                  />
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 2. Variant × Appearance Matrix */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Variant × Appearance Matrix
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Visual comparison across all variant and appearance combinations
                for standalone checkboxes
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr>
                    <th className={STORY_TH_CLASS}>Variant / Appearance</th>
                    {showcaseAppearances.map((a) => (
                      <th key={a} className={STORY_TH_CLASS}>
                        {a.charAt(0).toUpperCase() + a.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {showcaseVariants.map((v) => (
                    <tr
                      key={v}
                      className="border-b border-gray-100 dark:border-gray-800 last:border-0"
                    >
                      <td className="px-6 py-4 text-xs font-bold text-gray-400 font-mono uppercase tracking-widest">
                        {v}
                      </td>
                      {showcaseAppearances.map((a) => {
                        const showPair = a === "soft" || a === "onColor";
                        const pair = showPair ? (
                          <div className="flex gap-5 justify-center items-start">
                            <div className="flex flex-col items-center gap-1.5">
                              <Checkbox
                                variant={v}
                                appearance={a}
                                checked={false}
                                color={color}
                              />
                              <span className="text-xs text-gray-400 uppercase tracking-wide">
                                off
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                              <Checkbox
                                variant={v}
                                appearance={a}
                                checked
                                color={color}
                              />
                              <span className="text-xs text-gray-400 uppercase tracking-wide">
                                on
                              </span>
                            </div>
                          </div>
                        ) : (
                          <Checkbox
                            variant={v}
                            appearance={a}
                            checked
                            color={color}
                          />
                        );
                        return (
                          <td key={a} className="px-6 py-6">
                            <div className="flex justify-center">
                              {a === "onColor" ? (
                                <div
                                  className={STORY_ONCOLOR_WRAPPER}
                                  style={{
                                    backgroundColor: `var(--iui-color-${color}-600)`,
                                  }}
                                >
                                  {pair}
                                </div>
                              ) : (
                                pair
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* 4. Checkbox Card: Variant × Appearance Matrix */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Checkbox Card: Variant × Appearance Matrix
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Visual comparison of checkbox card variants and color treatments
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr>
                    <th className={STORY_TH_CLASS}>Variant / Appearance</th>
                    {cardAppearances.map((a) => (
                      <th key={a} className={STORY_TH_CLASS}>
                        {a.charAt(0).toUpperCase() + a.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {showcaseVariants.map((v) => (
                    <tr
                      key={v}
                      className="border-b border-gray-100 dark:border-gray-800 last:border-0"
                    >
                      <td className="px-6 py-4 text-xs font-bold text-gray-400 font-mono uppercase tracking-widest">
                        {v}
                      </td>
                      {cardAppearances.map((a) => {
                        const pair = (
                          <Checkbox
                            isCard
                            variant={v}
                            appearance={a}
                            checked
                            color={color}
                            label="Option"
                            description="Selected"
                          />
                        );
                        return (
                          <td key={a} className="px-6 py-6">
                            <div className="flex justify-center w-37.5">
                              {a === "onColor" ? (
                                <div
                                  className={STORY_ONCOLOR_WRAPPER}
                                  style={{
                                    backgroundColor: `var(--iui-color-${color}-600)`,
                                  }}
                                >
                                  {pair}
                                </div>
                              ) : (
                                pair
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* 5. Labels & States */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Labels & States</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Support for descriptions, placements, and functional states
              </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-8">
                <div className="space-y-4">
                  <h3 className={STORY_SPAN_LABEL}>Descriptions</h3>
                  <div className="space-y-4">
                    <Checkbox
                      label="Enable notifications"
                      description="Receive real-time alerts on your device"
                      checked
                    />
                    <Checkbox
                      label="Auto-save settings"
                      description="Configure how often your work is saved"
                      checked={false}
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t dark:border-gray-700">
                  <h3 className={STORY_SPAN_LABEL}>
                    Label Placements (with Cards)
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <Checkbox
                      variant="card"
                      label="End"
                      description="Default layout"
                      indicator={{ placement: "end" }}
                      checked
                      color={color}
                      selectStyle={{
                        variant: "solid-outline",
                        appearance: "soft",
                      }}
                    />
                    <Checkbox
                      variant="card"
                      label="Start"
                      description="Checkbox on the start"
                      indicator={{ placement: "start" }}
                      checked
                      color={color}
                      selectStyle={{
                        variant: "solid-outline",
                        appearance: "soft",
                      }}
                    />
                    <Checkbox
                      variant="card"
                      label="Top"
                      description="Checkbox at the top"
                      indicator={{ placement: "top" }}
                      checked
                      color={color}
                      selectStyle={{
                        variant: "solid-outline",
                        appearance: "soft",
                      }}
                    />
                    <Checkbox
                      variant="card"
                      label="Bottom"
                      description="Checkbox at the bottom"
                      indicator={{ placement: "bottom" }}
                      checked
                      color={color}
                      selectStyle={{
                        variant: "solid-outline",
                        appearance: "soft",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-8">
                <div className="space-y-4">
                  <h3 className={STORY_SPAN_LABEL}>Functional States</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { state: "default", el: <Checkbox label="Checkbox" /> },
                      {
                        state: "checked",
                        el: <Checkbox label="Checkbox" checked />,
                      },
                      {
                        state: "indeterminate (dash)",
                        el: (
                          <Checkbox
                            label="Checkbox"
                            indeterminate={{ icon: "dash" }}
                          />
                        ),
                      },
                      {
                        state: "indeterminate (square)",
                        el: (
                          <Checkbox
                            label="Checkbox"
                            indeterminate={{ icon: "square" }}
                          />
                        ),
                      },
                      {
                        state: "read only",
                        el: <Checkbox label="Checkbox" readOnly checked />,
                      },
                      {
                        state: "disabled",
                        el: <Checkbox label="Checkbox" disabled />,
                      },
                      {
                        state: "disabled checked",
                        el: <Checkbox label="Checkbox" disabled checked />,
                      },
                      {
                        state: "invalid",
                        el: <Checkbox label="Checkbox" invalid />,
                      },
                      {
                        state: "invalid checked",
                        el: <Checkbox label="Checkbox" invalid checked />,
                      },
                    ].map(({ state, el }) => (
                      <div key={state} className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {state}
                        </span>
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 6. Parent / Child Selection */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Parent / Child Selection
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Parent checkbox drives select-all / indeterminate state over its
                children
              </p>
            </div>
            {(() => {
              const childItems = [
                { value: "c1", label: "Child 1" },
                { value: "c2", label: "Child 2" },
                { value: "c3", label: "Child 3" },
              ];
              const allChildValues = childItems.map((c) => c.value);

              const ParentChildDemo = ({
                label,
                variant,
                iconType = "dash",
              }: {
                label: string;
                variant: "outline" | "solid" | "solid-outline";
                iconType?: string;
              }) => {
                const [selected, setSelected] = React.useState<string[]>([]);
                const allChecked = allChildValues.every((v) =>
                  selected.includes(v),
                );
                const someChecked = allChildValues.some((v) =>
                  selected.includes(v),
                );
                const parentIndeterminate = someChecked && !allChecked;
                const handleParent = (checked: boolean) => {
                  setSelected(
                    checked || parentIndeterminate ? allChildValues : [],
                  );
                };
                const handleChild = (val: string, checked: boolean) => {
                  setSelected((prev) =>
                    checked ? [...prev, val] : prev.filter((v) => v !== val),
                  );
                };
                return (
                  <div className="space-y-3">
                    <span className={STORY_SPAN_LABEL}>{label}</span>
                    <div className="flex flex-col gap-2">
                      <Checkbox
                        label="Parent"
                        checked={allChecked}
                        indeterminate={
                          parentIndeterminate ? { icon: iconType } : false
                        }
                        onChange={handleParent}
                        color="neutral"
                        variant={variant}
                      />
                      {childItems.map((item) => (
                        <Checkbox
                          key={item.value}
                          label={item.label}
                          checked={selected.includes(item.value)}
                          onChange={(chk) => handleChild(item.value, chk)}
                          color="neutral"
                          variant={variant}
                          className="ms-6"
                        />
                      ))}
                    </div>
                  </div>
                );
              };

              const variants = ["outline", "solid", "solid-outline"] as const;
              const iconTypes = ["dash", "square"] as const;

              return (
                <div
                  className="grid gap-4"
                  style={{ gridTemplateColumns: "auto 1fr 1fr 1fr" }}
                >
                  {/* header row */}
                  <div />
                  {variants.map((v) => (
                    <span key={v} className={cn(STORY_SPAN_LABEL, "px-2")}>
                      {v}
                    </span>
                  ))}

                  {/* data rows */}
                  {iconTypes.map((iconType) => (
                    <React.Fragment key={iconType}>
                      <span
                        className={cn(
                          STORY_SPAN_LABEL,
                          "flex items-start pt-7 pe-2 whitespace-nowrap",
                        )}
                      >
                        {iconType}
                      </span>
                      {variants.map((v) => (
                        <div
                          key={v}
                          className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
                        >
                          <ParentChildDemo
                            label=""
                            variant={v}
                            iconType={iconType}
                          />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              );
            })()}
          </section>
        </LazySection>

        {/* 3. Color Palette */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Color Palette</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                All available accent colors across solid, soft, outline, and
                card variants
              </p>
            </div>
            <div className="space-y-10">
              {/* Solid · Strong */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Solid · Strong
                </h3>
                <div className="flex flex-wrap gap-6">
                  {paletteColors.map((c) => (
                    <div key={c} className="flex flex-col items-center gap-2">
                      <div
                        className={cn(
                          "p-1.5 rounded-lg",
                          c === "white" ? "bg-gray-700" : "",
                        )}
                      >
                        <Checkbox
                          checked
                          color={c}
                          variant="solid"
                          appearance="strong"
                          selectStyle={{
                            variant: "solid",
                            appearance: "strong",
                            color: c,
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 capitalize">
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solid · Soft */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Solid · Soft
                </h3>
                <div className="flex flex-wrap gap-6">
                  {paletteColors
                    .filter((c) => c !== "white" && c !== "black")
                    .map((c) => (
                      <div key={c} className="flex flex-col items-center gap-2">
                        <Checkbox
                          checked
                          color={c}
                          variant="solid"
                          appearance="soft"
                          selectStyle={{
                            variant: "solid",
                            appearance: "soft",
                            color: c,
                          }}
                        />
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 capitalize">
                          {c}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Outline */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Outline (Unchecked → Checked)
                </h3>
                <div className="flex flex-wrap gap-6">
                  {paletteColors
                    .filter((c) => c !== "white" && c !== "black")
                    .map((c) => (
                      <div key={c} className="flex flex-col items-center gap-2">
                        <div className="flex gap-2 items-center">
                          <Checkbox
                            color={c}
                            variant="outline"
                            appearance="strong"
                          />
                          <Checkbox
                            checked
                            color={c}
                            variant="outline"
                            appearance="strong"
                            selectStyle={{
                              variant: "outline",
                              appearance: "strong",
                              color: c,
                            }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 capitalize">
                          {c}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Checkbox Card */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Checkbox Card
                </h3>
                <div className="flex flex-wrap gap-4">
                  {paletteColors
                    .filter((c) => c !== "white" && c !== "black")
                    .map((c) => (
                      <Checkbox
                        key={c}
                        isCard
                        checked
                        color={c}
                        variant="solid-outline"
                        appearance="soft"
                        label={c.charAt(0).toUpperCase() + c.slice(1)}
                        description="Selected"
                        selectStyle={{
                          variant: "solid-outline",
                          appearance: "soft",
                          color: c,
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Spacing / Density */}
        <LazySection>
          {(() => {
            const SpacingMatrix = () => {
              const [density, setDensity] = React.useState<
                "compact" | "standard" | "spacious"
              >("standard");

              React.useLayoutEffect(() => {
                setSpacing(density);
              }, [density]);

              const densities = ["compact", "standard", "spacious"] as const;
              const spacingSizes = ["xs", "sm", "base", "lg", "xl"] as const;

              return (
                <section className={STORY_SECTION_CLASS}>
                  <div>
                    <h2 className={STORY_SECTION_TITLE_CLASS}>
                      Spacing / Density
                    </h2>
                    <p className={STORY_SECTION_DESC_CLASS}>
                      How compact, standard, and spacious density affects
                      checkbox padding and gap across all sizes
                    </p>
                  </div>

                  {/* Toggle */}
                  <div className="flex items-center gap-2">
                    {densities.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDensity(d)}
                        className={cn(
                          "px-4 py-1.5 rounded-lg text-sm font-medium border transition-all",
                          density === d
                            ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                            : "bg-white text-gray-600 border-gray-300 hover:border-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
                        )}
                      >
                        {d.charAt(0).toUpperCase() + d.slice(1)}
                      </button>
                    ))}
                    <span className={cn(STORY_SPAN_LABEL, "ms-2")}>
                      current: {density}
                    </span>
                  </div>

                  {/* Size × state matrix */}
                  <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
                    <table className={STORY_TABLE_CLASS}>
                      <thead>
                        <tr>
                          <th className={STORY_TH_CLASS}>Size</th>
                          <th className={STORY_TH_CLASS}>Unchecked</th>
                          <th className={STORY_TH_CLASS}>Checked</th>
                          <th className={STORY_TH_CLASS}>With Label</th>
                          <th className={STORY_TH_CLASS}>With Description</th>
                          <th className={STORY_TH_CLASS}>Card</th>
                        </tr>
                      </thead>
                      <tbody>
                        {spacingSizes.map((sz) => (
                          <tr
                            key={sz}
                            className="border-b border-gray-100 dark:border-gray-800 last:border-0"
                          >
                            <td className="px-6 py-4 text-xs font-bold text-gray-400 font-mono uppercase tracking-widest">
                              {sz}
                            </td>
                            <td className="px-6 py-6">
                              <div className="flex justify-center">
                                <Checkbox size={sz} color={"neutral"} />
                              </div>
                            </td>
                            <td className="px-6 py-6">
                              <div className="flex justify-center">
                                <Checkbox
                                  size={sz}
                                  checked
                                  color={"neutral"}
                                  selectStyle={{
                                    variant: "solid",
                                    appearance: "strong",
                                    color: color,
                                  }}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-6">
                              <div className="flex justify-center">
                                <Checkbox
                                  size={sz}
                                  checked
                                  label="Checkbox"
                                  color={color}
                                  selectStyle={{
                                    variant: "solid",
                                    appearance: "strong",
                                    color: color,
                                  }}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-6">
                              <div className="flex justify-center">
                                <Checkbox
                                  size={sz}
                                  checked
                                  label="Checkbox"
                                  description="Helper text"
                                  color={color}
                                  selectStyle={{
                                    variant: "solid",
                                    appearance: "strong",
                                    color: color,
                                  }}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-6">
                              <div className="flex justify-center">
                                <Checkbox
                                  isCard
                                  size={sz}
                                  checked
                                  label="Option"
                                  description="Selected card"
                                  color={color}
                                  variant="solid-outline"
                                  appearance="soft"
                                  selectStyle={{
                                    variant: "solid-outline",
                                    appearance: "soft",
                                    color: color,
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              );
            };

            return <SpacingMatrix />;
          })()}
        </LazySection>

        {/* 7. Cards & Theme Tokens */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Cards & Theme Tokens
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Advanced interactive cards with theme-aware configuration
              </p>
            </div>
            <div className="space-y-10">
              {/* Radius Variants */}
              <div className="mt-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">
                  Radius Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["none", "sm", "md", "lg", "full"].map((r) => (
                    <div
                      key={r}
                      className="flex-1 min-w-37.5 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 flex flex-col items-center gap-3"
                    >
                      <Checkbox
                        variant="card"
                        label={r.toUpperCase()}
                        description="Radius demo"
                        color={color}
                        checked
                        className={`rounded-${r}`}
                        selectStyle={{
                          variant: "solid-outline",
                          appearance: "soft",
                        }}
                      />
                      <span className="text-xs font-bold text-gray-400 capitalize">
                        {r}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Font Families */}
              {(() => {
                const FontFamilyDemo = () => {
                  const fonts = [
                    { key: "inter", label: "Inter", sub: "Sans-serif" },
                    { key: "arial", label: "Arial", sub: "System sans" },
                    { key: "mono", label: "Mono", sub: "Monospace" },
                  ] as const;
                  const [activeFont, setActiveFont] = React.useState<
                    "inter" | "arial" | "mono"
                  >("inter");

                  React.useLayoutEffect(() => {
                    themeManager.updateTheme({ font: activeFont });
                  }, [activeFont]);

                  return (
                    <div className="mt-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          Font Families
                        </h3>
                        <div className="flex gap-2">
                          {fonts.map(({ key, label }) => (
                            <button
                              key={key}
                              onClick={() => setActiveFont(key)}
                              className={cn(
                                "px-3 py-1 rounded-md text-xs font-semibold border transition-all",
                                activeFont === key
                                  ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                                  : "bg-white text-gray-500 border-gray-300 hover:border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600",
                              )}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Checkbox
                          isCard
                          variant="solid-outline"
                          appearance="soft"
                          label="Card Checkbox"
                          description="Label & description text"
                          selectStyle={{
                            variant: "solid-outline",
                            appearance: "soft",
                            color: color,
                          }}
                          color={color}
                          checked
                        />
                        <Checkbox
                          label="Inline checkbox"
                          description="With description"
                          checked
                          color={color}
                          selectStyle={{
                            variant: "solid",
                            appearance: "strong",
                            color: color,
                          }}
                        />
                        <div className="flex flex-col gap-3">
                          {["Option A", "Option B", "Option C"].map(
                            (opt, i) => (
                              <Checkbox
                                key={opt}
                                label={opt}
                                checked={i === 1}
                                color={color}
                                selectStyle={{
                                  variant: "solid",
                                  appearance: "strong",
                                  color: color,
                                }}
                              />
                            ),
                          )}
                        </div>
                      </div>
                      <p className={cn(STORY_SPAN_LABEL, "pt-1")}>
                        active font:{""}
                        {fonts.find((f) => f.key === activeFont)?.label} ·{""}
                        {fonts.find((f) => f.key === activeFont)?.sub}
                      </p>
                    </div>
                  );
                };
                return <FontFamilyDemo />;
              })()}
            </div>
          </section>
        </LazySection>
      </ShowcaseShell>
    );
}
