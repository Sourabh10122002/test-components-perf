// @ts-nocheck
// Ported from origin/breadcrumbs:src/components/BreadCrumbs/stories/Breadcrumb.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/breadcrumbs:src/components/BreadCrumbs/stories/Breadcrumb.stories.tsx
import {
  LazySection,
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_INNER_CLASS,
} from "../storybook";
import type {
  BreadcrumbAppearance,
  BreadcrumbInteraction,
  BreadcrumbItem,
  BreadcrumbSize,
  BreadcrumbStyle,
} from "@inventive-ui/components/BreadCrumbs";
import { Breadcrumb } from "@inventive-ui/components/BreadCrumbs";
import { cn } from "@inventive-ui/framework";

// --- story: Showcase ---
export default function BreadcrumbShowcase() {
  const globals = {};

    const theme = getShowcaseTheme(globals);
    const STORY_GRID_CLASS = "grid grid-cols-2 gap-4";
    const STORY_CARD_CLASS =
      "flex flex-col items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800";

    const PREFIX_SLOTS_DATA: BreadcrumbItem[] = [
      {
        text: "Icon",
        prefix: {
          type: "icon",
          name: "@placeholder",
        },
      },
      {
        text: "logo",
        prefix: {
          type: "logo",
          name: "@placeholder",
        },
      },
      {
        text: "avatar",
        prefix: {
          type: "avatar",
          name: "profile",
          img: { src: "https://i.pravatar.cc/300", alt: "User" },
          size: "sm",
        },
      },
      {
        text: "counter",
        prefix: {
          type: "badge-counter",
          counter: 99,
          size: "sm",
          color: theme.color,
          appearance: "strong",
        },
      },
      {
        text: "file-type",
        prefix: {
          type: "file-type",
          extension: "@placeholder",
        },
      },
      {
        text: "flag",
        prefix: {
          type: "flag",
          code: "@placeholder",
          shape: "rectangle",
        },
      },
      {
        text: "status",
        prefix: {
          type: "badge-status-indicator",
          appearance: "strong",
          color: "success",
        },
      },
      {
        text: "dot",
        prefix: {
          type: "badge-dot",
          appearance: "strong",
          color: "success",
          size: "lg",
        },
      },
      {
        text: "color logo",
        prefix: {
          type: "color-logo",
          name: "@placeholder",
        },
      },
      {
        text: "emoji",
        prefix: {
          type: "emoji",
          name: "@placeholder",
        },
      },
      {
        text: "label",
        prefix: {
          type: "badge-label",
          color: "success",
          label: "new",
          size: "xs",
        },
      },
      {
        text: "swatch",
        prefix: {
          // Same props as the ColorSwatch default story
          type: "color-swatch",
          color: theme.color,
          appearance: "strong",
          size: "xs",
        },
      },
      {
        text: "Loader",
        prefix: {
          type: "loader",
          size: "md",
          color: "currentColor",
          strokeWidth: 1,
        },
      },
      {
        text: "Kbd",
        prefix: {
          type: "kbd",
          size: "xs",
        },
      },
    ];

    const colors = [
      "brand",
      "success",
      "warning",
      "danger",
      "info",
      "neutral",
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
    ];
    const sizes: BreadcrumbSize[] = ["xs", "sm", "base", "lg", "xl"];
    const hoverVariants: BreadcrumbInteraction[] = [
      "ghost",
      "underline",
      "text-underline",
      "outline",
      "solid",
      "solid-underline",
      "solid-text-underline",
      "solid-outline",
    ];

    const variants: BreadcrumbStyle[] = [
      "ghost",
      "underline",
      "outline",
      "solid",
    ];
    const appearances: BreadcrumbAppearance[] = ["dualTone", "onColor"];
    const hoverVariantsAppearances = ["strong", "soft", "dualTone", "onColor"];
    const currentStyleAppearances: BreadcrumbAppearance[] = [
      "dualTone",
      "soft",
      "onColor",
    ];
    const currentStyleVariants: BreadcrumbStyle[] = [
      "ghost",
      "underline",
      "outline",
      "solid",
    ];
    const items = [
      {
        text: "Link",
        onClick: (e: any) => console.log(e),
      },
      {
        text: "Link",
      },
      {
        text: "Link",
      },
      { text: "current" },
    ];
    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className="space-y-12 p-8 bg-transparent min-h-screen">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Breadcrumb Component Showcase
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive visual reference of all Breadcrumb sizes, variants,
              appearances and states
            </p>
          </div>

          <LazySection enabled={false}>
            <section className="space-y-4">
              {/* Style × OnInteraction Matrix */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Style × OnInteraction Matrix
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore how different style variants interact with hover
                  behaviors
                </p>
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-gray-300 bg-white shadow-sm">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700">
                          Hover / Variant
                        </th>

                        {variants.map((variant) => (
                          <th
                            key={variant}
                            className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700"
                            style={{ minWidth: "400px" }}
                          >
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {hoverVariants.map((hoverVariant) => (
                        <tr key={hoverVariant}>
                          {/* Row label */}
                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent">
                            {hoverVariant}
                          </td>

                          {/* Cells */}
                          {variants.map((variant) => (
                            <td
                              key={variant}
                              className="border border-gray-300 px-6 py-8 text-center"
                            >
                              <div className="flex items-center justify-center">
                                <Breadcrumb
                                  cTag="none"
                                  size="base"
                                  variant={variant}
                                  color={theme.color}
                                  items={items}
                                  hoverStyle={{ variant: hoverVariant }}
                                >
                                  Bread
                                </Breadcrumb>
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
          <LazySection>
            <section>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Appearance × Style Matrix
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore how different style variant work with different
                  appearance
                </p>
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-gray-300 bg-white shadow-sm">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700">
                          Hover / Variant
                        </th>
                        {appearances.map((app) => (
                          <th
                            key={app}
                            className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700"
                            style={{ minWidth: "400px" }}
                          >
                            {app.charAt(0).toUpperCase() + app.slice(1)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {variants.map((variant) => (
                        <tr key={variant}>
                          {/* Row label */}
                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent">
                            {variant}
                          </td>

                          {/* Cells */}
                          {appearances.map((app) => (
                            <td
                              key={variant}
                              className={cn(
                                "border border-gray-300 px-6 py-8 text-center",
                                app === "onColor" ? "bg-brand-500 p-5" : "",
                              )}
                            >
                              <div className="flex items-center justify-center">
                                <Breadcrumb
                                  cTag="none"
                                  size="base"
                                  appearance={app}
                                  variant={variant}
                                  color={theme.color}
                                  items={items}
                                  hoverStyle={{ variant: "ghost" }}
                                >
                                  Bread
                                </Breadcrumb>
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
          <LazySection>
            <section>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Appearance × HoverVariants Matrix
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore how different interaction variant work with different
                  interaction appearance
                </p>
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-gray-300 bg-white shadow-sm">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700">
                          Hover / Variant
                        </th>
                        {hoverVariantsAppearances.map((app) => (
                          <th
                            key={app}
                            className={cn(
                              "border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700",
                            )}
                            style={{ minWidth: "400px" }}
                          >
                            {app.charAt(0).toUpperCase() + app.slice(1)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {hoverVariants.map((variant) => (
                        <tr key={variant}>
                          {/* Row label */}
                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent">
                            {variant}
                          </td>

                          {/* Cells */}
                          {hoverVariantsAppearances.map((app) => (
                            <td
                              key={variant}
                              className={cn(
                                "border border-gray-300 px-6 py-8 text-center",
                                app === "onColor" ? "bg-brand-500 p-5" : "",
                              )}
                            >
                              <div className="flex items-center justify-center">
                                <Breadcrumb
                                  cTag="none"
                                  size="base"
                                  color={theme.color}
                                  items={items}
                                  appearance={
                                    app === "onColor" ? "onColor" : "dualTone"
                                  }
                                  hoverStyle={{
                                    variant: variant,
                                    appearance: app as
                                      | "strong"
                                      | BreadcrumbAppearance
                                      | "soft",
                                  }}
                                >
                                  Bread
                                </Breadcrumb>
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
          <LazySection>
            <section>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Current page style (currentStyle) × Appearance Matrix
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  How the current page label renders for every variant ×
                  appearance combination (color = theme color). Cells with a
                  tinted background show the onColor label on a colored surface.
                </p>
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-gray-300 bg-white shadow-sm">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700">
                          Variant
                        </th>
                        {currentStyleAppearances.map((app) => (
                          <th
                            key={app}
                            className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700"
                            style={{ minWidth: "360px" }}
                          >
                            {app.charAt(0).toUpperCase() + app.slice(1)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentStyleVariants.map((currentVariant) => (
                        <tr key={currentVariant}>
                          <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent">
                            {currentVariant}
                          </td>
                          {currentStyleAppearances.map((app) => (
                            <td
                              key={app}
                              className={cn(
                                "border border-gray-300 px-6 py-8 text-center",
                                app === "onColor" ? "bg-brand-500 p-5" : "",
                              )}
                            >
                              <div className="flex items-center justify-center">
                                <Breadcrumb
                                  cTag="none"
                                  size="base"
                                  appearance={app}
                                  items={[
                                    { text: "Link" },
                                    { text: "Link" },
                                    { text: "current" },
                                  ]}
                                  selectStyle={{
                                    variant: currentVariant,
                                    appearance: app,
                                    color: "",
                                  }}
                                >
                                  Bread
                                </Breadcrumb>
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

          {/* Size Variants */}
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Size Variants
                </h2>
                <p className="text-sm text-gray-600">
                  All sizes of the Breadcrumb component
                </p>
              </div>
              <div className="flex flex-col items-start gap-8">
                {sizes.map((size) => (
                  <div key={size} className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-gray-400 capitalize">
                      {size}
                    </span>
                    <Breadcrumb
                      cTag="none"
                      items={items}
                      size={size}
                      color={theme.color}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          {/* Style Variants */}
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">color</h2>
                <p className="text-sm text-gray-600">all color pallet</p>
              </div>
              <div className="grid grid-cols-4 items-start gap-4 flex-col">
                {colors.map((c) => (
                  <div className="flex-col justify-center items-center">
                    <span className="p-3">{c}</span>
                    <div className="flex flex-col items-center gap-2">
                      <Breadcrumb
                        cTag="none"
                        size="base"
                        items={items}
                        appearance="soft"
                        color={c}
                      >
                        {c}
                      </Breadcrumb>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          {/* Custom Styling */}
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Custom Styling
                </h2>
                <p className="text-sm text-gray-600">
                  One-off style overrides using inline styles
                </p>
              </div>
              <div className="flex items-start gap-4 flex-col">
                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={items}
                    // variant="outlined"
                    // variant="strong"
                    color={theme.color}
                    className="outline-dashed outline-green-500"
                  >
                    Dashed Border
                  </Breadcrumb>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={items}
                    // appearance="strong"
                    color={theme.color}
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, white, #dbeafe)",
                    }}
                  >
                    Custom Radius
                  </Breadcrumb>
                </div>
              </div>
            </section>
          </LazySection>

          {/* Disable Styling */}

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Disable Styling
                </h2>
                <p className="text-sm text-gray-600">
                  Breads in enabled vs disabled state
                </p>
              </div>
              <div className="flex items-start gap-4 flex-col">
                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb size="xl" cTag="none" items={items}>
                    Not Disabled Bread
                  </Breadcrumb>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb size="xl" items={items} disabled={true}>
                    Disabled Bread
                  </Breadcrumb>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Dropdown Styling */}
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  dropdown Styling
                </h2>
                <p className="text-sm text-gray-600">
                  dropdown at start or at randon palce is shown
                </p>
              </div>
              <div className="flex items-start gap-4 flex-col">
                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={[
                      { text: "Link" },
                      { text: "Link" },
                      { text: "Link" },
                      { text: "Link" },
                      { text: "current" },
                    ]}
                    color={theme.color}
                    maxItems={2}
                  ></Breadcrumb>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={[
                      { text: "Link" },
                      { text: "Link" },
                      { text: "Link" },
                      { text: "Link" },
                      { text: "current" },
                    ]}
                    maxItems={2}
                    expandType="ellipsis"
                    color={theme.color}
                  >
                    Dashed Border
                  </Breadcrumb>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={[
                      { text: "Link" },
                      { text: "Link" },
                      { text: "Link" },
                      { text: "Link" },
                      { text: "current" },
                    ]}
                    maxItems={2}
                    expandType="menu"
                    color={theme.color}
                  >
                    Custom Radius
                  </Breadcrumb>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Labels */}
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Labels
                </h2>
                <p className="text-sm text-gray-600">
                  with Label without label
                </p>
              </div>
              <div className="flex items-start gap-4 flex-col">
                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={items}
                    color={theme.color}
                  >
                    Dashed Border
                  </Breadcrumb>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={items}
                    color={theme.color}
                  >
                    Custom Radius
                  </Breadcrumb>
                </div>
              </div>
            </section>
          </LazySection>
          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Truncation
                </h2>
                <p className="text-sm text-gray-600">
                  individual item trunncated
                </p>
              </div>
              <div className="flex items-start gap-4 flex-col">
                <div className="flex flex-col items-center gap-2">
                  <Breadcrumb
                    cTag="none"
                    size="base"
                    items={[
                      { text: "Link" },
                      {
                        text: "lorem ipsum dolor sit amet consectetur adipiscing elit",
                        shouldTruncate: true,
                        className: "w-10",
                      },
                      { text: "Link" },
                      { text: "current" },
                    ]}
                    color={theme.color}
                  >
                    Dashed Border
                  </Breadcrumb>
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
                  <Breadcrumb
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(0, 0 + 5)}
                    color={theme.color}
                  />
                  <Breadcrumb
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(5, 5 + 5)}
                    color={theme.color}
                  />
                  <Breadcrumb
                    cTag="none"
                    items={PREFIX_SLOTS_DATA.slice(10, 10 + 5)}
                    color={theme.color}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  BreadCrumbs Compositions
                </h2>
                <p className="text-sm text-gray-600">
                  Different breadcrumb content structures
                </p>
              </div>
              <div className={STORY_GRID_CLASS}>
                <div className={STORY_CARD_CLASS}>
                  <Breadcrumb
                    cTag="none"
                    items={[
                      {
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        text: "Link",
                      },
                      {
                        text: "Link",
                        prefix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        text: "Link",
                        suffix: {
                          type: "icon",
                          name: "@placeholder",
                        },
                      },
                      {
                        text: "current",

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
                    color={theme.color}
                  />
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Separator Styling
                </h2>
                <p className="text-sm text-gray-600">
                  All Breadcrumb Separator style
                </p>
              </div>
              <div className="flex items-start gap-4 flex-col">
                <div className="flex flex-col items-center gap-2">
                  {""}
                  <Breadcrumb cTag="none" items={items} separator="/">
                    Not Disabled Bread
                  </Breadcrumb>
                </div>

                <div className="flex flex-col items-center gap-2">
                  {""}
                  <Breadcrumb cTag="none" items={items} separator="<">
                    Not Disabled Bread
                  </Breadcrumb>
                </div>
                <div className="flex flex-col items-center gap-2">
                  {""}
                  <Breadcrumb cTag="none" items={items} separator=">">
                    Not Disabled Bread
                  </Breadcrumb>
                </div>

                <div className="flex flex-col items-center gap-2">
                  {""}
                  <Breadcrumb cTag="none" items={items} separator="|">
                    Not Disabled Bread
                  </Breadcrumb>
                </div>
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
  
}
