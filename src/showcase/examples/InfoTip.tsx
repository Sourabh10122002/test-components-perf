// Showcase ported from origin/infotip:src/components/InfoTip/stories/InfoTip.stories.tsx (story "Overview", storyName "Showcase / Overview")
import { InfoTip } from "@inventive-ui/components/InfoTip";
import type { InfoTipProps } from "@inventive-ui/components/InfoTip";
import type { SemanticColor } from "@inventive-ui/framework";
import React from "react";
import { LazySection } from "../storybook";

type InfoTipStoryArgs = InfoTipProps & {
  color?: SemanticColor;
  "aria-label"?: string;
  "aria-describedby"?: string;
  id?: string;
  title?: string;
  style?: React.CSSProperties;
};

const getColor = (args: InfoTipStoryArgs, globals: any) =>
  args.color || globals.themeColor;

const commonArgs: InfoTipProps = {
  adaptive: false,
  appearance: "strong",
  className: "",
  color: undefined,
  disabled: false,
  hoverStyle: undefined,
  icon: { type: "icon", name: "@info", filled: false },
  size: "base",
  toggle: false,
  variant: "ghost",
};

// Overview story args
const overviewArgs = {
    ...commonArgs,
    tooltip: {
      type: "tooltip",
      cTag: "info",
      description: "More Information",
      color: "neutral",
    },
} as InfoTipProps;

export default function InfoTipShowcase() {
    const globals = {};
    const args: InfoTipProps = overviewArgs;
    const color = getColor(args, globals);

    return (
      <div className="flex flex-col gap-20 bg-white px-6">
        {/* ================= BASICS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                InfoTip Basics
              </h2>
              <p className="text-sm text-gray-600">
                Simple informational tooltip triggered by an icon
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span>Label</span>
              <InfoTip {...args} color={color} />
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
                  <InfoTip {...args} size={size as any} color={color} />
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
                  <InfoTip
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
                        <InfoTip
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
                        <InfoTip
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
                  <InfoTip
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
                  <InfoTip
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

        {/* ================= states ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">States</h2>
              <p className="text-sm text-gray-600">
                Semantic states for feedback and emphasis
              </p>
            </div>

            <div className="flex items-center gap-16 p-6">
              {["brand", "success", "warning", "error", "info", "neutral"].map(
                (c) => (
                  <div key={c} className="flex flex-col items-center gap-2">
                    <InfoTip
                      {...args}
                      tooltip={{
                        ...(args.tooltip as any),
                        description: `${c} state tooltip`,
                      }}
                      state={c as any}
                    />
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      {c}
                    </span>
                  </div>
                ),
              )}
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
              <InfoTip {...args} disabled />
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
                InfoTip appearance in light and dark themes
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Light Mode */}
              <div className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg">
                <span className="text-sm font-medium text-gray-700 w-32">
                  Light Mode
                </span>

                <InfoTip
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

                    <InfoTip
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

                    <InfoTip
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
                Demonstrates how InfoTip can be visually customized using
                className.
              </p>
            </div>

            <div className="flex items-center gap-4 border rounded-lg p-6 bg-gray-100">
              <span className="text-sm font-medium text-gray-800">
                Styled InfoTip
              </span>

              <InfoTip
                {...args}
                className="p-2 bg-blue-100 rounded-full shadow-md transition-transform duration-200 hover:scale-110"
                tooltip={{
                  ...(args.tooltip as any),
                  description: "Custom styled InfoTip trigger",
                }}
              />
            </div>
          </section>
        </LazySection>
      </div>
    );
}
