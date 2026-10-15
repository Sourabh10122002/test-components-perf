// Showcase ported from origin/infotip:src/components/Infotip/stories/Infotip.stories.tsx (story "Overview", storyName "Showcase / Overview")
import { Infotip } from "@inventive-ui/components";
import type { InfotipProps } from "@inventive-ui/components";
import type { SemanticColor } from "@inventive-ui/framework";
import React from "react";
import { LazySection, getStorybookAccentColorKeys } from "../storybook";

type InfotipStoryArgs = InfotipProps & {
  color?: SemanticColor;
  "aria-label"?: string;
  "aria-describedby"?: string;
  id?: string;
  title?: string;
  style?: React.CSSProperties;
};

const getColor = (args: InfotipStoryArgs, globals: any) =>
  args.color || globals.themeColor;

const commonArgs: InfotipProps = {
  adaptive: true,
  invalid: false,
  appearance: "strong",
  className: "",
  color: undefined,
  disabled: false,
  hoverStyle: undefined,
  icon: { type: "icon", name: "@info", filled: false },
  size: "base",
  variant: "ghost",
};

const overviewArgs: InfotipProps = {
    ...commonArgs,
    tooltip: {
      type: "tooltip",
      cTag: "info",
      description: "More Information",
      color: "neutral",
    },
};

