// @ts-nocheck
// Ported from origin/link:src/components/Link/stories/Link.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/link:src/components/Link/stories/Link.stories.tsx
import { Link } from "@inventive-ui/components/Link";
import type { LinkSize, LinkVariant } from "@inventive-ui/components/Link";
import { LazySection } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_SCROLL_X_CLASS,
} from "../storybook";

export default function LinkShowcase() {
  const globals: Record<string, any> = {};
  const theme = getShowcaseTheme(globals);
  const sizes: LinkSize[] = ["xs", "sm", "base", "lg", "xl"];
  const variants: LinkVariant[] = [
    "ghost",
    "underline",
    "text-underline",
    "outline",
    "solid",
    "solid-outline",
    "solid-underline",
    "solid-text-underline",
  ];
  const colors = [
    "brand",
    "success",
    "warning",
    "danger",
    "info",
    "neutral",
    "grey",
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

  const LinkInline = () => {
    return (
      <span>
        A <Link children={"link"} as={"span"} /> can be rendered as an html
        span, in which case it will have role="button" set.{""}
        <Link children={"link"} as={"span"} /> that render as a span wrap
        correctly between lines, behaving as inline elements as opposed to{""}
        <Link children={"link"} as={"span"} /> rendered as buttons, which
        always behave as inline-block elements that do not wrap correctly.
      </span>
    );
  };
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">
          Link Component Showcase
        </h1>
        <p className="text-lg text-gray-600">
          Comprehensive visual reference of all link sizes, variants,
          appearances and states
        </p>
      </div>

      {/* ColorPalette */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Color Palette
            </h2>
            <p className="text-sm text-gray-600">
              All semantic colors available in the design system
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {colors.map((color) => (
              <div
                key={color}
                className="flex shrink-0 flex-col items-center gap-2"
              >
                <Link
                  cTag="none"
                  appearance="strong"
                  hoverStyle={{
                    appearance: "strong",
                    color: color,
                  }}
                  color={color}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* Size × Density Matrix */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Size × Density Matrix
            </h2>
            <p className="text-sm text-gray-600">
              Visual comparison of all size and density (spacing) combinations
            </p>
          </div>
          <div className={SHOWCASE_SCROLL_X_CLASS}>
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-black dark:text-white border border-gray-300 bg-transparent px-4 py-2 text-left text-sm font-semibold">
                    Size
                  </th>
                  <th className="text-black dark:text-white border border-gray-300 bg-transparent px-4 py-2 text-center text-sm font-semibold">
                    Compact
                  </th>
                  <th className="text-black dark:text-white border border-gray-300 bg-transparent px-4 py-2 text-center text-sm font-semibold">
                    standard
                  </th>
                  <th className="text-black dark:text-white border border-gray-300 bg-transparent px-4 py-2 text-center text-sm font-semibold">
                    Spacious
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => {
                  // Calculate heights for each density
                  // Base sizes: xs=24, sm=32, md=40, lg=48, xl=56

                  // Calculate padding-y (roughly 17% of height)
                  const tightPadding = 1.5;
                  const normalPadding = 2;
                  const relaxedPadding = 2.5;

                  const tightGap = 1.5;
                  const normalGap = 2;
                  const relaxedGap = 2.5;
                  return (
                    <tr key={size}>
                      <td className="text-black dark:text-white border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium">
                        {size}
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-8 text-center"
                        style={{ minWidth: "180px" }}
                      >
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            size={size}
                            appearance="strong"
                            prefix={{
                              type: "icon",
                              name: "@link",
                            }}
                            hoverStyle={{ color: theme.color }}
                            className={`py-${tightPadding} px-${tightPadding} gap-${tightGap}`}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-8 text-center"
                        style={{ minWidth: "180px" }}
                      >
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            size={size}
                            appearance="strong"
                            prefix={{
                              type: "icon",
                              name: "@link",
                            }}
                            hoverStyle={{ color: theme.color }}
                            className={`py-${normalPadding} px-${normalPadding} gap-${normalGap}`}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-8 text-center"
                        style={{ minWidth: "180px" }}
                      >
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            size={size}
                            appearance="strong"
                            prefix={{
                              type: "icon",
                              name: "@link",
                            }}
                            hoverStyle={{ color: theme.color }}
                            className={`py-${relaxedPadding} px-${relaxedPadding} gap-${relaxedGap}`}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Adaptive
            </h2>
            <p className="text-sm text-gray-600">
              the link take you to the href in new tab{""}
            </p>
          </div>
          <div className="dark p-10 rounded-md bg-black flex items-center gap-4 flex-wrap max-w-125">
            <div className="dark flex flex-wrap items-center gap-8">
              <div className="dark flex flex-col items-center gap-2">
                <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  {""}
                  Adaptive:false
                </span>
                <Link
                  color={theme.color}
                  variant="solid"
                  cTag="none"
                  appearance="strong"
                  external
                  hoverStyle={{ color: theme.color, variant: "solid" }}
                  adaptive={false}
                >
                  Link
                </Link>
              </div>

              <div
                style={{ colorScheme: "dark" }}
                className="dark dark:[&_*]:!transition-none flex flex-col items-center gap-2"
              >
                <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  {""}
                  Adaptive:true
                </span>
                <Link
                  color={theme.color}
                  variant="solid"
                  cTag="none"
                  appearance="strong"
                  external
                  className="dark"
                  hoverStyle={{ color: theme.color, variant: "solid" }}
                  adaptive={true}
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        </section>
      </LazySection>
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              External
            </h2>
            <p className="text-sm text-gray-600">
              the link take you to the href in new tab{""}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="none"
                appearance="strong"
                external
                hoverStyle={{ color: theme.color }}
              >
                Link
              </Link>
            </div>
          </div>
        </section>
      </LazySection>
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Appearance Variant
            </h2>
            <p className="text-sm text-gray-600">
              strong, dualTone, soft and onColor appearances for link
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col w-20 items-center">
              <Link
                color={theme.color}
                cTag="none"
                hoverStyle={{ appearance: "strong", color: theme.color }}
                appearance="strong"
                target="_blank"
              >
                strong
              </Link>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="none"
                appearance="soft"
                hoverStyle={{ appearance: "soft", color: theme.color }}
                target="_blank"
              >
                soft
              </Link>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="none"
                appearance="dualTone"
                hoverStyle={{ appearance: "dualTone", color: theme.color }}
                target="_blank"
              >
                dualTone
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 bg-brand-500">
              <Link
                color={theme.color}
                cTag="none"
                appearance="onColor"
                hoverStyle={{ appearance: "onColor", color: theme.color }}
                target="_blank"
              >
                onColor
              </Link>
            </div>
          </div>
        </section>
      </LazySection>

      {/* radius */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Radius Variant
            </h2>
            <p className="text-sm text-gray-600">
              none, sm, md, lg and full radius for link
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col w-20 items-center">
              <Link
                color={theme.color}
                cTag="none"
                hoverStyle={{ appearance: "strong", variant: "solid" }}
                appearance="strong"
                variant="solid"
                target="_blank"
                className="rounded-none"
              >
                None
              </Link>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="none"
                appearance="strong"
                hoverStyle={{
                  appearance: "strong",
                  color: theme.color,
                  variant: "solid",
                }}
                target="_blank"
                variant="solid"
                className="rounded-sm"
              >
                sm
              </Link>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="none"
                appearance="strong"
                hoverStyle={{
                  appearance: "strong",
                  color: theme.color,
                  variant: "solid",
                }}
                target="_blank"
                variant="solid"
                className="rounded-lg"
              >
                md
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 p-2">
              <Link
                color={theme.color}
                cTag="none"
                appearance="strong"
                hoverStyle={{
                  appearance: "strong",
                  color: theme.color,
                  variant: "solid",
                }}
                target="_blank"
                variant="solid"
                className="rounded-2xl"
              >
                lg
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 p-2">
              <Link
                color={theme.color}
                cTag="none"
                appearance="strong"
                hoverStyle={{
                  appearance: "strong",
                  color: theme.color,
                  variant: "solid",
                }}
                target="_blank"
                variant="solid"
                className="rounded-full"
              >
                Full
              </Link>
            </div>
          </div>
        </section>
      </LazySection>
      {/* NEW: Appearance × hoverStyle.Appearance Matrix (Step 1) */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Appearance × hoverStyle.Appearance Matrix
            </h2>
            <p className="text-sm text-gray-600">
              Visual comparison of all hoverStyle and rest appearances
              combinations
            </p>
          </div>
          <div className={SHOWCASE_SCROLL_X_CLASS}>
            <table className="border-collapse border border-gray-300 bg-transparent shadow-sm">
              <thead>
                <tr className="bg-transparent">
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Base \ hoverStyle
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700">
                    strong
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700">
                    soft
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700">
                    dualTone
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700">
                    onColor
                  </th>
                </tr>
              </thead>
              <tbody>
                {["strong", "soft", "dualTone", "onColor"].map((baseApp) => (
                  <tr key={baseApp}>
                    <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent">
                      {baseApp}
                    </td>
                    <td className="border border-gray-300 px-6 py-8 text-center">
                      {baseApp === "onColor" ? (
                        <div className={`p-4 bg-${"brand"}-500`}>
                          <Link
                            color={theme.color}
                            appearance={baseApp as any}
                            hoverStyle={{
                              appearance: "strong",
                              color: theme.color,
                            }}
                            variant="underline"
                          >
                            Link
                          </Link>
                        </div>
                      ) : (
                        <Link
                          color={theme.color}
                          appearance={baseApp as any}
                          hoverStyle={{
                            appearance: "strong",
                            color: theme.color,
                          }}
                          variant="underline"
                        >
                          Link
                        </Link>
                      )}
                    </td>
                    <td className="border border-gray-300 px-6 py-8 text-center">
                      {baseApp === "onColor" ? (
                        <div className="p-4 bg-brand-500">
                          <Link
                            color={theme.color}
                            appearance={baseApp as any}
                            hoverStyle={{
                              appearance: "soft",
                              color: theme.color,
                            }}
                            variant="underline"
                          >
                            Link
                          </Link>
                        </div>
                      ) : (
                        <Link
                          color={theme.color}
                          appearance={baseApp as any}
                          hoverStyle={{
                            appearance: "soft",
                            color: theme.color,
                          }}
                          variant="underline"
                        >
                          Link
                        </Link>
                      )}
                    </td>
                    <td className="border border-gray-300 px-6 py-8 text-center">
                      {baseApp === "onColor" ? (
                        <div className="p-4 bg-brand-500">
                          <Link
                            color={theme.color}
                            appearance={baseApp as any}
                            hoverStyle={{
                              appearance: "dualTone",
                              color: theme.color,
                            }}
                            variant="underline"
                          >
                            Link
                          </Link>
                        </div>
                      ) : (
                        <Link
                          color={theme.color}
                          appearance={baseApp as any}
                          hoverStyle={{
                            appearance: "dualTone",
                            color: theme.color,
                          }}
                          variant="underline"
                        >
                          Link
                        </Link>
                      )}
                    </td>
                    <td className="border border-gray-300 px-6 py-8 text-center">
                      {baseApp === "onColor" ? (
                        <div className="p-4 bg-brand-500">
                          <Link
                            color={theme.color}
                            appearance={baseApp as any}
                            hoverStyle={{
                              appearance: "onColor",
                              color: theme.color,
                            }}
                            variant="underline"
                          >
                            Link
                          </Link>
                        </div>
                      ) : (
                        <Link
                          color={theme.color}
                          appearance={baseApp as any}
                          hoverStyle={{
                            appearance: "onColor",
                            color: theme.color,
                          }}
                          variant="underline"
                        >
                          Link
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>

      {/* NEW: Appearance × Variant Matrix (Step 2) */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Appearance × Variant Matrix
            </h2>
            <p className="text-sm text-gray-600">
              Visual comparison of all appearances and variant combinations
            </p>
          </div>
          <div className={SHOWCASE_SCROLL_X_CLASS}>
            <table className="border-collapse border border-gray-300 bg-transparent shadow-sm min-w-350">
              <thead>
                <tr className="bg-transparent">
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Appearance
                  </th>
                  {[
                    "ghost",
                    "underline",
                    "text-underline",
                    "outline",
                    "solid",
                    "solid-outline",
                    "solid-underline",
                    "solid-text-underline",
                  ].map((v) => (
                    <th
                      key={v}
                      className="border border-gray-300 px-4 py-3 text-center text-xs font-semibold text-gray-700"
                      style={{ minWidth: "140px" }}
                    >
                      {v.replace(/-/g, "")}
                      <br />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["strong", "soft", "dualTone", "onColor"].map((app) => (
                  <tr key={app}>
                    <td className="border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700 bg-transparent">
                      {app}
                    </td>
                    {[
                      "ghost",
                      "underline",
                      "text-underline",
                      "outline",
                      "solid",
                      "solid-outline",
                      "solid-underline",
                      "solid-text-underline",
                    ].map((variant) => (
                      <td
                        key={variant}
                        className="border border-gray-300 px-4 py-8 text-center"
                      >
                        <div className="flex shrink-0 flex-col items-center">
                          {app === "onColor" ? (
                            <div className="p-4 bg-brand-500">
                              <Link
                                color={theme.color}
                                cTag="none"
                                appearance={app as any}
                                variant={variant as any}
                                prefix={{ type: "icon", name: "link" }}
                                suffix={{
                                  type: "icon",
                                  name: "@open_in_new",
                                }}
                                hoverStyle={{
                                  variant: variant as any,
                                  appearance: app as any,
                                  color: theme.color,
                                }}
                                size="base"
                              >
                                Link
                              </Link>
                            </div>
                          ) : (
                            <Link
                              color={theme.color}
                              cTag="none"
                              appearance={app as any}
                              variant={variant as any}
                              prefix={{ type: "icon", name: "link" }}
                              suffix={{ type: "icon", name: "@open_in_new" }}
                              hoverStyle={{
                                variant: variant as any,
                                appearance: app as any,
                                color: theme.color,
                              }}
                              size="base"
                            >
                              Link
                            </Link>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* NEW Step 3: Color Variations for Matrices */}
        </section>
      </LazySection>

      {/* Visited Variants */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Appearance × Variant visited Matrix
            </h2>
            <p className="text-sm text-gray-600">
              Visual comparison of all appearances and variant visited
              combinations
            </p>
          </div>
          <div className={SHOWCASE_SCROLL_X_CLASS}>
            <table className="border-collapse border border-gray-300 bg-transparent shadow-sm min-w-350">
              <thead>
                <tr className="bg-transparent">
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Appearance
                  </th>
                  {[
                    "ghost",
                    "underline",
                    "text-underline",
                    "outline",
                    "solid",
                    "solid-outline",
                    "solid-underline",
                    "solid-text-underline",
                  ].map((v) => (
                    <th
                      key={v}
                      className="border border-gray-300 px-4 py-3 text-center text-xs font-semibold text-gray-700"
                      style={{ minWidth: "140px" }}
                    >
                      {v.replace(/-/g, "")}
                      <br />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["strong", "soft", "dualTone", "onColor"].map((app) => (
                  <tr key={app}>
                    <td className="border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700 bg-transparent">
                      {app}
                    </td>
                    {[
                      "ghost",
                      "underline",
                      "text-underline",
                      "outline",
                      "solid",
                      "solid-outline",
                      "solid-underline",
                      "solid-text-underline",
                    ].map((variant) => (
                      <td
                        key={variant}
                        className="border border-gray-300 px-4 py-8 text-center"
                      >
                        <div className="flex shrink-0 flex-col items-center">
                          {app === "onColor" ? (
                            <div className="p-4 bg-brand-500">
                              <Link
                                visited
                                color={theme.color}
                                cTag="none"
                                appearance={app as any}
                                variant={variant as any}
                                hoverStyle={{
                                  variant: variant as any,
                                  appearance: app as any,
                                  color: theme.color,
                                }}
                                size="base"
                              >
                                Link
                              </Link>
                            </div>
                          ) : (
                            <Link
                              visited
                              color={theme.color}
                              cTag="none"
                              appearance={app as any}
                              variant={variant as any}
                              hoverStyle={{
                                variant: variant as any,
                                appearance: app as any,
                                color: theme.color,
                              }}
                              size="base"
                            >
                              Link
                            </Link>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* NEW Step 3: Color Variations for Matrices */}
        </section>
      </LazySection>
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Underline Offset
            </h2>
            <p className="text-sm text-gray-600">
              different underline offset for link
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col w-20 items-center">
              <Link
                color={theme.color}
                hoverStyle={{ color: theme.color }}
                cTag="none"
                variant="underline"
                underlineOffset="xs"
                external
              >
                Link
              </Link>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                hoverStyle={{ color: theme.color }}
                cTag="none"
                variant="underline"
                underlineOffset="sm"
                external
              >
                Link
              </Link>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                hoverStyle={{ color: theme.color }}
                cTag="none"
                variant="underline"
                underlineOffset="md"
                external
              >
                Link
              </Link>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                hoverStyle={{ color: theme.color }}
                cTag="none"
                variant="underline"
                underlineOffset="lg"
                external
              >
                Link
              </Link>
            </div>
          </div>
        </section>
      </LazySection>
      {/* Style Variants */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Style Variants
            </h2>
            <p className="text-sm text-gray-600">
              Different visual styles for various use cases
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {variants.map((variant) => (
              <div
                key={variant}
                className="flex shrink-0 flex-col items-center gap-2"
              >
                <Link
                  color={theme.color}
                  cTag="none"
                  variant={variant}
                  appearance="strong"
                  hoverStyle={{
                    variant: variant,
                    appearance: "strong",
                    color: theme.color,
                  }}
                >
                  {variant === "solid-outline"
                    ? "solid-outline"
                    : variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Link>
              </div>
            ))}
          </div>
          {/* Style × interactionVariant Matrix */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Style × interactionVariant Matrix
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore how different style variants interact with hoverStyle
              behaviors
            </p>
            <div className={SHOWCASE_SCROLL_X_CLASS}>
              <table className="border-collapse border border-gray-300 bg-transparent shadow-sm">
                <thead>
                  <tr className="bg-transparent">
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Style / Interaction
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      ghost
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      underline
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      text-underline
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      outline
                    </th>
                    <th
                      className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700"
                      style={{ minWidth: "150px" }}
                    >
                      solid
                    </th>
                    <th
                      className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700"
                      style={{ minWidth: "150px" }}
                    >
                      solid-underline
                    </th>
                    <th
                      className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700"
                      style={{ minWidth: "150px" }}
                    >
                      solid-text-underline
                    </th>
                    <th
                      className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700"
                      style={{ minWidth: "150px" }}
                    >
                      solid-outline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {variants.map((variant) => (
                    <tr key={variant}>
                      <td className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent">
                        {variant === "solid-outline"
                          ? "solid-outline"
                          : variant.charAt(0).toUpperCase() +
                            variant.slice(1)}
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "ghost",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            cTag="none"
                            color={theme.color}
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "underline",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "text-underline",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "outline",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "solid",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "solid-underline",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "solid-text-underline",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-8 text-center">
                        <div className="flex items-center justify-center">
                          <Link
                            color={theme.color}
                            cTag="none"
                            variant={variant}
                            appearance="strong"
                            hoverStyle={{
                              variant: "solid-outline",
                              color: theme.color,
                            }}
                          >
                            Link
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        {/* Disable Variants */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Disable Variants
            </h2>
            <p className="text-sm text-gray-600">
              Disable and not disabled states of link
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                cTag="none"
                disabled
                color={theme.color}
                hoverStyle={{ color: theme.color }}
              >
                Disabled
              </Link>
            </div>
          </div>
        </section>
      </LazySection>
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Truncate
            </h2>
            <p className="text-sm text-gray-600">
              Truncate long text with ellipsis when it exceeds the container
              width
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex shrink-0 flex-col items-center">
              <Link
                color={theme.color}
                hoverStyle={{ color: theme.color }}
                cTag="none"
                appearance="strong"
                target="_blank"
                truncate
              >
                Link will only be truncated when the children has more than 80
                character no less than that
              </Link>
            </div>
          </div>
        </section>
      </LazySection>
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Inline Link
            </h2>
            <p className="text-sm text-gray-600">
              when link is rendered as span it can be used inline
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex shrink-0 flex-col items-center">
              <LinkInline />
            </div>
          </div>
        </section>
      </LazySection>
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Slot Options
            </h2>
            <p className="text-sm text-gray-600">
              Left and Right slots for icons or other content
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex shrink-0 flex-col items-center gap-2">
              {""}
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="strong"
                hoverStyle={{
                  appearance: "strong",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Icon"
                prefix={{
                  type: "icon",
                  name: "@link",
                }}
              />
              icon
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              {""}
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="strong"
                hoverStyle={{
                  appearance: "strong",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Loader"
                prefix={{
                  type: "loader",
                  color: "currentColor",
                  name: "@open_in_new",
                  stroke: 2,
                }}
              />
              loader
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="soft"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Avatar"
                prefix={{
                  type: "avatar",
                  children: "@placeholder",
                  size: "md",
                  variant: "outline",
                }}
              />
              avatar
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="strong"
                hoverStyle={{
                  appearance: "strong",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Counter"
                suffix={{
                  type: "badge-counter",
                  counter: 5,
                  appearance: "strong",
                  color: theme.color,
                  variant: "solid",
                }}
              />
              counter
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="dualTone"
                hoverStyle={{
                  appearance: "dualTone",
                  variant: "solid",
                  color: theme.color,
                }}
                children="File Type"
                prefix={{ type: "file-type", extension: "@placeholder" }}
              />
              file-type
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="dualTone"
                hoverStyle={{
                  appearance: "dualTone",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Flag"
                prefix={{
                  type: "flag",
                  code: "@placeholder",
                  shape: "rectangle",
                  size: "md",
                }}
              />
              flag
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="strong"
                size="base"
                hoverStyle={{
                  appearance: "strong",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Logo"
                prefix={{
                  type: "logo",
                  name: "@placeholder",
                  size: "sm",
                  color: "currentColor",
                }}
              />
              logo
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="soft"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Color Logo"
                prefix={{
                  type: "color-logo",
                  name: "@placeholder",
                  size: "lg",
                }}
              />
              color-logo
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="soft"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Emoji"
                prefix={{
                  type: "emoji",
                  name: "@placeholder",
                  size: "medium",
                }}
              />
              emoji
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="soft"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Dot Badge"
                suffix={{
                  type: "badge-dot",
                  color: theme.color,
                  appearance: "strong",
                  variant: "solid",
                  size: "sm",
                }}
              />
              badge-dot
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="soft"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Status Indicator"
                prefix={{
                  type: "badge-status-indicator",
                  name: "outline",
                  status: "online",
                  appearance: "strong",
                  color: "success",
                  size: "base",
                  prefix: { type: "icon", name: "check", size: "xs" },
                }}
              />
              badge-status
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="soft"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Label Badge"
                suffix={{
                  type: "badge-label",
                  label: "label",
                  color: theme.color,
                  appearance: "strong",
                  variant: "solid",
                  size: "xs",
                }}
              />
              badge-label
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="solid"
                appearance="soft"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Swatch"
                prefix={{
                  type: "color-swatch",
                  color: "@open_in_new",
                  variant: "solid",
                  size: "xs",
                }}
              />
              swatch
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Link
                color={theme.color}
                cTag="default"
                variant="outline"
                appearance="strong"
                hoverStyle={{
                  appearance: "soft",
                  variant: "solid",
                  color: theme.color,
                }}
                children="Key"
                size="base"
                suffix={{
                  type: "kbd",
                  size: "xs",
                  appearance: "soft",
                  shadowDirection: "bottom",
                }}
              />
              kbd
            </div>
          </div>
        </section>
      </LazySection>
    </ShowcaseShell>
  );
}
