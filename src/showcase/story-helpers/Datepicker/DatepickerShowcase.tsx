// Copied from origin/datepicker:src/components/Datepicker/stories/DatepickerShowcase.tsx (story demo helper; imports remapped)
import React from "react";
import { Datepicker } from "@inventive-ui/components/Datepicker";
import type {
  DatepickerAppearance,
  DatepickerHeaderConfig,
  DatepickerHeaderProp,
  DatepickerSize,
  DatepickerVariant,
} from "@inventive-ui/components/Datepicker";
import { LazySection } from "../../storybook";
import {
  SHOWCASE_HEADER_WRAP_CLASS,
  SHOWCASE_ROW_CLASS,
  SHOWCASE_SECTION_CLASS,
  SHOWCASE_SECTION_DESC_CLASS,
  SHOWCASE_SECTION_TITLE_CLASS,
  SHOWCASE_SUBTITLE_CLASS,
  SHOWCASE_TITLE_CLASS,
} from "../../storybook";

type ShowcaseTheme = {
  color: string;
  layoutProps: Record<string, unknown>;
};

const TODAY = (() => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
})();

const addDays = (value: Date, amount: number) => {
  const next = new Date(value);
  next.setDate(next.getDate() + amount);
  return next;
};

const VARIANTS: DatepickerVariant[] = ["solid", "solid-outline", "outline"];
const APPEARANCES: DatepickerAppearance[] = ["strong", "soft", "dualTone"];
const SIZES: DatepickerSize[] = ["xs", "sm", "base", "lg", "xl"];
const SEMANTIC_COLORS = [
  "brand",
  "success",
  "warning",
  "danger",
  "info",
  "neutral",
] as const;

const HEADER_NAVIGATION: Array<{
  label: string;
  header: DatepickerHeaderConfig;
}> = [
  { label: "none", header: { navigation: "none", yearNavigation: false } },
  { label: "prev-next", header: { navigation: "prev-next" } },
  {
    label: "prev-next-today",
    header: { navigation: "prev-next-today" },
  },
];

const HEADER_CONTEXT: Array<{
  label: string;
  header: DatepickerHeaderConfig;
}> = [
  { label: "month-year", header: { context: "month-year" } },
  { label: "month", header: { context: "month" } },
  { label: "year", header: { context: "year" } },
  { label: "selected-date", header: { context: "selected-date" } },
];

const HEADER_INTERACTION: Array<{
  label: string;
  header: DatepickerHeaderConfig;
}> = [
  { label: "static", header: { contextInteraction: "static" } },
  { label: "picker", header: { contextInteraction: "picker" } },
  {
    label: "dropdown",
    header: { contextInteraction: "dropdown", yearNavigation: false },
  },
  {
    label: "month-dropdown",
    header: { contextInteraction: "month-dropdown" },
  },
  {
    label: "year-dropdown",
    header: { contextInteraction: "year-dropdown", yearNavigation: false },
  },
];

const ACTION_HEADER_BASE: DatepickerHeaderConfig = {
  navigation: "prev-next",
  context: "month-year",
  contextInteraction: "static",
  yearNavigation: false,
  density: "compact",
};

const HEADER_ACTIONS: Array<{
  label: string;
  size: DatepickerSize;
  header: DatepickerHeaderConfig;
}> = [
  {
    label: "today (sm · max 1)",
    size: "sm",
    header: { ...ACTION_HEADER_BASE, actions: ["today"] },
  },
  {
    label: "clear (sm · max 1)",
    size: "sm",
    header: { ...ACTION_HEADER_BASE, actions: ["clear"] },
  },
  {
    label: "confirm (base)",
    size: "base",
    header: { ...ACTION_HEADER_BASE, actions: ["confirm"] },
  },
  {
    label: "today + clear (base · max 2)",
    size: "base",
    header: { ...ACTION_HEADER_BASE, actions: ["today", "clear"] },
  },
  {
    label: "3 actions → clamped to 2",
    size: "base",
    header: {
      ...ACTION_HEADER_BASE,
      yearNavigation: true,
      actions: ["today", "clear", "confirm"],
    },
  },
];

const HEADER_DENSITY: Array<{
  label: string;
  header: DatepickerHeaderConfig;
}> = [
  { label: "minimal", header: { density: "minimal" } },
  { label: "compact", header: { density: "compact" } },
  { label: "standard", header: { density: "standard" } },
  { label: "spacious", header: { density: "spacious" } },
];

