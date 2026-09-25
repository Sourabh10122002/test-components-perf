// Showcase ported from origin/emptystate:src/components/Emptystate/stories/emptystate.stories.tsx
import { Emptystate } from "@inventive-ui/components/Emptystate";

import { LazySection } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";

/* ===========================================================
 * SHOWCASE DATA (module-scope to avoid re-creation on each render)
 * =========================================================== */

const SHOWCASE_LAYOUTS = [
  {
    column: "single",
    illustrationPosition: "AboveText",
    align: "center",
  },
  {
    column: "single",
    illustrationPosition: "BelowText",
    align: "center",
  },
  {
    column: "double",
    illustrationPosition: "BetweenText",
    align: "start",
  },
  {
    column: "double",
    illustrationPosition: "BetweenText",
    align: "end",
  },
] as const;

const SHOWCASE_COLORS = [
  "brand",
  "danger",
  "warning",
  "success",
  "info",
  "emerald",
  "indigo",
  "slate",
];

const SHOWCASE_ACTIONS_VARIANTS = [
  {
    label: "No Actions",
    props: {
      primaryAction: undefined,
      secondaryAction: undefined,
      tertiaryAction: undefined,
    },
  },
  {
    label: "Primary Only",
    props: {
      primaryAction: {
        type: "button",
        label: "Submit",
        variant: "solid",
        appearance: "strong",
        size: "base",
      } as any,
      secondaryAction: undefined,
      tertiaryAction: undefined,
    },
  },
  {
    label: "Primary + Secondary",
    props: {
      primaryAction: {
        type: "button",
        label: "Accept",
        variant: "solid",
        appearance: "strong",
        size: "base",
      } as any,
      secondaryAction: {
        type: "button",
        label: "Decline",
        variant: "outline",
        appearance: "strong",
        size: "base",
      } as any,
      tertiaryAction: undefined,
    },
  },
  {
    label: "All Actions",
    props: {
      primaryAction: {
        type: "button",
        label: "Save",
        variant: "solid",
        appearance: "strong",
        size: "base",
      } as any,
      secondaryAction: {
        type: "button",
        label: "Cancel",
        variant: "outline",
        appearance: "strong",
        size: "base",
      } as any,
      tertiaryAction: {
        type: "link",
        children: "Learn more",
        href: "#",
        variant: "underline",
        appearance: "strong",
        size: "base",
        suffix: { type: "icon", name: "@arrowForwardIos", size: "md" },
      } as any,
    },
  },
];

const SHOWCASE_SLOT_VARIETIES = [
  {
    label: "Illustration",
    props: {
      illustrationSlot: {
        type: "illustration",
        name: "@placeholder",
      } as any,
    },
  },
  {
    label: "Icon",
    props: {
      illustrationSlot: {
        type: "icon",
        name: "@placeholder",
        size: "3xl",
      } as any,
    },
  },
  {
    label: "File Type",
    props: {
      illustrationSlot: {
        type: "file-type",
        extension: "@placeholder",
        size: "3xl",
      } as any,
    },
  },
  {
    label: "Loader",
    props: {
      illustrationSlot: {
        type: "loader",
        name: "dot-pulse",
        size: "3xl",
      } as any,
    },
  },
  { label: "None", props: { illustrationSlot: undefined } },
];

export default function EmptyStateShowcase() {
    const globals = {};
    // Neither meta nor the Showcase story defines args, so Storybook passes {}.
    const args = {};
    const theme = getShowcaseTheme(globals);
    // @ts-ignore -- unused in the original story (noUnusedLocals)
    const showcaseArgs = { ...args, ...theme.componentProps };
    const baseProps = {
      title: { content: "No results found", tag: "h2" as const },
      description: "We couldn't find anything matching your search.",
      primaryAction: {
        type: "button" as any,
        label: "Clear search",
        variant: "solid" as any,
        appearance: "strong" as any,
        size: "base" as any,
      },
      secondaryAction: {
        type: "button" as any,
        label: "Try again",
        variant: "outline" as any,
        appearance: "strong" as any,
        size: "base" as any,
      },
      illustrationSlot: { type: "illustration" as any, name: "@placeholder" },
      fullWidth: false,
      color: theme.color,
    };
    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className="space-y-16 p-8 min-h-screen">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              EmptyState Component Showcase
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive visual reference of all EmptyState configurations,
              layouts, and states
            </p>
          </div>

          {/* Layouts Section */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  Layout Configurations
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Different column combinations and illustration alignments
                </p>
              </div>
              <div className="flex flex-col gap-8">
                {SHOWCASE_LAYOUTS.map((layout, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b pb-2 mb-4">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                        column="{layout.column}" | align="{layout.align}" |
                        position="{layout.illustrationPosition}"
                      </span>
                    </div>
                    <Emptystate
                      {...baseProps}
                      column={layout.column}
                      align={layout.align}
                      illustrationPosition={layout.illustrationPosition}
                      cTag={`showcase-layout-${i}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          {/* Width Variants Section */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  Width Variants
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Narrow vs wide container constraints
                </p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {[false, true].map((fullWidth) => (
                  <div
                    key={String(fullWidth)}
                    className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b pb-2 mb-4">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                        fullWidth="{String(fullWidth)}"
                      </span>
                    </div>
                    <Emptystate
                      {...baseProps}
                      column="single"
                      fullWidth={fullWidth}
                      illustrationPosition="AboveText"
                      align="center"
                      cTag={`showcase-fullWidth-${fullWidth}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          {/* Illustration Varieties Section */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  Illustration Slot Options
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Various types of media that can be embedded
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {SHOWCASE_SLOT_VARIETIES.map((slotConf) => (
                  <div
                    key={slotConf.label}
                    className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b pb-2 mb-4">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                        {slotConf.label}
                      </span>
                    </div>
                    <Emptystate
                      {...baseProps}
                      {...slotConf.props}
                      cTag={`showcase-slot-${slotConf.label.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          {/* Action Configurations Section */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  Action Configurations
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Different permutations of calls-to-action
                </p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {SHOWCASE_ACTIONS_VARIANTS.map((actionConf) => (
                  <div
                    key={actionConf.label}
                    className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b pb-2 mb-4">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                        {actionConf.label}
                      </span>
                    </div>
                    <Emptystate
                      {...baseProps}
                      {...actionConf.props}
                      cTag={`showcase-actions-${actionConf.label.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          {/* Color Palette Section */}
          <LazySection>
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  Color Palette
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Global and semantic colors
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {SHOWCASE_COLORS.map((color) => (
                  <div
                    key={color}
                    className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b pb-2 mb-4">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                        color="{color}"
                      </span>
                    </div>
                    <Emptystate
                      {...baseProps}
                      color={color}
                      cTag={`showcase-color-${color}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
}