export default function InfotipShowcase() {
  const globals: Record<string, any> = {};
  const args: InfotipProps = overviewArgs;
    const color = getColor(args, globals);

    return (
      <div className="flex flex-col gap-20 bg-white px-6">
        {/* ================= BASICS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Infotip Basics
              </h2>
              <p className="text-sm text-gray-600">
                Simple informational tooltip triggered by an icon
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span>Label</span>
              <Infotip {...args} color={color} />
            </div>
          </section>
        </LazySection>

        {/* ================= SIZE VARIATIONS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Sizes</h2>
              <p className="text-sm text-gray-600">
                Different sizes for layout flexibility
              </p>
            </div>

            <div className="flex items-center gap-16 p-6">
              {["xs", "sm", "base", "lg", "xl"].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Infotip {...args} size={size as any} color={color} />
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= ICON VARIANTS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Icon Variants
              </h2>
              <p className="text-sm text-gray-600">
                Different icons for different contexts
              </p>
            </div>

            <div className="flex items-center gap-16 p-6">
              {["@info", "@error", "@help"].map((icon) => (
                <div key={icon} className="flex flex-col items-center gap-2">
                  <Infotip
                    {...args}
                    icon={{ type: "icon", name: icon, filled: false }}
                    color={color}
                  />
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= APPEARANCE x VARIANT ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Appearance × Variant
              </h2>
              <p className="text-sm text-gray-600">
                Combination of appearance and variant styles
              </p>
            </div>

            <div className="grid grid-cols-5 gap-6 items-center">
              {/* Header Row */}
              <div />
              {["solid", "solid-outline", "outline", "ghost"].map((variant) => (
                <div
                  key={variant}
                  className="text-xs font-semibold text-gray-500 text-center uppercase"
                >
                  {variant}
                </div>
              ))}

              {/* Rows */}
              {["strong", "soft", "dualTone", "oncolor"].map((appearance) => (
                <React.Fragment key={appearance}>
                  {/* Row Label */}
                  <div className="text-xs font-semibold text-gray-500 uppercase">
                    {appearance}
                  </div>

                  {/* Cells */}
                  {["solid", "solid-outline", "outline", "ghost"].map(
                    (variant) => (
                      <div
                        key={`${appearance}-${variant}`}
                        className="flex justify-center"
                      >
                        <Infotip
                          {...args}
                          appearance={appearance as any}
                          variant={variant as any}
                          color={color}
                        />
                      </div>
                    ),
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= HOVER STATES ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Hover Styles
              </h2>
              <p className="text-sm text-gray-600">
                Hover state combinations of appearance and variant
              </p>
            </div>

            <div className="grid grid-cols-5 gap-6 items-center">
              {/* Header Row */}
              <div />
              {["solid", "solid-outline", "outline", "ghost"].map((variant) => (
                <div
                  key={variant}
                  className="text-xs font-semibold text-gray-500 text-center uppercase"
                >
                  {variant}
                </div>
              ))}

              {/* Rows */}
              {["strong", "soft", "dualTone", "oncolor"].map((appearance) => (
                <React.Fragment key={appearance}>
                  {/* Row Label */}
                  <div className="text-xs font-semibold text-gray-500 uppercase">
                    {appearance}
                  </div>

                  {/* Cells */}
                  {["solid", "solid-outline", "outline", "ghost"].map(
                    (variant) => (
                      <div
                        key={`${appearance}-${variant}`}
                        className="flex justify-center"
                      >
                        <Infotip
                          {...args}
                          hoverStyle={{
                            appearance: appearance as any,
                            variant: variant as any,
                          }}
                          color={color}
                        />
                      </div>
                    ),
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= PLACEMENTS ================= */}
        <LazySection>
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Tooltip Placement
              </h2>
              <p className="text-sm text-gray-600">
                Position of tooltip relative to the trigger
              </p>
            </div>

            <div className="flex flex-wrap gap-16  p-6">
              {[
                "top",
                "top-start",
                "top-end",
                "end-top",
                "end",
                "end-bottom",
                "bottom-start",
                "bottom",
                "bottom-end",
                "start-top",
                "start",
                "start-bottom",
              ].map((placement) => (
                <div
                  key={placement}
                  className="flex flex-col items-center gap-2"
                >
                  <Infotip
                    {...args}
                    hoverStyle={{
                      variant: "solid",
                      appearance: "dualTone",
                    }}
                    tooltip={{
                      ...(args.tooltip as any),
                      description: "Helper text",
                      placement: placement as any,
                    }}
                    color={color}
                  />
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {placement}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= TRIGGERS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Trigger Types
              </h2>
              <p className="text-sm text-gray-600">
                Different interaction triggers
              </p>
            </div>

            <div className="flex items-center p-6 gap-16">
              {["click", "hover"].map((trigger) => (
                <div key={trigger} className="flex flex-col items-center gap-2">
                  <Infotip
                    {...args}
                    tooltip={{
                      ...(args.tooltip as any),
                      description: "Helper text",
                      trigger: trigger as any,
                    }}
                    color={color}
                  />
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {trigger}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= COLOR PALETTE ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Color Palette
              </h2>
              <p className="text-sm text-gray-600">
                Explore the semantic and configured accent colors available for
                the Infotip trigger.
              </p>
            </div>

            <div className="space-y-10">
              {/* Semantic Roles */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                  Semantic Roles
                </h3>

                <div className="flex flex-wrap items-center gap-6">
                  {[
                    "brand",
                    "neutral",
                    "success",
                    "warning",
                    "danger",
                    "info",
                  ].map((color) => (
                    <div
                      key={color}
                      className="flex flex-col items-center gap-2"
                    >
                      <Infotip
                        {...args}
                        color={color as any}
                        invalid={false}
                        aria-label={`${color} information`}
                        tooltip={{
                          ...(args.tooltip as any),
                          title: `${color.charAt(0).toUpperCase() + color.slice(1)} color`,
                          description: `Infotip using the ${color} semantic color.`,
                        }}
                      />

                      <span className="text-xs font-medium text-gray-500">
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent Colors */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                  Accent Colors
                </h3>

                <div className="flex flex-wrap items-center gap-6">
                  {getStorybookAccentColorKeys().map((color: string) => (
                    <div
                      key={color}
                      className="flex flex-col items-center gap-2"
                    >
                      <Infotip
                        {...args}
                        color={color as any}
                        invalid={false}
                        aria-label={`${color} information`}
                        tooltip={{
                          ...(args.tooltip as any),
                          title: `${color.charAt(0).toUpperCase() + color.slice(1)} color`,
                          description: `Infotip using the ${color} accent color.`,
                        }}
                      />

                      <span className="text-xs font-medium text-gray-500">
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= DISABLED ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Disabled State
              </h2>
              <p className="text-sm text-gray-600">
                Disabled interaction behavior
              </p>
            </div>

            <div className="flex items-center gap-6 p-4">
              <Infotip {...args} disabled />
            </div>
          </section>
        </LazySection>

        {/* ================= LIGHT & DARK MODE ================= */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Light & Dark Mode
              </h2>
              <p className="text-sm text-gray-600">
                Infotip appearance in light and dark themes
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Light Mode */}
              <div className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg">
                <span className="text-sm font-medium text-gray-700 w-32">
                  Light Mode
                </span>

                <Infotip
                  {...args}
                  variant="solid"
                  hoverStyle={{
                    variant: "solid",
                    appearance: "dualTone",
                  }}
                  tooltip={{
                    ...(args.tooltip as any),
                    description: "Light mode tooltip",
                  }}
                />
              </div>

              {/* Dark Mode */}
              <div className="flex flex-col gap-6 p-6 bg-gray-900 border border-gray-700 rounded-lg dark">
                <span className="text-sm font-medium text-gray-300 w-32">
                  Dark Mode
                </span>

                <div className="flex items-center gap-10">
                  {/* adaptive: false */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-32">
                      adaptive: false
                    </span>

                    <Infotip
                      {...args}
                      adaptive={false}
                      variant="solid"
                      hoverStyle={{
                        variant: "solid",
                        appearance: "dualTone",
                      }}
                      tooltip={{
                        ...(args.tooltip as any),
                        description: "Dark mode (adaptive: false)",
                      }}
                    />
                  </div>

                  {/* adaptive: true */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-32">
                      adaptive: true
                    </span>

                    <Infotip
                      {...args}
                      adaptive={true}
                      variant="solid"
                      hoverStyle={{
                        variant: "solid",
                        appearance: "dualTone",
                      }}
                      tooltip={{
                        ...(args.tooltip as any),
                        description: "Dark mode (adaptive: true)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= CUSTOM STYLING ================= */}
        <LazySection>
          <section className="flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Custom Styling
              </h3>
              <p className="text-sm text-gray-600">
                Demonstrates how Infotip can be visually customized using
                className.
              </p>
            </div>

            <div className="flex items-center gap-4 border rounded-lg p-6 bg-gray-100">
              <span className="text-sm font-medium text-gray-800">
                Styled Infotip
              </span>

              <Infotip
                {...args}
                className="p-2 bg-blue-100 rounded-full shadow-md transition-transform duration-200 hover:scale-110"
                tooltip={{
                  ...(args.tooltip as any),
                  description: "Custom styled Infotip trigger",
                }}
              />
            </div>
          </section>
        </LazySection>
      </div>
    );
}
