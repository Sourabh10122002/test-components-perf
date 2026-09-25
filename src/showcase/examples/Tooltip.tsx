// @ts-nocheck
// Showcase ported from origin/tooltip:src/components/Tooltip/stories/Tooltip.stories.tsx (the story file itself is // @ts-nocheck)
import React from "react";
import { useSlotRenderer } from "@inventive-ui/framework/slots";
import { Tooltip } from "@inventive-ui/components/Tooltip";
import type { TooltipProps } from "@inventive-ui/components/Tooltip";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_SCROLL_X_CLASS,
} from "../storybook";
import { LazySection } from "../storybook";
import { ShowcaseTable } from "../story-helpers/Tooltip/showcase-layout";

/**
 * Comprehensive showcase displaying all tooltip variants, sizes, positions,
 * appearances, states, colors, radiuses, spacings, and fonts in a single visual reference page.
 */
export default function TooltipShowcase() {
    const globals = {};
    const GROUP_SAMPLE_AVATARS = [{
      name: "Alice Johnson",
      color: "success",
      img: {
        src: "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
        alt: "Alice Johnson",
      },
    },
    { name: "Vedant Agarwal", color: "neutral" },
    { name: "Carol White", color: "purple" },
    { name: "David Brown", color: "amber" },
    { name: "Eve Davis", color: "pink" },
    { name: "Frank Wilson", color: "red" },
    { name: "Grace Lee", color: "blue" },
    ];
    const clampedCount = Math.max(
      2,
      Math.min(GROUP_SAMPLE_AVATARS.length, Math.round(5)),
    );
    const theme = getShowcaseTheme(globals);
    const ShowcaseTooltip = (props: Partial<TooltipProps>) => (
      <Tooltip {...theme.componentProps} {...theme.layoutProps}
        cTag="default"
        {...theme.layoutProps}
        {...theme.componentProps}
        color={theme.color}
        {...props}
      />
    );
    const variants: NonNullable<TooltipProps["variant"]>[] = [
      "solid",
      "solid-outline",
    ];
    const appearances: NonNullable<TooltipProps["appearance"]>[] = [
      "strong",
      "soft",
    ];

    const allColors = [
      "brand",
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
      "neutral",
      "zinc",
      "stone",
      "white",
      "black",
    ];
    const radiuses = ["none", "sm", "md", "lg", "full"] as any;
    const spacings = ["compact", "standard", "spacious"] as any;
    const fonts = ["inter", "arial", "mono"];

    // Create a slot renderer for this story
    const renderSlot = useSlotRenderer();

    // Helper to render a trigger button
    const TriggerButton = ({
      label,
      state,
      className,
    }: {
      label: string;
      state?: string;
      className?: string;
    }) =>
      renderSlot({
        slot: {
          type: "button",
          onClick: () => { },
          size: "sm",
          variant: "solid",
          adaptive: true,
          appearance: "strong",
          state: state || "info",
          children: label,
          className: className,
        },
      });
    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        {/* Header */}
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <h1 className="dark:text-white text-4xl font-extrabold text-neutral-900 tracking-tight">
            Tooltip Showcase
          </h1>
          <p className="dark:text-neutral-500 text-lg text-neutral-600">
            A comprehensive visual reference for all Tooltip variants, states,
            and behaviors.
          </p>
        </div>

        {/* 3. Appearance × Variant Matrix */}
        <LazySection>
          <ShowcaseTable
            title="Appearance × Variant Matrix"
            description="Matrix of all visual styles and appearance intensities."
            rowHeaderLabel="Appearance / Variant"
            rows={[
              { key: "strong", label: "Strong" },
              { key: "soft", label: "Soft" },
            ]}
            columns={[
              { key: "solid", label: "Solid" },
              { key: "solid-outline", label: "Solid Outline" },
            ]}
            renderCell={(appearance: any, variant: any) => (
              <ShowcaseTooltip
                variant={variant}
                appearance={appearance}
                prefix={{ type: "none" }}
                description={`${variant} + ${appearance}`}
                placement="top"
                cTag="default"
              >
                <TriggerButton label={`${variant} + ${appearance}`} />
              </ShowcaseTooltip>
            )}
          />
        </LazySection>

        {/* 4. Theme Colors */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Theme Colors
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                A full spectrum of theme colors.
              </p>
            </div>
            <div
              className="flex items-center gap-6 flex-wrap pt-6"
              style={{ flexWrap: "wrap" }}
            >
              {allColors.map((color) => (
                <div key={color} className="flex flex-col items-center gap-3">
                  <ShowcaseTooltip
                    variant="solid"
                    appearance="strong"
                    prefix={{ type: "icon" }}
                    description={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
                    placement="top"
                    interactive={false}
                    cTag="default"
                    color={color}
                  >
                    <TriggerButton
                      label={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  </ShowcaseTooltip>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 5. Radius Options */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Radius Options
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Different border radius options for the tooltip.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {radiuses.map((radius: any) => (
                <div key={radius} className="flex flex-col items-center gap-3">
                  <ShowcaseTooltip
                    variant="solid"
                    appearance="strong"
                    description={`Rounded: ${radius}`}
                    placement="top"
                    cTag="default"
                    prefix={{ type: "icon" }}
                    rounded={radius}
                  >
                    <TriggerButton
                      label={radius.charAt(0).toUpperCase() + radius.slice(1)}
                    />
                  </ShowcaseTooltip>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 6. Spacing Options */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Spacing Options
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Padding and gap configurations.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {spacings.map((spacing) => (
                <div key={spacing} className="flex flex-col items-center gap-3">
                  <ShowcaseTooltip
                    variant="solid"
                    appearance="strong"
                    description={`Spacing: ${spacing}`}
                    placement="top"
                    prefix={{ type: "icon" }}
                    cTag="default"
                    spacing={spacing}
                  >
                    <TriggerButton
                      label={spacing.charAt(0).toUpperCase() + spacing.slice(1)}
                    />
                  </ShowcaseTooltip>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 7. Font Options */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Font Options
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Typography follows the Storybook Font toolbar ({theme.font}).
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {fonts.map((font) => (
                <div key={font} className="flex flex-col items-center gap-3">
                  <ShowcaseTooltip
                    variant="solid"
                    appearance="strong"
                    description={`Font: ${font}`}
                    placement="top"
                    prefix={{ type: "icon" }}
                    cTag="default"
                    className={`font-${font}`}
                  >
                    <TriggerButton
                      label={font.charAt(0).toUpperCase() + font.slice(1)}
                    />
                  </ShowcaseTooltip>
                </div>
              ))}
            </div>
          </section>
        </LazySection>


        {/* 6. Spacing Options */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Slot Placement
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                The slot can be placed on the start only.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                placement="top"
                prefix={{ type: "icon" }}
                cTag="default"
                title="Start"
              >
                <TriggerButton
                  label={"Start"}
                />
              </ShowcaseTooltip>
            </div>
          </section>
        </LazySection>


        {/* 8. Slot Options */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Slot Options
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Customize the tooltip's leading slot with diverse options.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="Security settings and access control"
                placement="top"
                cTag="default"
                prefix={{ type: "icon", size: "md" }}
              >
                <TriggerButton label="Security" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="Server deployed in India region"
                placement="top"
                cTag="default"
                prefix={{ type: "flag" }}
              >
                <TriggerButton label="Region" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="Great job completing the sprint tasks!"
                placement="top"
                cTag="default"
                prefix={{ type: "emoji", size: "sm" }}
              >
                <TriggerButton label="Kudos" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid-outline"
                appearance="soft"
                description="Assigned to Alex Morgan"
                placement="top"
                cTag="default"
                prefix={{
                  type: "avatar",
                  name: "Alex Morgan",
                }}
              >
                <TriggerButton label="Assignee" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="Sign in with your Apple ID"
                placement="top"
                cTag="default"
                prefix={{ type: "logo", size: "sm" }}
              >
                <TriggerButton label="Apple Auth" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid-outline"
                appearance="soft"
                description="Connected to Google Workspace"
                placement="top"
                cTag="default"
                prefix={{ type: "color-logo", size: "sm" }}
              >
                <TriggerButton label="Google Workspace" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="PDF document ready for download"
                placement="top"
                cTag="default"
                prefix={{ type: "file-type", size: "md", extension: 'pdf' }}
              >
                <TriggerButton label="Export PDF" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="Press Enter to confirm selection"
                placement="top"
                cTag="default"
                prefix={{ type: "kbd", size: "xs" }}
              >
                <TriggerButton label="Confirm Key" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="System online and fully operational"
                placement="top"
                cTag="default"
                prefix={{ type: "badge-dot", color: 'success', size: 'lg' }}
              >
                <TriggerButton label="System Status" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="Critical service error detected"
                placement="top"
                cTag="default"
                prefix={{ type: "badge-status-indicator", color: 'danger', size: 'sm' }}
              >
                <TriggerButton label="Service Alert" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                variant="solid"
                appearance="strong"
                description="You have 2 new notifications"
                placement="top"
                cTag="default"
                prefix={{ type: "badge-counter", size: 'sm', counter: 2, color: 'neutral' }}
              >
                <TriggerButton label="Notifications" />
              </ShowcaseTooltip>
            </div>
          </section>
        </LazySection>

        {/* 9. Positioning */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Positioning (All 12)
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Directional placement relative to the trigger element.
              </p>
            </div>
            <div
              className={`${SHOWCASE_SCROLL_X_CLASS} rounded-lg bg-neutral-100 p-16 flex flex-col items-center gap-12`}
            >
              {/* Top Row */}
              <div className="flex w-full max-w-4xl flex-wrap justify-center gap-8">
                <ShowcaseTooltip
                  title="Top Start"
                  description="This is top start position"
                  placement="top-start"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Top Start" />
                </ShowcaseTooltip>
                <ShowcaseTooltip
                  title="Top"
                  description="This is top position"
                  placement="top"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Top" />
                </ShowcaseTooltip>
                <ShowcaseTooltip
                  title="Top End"
                  description="This is top end position"
                  placement="top-end"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Top End" />
                </ShowcaseTooltip>
              </div>

              {/* Middle Section */}
              <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-8">
                {/* Left Side */}
                <div className="flex shrink-0 flex-col gap-8">
                  <ShowcaseTooltip
                    title="Start Top"
                    description="This is start top position"
                    placement="start-top"
                    cTag="default"
                    prefix={{ type: "icon" }}
                  >
                    <TriggerButton className="w-25" label="Start Top" />
                  </ShowcaseTooltip>
                  <ShowcaseTooltip
                    title="Start"
                    description="This is start position"
                    placement="start"
                    cTag="default"
                    prefix={{ type: "icon" }}
                  >
                    <TriggerButton className="w-25" label="Start" />
                  </ShowcaseTooltip>
                  <ShowcaseTooltip
                    title="Start Bottom"
                    description="This is start bottom position"
                    placement="start-bottom"
                    cTag="default"
                    prefix={{ type: "icon" }}
                  >
                    <TriggerButton className="w-25" label="Start Bottom" />
                  </ShowcaseTooltip>
                </div>

                {/* Center Box */}
                <div className="flex justify-center items-center flex-1 mx-16 p-8 border-2 border-dashed border-neutral-300 rounded-md min-h-62.5">
                  <span className="text-neutral-400 font-medium text-center">
                    Center Content Area
                  </span>
                </div>

                {/* Right Side */}
                <div className="flex shrink-0 flex-col gap-8">
                  <ShowcaseTooltip
                    title="End Top"
                    description="This is end top position"
                    placement="end-top"
                    cTag="default"
                    prefix={{ type: "icon" }}
                  >
                    <TriggerButton className="w-25" label="End Top" />
                  </ShowcaseTooltip>
                  <ShowcaseTooltip
                    title="End"
                    description="This is end position"
                    placement="end"
                    cTag="default"
                    prefix={{ type: "icon" }}
                  >
                    <TriggerButton className="w-25" label="End" />
                  </ShowcaseTooltip>
                  <ShowcaseTooltip
                    title="End Bottom"
                    description="This is end bottom position"
                    placement="end-bottom"
                    cTag="default"
                    prefix={{ type: "icon" }}
                  >
                    <TriggerButton className="w-25" label="End Bottom" />
                  </ShowcaseTooltip>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-center gap-8 w-full max-w-4xl">
                <ShowcaseTooltip
                  title="Bottom Start"
                  description="This is bottom start position"
                  placement="bottom-start"
                  cTag="default"
                  prefix={{ type: "icon" }}
                >
                  <TriggerButton label="Bottom Start" />
                </ShowcaseTooltip>
                <ShowcaseTooltip
                  title="Bottom"
                  description="This is bottom position"
                  placement="bottom"
                  cTag="default"
                  prefix={{ type: "icon" }}
                >
                  <TriggerButton label="Bottom" />
                </ShowcaseTooltip>
                <ShowcaseTooltip
                  title="Bottom End"
                  description="This is bottom end position"
                  placement="bottom-end"
                  cTag="default"
                  prefix={{ type: "icon" }}
                >
                  <TriggerButton label="Bottom End" />
                </ShowcaseTooltip>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 10. Content Variations */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Content Variations
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Flexible description support including titles, objects, icons,
                and wrapping.
              </p>
            </div>
            <div className="flex items-start gap-8 flex-wrap">
              <ShowcaseTooltip
                title="Bold Title"
                placement="top"
                cTag="default"
                prefix={{ type: "none" }}
              >
                <TriggerButton label="Title Only" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                description="Simple description text"
                placement="top"
                cTag="default"
              >
                <TriggerButton label="Description Only" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                title="Help Info"
                description="Additional details about this feature."
                placement="top"
                cTag="default"
              >
                <TriggerButton label="Title + Message" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                title="Help Info"
                description="Additional details about this feature."
                placement="top"
                cTag="default"
                prefix={{ type: 'icon' }}
              >
                <TriggerButton label="Title + Message + Icon" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                description="Search for items"
                prefix={{ type: "icon" }}
                placement="top"
                cTag="default"
              >
                <TriggerButton label="With Icon" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                description={{
                  children:
                    "This is a very long tooltip description that should wrap automatically to the next line because noWrap is false by default.",
                  size: "sm",
                  weight: "regular",
                }}
                placement="top"
                cTag="default"
                noWrap={false}
              >
                <TriggerButton label="Long Text (Wrapped)" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                description="This is a very long tooltip description that does not wrap."
                placement="top"
                noWrap={true}
                cTag="default"
                showArrow={true}
              >
                <TriggerButton label="No Wrap (Wide)" />
              </ShowcaseTooltip>

              <ShowcaseTooltip
                placement="top"
                color="black"
                cTag="default"
                description={
                  <div className="flex flex-col gap-2 font-sans select-none text-xs text-neutral-300">
                    <div className="font-semibold text-neutral-100">Apr</div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-0.5 bg-[#10b981] inline-block" />
                        <span>Product A: <strong className="text-white font-semibold">60</strong></span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 border-t border-dashed border-[#10b981] inline-block" />
                        <span>Product B: <strong className="text-white font-semibold">40</strong></span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 border-t-2 border-dotted border-[#10b981] inline-block" />
                        <span>Product C: <strong className="text-white font-semibold">50</strong></span>
                      </div>
                    </div>
                  </div>
                }
              >
                <TriggerButton label="Custom content" />
              </ShowcaseTooltip>
            </div>
          </section>
        </LazySection>

        {/* 11. Interaction types interaction=true interaction=false */}

        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Interaction types
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Interaction types.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Interaction true */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Interaction true
                </span>
                <ShowcaseTooltip
                  description="Interaction true"
                  interactive={true}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Interaction true" />
                </ShowcaseTooltip>
              </div>

              {/* Interaction false */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Interaction false
                </span>
                <ShowcaseTooltip
                  description="Interaction false"
                  interactive={false}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Interaction false" />
                </ShowcaseTooltip>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 11. Configuration & Features */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Configuration & Features
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Advanced configuration options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* No Tip Arrow */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  No Tip Arrow
                </span>
                <ShowcaseTooltip
                  description="Floating tooltip"
                  showArrow={false}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="No Tip" />
                </ShowcaseTooltip>
              </div>

              {/* Custom Offset */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Offset (10px)
                </span>
                <ShowcaseTooltip
                  description="Offset from trigger"
                  offset={10}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Offset" />
                </ShowcaseTooltip>
              </div>

              {/* No Animation */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  No Animation
                </span>
                <ShowcaseTooltip
                  description="Instant appearance"
                  transition={false}
                  placement="top"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Instant" />
                </ShowcaseTooltip>
              </div>

              {/* Enter Delay */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Delayed (1000ms)
                </span>
                <ShowcaseTooltip
                  description="I took 1 second to appear!"
                  enterDelay={1000}
                  placement="top"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Hover & Wait" />
                </ShowcaseTooltip>
              </div>

              {/* Leave Delay */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Leave Delay (1000ms)
                </span>
                <ShowcaseTooltip
                  description="I linger for 1 second after you leave!"
                  leaveDelay={1000}
                  placement="top"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Hover & Leave" />
                </ShowcaseTooltip>
              </div>

              {/* Max Width */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Max Width (200px)
                </span>
                <ShowcaseTooltip
                  title="Constrained Width"
                  description="This tooltip has a maximum width constraint to control text wrapping."
                  maxWidth={200}
                  placement="top"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Max Width" />
                </ShowcaseTooltip>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 12. Adaptive Dark Mode */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Adaptive Mode
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Automatic styling adjustments for dark mode contexts.{""}
                <b>Turn on dark mode</b> to see the adaptive mode
              </p>
            </div>
            <div className="dark bg-neutral-900 p-10 rounded-xl flex justify-center items-center gap-12 border border-neutral-800 shadow-inner">
              <div className="flex flex-col items-center gap-4">
                <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  Adaptive: Off
                </span>
                <ShowcaseTooltip
                  adaptive={false}
                  description="Standard Light Tooltip"
                  appearance="strong"
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <button className="px-4 py-2 bg-neutral-800 text-neutral-300 border border-neutral-700 rounded hover:bg-neutral-700 transition-colors">
                    Non-Adaptive
                  </button>
                </ShowcaseTooltip>
              </div>

              <div className="flex flex-col items-center gap-4">
                <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  Adaptive: On
                </span>
                <ShowcaseTooltip
                  cTag="default"
                  adaptive={true}
                  prefix={{ type: "icon" }}
                  description="Dark Mode Tooltip"
                  appearance="strong"
                  placement="top"
                >
                  <button className="px-4 py-2 bg-neutral-800 text-white border border-neutral-600 rounded hover:bg-neutral-700 transition-colors">
                    Adaptive
                  </button>
                </ShowcaseTooltip>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 13. Different trigger elements */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Trigger elements
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Different types of trigger elements for the tooltip.
              </p>
            </div>
            <div className="dark bg-neutral-900 p-10 rounded-xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-8 border border-neutral-800 shadow-inner">
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Avatar
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="Click to view profile"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'avatar',
                          icon: { type: 'icon', name: '@placeholder' },
                          size: 'lg'
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Group Avatars
                </span>
                <div className="flex items-center justify-center flex-1">
                  {
                    renderSlot({
                      slot: {
                        type: 'avatar-group',
                        children: GROUP_SAMPLE_AVATARS.slice(0, clampedCount).map((avatar: any, index: any) => (
                          <ShowcaseTooltip
                            key={index}
                            adaptive={false}
                            description="Click to view profile"
                            appearance="strong"
                            placement="top"
                            cTag="default"
                            transition={false}
                          >
                            {
                              renderSlot({
                                slot: {
                                  type: 'avatar',
                                  icon: { type: 'icon', name: '@placeholder' },
                                  size: 'lg'
                                }
                              })
                            }
                          </ShowcaseTooltip>
                        ))
                      }
                    })
                  }
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Badge under Avatar
                </span>
                <div className="flex items-center justify-center flex-1">
                  {
                    renderSlot({
                      slot: {
                        type: 'avatar',
                        icon: { type: 'icon', name: '@placeholder' },
                        size: 'lg',
                        slots: {
                          bottomEnd: <ShowcaseTooltip
                            adaptive={false}
                            description="Online"
                            appearance="strong"
                            placement="top"
                            cTag="default"
                          >
                            {
                              renderSlot({
                                slot: {
                                  type: 'badge-dot',
                                  color: 'success'
                                }
                              })
                            }
                          </ShowcaseTooltip>
                        }
                      }
                    })
                  }
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Link
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="Click here to learn more"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'link',
                          href: '#',
                          children: 'Link'
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Dot Badge
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="Online"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'badge-dot'
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Status Badge
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="Available"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {renderSlot({ slot: { type: 'badge-status-indicator' } })}
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Counter Badge
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="5 new messages"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'badge-counter',
                          counter: 5
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Icon Button
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="5 new messages"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'button',
                          prefix: {
                            type: 'icon',
                            name: 'check'
                          },
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Segmented Button
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="5 new messages"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'button-split',
                          prefix: {
                            type: 'icon',
                            name: 'check'
                          },
                          children: 'Label'
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Switch
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="5 new messages"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'switch',
                          children: 'Label'
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Checkbox
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="5 new messages"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'checkbox',
                          color: 'white',
                          appearance: 'onColor',
                          title: 'Label'
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Radio
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="5 new messages"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                  >
                    {
                      renderSlot({
                        slot: {
                          type: 'radio',
                          color: 'white',
                          appearance: 'onColor',
                          title: 'Label'
                        }
                      })
                    }
                  </ShowcaseTooltip>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-6 h-full">
                <span className="text-neutral-400 text-center text-xs font-medium uppercase tracking-wider">
                  Input
                </span>
                <div className="flex items-center justify-center flex-1">
                  <ShowcaseTooltip
                    adaptive={false}
                    description="5 new messages"
                    appearance="strong"
                    placement="top"
                    cTag="default"
                    trigger="focus"
                  >
                    <input
                      type="text"
                      placeholder="Focus Input"
                      className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 text-center text-sm"
                    />
                  </ShowcaseTooltip>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 13. Triggers & Control */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-1">
                Triggers & State Control
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                Different ways to activate and control the tooltip visibility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Hover Trigger */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Hover Trigger
                </span>
                <ShowcaseTooltip
                  description="Triggered by Hover"
                  trigger="hover"
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Hover (Default)" />
                </ShowcaseTooltip>
              </div>

              {/* Close On Click */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Close On Click
                </span>
                <ShowcaseTooltip
                  description="Triggered by Hover, closes on click"
                  trigger="hover"
                  closeOnClick={true}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Hover & Click to Close" />
                </ShowcaseTooltip>
              </div>

              {/* Click Trigger */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Click Trigger
                </span>
                <ShowcaseTooltip
                  description="Triggered by Click"
                  trigger="click"
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Click Me" />
                </ShowcaseTooltip>
              </div>

              {/* Keep Mounted */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Keep Mounted
                </span>
                <ShowcaseTooltip
                  description="Keeps mounted when closed"
                  keepMounted={false}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="keepMounted=true" />
                </ShowcaseTooltip>
              </div>

              {/* Ignore Escape */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Ignore Escape
                </span>
                <ShowcaseTooltip
                  description="Ignores Escape key"
                  closeOnEscape={false}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="closeOnEscape=false" />
                </ShowcaseTooltip>
              </div>

              {/* Pointer Down */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Pointer Down
                </span>
                <ShowcaseTooltip
                  description="Closes on pointer down"
                  closeOnPointerDown={true}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="closeOnPointerDown=true" />
                </ShowcaseTooltip>
              </div>

              {/* Ignore Scroll */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Ignore Scroll
                </span>
                <ShowcaseTooltip
                  description="Dont closes on scroll"
                  closeOnScroll={false}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                  trigger="click"
                >
                  <TriggerButton label="closeOnScroll=false" />
                </ShowcaseTooltip>
              </div>

              {/* Lazy Mount */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Lazy Mount
                </span>
                <ShowcaseTooltip
                  description="Lazy mounts content"
                  lazyMount={true}
                  keepMounted={false}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="lazyMount=true" />
                </ShowcaseTooltip>
              </div>

              {/* Follow Cursor */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Follow Cursor
                </span>
                <ShowcaseTooltip
                  description="Follows the mouse pointer"
                  followCursor={true}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="followCursor=true" />
                </ShowcaseTooltip>
              </div>

              {/* Focus Trigger */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Focus Trigger
                </span>
              </div>

              {/* Controlled Open */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Controlled Open
                </span>
                <ShowcaseTooltip
                  description="Forced Open Tooltip"
                  open={true}
                  placement="top"
                  prefix={{ type: "icon" }}
                  cTag="default"
                >
                  <TriggerButton label="Controlled (Always Open)" />
                </ShowcaseTooltip>
              </div>

              {/* Default Open */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Default Open
                </span>
                <ShowcaseTooltip
                  description="Open by default"
                  defaultOpen={true}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Uncontrolled (Default Open)" />
                </ShowcaseTooltip>
              </div>

              {/* Disabled */}
              <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
                <span className="text-xs font-semibold uppercase text-neutral-500">
                  Disabled
                </span>
                <ShowcaseTooltip
                  description="You cannot see this"
                  disabled={true}
                  prefix={{ type: "icon" }}
                  placement="top"
                  cTag="default"
                >
                  <TriggerButton label="Disabled Tooltip" />
                </ShowcaseTooltip>
              </div>
            </div>
          </section>
        </LazySection>
      </ShowcaseShell >
    );
}
