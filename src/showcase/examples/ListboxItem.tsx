// Showcase ported from origin/listboxitem:src/components/ListboxItem/stories/ListboxItem.stories.tsx
import React from "react";
import { ListboxItem } from "@inventive-ui/components/ListboxItem";
import { cn } from "@inventive-ui/framework";
import { useThemeLayout } from "@inventive-ui/framework";
import { getFinalHeight } from "../story-helpers/ListboxItem/styles";
import { LazySection } from "../storybook";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS, SHOWCASE_HEADER_WRAP_CLASS, SHOWCASE_ROW_CLASS, SHOWCASE_SCROLL_X_CLASS, SHOWCASE_SUBTITLE_CLASS, SHOWCASE_TITLE_CLASS } from "../storybook";

/* -------------------------------------------------------------------------- */
/* Showcase Style Constants                                                    */
/* -------------------------------------------------------------------------- */

const STORY_SECTION_CLASS = "space-y-6";

const STORY_SECTION_HEADER_CLASS = "space-y-1";

const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-semibold text-gray-900 dark:text-gray-100";

const STORY_SECTION_DESC_CLASS = "text-sm text-gray-600 dark:text-gray-400";

const STORY_SECTION_DESC_MUTED_CLASS =
  "text-sm text-gray-500 dark:text-gray-400";

const STORY_CARD_CLASS =
  "flex flex-col items-center gap-2 p-4 border border-gray-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900";

const STORY_FLEX_WRAP_CLASS = SHOWCASE_ROW_CLASS;

const STORY_FLEX_WRAP_GAP_6_CLASS = `${SHOWCASE_ROW_CLASS} gap-6 pt-2`;

const STORY_FLEX_COL_GAP_2_CLASS = "flex flex-col items-center gap-2";

const STORY_H3_BOLD_CLASS =
  "text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight";

const STORY_H3_SEMIBOLD_CLASS =
  "text-xl font-semibold text-gray-900 dark:text-gray-100";

const STORY_TABLE_SECTION_CLASS =
  "space-y-6 w-full bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-300 dark:border-gray-700 flex-1";

const STORY_TABLE_CLASS = "w-full px-8 border-collapse rounded-lg";

const STORY_THEAD_TR_CLASS = "";

const STORY_TH_CLASS =
  "border-b border-gray-200 dark:border-neutral-800 px-3 py-3 text-start text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider w-40";

const STORY_TH_WIDE_CLASS =
  "border-b border-gray-200 dark:border-neutral-800 px-10 py-3 text-start text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider min-w-35";

const STORY_TH_SIZE_CLASS =
  "border-b border-gray-200 dark:border-neutral-800 px-3 py-3 text-start text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider w-16";

const STORY_TBODY_CLASS = "divide-y divide-gray-100 dark:divide-neutral-800";

const STORY_TR_CLASS = "transition-colors";

const STORY_TD_LABEL_CLASS =
  "px-3 py-3 font-bold text-gray-900 dark:text-gray-100 border-r border-gray-100 dark:border-neutral-800 italic text-xs text-center capitalize";

const STORY_TD_LABEL_SIZE_CLASS =
  "px-3 py-3 font-bold text-gray-900 dark:text-gray-100 border-r border-gray-100 dark:border-neutral-800 italic text-xs text-center";

const STORY_TD_CONTENT_CLASS = "p-2";

/* -------------------------------------------------------------------------- */
/* Showcase Helper Functions                                                    */
/* -------------------------------------------------------------------------- */

