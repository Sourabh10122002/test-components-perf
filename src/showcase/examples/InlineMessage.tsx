// Showcase ported from origin/inlineMessage:src/components/InlineMessage/stories/InlineMessage.stories.tsx
// stories/InlineMessage.stories.tsx

// ----------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------

import React from "react";
import { LazySection } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";
import { InlineMessage } from "@inventive-ui/components/InlineMessage";
import { cn } from "@inventive-ui/framework";

// ----------------------------------------------------------------
// STORIES
// ----------------------------------------------------------------

/*
 * Showcase Story
 * Renders a matrix of all permutations (States x Sizes) and Positions.
 * Controls are disabled for this story as it is a static visual reference.
 */

export default function InlineMessageShowcase() {
  const globals: Record<string, any> = {};
  const args: Partial<React.ComponentProps<typeof InlineMessage>> = {};
  const theme = getShowcaseTheme(globals);

  // 1. Cast showcaseArgs to match the expected ComponentProps
  const showcaseArgs = {
    ...args,
    ...theme.componentProps,
  } as React.ComponentProps<typeof InlineMessage>;

  const ShowcaseInlineMessage = (
    props: React.ComponentProps<typeof InlineMessage>,
  ) => <InlineMessage {...showcaseArgs} {...props} />;

  // Define the dimensions to iterate over
  const states = ["error", "warning", "success", "info", "help"] as const;
  const sizes = ["xs", "sm", "base", "lg", "xl"] as const;

  // Helper styles for the grid layout
  const sectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    fontFamily: globals.globalFont || "sans-serif",
    padding: "40px",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "8px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#666",
    textTransform: "capitalize",
  };

  const stateMap = {
    success: { color: "success", icon: "@check_circle" },
    error: { color: "danger", icon: "@error" },
    warning: { color: "warning", icon: "@warning" },
    info: { color: "info", icon: "@info" },
    help: { color: "help", icon: "@help" },
  };

  return (
    <ShowcaseShell
      globals={globals}
      className={cn(SHOWCASE_CONTAINER_CLASS, "p-0")}
    >
      <div
        style={sectionStyle}
        className={cn("bg-neutral-100 dark:bg-neutral-900 min-h-screen")}
      >
        <LazySection enabled={false}>
          <div className={cn("")}>
            <h1 className={cn("text-2xl font-bold text-gray-12 dark:text-gray-86")}>
              Inline Message Showcase
            </h1>
            <p className={cn("text-gray-48 dark:text-gray-64 ")}>
              All available variations, styles, and orientations.
            </p>
          </div>
        </LazySection>

        <LazySection>
          <div>
            <h2 className={cn("text-gray-14 dark:text-gray-86")} style={headerStyle}>State Representation</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "40px",
              }}
            >
              {states.map((state) => (
                <div
                  key={state}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  {/* State label */}
                  <div
                    style={{
                      ...labelStyle,
                      fontWeight: "bold",
                      minWidth: 120,
                    }}
                  >
                    {state}
                  </div>

                  {/* Column 1: Adaptive ON */}
                  <div style={{ flex: 1 }}>
                    <ShowcaseInlineMessage
                      id={`message-${state}-adaptive-on`}
                      cTag="inline-message"
                      description="This is an inline message"
                      size="base"
                      as="div"
                      color={stateMap[state].color}
                      slot={{ type: "icon", name: stateMap[state].icon }}
                      adaptive={true}
                      ref={null}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LazySection>

        <LazySection>
          <div className="flex flex-col gap-8 py-8 w-full max-w-5xl">
            {/* Header Section */}
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Font Family Variants
              </h2>
              <p className="text-slate-500 text-base">
                Preview the typography scaling and font families from your
                global theme.
              </p>
            </div>

            {/* Font Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Inter", "Arial", "Mono"].map((font) => {
                return (
                  <div
                    key={font}
                    className="group relative flex flex-col border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer overflow-hidden"
                  >
                    {/* Top Label */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                        {font}
                      </span>
                    </div>

                    {/* The InlineMessage Preview */}
                    <div className="w-full mt-auto">
                      <ShowcaseInlineMessage
                        id={`font-preview-${font.toLowerCase()}`}
                        cTag="info" // Using the 'info' cTag from our new config
                        title={`${font} Preview`}
                        slot={{ type: "icon", name: "info" }}
                        description="The quick brown fox jumps over the lazy dog."
                        size="base"
                        as="div"
                        color="neutral"
                        // If your theme supports these utility classes, this will apply the font
                        className={`font-${font.toLowerCase()} group-hover:opacity-90 transition-opacity`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </LazySection>

        <LazySection>
          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#0f172a",
              }}
            >
              Adaptive
            </h2>
          </div>

          {/* Column Headers for visual clarity */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "0px",
              paddingLeft: "156px", // Offsets the headers to account for the 120px label + 16px gap
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "black",
            }}
          >
            <div style={{ flex: 1, fontWeight: "bold", ...labelStyle }}>
              Adaptive: True
            </div>
            <div style={{ flex: 1, fontWeight: "bold", ...labelStyle }}>
              Adaptive: False
            </div>
          </div>

          <div
            className={cn("dark")}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              backgroundColor: "black",
              paddingBottom: "20px",
              paddingLeft: "15px",
            }}
          >
            {states.map((state) => (
              <div
                key={state}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* State label */}
                <div
                  style={{
                    ...labelStyle,
                    fontWeight: "bold",
                    minWidth: 120,
                  }}
                >
                  {state}
                </div>

                {/* Column 1: Adaptive ON */}
                <div style={{ flex: 1 }}>
                  <ShowcaseInlineMessage
                    id={`message-${state}-adaptive-on`}
                    cTag="inline-message"
                    description="This is an inline message"
                    color={stateMap[state].color}
                    slot={{ type: "icon", name: stateMap[state].icon }}
                    size="base"
                    as="div"
                    adaptive={true}
                    ref={null}
                  />
                </div>

                {/* Column 2: Adaptive OFF */}
                <div style={{ flex: 1 }}>
                  <ShowcaseInlineMessage
                    id={`message-${state}-adaptive-off`}
                    cTag="inline-message"
                    description="This is an inline message"
                    color={stateMap[state].color}
                    slot={{ type: "icon", name: stateMap[state].icon }}
                    size="base"
                    as="div"
                    adaptive={false}
                    ref={null}
                  />
                </div>
              </div>
            ))}
          </div>
        </LazySection>

        <LazySection>
          <div>
            <h2 className={cn("text-gray-14 dark:text-gray-86")} style={headerStyle}>Size × Density Matrix</h2>
            <p
              style={{
                color: "#020202",
                marginBottom: "20px",
                fontSize: "14px",
              }}
              className={cn("text-gray-48 dark:text-gray-64")}
            >
              Visual comparison of all size and density (spacing) combinations
            </p>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "12px",
                border: "1px solid #e5e7eb", // Outer border
              }}
            >
              {/* Table Header */}
              <thead>
                <tr className={cn("bg-gray-16 dark:bg-gray-94")}>
                  {/* Changed textAlign to center */}
                  <th
                    style={{
                      ...labelStyle,
                      textAlign: "center",
                      padding: "12px",
                      border: "1px solid #d0d4db",
                    }}
                  >
                    Size
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      color: "#5d95e3",
                    }}
                  >
                    Compact
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      color: "#5d95e3",
                    }}
                  >
                    Normal
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px",
                      border: "1px solid #e5e7eb",
                      color: "#5d95e3",
                    }}
                  >
                    Spacious
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {sizes.map((size) => (
                  <tr key={size}>
                    {/* Size Label */}
                    <td
                      style={{
                        ...labelStyle,
                        fontWeight: "bold",
                        padding: "4px",
                        minWidth: 120,
                        textAlign: "center",
                        verticalAlign: "middle",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      {size}
                    </td>

                    {/* Compact */}
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <ShowcaseInlineMessage
                        id="message-id-compact"
                        cTag="inline-message"
                        description="This is an inline message"
                        slot={{ type: "icon", name: "@info" }}
                        size={size}
                        className={cn("gap-1")}
                      />
                    </td>

                    {/* Normal */}
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <ShowcaseInlineMessage
                        id="message-id-normal"
                        cTag="inline-message"
                        description="This is an inline message"
                        slot={{ type: "icon", name: "@info" }}
                        size={size}
                        className={cn("gap-2")}
                      />
                    </td>

                    {/* Spacious */}
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <ShowcaseInlineMessage
                        id="message-id-spacious"
                        cTag="inline-message"
                        description="This is an inline message"
                        slot={{ type: "icon", name: "@info" }}
                        size={size}
                        className={cn("gap-3")}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LazySection>

        <LazySection>
          <div>
            <h2 className={cn("text-gray-14 dark:text-gray-86")} style={headerStyle}>Inline Message: With & Without Icon</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {states.map((state) => (
                <div
                  key={state}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "64px",
                    paddingLeft: "40px",
                    paddingTop: "4px",
                  }}
                >
                  {/* With Icon */}
                  <ShowcaseInlineMessage
                    id={`message-${state}-icon`}
                    cTag="inline-message"
                    description="With Icon"
                    color={stateMap[state].color}
                    slot={{ type: "icon", name: stateMap[state].icon }}
                    size="base"
                  />

                  {/* Without Icon */}
                  <ShowcaseInlineMessage
                    id={`message-${state}-no-icon`}
                    cTag="inline-message"
                    description="Without Icon"
                    color={stateMap[state].color}
                    size="base"
                  />
                </div>
              ))}

              <div
                className={cn("leading-snug text-slate-400")}
                style={{
                  ...labelStyle,
                  fontWeight: "bold",
                  minWidth: 120,
                  marginTop: "16px",
                  marginLeft: "40px",
                }}
              >
                Inline messages can be displayed with or without their default
                state icons. <br />
                Toggle the <code>slot</code> prop to <code>none</code>{" "}
                depending on your spatial constraints or visual preference.
              </div>
            </div>
          </div>
        </LazySection>

        <LazySection>
          <div style={sectionStyle}>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2 text-gray-14 dark:text-gray-86">
                Custom States via componentConfig
              </h2>
              <p className="text-sm text-gray-48 dark:text-gray-64">
                Users can define custom states like <code>launch</code> or{" "}
                <code>maintenance</code> in the <code>componentConfig</code>.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Launch State Example */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-gray-40 uppercase tracking-wider">
                  Example: cTag="launch"
                </span>
                <ShowcaseInlineMessage
                  id="custom-1"
                  cTag="launch"
                  title="Deployment Successful"
                  description="The new application version has been successfully launched to production."
                  color="purple"
                  slot={{ type: "icon", name: "@placeholder" }}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">
                Configuration Guide:
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Add this to your <code>IUIProvider</code>'s{" "}
                <code>componentConfig</code>{" "}
                <span className="italic text-red-500">
                  (component.config.ts/js)
                </span>
              </p>
              <pre className="text-[11px] font-mono p-4 bg-slate-900 text-slate-300 rounded overflow-auto">
                {`export const componentConfig: any = {
InlineMessage: {
  // 1. Define custom states globally for this component
  launch: {
    color: "purple", // Or a hex code if your theme supports it
    role: "status",
    "aria-live": "polite",
    slot: { type: "icon", name: "rocket_launch" }, 
  },
  critical: {
    color: "red",
    role: "alert",
    "aria-live": "assertive",
    slot: { type: "icon", name: "report" }, 
  },
  // --- New Custom States ---
  maintenance: {
    color: "amber",
    role: "status",
    "aria-live": "polite",
    slot: { type: "icon", name: "build" }, // e.g., for system downtime or updates
  },
  verified: {
    color: "emerald",
    role: "status",
    "aria-live": "polite",
    slot: { type: "icon", name: "verified_user" }, // e.g., for official/trusted content
  },
},
};`}
              </pre>
            </div>
          </div>
        </LazySection>
      </div>
    </ShowcaseShell>
  );
}