const HEADER_ALIGN: Array<{
  label: string;
  header: DatepickerHeaderConfig;
}> = [
  { label: "start", header: { align: "start" } },
  { label: "center", header: { align: "center" } },
  { label: "between", header: { align: "between" } },
];

const HEADER_COMBOS: Array<{
  label: string;
  hint: string;
  size?: DatepickerSize;
  header: DatepickerHeaderProp;
}> = [
  {
    label: "picker",
    hint: "Default chrome — clickable month/year + year arrows",
    header: {
      navigation: "prev-next",
      context: "month-year",
      contextInteraction: "picker",
      yearNavigation: true,
    },
  },
  {
    label: "dropdown",
    hint: "Native selects for fast jumps on forms",
    header: {
      navigation: "prev-next",
      context: "month-year",
      contextInteraction: "dropdown",
      yearNavigation: false,
    },
  },
  {
    label: "static · minimal",
    hint: "Label only, tight density, no year arrows",
    header: {
      navigation: "prev-next",
      context: "month-year",
      contextInteraction: "static",
      yearNavigation: false,
      density: "minimal",
    },
  },
  {
    label: "actions",
    hint: "Today + Clear. yearNavigation:true is coerced off; needs base+ for two labels.",
    size: "base",
    header: {
      navigation: "prev-next",
      context: "month-year",
      contextInteraction: "static",
      yearNavigation: true,
      density: "compact",
      actions: ["today", "clear"],
    },
  },
  {
    label: "today in nav",
    hint: "Today sits beside the month arrows",
    header: {
      navigation: "prev-next-today",
      context: "month-year",
      contextInteraction: "picker",
      yearNavigation: true,
    },
  },
  {
    label: "month context",
    hint: "Header shows the month; year is reached via arrows",
    header: {
      navigation: "prev-next",
      context: "month",
      contextInteraction: "picker",
      yearNavigation: true,
    },
  },
  {
    label: "selected-date",
    hint: "Center label reflects the chosen day",
    header: {
      navigation: "prev-next",
      context: "selected-date",
      contextInteraction: "static",
      yearNavigation: false,
    },
  },
  {
    label: "hidden",
    hint: "header={false}",
    header: false,
  },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className={SHOWCASE_SECTION_CLASS}>
      <div>
        <h2 className={SHOWCASE_SECTION_TITLE_CLASS}>{title}</h2>
        <p className={SHOWCASE_SECTION_DESC_CLASS}>{description}</p>
      </div>
      {children}
    </section>
  );
}

function Cell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-neutral-400">
        {label}
      </span>
      {children}
    </div>
  );
}

function DateDemo({
  color,
  layoutProps,
  variant = "solid",
  appearance = "strong",
  size = "sm",
  ...rest
}: {
  color: string;
  layoutProps: Record<string, unknown>;
  variant?: DatepickerVariant;
  appearance?: DatepickerAppearance;
  size?: DatepickerSize;
} & React.ComponentProps<typeof Datepicker.date>) {
  return (
    <Datepicker.date
      color={color}
      variant={variant}
      appearance={appearance}
      size={size}
      adaptive
      defaultValue={TODAY}
      footer={false}
      {...layoutProps}
      {...rest}
    />
  );
}

