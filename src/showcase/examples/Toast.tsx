// @ts-nocheck
// Ported from origin/toast:src/components/Toast/stories/Toast.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/toast:src/components/Toast/stories/Toast.stories.tsx
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../storybook";
import { useSlotRenderer } from "@inventive-ui/framework/slots";
import { Toast } from "@inventive-ui/components/Toast";
import type { BaseToastProps, ToastAppearance, ToastPlacement } from "@inventive-ui/components/Toast";
import { ToastContainer } from "@inventive-ui/components/Toast";
import { ToastProvider } from "@inventive-ui/components/Toast";
import { useToast } from "@inventive-ui/components/Toast";

// Story params were: (args: any, { globals }: any)
export default function ToastShowcase() {
  const globals = {};
    const theme = getShowcaseTheme(globals);
    const appearances: ToastAppearance[] = [
      "strong",
      "soft",
      "dualTone",
    ];
    const variants: BaseToastProps["variant"][] = ["solid", "solid-outline"];
    const colors = ["success", "warning", "danger", "info", "neutral"];
    const accents: BaseToastProps["accent"][] = ["start", "top"];
    const radiuses = ["none", "sm", "md", "lg", "full"];
    const spacings = ["compact", "standard", "spacious"];
    const fonts = ["inter", "arial", "mono"];
    const coreFonts: Record<string, string> = {
      inter: "sans-serif",
      arial: "arial",
      mono: "monospace",
    };
    const allColors = [
      "brand",
      "neutral",
      "success",
      "warning",
      "danger",
      "info",
    ];

    const TriggerButton = ({
      label,
      placement,
    }: {
      label: string;
      placement: ToastPlacement;
    }) => {
      const toast = useToast();
      const renderSlot = useSlotRenderer();
      return renderSlot({
        slot: {
          type: "button",
          onClick: () => {
            toast(label, {
              description: `This is ${label.toLowerCase()} position`,
              placement: placement,
              appearance: "strong",
              color: "info",
            });
          },
          size: "sm",
          variant: "solid",
          adaptive: true,
          appearance: "strong",
          color: "info",
          children: label,
          className: "w-32",
        },
      });
    };

    return (
      <ShowcaseShell className={SHOWCASE_CONTAINER_CLASS} globals={globals}>
        <ToastProvider>
          <ToastContainer />
          <div className=" p-8 min-h-screen font-sans">
            {/* Header */}
            <div className="space-y-2 border-b border-neutral-200 pb-6">
              <h1 className="dark:text-white text-4xl font-bold text-neutral-900">
                Toast Component Showcase
              </h1>
              <p className="text-lg text-neutral-600">
                Comprehensive visual reference of all toast variants,
                appearances, colors, and configurations.
              </p>
            </div>

            {/* Appearances */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl dark:text-white  font-bold text-neutral-900 mb-2">
                  Appearances
                </h2>
                <p className="text-sm text-neutral-600">
                  Control the visual intensity and contrast of the toast.
                </p>
              </div>
              <div className="flex flex-wrap gap-10">
                {appearances.map((appearance) => (
                  <div key={appearance} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {appearance}
                    </span>
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        appearance={appearance}
                        variant="solid"
                        title={
                          appearance.charAt(0).toUpperCase() +
                          appearance.slice(1)
                        }
                        description={`This is a ${appearance} toast.`}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                      />
                    </div>
                  </div>
                ))}
                <div key={'onColor'} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {'onColor'}
                  </span>
                  <div className={`p-4 rounded-lg bg-${theme.color}-500`} >
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      appearance={'onColor'}
                      showProgress={false}
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
                <h2 className="text-2xl dark:text-white  font-bold text-neutral-900 mb-2">
                  Variants
                </h2>
                <p className="text-sm text-neutral-600">
                  Different border and background combinations.
                </p>
              </div>
              <div className="flex flex-wrap gap-10">
                {variants.map((variant) => (
                  <div key={variant} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {variant}
                    </span>
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        variant={variant}
                        appearance="strong"
                        title={
                          variant!.charAt(0).toUpperCase() + variant!.slice(1)
                        }
                        description={`This is a ${variant} toast style.`}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Appearance Style Matrix */}
            <section className="space-y-6">
              <div>
                <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
                  Appearance x Style Matrix
                </h2>
                <p className="dark:text-neutral-500 text-sm text-neutral-600">
                  A matrix demonstrating combinations of variants and
                  appearances.
                </p>
              </div>
              <div className="flex flex-col gap-6 overflow-x-auto pb-4">
                <table className="w-full text-left border-collapse min-w-150">
                  <thead>
                    <tr>
                      <th className="font-semibold text-neutral-500 text-sm pb-4 border-b border-neutral-200 w-32">
                        Variant
                      </th>
                      {appearances.map((app) => (
                        <th
                          key={app}
                          className="dark:text-white font-semibold text-neutral-700 text-center capitalize pb-4 border-b border-neutral-200"
                        >
                          {app}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((variant) => (
                      <tr
                        key={variant}
                        className="border-b border-neutral-100 last:border-0"
                      >
                        <td className="font-semibold text-neutral-600 text-sm py-4 capitalize align-middle">
                          {variant}
                        </td>
                        {appearances.map((appearance) => (
                          <td
                            key={`${variant}-${appearance}`}
                            className="py-4 px-2 text-center align-middle"
                          >
                            <div className="relative">
                              <Toast {...theme.componentProps} {...theme.layoutProps}
                                cTag="primary"
                                variant={variant}
                                appearance={appearance}
                                title={`${variant}`}
                                description={`${appearance}`}
                                show={true}
                                autoDismiss={0}
                                placement="top-end"
                                primaryAction={{ label: "Primary" }}
                                secondaryAction={{ label: "Secondary" }}
                              />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Progress Bar */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl dark:text-white  font-bold text-neutral-900 mb-2">
                  Progress Bar
                </h2>
                <p className="text-sm text-neutral-600">
                  Visual indicator mapping to the auto-dismiss timeout duration.
                </p>
              </div>
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Strong Appearance Progress
                  </span>
                  <div className="relative h-20">
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      appearance="strong"
                      title="Action Completed"
                      description="Your changes have been saved."
                      show={true}
                      showProgress={true}
                      autoDismiss={100000}
                      placement="top-end"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Standard Progress
                  </span>
                  <div className="relative h-20">
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      appearance="soft"
                      title="Auto Dismissing"
                      description="This toast will dismiss automatically."
                      show={true}
                      showProgress={true}
                      autoDismiss={100000} // Large duration to keep it visible in Storybook
                      placement="top-end"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Color Palette */}
            <section className="space-y-6">
              <div>
                <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
                  Color Palette
                </h2>
                <p className="dark:text-neutral-500 text-sm text-neutral-600">
                  Semantic colors for different feedback states.
                </p>
              </div>
              <div className="flex flex-wrap gap-10">
                {colors.map((color) => (
                  <div key={color} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {color}
                    </span>
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        color={color}
                        appearance="strong"
                        title={color.charAt(0).toUpperCase() + color.slice(1)}
                        description={`This is a ${color} notification.`}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* All Theme Colors */}
              <div className="flex flex-wrap items-center gap-6 flex-wrap border-t border-neutral-200 pt-6">
                {allColors.map((color) => (
                  <div key={color} className="flex flex-col items-center gap-3">
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        variant="solid"
                        appearance="soft"
                        title={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
                        description={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
                        cTag="default"
                        color={color}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Accent Positions */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl dark:text-white  font-bold text-neutral-900 mb-2">
                  Accents
                </h2>
                <p className="text-sm text-neutral-600">
                  Highlight strokes to draw extra attention.
                </p>
              </div>
              <div className="flex flex-wrap gap-10">
                {accents.map((accent) => (
                  <div key={accent} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Accent: {accent}
                    </span>
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        accent={accent}
                        appearance="soft"
                        title="Notification"
                        description={`This toast has a ${accent} accent.`}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Slot Options */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl dark:text-white  font-bold text-neutral-900 mb-2">
                  Slot Options
                </h2>
                <p className="text-sm text-neutral-600">
                  Customize the toast's leading slot with diverse options.
                </p>
              </div>
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Icon
                  </span>
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance="soft"
                    title="Gmail Connected"
                    variant="solid-outline"
                    description="Your workspace is now synced with Google Workspace."
                    prefix={{ type: "color-logo" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Badge Dot
                  </span>
                  <Toast {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance="strong"
                    title="3 unread messages"
                    color="white"
                    variant="solid-outline"
                    layout="inline"
                    description="from your team"
                    className={"w-full"}
                    primaryAction={{ label: 'Open Inbox' }}
                    secondaryAction={{ label: "Mark as read", type: "tertiary" }}
                    prefix={{ type: "badge-dot" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Badge Status Indicator
                  </span>
                  <Toast {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance="soft"
                    title="System Operational"
                    description="All core infrastructure services are running smoothly."
                    prefix={{ type: "badge-status-indicator" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Badge Counter
                  </span>
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance="strong"
                    title="Beta Feature Available"
                    description="Try out the new AI workflow builder in your workspace."
                    prefix={{ type: "badge-label", color: "neutral", label: "New" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Kbd
                  </span>
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
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
                  <Toast {...theme.componentProps} {...theme.layoutProps}
                    cTag="primary"
                    appearance="strong"
                    title="Scheduled Maintenance"
                    description="Database optimizations will occur tonight at 02:00 UTC."
                    prefix={{ type: "none" }}
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
                    <Toast
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

            {/* Radius Options */}
            <section className="space-y-6">
              <div>
                <h2 className="dark:text-white text-2xl font-bold text-neutral-900 mb-2">
                  Radius Options
                </h2>
                <p className="dark:text-neutral-500 text-sm text-neutral-600">
                  Different border radius options for the toast.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {radiuses.map((radius: any) => (
                  <div key={radius} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Rounded: {radius === "full" ? "full" : radius}
                    </span>
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        variant="solid"
                        appearance="strong"
                        title={`Rounded: ${radius}`}
                        description={`This toast uses the ${radius} radius.`}
                        rounded={radius}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                      />
                    </div>
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
              <div className="flex flex-wrap gap-4">
                {spacings.map((spacing) => (
                  <div key={spacing} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Spacing: {spacing}
                    </span>
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        variant="solid"
                        appearance="strong"
                        title={`Spacing: ${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`}
                        description={{ children: `This toast uses the ${spacing} spacing.` }}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                        spacing={spacing}
                      />
                    </div>
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
              <div className="flex flex-wrap gap-4">
                {fonts.map((font) => (
                  <div key={font} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Font: {font}
                    </span>
                    <div className="relative">
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        variant="solid"
                        appearance="strong"
                        title={{
                          children: `Font: ${font.charAt(0).toUpperCase() + font.slice(1)}`,
                          style: { fontFamily: coreFonts[font] },
                        }}
                        description={{
                          children: `This toast uses the ${font} font.`,
                          style: { fontFamily: coreFonts[font] },
                        }}
                        show={true}
                        autoDismiss={0}
                        placement="top-end"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Configurations */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl dark:text-white  font-bold text-neutral-900 mb-2">
                  Configurations
                </h2>
                <p className="text-sm text-neutral-600">
                  Various structural options for different use cases.
                </p>
              </div>
              <div className="flex flex-wrap gap-10">
                {/* Inlined */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Inlined
                  </span>
                  <div className="relative">
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      inlined
                      title="Update Available:"
                      description="A new version of the software is ready to install."
                      show={true}
                      autoDismiss={0}
                      placement="top-end"
                    />
                  </div>
                </div>

                {/* Icon Background */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Icon Background
                  </span>
                  <div className="relative">
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      prefixBackground
                      variant="solid-outline"
                      appearance="soft"
                      title="Success"
                      description="Operation completed successfully with icon background."
                      show={true}
                      autoDismiss={0}
                      placement="top-end"
                    />
                  </div>
                </div>

                {/* Split Buttons */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Split Buttons
                  </span>
                  <div className="relative">
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      splitButtons
                      title="Connection Lost"
                      description="Please check your internet connection."
                      primaryAction={{ label: "Retry" }}
                      secondaryAction={{ label: "Ignore" }}
                      show={true}
                      autoDismiss={0}
                      placement="top-end"
                    />
                  </div>
                </div>

                {/* Button Stacked */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Stacked Buttons
                  </span>
                  <div className="relative">
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      title="Critical Error"
                      description="An error occurred while processing your request."
                      primaryAction={{ label: "Retry" }}
                      secondaryAction={{ label: "Cancel" }}
                      show={true}
                      autoDismiss={0}
                      placement="top-end"
                    />
                  </div>
                </div>

                {/* Inline Buttons */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Inline Buttons
                  </span>
                  <div className="relative">
                    <Toast {...theme.componentProps} {...theme.layoutProps}
                      cTag="primary"
                      layout="inline"
                      title="Critical Error"
                      description="An error occurred while processing your request."
                      primaryAction={{ label: "Retry" }}
                      secondaryAction={{ label: "Cancel" }}
                      show={true}
                      autoDismiss={0}
                      placement="top-end"
                    />
                  </div>
                </div>
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
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        title="Adaptive: on"
                        appearance="strong"
                        description="This alert adapts to the dark background automatically."
                      />
                      <Toast {...theme.componentProps} {...theme.layoutProps}
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
                      <Toast {...theme.componentProps} {...theme.layoutProps}
                        cTag="primary"
                        appearance="onColor"
                        title="Adaptive: on"
                        description="This alert adapts to the dark background automatically."
                      />
                      <Toast {...theme.componentProps} {...theme.layoutProps}
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
          </div>
        </ToastProvider>
      </ShowcaseShell>
    );
  }
