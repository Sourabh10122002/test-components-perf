// Showcase ported from origin/accordion:src/components/Accordion/stories/Accordion.stories.tsx
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@inventive-ui/components/Accordion";
import {
  LazySection,
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";

// --- story: Showcase ---
export default function AccordionShowcase() {
  const globals: Record<string, unknown> = {};

    const theme = getShowcaseTheme(globals);
    const variants = [
      "solid",
      "solid-outline",
      "outline",
      "underline",
      "solid-underline",
      "ghost",
    ] as const;

    const [expandAll, setExpandAll] = React.useState(false);

    const sizes = ["xs", "sm", "base", "lg", "xl"] as const;
    const colors = ["success", "warning", "danger", "info"];
    const radiuses = ["none", "sm", "md", "lg", "full"];
    const spacings = ["compact", "standard", "spacious"] as const;
    const fonts = ["inter", "arial", "mono"];
    const coreFonts: Record<string, string> = {
      inter: "sans-serif",
      arial: "arial",
      mono: "monospace",
    };

    // Helper content for panels
    const DefaultContent = () => (
      <p
        className="dark:text-neutral-400 text-neutral-600 text-sm switcher-relaxed"
        style={{ margin: 0, font: "inherit" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    );

    return (
      <ShowcaseShell className={SHOWCASE_CONTAINER_CLASS} globals={globals}>
        {/* Header */}
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <h1 className="text-4xl dark:text-neutral-100 font-extrabold tracking-tight text-neutral-900">
            Accordion Showcase
          </h1>
          <p className="dark:text-neutral-4  00 text-lg text-neutral-600">
            A comprehensive visual reference for all Accordion variants, colors,
            and behaviors.
          </p>
        </div>

        {/* 1. Variants */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Variants
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Available visual styles for different contexts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {variants.map((variant) => (
                <div key={variant} className="space-y-2 flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                    {variant.replace("+", " + ")}
                  </span>
                  <Accordion
                    {...(theme.componentProps as any)}
                    cTag="primary"
                    variant={variant as any}
                    size="sm"
                    hoverOn="container"
                    {...(variant === "ghost"
                      ? { multiple: true }
                      : { multiple: false })}
                  >
                    <AccordionItem id="1">
                      <AccordionHeader id="1" title="Title" />
                      <AccordionPanel id="1">
                        <DefaultContent />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem id="2">
                      <AccordionHeader id="2" title="Title" />
                      <AccordionPanel id="2">
                        <DefaultContent />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 2. Header Styles */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Header Styles
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Choose between solid and outline header appearances.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  solid (Default)
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  headerStyle="solid"
                  variant="solid"
                  size="sm"
                  multiple={false}
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Title"
                      headerStyle="solid"
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  outline
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  headerStyle="outline"
                  variant="solid"
                  size="sm"
                  multiple={false}
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Title"
                      headerStyle="outline"
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 3. Hover Interaction */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Hover Interaction
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Control trigger area for hover effects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  Hover On Container
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  hoverOn="container"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Container Hover" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  Hover On Header
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  hoverOn="header"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Header Hover" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 4. Size Variants */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Size Variants
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Controls padding and font size scales.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sizes.map((size) => (
                <div key={size} className="space-y-2 flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                    Size: {size.toUpperCase()}
                  </span>
                  <Accordion
                    {...(theme.componentProps as any)}
                    cTag="primary"
                    variant="solid"
                    size={size}
                    hoverOn="container"
                  >
                    <AccordionItem id="1">
                      <AccordionHeader
                        id="1"
                        title={`Accordion ${size.toUpperCase()}`}
                      />
                      <AccordionPanel id="1">
                        <p
                          className="dark:text-neutral-400 text-neutral-600 switcher-relaxed"
                          style={{ margin: 0, font: "inherit" }}
                        >
                          Content text size adjusts automatically with the
                          container size.
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 5. Enable Gap between Accordion Groups */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Design Sets
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                When gap is enabled then spacing between items are applied
                otherwise its more compact/connected.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  gap enabled
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  hoverOn="container"
                  gap={8}
                  multiple={false}
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Item One" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="Item Two" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  gap disabled
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  gap={0}
                  hoverOn="container"
                  multiple={false}
                  variant="solid-outline"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Item One" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="Item Two" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="3">
                    <AccordionHeader id="3" title="Item Three" />
                    <AccordionPanel id="3">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Group Header */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Nested Accordions
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Use an Accordion inside an AccordionPanel to create nested
                structures for organizing hierarchical content.
              </p>
            </div>
            <div>
              <div className="flex flex-col">
                <Accordion
                  {...(theme.componentProps as any)}
                  multiple
                  defaultValue={["item-1"]}
                >
                  <AccordionItem id="item-1">
                    <AccordionHeader
                      id="item-1"
                      title="Getting started"
                      switcher={{ placement: "start" }}
                      suffix={{
                        type: "inline-description",
                        label: "3 questions",
                      }}
                    />
                    <AccordionPanel id="item-1">
                      <Accordion
                        multiple
                        defaultValue={["inner-1"]}
                        variant="underline"
                      >
                        <AccordionItem id="inner-1">
                          <AccordionHeader
                            id="inner-1"
                            title="How do I create an account?"
                            switcher={{ placement: "start" }}
                          />
                          <AccordionPanel id="inner-1">
                            <p className="m-0 text-neutral-500 dark:text-neutral-400">
                              Click Sign Up in the header, pick email, Google,
                              or GitHub authentication, and complete the
                              registration flow. Email signups receive a
                              verification link. Once verified you have
                              immediate access to every free component.
                            </p>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem id="inner-2">
                          <AccordionHeader
                            id="inner-2"
                            title="What are the system requirements?"
                            switcher={{ placement: "start" }}
                          />
                          <AccordionPanel id="inner-2">
                            <p className="m-0 text-neutral-500 dark:text-neutral-400">
                              Any modern browser will work.
                            </p>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem id="inner-3">
                          <AccordionHeader
                            id="inner-3"
                            title="How do I install my first component?"
                            switcher={{ placement: "start" }}
                          />
                          <AccordionPanel id="inner-3">
                            <p className="m-0 text-neutral-500 dark:text-neutral-400">
                              Use our CLI to install your first component.
                            </p>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem id="item-2">
                    <AccordionHeader
                      id="item-2"
                      title="Billing & subscription"
                      switcher={{ placement: "start" }}
                      suffix={{
                        type: "inline-description",
                        label: "3 questions",
                      }}
                    />
                    <AccordionPanel id="item-2">
                      <p className="m-0 text-neutral-500 dark:text-neutral-400">
                        Billing details.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem id="item-3">
                    <AccordionHeader
                      id="item-3"
                      title="Security & privacy"
                      switcher={{ placement: "start" }}
                      suffix={{
                        type: "inline-description",
                        label: "3 questions",
                      }}
                    />
                    <AccordionPanel id="item-3">
                      <p className="m-0 text-neutral-500 dark:text-neutral-400">
                        Security details.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 6. Color Palette */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Semantic Colors
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Apply semantic meaning via the color prop.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color) => (
                <div key={color} className="space-y-2 flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                    {color}
                  </span>
                  <Accordion
                    {...(theme.componentProps as any)}
                    cTag="primary"
                    color={color}
                    variant="solid"
                    size="sm"
                    hoverOn="container"
                  >
                    <AccordionItem id="1">
                      <AccordionHeader
                        id="1"
                        title={`${color.charAt(0).toUpperCase() + color.slice(1)} Item`}
                      />
                      <AccordionPanel id="1">
                        <DefaultContent />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* Slot Options */}
        <LazySection>
          <section
            className="space-y-6 grow-1 cols-2 shrink-1 basis-full"
            style={{ gridColumn: "-1 / 1" }}
          >
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Slot Placements
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Customize the accordion's leading and trailing slots with
                diverse options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Start
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Start"
                      prefix={{ type: "icon" }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  End
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="End"
                      prefix={{ type: "none" }}
                      suffix={{
                        type: "badge-dot",
                        color: "success",
                        size: "lg",
                        content: "live",
                      }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Middle
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Middle"
                      infix={{
                        type: "badge-label",
                        label: "New",
                        size: "xs",
                        color: "neutral",
                      }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Slot Options */}
        <LazySection>
          <section
            className="space-y-6 grow-1 cols-2 shrink-1 basis-full"
            style={{ gridColumn: "-1 / 1" }}
          >
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Slot Options
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Customize the accordion's leading and trailing slots with
                diverse options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Icon
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Deployment Pipelines"
                      prefix={{ type: "icon" }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Flag
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="India (APAC Region)"
                      prefix={{ type: "flag" }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Emoji
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Team Celebrations & Announcements"
                      prefix={{ type: "emoji" }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Avatar
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Alex Morgan (Account Owner)"
                      prefix={{
                        type: "avatar",
                      }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Logo
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Apple Pay Integration"
                      prefix={{ type: "logo" }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Color Logo
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Google Workspace Settings"
                      prefix={{ type: "color-logo" }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Badge Dot
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Unread Team Messages"
                      suffix={{
                        type: "badge-dot",
                        size: "lg",
                        variant: "solid",
                      }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Status indicator
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Production Server Status"
                      suffix={{
                        type: "badge-status-indicator",
                        appearance: "strong",
                        name: "online",
                        status: { online: { label: "online", icon: "check" } },
                      }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Counter Badge
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Pending Pull Requests"
                      suffix={{ type: "badge-counter", counter: 5, max: 99 }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Button
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="With Button" suffix={{ type: "button", size: 'sm', children: 'Button' }} />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Kbd
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Open Command Palette"
                      suffix={{ type: "kbd", keys: "command", size: 'sm' }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Badge with text
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="AI Assistant Workflows"
                      suffix={{
                        type: "badge-label",
                        label: "New",
                        size: "xs",
                        color: "neutral",
                      }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Group Header */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Group Header
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Provide a header for the entire accordion group.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-neutral-200 shadow-inner gap-8">
              <div className="flex items-center justify-between pb-2 mb-4 border-b border-neutral-200 dark:border-neutral-800">
                <h3 className="text-md font-semibold text-neutral-900 dark:text-neutral-100 m-0">
                  Frequently Asked Questions
                </h3>
                <span className="text-sm text-neutral-500">3 items</span>
              </div>
              <div className="space-y-2 flex flex-col gap-3">
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="What is the group header?" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="How do I use it?" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="3">
                    <AccordionHeader
                      id="3"
                      title="Can it contain custom elements?"
                    />
                    <AccordionPanel id="3">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Text Overflow */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Text Overflow
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Control how long titles and descriptions wrap or truncate within the accordion header.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["wrap", "line-clamp-1", "line-clamp-2"].map((overflow) => (
                <div key={overflow} className="space-y-2 flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                    {overflow}
                  </span>
                  <Accordion
                    {...(theme.componentProps as any)}
                    cTag="primary"
                    variant="solid"
                    size="sm"
                  >
                    <AccordionItem id="1">
                      <AccordionHeader
                        id="1"
                        title={{
                          text: `Overflow: ${overflow}. This is a very long title intended to demonstrate the text overflow behavior in the accordion header.`,
                          overflow: overflow as any,
                        }}
                        description={{
                          text: "This is an equally long description that serves the exact same purpose of showing how text can either wrap to multiple lines naturally or truncate cleanly with an ellipsis.",
                          overflow: overflow as any,
                        }}
                      />
                      <AccordionPanel id="1">
                        <DefaultContent />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 7. Features & Configurations */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Features & Configurations
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Advanced functionality like multiple selection, icons, and
                disabled colors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Multiple Selection */}
              <div className="p-4 border border-neutral-200 col-span-2 w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                  <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                    Multiple expand
                  </h3>
                  <Accordion
                    {...(theme.componentProps as any)}
                    multiple={true}
                    variant="solid"
                    size="sm"
                  >
                    <AccordionItem id="1">
                      <AccordionHeader id="1" title="Item 1" />
                      <AccordionPanel id="1">
                        I can remain open...
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem id="2">
                      <AccordionHeader id="2" title="Item 2" />
                      <AccordionPanel id="2">
                        ...while I am also open!
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="">
                  <h3 className="font-semibold dark:text-neutral-100 text-neutral-900 w-1/2">
                    Single expand
                  </h3>
                  <Accordion
                    {...(theme.componentProps as any)}
                    variant="solid"
                    size="sm"
                  >
                    <AccordionItem id="1">
                      <AccordionHeader id="1" title="Item 1" />
                      <AccordionPanel id="1">
                        I can remain open...
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem id="2">
                      <AccordionHeader id="2" title="Item 2" />
                      <AccordionPanel id="2">
                        ...while I am also open!
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              {/* switcher Position Start */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Expand switcher Positions
                </h3>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  switcher={{ placement: "end" }}
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Switcher at End" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  switcher={{ placement: "start" }}
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Switcher at Start" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Without Switcher
                </h3>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  switcher={false}
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Without switcher" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Custom switchers */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Custom switchers
                </h3>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Text switcher"
                      switcher={{
                        position: "end",
                        type: "button",
                      }}
                    />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader
                      id="2"
                      title="Custom Icon"
                      switcher={{
                        expandIcon: "add",
                        collapseIcon: "remove",
                      }}
                    />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Disabled State */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Disabled State
                </h3>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  disabled={true}
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title={"Disabled Group"} />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="Cannot Click Me" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 9. Custom Content */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Description
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Description within Accordion header
              </p>
            </div>
            <div className="p-8 rounded-xl border border-neutral-200 shadow-inner gap-8">
              <div className="space-y-2">
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader
                      id="1"
                      title="Title"
                      description="This is a description"
                    />
                    <AccordionPanel id="1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis consequuntur ipsa excepturi totam laboriosam
                      ipsam eveniet ea accusantium, repellat accusamus, officia,
                      consectetur dolor unde. Corporis nobis maiores voluptas
                      debitis facere.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 9. Custom Content */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Custom Content
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Custom content within Accordion panels.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-neutral-200 shadow-inner gap-8">
              <div className="space-y-2">
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Title" />
                    <AccordionPanel id="1">
                      <div className="flex w-full gap-4">
                        <img
                          className="h-24"
                          src="https://img.pikbest.com/wp/202405/drapery-abstract-background-navy-blue-and-bronze-fabric-creates-beautiful-3d-artwork_9851644.jpg!sw800"
                          alt="Placeholder"
                        />
                        <p className="dark:text-neutral-400 mt-0 text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies{" "}
                          <a href="www.google.com">lacinia</a>, nisl nisl
                          aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                          Sed euismod, nisl nec ultricies lacinia, nisl nisl
                          aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies{" "}
                          <a href="www.google.com">lacinia</a>, nisl nisl
                          aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                          Sed euismod, nisl nec ultricies lacinia, nisl nisl
                          aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                        </p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 10. Animations & Transitions */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Animations & Transitions
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Customize or disable the open/close transition durations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  Default (300ms)
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Default Transition" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  Slow (1000ms)
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  transition={1000}
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Slow Transition" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="space-y-2 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                  Disabled ("none")
                </span>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  transition="none"
                  variant="solid"
                  size="sm"
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Instant Toggle" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 11. Radius Options */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Radius Options
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Different border radius options for the accordion.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {radiuses.map((radius: any) => (
                <div key={radius} className="space-y-2 flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                    Rounded: {radius}
                  </span>
                  <Accordion
                    cTag="primary"
                    variant="solid"
                    size="sm"
                    rounded={radius}
                  >
                    <AccordionItem id="1">
                      <AccordionHeader
                        id="1"
                        title={`Rounded: ${radius.charAt(0).toUpperCase() + radius.slice(1)}`}
                      />
                      <AccordionPanel id="1">
                        <DefaultContent />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 12. Spacing Options */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Spacing Options
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Padding and gap configurations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spacings.map((spacing) => (
                <div key={spacing} className="space-y-2 flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                    Spacing: {spacing}
                  </span>
                  <Accordion
                    {...(theme.componentProps as any)}
                    cTag="primary"
                    variant="solid"
                    size="sm"
                    spacing={spacing}
                  >
                    <AccordionItem id="1">
                      <AccordionHeader
                        id="1"
                        title={`Spacing: ${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`}
                      />
                      <AccordionPanel id="1">
                        <DefaultContent />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 13. Font Options */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Font Options
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Typography family options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fonts.map((font) => (
                <div key={font} className="space-y-2 flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500 tracking-wider">
                    Font: {font}
                  </span>
                  <div style={{ fontFamily: coreFonts[font] }}>
                    <Accordion
                      {...(theme.componentProps as any)}
                      cTag="primary"
                      variant="solid"
                      size="sm"
                      font={font}
                    >
                      <AccordionItem id="1">
                        <AccordionHeader
                          id="1"
                          title={`Font: ${font.charAt(0).toUpperCase() + font.slice(1)}`}
                        />
                        <AccordionPanel id="1">
                          <p
                            className="dark:text-neutral-400 text-neutral-600 switcher-relaxed text-sm"
                            style={{ margin: 0, font: "inherit" }}
                          >
                            This accordion uses the {font} font.
                          </p>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* Expand All */}
        <LazySection>
          <section className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                  Expand All
                </h2>
                <p className="dark:text-neutral-400 text-sm text-neutral-600">
                  Programmatically force all accordion items to expand at once using the <code className="px-1 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">expandAll</code> prop.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="expand-all-toggle"
                  checked={expandAll}
                  onChange={(e) => setExpandAll(e.target.checked)}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="expand-all-toggle" className="text-sm font-medium cursor-pointer dark:text-neutral-200 whitespace-nowrap">
                  Toggle expandAll
                </label>
              </div>
            </div>
            <div>
              <div className="space-y-2 flex flex-col gap-3">
                <Accordion
                  {...(theme.componentProps as any)}
                  multiple
                  expandAll={expandAll}
                >
                  <AccordionItem id="expand-1">
                    <AccordionHeader
                      id="expand-1"
                      title="Item 1"
                      switcher={{ placement: "end" }}
                    />
                    <AccordionPanel id="expand-1">
                      <p className="m-0 text-neutral-500 dark:text-neutral-400">Content for Item 1</p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem id="expand-2">
                    <AccordionHeader
                      id="expand-2"
                      title="Item 2"
                      switcher={{ placement: "end" }}
                    />
                    <AccordionPanel id="expand-2">
                      <p className="m-0 text-neutral-500 dark:text-neutral-400">Content for Item 2</p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem id="expand-3">
                    <AccordionHeader
                      id="expand-3"
                      title="Item 3"
                      switcher={{ placement: "end" }}
                    />
                    <AccordionPanel id="expand-3">
                      <p className="m-0 text-neutral-500 dark:text-neutral-400">Content for Item 3</p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 14. Expand Style */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="dark:text-neutral-100 text-2xl font-bold text-neutral-900 mb-1">
                Expand Style
              </h2>
              <p className="dark:text-neutral-400 text-sm text-neutral-600">
                Override variant and/or color when an item is expanded using the
                expandStyle prop.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Variant override */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Variant Override
                </h3>
                <p className="dark:text-neutral-400 text-xs text-neutral-500">
                  Base: <code>outline</code> → Expanded: <code>solid</code>
                </p>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="outline"
                  size="sm"
                  expandStyle={{ variant: "solid" }}
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Title" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="Title" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Color override */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Color Override
                </h3>
                <p className="dark:text-neutral-400 text-xs text-neutral-500">
                  Base: <code>neutral</code> → Expanded: <code>brand</code>
                </p>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="solid"
                  size="sm"
                  expandStyle={{ color: "brand" }}
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Title" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="Title" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Both variant + color override */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Variant + Color Override
                </h3>
                <p className="dark:text-neutral-400 text-xs text-neutral-500">
                  Base: <code>outline / neutral</code> → Expanded:{" "}
                  <code>solid / success</code>
                </p>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="outline"
                  size="sm"
                  expandStyle={{ variant: "solid", color: "success" }}
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Title" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="Title" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Multiple expand with expandStyle */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-4">
                <h3 className="font-semibold dark:text-neutral-100 text-neutral-900">
                  Multiple + Expand Style
                </h3>
                <p className="dark:text-neutral-400 text-xs text-neutral-500">
                  Multiple mode with variant override on expand.
                </p>
                <Accordion
                  {...(theme.componentProps as any)}
                  cTag="primary"
                  variant="outline"
                  size="sm"
                  multiple={true}
                  expandStyle={{ variant: "solid", color: "indigo" }}
                >
                  <AccordionItem id="1">
                    <AccordionHeader id="1" title="Title" />
                    <AccordionPanel id="1">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="2">
                    <AccordionHeader id="2" title="Title" />
                    <AccordionPanel id="2">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem id="3">
                    <AccordionHeader id="3" title="Title" />
                    <AccordionPanel id="3">
                      <DefaultContent />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </LazySection>
      </ShowcaseShell>
    );
  
}
