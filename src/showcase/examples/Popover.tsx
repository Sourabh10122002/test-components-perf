// @ts-nocheck
// Ported from origin/popover:src/components/Popover/stories/Popover.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/popover:src/components/Popover/stories/Popover.stories.tsx
import React from "react";
import { Popover, PopoverSurface, PopoverTrigger } from "@inventive-ui/components/Popover";
import { useSlotRenderer } from "@inventive-ui/framework/slots";
import { getShowcaseTheme } from "../storybook";

// --- story: Showcase ---
export default function PopoverShowcase() {
  const globals = {};

    const appearances: ("strong" | "soft")[] = ["strong", "soft"];
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
    const radiuses = ["none", "sm", "md", "lg", "lg"] as any;
    const spacings = ["compact", "standard", "spacious"] as any;
    const fonts = ["inter", "arial", "mono"];
    const coreFonts: any = {
      inter: "sans-serif",
      arial: "arial",
      mono: "monospace",
    };

    const renderSlot = useSlotRenderer();

    const TriggerButton = React.forwardRef<HTMLButtonElement, any>(
      ({ label, className = "", state, ...props }, ref) => {
        return renderSlot({
          slot: {
            type: "button",
            variant: "solid",
            className: `min-w-[120px] ${className}`,
            state: state || "neutral",
            children: label,
            ref,
            ...props,
          },
        });
      },
    );
    TriggerButton.displayName = "TriggerButton";

    const theme = getShowcaseTheme(globals);

    return (
      <div
        className=" p-8 font-sans"
        onClickCapture={(e) => {
          // Prevent BEHAVIORs from bubbling if needed
        }}
      >
        {/* Header */}
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <h1 className="dark:text-white text-4xl font-bold text-neutral-900">
            Popover Showcase
          </h1>
          <p className="dark:text-neutral-500 text-lg text-neutral-600">
            Comprehensive visual reference of all popover variants, sizes,
            colors, and configurations.
          </p>
        </div>

        {/* 1. Appearances */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Appearances
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control the visual intensity of the popover.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            {appearances.map((appearance) => (
              <div key={appearance} className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {appearance}
                </span>
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="top"
                  appearance={appearance}
                  header={{
                    title: `${appearance.charAt(0).toUpperCase() + appearance.slice(1)}`,
                    description: "Click to toggle",
                  }}
                  footer={{
                    primaryAction: { label: "Primary" },
                    secondaryAction: { label: "Secondary" },
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton
                      label={
                        appearance.charAt(0).toUpperCase() + appearance.slice(1)
                      }
                    />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Theme Colors */}
        <section className="space-y-6">
          <div className="flex flex-wrap gap-6 items-start border-t border-neutral-200 pt-6 mt-6">
            <div className="w-full mb-2">
              <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
                Theme Colors
              </h2>
              <p className="dark:text-neutral-500 text-sm text-neutral-600">
                A full spectrum of theme colors.
              </p>
            </div>
            {allColors.map((color) => (
              <div key={color} className="flex flex-col gap-3">
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  color={color}
                  trigger="click"
                  placement="top"
                  appearance="strong"
                  header={{
                    title: color.charAt(0).toUpperCase() + color.slice(1),
                    description: `This is a ${color} popover`,
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton
                      label={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
              </div>
            ))}
          </div>
        </section>

        {/* 13. Radius Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Radius Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Different border radius options for the popover.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            {radiuses.map((radius, i) => (
              <div key={radius} className="flex flex-col gap-3">
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="top"
                  header={{
                    title: radius.charAt(0).toUpperCase() + radius.slice(1),
                    description: `Rounded: ${radius}`,
                  }}
                  rounded={radius}
                >
                  <PopoverTrigger>
                    <TriggerButton
                      label={
                        i === radiuses.length - 1
                          ? "Full"
                          : radius.charAt(0).toUpperCase() + radius.slice(1)
                      }
                    />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
              </div>
            ))}
          </div>
        </section>

        {/* 14. Spacing Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Spacing Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Padding and gap configurations.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            {spacings.map((spacing, i) => (
              <div key={spacing} className="flex flex-col gap-3">
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="top"
                  header={{
                    title: spacing.charAt(0).toUpperCase() + spacing.slice(1),
                    description: `Spacing: ${spacing}`,
                  }}
                  spacing={spacing}
                >
                  <PopoverTrigger>
                    <TriggerButton
                      label={spacing.charAt(0).toUpperCase() + spacing.slice(1)}
                    />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
              </div>
            ))}
          </div>
        </section>

        {/* 15. Font Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Font Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Typography family options.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            {fonts.map((font) => (
              <div key={font} className="flex flex-col gap-3">
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="top"
                  header={{
                    title: {
                      children: font.charAt(0).toUpperCase() + font.slice(1),
                      style: { fontFamily: coreFonts[font] },
                      fontFamily: font
                    },
                    description: {
                      children: `Font: ${font}`,
                      fontFamily: font
                    },
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton
                      label={font.charAt(0).toUpperCase() + font.slice(1)}
                    />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Text Formatting Capability */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Text Formatting Capability
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Customize the popover's header and description text styles using
              TextContent objects.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Styled Header
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                appearance="soft"
                width={350}
                header={{
                  title: {
                    children: "Styled Title",
                    size: "lg",
                    weight: "bold",
                    color: "brand",
                  },
                  description: {
                    children:
                      "Styled description with custom properties and italicized text.",
                    size: "base",
                    weight: "medium",
                    italic: true,
                  },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Custom Text Formatting" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Large Title
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                appearance="strong"
                header={{
                  title: {
                    children: "Important Announcement",
                    size: "xl",
                    weight: "bold",
                  },
                  description: "This uses the new text sizing format.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Large Format" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 4. Slot Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Slot Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Customize the popover's header leading slot with diverse options.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <Popover {...theme.componentProps} {...theme.layoutProps}
              cTag="primary"
              trigger="click"
              placement="top"
              header={{
                title: "Security Settings",
                description: "Manage two-factor authentication and active sessions",
                prefix: { type: "icon" },
              }}
              footer={{
                primaryAction: { label: "Save Changes" },
                secondaryAction: { label: "Cancel" },
              }}
            >
              <PopoverTrigger>
                <TriggerButton label="Security Settings" />
              </PopoverTrigger>
              <PopoverSurface></PopoverSurface>
            </Popover>

            <Popover {...theme.componentProps} {...theme.layoutProps}
              cTag="primary"
              trigger="click"
              placement="top"
              header={{
                title: "Regional Compliance",
                description: "Data retention policies for EU data centers",
                prefix: { type: "flag", size: "md" },
              }}
              footer={{
                primaryAction: { label: "Update Region" },
                secondaryAction: { label: "Learn More" },
              }}
            >
              <PopoverTrigger>
                <TriggerButton label="Region Settings" />
              </PopoverTrigger>
              <PopoverSurface></PopoverSurface>
            </Popover>

            <Popover {...theme.componentProps} {...theme.layoutProps}
              cTag="primary"
              trigger="click"
              placement="top"
              header={{
                title: "Team Kudos",
                description: "Send appreciation to teammates on completing the sprint",
                prefix: { type: "emoji" },
              }}
              footer={{
                primaryAction: { label: "Send Feedback" },
                secondaryAction: { label: "Dismiss" },
              }}
            >
              <PopoverTrigger>
                <TriggerButton label="Send Kudos" />
              </PopoverTrigger>
              <PopoverSurface></PopoverSurface>
            </Popover>
          </div>
        </section>

        {/* 5. Positioning */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Placement (All 12)
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Directional placement relative to the trigger element.
            </p>
          </div>
          <div className="p-16 bg-neutral-100 rounded-lg flex flex-col items-center gap-12 overflow-x-auto">
            {/* Top Row */}
            <div className="flex justify-center gap-8 w-full max-w-4xl">
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top-start"
                header={{
                  title: "Top Start",
                  description: "This is a top start popover",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Top Start" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                header={{ title: "Top", description: "This is a top popover" }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Top" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top-end"
                header={{
                  title: "Top End",
                  description: "This is a top end popover",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Top End" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            {/* Middle Section */}
            <div className="flex justify-between items-center w-full max-w-4xl">
              {/* Left Side */}
              <div className="flex flex-col gap-8 w-30">
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="start-top"
                  header={{
                    title: "start top",
                    description: "This is a start top popover",
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton label="start top" />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="start"
                  header={{
                    title: "Left",
                    description: "This is a left popover",
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton label="Left" />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="start-bottom"
                  header={{
                    title: "Left End",
                    description: "This is a left end popover",
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton label="Left End" />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
              </div>

              {/* Center Box */}
              <div className="flex justify-center items-center flex-1 mx-16 p-8 border-2 border-dashed border-neutral-300 rounded-md bg-neutral-50 min-h-62.5">
                <span className="text-neutral-400 font-medium text-center">
                  Center Content Area
                </span>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-8 w-30">
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="end-top"
                  header={{
                    title: "End Top",
                    description: "This is a End Top popover",
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton label="End Top" />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="end"
                  header={{
                    title: "Right",
                    description: "This is a right popover",
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton label="Right" />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
                <Popover {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  trigger="click"
                  placement="end-bottom"
                  header={{
                    title: "end bottom",
                    description: "This is a end bottom popover",
                  }}
                >
                  <PopoverTrigger>
                    <TriggerButton label="end bottom" />
                  </PopoverTrigger>
                  <PopoverSurface></PopoverSurface>
                </Popover>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center gap-8 w-full max-w-4xl">
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="bottom-start"
                header={{
                  title: "Bottom Start",
                  description: "This is a bottom start popover",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Bottom Start" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="bottom"
                header={{
                  title: "Bottom",
                  description: "This is a bottom popover",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Bottom" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="bottom-end"
                header={{
                  title: "Bottom End",
                  description: "This is a bottom end popover",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Bottom End" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 6. Anatomy & Configurations */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Anatomy & Footer Variations
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Different structural layouts for various use cases.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            {/* Simple Text */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Simple Content
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps} cTag="primary" trigger="click" dismissible={false}>
                <PopoverTrigger>
                  <TriggerButton label="Simple" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm p-2">
                    Simple info tooltip style content.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Custom content
              </span>
              <Popover
                cTag="primary"
                trigger="click"
                placement="top"
                color="white"
              >
                <PopoverTrigger>
                  <TriggerButton label="Custom content" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="flex flex-col">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz_tHL3uKnJKE-UBsjn_5eEPaim48W7QhPdq6jntpy_OVEX0DoL3kN9c&s=10" className="h-30 bg-orange-500 w-58 rounded-none" />
                    <div className="p-4">
                      <span className="text-black dark:text-white font-semibold">Search your chat history</span>
                      <p className="w-50 text-black dark:text-white mb-0 mt-1">
                        Log in to save conversations, search past answers, and pick up where you left off.
                      </p>
                      <div className="flex gap-2 mt-3">
                        {renderSlot({ slot: { type: 'button', variant: 'solid', appearance: 'onColor', children: 'Log in', size: 'sm', color: 'white' } })}
                        {renderSlot({ slot: { type: 'button', variant: 'outline', appearance: 'onColor', children: 'Sign up for free', size: 'sm', color: 'white' } })}
                      </div>
                    </div>
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            {/* Header Only */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Header Only
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Information",
                  description: "Helpful description text here.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Header" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            {/* With Link */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                With Link
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{ title: "Information" }}
                footer={{
                  link: { text: "Learn more", href: "#" },
                  primaryAction: { label: "Got it" },
                }}
                width={250}
              >
                <PopoverTrigger>
                  <TriggerButton label="Link Footer" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                With Actions
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{ title: "Success" }}
                footer={{
                  primaryAction: { label: "Confirm" },
                  secondaryAction: { label: "Close" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Actions" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                With One Action
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Success",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo quod reiciendis quia non tempore, voluptate minus vitae deleniti nemo?",
                }}
                footer={{
                  primaryAction: { label: "Proceed", fullWidth: true },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="One Action" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 8. Custom Sizing */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Custom Sizing
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control the width, height, and maximum dimensions of the popover.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Fixed Width (350px)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                width={350}
                header={{
                  title: "Wide Popover",
                  description: "This popover has a fixed width of 350px.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Wide" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Max Width (200px)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                maxWidth={200}
                header={{
                  title: "Constrained",
                  description:
                    "This long text will automatically wrap because of the maxWidth constraint.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Constrained" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Custom Height (250px)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                height={250}
                header={{
                  title: "Tall Popover",
                  description: "This popover has a fixed height of 250px.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Tall" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 9. Configuration & Features */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
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
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                showArrow={false}
                placement="top"
                header={{ title: "No Tip", description: "No arrow tip." }}
              >
                <PopoverTrigger>
                  <TriggerButton label="No Tip" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            {/* Custom Offset */}
            <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
              <span className="text-xs font-semibold uppercase text-neutral-500">
                Offset (20px)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                offset={20}
                placement="top"
                header={{
                  title: "Offset",
                  description: "20px offset from trigger.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Offset" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            {/* No Animation */}
            <div className="flex flex-col items-center gap-3 p-4 border border-neutral-200 rounded-lg bg-white">
              <span className="text-xs font-semibold uppercase text-neutral-500">
                No Animation
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                transition={false}
                placement="top"
                header={{
                  title: "Instant",
                  description: "No animation effect.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Instant" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 11. Triggers & Control */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Triggers & State Control
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Different ways to activate and control the popover visibility.
            </p>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                header={{
                  title: "Clicked",
                  description: "Triggered by click event.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Click (Default)" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="focus"
                placement="top"
                header={{
                  title: "Focused",
                  description: "Triggered by input focus.",
                }}
              >
                <PopoverTrigger>
                  <input
                    type="text"
                    placeholder="Focus Input"
                    className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 text-center text-sm box-border"
                  />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                defaultOpen
                placement="top"
                header={{
                  title: "Controlled",
                  description: "This popover is opened by default.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Default Open" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                disabled
                placement="top"
                header={{
                  title: "Disabled",
                  description: "You cannot open this.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Disabled" disabled />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary "
                closeOnInteractOutside={false}
                placement="top"
                header={{
                  title: "Persistent",
                  description:
                    "Clicking outside won't close me. Use the close button or ESC key.",
                }}
                footer={{ secondaryAction: { label: "Close" } }}
              >
                <PopoverTrigger>
                  <TriggerButton label="closeOnInteractOutside={false}" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 12. Header & Footer Colors */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Header & Footer Colors
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Customize the background colors of the header and footer
              independently.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Colored Header
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                header={{
                  title: "Brand Header",
                  description: "Header uses brand color",
                  color: "purple",
                }}
                footer={{
                  primaryAction: { label: "Confirm" },
                  secondaryAction: { label: "Cancel" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Colored Header" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Colored Footer
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                placement="top"
                header={{
                  title: "Brand Header",
                  description: "Header uses brand color"
                }}
                footer={{
                  primaryAction: { label: "Confirm" },
                  secondaryAction: { label: "Cancel" },
                  color: "info",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Colored Footer" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 13. Auto Focus Behavior */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Auto Focus Behavior
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control whether focus is automatically set on the first focusable
              element when opened.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Auto Focus (Default: True)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                autoFocus={true}
                header={{
                  title: "Auto Focus Enabled",
                  description:
                    "The 'Confirm' button should be focused automatically.",
                }}
                footer={{
                  primaryAction: { label: "Confirm" },
                  secondaryAction: { label: "Cancel" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Auto Focus: True" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                No Auto Focus
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                autoFocus={false}
                header={{
                  title: "Auto Focus Disabled",
                  description: "Focus remains on the trigger button.",
                }}
                footer={{
                  primaryAction: { label: "Confirm" },
                  secondaryAction: { label: "Cancel" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Auto Focus: False" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 14. Lazy Mount Behavior */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Mounting Behavior
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control when the popover is mounted into the DOM using lazyMount
              and unmountOnExit.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Unmount on Exit (Default)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                unmountOnExit={true}
                header={{
                  title: "Unmount on Exit",
                  description:
                    "This popover is completely removed from the DOM when closed.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Unmount on Exit" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Lazy Mount
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                unmountOnExit={false}
                lazyMount={true}
                header={{
                  title: "Lazy Mount",
                  description:
                    "This popover delays mounting until first open, then stays in the DOM.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Lazy Mount: True" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Eager Mount
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                unmountOnExit={false}
                lazyMount={false}
                header={{
                  title: "Eager Mount",
                  description:
                    "This popover is mounted immediately on page load, but hidden.",
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Lazy Mount: False" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>

        {/* 15. Modal Behavior */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Modal Behavior
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control whether the popover acts as a modal dialog, trapping
              focus, blocking scroll, and disabling outside interaction.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Modal (Default)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                modal={true}
                header={{
                  title: "Modal Popover",
                  description:
                    "Blocks scrolling and outside interaction. Traps focus inside.",
                }}
                footer={{
                  primaryAction: { label: "Confirm" },
                  secondaryAction: { label: "Cancel" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Modal: True" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Non-Modal
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                modal={false}
                header={{
                  title: "Non-Modal Popover",
                  description:
                    "Does not block scrolling. Does not trap focus. Outside elements remain interactive.",
                }}
                footer={{
                  primaryAction: { label: "Confirm" },
                  secondaryAction: { label: "Cancel" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Modal: False" />
                </PopoverTrigger>
                <PopoverSurface></PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>
        {/* 16. Footer Layouts */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Footer Layouts
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Showcasing the new flexible footer architecture with various alignments, shapes, and button combinations.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Double Button (Start)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Discard Unsaved Draft?",
                  description: "Your changes will be lost permanently.",
                }}
                footer={{
                  align: "start",
                  primaryAction: { label: "Discard" },
                  secondaryAction: { label: "Keep Editing" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Align: Start" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    You have unsaved changes in this post. Discarding will permanently remove all text and media attachments.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Double Button (Center)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Update Profile Photo",
                  description: "Upload a new photo or remove the current one.",
                }}
                footer={{
                  align: "center",
                  primaryAction: { label: "Upload New" },
                  secondaryAction: { label: "Remove Photo" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Align: Center" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    Recommended size is 400x400 pixels. Supported formats include JPG, PNG, and GIF up to 5MB.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Double Button (End)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Delete Project",
                  description: "This action cannot be reversed.",
                }}
                footer={{
                  align: "end",
                  primaryAction: { label: "Delete" },
                  secondaryAction: { label: "Cancel" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Align: End (Default)" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    Are you sure you want to permanently delete the repository 'acme-analytics' and all of its history?
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Double Button (Justify Start)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Reset API Key",
                  description: "Generate a new access token for your app.",
                }}
                footer={{
                  align: "justify-start",
                  primaryAction: { label: "Revoke Key" },
                  secondaryAction: { label: "Cancel", variant: 'ghost' },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Align: Justify Start" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    Existing webhooks and API clients using your current token will stop working immediately upon revocation.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Double Button (Justify End)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Upgrade to Pro Plan",
                  description: "Unlock premium features and higher rate limits.",
                }}
                footer={{
                  align: "justify-end",
                  primaryAction: { label: "Upgrade Now" },
                  secondaryAction: { label: "Maybe Later", variant: "ghost" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Align: Justify End" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    Get unlimited AI requests, dedicated support, and custom domain configuration for $19/month.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Wide Buttons
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Session Expired",
                  description: "Please re-authenticate to continue.",
                }}
                footer={{
                  primaryAction: { label: "Log In", fullWidth: true },
                  secondaryAction: { label: "Switch Account", fullWidth: true },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Shape: Wide" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    Your session expired due to 30 minutes of inactivity. Please log back in to save your current work.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Link & Buttons
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Cookie Preferences",
                  description: "Choose which cookies you allow us to use.",
                }}
                footer={{
                  link: { text: "Privacy Policy", href: "#" },
                  primaryAction: { label: "Accept All" },
                  secondaryAction: { label: "Reject Optional" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Link Slot" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white w-[400px]">
                    We use cookies to personalize content, analyze server performance, and provide social media features.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Stacked Layout (Col)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                header={{
                  title: "Turn On Push Notifications",
                  description: "Never miss important updates from your team.",
                }}
                footer={{
                  arrangement: "col",
                  link: { text: "Learn more", href: "#" },
                  primaryAction: { label: "Enable Notifications", fullWidth: true },
                  secondaryAction: { label: "Skip for Now", fullWidth: true },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Arrangement: Col" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    Get instant alerts in your browser when team members mention you in comments or assign new tasks.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

          </div>
        </section>

        {/* 17. Component Alignment */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Header Alignment
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Configure component-level header text alignment using the align prop.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Align Start (Default)
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                align="start"
                header={{
                  title: "Header Alignment",
                  description: "Header text is aligned to start",
                }}
                footer={{
                  primaryAction: { label: "Button" },
                  secondaryAction: { label: "Button" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Align: Start" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    This layout aligns the header title and description text to the start.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Align Center
              </span>
              <Popover {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                trigger="click"
                align="center"
                header={{
                  title: "Header Alignment",
                  description: "Header text is centered",
                }}
                footer={{
                  primaryAction: { label: "Button" },
                  secondaryAction: { label: "Button" },
                }}
              >
                <PopoverTrigger>
                  <TriggerButton label="Align: Center" />
                </PopoverTrigger>
                <PopoverSurface>
                  <div className="text-sm text-white  max-w-[280px]">
                    This layout centers the header title and description text.
                  </div>
                </PopoverSurface>
              </Popover>
            </div>
          </div>
        </section>
      </div>
    );
  
}
