// @ts-nocheck
// Ported from origin/anchor:src/components/Anchor/stories/Anchor.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/anchor:src/components/Anchor/stories/Anchor.stories.tsx
import { Anchor, AnchorHorizontal } from "@inventive-ui/components/Anchor";
import {
  LazySection,
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_INNER_CLASS,
  SHOWCASE_ROW_CLASS,
} from "../storybook";
import type { AnchorItem, AnchorSize } from "@inventive-ui/components/Anchor";
import type { AnchorActiveVariant } from "../story-helpers/Anchor/types";
import { cn } from "@inventive-ui/framework";

const HorizontalCombinations = () => {
  const horizontalItems = [
    {
      key: "1",
      title: "Anchor",
    },
    {
      key: "2",
      title: "Anchor",
    },
    { key: "3", title: "Anchor" },
    { key: "4", title: "Anchor" },
  ];
  const linePositions = ["none", "bottom", "top"] as const;
  const showIndicatorOptions = [true, false];

  return (
    <div className="">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2"></th>
            {showIndicatorOptions.map((show) => (
              <th key={String(show)} className="border border-gray-300 p-2">
                showIndicator={String(show)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linePositions.map((pos) => (
            <tr key={pos}>
              <td className="border border-gray-300 p-2 font-bold">
                linePosition="{pos}"
              </td>
              {showIndicatorOptions.map((show) => (
                <td key={String(show)} className="border border-gray-300 p-2">
                  <AnchorHorizontal
                    items={horizontalItems}
                    activeItemKey="1"
                    showIndicator={show}
                    linePosition={pos}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- story: VerticalShowcase ---
function VerticalShowcaseStory() {
  const globals = {};

    const theme = getShowcaseTheme(globals);
    const verticalItems: AnchorItem[] = [
      { key: "1", title: "Anchor" },
      {
        key: "2",
        title: "Anchor",
        children: [
          { key: "3", title: "Anchor" },
          { key: "4", title: "Anchor" },
        ],
      },
      { key: "5", title: "Anchor" },
    ];

    const itemsVariatnt: AnchorActiveVariant[] = [
      "solid",
      "ghost",
      "underline",
      "solid-underline",
      "outline",
      "solid-outline",
    ];

    const STORY_TH_CENTER_CLASS =
      "border border-gray-300 dark:border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-zinc-300";
    const STORY_TD_CONTENT_CLASS =
      "border border-gray-300 dark:border-zinc-700 px-6 py-8 text-center";
    const STORY_CENTER_FLEX_CLASS = "w-50";
    const STORY_TD_LABEL_CLASS =
      "border border-gray-300 dark:border-zinc-700 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent dark:bg-zinc-800 dark:text-zinc-300";

    const STORY_CARD_CLASS =
      "flex items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800";
    const STORY_GRID_CLASS = "grid grid-cols-2 gap-4";

    const PREFIX_SLOTS_DATA: AnchorItem[] = [
      {
        key: "icon",
        title: "Icon",
        prefix: {
          type: "icon",
          name: "@placeholder",
        },
      },
      {
        key: "avatar",
        title: "logo",
        prefix: {
          type: "logo",
          name: "@placeholder",
        },
      },
      {
        key: "badge-counter",
        title: "avatar",
        prefix: {
          type: "avatar",
          name: "profile",
          img: { src: "https://i.pravatar.cc/300", alt: "User" },
          size: "sm",
        },
      },
      {
        key: "badge-counter",
        title: "counter",
        prefix: {
          type: "badge-counter",
          counter: 99,
          size: "sm",
          color: theme.color,
          appearance: "strong",
        },
      },
      {
        key: "file-type",
        title: "file-type",
        prefix: {
          type: "file-type",
          extension: "@placeholder",
        },
      },
      {
        key: "flag",
        title: "flag",
        prefix: {
          type: "flag",
          code: "@placeholder",
          shape: "rectangle",
        },
      },
      {
        key: "status",
        title: "status",
        prefix: {
          type: "badge-status-indicator",
          adaptive: true,
          appearance: "strong",
          cTag: "online",
          disabled: false,
          invisible: false,
          layer: { size: "", color: "" },
          size: "base",
          color: "success",
          iconSlot: "@check",
          tooltip: {
            cTag: "primary",
            placement: "top",
            trigger: "hover",
            variant: "solid",
            appearance: "strong",
            showArrow: true,
            offset: 0,
            noWrap: false,
            enterDelay: 150,
            color: "accent-4",
            description: "",
          },
          variant: "solid",
        },
      },
      {
        key: "dot",
        title: "dot",
        prefix: {
          type: "badge-dot",
          appearance: "strong",
          color: "success",
          size: "lg",
        },
      },
      {
        key: "color-logo",
        title: "color logo",
        prefix: {
          type: "color-logo",
          name: "@placeholder",
        },
      },
      {
        key: "emoji",
        title: "emoji",
        prefix: {
          type: "emoji",
          name: "@placeholder",
        },
      },
      {
        key: "badge-label",
        title: "label",
        prefix: {
          type: "badge-label",
          color: "success",
          label: "new",
          size: "xs",
        },
      },
      {
        key: "color-swatch",
        title: "swatch",
        prefix: {
          // Same props as the ColorSwatch default story
          type: "color-swatch",
          color: theme.color,
          appearance: "strong",
          size: "xs",
        },
      },
      {
        key: "loader",
        title: "Loader",
        prefix: {
          type: "loader",
          size: "md",
        },
      },
      {
        key: "Kbd",
        title: "Kbd",
        prefix: {
          type: "kbd",
          label: "C",
          size: "xs",
          appearance: "soft",
        },
      },
    ];
    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className="space-y-12 p-8 bg-transparent h-fit">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Vertical Anchor Component Showcase
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive visual reference of all vertical Anchor sizes,
              variants, appearances and states
            </p>
          </div>

          <LazySection enabled={false}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Appearance x Variants Hover
                </h2>
                <p className="text-sm text-gray-600">
                  Different link types for specific interactions
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className={STORY_TH_CENTER_CLASS}></th>
                    <th className={STORY_TH_CENTER_CLASS}>strong</th>
                    <th className={STORY_TH_CENTER_CLASS}>Soft</th>
                    <th className={STORY_TH_CENTER_CLASS}>dualTone</th>
                    <th className={STORY_TH_CENTER_CLASS}>onColor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "solid",
                    "solid-outline",
                    "underline",
                    "solid-underline",
                    "outline",
                    "ghost",
                  ].map((variant) => (
                    <tr key={variant}>
                      <td className={STORY_TD_LABEL_CLASS}>{variant}</td>
                      {["strong", "soft", "dualTone", "onColor"].map(
                        (appearance) => (
                          <td
                            key={appearance}
                            className={STORY_TD_CONTENT_CLASS}
                          >
                            <div
                              className={cn(
                                STORY_CENTER_FLEX_CLASS,
                                appearance === "onColor" && "p-5",
                                appearance === "onColor" &&
                                  `${theme.color == "white" || theme.color == "black" ? "bg-brand-500" : `bg-${theme.color}-500`}`,
                              )}
                            >
                              <Anchor
                                hoverStyle={{
                                  variant: variant as any,
                                  color: theme.color,
                                  appearance: appearance as any,
                                }}
                                activeStyle={{
                                  variant: variant as any,
                                  color: theme.color,
                                  appearance:
                                    appearance === "onColor"
                                      ? "onColor"
                                      : "strong",
                                }}
                                items={verticalItems}
                                heading=""
                              />
                            </div>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Appearance x Variants Active
                </h2>
                <p className="text-sm text-gray-600">
                  Different link type of active variant and appearance
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className={STORY_TH_CENTER_CLASS}></th>
                    <th className={STORY_TH_CENTER_CLASS}>strong</th>
                    <th className={STORY_TH_CENTER_CLASS}>Soft</th>
                    <th className={STORY_TH_CENTER_CLASS}>dualTone</th>
                    <th className={STORY_TH_CENTER_CLASS}>onColor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "solid",
                    "solid-outline",
                    "underline",
                    "solid-underline",
                    "outline",
                    "ghost",
                  ].map((variant) => (
                    <tr key={variant}>
                      <td className={STORY_TD_LABEL_CLASS}>{variant}</td>
                      {["strong", "soft", "dualTone", "onColor"].map(
                        (appearance) => (
                          <td
                            key={appearance}
                            className={STORY_TD_CONTENT_CLASS}
                          >
                            <div
                              className={cn(
                                STORY_CENTER_FLEX_CLASS,
                                appearance === "onColor" && "p-5",
                                appearance === "onColor" &&
                                  `${theme.color == "white" || theme.color == "black" ? "bg-brand-500" : `bg-${theme.color}-500`}`,
                              )}
                            >
                              <Anchor
                                hoverStyle={{
                                  variant: variant as any,
                                  color: theme.color,
                                  appearance: appearance as any,
                                }}
                                activeStyle={{
                                  variant: variant as any,
                                  color:
                                    appearance == "dualTone" ? "" : theme.color,
                                  appearance: appearance as any,
                                }}
                                items={verticalItems}
                                heading=""
                              />
                            </div>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  hover.variant x variant
                </h2>
                <p className="text-sm text-gray-600">
                  Different link types for specific interactions
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className={STORY_TH_CENTER_CLASS}>
                      Interactions x Active
                    </th>
                    {itemsVariatnt.map((items) => (
                      <th key={items} className={STORY_TH_CENTER_CLASS}>
                        {items}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "solid",
                    "solid-outline",
                    "underline",
                    "solid-underline",
                    "outline",
                    "ghost",
                  ].map((variant) => (
                    <tr key={variant}>
                      <td className={STORY_TD_LABEL_CLASS}>{variant}</td>
                      {itemsVariatnt.map((items) => (
                        <td key={items} className={STORY_TD_CONTENT_CLASS}>
                          <div className={STORY_CENTER_FLEX_CLASS}>
                            <Anchor
                              hoverStyle={{
                                variant: variant as any,
                                color: theme.color,
                                appearance: "strong",
                              }}
                              activeStyle={{
                                variant: items,
                                color: theme.color,
                                appearance: "strong",
                              }}
                              items={verticalItems}
                              heading=""
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Adaptive Variants
                </h2>
                <p className="text-sm text-gray-600">
                  Automatic dark mode adjustment for seamless integration
                </p>
              </div>
              <div className="dark bg-neutral-900 p-8 rounded-lg flex flex-wrap items-center gap-8 border border-neutral-800 shadow-inner w-full max-w-full">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    Adaptive: False
                  </span>
                  <Anchor
                    cTag="none"
                    items={[
                      {
                        key: "1",
                        title: "Anchor",
                        className:
                          "text-brand-500 dark:text-brand-500 border-2 border-y-0 border-e-0 dark:border-brand-500",
                      },
                      ...verticalItems.slice(1),
                    ]}
                    className="text-neutral-300 hover:text-brand-800 dark:hover:text-brand-800"
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    adaptive={false}
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 dark text-xs font-medium uppercase tracking-wider">
                    Adaptive: True
                  </span>
                  <Anchor
                    cTag="none"
                    items={[
                      {
                        key: "1",
                        title: "Anchor",
                        className:
                          "text-brand-400 dark:text-brand-400 border-2 border-y-0 border-e-0 dark:border-brand-400",
                      },
                      ...verticalItems.slice(1),
                    ]}
                    className="text-neutral-300 dark:text-neutral-300 hover:text-brand-200 dark:hover:text-brand-200"
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    adaptive={true}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Prefix Slot Options
                </h2>
                <p className="text-sm text-gray-600">
                  All available slot types that can be used in the prefix
                  position (grouped by 5)
                </p>
              </div>
              <div className={STORY_GRID_CLASS}>
                <div className={STORY_CARD_CLASS}>
                  <Anchor
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(0, 0 + 5)}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                  <Anchor
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(5, 5 + 5)}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                  <Anchor
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(10, 10 + 5)}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
              </div>
            </section>
          </LazySection>
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Anchor Compositions
                </h2>
                <p className="text-sm text-gray-600">
                  Different anchor content structures
                </p>
              </div>
              <div className={STORY_GRID_CLASS}>
                <div className={STORY_CARD_CLASS}>
                  <Anchor
                    cTag="none"
                    items={[
                      {
                        key: "icon",
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        key: "label",
                        title: "Anchor",
                      },
                      {
                        key: "prefix",
                        title: "Anchor",
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        key: "suffix",
                        title: "Anchor",
                        suffix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        key: "suffix",
                        title: "Anchor",
                        suffix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                    ]}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Truncation Variants
                </h2>
                <p className="text-sm text-gray-600">
                  Anchor with or without truncation
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg flex flex-wrap items-center gap-8 border border-neutral-800 shadow-inner w-full max-w-full">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    shouldWrap: True
                  </span>
                  <Anchor
                    cTag="none"
                    showLine
                    shouldWrap={true}
                    items={[
                      {
                        key: "31",
                        title:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit",
                        className: "w-40",
                      },
                      ...verticalItems,
                    ]}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    shouldWrap: False
                  </span>
                  <Anchor
                    cTag="none"
                    showLine
                    shouldWrap={false}
                    items={[
                      {
                        key: "31",
                        title:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit",
                        className: "w-40",
                      },
                      ...verticalItems,
                    ]}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Border Variants
                </h2>
                <p className="text-sm text-gray-600">
                  Anchor with or without border
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg flex flex-wrap items-center gap-8 border border-neutral-800 shadow-inner w-full max-w-full">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    showLine: False
                  </span>
                  <Anchor
                    cTag="none"
                    showLine={false}
                    items={verticalItems}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>

                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase">
                    showLine: True
                  </span>
                  <Anchor
                    cTag="none"
                    showLine={true}
                    items={verticalItems}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Indicator Variants
                </h2>
                <p className="text-sm text-gray-600">
                  Automatic dark mode adjustment for seamless integration
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg flex flex-wrap items-center gap-8 border border-neutral-800 shadow-inner w-full max-w-full">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    showIndicator: False
                  </span>
                  <Anchor
                    cTag="none"
                    showIndicator={false}
                    items={verticalItems}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>

                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    indicatorStickOnLine: True
                  </span>
                  <Anchor
                    cTag="none"
                    showIndicator={true}
                    indicatorStickOnLine={true}
                    items={verticalItems}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>

                <div className="flex flex-col items-center gap-3">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    indicatorStickOnLine: false
                  </span>
                  <Anchor
                    cTag="none"
                    showIndicator={true}
                    indicatorStickOnLine={false}
                    items={verticalItems}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Size Variants
                </h2>
                <p className="text-sm text-gray-600">
                  Automatic dark mode adjustment for seamless integration
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg flex flex-wrap justify-center items-start gap-8 border border-neutral-800 shadow-inner w-full max-w-full">
                {["xs", "sm", "base", "lg", "xl"].map((size) => (
                  <div
                    key={size}
                    className="flex flex-col items-center mb-2 gap-3"
                  >
                    <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                      {size}
                    </span>
                    <Anchor
                      cTag="none"
                      items={verticalItems}
                      size={size as AnchorSize}
                      activeStyle={{
                        color: theme.color,
                        variant: "ghost",
                        appearance: "strong",
                      }}
                      hoverStyle={{
                        color: theme.color,
                        variant: "ghost",
                        appearance: "strong",
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
  
}

// --- story: HorizontalShowcase ---
function HorizontalShowcaseStory() {
  const globals = {};

    const theme = getShowcaseTheme(globals);
    const horizontalItems = [
      {
        key: "1",
        title: "Anchor",
        lslot: "@placeholder",
      },
      {
        key: "2",
        title: "Anchor",
        rslot: "@placeholder",
      },
      { key: "3", title: "Anchor" },
      { key: "4", title: "Anchor" },
    ];

    const itemsVariatnt: AnchorActiveVariant[] = [
      "solid",
      "ghost",
      "underline",
      "solid-underline",
      "outline",
      "solid-outline",
    ];
    const STORY_TH_CENTER_CLASS =
      "border border-gray-300 dark:border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-zinc-300";
    const STORY_TD_CONTENT_CLASS =
      "border border-gray-300 dark:border-zinc-700 px-6 py-8 text-center";
    const STORY_CENTER_FLEX_CLASS = "w-100";
    const STORY_TD_LABEL_CLASS =
      "border border-gray-300 dark:border-zinc-700 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent dark:bg-zinc-800 dark:text-zinc-300";

    const STORY_CARD_CLASS =
      "flex flex-col items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800";
    const STORY_GRID_CLASS = "grid grid-cols-1 md:grid-cols-2 gap-4";

    const PREFIX_SLOTS_DATA: AnchorItem[] = [
      {
        key: "icon",
        title: "Icon",
        prefix: {
          type: "icon",
          name: "@placeholder",
        },
      },
      {
        key: "avatar",
        title: "logo",
        prefix: {
          type: "logo",
          name: "@placeholder",
        },
      },
      {
        key: "badge-counter",
        title: "avatar",
        prefix: {
          type: "avatar",
          name: "profile",
          img: { src: "https://i.pravatar.cc/300", alt: "User" },
          size: "sm",
        },
      },
      {
        key: "badge-counter",
        title: "counter",
        prefix: {
          type: "badge-counter",
          counter: 99,
          size: "sm",
          color: theme.color,
          appearance: "strong",
        },
      },
      {
        key: "file-type",
        title: "file-type",
        prefix: {
          type: "file-type",
          extension: "@placeholder",
        },
      },
      {
        key: "flag",
        title: "flag",
        prefix: {
          type: "flag",
          code: "@placeholder",
          shape: "rectangle",
        },
      },
      {
        key: "status",
        title: "status",
        prefix: {
          type: "badge-status-indicator",
          appearance: "strong",
          color: "success",
          size: "md",
        },
      },
      {
        key: "dot",
        title: "dot",
        prefix: {
          type: "badge-dot",
          appearance: "strong",
          color: "success",
          size: "lg",
        },
      },
      {
        key: "color-logo",
        title: "color logo",
        prefix: {
          type: "color-logo",
          name: "@placeholder",
        },
      },
      {
        key: "emoji",
        title: "emoji",
        prefix: {
          type: "emoji",
          name: "@placeholder",
        },
      },
      {
        key: "badge-label",
        title: "label",
        prefix: {
          type: "badge-label",
          color: "success",
          label: "new",
          size: "xs",
        },
      },
      {
        key: "color-swatch",
        title: "swatch",
        prefix: {
          // Same props as the ColorSwatch default story
          type: "color-swatch",
          color: theme.color,
          appearance: "strong",
          size: "base",
          label: "A",
        },
      },
      {
        key: "loader",
        title: "Loader",
        prefix: {
          type: "loader",
          size: "md",
        },
      },
      {
        key: "Kbd",
        title: "Kbd",
        prefix: {
          type: "kbd",
          label: "C",
          size: "xs",
          appearance: "soft",
        },
      },
    ];
    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className="space-y-12 p-8 bg-transparent h-fit">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Anchor Horizontal Component Showcase
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive visual reference of all Anchor Horizontal sizes,
              variants, appearances and states
            </p>
          </div>

          <LazySection enabled={false}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Appearance x Variants Hover
                </h2>
                <p className="text-sm text-gray-600">
                  Different link types for specific interactions
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className={STORY_TH_CENTER_CLASS}></th>
                    <th className={STORY_TH_CENTER_CLASS}>strong</th>
                    <th className={STORY_TH_CENTER_CLASS}>Soft</th>
                    <th className={STORY_TH_CENTER_CLASS}>dualTone</th>
                    <th className={STORY_TH_CENTER_CLASS}>onColor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "solid",
                    "solid-outline",
                    "underline",
                    "solid-underline",
                    "outline",
                    "ghost",
                  ].map((variant) => (
                    <tr key={variant}>
                      <td className={STORY_TD_LABEL_CLASS}>{variant}</td>
                      {["strong", "soft", "dualTone", "onColor"].map(
                        (appearance) => (
                          <td
                            key={appearance}
                            className={STORY_TD_CONTENT_CLASS}
                          >
                            <div
                              className={cn(
                                STORY_CENTER_FLEX_CLASS,
                                appearance === "onColor" && "p-5",
                                appearance === "onColor" &&
                                  `${theme.color == "white" || theme.color == "black" ? "bg-brand-500" : `bg-${theme.color}-500`}`,
                              )}
                            >
                              <AnchorHorizontal
                                hoverStyle={{
                                  variant: variant as any,
                                  color: theme.color,
                                  appearance: appearance as any,
                                }}
                                activeStyle={{
                                  variant: variant as any,
                                  color: theme.color,
                                  appearance:
                                    appearance === "onColor"
                                      ? "onColor"
                                      : "strong",
                                }}
                                items={horizontalItems}
                                heading=""
                              />
                            </div>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Appearance x Variants Active
                </h2>
                <p className="text-sm text-gray-600">
                  Different link type of active variant and appearance
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className={STORY_TH_CENTER_CLASS}></th>
                    <th className={STORY_TH_CENTER_CLASS}>strong</th>
                    <th className={STORY_TH_CENTER_CLASS}>Soft</th>
                    <th className={STORY_TH_CENTER_CLASS}>dualTone</th>
                    <th className={STORY_TH_CENTER_CLASS}>onColor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "solid",
                    "solid-outline",
                    "underline",
                    "solid-underline",
                    "outline",
                    "ghost",
                  ].map((variant) => (
                    <tr key={variant}>
                      <td className={STORY_TD_LABEL_CLASS}>{variant}</td>
                      {["strong", "soft", "dualTone", "onColor"].map(
                        (appearance) => (
                          <td
                            key={appearance}
                            className={STORY_TD_CONTENT_CLASS}
                          >
                            <div
                              className={cn(
                                STORY_CENTER_FLEX_CLASS,
                                appearance === "onColor" && "p-5",
                                appearance === "onColor" &&
                                  `${theme.color == "white" || theme.color == "black" ? "bg-brand-500" : `bg-${theme.color}-500`}`,
                              )}
                            >
                              <AnchorHorizontal
                                hoverStyle={{
                                  variant: variant as any,
                                  color: theme.color,
                                  appearance: appearance as any,
                                }}
                                activeStyle={{
                                  variant: variant as any,
                                  color: theme.color,
                                  appearance: appearance as any,
                                }}
                                items={horizontalItems}
                                heading=""
                              />
                            </div>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  hover.variant x variant
                </h2>
                <p className="text-sm text-gray-600">
                  Different link types for specific interactions
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className={STORY_TH_CENTER_CLASS}>
                      Interactions x Active
                    </th>
                    {itemsVariatnt.map((items) => (
                      <th key={items} className={STORY_TH_CENTER_CLASS}>
                        {items}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "solid",
                    "solid-outline",
                    "underline",
                    "solid-underline",
                    "outline",
                    "ghost",
                  ].map((variant) => (
                    <tr key={variant}>
                      <td className={STORY_TD_LABEL_CLASS}>{variant}</td>
                      {itemsVariatnt.map((items) => (
                        <td key={items} className={STORY_TD_CONTENT_CLASS}>
                          <div className={STORY_CENTER_FLEX_CLASS}>
                            <AnchorHorizontal
                              hoverStyle={{
                                variant: variant as any,
                                color: theme.color,
                                appearance: "strong",
                              }}
                              activeStyle={{
                                variant: items,
                                color: theme.color,
                                appearance: "strong",
                              }}
                              items={horizontalItems}
                              heading=""
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Truncate Variants
                </h2>
                <p className="text-sm text-gray-600">
                  Truncates the anchor text to a specified length
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg flex w-full max-w-full flex-col gap-8 border border-neutral-800 shadow-inner">
                <div className="flex flex-col gap-10">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    truncate: False
                  </span>
                  <AnchorHorizontal
                    cTag="none"
                    shouldWrap={false}
                    items={[
                      {
                        key: "99",
                        title:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit",
                      },
                      ...horizontalItems,
                    ]}
                  />
                </div>

                <div className="flex flex-col gap-10">
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    truncate: True
                  </span>
                  <AnchorHorizontal
                    cTag="none"
                    shouldWrap={true}
                    items={[
                      {
                        key: "31",
                        title:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit",
                        className: "w-20",
                      },
                      ...horizontalItems,
                    ]}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Border X Indicator variant
                </h2>
                <p className="text-sm text-gray-600">
                  all border and Indicator combination
                </p>
              </div>
              <HorizontalCombinations />
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Size Variants
                </h2>
                <p className="text-sm text-gray-600">
                  Automatic dark mode adjustment for seamless integration
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg flex w-full max-w-full flex-col justify-center items-start gap-8 border border-neutral-800 shadow-inner">
                {["xs", "sm", "base", "lg", "xl"].map((size) => (
                  <div
                    key={size}
                    className="flex flex-col items-center mb-2 gap-3"
                  >
                    <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                      {size}
                    </span>
                    <AnchorHorizontal
                      cTag="none"
                      items={horizontalItems}
                      size={size as AnchorSize}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Prefix Slot Options
                </h2>
                <p className="text-sm text-gray-600">
                  All available slot types that can be used in the prefix
                  position (grouped by 5)
                </p>
              </div>
              <div className={STORY_GRID_CLASS}>
                <div className={cn(STORY_CARD_CLASS, "w-fit")}>
                  <AnchorHorizontal
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(0, 0 + 5)}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                  <AnchorHorizontal
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(5, 5 + 5)}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                  <AnchorHorizontal
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(10, 10 + 5)}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
              </div>
            </section>
          </LazySection>
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Anchor Compositions
                </h2>
                <p className="text-sm text-gray-600">
                  Different anchor content structures
                </p>
              </div>
              <div className={STORY_GRID_CLASS}>
                <div className={STORY_CARD_CLASS}>
                  <AnchorHorizontal
                    cTag="none"
                    items={[
                      {
                        key: "icon",
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        key: "label",
                        title: "Anchor",
                      },
                      {
                        key: "prefix",
                        title: "Anchor",
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        key: "suffix",
                        title: "Anchor",
                        suffix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        key: "suffix",
                        title: "Anchor",
                        suffix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                    ]}
                    activeStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                    hoverStyle={{
                      color: theme.color,
                      variant: "ghost",
                      appearance: "strong",
                    }}
                  />
                </div>
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
  
}

export default function AnchorShowcase() {
  return (
    <>
      <h2 style={{ fontSize: 14, fontWeight: 600, margin: "24px 32px 0", opacity: 0.7 }}>VerticalShowcase</h2>
      <VerticalShowcaseStory />
      <h2 style={{ fontSize: 14, fontWeight: 600, margin: "24px 32px 0", opacity: 0.7 }}>HorizontalShowcase</h2>
      <HorizontalShowcaseStory />
    </>
  );
}
