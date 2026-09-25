// @ts-nocheck
// Ported from origin/tag:src/components/Tag/stories/Tag.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/tag:src/components/Tag/stories/Tag.stories.tsx
import React from "react";
import { Tag } from "@inventive-ui/components/Tag";
import type { TagProps } from "@inventive-ui/components/Tag";
import {
  getDynamicTagSizeStyles,
  getBorderRadiusValue,
  mapSpacingToGap,
} from "../story-helpers/Tag/utils";
import { useStates } from "@inventive-ui/framework";
import {
  LazySection,
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";

const SHOWCASE_SIZES: NonNullable<TagProps["size"]>[] = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
];
const SHOWCASE_VARIANTS: NonNullable<TagProps["variant"]>[] = [
  "solid",
  "solid-outline",
  "outline",
  "ghost",
];
const SHOWCASE_APPEARANCES: NonNullable<TagProps["appearance"]>[] = [
  "strong",
  "soft",
  "dualTone",
  "onColor",
];
const SHOWCASE_COLORS: NonNullable<TagProps["color"]>[] = [
  "brand",
  "danger",
  "warning",
  "success",
  "info",
  "gray",
  "amber",
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
  "neutral",
];


export default function TagShowcase() {
    const globals = {};
    const theme = getShowcaseTheme(globals);

    /* The "focused" tile below depicts a state it can't actually be in: the real
       ring comes from the global states config behind `:focus-visible`, which
       nothing in a static gallery triggers. So read the same resolved config the
       Tag itself uses and paint it by hand — hardcoding a ring here just lets the
       showcase drift from the global whenever focus width/offset/colour change.
       Inline styles rather than the config's own classes because those are all
       `focus-visible:`-gated, and their ungated twins aren't in the built CSS. */
    const { focused: focusState } = useStates({ componentColor: theme.color });
    const focusRingStyle = React.useMemo<
      React.CSSProperties | undefined
    >(() => {
      const cfg = focusState.config;
      if (cfg.mode === "none") return undefined;

      const isDark = theme.resolvedMode === "dark";
      const toPx = (value: string | number) => {
        if (typeof value === "number") return value;
        const size = parseFloat(value) || 0;
        return value.endsWith("rem") || value.endsWith("em") ? size * 16 : size;
      };
      const toColor = (token: string) =>
        token === "white"
          ? "#fff"
          : token === "black"
            ? "#000"
            : `var(--iui-color-${token})`;

      const width = toPx(cfg.style.width);
      const offset = toPx(cfg.style.offset);
      // "adaptive" paints the colour the component is wearing; the other modes
      // carry their own, and "native" is the plain black/white system ring.
      const ring =
        cfg.mode === "native"
          ? isDark
            ? "white"
            : "black"
          : `${cfg.mode === "adaptive" ? theme.color : cfg.color}-${
              isDark ? cfg.shades.dark : cfg.shades.light
            }`;
      const offsetColor =
        (isDark ? cfg.style.offsetColor?.dark : cfg.style.offsetColor?.light) ??
        (isDark ? "neutral-900" : "white");

      return {
        boxShadow: `0 0 0 ${offset}px ${toColor(offsetColor)}, 0 0 0 ${
          offset + width
        }px ${toColor(ring)}`,
      };
    }, [focusState.config, theme.color, theme.resolvedMode]);

    const sizes = SHOWCASE_SIZES;
    const variants = SHOWCASE_VARIANTS;
    const appearances = SHOWCASE_APPEARANCES;
    const colors = SHOWCASE_COLORS;

    // Interactive Filter Tag Component
    const FilterTagExample = () => {
      const [isSelected, setIsSelected] = React.useState(false);
      return (
        <Tag
          cTag="default"
          variant={isSelected ? "solid" : "outline"}
          appearance={isSelected ? "strong" : "soft"}
          color={isSelected ? theme.color : "neutral"}
          label="Filter"
          isSelected={isSelected}
          selectStyle={{ variant: "solid", appearance: "strong" }}
          onClick={() => setIsSelected(!isSelected)}
        />
      );
    };

    // Interactive Filter Group Showcase Component
    const FilterGroupShowcase = ({
      groupClassName,
      label = "Layout",
      indicator,
      multiple = true,
    }: {
      groupClassName?: string;
      label?: string;
      indicator?: any;
      multiple?: boolean;
    }) => {
      const [selectedTags, setSelectedTags] = React.useState<string[]>(["1"]);
      const items = [
        { id: "1", label: "React" },
        { id: "2", label: "Vue" },
        { id: "3", label: "Angular" },
        { id: "4", label: "Svelte" },
        { id: "5", label: "Next.js" },
        { id: "6", label: "Vite" },
      ];

      const toggleTag = (id: string) => {
        setSelectedTags((prev) =>
          prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
        );
      };

      return (
        <div className="flex flex-col gap-3 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm w-full max-w-md">
          <div className="flex items-center justify-between border-b pb-2 mb-1">
            <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-tight">
              {label}
            </span>
            <span className="text-2.5 font-medium text-neutral-400 dark:text-neutral-500">
              {groupClassName ? `className="${groupClassName}"` : "default"}
            </span>
          </div>
          <Tag.Group className={groupClassName} multiple={multiple}>
            {items.map((item) => (
              <Tag.Filter
                key={item.id}
                cTag="default"
                label={item.label}
                isSelected={selectedTags.includes(item.id)}
                onClick={() => toggleTag(item.id)}
                variant="solid-outline"
                appearance="soft"
                color={theme.color}
                selectStyle={{ appearance: "strong", variant: "solid-outline" }}
                indicator={indicator}
              />
            ))}
          </Tag.Group>
        </div>
      );
    };

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Tag Component Showcase
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Comprehensive visual reference of all tag variants, sizes, and
            states
          </p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <div className="flex flex-col items-center gap-2">
            <Tag
              label="Tag"
              cTag="default"
              variant="solid"
              appearance="strong"
              color={theme.color}
              prefix={{ type: "icon", name: "@placeholder" }}
              size="xs"
            />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Size: xs
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tag
              label="Tag"
              cTag="default"
              variant="solid"
              appearance="strong"
              color={theme.color}
              prefix={{ type: "icon", name: "@placeholder" }}
              size="sm"
            />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Size: sm
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tag
              label="Tag"
              cTag="default"
              variant="solid"
              appearance="strong"
              color={theme.color}
              prefix={{ type: "icon", name: "@placeholder" }}
              size="base"
            />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Size: base
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tag
              label="Tag"
              cTag="default"
              variant="solid"
              appearance="strong"
              color={theme.color}
              prefix={{ type: "icon", name: "@placeholder" }}
              size="lg"
            />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Size: lg
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tag
              label="Tag"
              cTag="default"
              variant="solid"
              appearance="strong"
              color={theme.color}
              prefix={{ type: "icon", name: "@placeholder" }}
              size="xl"
            />
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Size: xl
            </span>
          </div>
        </div>
        {/* Type Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Type Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Different tag types for specific interactions
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  type="default"
                  label="Default"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  default
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag.Menu
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Menu"
                  menuIcon={{
                    expand: { type: "icon", name: "@expand" },
                    collapse: { type: "icon", name: "@collapse" },
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  menu
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag.Split
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Split"
                  menuIcon={{
                    expand: { type: "icon", name: "@expand" },
                    collapse: { type: "icon", name: "@collapse" },
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  split
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag.Input
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Input"
                  input
                  actionIcon={{
                    type: "icon",
                    name: "@close",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  input
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FilterTagExample />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  filter (click me)
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  as="a"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  href="https://example.com"
                  target="_blank"
                  label="Link Tag"
                  prefix={{
                    type: "icon",
                    name: "@launch",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  anchor
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Filter Tag Layouts */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Filter Tag Layouts
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Demonstrating various layout configurations for filterable tag
                groups
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  Flex Layouts
                </h3>
                <div className="flex flex-col gap-6">
                  <FilterGroupShowcase label="Horizontal (Row)" />
                  <FilterGroupShowcase
                    groupClassName="flex-col"
                    label="Vertical (Column)"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  Grid Layouts
                </h3>
                <div className="flex flex-col gap-6">
                  <FilterGroupShowcase
                    groupClassName="grid grid-cols-2"
                    label="Grid (2 Columns)"
                  />
                  <FilterGroupShowcase
                    groupClassName="grid grid-cols-3"
                    label="Grid (3 Columns)"
                  />
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Filter Configurations */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Filter Configurations
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Demonstrating selection indicators and their positions
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  Indicator Options
                </h3>
                <div className="flex flex-col gap-6">
                  <FilterGroupShowcase
                    indicator="none"
                    label='indicator="none" (Clean Selection)'
                  />
                  <FilterGroupShowcase
                    indicator="default"
                    multiple
                    label='indicator="default" + multiple → Checkbox'
                  />
                  <FilterGroupShowcase
                    indicator="default"
                    multiple={false}
                    label='indicator="default" + single → Radio'
                  />
                  <FilterGroupShowcase
                    indicator={{ type: "icon", name: "@check" }}
                    label="Custom Slot (checkmark, selected only)"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  Indicator Positions
                </h3>
                <div className="flex flex-col gap-6">
                  <FilterGroupShowcase
                    indicator={{
                      type: "icon",
                      name: "@check",
                      placement: "start",
                    }}
                    label="Indicator Start (Left)"
                  />
                  <FilterGroupShowcase
                    indicator={{
                      type: "icon",
                      name: "@check",
                      placement: "end",
                    }}
                    label="Indicator End (Right)"
                  />
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Color Palette */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Color Palette
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                All semantic colors available in the design system
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {colors.map((color: string) => (
                <div key={color} className="flex flex-col items-center gap-2">
                  <Tag
                    cTag="default"
                    variant="solid"
                    appearance="strong"
                    color={color}
                    label={color.charAt(0).toUpperCase() + color.slice(1)}
                  />
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* Global Radius Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Radius Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Different corner radius presets from the global theme
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  size="base"
                  appearance="strong"
                  color={theme.color}
                  label="None"
                  style={{ borderRadius: getBorderRadiusValue("none", "base") }}
                  className="p-2"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  none
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Sm"
                  style={{ borderRadius: getBorderRadiusValue("sm", "base") }}
                  className="p-2"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  sm
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Md"
                  style={{ borderRadius: getBorderRadiusValue("md", "base") }}
                  className="p-2"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  md
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Lg"
                  style={{ borderRadius: getBorderRadiusValue("lg", "base") }}
                  className="p-2"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  lg
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Full"
                  style={{ borderRadius: getBorderRadiusValue("full", "base") }}
                  className="p-2"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  full
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Global Font Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Font Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Different font family presets from the global theme
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Inter"
                  className=""
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  inter
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Arial"
                  className="font-arial"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  arial
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Mono"
                  className="font-mono"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  mono
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Size × Density Matrix (Plain) */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Size × Density Matrix (Plain)
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Visual comparison of how density affects plain tag dimensions
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-start text-sm font-semibold">
                      Size
                    </th>
                    {["compact", "standard", "spacious"].map((density) => (
                      <th
                        key={density}
                        className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-center text-sm font-semibold"
                      >
                        {density.charAt(0).toUpperCase() + density.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((size) => (
                    <tr key={size}>
                      <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-sm font-medium">
                        {size}
                      </td>
                      {["compact", "standard", "spacious"].map(
                        (density: any) => (
                          <td
                            key={`${size}-${density}`}
                            className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center"
                            style={{ minWidth: "150px" }}
                          >
                            <div className="flex items-center justify-center">
                              <Tag
                                cTag="default"
                                size={size}
                                variant="solid"
                                appearance="strong"
                                color={theme.color}
                                label="Tag"
                                className={mapSpacingToGap(
                                  density,
                                  size as any,
                                )}
                                style={getDynamicTagSizeStyles(
                                  size,
                                  density as any,
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
        </LazySection>

        {/* Size × Density Matrix (with Prefix) */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Size × Density Matrix (with Prefix)
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Visual comparison of how density affects tags with prefixes
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-start text-sm font-semibold">
                      Size
                    </th>
                    {["compact", "standard", "spacious"].map((density) => (
                      <th
                        key={density}
                        className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-center text-sm font-semibold"
                      >
                        {density.charAt(0).toUpperCase() + density.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((size) => (
                    <tr key={size}>
                      <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-sm font-medium">
                        {size}
                      </td>
                      {["compact", "standard", "spacious"].map(
                        (density: any) => (
                          <td
                            key={`${size}-${density}`}
                            className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center"
                            style={{ minWidth: "150px" }}
                          >
                            <div className="flex items-center justify-center">
                              <Tag
                                cTag="default"
                                size={size}
                                variant="solid"
                                appearance="strong"
                                color={theme.color}
                                label="Tag"
                                prefix={{
                                  type: "icon",
                                  name: "@placeholder",
                                }}
                                className={mapSpacingToGap(
                                  density,
                                  size as any,
                                )}
                                style={getDynamicTagSizeStyles(
                                  size,
                                  density as any,
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
        </LazySection>

        {/* Size × Density Matrix (with Helper Text) */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Size × Density Matrix (with Helper Text)
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Visual comparison of how density affects tags with helper text
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-start text-sm font-semibold">
                      Size
                    </th>
                    {["compact", "standard", "spacious"].map((density) => (
                      <th
                        key={density}
                        className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-center text-sm font-semibold"
                      >
                        {density.charAt(0).toUpperCase() + density.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((size) => (
                    <tr key={size}>
                      <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-sm font-medium">
                        {size}
                      </td>
                      {["compact", "standard", "spacious"].map(
                        (density: any) => (
                          <td
                            key={`${size}-${density}`}
                            className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center"
                            style={{ minWidth: "200px" }}
                          >
                            <div className="flex items-center justify-center">
                              <Tag
                                cTag="default"
                                size={size}
                                variant="solid"
                                appearance="soft"
                                color="neutral"
                                label="Tag"
                                prefix={{
                                  type: "avatar",
                                  name: "tag",
                                  img: {
                                    src: "https://i.pravatar.cc/300",
                                    alt: "User",
                                  },
                                }}
                                description="Helper Text"
                                className={mapSpacingToGap(
                                  density,
                                  size as any,
                                )}
                                style={getDynamicTagSizeStyles(
                                  size,
                                  density as any,
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
        </LazySection>

        {/* Style Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Style Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Different visual styles for various use cases
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {variants.map((variant) => (
                <div key={variant} className="flex flex-col items-center gap-2">
                  <Tag
                    cTag="default"
                    variant={variant}
                    appearance="strong"
                    color={theme.color}
                    label={
                      variant === "solid-outline"
                        ? "Solid-Outline"
                        : variant.charAt(0).toUpperCase() + variant.slice(1)
                    }
                  />
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {variant}
                  </span>
                </div>
              ))}
            </div>

            {/* Style × InteractionVariant Matrix */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Style × InteractionVariant Matrix
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Explore how different style variants interact with hover
                behaviors
              </p>
              <div className="overflow-x-auto">
                <table className="border-collapse border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-start text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        Style / Interaction
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "150px" }}
                      >
                        Solid
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "150px" }}
                      >
                        Outline
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "180px" }}
                      >
                        Solid-Outline
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "150px" }}
                      >
                        Ghost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((variant) => (
                      <tr key={variant}>
                        <td className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {variant === "solid-outline"
                            ? "Solid-Outline"
                            : variant.charAt(0).toUpperCase() +
                              variant.slice(1)}
                        </td>
                        <td className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center">
                          <div className="flex items-center justify-center">
                            <Tag
                              cTag="default"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              label="Tag"
                              hoverStyle={{ variant: "solid" }}
                            />
                          </div>
                        </td>
                        <td className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center">
                          <div className="flex items-center justify-center">
                            <Tag
                              cTag="default"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              label="Tag"
                              hoverStyle={{ variant: "outline" }}
                            />
                          </div>
                        </td>
                        <td className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center">
                          <div className="flex items-center justify-center">
                            <Tag
                              cTag="default"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              label="Tag"
                              hoverStyle={{ variant: "solid-outline" }}
                            />
                          </div>
                        </td>
                        <td className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center">
                          <div className="flex items-center justify-center">
                            <Tag
                              cTag="default"
                              variant={variant}
                              appearance="strong"
                              color={theme.color}
                              label="Tag"
                              hoverStyle={{ variant: "ghost" }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Split: Variant x Hover Matrix */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Split: Variant × Hover Matrix
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Explore how split tags interact with hover behaviors across all
                variants. Hover over the tags to see the effects.
              </p>
              <div className="overflow-x-auto">
                <table className="border-collapse border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-start text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        Variant / Hover Variant
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "150px" }}
                      >
                        Solid
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "150px" }}
                      >
                        Outline
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "180px" }}
                      >
                        Solid-Outline
                      </th>
                      <th
                        className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                        style={{ minWidth: "150px" }}
                      >
                        Ghost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((variant) => (
                      <tr key={variant}>
                        <td className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {variant === "solid-outline"
                            ? "Solid-Outline"
                            : variant.charAt(0).toUpperCase() +
                              variant.slice(1)}
                        </td>
                        {(
                          [
                            "solid",
                            "outline",
                            "solid-outline",
                            "ghost",
                          ] as const
                        ).map((hoverV) => (
                          <td
                            key={hoverV}
                            className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center"
                          >
                            <div className="flex items-center justify-center">
                              <Tag.Split
                                cTag="default"
                                variant={variant}
                                appearance="strong"
                                color={theme.color}
                                label="Split"
                                hoverStyle={{ variant: hoverV }}
                                menuIcon={{
                                  expand: { type: "icon", name: "@expand" },
                                  collapse: { type: "icon", name: "@collapse" },
                                }}
                              />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Appearance Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Appearance Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Different visual appearances for emphasis and context
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {appearances.map((appearance) => (
                <div
                  key={appearance}
                  className="flex flex-col items-center gap-2"
                >
                  {appearance === "onColor" ? (
                    <div className="bg-brand-600 p-4 rounded-lg">
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance={appearance}
                        color={theme.color}
                        label={
                          appearance.charAt(0).toUpperCase() +
                          appearance.slice(1)
                        }
                      />
                    </div>
                  ) : (
                    <Tag
                      cTag="default"
                      variant="solid"
                      appearance={appearance}
                      color={theme.color}
                      label={
                        appearance.charAt(0).toUpperCase() + appearance.slice(1)
                      }
                    />
                  )}
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {appearance}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* Appearance × Interaction Appearance Matrix */}
        <LazySection>
          <div className="mt-8 space-y-4 px-4 pb-8">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Appearance × Interaction Appearance Matrix
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Explore how soft and dualTone appearances interact with different
              interaction appearances
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-800">
                    <th className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-start text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      Base / Interaction
                    </th>

                    <th
                      className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                      style={{ minWidth: "150px" }}
                    >
                      Soft
                    </th>
                    <th
                      className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                      style={{ minWidth: "150px" }}
                    >
                      Strong
                    </th>
                    <th
                      className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-300"
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
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {row.label}
                      </td>
                      {["soft", "strong", "dualTone"].map((intAppearance) => (
                        <td
                          key={intAppearance}
                          className="border border-neutral-300 dark:border-neutral-700 px-6 py-8 text-center"
                        >
                          <div className="flex items-center justify-center">
                            <Tag
                              cTag="default"
                              variant="solid"
                              appearance={row.appearance as any}
                              color={row.color as any}
                              label="Tag"
                              hoverStyle={{
                                variant: "solid",
                                appearance: intAppearance as any,
                                color: row.interactionColor as any,
                              }}
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </LazySection>

        {/* Adaptive Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Adaptive Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Automatic styling adjustments based on adaptive prop in Light
                and Dark modes
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {/* Light Mode */}
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <span className="text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider border-b pb-2">
                  Light Mode
                </span>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                      Adaptive: false (Default)
                    </span>
                    <div className="flex gap-2">
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="strong"
                        color={theme.color}
                        label="Strong"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="soft"
                        color={theme.color}
                        label="Soft"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="dualTone"
                        color={theme.color}
                        label="DualTone"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="onColor"
                        color={theme.color}
                        label="onColor"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                      Adaptive: true
                    </span>
                    <div className="flex gap-2">
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="strong"
                        color={theme.color}
                        label="Strong"
                        adaptive
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="soft"
                        color={theme.color}
                        label="Soft"
                        adaptive
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="dualTone"
                        color={theme.color}
                        label="DualTone"
                        adaptive
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="onColor"
                        color={theme.color}
                        label="onColor"
                        adaptive
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Mode Simulation */}
              <div className="flex flex-col gap-4 p-6 bg-neutral-900 border border-neutral-700 rounded-lg dark text-white">
                <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-700 pb-2">
                  Dark Mode
                </span>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-neutral-500">
                      Adaptive: false (Default)
                    </span>
                    <div className="flex gap-2">
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="strong"
                        color={theme.color}
                        label="Strong"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="soft"
                        color={theme.color}
                        label="Soft"
                        className="dark:bg-brand-950 dark:text-brand-300"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="dualTone"
                        color={theme.color}
                        label="DualTone"
                        className="dark:bg-neutral-950 dark:text-brand-300"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="onColor"
                        color={theme.color}
                        label="onColor"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-neutral-500">
                      Adaptive: true
                    </span>
                    <div className="flex gap-2">
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="strong"
                        color={theme.color}
                        label="Strong"
                        adaptive
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="soft"
                        color={theme.color}
                        label="Soft"
                        adaptive
                        className="dark:bg-brand-950 dark:text-brand-300"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="dualTone"
                        color={theme.color}
                        label="DualTone"
                        adaptive
                        className="dark:bg-neutral-950 dark:text-brand-300"
                      />
                      <Tag
                        cTag="default"
                        variant="solid"
                        appearance="onColor"
                        color={theme.color}
                        label="onColor"
                        adaptive
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Helper Text Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Helper Text Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Additional context/labeling support
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Top"
                  description={{ text: "Label", placement: "top" }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  top
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Bottom"
                  description={{ text: "Label", placement: "bottom" }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  below
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* State Variants */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                State Variants
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Visual feedback for different component states
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Normal"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  normal
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Hover"
                  className="bg-brand-600"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  hover
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Pressed"
                  className="bg-brand-700"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  pressed
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Focused"
                  style={focusRingStyle}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  focused
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Disabled"
                  disabled
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  disabled
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Loading"
                  loading
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  loading
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Slot Options */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Slot Options
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Left and Right slots for icons or other content
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Icon"
                  prefix={{
                    type: "icon",
                    name: "@placeholder",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  icon
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  label="Avatar"
                  prefix={{
                    type: "avatar",
                    name: "profile",
                    img: { src: "https://i.pravatar.cc/300", alt: "User" },
                    size: "sm",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  avatar
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Counter"
                  suffix={{
                    type: "badge-counter",
                    counter: 5,
                    appearance: "strong",
                    color: theme.color,
                    variant: "solid",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  counter
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="dualTone"
                  color={theme.color}
                  label="File Type"
                  prefix={{ type: "file-type", extension: "@placeholder" }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  file-type
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="dualTone"
                  color={theme.color}
                  label="Flag"
                  prefix={{
                    type: "flag",
                    code: "@placeholder",
                    shape: "rectangle",
                    size: "sm",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  flag
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Logo"
                  prefix={{ type: "logo", name: "@placeholder", size: "sm" }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  logo
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  label="Color Logo"
                  prefix={{
                    type: "color-logo",
                    name: "@placeholder",
                    size: "lg",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  color-logo
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  label="Emoji"
                  prefix={{
                    type: "emoji",
                    name: "@placeholder",
                    size: "medium",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  emoji
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  label="Dot Badge"
                  suffix={{
                    type: "badge-dot",
                    color: theme.color,
                    appearance: "strong",
                    variant: "solid",
                    size: "sm",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  badge-dot
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  label="Status Indicator"
                  prefix={{
                    type: "badge-status-indicator",
                    color: theme.color,
                    appearance: "strong",
                    size: "sm",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  badge-status
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  label="Label Badge"
                  suffix={{
                    type: "badge-label",
                    label: "New",
                    color: theme.color,
                    appearance: "strong",
                    variant: "solid",
                    size: "xs",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  badge-label
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="soft"
                  color={theme.color}
                  label="Swatch"
                  prefix={{
                    type: "color-swatch",
                    color: theme.color,
                    variant: "solid",
                    size: "sm",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  swatch
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="outline"
                  appearance="strong"
                  color="neutral"
                  label="Key"
                  suffix={{
                    type: "kbd",
                    label: "C",
                    size: "xs",
                    appearance: "soft",
                    raised: true,
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  kbd
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Loader"
                  prefix={{
                    type: "loader",
                    name: "ring",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  loader
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Custom Styling */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Custom Styling
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                One-off style overrides using inline styles
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="outline"
                  appearance="strong"
                  color={theme.color}
                  label="Dashed"
                  className="outline-dashed"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  dashed
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Shadow"
                  className="shadow-md"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  shadow
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Gradient"
                  style={{
                    background:
                      "linear-gradient(135deg, #0d9488 0%, #7c3aed 100%)",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  gradient
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="custom"
                  style={{ borderRadius: "0.5rem 0 0.5rem 0" }}
                  className="p-2"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Custom Radius
                </span>
              </div>
              <div
                className="flex flex-col items-center gap-2 p-4 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                }}
              >
                <Tag
                  cTag="default"
                  variant="ghost"
                  appearance="onColor"
                  color="neutral"
                  label="Glass"
                  style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: "white",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Glass
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="outline"
                  appearance="strong"
                  color="blue"
                  label="Glow"
                  className="shadow-[0_0_15px_rgba(59,130,246,0.6)] border-blue-400 text-blue-500 bg-blue-50"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Neon
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag.Input
                  cTag="default"
                  variant="solid"
                  appearance="dualTone"
                  color="neutral"
                  label="abcd.pdf"
                  prefix={{
                    type: "file-type",
                    extension: "@placeholder",
                  }}
                  suffix={{
                    type: "icon",
                    name: "@close",
                  }}
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  File
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Striped"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)",
                    backgroundSize: "1rem 1rem",
                  }}
                  className="p-2"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Striped
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tag
                  cTag="default"
                  variant="solid"
                  appearance="strong"
                  color={theme.color}
                  label="Scale"
                  className="transition-transform hover:-rotate-3 hover:scale-110 origin-center duration-300 cursor-pointer"
                />
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Scale
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Helper Text Layout Verification */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Helper Text Layout
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Verifying left alignment of the label and description lines
              </p>
            </div>
            <div className="w-full bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg space-y-4">
              <Tag.Input
                cTag="default"
                color={theme.color}
                variant="solid"
                appearance="strong"
                label="Tag"
                description="Long helper text content spanning width"
                prefix={{ type: "icon", name: "@placeholder" }}
                actionIcon={{
                  type: "icon",
                  name: "@close",
                }}
              />
            </div>
          </section>
        </LazySection>
      </ShowcaseShell>
    );
}
