// @ts-nocheck
// Ported from origin/alert:src/components/Alert/stories/Alert.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/alert:src/components/Alert/stories/Alert.stories.tsx
import { Alert } from "@inventive-ui/components/Alert";
import { OrderedList, ListItem } from "@inventive-ui/components/List";
import {
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_TITLE_CLASS,
  getShowcaseTheme,
  ShowcaseShell,
  LazySection,
} from "../storybook";
import { ShowcaseTable } from "../story-helpers/Alert/showcase-layout";
import type { AlertAppearance } from "@inventive-ui/components/Alert";
import type { AlertVariant } from "../story-helpers/Alert/types";

// --- story: Showcase ---
export default function AlertShowcase() {
  const globals = {};
  const args = {} as any;

    const theme = getShowcaseTheme(globals);
    const resolvedColor = theme.color === "neutral" ? "brand" : theme.color;
    const appearances: AlertAppearance[] = [
      "strong",
      "dualTone",
      "soft",
    ];
    const variants: AlertVariant[] = ["solid", "solid-outline", "outline"];
    const colors: string[] = [
      "success",
      "warning",
      "danger",
      "info",
      "neutral",
      "help",
    ];
    const accents = ["start", "top"];
    const radiuses = ["none", "sm", "md", "lg", "full"];
    const spacings = ["compact", "standard", "spacious"] as any;
    const fonts = ["inter", "arial", "mono"];
    const coreFonts: Record<string, string> = {
      inter: "sans-serif",
      arial: "arial",
      mono: "monospace",
    };
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

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        {/* Header */}
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <h1 className={SHOWCASE_TITLE_CLASS}>Alert Component Showcase</h1>
          <p className="dark:text-neutral-500 text-lg text-neutral-600">
            Comprehensive visual reference of all alert variants, appearances,
            colors, and configurations.
          </p>
        </div>

        {/* Appearances */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Appearances
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control the visual intensity and contrast of the alert.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {appearances.map((appearance) => (
              <div key={appearance} className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {appearance}
                </span>
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  appearance={appearance}
                  variant="solid"

                  title={
                    appearance.charAt(0).toUpperCase() + appearance.slice(1)
                  }
                  description={`This is a ${appearance} alert.`}
                />
              </div>
            ))}
            <div key={'onColor'} className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {'onColor'}
              </span>
              <div className={`p-4 rounded-lg bg-${theme.color}-500`} >
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  appearance={'onColor'}
                  variant="solid"
                  title={
                    'OnColor'
                  }
                  description={`This is a onColor alert.`}
                /></div>
            </div>
          </div>
        </section>
        {/* Variants */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Variants
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Different border and background combinations.
            </p>
          </div>
          <div className="flex flex-wrap gap-6" style={{ flexWrap: 'wrap' }}>
            {variants.map((variant) => (
              <div key={variant} className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {variant}
                </span>
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  variant={variant}
                  appearance="strong"

                  title={variant.charAt(0).toUpperCase() + variant.slice(1)}
                  description={`This is a ${variant} alert style.`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Appearance Style Matrix */}
        <LazySection>
          <ShowcaseTable
            title="Appearance x Style Matrix"
            description="A matrix demonstrating combinations of variants and appearances."
            rowHeaderLabel="Variant \ Appearance"
            rows={[
              { key: "solid", label: "Solid" },
              { key: "solid-outline", label: "Solid-Outline" },
              { key: "outline", label: "Outline" },
            ]}
            columns={[
              { key: "strong", label: "Strong", width: "250px" },
              { key: "dualTone", label: "DualTone", width: "250px" },
              { key: "soft", label: "Soft", width: "250px" },
              { key: "onColor", label: "OnColor", width: "250px" },
            ]}
            renderCell={(variant, appearance) => (
              (appearance !== 'onColor') ? <Alert {...theme.componentProps} {...theme.layoutProps}                 {...args}
                {...theme.componentProps}
                {...theme.layoutProps}
                cTag="primary"
                variant={variant as any}
                appearance={appearance as any}
                title={`${variant.charAt(0).toUpperCase() + variant.slice(1)}`}
                description={`${appearance}`}
                adaptive={theme.mode === "dark"}
                primaryAction={{ label: 'Button' }}
                secondaryAction={{ label: 'Button' }}
              /> : <div key={'onColor'} className="flex flex-col gap-2">
                <div className={`rounded-lg ${variant === 'outline' && (theme.color === 'black' || theme.color === 'white') ? `bg-transparent` : `p-4 bg-${theme.color}-500`} `} >
                  <Alert {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance={'onColor'}
                    variant={variant as any}
                    title={
                      `${variant.charAt(0).toUpperCase() + variant.slice(1)}`
                    }
                    description={appearance}
                    primaryAction={{ label: 'Button' }}
                    secondaryAction={{ label: 'Button' }}
                  /></div>
              </div>
            )}
          />
        </LazySection>

        {/* Color Palette */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Color Palette
            </h2>
          </div>

          {/* All Theme Colors */}
          <div className="flex flex-wrap items-center gap-6 flex-wrap border-t border-neutral-200 pt-6" style={{ flexWrap: 'wrap' }}>
            {allColors.map((color) => (
              <div key={color} className="flex flex-col items-center gap-3">
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  variant="solid"
                  appearance="soft"
                  title={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
                  description={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
                  cTag="default"
                  color={color}
                ></Alert>
              </div>
            ))}
          </div>
        </section>

        {/* Accent Positions */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Accents
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Highlight strokes to draw extra attention.
            </p>
          </div>
          <div className="flex flex-wrap gap-6" style={{ flexWrap: 'wrap' }}>
            {accents.map((accent) => (
              <div key={accent} className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Accent: {accent}
                </span>
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  accent={accent as any}
                  appearance="soft"
                  title="Notification"
                  description={`This alert has a ${accent} accent.`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Alignment */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Alignment
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Text and action alignment within section and banner alerts.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Banner Alert - Start Aligned
              </span>
              <Alert.Banner {...theme.componentProps} {...theme.layoutProps}
                layout="inline"
                cTag="primary"
                fixed={false} // Force relative for showcase grid
                align="start"

                title="Start Aligned Banner"
                description="This banner has its content aligned to the start."
                primaryAction={{ label: "Action" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Banner Alert - Center Aligned
              </span>
              <Alert.Banner {...theme.componentProps} {...theme.layoutProps}
                layout="inline"
                cTag="primary"
                fixed={false} // Force relative for showcase grid
                align="center"

                title="Center Aligned Banner"
                description="This banner has its content centered."
                primaryAction={{ label: "Action" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Section Alert - Start Aligned
              </span>
              <Alert.Section {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                align="start"
                title="Start Aligned Section Alert"
                description="This section alert has its content aligned to the start."
                primaryAction={{ label: "Action" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Section Alert - Center Aligned
              </span>
              <Alert.Section {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                align="center"
                title="Center Aligned Section Alert"
                description="This section alert has its content centered."
                dismissible={true}
                primaryAction={{ label: "Action" }}
              />
            </div>
          </div>
        </section>

        {/* Slot Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Slot Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Customize the alert's leading slot with diverse options.
            </p>
          </div>
          <div className="flex flex-wrap gap-6" style={{ flexWrap: 'wrap' }}>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Icon
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"

                title="With Icon"
                description="Alert with a leading icon slot."
                prefix={{ type: "icon" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Flag
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"

                title="With Flag"
                description="Alert with a leading flag slot."
                prefix={{ type: "flag" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Emoji
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"

                title="With Emoji"
                description="Alert with a leading emoji slot."
                prefix={{ type: "emoji", size: "sm" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Avatar
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="soft"
                variant="solid-outline"
                title="With Avatar"
                description="Alert with a leading avatar slot."
                prefix={{
                  type: "avatar",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Logo
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"

                title="With Logo"
                description="Alert with a leading logo slot."
                prefix={{ type: "logo" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Color Logo
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="Gmail Connected"
                variant="outline"
                description="Your workspace is now synced with Google Workspace."
                prefix={{ type: "color-logo" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Badge Dot
              </span>
              <Alert.Banner {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="3 unread messages"
                color="white"
                variant="solid-outline"
                layout="inline"
                fullWidth
                description="from your team"
                primaryAction={{ label: 'Open Inbox' }}
                secondaryAction={{ label: "Mark as read", type: "tertiary" }}
                prefix={{ type: "badge-dot", className: 'mt-0', layer: { size: 'sm', color: 'green' } }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Badge Status Indicator
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="System Operational"
                description="All core infrastructure services are running smoothly."
                prefix={{ type: "badge-status-indicator" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Badge Counter
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="5 Pending Approvals"
                description="Requests require manager review before the end of day."
                prefix={{ type: "badge-counter" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Badge Label
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="Beta Feature Available"
                description="Try out the new AI workflow builder in your workspace."
                prefix={{ type: "badge-label", color: "green", label: "New" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Kbd
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="Quick Command Switcher"
                description="Press Enter anywhere to open the action menu."
                prefix={{ type: "kbd", keys: "command" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Link
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="New Documentation Live"
                description="Read our latest API integration guides and tutorials."
                prefix={{ type: "link", href: "#", children: "Docs", appearance: 'onColor', color: 'white' }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Button
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="Upgrade Required"
                description="Upgrade your plan to unlock team analytics."
                prefix={{ type: "button", children: "Upgrade", color: 'green', size: 'sm', appearance: 'onColor', variant: 'outline' }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Color Swatch
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="soft"
                variant="solid-outline"
                title="Theme Applied"
                description="Custom workspace color swatch active."
                prefix={{ type: "color-swatch", size: 'xs' }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                None
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                appearance="strong"
                title="Scheduled Maintenance"
                description="Database optimizations will occur tonight at 02:00 UTC."
                prefix={{ type: "none" }}
              />
            </div>
          </div>
        </section>

        {/* Radius Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Radius Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Different border radius options for the alert.
            </p>
          </div>
          <div className="flex flex-wrap gap-4" style={{ flexWrap: 'wrap' }}>
            {radiuses.map((radius: any) => (
              <div key={radius} className="flex flex-wrap flex-col gap-2" style={{ flexWrap: 'wrap' }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Rounded: {radius}
                </span>
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  variant="solid"
                  appearance="strong"
                  rounded={radius}

                  title={`Rounded: ${radius.charAt(0).toUpperCase() + radius.slice(1)}`}
                  description={`This alert uses the ${radius} radius.`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Spacing Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Spacing Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Padding and gap configurations.
            </p>
          </div>
          <div className="flex flex-wrap gap-4" style={{ flexWrap: 'wrap' }}>
            {spacings.map((spacing) => (
              <div key={spacing} className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Spacing: {spacing}
                </span>
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  variant="solid"
                  appearance="strong"
                  spacing={spacing}
                  title={`Spacing: ${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`}
                  description={`This alert uses the ${spacing} spacing.`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Font Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Font Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Typography family options.
            </p>
          </div>
          <div className="flex flex-wrap gap-4" style={{ flexWrap: 'wrap' }}>
            {fonts.map((font) => (
              <div key={font} className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Font: {font}
                </span>
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  variant="solid"
                  appearance="strong"

                  title={{
                    children: `Font: ${font.charAt(0).toUpperCase() + font.slice(1)}`,
                    style: { fontFamily: coreFonts[font] },
                  }}
                  description={{
                    children: `This alert uses the ${font} font.`,
                    style: { fontFamily: coreFonts[font] },
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Configurations */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Configurations
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Various structural options for different use cases.
            </p>
          </div>
          <div className="flex flex-wrap gap-6" style={{ flexWrap: 'wrap' }}>
            {/* Inline */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Inline layout
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                layout="inline"

                title="Update Available:"
                description="A new version of the software is ready to install."
                primaryAction={{ label: "Install" }}
                secondaryAction={{ label: "Later" }}
              />
            </div>

            {/* Dismissible */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Dismissible
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                dismissible

                title="Maintenance"
                description="Scheduled maintenance in 10 minutes."
              />
            </div>

            {/* collapsible */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                collapsible
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                collapsible
                title="Details Available"
                description="Click the arrow to expand and see more information about this success description."
              />
            </div>

            {/* prefixBackground */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Prefix Background
              </span>
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                prefixBackground
                appearance="soft"
                prefix={{ type: "icon", name: "star" }}
                title="Highlighted Icon"
                description="This alert has a background color on the leading icon slot."
              />
            </div>
          </div>
        </section>

        {/* Layout Variations */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Layouts
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                layout="stack"

                title="Stack Layout"
                description="Alert with stacked layout."
                primaryAction={{ label: 'Primary' }}
                secondaryAction={{ label: 'Secondary' }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Alert {...theme.componentProps} {...theme.layoutProps}
                cTag="primary"
                layout="inline"

                title="Stack Layout"
                description="Alert with inlined layout."
                primaryAction={{ label: 'Primary' }}
                secondaryAction={{ label: 'Secondary' }}
              />
            </div>
          </div>
        </section>

        {/* Text Overflow */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Text Overflow
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control how long descriptions wrap or truncate within the alert container.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {["wrap", "line-clamp-1", "line-clamp-2"].map((overflow) => (
              <div key={overflow} className="flex flex-col gap-2 w-full max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {overflow}
                </span>
                <Alert
                  {...theme.componentProps}
                  {...theme.layoutProps}
                  cTag="primary"
                  textOverflow={overflow as any}
                  title={`Overflow Behavior: ${overflow}`}
                  description="This is an intentionally very long description intended to fully demonstrate the textOverflow functionality of the Alert component. Depending on the selected property, this text will either wrap naturally to the next line or truncate with an ellipsis to maintain a clean layout."
                />
              </div>
            ))}
          </div>
        </section>

        {/* Width Options */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Width Options
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Control the width of the alert component.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Fixed Width (400px)
              </span>
              <div className="flex bg-neutral-100 p-4 border border-dashed border-neutral-300 w-full rounded">
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  width={1000}
                  title="Fixed Width"
                  description="This alert has a fixed width of 400px."
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Full Width
              </span>
              <div className="flex bg-neutral-100 p-4 border border-dashed border-neutral-300 w-full rounded">
                <Alert {...theme.componentProps} {...theme.layoutProps}
                  cTag="primary"
                  fullWidth
                  title="Full Width"
                  description="This alert takes the full width of its container."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Variations */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Content Variations
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Using standard props or children for complex layouts.
            </p>
          </div>
          <div className="flex flex-wrap flex-col gap-4" style={{ flexWrap: 'wrap' }}>
            <Alert {...theme.componentProps} {...theme.layoutProps}
              cTag="primary"

              title="Standard Text"
              description="Using the standard title and description props."
            />
            <Alert {...theme.componentProps} {...theme.layoutProps} cTag="primary">
              <p className="dark:text-black text-white my-0">
                We can show a list as well  :
              </p>
              <OrderedList color="white" stylePosition="inside">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </OrderedList>
            </Alert>
          </div>
        </section>

        {/* Actions */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Actions
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Interactive buttons within the alert.
            </p>
          </div>
          <div className="flex flex-wrap flex-col gap-4" style={{ flexWrap: 'wrap' }}>
            <Alert {...theme.componentProps} {...theme.layoutProps}
              cTag="primary"

              title="Action Required"
              description="Please review the terms and conditions before proceeding."
              primaryAction={{ label: "Review Terms" }}
            />
            <Alert {...theme.componentProps} {...theme.layoutProps}
              cTag="primary"
              title="File Uploaded"
              description="Your file has been successfully uploaded to the server."
              primaryAction={{ label: "View File" }}
              secondaryAction={{ label: "Dismiss" }}
            />
          </div>
        </section>

        {/* Banners */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Banner Alerts
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Full-width alerts typically used for system-wide descriptions.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Alert.Banner {...theme.componentProps} {...theme.layoutProps}
              layout="inline"
              cTag="primary"
              fixed={true}

              appearance="strong"
              align="center"
              description="This is a fixed banner which will not move when page is scrolled"
              dismissible
            />
            <Alert.Banner {...theme.componentProps} {...theme.layoutProps}
              layout="inline"
              cTag="primary"
              fixed={false}

              appearance="strong"
              align="start"
              description="Your subscription is about to expire. Renew now to avoid interruption."
              primaryAction={{ label: "Renew Now" }}
              className="z-10"
            />
          </div>
        </section>

        {/* Adaptive Dark Mode */}
        <section className="space-y-6">
          <div>
            <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
              Adaptive Dark Mode
            </h2>
            <p className="dark:text-neutral-500 text-sm text-neutral-600">
              Appearance adapts when placed in a dark context.
            </p>
          </div>
          <div className="dark bg-neutral-900 p-6 rounded-lg border border-neutral-800 shadow-inner">
            <div className="flex gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">APPEARANCE: STRONG</span>
                <div className="flex flex-col gap-2 space-y-2">
                  <Alert {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    title="Adaptive: on"
                    appearance="strong"
                    description="This alert adapts to the dark background automatically."
                  />
                  <Alert {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    title="Adaptive: off"
                    adaptive={false}
                    appearance="strong"
                    description="This alert does not adapt to the dark background automatically."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">APPEARANCE: ONCOLOR</span>
                <div className="flex flex-col gap-2 space-y-2">
                  <Alert {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance="onColor"
                    title="Adaptive: on"
                    description="This alert adapts to the dark background automatically."
                  />
                  <Alert {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance="onColor"
                    title="Adaptive: off"
                    adaptive={false}
                    description="This alert does not adapt to the dark background automatically."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ShowcaseShell >
    );
  
}
