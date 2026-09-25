// @ts-nocheck
// Ported from origin/badge:src/components/Badge/stories/badge.stories.tsx; API drift vs installed v0.0.35 — see report (the source story itself is //@ts-nocheck)
// Showcase ported from origin/badge:src/components/Badge/stories/badge.stories.tsx
import React from "react";
import { cn } from "@inventive-ui/framework";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../storybook";
import { Badge } from "@inventive-ui/components/Badge";
import { getCornerRotation } from "../story-helpers/Badge/utils";
import { LazySection } from "../storybook";



export default function BadgeShowcase() {
  const globals: Record<string, any> = {};

    const theme = getShowcaseTheme(globals);
    const resolvedColor = theme.color === "neutral" ? "brand" : theme.color;
    const colors = ["neutral", "red", "orange", "amber", "yellow", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "zinc", "stone", "white", "black"];
    const appearances: Array<"strong" | "soft" | "onColor" | "dualTone"> = ["strong", "soft", "onColor", "dualTone"];
    const variants: Array<"solid" | "solid-outline" | "outline" | "ghost"> = ["solid", "solid-outline", "outline", "ghost"];

    // Ordered placements for the "Placement — absolute positioning demo" sections
    // (Dot + Counter). Values are the canonical BadgePosition tokens the component
    // actually accepts; "left"/"right" DISPLAY as "start"/"end" to match the design
    // system's logical, RTL-safe placement naming — only the label changes, not the
    // `placement` prop passed to the component.
    const PLACEMENT_DEMO = [
      { value: "top-start", label: "top-start" },
      { value: "top", label: "top" },
      { value: "top-end", label: "top-end" },
      { value: "right", label: "end" },
      { value: "bottom-end", label: "bottom-end" },
      { value: "bottom", label: "bottom" },
      { value: "bottom-start", label: "bottom-start" },
      { value: "left", label: "start" },
    ] as const;

    const OnColorCell = ({
      appearance,
      color = "brand",
      children,
    }: {
      appearance: string;
      color?: string;
      children: React.ReactNode;
    }) => {
      if (appearance !== "onColor") return <>{children}</>;
      return (
        <div className={`bg-${theme.color}-500`} style={{ borderRadius: 8, padding: "8px 10px", display: "inline-flex" }}>
          {children}
        </div>
      );
    };

    // Section heading helper
    const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 dark:text-neutral-300">{title}</h2>
        {subtitle && <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>}
      </div>
    );

    const SubHeader = ({ title }: { title: string }) => (
      <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-3 dark:text-neutral-300">{title}</h3>
    );

    const Row = ({ children, align = "center" }: { children: React.ReactNode; align?: string }) => (
      <div className={`flex flex-wrap gap-6 items-${align}`}>{children}</div>
    );

    const Cell = ({ label, children }: { label: string; children: React.ReactNode }) => (
      <div className="flex flex-col items-center gap-2">
        {children}
        <span className="text-xs text-neutral-500 font-medium">{label}</span>
      </div>
    );

    const Sub = ({ children }: { children: React.ReactNode }) => (
      <div className="space-y-4">{children}</div>
    );

    const Divider = () => <div className="border-t border-neutral-100 my-6" />;

    return (
      <ShowcaseShell globals={globals} className={cn(SHOWCASE_CONTAINER_CLASS, "space-y-20")}>

        {/* ═══════════════════════════════════════════════════════
          * HEADER
          * ═══════════════════════════════════════════════════════ */}
        <header className="space-y-3">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-300">Badge Component Showcase</h1>
          <p className="text-lg text-neutral-500">
            All badge types · appearances · variants · sizes · colors · states · slot combinations
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Dot", "Counter", "Status Indicator", "Label", "Ribbon", "Corner"].map((t) => (
              <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">{t}</span>
            ))}
          </div>
        </header>



        {/* ═══════════════════════════════════════════════════════
          * DOT BADGE
          * ═══════════════════════════════════════════════════════ */}
        <LazySection>
          <section className="space-y-10">
            <SectionHeader title="Dot Badge" subtitle="Simple circular indicator for notifications and status signals." />

            <Sub>
              <SubHeader title="Sizes" />
              <Row align="end">
                {(["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"] as const).map((size) => (
                  <Cell key={size} label={size}>
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size={size} color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Color Palette" />
              <Row>
                {colors.map((color) => (
                  <Cell key={color} label={color}>
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} color={color} size="xl" />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Variants" />
              <Row>
                {(["solid", "solid-outline", "outline"] as const).map((variant) => (
                  <Cell key={variant} label={variant}>
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} variant={variant} size="xl" color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Appearances" />
              <Row>
                {appearances.map((appearance) => (
                  <Cell key={appearance} label={appearance}>
                    <OnColorCell appearance={appearance} color={resolvedColor}>
                      <Badge.Dot {...theme.componentProps} {...theme.layoutProps} appearance={appearance} size="xl" color={resolvedColor} />
                    </OnColorCell>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Variants × Appearances Matrix" />
              <div className="overflow-x-auto">
                <table className="border-collapse text-sm bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-neutral-200 bg-neutral-50  dark:bg-neutral-900  px-4 py-2 text-left font-semibold text-neutral-700 dark:text-neutral-300">variant / appearance</th>
                      {appearances.map((a) => (
                        <th key={a} className="border border-neutral-200 bg-neutral-50  dark:bg-neutral-900  px-6 py-2 text-center font-semibold text-neutral-700 dark:text-neutral-300 min-w-[120px]">{a}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(["solid", "solid-outline", "outline"] as const).map((variant) => (
                      <tr key={variant}>
                        <td className="border border-neutral-200 px-4 py-3 font-medium bg-neutral-50  dark:bg-neutral-900  text-neutral-700 dark:text-neutral-300">{variant}</td>
                        {appearances.map((appearance) => (
                          <td key={appearance} className="border border-neutral-200 px-6 py-5 text-center bg-neutral-100  dark:bg-neutral-900">
                            <div className="flex justify-center">
                              <OnColorCell appearance={appearance} color={resolvedColor}>
                                <Badge.Dot {...theme.componentProps} {...theme.layoutProps} variant={variant} appearance={appearance} size="xl" color={resolvedColor} />
                              </OnColorCell>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Disabled State" />
              <Row>
                <Cell label="enabled"><Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} /></Cell>
                <Cell label="disabled"><Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} disabled /></Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Adaptive (Dark Mode)" />
              <div className="flex gap-8 flex-wrap">
                <div className="flex flex-col items-center gap-2 p-4 bg-white border rounded-lg">
                  <span className="text-xs font-bold text-neutral-50  dark:text-neutral-800 uppercase mb-1">Light</span>
                  <Row>
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} />
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} variant="outline" />
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} variant="solid-outline" />
                  </Row>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-neutral-800 border border-neutral-700 rounded-lg dark">
                  <span className="text-xs font-bold text-white uppercase mb-1">Dark</span>
                  <Row>
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} adaptive />
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} variant="outline" adaptive />
                    <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="xl" color={resolvedColor} variant="solid-outline" adaptive />
                  </Row>
                </div>
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement — absolute positioning demo" />
              <Row>
                {PLACEMENT_DEMO.map(({ value, label }) => (
                  <Cell key={value} label={label}>
                    <div className="relative w-16 h-16 bg-neutral-100  dark:bg-neutral-900 rounded-lg flex items-center justify-center text-xs text-neutral-50">
                      Box
                      <Badge.Dot {...theme.componentProps} {...theme.layoutProps} size="lg" color={resolvedColor} placement={value} />
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement with layer" />
              <Row>
                {PLACEMENT_DEMO.map(({ value, label }) => (
                  <Cell key={value} label={label}>
                    <div className="relative w-16 h-16 bg-neutral-100  dark:bg-neutral-900 rounded-lg flex items-center justify-center text-xs text-neutral-50">
                      Box
                      <Badge.Dot {...theme.componentProps} {...theme.layoutProps}
                        size="lg"
                        color={resolvedColor}
                        placement={value}
                        ring={{ size: "lg" }}
                      />
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>
          </section>
        </LazySection>

        {/* ═══════════════════════════════════════════════════════
          * COUNTER BADGE
          * ═══════════════════════════════════════════════════════ */}
        <LazySection>
          <section className="space-y-10">
            <SectionHeader title="Counter Badge" subtitle="Numeric indicator for unread counts, cart items, and notification quantities." />

            <Sub>
              <SubHeader title="Sizes" />
              <Row align="end">
                {(["xs", "sm", "base", "lg", "xl", "2xl"] as const).map((size) => (
                  <Cell key={size} label={size}>
                    <Badge.Counter {...theme.componentProps} {...theme.layoutProps} size={size} counter={8} color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Count Values — overflow handling" />
              <Row align="end">
                {[0, 1, 9, 10, 42, 99, 100, 999].map((n) => (
                  <Cell key={n} label={String(n)}>
                    <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={n} max={99} color={resolvedColor} />
                  </Cell>
                ))}
                <Cell label="no max">
                  <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={150} color={resolvedColor} />
                </Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Color Palette" />
              <Row>
                {colors.map((color) => (
                  <Cell key={color} label={color}>
                    <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={7} color={color} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Variants" />
              <Row>
                {variants.map((variant) => (
                  <Cell key={variant} label={variant}>
                    <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={4} variant={variant} color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Appearances" />
              <Row>
                {appearances.map((appearance) => (
                  <Cell key={appearance} label={appearance}>
                    <OnColorCell appearance={appearance} color={resolvedColor}>
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={4} appearance={appearance} color={resolvedColor} />
                    </OnColorCell>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="With Prefix / Suffix Icon Slots" />
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-neutral-50 uppercase mb-2 block">Prefix</span>
                  <Row align="end">
                    <Cell label="Icon">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "icon", name: "@placeholder" } as any} />
                    </Cell>
                    <Cell label="Flag">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "flag", code: "@placeholder", shape: "rectangle", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Avatar">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "avatar", name: "JD", size: "xs", shape: "circle", variant: "solid", appearance: "strong", color: "brand" } as any} />
                    </Cell>
                    <Cell label="Badge Dot">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "badge-dot", variant: "solid", appearance: "strong", color: "info", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Badge Counter">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "badge-counter", counter: 25, variant: "solid", appearance: "strong", color: "success", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Status Indicator">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "badge-status-indicator", appearance: "strong", color: "success", size: "sm" } as any} />
                    </Cell>
                    <Cell label="File Type">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "file-type", extension: "@placeholder", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Loader">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "loader", size: "sm", color: "currentColor" } as any} />
                    </Cell>
                    <Cell label="Logo">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "logo", name: "@placeholder", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Color Logo">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "color-logo", name: "@placeholder", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Emoji">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" prefix={{ type: "emoji", name: "@placeholder", size: "sm" } as any} />
                    </Cell>
                  </Row>
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase mb-2 block">Suffix</span>
                  <Row align="end">
                    <Cell label="Icon">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "icon", name: "@placeholder" } as any} />
                    </Cell>
                    <Cell label="Flag">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "flag", code: "@placeholder", shape: "rectangle", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Avatar">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "avatar", name: "JD", size: "xs", shape: "circle", variant: "solid", appearance: "strong", color: "brand" } as any} />
                    </Cell>
                    <Cell label="Badge Dot">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "badge-dot", variant: "solid", appearance: "strong", color: "info", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Badge Counter">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "badge-counter", counter: 25, variant: "solid", appearance: "strong", color: "success", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Status Indicator">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "badge-status-indicator", appearance: "strong", color: "success", size: "sm" } as any} />
                    </Cell>
                    <Cell label="File Type">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "file-type", extension: "@placeholder", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Loader">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "loader", size: "sm", color: "currentColor" } as any} />
                    </Cell>
                    <Cell label="Logo">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "logo", name: "@placeholder", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Color Logo">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "color-logo", name: "@placeholder", size: "sm" } as any} />
                    </Cell>
                    <Cell label="Emoji">
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={5} color={resolvedColor} appearance="soft" suffix={{ type: "emoji", name: "@placeholder", size: "sm" } as any} />
                    </Cell>
                  </Row>
                </div>
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Disabled State" />
              <Row>
                <Cell label="enabled"><Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={7} color={resolvedColor} /></Cell>
                <Cell label="disabled"><Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={7} color={resolvedColor} disabled /></Cell>
                <Cell label="label + counter (disabled)">
                  <Badge.Label {...theme.componentProps} {...theme.layoutProps}
                    size="base"
                    color={resolvedColor}
                    label="Disabled + Counter"
                    disabled
                    suffix={{ type: "badge-counter", cTag: "badge-counter-default", counter: 3, size: "base" } as any}
                  />
                </Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement — absolute positioning demo" />
              <Row>
                {PLACEMENT_DEMO.map(({ value, label }) => (
                  <Cell key={value} label={label}>
                    <div className="relative w-16 h-16 bg-neutral-100  dark:bg-neutral-900 rounded-lg flex items-center justify-center text-xs text-neutral-500">
                      Box
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} counter={3} color={resolvedColor} size="sm" placement={value} />
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement with layer" />
              <Row>
                {PLACEMENT_DEMO.map(({ value, label }) => (
                  <Cell key={value} label={label}>
                    <div className="relative w-16 h-16 bg-neutral-100  dark:bg-neutral-900 rounded-lg flex items-center justify-center text-xs text-neutral-500">
                      Box
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps}
                        counter={3}
                        color={resolvedColor}
                        size="sm"
                        placement={value}
                        ring={{ size: "lg" }}
                      />
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Overrides (Radius & Spacing)" />
              <div className="flex flex-col gap-6">
                <Row align="start">
                  {(["none", "sm", "md", "lg", "full"] as const).map((r) => (
                    <Cell key={r} label={`rounded="${r}"`}>
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} rounded={r} counter={5} color={resolvedColor} />
                    </Cell>
                  ))}
                </Row>
                <Row align="start">
                  {(["compact", "standard", "spacious"] as const).map((s) => (
                    <Cell key={s} label={`spacing="${s}"`}>
                      <Badge.Counter {...theme.componentProps} {...theme.layoutProps} spacing={s} counter={5} color={resolvedColor} prefix={{ type: "icon", name: "@placeholder" } as any} />
                    </Cell>
                  ))}
                </Row>
              </div>
            </Sub>
          </section>
        </LazySection>

        {/* ═══════════════════════════════════════════════════════
          * STATUS INDICATOR
          * ═══════════════════════════════════════════════════════ */}
        <LazySection>
          <section className="space-y-10">
            <SectionHeader title="Status Indicator" subtitle="Presence and availability states for user avatars and live system status." />

            <Sub>
              <SubHeader title="Presence States" />
              <Row>
                <Cell label="Online">
                  <Badge.StatusIndicator {...theme.componentProps} {...theme.layoutProps}
                    appearance="strong"
                    color={resolvedColor}
                    size="base"
                    prefix={{ type: "icon", library: "lucide", name: "check", size: "xs" }}
                  />
                </Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Variants × Appearances Matrix (Online state)" />
              <div className="overflow-x-auto">
                <table className="border-collapse text-sm bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-neutral-200 bg-neutral-50  dark:bg-neutral-900  px-4 py-2 text-left font-semibold text-neutral-700 dark:text-neutral-300">variant / appearance</th>
                      {appearances.map((a) => (
                        <th key={a} className="border border-neutral-200 bg-neutral-50  dark:bg-neutral-900  px-6 py-2 text-center font-semibold text-neutral-700 dark:text-neutral-300 min-w-[120px]">{a}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(["solid", "outline"] as const).map((variant) => (
                      <tr key={variant}>
                        <td className="border border-neutral-200 px-4 py-3 font-medium bg-neutral-50  dark:bg-neutral-900   dark:bg-neutral-900  text-neutral-700 dark:text-neutral-300">{variant}</td>
                        {appearances.map((appearance) => (
                          <td key={appearance} className="border border-neutral-200 px-6 py-5 text-center bg-neutral-100  dark:bg-neutral-900">
                            <div className="flex justify-center">
                              <OnColorCell appearance={appearance} color={resolvedColor}>
                                <Badge.StatusIndicator {...theme.componentProps} {...theme.layoutProps}
                                  variant={variant}
                                  appearance={appearance}
                                  color={resolvedColor}
                                  size="lg"
                                  prefix={{ type: "icon", library: "lucide", name: "check", size: "xs" }}
                                />
                              </OnColorCell>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Size Scale — 'online' state across all sizes" />
              <Row align="end">
                {(["xs", "sm", "base", "lg", "xl", "2xl", "3xl"] as const).map((size) => (
                  <Cell key={size} label={size}>
                    <Badge.StatusIndicator {...theme.componentProps} {...theme.layoutProps}
                      size={size}
                      color={resolvedColor}
                      prefix={{ type: "icon", library: "lucide", name: "check", size: "xs" }}
                    />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement — attached to avatar placeholder" />
              <Row>
                {(["top-end", "bottom-end", "top-start", "bottom-start"] as const).map((p) => (
                  <Cell key={p} label={p}>
                    <div className="relative w-12 h-12 rounded-full bg-neutral-100  dark:bg-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-600">
                      JD
                      <Badge.StatusIndicator {...theme.componentProps} {...theme.layoutProps}
                        placement={p}
                        color={resolvedColor}
                        size="sm"
                        prefix={{ type: "icon", library: "lucide", name: "check", size: "xs" }}
                      />
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement with layer" />
              <Row>
                {(["top-end", "bottom-end", "top-start", "bottom-start"] as const).map((p) => (
                  <Cell key={p} label={p}>
                    <div className="relative w-12 h-12 rounded-full bg-neutral-100  dark:bg-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-600">
                      JD
                      <Badge.StatusIndicator {...theme.componentProps} {...theme.layoutProps}
                        placement={p}
                        color={resolvedColor}
                        size="sm"
                        ring={{ size: "lg" }}
                        prefix={{ type: "icon", library: "lucide", name: "check", size: "xs" }}
                      />
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement with layer (outlined variant)" />
              <Row>
                {(["top-end", "bottom-end", "top-start", "bottom-start"] as const).map((p) => (
                  <Cell key={p} label={p}>
                    <div className="relative w-12 h-12 rounded-full bg-neutral-100  dark:bg-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-600">
                      JD
                      <Badge.StatusIndicator {...theme.componentProps} {...theme.layoutProps}
                        variant="outline"
                        placement={p}
                        color={resolvedColor}
                        size="sm"
                        ring={{ size: "lg" }}
                        prefix={{ type: "icon", library: "lucide", name: "check", size: "xs" }}
                      />
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>
          </section>
        </LazySection>

        {/* ═══════════════════════════════════════════════════════
          * LABEL BADGE
          * ═══════════════════════════════════════════════════════ */}
        <LazySection>
          <section className="space-y-10">
            <SectionHeader title="Label Badge" subtitle="Text-based badges for tags, categories, statuses, and annotations." />

            <Sub>
              <SubHeader title="Sizes" />
              <Row align="end">
                {(["xs", "sm", "base", "lg", "xl"] as const).map((size) => (
                  <Cell key={size} label={size}>
                    <Badge.Label {...theme.componentProps} {...theme.layoutProps} size={size} label="Badge" color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>
            <Divider />

            <Sub>
              <SubHeader title="Size × Spacing Matrix" />
              <div className="overflow-x-auto">
                <table className="border-collapse text-sm bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-neutral-200 bg-neutral-100  dark:bg-neutral-900  dark:bg-neutral-900  px-4 py-2 text-left font-semibold text-neutral-700 dark:text-neutral-300">size / spacing</th>
                      {(["compact", "standard", "spacious"] as const).map((spacing) => (
                        <th key={spacing} className="border border-neutral-200 bg-neutral-100  dark:bg-neutral-900 px-6 py-2 text-center font-semibold text-neutral-700 dark:text-neutral-300 min-w-[140px]">
                          {spacing}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(["xs", "sm", "base", "lg", "xl"] as const).map((size) => (
                      <tr key={size}>
                        <td className="border border-neutral-200 px-4 py-3 font-medium bg-neutral-100  dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">{size}</td>
                        {(["compact", "standard", "spacious"] as const).map((spacing) => (
                          <td key={spacing} className="border border-neutral-200 px-6 py-4 text-center bg-neutral-100  dark:bg-neutral-900">
                            <div className="flex justify-center">
                              <Badge.Label
                                {...theme.componentProps}
                                {...theme.layoutProps}
                                label={`Badge`}
                                size={size}
                                spacing={spacing}
                                color={resolvedColor}
                                prefix={{ type: "icon", name: "@placeholder" } as any}
                              />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Color Palette" />
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <Badge.Label {...theme.componentProps} {...theme.layoutProps} key={color} label={color} color={color} size="base" />
                ))}
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Variants" />
              <Row>
                {variants.map((variant) => (
                  <Cell key={variant} label={variant}>
                    <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Badge" variant={variant} color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Appearances" />
              <Row>
                {appearances.map((appearance) => (
                  <Cell key={appearance} label={appearance}>
                    <OnColorCell appearance={appearance} color={resolvedColor}>
                      <Badge.Label {...theme.componentProps} {...theme.layoutProps} label={appearance} appearance={appearance} color={resolvedColor} />
                    </OnColorCell>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Variants × Appearances Matrix" />
              <div className="overflow-x-auto">
                <table className="border-collapse text-sm bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-neutral-200 bg-neutral-100  dark:bg-neutral-900 px-4 py-2 text-left font-semibold text-neutral-700 dark:text-neutral-300">variant / appearance</th>
                      {appearances.map((a) => (
                        <th key={a} className="border border-neutral-200 bg-neutral-100  dark:bg-neutral-900 px-6 py-2 text-center font-semibold text-neutral-700 dark:text-neutral-300 min-w-[130px]">{a}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((variant) => (
                      <tr key={variant}>
                        <td className="border border-neutral-200 px-4 py-3 font-medium bg-neutral-100  dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">{variant}</td>
                        {appearances.map((appearance) => (
                          <td key={appearance} className="border border-neutral-200 px-6 py-5 text-center bg-neutral-100  dark:bg-neutral-900 bg-neutral-100  dark:bg-neutral-900">
                            <div className="flex justify-center">
                              <OnColorCell appearance={appearance} color={resolvedColor}>
                                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Badge" variant={variant} appearance={appearance} color={resolvedColor} />
                              </OnColorCell>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Sub>

            <Divider />


            <Divider />
            <Sub>
              <SubHeader title="Prefix Slot Options" />
              <div className="flex flex-wrap gap-3">
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Icon" color={resolvedColor} appearance="soft"
                  prefix={{ type: "icon", name: "@placeholder" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Flag" color={resolvedColor} appearance="soft"
                  prefix={{ type: "flag", code: "@placeholder", shape: "rectangle", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Avatar" color={resolvedColor} appearance="soft"
                  prefix={{ type: "avatar", name: "JD", size: "xs", shape: "circle", variant: "solid", appearance: "strong", color: "brand" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Badge Dot" color={resolvedColor} appearance="soft"
                  prefix={{ type: "badge-dot", variant: "solid", appearance: "strong", color: "info", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Badge Counter" color={resolvedColor} appearance="soft"
                  prefix={{ type: "badge-counter", counter: 5, variant: "solid", appearance: "strong", color: "success", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Status Indicator" color={resolvedColor} appearance="soft"
                  prefix={{ type: "badge-status-indicator", appearance: "strong", color: "success", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="File Type" color={resolvedColor} appearance="soft"
                  prefix={{ type: "file-type", extension: "@placeholder", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Loader" color={resolvedColor} appearance="soft"
                  prefix={{ type: "loader", size: "sm", color: "currentColor" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Logo" color={resolvedColor} appearance="soft"
                  prefix={{ type: "logo", name: "@placeholder", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Color Logo" color={resolvedColor} appearance="soft"
                  prefix={{ type: "color-logo", name: "@placeholder", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Emoji" color={resolvedColor} appearance="soft"
                  prefix={{ type: "emoji", name: "@placeholder", size: "sm" } as any} />
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Suffix Slot Options" />
              <div className="flex flex-wrap gap-3">
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Icon" color={resolvedColor} appearance="soft"
                  suffix={{ type: "icon", name: "@placeholder" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Flag" color={resolvedColor} appearance="soft"
                  suffix={{ type: "flag", code: "@placeholder", shape: "rectangle", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Avatar" color={resolvedColor} appearance="soft"
                  suffix={{ type: "avatar", name: "JD", size: "xs", shape: "circle", variant: "solid", appearance: "strong", color: "brand" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Badge Dot" color={resolvedColor} appearance="soft"
                  suffix={{ type: "badge-dot", variant: "solid", appearance: "strong", color: "info", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Badge Counter" color={resolvedColor} appearance="soft"
                  suffix={{ type: "badge-counter", counter: 5, variant: "solid", appearance: "strong", color: "success", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Status Indicator" color={resolvedColor} appearance="soft"
                  suffix={{ type: "badge-status-indicator", appearance: "strong", color: "success", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="File Type" color={resolvedColor} appearance="soft"
                  suffix={{ type: "file-type", extension: "@placeholder", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Loader" color={resolvedColor} appearance="soft"
                  suffix={{ type: "loader", size: "sm", color: "currentColor" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Logo" color={resolvedColor} appearance="soft"
                  suffix={{ type: "logo", name: "@placeholder", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Color Logo" color={resolvedColor} appearance="soft"
                  suffix={{ type: "color-logo", name: "@placeholder", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Emoji" color={resolvedColor} appearance="soft"
                  suffix={{ type: "emoji", name: "@placeholder", size: "sm" } as any} />
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Prefix + Suffix Combined" />
              <div className="flex flex-wrap gap-3">
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="New Feature" color={resolvedColor} appearance="soft"
                  prefix={{ type: "icon", name: "@placeholder" } as any}
                  suffix={{ type: "badge-counter", counter: 3, variant: "solid", appearance: "strong", color: "brand", size: "sm" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="US Market" color={resolvedColor} appearance="soft"
                  prefix={{ type: "flag", code: "@placeholder", shape: "rectangle", size: "sm" } as any}
                  suffix={{ type: "icon", name: "@placeholder" } as any} />
                <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Pro Plan" color={resolvedColor} appearance="soft"
                  prefix={{ type: "icon", name: "@placeholder", style: "outlined" } as any}
                  suffix={{ type: "badge-dot", variant: "solid", color: "success", size: "sm" } as any} />
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Capitalize prop" />
              <Row>
                <Cell label="capitalize: false">
                  <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="new release" color={resolvedColor} capitalize={false} />
                </Cell>
                <Cell label="capitalize: true">
                  <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="new release" color={resolvedColor} capitalize />
                </Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Disabled State" />
              <Row>
                <Cell label="enabled">
                  <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Active" color={resolvedColor}
                    prefix={{ type: "icon", name: "@placeholder" } as any} />
                </Cell>
                <Cell label="disabled">
                  <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Disabled" color={resolvedColor} disabled
                    prefix={{ type: "icon", name: "@placeholder" } as any} />
                </Cell>
                <Cell label="disabled + counter suffix">
                  <Badge.Label {...theme.componentProps} {...theme.layoutProps} label="Inbox" color={resolvedColor} disabled
                    suffix={{ type: "badge-counter", cTag: "badge-counter-default", counter: 3, size: "base" } as any} />
                </Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Adaptive (Dark Mode)" />
              <div className="flex gap-8 flex-wrap">
                <div className="flex flex-col items-start gap-3 p-4 bg-white border rounded-lg">
                  <span className="text-xs font-bold text-neutral-50  dark:text-neutral-800 uppercase">Light</span>
                  <div className="flex gap-2 flex-wrap">
                    {appearances.map((a) => (
                      <Badge.Label {...theme.componentProps} {...theme.layoutProps} key={a} label={a} appearance={a} color={resolvedColor} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3 p-4 bg-neutral-900 border border-neutral-700 rounded-lg dark">
                  <span className="text-xs font-bold text-neutral-40 uppercase">Dark</span>
                  <div className="flex gap-2 flex-wrap">
                    {(["strong", "soft", "dualTone"] as const).map((a) => (
                      <Badge.Label {...theme.componentProps} {...theme.layoutProps} key={a} label={a} appearance={a} color={resolvedColor} adaptive />
                    ))}
                  </div>
                </div>
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Overrides (Radius & Spacing)" />
              <div className="flex flex-col gap-6">
                <Row align="start">
                  {(["none", "sm", "md", "lg", "full"] as const).map((r) => (
                    <Cell key={r} label={`rounded="${r}"`}>
                      <Badge.Label {...theme.componentProps} {...theme.layoutProps} rounded={r} label="Label" color={resolvedColor} />
                    </Cell>
                  ))}
                </Row>
                <Row align="start">
                  {(["compact", "standard", "spacious"] as const).map((s) => (
                    <Cell key={s} label={`spacing="${s}"`}>
                      <Badge.Label {...theme.componentProps} {...theme.layoutProps} spacing={s} label="Label" color={resolvedColor} prefix={{ type: "icon", name: "star" } as any} />
                    </Cell>
                  ))}
                </Row>
              </div>
            </Sub>
          </section>
        </LazySection>

        {/* ═══════════════════════════════════════════════════════
          * RIBBON BADGE
          * ═══════════════════════════════════════════════════════ */}
        <LazySection>
          <section className="space-y-10">
            <SectionHeader title="Ribbon Badge" subtitle="Directional labels for promotions, highlights, and contextual annotations." />

            <Sub>
              <SubHeader title="Sizes" />
              <Row align="end">
                {(["xs", "sm", "base", "lg"] as const).map((size) => (
                  <Cell key={size} label={size}>
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="New" size={size} color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Pointer Styles" />
              <Row>
                {(["inward", "outward", "none"] as const).map((pointer) => (
                  <Cell key={pointer} label={pointer}>
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Sale" pointer={pointer} color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Alignment — start vs end" />
              <Row>
                <Cell label="start (default)">
                  <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Featured" alignment="start" color={resolvedColor} />
                </Cell>
                <Cell label="end">
                  <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Featured" alignment="end" color={resolvedColor} />
                </Cell>
                <Cell label="start + outward">
                  <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Hot" alignment="start" pointer="outward" color={resolvedColor} />
                </Cell>
                <Cell label="end + outward">
                  <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Hot" alignment="end" pointer="outward" color={resolvedColor} />
                </Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Tail Variant" />
              <Row>
                <Cell label="no tail"><Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="New" tail={false} color={resolvedColor} /></Cell>
                <Cell label="with tail (start)"><Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="New" tail alignment="start" pointer="none" color={resolvedColor} /></Cell>
                <Cell label="with tail (end)"><Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="New" tail alignment="end" pointer="none" color={resolvedColor} /></Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Color Palette" />
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} key={color} label={color} color={color} size="sm" />
                ))}
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Appearances" />
              <Row>
                {appearances.map((appearance) => (
                  <Cell key={appearance} label={appearance}>
                    <OnColorCell appearance={appearance} color={resolvedColor}>
                      <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label={appearance} appearance={appearance} color={resolvedColor} />
                    </OnColorCell>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="With Prefix / Suffix Slots" />
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-neutral-100 uppercase mb-2 block">Prefix</span>
                  <div className="flex flex-wrap gap-3">
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Icon" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "icon", name: "@placeholder" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Flag" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "flag", code: "@placeholder", shape: "rectangle", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Avatar" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "avatar", name: "JD", size: "xs", shape: "circle", variant: "solid", appearance: "strong", color: "brand" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Badge Dot" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "badge-dot", variant: "solid", appearance: "strong", color: "info", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Badge Counter" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "badge-counter", counter: 5, variant: "solid", appearance: "strong", color: "success", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Status Indicator" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "badge-status-indicator", appearance: "strong", color: "success", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="File Type" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "file-type", extension: "@placeholder", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Loader" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "loader", size: "sm", color: "currentColor" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Logo" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "logo", name: "@placeholder", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Color Logo" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "color-logo", name: "@placeholder", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Emoji" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      prefix={{ type: "emoji", name: "@placeholder", size: "sm" } as any} />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-100 uppercase mb-2 block">Suffix</span>
                  <div className="flex flex-wrap gap-3">
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Icon" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "icon", name: "@placeholder" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Flag" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "flag", code: "@placeholder", shape: "rectangle", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Avatar" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "avatar", name: "JD", size: "xs", shape: "circle", variant: "solid", appearance: "strong", color: "brand" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Badge Dot" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "badge-dot", variant: "solid", appearance: "strong", color: "info", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Badge Counter" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "badge-counter", counter: 5, variant: "solid", appearance: "strong", color: "success", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Status Indicator" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "badge-status-indicator", appearance: "strong", color: "success", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="File Type" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "file-type", extension: "@placeholder", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Loader" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "loader", size: "sm", color: "currentColor" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Logo" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "logo", name: "@placeholder", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Color Logo" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "color-logo", name: "@placeholder", size: "sm" } as any} />
                    <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} label="Emoji" color={resolvedColor} appearance="soft" className="[&_.font-semibold]:text-base [&_.font-semibold]:font-normal"
                      suffix={{ type: "emoji", name: "@placeholder", size: "sm" } as any} />
                  </div>
                </div>
              </div>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Corner Placement — ribbon anchored to box corners" />
              <Row>
                {(["top-start", "top-end", "bottom-start", "bottom-end"] as const).map((placement) => (
                  <Cell key={placement} label={placement}>
                    <div style={{ position: "relative", width: 100, height: 100, background: "#e5e7eb", borderRadius: 8, overflow: "visible" }}>
                      <div style={{
                        position: "absolute",
                        ...(placement === "top-start" ? { top: -8, left: -8 } :
                          placement === "top-end" ? { top: -8, right: -8 } :
                            placement === "bottom-start" ? { bottom: 5, left: -8 } :
                              { bottom: 5, right: -8 }),
                      }}>
                        <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps}
                          label="New"
                          color={resolvedColor}
                          size="xs"
                          tail
                          pointer="none"
                          alignment={placement.endsWith("start") ? "start" : "end"}
                        />
                      </div>
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Overrides (Radius & Spacing)" />
              <div className="flex flex-col gap-6">
                <Row align="start">
                  {(["none", "sm", "md", "lg", "full"] as const).map((r) => (
                    <Cell key={r} label={`rounded="${r}"`}>
                      <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} rounded={r} label="Ribbon" color={resolvedColor} />
                    </Cell>
                  ))}
                </Row>
                <Row align="start">
                  {(["compact", "standard", "spacious"] as const).map((s) => (
                    <Cell key={s} label={`spacing="${s}"`}>
                      <Badge.Ribbon {...theme.componentProps} {...theme.layoutProps} spacing={s} label="Ribbon" color={resolvedColor} prefix={{ type: "icon", name: "@placeholder" } as any} />
                    </Cell>
                  ))}
                </Row>
              </div>
            </Sub>
          </section>
        </LazySection>

        {/* ═══════════════════════════════════════════════════════
          * CORNER BADGE
          * ═══════════════════════════════════════════════════════ */}
        <LazySection>
          <section className="space-y-10">
            <SectionHeader title="Corner Badge" subtitle="Diagonal ribbon badges that anchor to the corners of a containing element." />

            {/*
           * Flat rows (no rotation) for Sizes / Colors / Subtitle / Appearances so
           * the label text is always upright and readable.
           * The Placements row rotates each badge via a wrapper div AND passes the
           * matching `placement` prop so the internal shouldFlipText logic keeps the
           * text at ≈ ±45° (readable) instead of ±134° (upside-down).
           */}
            <Sub>
              <SubHeader title="Sizes" />
              <Row align="end">
                {(["xs", "sm", "base", "lg"] as const).map((size) => (
                  <Cell key={size} label={size}>
                    <Badge.Corner {...theme.componentProps} {...theme.layoutProps} size={size} label="Size" subtitle={size} color={resolvedColor} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Colors" />
              <Row>
                {colors.slice(0, 6).map((color) => (
                  <Cell key={color} label={color}>
                    <Badge.Corner {...theme.componentProps} {...theme.layoutProps} size="sm" label="Color" subtitle={color} color={color} />
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="With &amp; Without Subtitle" />
              <Row align="end">
                <Cell label="label only">
                  <Badge.Corner {...theme.componentProps} {...theme.layoutProps} size="base" label="New" color={resolvedColor} />
                </Cell>
                <Cell label="label + subtitle">
                  <Badge.Corner {...theme.componentProps} {...theme.layoutProps} size="base" label="Sale" subtitle="Limited" color={resolvedColor} />
                </Cell>
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Appearances" />
              <Row>
                {appearances.map((appearance) => (
                  <Cell key={appearance} label={appearance}>
                    <OnColorCell appearance={appearance} color={resolvedColor}>
                      <Badge.Corner {...theme.componentProps} {...theme.layoutProps} size="sm" label="Badge" appearance={appearance} color={resolvedColor} />
                    </OnColorCell>
                  </Cell>
                ))}
              </Row>
            </Sub>

            <Divider />
            <Sub>
              <SubHeader title="Placement — anchored to box corners" />
              <Row>
                {(["top-start", "top-end", "bottom-start", "bottom-end"] as const).map((placement) => (
                  <Cell key={placement} label={placement}>
                    <div
                      style={{
                        position: "relative",
                        width: 160,
                        height: 160,
                        padding: 12,
                        boxSizing: "border-box",
                        background: "#e5e7eb",
                        borderRadius: 8,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          ...(placement === "top-start"
                            ? { top: 10, right: 0 }
                            : placement === "top-end"
                              ? { top: 10, left: 0 }
                              : placement === "bottom-start"
                                ? { bottom: 10, right: 0 }
                                : { bottom: 10, left: 0 }),
                        }}
                      >
                        <div style={{ transform: `rotate(${getCornerRotation(placement)}deg)`, transformOrigin: "center" }}>
                          <Badge.Corner {...theme.componentProps} {...theme.layoutProps} size="sm" label="Badge" color={resolvedColor} placement={placement} />
                        </div>
                      </div>
                    </div>
                  </Cell>
                ))}
              </Row>
            </Sub>
          </section>
        </LazySection>

      </ShowcaseShell>
    );
}