export function DatepickerShowcase({ color, layoutProps }: ShowcaseTheme) {
  const shared = { color, layoutProps };

  return (
    <>
      <div className={SHOWCASE_HEADER_WRAP_CLASS}>
        <h1 className={SHOWCASE_TITLE_CLASS}>Datepicker Component Showcase</h1>
        <p className={SHOWCASE_SUBTITLE_CLASS}>
          Visual reference for single pickers — modes, variants, appearances,
          sizes, header JSON, footers, and constraints. Range pickers live in
          their own stories.
        </p>
      </div>

      <Section
        title="Style Variants"
        description="Cell fill and outline treatments."
      >
        <div className={SHOWCASE_ROW_CLASS}>
          {VARIANTS.map((variant) => (
            <Cell key={variant} label={variant}>
              <DateDemo {...shared} variant={variant} />
            </Cell>
          ))}
        </div>
      </Section>

      <Section
        title="Header JSON — composed examples"
        description="Header dimensions combine independently. These presets are examples, not a product enum. Pass false to hide."
      >
        <div className={SHOWCASE_ROW_CLASS}>
            {HEADER_COMBOS.map((item) => (
              <Cell key={item.label} label={item.label}>
                <DateDemo
                  {...shared}
                  size={item.size ?? "sm"}
                  header={item.header}
                />
                <p className="max-w-[280px] text-xs text-gray-500 dark:text-neutral-400">
                  {item.hint}
                </p>
              </Cell>
            ))}
        </div>
      </Section>

      <LazySection estimatedHeight={420}>
        <Section
          title="Appearance Variants"
          description="Intensity of the selected cell."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {APPEARANCES.map((appearance) => (
              <Cell key={appearance} label={appearance}>
                <DateDemo {...shared} appearance={appearance} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={480}>
        <Section
          title="Sizes"
          description="Calendar size matches Button: xs, sm, base, lg, xl."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {SIZES.map((size) => (
              <Cell key={size} label={size}>
                <DateDemo {...shared} size={size} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={520}>
        <Section
          title="Picker Modes"
          description="Compound single pickers. Each mode keeps the same color, size, and interaction language."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="Datepicker.date">
              <DateDemo {...shared} />
            </Cell>
            <Cell label="Datepicker.month">
              <Datepicker.month
                color={color}
                size="sm"
                adaptive
                value={TODAY}
                footer={false}
                {...layoutProps}
              />
            </Cell>
            <Cell label="Datepicker.year">
              <Datepicker.year
                color={color}
                size="sm"
                adaptive
                value={TODAY}
                footer={false}
                {...layoutProps}
              />
            </Cell>
            <Cell label="Datepicker.quarter">
              <Datepicker.quarter
                color={color}
                size="sm"
                adaptive
                value={TODAY}
                footer={false}
                {...layoutProps}
              />
            </Cell>
            <Cell label="Datepicker.week">
              <Datepicker.week
                color={color}
                size="sm"
                variant="solid"
                adaptive
                showWeekNumbers
                firstDayOfWeek="monday"
                footer={false}
                {...layoutProps}
              />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={480}>
        <Section
          title="Header — navigation"
          description={`navigation: "none" | "prev-next" | "prev-next-today"`}
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {HEADER_NAVIGATION.map((item) => (
              <Cell key={item.label} label={item.label}>
                <DateDemo {...shared} header={item.header} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={520}>
        <Section
          title="Header — context"
          description={`context: "month-year" | "month" | "year" | "selected-date"`}
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {HEADER_CONTEXT.map((item) => (
              <Cell key={item.label} label={item.label}>
                <DateDemo {...shared} header={item.header} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={560}>
        <Section
          title="Header — context interaction"
          description={`contextInteraction: "static" | "picker" | "dropdown" | "month-dropdown" | "year-dropdown"`}
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {HEADER_INTERACTION.map((item) => (
              <Cell key={item.label} label={item.label}>
                <DateDemo {...shared} header={item.header} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={720}>
        <Section
          title="Header — actions"
          description="Text actions are width-clamped at resolve time: year arrows forced off, xs drops actions, sm max 1, base+ max 2 (three never fits). Overflowing configs are coerced — they do not clip."
        >
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {HEADER_ACTIONS.map((item) => (
              <Cell key={item.label} label={item.label}>
                <DateDemo {...shared} size={item.size} header={item.header} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={520}>
        <Section
          title="Header — density"
          description="Visual spacing only. Does not change behavior."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {HEADER_DENSITY.map((item) => (
              <Cell key={item.label} label={item.label}>
                <DateDemo {...shared} header={item.header} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={480}>
        <Section
          title="Header — align"
          description={`align: "start" | "center" | "between"`}
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {HEADER_ALIGN.map((item) => (
              <Cell key={item.label} label={item.label}>
                <DateDemo {...shared} header={item.header} />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={420}>
        <Section
          title="Header — year navigation"
          description="Year/decade arrows alongside month arrows. Ignored when navigation is none."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="yearNavigation true">
              <DateDemo {...shared} header={{ yearNavigation: true }} />
            </Cell>
            <Cell label="yearNavigation false">
              <DateDemo {...shared} header={{ yearNavigation: false }} />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={520}>
        <Section
          title="Footer JSON"
          description="Zones (start / center / end) hold action ids. layout only arranges those zones."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="hidden">
              <Datepicker.date
                color={color}
                size="sm"
                adaptive
                defaultValue={TODAY}
                footer={false}
                {...layoutProps}
              />
            </Cell>
            <Cell label="today">
              <Datepicker.date
                color={color}
                size="sm"
                adaptive
                defaultValue={TODAY}
                footer={{ layout: "split", center: ["today"] }}
                {...layoutProps}
              />
            </Cell>
            <Cell label="clear + apply">
              <Datepicker.date
                color={color}
                size="sm"
                adaptive
                defaultValue={TODAY}
                footer={{ layout: "split", end: ["clear", "apply"] }}
                {...layoutProps}
              />
            </Cell>
            <Cell label="minimal">
              <Datepicker.date
                color={color}
                size="sm"
                adaptive
                defaultValue={TODAY}
                footer={{ layout: "minimal", center: ["today"] }}
                {...layoutProps}
              />
            </Cell>
            <Cell label="selectionSummary">
              <Datepicker.date
                color={color}
                size="sm"
                adaptive
                defaultValue={TODAY}
                footer={{
                  layout: "split",
                  start: ["selectionSummary"],
                  end: ["clear"],
                }}
                {...layoutProps}
              />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={480}>
        <Section
          title="Constraints"
          description="Booking windows and disabled islands. Days stay visible when blocked."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="minDate + maxDate">
              <DateDemo
                {...shared}
                minDate={TODAY}
                maxDate={addDays(TODAY, 45)}
              />
            </Cell>
            <Cell label="disableDateRanges">
              <DateDemo
                {...shared}
                disableDateRanges={[
                  { from: addDays(TODAY, 8), to: addDays(TODAY, 14) },
                ]}
              />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={720}>
        <Section
          title="Dual Mode"
          description="Date grid on the left, month/year on the right. Same header JSON as single mode — picker/dropdown stay in the dual layout."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="default">
              <DateDemo {...shared} dualMode />
            </Cell>
            <Cell label="picker + actions">
              <DateDemo
                {...shared}
                dualMode
                header={{
                  navigation: "prev-next",
                  context: "month-year",
                  contextInteraction: "picker",
                  yearNavigation: false,
                  actions: ["today", "clear"],
                  density: "compact",
                }}
              />
            </Cell>
            <Cell label="dropdown">
              <DateDemo
                {...shared}
                dualMode
                header={{
                  navigation: "prev-next",
                  context: "month-year",
                  contextInteraction: "dropdown",
                  yearNavigation: false,
                }}
              />
            </Cell>
            <Cell label="header hidden">
              <DateDemo {...shared} dualMode header={false} />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={480}>
        <Section
          title="Weekday Format"
          description="Header labels: S, Su, or Sun."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="narrow">
              <DateDemo {...shared} weekdayFormat="narrow" />
            </Cell>
            <Cell label="short">
              <DateDemo {...shared} weekdayFormat="short" />
            </Cell>
            <Cell label="abbreviated">
              <DateDemo {...shared} weekdayFormat="abbreviated" />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={420}>
        <Section
          title="First Day of Week"
          description="Sunday-start vs Monday-start grids."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="sunday">
              <DateDemo {...shared} firstDayOfWeek="sunday" />
            </Cell>
            <Cell label="monday">
              <DateDemo {...shared} firstDayOfWeek="monday" />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={420}>
        <Section
          title="States"
          description="Non-interactive calendars keep their selected value."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Cell label="disabled">
              <DateDemo {...shared} disabled />
            </Cell>
            <Cell label="readOnly">
              <DateDemo {...shared} readOnly />
            </Cell>
          </div>
        </Section>
      </LazySection>

      <LazySection estimatedHeight={520}>
        <Section
          title="Semantic Colors"
          description="Toolbar color still applies elsewhere. This row is a fixed semantic set."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {SEMANTIC_COLORS.map((swatch) => (
              <Cell key={swatch} label={swatch}>
                <Datepicker.date
                  color={swatch}
                  size="sm"
                  variant="solid"
                  appearance="strong"
                  adaptive
                  defaultValue={TODAY}
                  footer={false}
                  {...layoutProps}
                />
              </Cell>
            ))}
          </div>
        </Section>
      </LazySection>
    </>
  );
}
