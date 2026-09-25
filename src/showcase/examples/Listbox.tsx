// Showcase ported from origin/listbox:src/components/Listbox/stories/Listbox.stories.tsx
import React from "react";
import { useState } from "react";
import { Listbox } from "@inventive-ui/components/Listbox";
import { cn } from "@inventive-ui/framework";

// `ListboxOptionWrapper` (from "../Listbox") is not exported by the installed subpath; the package exposes the same component as `Listbox.Item`.
const ListboxOptionWrapper = Listbox.Item;
import { LazySection } from "../storybook";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS, SHOWCASE_HEADER_WRAP_CLASS, SHOWCASE_ROW_CLASS, SHOWCASE_SCROLL_X_CLASS, SHOWCASE_SUBTITLE_CLASS, SHOWCASE_TITLE_CLASS } from "../storybook";

const STORY_SECTION_CLASS = "space-y-6";

const STORY_SECTION_HEADER_CLASS = "space-y-1";

const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-semibold text-gray-900 dark:text-gray-100";

const STORY_SECTION_DESC_CLASS = "text-sm text-gray-600 dark:text-gray-400";

const STORY_H3_UPPERCASE_CLASS =
  "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase";

const baseData = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const largeData = [
  { label: "Apricot", value: "apricot" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Coconut", value: "coconut" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
  { label: "Fig", value: "fig" },
  { label: "Grape", value: "grape" },
  { label: "Honeydew", value: "honeydew" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Lemon", value: "lemon" },
  { label: "Nectarine", value: "nectarine" },
  { label: "Orange", value: "orange" },
  { label: "Papaya", value: "papaya" },
  { label: "Raspberry", value: "raspberry" },
  { label: "Strawberry", value: "strawberry" },
];

export default function ListboxShowcase() {
  const globals: Record<string, any> = {};
    const theme = getShowcaseTheme(globals);
    const BASE_HEIGHT_MAP: Record<string, number> = {
      xs: 32,
      sm: 40,
      base: 48,
      lg: 56,
      xl: 64,
    };

    // @ts-ignore -- unused in the original story (noUnusedLocals)
    const getDynamicListboxItemSizeStyles = (
      size: "xs" | "sm" | "base" | "lg" | "xl",
      spacing: "compact" | "standard" | "spacious",
    ): React.CSSProperties => {
      const baseHeight = BASE_HEIGHT_MAP[size] ?? BASE_HEIGHT_MAP.base;
      let finalHeight = baseHeight;
      if (spacing === "compact") finalHeight = baseHeight - 8;
      if (spacing === "spacious") finalHeight = baseHeight + 8;

      // @ts-ignore -- unused in the original story (noUnusedLocals)
      const vPadMap = {
        compact: "4px",
        standard: "6px",
        spacious: "8px",
      };

      // @ts-ignore -- unused in the original story (noUnusedLocals)
      const hPadMap = {
        compact: "12px",
        standard: "16px",
        spacious: "20px",
      };

      const fontSizeMap = {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
      };

      return {
        height: `${finalHeight}px`,
        fontSize: fontSizeMap[size],
        lineHeight: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    };

    // @ts-ignore -- unused in the original story (noUnusedLocals)
    const mapSpacingToGap = (spacing: "compact" | "standard" | "spacious") => {
      switch (spacing) {
        case "compact":
          return "gap-2";
        case "standard":
          return "gap-4";
        case "spacious":
          return "gap-5";
        default:
          return "gap-4";
      }
    };
    // @ts-ignore -- unused in the original story (noUnusedLocals)
    const InteractiveListboxItem = (props: any) => {
      const [isSelected, setIsSelected] = useState(false);
      return (
        <ListboxOptionWrapper
          {...props}
          isSelected={isSelected}
          onClick={(e: React.MouseEvent) => {
            props.onClick?.(e);
            setIsSelected(!isSelected);
          }}
        />
      );
    };

    const PopoverShowcase = () => {
      const [selected, setSelected] = useState<string[]>([]);
      return (
        <Listbox.Popover
          multiple={true}
          items={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Cherry", value: "cherry" },
            { label: "Mango", value: "mango" },
          ]}
          value={selected}
          onChange={(val: any) => {
            if (Array.isArray(val)) setSelected(val);
            else setSelected(val ? [val] : []);
          }}
          trigger={
            <button className="px-5 py-2 rounded-md outline outline-1 outline-gray-300 dark:outline-neutral-800 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-neutral-100 font-medium hover:bg-gray-200 dark:hover:bg-neutral-700 transition cursor-pointer">
              Select
            </button>
          }
          popoverProps={{
            cTag: "listbox-popover-showcase",
            placement: "top",
            defaultOpen: false,
            showArrow: false,
          }}
          color={theme.color}
          className="w-60"
          indicator={{ type: "icon", name: "@check", placement: "start" }}
          selectStyle={{ variant: "solid", appearance: "soft", accent: true }}
          hoverStyle={{ variant: "solid", appearance: "soft" }}
        />
      );
    };

    const ListboxStyleInteractionMatrix = () => {
      const selectVariants = [
        "solid",
        "solid-outline",
        "outline",
        "ghost",
      ] as const;
      const hoverVariants = [
        "solid",
        "outline",
        "solid-outline",
        "ghost",
      ] as const;

      const [selectAppearance, setSelectAppearance] = useState<
        "strong" | "soft" | "dualTone"
      >("strong");
      const [hoverAppearance, setHoverAppearance] = useState<
        "strong" | "soft" | "dualTone"
      >("soft");

      const [matrixSelections, setMatrixSelections] = useState<
        Record<string, string[]>
      >(() => {
        const initial: Record<string, string[]> = {};
        selectVariants.forEach((s) => {
          hoverVariants.forEach((h) => {
            initial[`${s}-${h}`] = ["banana"];
          });
        });
        return initial;
      });

      return (
        <div className="bg-white dark:bg-neutral-900  border border-solid border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6 w-full overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-gray-100 dark:border-neutral-800 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-x-12 gap-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
                listbox variant Matrix
              </h3>
              <div className={`${SHOWCASE_ROW_CLASS} gap-4 pt-2`}>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                    Select Appearance
                  </span>
                  <select
                    value={selectAppearance}
                    onChange={(e) => setSelectAppearance(e.target.value as any)}
                    className="bg-neutral-50 border border-gray-200 text-gray-800 text-xs rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 font-medium cursor-pointer"
                  >
                    <option value="strong">Strong</option>
                    <option value="soft">Soft</option>
                    <option value="dualTone">Dual Tone</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                    Hover Appearance
                  </span>
                  <select
                    value={hoverAppearance}
                    onChange={(e) => setHoverAppearance(e.target.value as any)}
                    className="bg-neutral-50 border border-gray-200 text-gray-800 text-xs rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 font-medium cursor-pointer"
                  >
                    <option value="strong">Strong</option>
                    <option value="soft">Soft</option>
                    <option value="dualTone">Dual Tone</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-neutral-400 max-w-3xl">
              Explore how different select styles (rows) interact with hover
              behaviors (columns). Use the controls on the right to dynamically
              adjust select/hover appearances.
            </p>
          </div>

          <div className={SHOWCASE_SCROLL_X_CLASS}>
            <table className="w-full border-collapse border border-gray-200 dark:border-neutral-800">
              <thead>
                <tr>
                  <th className="border border-gray-200 dark:border-neutral-800 p-4 text-center text-xs font-bold text-gray-700 dark:text-neutral-300 bg-neutral-50/50 dark:bg-neutral-850/30 uppercase tracking-wider w-40">
                    Style / Interaction
                  </th>
                  {hoverVariants.map((hv) => (
                    <th
                      key={hv}
                      className="border border-gray-200 dark:border-neutral-800 p-4 text-center text-xs font-bold text-gray-700 dark:text-neutral-300 bg-neutral-50/50 dark:bg-neutral-850/30 uppercase tracking-wider"
                    >
                      {hv === "solid-outline"
                        ? "Solid-Outline"
                        : hv.charAt(0).toUpperCase() + hv.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selectVariants.map((sv) => (
                  <tr
                    key={sv}
                    className="hover:bg-neutral-50/20 dark:hover:bg-neutral-850/10 transition-colors"
                  >
                    <td className="border border-gray-200 dark:border-neutral-800 p-4 font-bold text-xs text-gray-800 dark:text-neutral-200 capitalize bg-neutral-50/30 dark:bg-neutral-850/10 w-40">
                      {sv === "solid-outline"
                        ? "Solid-Outline"
                        : sv.charAt(0).toUpperCase() + sv.slice(1)}
                    </td>
                    {hoverVariants.map((hv) => {
                      const cellKey = `${sv}-${hv}`;
                      return (
                        <td
                          key={cellKey}
                          className="border border-gray-200 dark:border-neutral-800 p-4"
                        >
                          <div className="flex justify-center scale-95 origin-center">
                            <div className="w-48">
                              <Listbox
                                size="sm"
                                color={theme.color}
                                selectStyle={{
                                  variant: sv,
                                  appearance: selectAppearance,
                                }}
                                hoverStyle={{
                                  variant: hv,
                                  appearance: hoverAppearance,
                                  color: "same",
                                }}
                                indicator={{
                                  type: "icon",
                                  name: "@check",
                                  placement: "end",
                                }}
                                items={baseData}
                                multiple={true}
                                value={matrixSelections[cellKey]}
                                onChange={(nextValue) =>
                                  setMatrixSelections((prev) => ({
                                    ...prev,
                                    [cellKey]: nextValue as string[],
                                  }))
                                }
                              />
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    const EmptyStateShowcase = () => {
      const [selected, setSelected] = useState<string[]>([]);
      return (
        <div className="w-80 flex flex-col gap-6">
          <Listbox
            size="sm"
            selectStyle={{ variant: "solid", appearance: "strong" }}
            hoverStyle={{
              variant: "solid",
              appearance: "strong",
              color: "same",
            }}
            indicator={{ type: "none" }}
            empty={true}
            items={[]}
            onChange={(val: any) => {
              if (Array.isArray(val)) setSelected(val);
              else setSelected(val ? [val] : []);
            }}
            emptyStateData={{
              className: "w-full max-w-full px-4",
              title: {
                children: "No results found",
                as: "h2",
                className: "text-greys-80 dark:text-greys-10",
                size: "2xl",
                weight: "semibold",
              },
              description: {
                type: "text",
                ctag: "empty-state-description",
                children: [
                  "Try adjusting your search or filters to find what you're looking for.",
                ],
                size: "xs",
              },
              illustrationSlot: {
                type: "illustration",
                name: "amico-404-error-page-not-found-with-people-connecting-a-plug-hidden",
                size: "sm",
              },
            }}
          />

          <div className="rounded-md outline outline-1 outline-neutral-200 dark:outline-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100">
            <span className="text-neutral-700 dark:text-neutral-300">
              Selected:
            </span>
            <span className="ms-2 font-semibold text-red-600 dark:text-red-400">
              {selected.length ? selected.join(",") : "None"}
            </span>
          </div>
        </div>
      );
    };

    return (
      <ShowcaseShell
        globals={globals}
        className={cn(
          SHOWCASE_CONTAINER_CLASS,
          "w-full bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100",
        )}
      >
        <div className={SHOWCASE_HEADER_WRAP_CLASS}>
          <h1 className={SHOWCASE_TITLE_CLASS}>Listbox Showcase</h1>
          <p className={SHOWCASE_SUBTITLE_CLASS}>
            Versatile selection and display component with support for multiple
            selection, custom items, and various presentation styles.
          </p>
        </div>

        {/* showcase sections */}

        {/* sec1: single seleect vs multi select */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Selection Variants</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Comparison between single and multiple selection behaviors.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Single Select */}
              <div className="space-y-3 w-80">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>Single Select</h3>

                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "soft",
                    color: "same",
                  }}
                  indicator={{ type: "default", placement: "start" }}
                  items={baseData}
                ></Listbox>
              </div>

              {/* Multi Select */}
              <div className="space-y-3 w-80">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>Multi Select</h3>

                <Listbox
                  size="sm"
                  selectStyle={{
                    variant: "solid",
                    appearance: "strong",
                  }}
                  multiple={true}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "soft",
                    color: "same",
                  }}
                  indicator={{ type: "default", placement: "start" }}
                  items={baseData}
                ></Listbox>
              </div>
            </div>
          </section>
        </LazySection>

        {/* sec2: sel indicator varint  */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Selection Indicators
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Different visual indicators used to represent selection state.
              </p>
            </div>

            <div className="rounded-xl space-y-2">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-80 space-y-3">
                  <h3 className={STORY_H3_UPPERCASE_CLASS}>None</h3>
                  <Listbox
                    size="sm"
                    selectStyle={{ variant: "solid", appearance: "strong" }}
                    multiple={true}
                    hoverStyle={{
                      variant: "solid",
                      appearance: "soft",
                      color: "same",
                    }}
                    indicator={{ type: "none" }}
                    items={baseData}
                  ></Listbox>
                </div>

                <div className="w-80 space-y-3">
                  <h3 className={STORY_H3_UPPERCASE_CLASS}>Tick</h3>
                  <Listbox
                    size="sm"
                    selectStyle={{ variant: "solid", appearance: "strong" }}
                    hoverStyle={{
                      variant: "solid",
                      appearance: "soft",
                      color: "same",
                    }}
                    indicator={{
                      type: "icon",
                      name: "@check",
                      placement: "start",
                    }}
                    multiple={true}
                    items={baseData}
                  >
                    {/* <ListboxLabel text="Tick indicator" /> */}
                  </Listbox>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-80 space-y-3">
                  <h3 className={STORY_H3_UPPERCASE_CLASS}>
                    Default (single-select)
                  </h3>
                  <Listbox
                    size="sm"
                    selectStyle={{
                      variant: "solid",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      variant: "solid",
                      appearance: "soft",
                      color: "same",
                    }}
                    indicator={{ type: "default", placement: "start" }}
                    items={baseData}
                  >
                    {/* <ListboxLabel text="Default single-select indicator" /> */}
                  </Listbox>
                </div>

                <div className="w-80 space-y-3">
                  <h3 className={STORY_H3_UPPERCASE_CLASS}>
                    Default (multi-select)
                  </h3>
                  <Listbox
                    size="sm"
                    multiple={true}
                    selectStyle={{ variant: "solid", appearance: "strong" }}
                    hoverStyle={{
                      variant: "solid",
                      appearance: "soft",
                      color: "same",
                    }}
                    indicator={{ type: "default", placement: "start" }}
                    items={baseData}
                  >
                    {/* <ListboxLabel text="Default multi-select indicator" /> */}
                  </Listbox>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* sec-2.5: With Accent Indicator */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                With Accent Indicator
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Selection and hover with accent bar for soft and dualTone
                appearances.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-80 space-y-3">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>Soft with Accent</h3>
                <Listbox
                  size="sm"
                  selectStyle={{
                    variant: "solid",
                    appearance: "soft",
                    accent: true,
                  }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "soft",
                    color: "same",
                    accent: true,
                  }}
                  indicator={{
                    type: "icon",
                    name: "@check",
                    placement: "start",
                  }}
                  items={baseData}
                  initialSelectedValues={["apple"]}
                />
              </div>

              <div className="w-80 space-y-3">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>
                  DualTone with Accent
                </h3>
                <Listbox
                  size="sm"
                  selectStyle={{
                    variant: "solid",
                    appearance: "dualTone",
                    accent: true,
                  }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "dualTone",
                    color: "same",
                    accent: true,
                  }}
                  indicator={{
                    type: "icon",
                    name: "@check",
                    placement: "start",
                  }}
                  items={baseData}
                  initialSelectedValues={["apple"]}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* Listbox variant Matrix */}
        <LazySection>
          <ListboxStyleInteractionMatrix />
        </LazySection>

        {/* with disabled item 8.0 */}

        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>With disabled item</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                List can be disabled for any particular item
              </p>
            </div>

            <div className="w-80">
              <Listbox
                size="sm"
                selectStyle={{ variant: "solid", appearance: "strong" }}
                hoverStyle={{
                  variant: "solid",
                  appearance: "strong",
                  color: "same",
                }}
                indicator={{ type: "none" }}
                items={[
                  {
                    label: "Apple",
                    value: "apple",
                  },
                  {
                    label: "Banana",
                    value: "banana",
                    disabled: true,
                  },
                  {
                    label: "Cherry",
                    value: "cherry",
                  },
                  {
                    label: "Mango",
                    value: "mango",
                  },
                ]}
              ></Listbox>
            </div>
          </section>
        </LazySection>

        {/* Truncate Options (Container level) */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Label Text Layout Options
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Control how long label texts are displayed inside the listbox:
                line-clamp-1 (single line), line-clamp-2 (max 2 lines), or wrap
                (full text).
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-80 space-y-3">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>
                  Line Clamp 1 (Single Line)
                </h3>
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "none" }}
                  textOverflow="line-clamp-1"
                  items={[
                    { label: "Apple", value: "apple" },
                    {
                      label:
                        "This is an extremely long listbox item label to demonstrate container level truncation, line clamping, and wrapping options",
                      value: "banana-long",
                    },
                    { label: "Cherry", value: "cherry" },
                    { label: "Mango", value: "mango" },
                  ]}
                />
              </div>

              <div className="w-80 space-y-3">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>
                  Line Clamp 2 (Max 2 Lines)
                </h3>
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "none" }}
                  textOverflow="line-clamp-2"
                  items={[
                    { label: "Apple", value: "apple" },
                    {
                      label:
                        "This is an extremely long listbox item label to demonstrate container level truncation, line clamping, and wrapping options",
                      value: "banana-long",
                    },
                    { label: "Cherry", value: "cherry" },
                    { label: "Mango", value: "mango" },
                  ]}
                />
              </div>

              <div className="w-80 space-y-3">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>Wrap (Full Text)</h3>
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "none" }}
                  textOverflow="wrap"
                  items={[
                    { label: "Apple", value: "apple" },
                    {
                      label:
                        "This is an extremely long listbox item label to demonstrate container level truncation, line clamping, and wrapping options",
                      value: "banana-long",
                    },
                    { label: "Cherry", value: "cherry" },
                    { label: "Mango", value: "mango" },
                  ]}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* sec-9 : Description */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>With Description </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Items can include secondary supporting text to provide
                additional context.
              </p>
            </div>

            <div className="flex justify-start gap-8 items-start">
              {/* description bottom */}
              <div className="w-80">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>Description Below</h3>
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "none", placement: "start" }}
                  items={[
                    {
                      label: "Apple",
                      value: "apple",
                      description: { text: "Sweet and crunchy" },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      description: { text: "Rich in potassium" },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      description: { text: "Small and red" },
                    },
                  ]}
                ></Listbox>
              </div>
              {/* description top */}
              <div className="w-80">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>Description Top</h3>
                <Listbox
                  size="sm"
                  hoverStyle={{
                    variant: "solid",
                    appearance: "soft",
                    color: "same",
                  }}
                  indicator={{ type: "none" }}
                  // indicatorPosition="start"
                  items={[
                    {
                      label: "Apple",
                      value: "apple",
                      description: {
                        text: "Sweet and crunchy",
                        placement: "top",
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      description: {
                        text: "Rich in potassium",
                        placement: "top",
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      description: { text: "Small and red", placement: "top" },
                    },
                  ]}
                ></Listbox>
              </div>
              {/* with avatar  */}
              <div className="w-80">
                <h3 className={STORY_H3_UPPERCASE_CLASS}>
                  description with avatar
                </h3>
                <Listbox
                  size="sm"
                  hoverStyle={{ variant: "solid", appearance: "dualTone" }}
                  indicator={{ type: "none", placement: "start" }}
                  items={[
                    {
                      label: "Apple",
                      value: "apple",
                      description: { text: "Sweet and crunchy" },

                      prefix: {
                        type: "avatar",
                        size: "lg",

                        img: {
                          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                          alt: "apple",
                        },
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      description: { text: " sweet , Rich in potassium" },
                      prefix: {
                        type: "avatar",
                        size: "lg",
                        img: {
                          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                          alt: "banana",
                        },
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      description: { text: "Small and red" },
                      prefix: {
                        type: "avatar",
                        size: "lg",

                        img: {
                          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                          alt: "cherry",
                        },
                      },
                    },
                  ]}
                ></Listbox>
              </div>
            </div>
          </section>
        </LazySection>
        {/* sec-10.1 : with icons */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                With Icons (in prefix & indicator at start)
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Icons can be added to the slots each item for better visual
                recognition.
              </p>
            </div>

            <div className="flex gap-8 item-start">
              <div className="w-80">
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{
                    type: "icon",
                    name: "@check",
                    placement: "start",
                  }}
                  items={[
                    {
                      label: "Apple3",
                      value: "apple",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                  ]}
                ></Listbox>
              </div>
              <div className="w-80">
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "default", placement: "start" }}
                  items={[
                    {
                      label: "Apple3",
                      value: "apple",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                  ]}
                ></Listbox>
              </div>
              <div className="w-80">
                <Listbox
                  size="sm"
                  multiple={true}
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "default", placement: "start" }}
                  items={[
                    {
                      label: "Apple3",
                      value: "apple",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                  ]}
                ></Listbox>
              </div>
            </div>
          </section>
        </LazySection>

        {/* sec-10.2 : with suffix icons */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                With Icons & indicator at end
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Icons can be added to the slots of each item for better visual
                recognition.
              </p>
            </div>

            <div className="flex gap-8 item-start">
              <div className="w-80">
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "icon", name: "@check", placement: "end" }}
                  items={[
                    {
                      label: "Apple3",
                      value: "apple",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                  ]}
                ></Listbox>
              </div>
              <div className="w-80">
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "default", placement: "end" }}
                  items={[
                    {
                      label: "Apple3",
                      value: "apple",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                  ]}
                ></Listbox>
              </div>
              <div className="w-80">
                <Listbox
                  size="sm"
                  multiple={true}
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "default", placement: "end" }}
                  items={[
                    {
                      label: "Apple3",
                      value: "apple",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Banana",
                      value: "banana",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Cherry",
                      value: "cherry",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                  ]}
                ></Listbox>
              </div>
            </div>
          </section>
        </LazySection>

        {/* sec-11 : with inline message */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                with badges in infix
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Infix can be used to display badges next to the label for a
                particular or multiple options.
              </p>
            </div>

            <div className="flex gap-8">
              <div className="w-72">
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "none", placement: "start" }}
                  items={[
                    {
                      label: "Gemini 3 Pro",
                      value: "gemini-3-pro",
                    },
                    {
                      label: "Gemini 3 Plus",
                      value: "gemini-3-plus",
                      infix: {
                        type: "badge-label",
                        label: "New",
                        appearance: "strong",
                        variant: "solid",
                        color: "info",
                        size: "xs",
                        className: "mx-0",
                      },
                    },
                    {
                      label: "Gemini 3 Flash",
                      value: "gemini-3-flash",
                    },
                    {
                      label: "Claude Sonnet 4.5",
                      value: "claude-sonnet-4.5",
                    },
                  ]}
                ></Listbox>
              </div>
              {/* 2 */}
              <div className="w-72">
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "none", placement: "start" }}
                  items={[
                    {
                      label: "Gemini 3 Pro",
                      value: "gemini-3-pro",
                    },
                    {
                      label: "Gemini 3 Plus",
                      value: "gemini-3-plus",
                      infix: {
                        type: "badge-counter",
                        counter: 22,
                        appearance: "strong",
                        variant: "solid",
                        color: "info",
                        size: "xs",
                      },
                    },
                    {
                      label: "Gemini 3 Flash",
                      value: "gemini-3-flash",
                    },
                    {
                      label: "Claude Sonnet 4.5",
                      value: "claude-sonnet-4.5",
                    },
                  ]}
                ></Listbox>
              </div>
              {/*  */}
              <div className="w-72">
                <Listbox
                  size="sm"
                  selectStyle={{ variant: "solid", appearance: "strong" }}
                  hoverStyle={{
                    variant: "solid",
                    appearance: "strong",
                    color: "same",
                  }}
                  indicator={{ type: "none", placement: "start" }}
                  items={[
                    {
                      label: "Gemini 3 Pro",
                      value: "gemini-3-pro",
                    },
                    {
                      label: "Gemini 3 Plus",
                      value: "gemini-3-plus",
                      infix: {
                        type: "badge-status-indicator",
                        color: "success",
                        appearance: "strong",

                        size: "xs",
                      },
                    },
                    {
                      label: "Gemini 3 Flash",
                      value: "gemini-3-flash",
                    },
                    {
                      label: "Claude Sonnet 4.5",
                      value: "claude-sonnet-4.5",
                    },
                  ]}
                ></Listbox>
              </div>
            </div>
          </section>
        </LazySection>
        {/* sec-11.5 : with all slots */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>With all slots</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Listbox items support 5 diffrent slots : prefix addon, prefix,
                infix, suffix, and suffix addon slots simultaneously.
              </p>
            </div>

            <div className="w-72">
              <Listbox
                size="sm"
                selectStyle={{ variant: "solid", appearance: "strong" }}
                hoverStyle={{
                  variant: "solid",
                  appearance: "strong",
                  color: "same",
                }}
                indicator={{ type: "none", placement: "start" }}
                items={[
                  {
                    label: "Apple",
                    value: "apple",
                    prefixAddon: { type: "emoji", name: "@placeholder" },
                    prefix: { type: "icon", name: "@placeholder" },
                    infix: { type: "logo", name: "@placeholder" },
                    suffix: { type: "icon", name: "@placeholder" },
                    suffixAddon: { type: "emoji", name: "@placeholder" },
                  },
                  {
                    label: "Banana",
                    value: "banana",
                    prefixAddon: { type: "emoji", name: "@placeholder" },
                    prefix: { type: "icon", name: "@placeholder" },
                    infix: { type: "logo", name: "@placeholder" },
                    suffix: { type: "icon", name: "@placeholder" },
                    suffixAddon: { type: "emoji", name: "@placeholder" },
                  },
                  {
                    label: "Cherry",
                    value: "cherry",
                    prefixAddon: { type: "emoji", name: "@placeholder" },
                    prefix: { type: "icon", name: "@placeholder" },
                    infix: { type: "logo", name: "@placeholder" },
                    suffix: { type: "icon", name: "@placeholder" },
                    suffixAddon: { type: "emoji", name: "@placeholder" },
                  },
                  {
                    label: "Mango",
                    value: "mango",
                    prefixAddon: { type: "emoji", name: "@placeholder" },
                    prefix: { type: "icon", name: "@placeholder" },
                    infix: { type: "logo", name: "@placeholder" },
                    suffix: { type: "icon", name: "@placeholder" },
                    suffixAddon: { type: "emoji", name: "@placeholder" },
                  },
                ]}
              ></Listbox>
            </div>
          </section>
        </LazySection>
        {/* sec12 : with large dataset */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>With Large Dataset</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Listbox can handle large datasets efficiently with scrollbar.
              </p>
            </div>

            <div className="w-80">
              <Listbox
                size="sm"
                selectStyle={{ variant: "solid", appearance: "strong" }}
                hoverStyle={{
                  variant: "solid",
                  appearance: "strong",
                  color: "same",
                }}
                indicator={{ type: "none", placement: "start" }}
                items={largeData}
              ></Listbox>
            </div>
          </section>
        </LazySection>

        {/* sec-13: Grouped Listbox */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Grouped Listbox</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Listbox supports labels and dividers to group items logically.
              </p>
            </div>

            <div className="w-80">
              <Listbox
                size="sm"
                selectStyle={{ variant: "solid", appearance: "strong" }}
                hoverStyle={{
                  variant: "solid",
                  appearance: "strong",
                  color: "same",
                }}
                indicator={{ type: "icon", name: "@check", placement: "end" }}
                items={[
                  { type: "label", label: "Fruits" },
                  { label: "Apple", value: "apple" },
                  { label: "Banana", value: "banana" },
                  { type: "divider" },
                  { type: "label", label: "Exotic" },
                  { label: "Cherry", value: "cherry" },
                  { label: "Mango", value: "mango" },
                ]}
              />
            </div>
          </section>
        </LazySection>

        {/* sec-13.5: With Search */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>With Search</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Listbox with built-in search to quickly filter through options.
              </p>
            </div>

            <div className="w-80">
              <Listbox.Search
                size="sm"
                color={theme.color}
                selectStyle={{ variant: "solid", appearance: "strong" }}
                hoverStyle={{
                  variant: "solid",
                  appearance: "soft",
                  color: "same",
                }}
                indicator={{ type: "icon", name: "@check", placement: "start" }}
                items={largeData}
                searchPlaceholder="Search..."
                autoFocusSearch={false}
              />
            </div>
          </section>
        </LazySection>

        {/* sec-14: With Select All */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                With Select All (Parent Control)
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Enable the"Select All" feature using the parent control. This is
                only visible in multi-select mode.
              </p>
            </div>

            <div className="w-80">
              <Listbox
                size="sm"
                selectStyle={{ variant: "solid", appearance: "strong" }}
                multiple={true}
                showSelectAll={true}
                hoverStyle={{
                  variant: "solid",
                  appearance: "strong",
                  color: "same",
                }}
                indicator={{ type: "default", placement: "start" }}
                items={baseData}
              />
            </div>
          </section>
        </LazySection>

        {/* sec-15: Loading State */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Loading State</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Listbox and its items support a loading state that blocks
                interaction and displays a loader spinner.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Container Loading */}
              <div className="w-80 space-y-3">
                <Listbox
                  size="sm"
                  loading={true}
                  items={baseData}
                  indicator={{ type: "none" }}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* section 16: Empty state with illustration  */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Empty State</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Listbox displays an empty state when there are no items to show.
              </p>
            </div>

            <div className="w-full">
              <EmptyStateShowcase />
            </div>
          </section>
        </LazySection>

        {/* sec-17: With Popover */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div className={STORY_SECTION_HEADER_CLASS}>
              <h2 className={STORY_SECTION_TITLE_CLASS}>With Popover</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Listbox can be used inside a popover to create a dropdown menu.
              </p>
            </div>

            <div className="w-80">
              <PopoverShowcase />
            </div>
          </section>
        </LazySection>
      </ShowcaseShell>
    );
}