const getDynamicListItemSizeStyles = (
  size: "xs" | "sm" | "base" | "lg" | "xl",
  spacing: "compact" | "standard" | "spacious",
  hasHelperText = false,
): React.CSSProperties => ({
  height: `${getFinalHeight(size, spacing, hasHelperText)}px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function ListboxItemShowcase() {
  const globals: Record<string, any> = {};
    const theme = getShowcaseTheme(globals);
    const { globalColor } = useThemeLayout();

    return (
      <ShowcaseShell
        globals={globals}
        className={cn(
          SHOWCASE_CONTAINER_CLASS,
          "w-full bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100",
        )}
      >
        <div className={SHOWCASE_HEADER_WRAP_CLASS}>
          <h1 className={SHOWCASE_TITLE_CLASS}>Listboxitem Showcase</h1>
          <p className={SHOWCASE_SUBTITLE_CLASS}>
            Comprehensive reference for listboxitem structure, sizes, variants,
            slots, and interaction states.
          </p>
        </div>

        {/* sec:1.1 Size Variants */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>List Item</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                A list item represents a selectable option within a list.
              </p>
            </div>

            <div className={STORY_SECTION_HEADER_CLASS}>
              <h3 className={STORY_H3_BOLD_CLASS}>Size Variants</h3>
              <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                All available list item sizes from xs to xl.
              </p>

              <div className={STORY_FLEX_WRAP_CLASS}>
                {(["xs", "sm", "base", "lg", "xl"] as const).map((size) => (
                  <div key={size} className={STORY_FLEX_COL_GAP_2_CLASS}>
                    <ListboxItem
                      size={size}
                      label={`${size.toUpperCase()} Item`}
                      value={size}
                      isSelected
                      selectStyle={{ variant: "solid", appearance: "soft" }}
                      hoverStyle={{
                        variant: "solid",
                        appearance: "strong",
                        color: "same",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div className="space-y-4 pt-6">
              <div className={STORY_SECTION_HEADER_CLASS}>
                <h3 className={STORY_H3_BOLD_CLASS}>Color Palette</h3>
                <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                  All semantic color & state color available in the design
                  system.
                </p>
              </div>

              <div className={STORY_FLEX_WRAP_GAP_6_CLASS}>
                {(
                  [
                    "brand",
                    "neutral",
                    "danger",
                    "warning",
                    "success",
                    "info",
                    "gray",
                    "red",
                    "orange",
                    "amber",
                    "yellow",
                    "green",
                    "emerald",
                    "teal",
                    "cyan",
                    "sky",
                    "blue",
                    "indigo",
                    "violet",
                    "purple",
                    "fuchsia",
                    "pink",
                    "rose",
                    "slate",
                    "zinc",
                    "stone",
                    "white",
                    "black",
                  ] as const
                ).map((color) => (
                  <div key={color} className={STORY_FLEX_COL_GAP_2_CLASS}>
                    <ListboxItem
                      color={color}
                      label={color.charAt(0).toUpperCase() + color.slice(1)}
                      value={color}
                      isSelected
                      selectStyle={{ variant: "solid", appearance: "strong" }}
                      className="w-25 justify-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* State Variants */}
            <div className="space-y-4 pt-6">
              <div className={STORY_SECTION_HEADER_CLASS}>
                <h3 className={STORY_H3_BOLD_CLASS}>State Variants</h3>
                <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                  Visual feedback for different component states.
                </p>
              </div>

              <div className={STORY_FLEX_WRAP_GAP_6_CLASS}>
                <ListboxItem
                  label="Default"
                  value="default"
                  selectStyle={{ variant: "solid", appearance: "soft" }}
                  className="w-30 justify-center"
                />
                <ListboxItem
                  label="Hover"
                  value="hover"
                  selectStyle={{ variant: "solid", appearance: "soft" }}
                  hoverStyle={{ variant: "solid", appearance: "soft" }}
                  isHighlighted
                  className="w-30 justify-center"
                />
                <ListboxItem
                  label="Selected"
                  value="selected"
                  selectStyle={{ variant: "solid", appearance: "soft" }}
                  isSelected
                  className="w-30 justify-center"
                />
                <ListboxItem
                  label="Focused"
                  value="focused"
                  selectStyle={{ variant: "solid", appearance: "soft" }}
                  hoverStyle={{ variant: "solid", appearance: "soft" }}
                  className={cn(
                    "w-30 justify-center ring-2 ring-offset-2",
                    `ring-${globalColor}-500`,
                  )}
                />
                <ListboxItem
                  label="Disabled"
                  value="disabled"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  disabled
                  className="w-30 justify-center"
                />
                <ListboxItem
                  label="Loading"
                  value="loading"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  loading
                  className="w-36"
                />
              </div>
            </div>

            {/* Radius Variants */}
            <div className="space-y-4 pt-6">
              <div className={STORY_SECTION_HEADER_CLASS}>
                <h3 className={STORY_H3_BOLD_CLASS}>Radius Variants</h3>
                <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                  Different corner radius presets from the global theme.
                </p>
              </div>

              <div className={STORY_FLEX_WRAP_GAP_6_CLASS}>
                {[
                  { label: "None", value: "none", radius: "0px" },
                  { label: "Sm", value: "sm", radius: "2px" },
                  { label: "Md", value: "md", radius: "4px" },
                  { label: "Lg", value: "lg", radius: "6px" },
                  { label: "Full", value: "full", radius: "8px" },
                ].map((item) => (
                  <div key={item.value} className={STORY_CARD_CLASS}>
                    <ListboxItem
                      label={item.label}
                      value={item.value}
                      isSelected
                      selectStyle={{ variant: "solid", appearance: "strong" }}
                      style={{ borderRadius: item.radius }}
                      className="w-25 justify-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Font Variants */}
            <div className="space-y-4 pt-6">
              <div className={STORY_SECTION_HEADER_CLASS}>
                <h3 className={STORY_H3_BOLD_CLASS}>Font Variants</h3>
                <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                  Different font family presets from the global theme.
                </p>
              </div>

              <div className={STORY_FLEX_WRAP_GAP_6_CLASS}>
                {[
                  { label: "Inter", value: "inter", font: "!font-inter" },
                  { label: "Arial", value: "arial", font: "!font-arial" },
                  { label: "Mono", value: "mono", font: "!font-mono" },
                ].map((item) => (
                  <div key={item.value} className={STORY_CARD_CLASS}>
                    <ListboxItem
                      label={item.label}
                      value={item.value}
                      isSelected
                      selectStyle={{ variant: "solid", appearance: "strong" }}
                      className={cn("w-25 justify-center", item.font)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Appearance */}
            <div className="space-y-4 pt-6">
              <div className={STORY_SECTION_HEADER_CLASS}>
                <h3 className={STORY_H3_SEMIBOLD_CLASS}>Appearance</h3>
                <p className={STORY_SECTION_DESC_CLASS}>
                  List item supports 3 appearances: strong, soft, dualTone.
                </p>
              </div>

              <div className="flex items-center gap-6 flex-wrap pt-4">
                {[
                  { font: "inter", appearance: "strong" as const },
                  { font: "arial", appearance: "soft" as const },
                  { font: "mono", appearance: "dualTone" as const },
                ].map(({ font, appearance }) => (
                  <div
                    key={`${font}-${appearance}`}
                    className={STORY_FLEX_COL_GAP_2_CLASS}
                  >
                    <ListboxItem
                      label={
                        appearance.charAt(0).toUpperCase() + appearance.slice(1)
                      }
                      value={`${font}-${appearance}`}
                      isSelected
                      selectStyle={{ variant: "solid", appearance }}
                      className={cn("w-27.5 justify-center", `font-${font}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* Style Variants */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h3 className={STORY_H3_BOLD_CLASS}>Style Variants</h3>
              <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                Different visual styles for various use cases.
              </p>
            </div>

            <div className={STORY_FLEX_WRAP_GAP_6_CLASS}>
              {(["solid", "solid-outline", "outline", "ghost"] as const).map(
                (variant) => (
                  <div key={variant} className={STORY_FLEX_COL_GAP_2_CLASS}>
                    <ListboxItem
                      size="sm"
                      label={
                        variant === "solid-outline"
                          ? "Solid-Outline"
                          : variant.charAt(0).toUpperCase() + variant.slice(1)
                      }
                      value={variant}
                      isSelected
                      selectStyle={{ variant, appearance: "strong" }}
                      className="w-auto justify-center min-w-30"
                    />
                  </div>
                ),
              )}
            </div>
          </section>
        </LazySection>

        {/* Adaptive Variants */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h3 className={STORY_H3_BOLD_CLASS}>Adaptive Variants</h3>
              <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                Automatic styling adjustments based on adaptive prop in Light
                and Dark modes.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {/* Light Mode */}
              <div className="flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-lg">
                <span className="text-sm font-bold text-gray-50 uppercase tracking-wider border-b pb-2">
                  Light Mode
                </span>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-40">
                      Adaptive: false (Default)
                    </span>
                    <div className="flex gap-2">
                      {(["strong", "soft", "dualTone"] as const).map(
                        (appearance) => (
                          <ListboxItem
                            key={`light-false-${appearance}`}
                            size="sm"
                            label={
                              appearance.charAt(0).toUpperCase() +
                              appearance.slice(1)
                            }
                            value={`light-false-${appearance}`}
                            isSelected
                            selectStyle={{
                              variant: "solid",
                              appearance,
                              adaptive: false,
                            }}
                            className="w-auto justify-center min-w-30"
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-400">
                      Adaptive: true
                    </span>
                    <div className="flex gap-2">
                      {(["strong", "soft", "dualTone"] as const).map(
                        (appearance) => (
                          <ListboxItem
                            key={`light-true-${appearance}`}
                            size="sm"
                            label={
                              appearance.charAt(0).toUpperCase() +
                              appearance.slice(1)
                            }
                            value={`light-true-${appearance}`}
                            isSelected
                            selectStyle={{
                              variant: "solid",
                              appearance,
                              adaptive: true,
                            }}
                            className="w-auto justify-center min-w-30"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Mode Simulation */}
              <div className="flex flex-col gap-4 p-6 bg-gray-900 border border-gray-70 rounded-lg dark text-white">
                <span className="text-sm font-bold text-gray-40 uppercase tracking-wider border-b border-gray-70 pb-2">
                  Dark Mode
                </span>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-50">
                      Adaptive: false (Default)
                    </span>
                    <div className="flex gap-2">
                      {(["strong", "soft", "dualTone"] as const).map(
                        (appearance) => (
                          <ListboxItem
                            key={`dark-false-${appearance}`}
                            size="sm"
                            label={
                              appearance.charAt(0).toUpperCase() +
                              appearance.slice(1)
                            }
                            value={`dark-false-${appearance}`}
                            isSelected
                            selectStyle={{
                              variant: "solid",
                              appearance,
                              adaptive: false,
                            }}
                            className="w-auto justify-center min-w-30"
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-50">
                      Adaptive: true
                    </span>
                    <div className="flex gap-2">
                      {(["strong", "soft", "dualTone"] as const).map(
                        (appearance) => (
                          <ListboxItem
                            key={`dark-true-${appearance}`}
                            label={
                              appearance.charAt(0).toUpperCase() +
                              appearance.slice(1)
                            }
                            value={`dark-true-${appearance}`}
                            isSelected
                            selectStyle={{
                              variant: "solid",
                              appearance,
                              adaptive: true,
                            }}
                            className="w-auto justify-center min-w-30"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Slot Options */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h3 className={STORY_H3_BOLD_CLASS}>Slot Options</h3>
              <p className={STORY_SECTION_DESC_MUTED_CLASS}>
                Left and Right slots for icons or other content.
              </p>
            </div>

            <div className={STORY_FLEX_WRAP_GAP_6_CLASS}>
              {[
                {
                  id: "icon",
                  label: "Icon",
                  prefix: { type: "icon", name: "@placeholder" },
                },
                {
                  id: "avatar",
                  label: "Avatar",
                  prefix: {
                    type: "avatar",
                    img: {
                      src: "https://avatar.iran.liara.run/public/30",
                      alt: "avatar",
                    },
                  },
                },
                {
                  id: "counter",
                  label: "Counter",
                  prefix: {
                    type: "badge-counter",
                    counter: 5,
                    variant: "solid",
                    appearance: "strong",
                    size: "xs",
                  },
                },
                {
                  id: "file-type",
                  label: "File Type",
                  prefix: {
                    type: "file-type",
                    extension: "@placeholder",
                    size: "md",
                  },
                },
                {
                  id: "flag",
                  label: "Flag",
                  prefix: { type: "flag", code: "@placeholder" },
                },
                {
                  id: "logo",
                  label: "Logo",
                  prefix: { type: "logo", name: "@placeholder" },
                },
                {
                  id: "color-logo",
                  label: "Color Logo",
                  prefix: { type: "color-logo", name: "@placeholder" },
                },
                {
                  id: "emoji",
                  label: "Emoji",
                  prefix: {
                    type: "emoji",
                    name: "@placeholder",
                    skinColor: "light",
                    emojiFamily: "noto",
                    size: "medium",
                  },
                },
                {
                  id: "badge-dot",
                  label: "Dot Badge",
                  prefix: {
                    type: "badge-dot",
                    variant: "solid",
                    appearance: "strong",
                    color: "teal",
                    size: "lg",
                  },
                },
                {
                  id: "badge-status",
                  label: "Status Indicator",
                  prefix: {
                    type: "badge-status-indicator",
                    color: theme.color,
                    size: "xs",
                    status: {
                      online: {
                        label: "online",
                        color: "success",
                        icon: "check",
                      },
                    },
                  },
                },
                {
                  id: "badge-label",
                  label: "Label Badge",
                  prefix: {
                    type: "badge-label",
                    label: "New",
                    variant: "solid",
                    appearance: "strong",
                    size: "xs",
                    className: "mx-0",
                  },
                },
                {
                  id: "swatch",
                  label: "Swatch",
                  prefix: { type: "color-swatch", color: "teal", size: "xs" },
                },
                {
                  id: "kbd",
                  label: "Key",
                  prefix: { type: "kbd", children: "Key", size: "xs" },
                },
                {
                  id: "loader",
                  label: "Loader",
                  prefix: { type: "loader", size: "md" },
                },
              ].map((item) => (
                <ListboxItem
                  key={item.id}
                  label={item.label}
                  value={item.id}
                  isSelected
                  selectStyle={{ variant: "solid", appearance: "soft" }}
                  prefix={(item as any).prefix}
                  suffix={(item as any).suffix}
                  className="w-auto justify-center min-w-30"
                />
              ))}
            </div>
          </section>
        </LazySection>

        {/* Indicator Variants (Hover Styles) Table */}
        <LazySection>
          <section className={STORY_TABLE_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Indicator Variants (Hover Styles)
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Indicators on all the variants & appearances (hover state).
              </p>
            </div>
            <div className={`${SHOWCASE_SCROLL_X_CLASS} pt-4`}>
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr className={STORY_THEAD_TR_CLASS}>
                    <th className={STORY_TH_CLASS}>Variant × Appearance</th>
                    {[
                      "tick",
                      "default (single)",
                      "default (multiple)",
                      "none",
                    ].map((indicatorType) => (
                      <th key={indicatorType} className={STORY_TH_WIDE_CLASS}>
                        {indicatorType}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={STORY_TBODY_CLASS}>
                  {(
                    ["solid", "solid-outline", "outline", "ghost"] as const
                  ).flatMap((variant) =>
                    (["strong", "soft", "dualTone"] as const).map(
                      (appearance) => {
                        const rowKey = `${variant}-${appearance}`;
                        return (
                          <tr key={rowKey} className={STORY_TR_CLASS}>
                            <td className={STORY_TD_LABEL_CLASS}>
                              {variant} ({appearance})
                            </td>
                            {(
                              [
                                "tick",
                                "default (single)",
                                "default (multiple)",
                                "none",
                              ] as const
                            ).map((indicatorType) => {
                              let indicatorProps;
                              let itemMultiple: boolean | undefined;
                              if (indicatorType === "tick") {
                                indicatorProps = {
                                  type: "icon" as const,
                                  name: "@check",
                                };
                              } else if (indicatorType === "default (single)") {
                                indicatorProps = { type: "default" as const };
                              } else if (
                                indicatorType === "default (multiple)"
                              ) {
                                indicatorProps = { type: "default" as const };
                                itemMultiple = true;
                              } else {
                                indicatorProps = { type: "none" as const };
                              }
                              return (
                                <td
                                  key={`${rowKey}-${indicatorType}`}
                                  className={STORY_TD_CONTENT_CLASS}
                                >
                                  <div className="flex items-center justify-center">
                                    <ListboxItem
                                      size="sm"
                                      label={
                                        variant === "solid-outline"
                                          ? "Solid-Outline"
                                          : variant.charAt(0).toUpperCase() +
                                            variant.slice(1)
                                      }
                                      value={`${rowKey}-${indicatorType}`}
                                      isHighlighted
                                      hoverStyle={{ variant, appearance }}
                                      indicator={indicatorProps}
                                      multiple={itemMultiple}
                                      className="w-2/3 flex-none justify-center"
                                    />
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      },
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* Indicator Variants (Select Styles) Table */}
        <LazySection>
          <section className={STORY_TABLE_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Indicator Variants (Select Styles)
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Indicators on all the variants & appearances (selected state).
              </p>
            </div>
            <div className={`${SHOWCASE_SCROLL_X_CLASS} pt-4`}>
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr className={STORY_THEAD_TR_CLASS}>
                    <th className={STORY_TH_CLASS}>Variant × Appearance</th>
                    {[
                      "tick",
                      "default (single)",
                      "default (multiple)",
                      "none",
                    ].map((indicatorType) => (
                      <th key={indicatorType} className={STORY_TH_WIDE_CLASS}>
                        {indicatorType}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={STORY_TBODY_CLASS}>
                  {(
                    ["solid", "solid-outline", "outline", "ghost"] as const
                  ).flatMap((variant) =>
                    (["strong", "soft", "dualTone"] as const).map(
                      (appearance) => {
                        const rowKey = `${variant}-${appearance}`;
                        return (
                          <tr key={rowKey} className={STORY_TR_CLASS}>
                            <td className={STORY_TD_LABEL_CLASS}>
                              {variant} ({appearance})
                            </td>
                            {(
                              [
                                "tick",
                                "default (single)",
                                "default (multiple)",
                                "none",
                              ] as const
                            ).map((indicatorType) => {
                              let indicatorProps;
                              let itemMultiple: boolean | undefined;
                              if (indicatorType === "tick") {
                                indicatorProps = {
                                  type: "icon" as const,
                                  name: "@check",
                                };
                              } else if (indicatorType === "default (single)") {
                                indicatorProps = { type: "default" as const };
                              } else if (
                                indicatorType === "default (multiple)"
                              ) {
                                indicatorProps = { type: "default" as const };
                                itemMultiple = true;
                              } else {
                                indicatorProps = { type: "none" as const };
                              }
                              return (
                                <td
                                  key={`${rowKey}-${indicatorType}`}
                                  className={STORY_TD_CONTENT_CLASS}
                                >
                                  <div className="flex items-center justify-center">
                                    <ListboxItem
                                      size="sm"
                                      label={
                                        variant === "solid-outline"
                                          ? "Solid-Outline"
                                          : variant.charAt(0).toUpperCase() +
                                            variant.slice(1)
                                      }
                                      value={`${rowKey}-${indicatorType}`}
                                      isSelected
                                      selectStyle={{
                                        variant,
                                        appearance,
                                      }}
                                      indicator={indicatorProps}
                                      multiple={itemMultiple}
                                      className="w-2/3 flex-none justify-center"
                                    />
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      },
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* Size × Density Matrix */}
        {/* story section no 12 */}
        <LazySection>
          <div className="flex flex-col xl:flex-row gap-8 items-start">
            <section className={STORY_TABLE_SECTION_CLASS}>
              <div className={STORY_SECTION_HEADER_CLASS}>
                <h2 className={STORY_SECTION_TITLE_CLASS}>Size × Density</h2>
                <p className={STORY_SECTION_DESC_CLASS}>
                  Visual comparison of how density affects plain list item
                  dimensions.
                </p>
              </div>
              <div className={`${SHOWCASE_SCROLL_X_CLASS} pt-4`}>
                <table className={STORY_TABLE_CLASS}>
                  <thead>
                    <tr className={STORY_THEAD_TR_CLASS}>
                      <th className={STORY_TH_SIZE_CLASS}>Size</th>
                      {["compact", "standard", "spacious"].map((density) => (
                        <th key={density} className={STORY_TH_WIDE_CLASS}>
                          {density}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className={STORY_TBODY_CLASS}>
                    {(["xs", "sm", "base", "lg", "xl"] as const).map((size) => (
                      <tr key={size} className={STORY_TR_CLASS}>
                        <td className={STORY_TD_LABEL_SIZE_CLASS}>{size}</td>
                        {["compact", "standard", "spacious"].map(
                          (density: any) => (
                            <td
                              key={`${size}-${density}`}
                              className={STORY_TD_CONTENT_CLASS}
                            >
                              <div className="flex items-center justify-center">
                                <ListboxItem
                                  label="Item"
                                  value={`${size}-${density}`}
                                  spacing={density}
                                  isSelected
                                  selectStyle={{
                                    variant: "solid",
                                    appearance: "strong",
                                  }}
                                  className="w-2/3 flex-none justify-center"
                                  style={getDynamicListItemSizeStyles(
                                    size,
                                    density,
                                  )}
                                />
                              </div>
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </LazySection>

        {/* Size × Density (Helper Text) */}
        <LazySection>
          <div className={STORY_SECTION_CLASS}>
            <section className={STORY_TABLE_SECTION_CLASS}>
              <div className={STORY_SECTION_HEADER_CLASS}>
                <h2 className={STORY_SECTION_TITLE_CLASS}>
                  Size × Density (Helper Text)
                </h2>
                <p className={STORY_SECTION_DESC_CLASS}>
                  Visual comparison of how density affects list item dimensions
                  with helper text.
                </p>
              </div>
              <div className="overflow-x pt-4">
                <table className={STORY_TABLE_CLASS}>
                  <thead>
                    <tr className={STORY_THEAD_TR_CLASS}>
                      <th className={STORY_TH_SIZE_CLASS}>Size</th>
                      {["compact", "standard", "spacious"].map((density) => (
                        <th key={density} className={STORY_TH_WIDE_CLASS}>
                          {density}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className={STORY_TBODY_CLASS}>
                    {(["xs", "sm", "base", "lg", "xl"] as const).map((size) => (
                      <tr key={size} className={STORY_TR_CLASS}>
                        <td className={STORY_TD_LABEL_SIZE_CLASS}>{size}</td>
                        {["compact", "standard", "spacious"].map(
                          (density: any) => (
                            <td
                              key={`${size}-${density}`}
                              className={STORY_TD_CONTENT_CLASS}
                            >
                              <div className="flex items-center justify-center">
                                <ListboxItem
                                  label="Item"
                                  description={{ text: "Helper text" }}
                                  value={`${size}-${density}-helper`}
                                  spacing={density}
                                  isSelected
                                  selectStyle={{
                                    variant: "solid",
                                    appearance: "strong",
                                  }}
                                  prefix={{
                                    type: "icon",
                                    name: "@placeholder",
                                  }}
                                  className="w-2/3 flex-none justify-center"
                                  style={getDynamicListItemSizeStyles(
                                    size,
                                    density,
                                    true,
                                  )}
                                />
                              </div>
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </LazySection>
      </ShowcaseShell>
    );
}
