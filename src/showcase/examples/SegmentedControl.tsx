// @ts-nocheck
// Ported from origin/segmentedcontrol:src/components/SegmentedControl/stories/SegmentedControl.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/segmentedcontrol:src/components/SegmentedControl/stories/SegmentedControl.stories.tsx
import React, { useState } from "react";
import { SegmentedControl } from "@inventive-ui/components/SegmentedControl";
import type { SegmentedControlProps, SegmentedItemConfig } from "@inventive-ui/components/SegmentedControl";
import { cn } from "@inventive-ui/framework";

import {
  LazySection,
  getStorybookAccentColorKeys,
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_HEADER_WRAP_CLASS,
  SHOWCASE_ROW_CLASS,
  SHOWCASE_SCROLL_X_CLASS,
  SHOWCASE_SECTION_CLASS,
  SHOWCASE_SECTION_DESC_CLASS,
  SHOWCASE_SECTION_TITLE_CLASS,
  SHOWCASE_SUBTITLE_CLASS,
  SHOWCASE_TITLE_CLASS,
} from "../storybook";
import { ShowcaseTable } from "../story-helpers/SegmentedControl/showcase-layout";

// Stand-in for Storybook's useGlobals(): toolbar globals live in local state here.
function useLocalGlobals() {
  const [globals, setGlobalsState] = useState<Record<string, any>>({});
  const setGlobals = React.useCallback(
    (newGlobals: Record<string, any>) => setGlobalsState((prev) => ({ ...prev, ...newGlobals })),
    [],
  );
  return [globals, setGlobals] as const;
}

const SHOWCASE_SIZES = ["xs", "sm", "base", "lg", "xl"] as const;

const SHOWCASE_APPEARANCES = ["soft", "strong", "dualTone"] as const;

const SHOWCASE_CONTAINER_VARIANTS = [
  "solid",
  "solid-outline",
  "outline",
  "ghost",
] as const;

const SHOWCASE_SEMANTIC_COLORS = [
  "brand",
  "neutral",
  "success",
  "warning",
  "danger",
  "info",
] as const;

const SPECIMEN_ROW_CLASS = cn(SHOWCASE_ROW_CLASS, "items-start gap-8");

const SPECIMEN_CLASS = "flex flex-col items-start gap-3";

const SPECIMEN_LABEL_CLASS =
  "text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300";

const SPECIMEN_DETAIL_CLASS = "text-xs text-neutral-500 dark:text-neutral-400";

const GROUP_LABEL_CLASS =
  "text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400";

const PROSE_CLASS = "text-sm text-neutral-600 dark:text-neutral-400";

const STRONG_TEXT_CLASS =
  "text-sm font-medium text-neutral-900 dark:text-neutral-100";

// The page colour in both themes, edged by its border: a raised dark card
// would match the solid container's dark:bg-neutral-900 and swallow it.

const CARD_CLASS =
  "rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-950";
/** Stands in for a placeholder thumbnail in the in-context demos. */

const THUMB_CLASS = "rounded bg-neutral-100 dark:bg-neutral-800";
/** The page surface, outlined — follows the toolbar's light/dark mode. */

const PAGE_PANEL_CLASS =
  "rounded-lg border border-neutral-200 p-4 dark:border-neutral-700";
/** Forces dark mode on its contents, so a dark surface shows in either theme. */

const DARK_PANEL_CLASS =
  "dark rounded-lg border border-neutral-700 bg-neutral-950 p-4";

const BUTTON_CLASS =
  "inline-flex cursor-pointer items-center rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700";

const PILL_CLASS =
  "cursor-pointer rounded-full border px-3.5 py-1 text-sm transition-colors";

const PILL_IDLE_CLASS =
  "border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800";

const PILL_ACTIVE_CLASS =
  "border-neutral-900 bg-neutral-900 font-semibold text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900";

/** Matrix cells — the same treatment as the shared ShowcaseTable. */

const MATRIX_CELL_BORDER_CLASS =
  "border border-neutral-200 dark:border-neutral-700";

const MATRIX_HEAD_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "bg-neutral-100 px-4 py-2 text-center text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
);

const MATRIX_ROW_HEAD_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "bg-neutral-100 px-4 py-3 text-start text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
);

const MATRIX_CELL_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "px-6 py-4 text-center align-middle",
);

// ─── Showcase — data ─────────────────────────────────────────────────────────

const PERIOD_ITEMS: SegmentedItemConfig[] = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];

const NAV_ITEMS: SegmentedItemConfig[] = [
  {
    value: "home",
    label: "Home",
    prefix: { type: "icon" as const, name: "@home" },
  },
  {
    value: "search",
    label: "Search",
    prefix: { type: "icon" as const, name: "@search" },
  },
  {
    value: "settings",
    label: "Settings",
    prefix: { type: "icon" as const, name: "@settings" },
  },
];

const VIEW_ITEMS: SegmentedItemConfig[] = [
  {
    value: "list",
    icon: { type: "icon" as const, name: "@list" },
    "aria-label": "List view",
  },
  {
    value: "grid",
    icon: { type: "icon" as const, name: "@grid" },
    "aria-label": "Grid view",
  },
  {
    value: "table",
    icon: { type: "icon" as const, name: "@table" },
    "aria-label": "Table view",
  },
];

/** Uneven label widths, so the sliding fill visibly resizes on its way. */

const FILTER_ITEMS: SegmentedItemConfig[] = [
  { value: "all", label: "All" },
  { value: "unread", label: "Unread" },
  { value: "mentions", label: "Mentions & replies" },
  { value: "archived", label: "Archived" },
];

// Read from iui.config directly: the runtime palette registry is still
// half-built when story modules evaluate. White and black have their own group.

const ACCENT_PALETTES = getStorybookAccentColorKeys().filter(
  (palette) => palette !== "white" && palette !== "black",
);

const ANATOMY: [term: string, definition: string, props: string][] = [
  [
    "Container",
    'The role="radiogroup" surface — background, border and padding.',
    "containerVariant · rounded · spacing",
  ],
  [
    "Segment",
    'One button per item with role="radio": solid when selected, ghost otherwise.',
    "items",
  ],
  [
    "Selection",
    "The selected segment's fill. It slides to the new segment on change.",
    "appearance · color · animated",
  ],
  [
    "Separator",
    "A divider between neighbouring segments.",
    "withSeparator · separatorComponent",
  ],
  [
    "Slots",
    "An icon-only segment, or an icon before or after a label.",
    "item.icon · item.prefix · item.suffix",
  ],
];

const KEYBOARD_ROWS = [
  {
    key: "tab",
    label: "Tab",
    behaviour:
      "Moves focus into the group on the selected segment — or the first enabled one — and out again. The group is a single tab stop.",
  },
  {
    key: "next",
    label: "→ / ↓",
    behaviour:
      "Selects the next enabled segment, wrapping at the end. → in a horizontal control, ↓ in a vertical one.",
  },
  {
    key: "previous",
    label: "← / ↑",
    behaviour:
      "Selects the previous enabled segment, wrapping at the start. ← in a horizontal control, ↑ in a vertical one.",
  },
  {
    key: "home",
    label: "Home",
    behaviour: "Selects the first enabled segment.",
  },
  { key: "end", label: "End", behaviour: "Selects the last enabled segment." },
];

// ─── Showcase — building blocks ──────────────────────────────────────────────

/** The toolbar colour, handed to every live control below. */

const ShowcaseColorContext = React.createContext<string | undefined>(undefined);

type LiveProps = Omit<SegmentedControlProps, "cTag">;

/**
 * A live control in the toolbar colour. Declared at module scope so a
 * re-render of the page keeps each control mounted — and its selection with
 * it. Uncontrolled unless the caller passes `value`. Adaptive, as in the
 * Default story, so the page follows the toolbar's dark mode; only the
 * Adaptive section turns it off.
 */

const Live = (props: LiveProps) => {
  const color = React.useContext(ShowcaseColorContext);
  return <SegmentedControl cTag="showcase" color={color} adaptive {...props} />;
};

const SpecimenCaption = ({
  label,
  detail,
}: {
  label: string;
  detail?: string;
}) => (
  <div className="flex flex-col gap-0.5">
    <span className={SPECIMEN_LABEL_CLASS}>{label}</span>
    {detail ? <span className={SPECIMEN_DETAIL_CLASS}>{detail}</span> : null}
  </div>
);

const Specimen = ({
  label,
  detail,
  ...props
}: LiveProps & { label: string; detail?: string }) => (
  <div className={SPECIMEN_CLASS}>
    <SpecimenCaption label={label} detail={detail} />
    <Live aria-label={label} {...props} />
  </div>
);

const ShowcaseSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <section className={SHOWCASE_SECTION_CLASS}>
    <div>
      <h2 className={SHOWCASE_SECTION_TITLE_CLASS}>{title}</h2>
      <p className={SHOWCASE_SECTION_DESC_CLASS}>{description}</p>
    </div>
    {children}
  </section>
);

/** ShowcaseTable's grid without its heading, for sections with a picker above. */

function Matrix<Row extends string, Column extends string>({
  rowHeaderLabel,
  rows,
  columns,
  renderCell,
}: {
  rowHeaderLabel: string;
  rows: readonly Row[];
  columns: readonly Column[];
  renderCell: (row: Row, column: Column) => React.ReactNode;
}) {
  return (
    <div className={SHOWCASE_SCROLL_X_CLASS}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className={cn(MATRIX_HEAD_CLASS, "text-start")}>
              {rowHeaderLabel}
            </th>
            {columns.map((column) => (
              <th key={column} className={MATRIX_HEAD_CLASS}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <th scope="row" className={MATRIX_ROW_HEAD_CLASS}>
                {row}
              </th>
              {columns.map((column) => (
                <td key={column} className={MATRIX_CELL_CLASS}>
                  <div className="inline-flex">{renderCell(row, column)}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const THEME_KEY_TO_GLOBAL: Record<string, string> = {
  radius: "globalRadius",
  spacing: "globalSpacing",
  font: "globalFont",
};

type UpdateGlobals = (newGlobals: Record<string, any>) => void;

/** Writes a toolbar global, so every control on the page follows the choice. */

const ThemeOptionPills = ({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: readonly string[];
  selected: string;
  onSelect: (option: string) => void;
}) => (
  <div role="group" aria-label={label} className="flex flex-wrap gap-2">
    {options.map((option) => (
      <button
        key={option}
        type="button"
        aria-pressed={selected === option}
        onClick={() => onSelect(option)}
        className={cn(
          PILL_CLASS,
          selected === option ? PILL_ACTIVE_CLASS : PILL_IDLE_CLASS,
        )}
      >
        {option}
      </button>
    ))}
  </div>
);

// Interactive section — updates Storybook globals so ThemeDecorator handles setGlobalTheme

function ThemePreviewSection({
  label,
  desc,
  options,
  defaultOption,
  themeKey,
  globals,
  updateGlobals,
}: {
  label: string;
  desc: string;
  options: string[];
  defaultOption: string;
  themeKey: "radius" | "spacing" | "font";
  globals: Record<string, any>;
  updateGlobals: UpdateGlobals;
}) {
  const globalKey = THEME_KEY_TO_GLOBAL[themeKey];
  const selected = (globals[globalKey] as string) || defaultOption;

  return (
    <ShowcaseSection title={label} description={desc}>
      <ThemeOptionPills
        label={label}
        options={options}
        selected={selected}
        onSelect={(option) => updateGlobals({ [globalKey]: option })}
      />
      <div className={cn(SPECIMEN_ROW_CLASS, "items-end")}>
        <Live items={NAV_ITEMS} defaultValue="home" aria-label="Sections" />
        <Live
          items={PERIOD_ITEMS}
          defaultValue="week"
          containerVariant="solid-outline"
          aria-label="Period"
        />
        <Live items={VIEW_ITEMS} defaultValue="list" aria-label="View" />
      </div>
    </ShowcaseSection>
  );
}

function RadiusModeSection({
  globals,
  updateGlobals,
}: {
  globals: Record<string, any>;
  updateGlobals: UpdateGlobals;
}) {
  const selectedRadius = (globals.globalRadius as string) || "md";

  return (
    <ShowcaseSection
      title="Radius mode"
      description="auto rounds only the outer corners of the first and last segments; uniform gives every segment the same radius. Pick a toolbar radius to compare them."
    >
      <ThemeOptionPills
        label="Radius"
        options={["none", "sm", "md", "lg", "full"]}
        selected={selectedRadius}
        onSelect={(radius) => updateGlobals({ globalRadius: radius })}
      />
      <Matrix
        rowHeaderLabel="Orientation"
        rows={["horizontal", "vertical"] as const}
        columns={["auto", "uniform"] as const}
        renderCell={(orientation, radiusMode) => (
          <Live
            items={PERIOD_ITEMS}
            defaultValue="week"
            orientation={orientation}
            radiusMode={radiusMode}
            aria-label={`${orientation} ${radiusMode}`}
          />
        )}
      />
    </ShowcaseSection>
  );
}

/** Steps two controls through the same selections, with and without the slide. */

function SlidingComparison() {
  const [value, setValue] = useState<string | number>("all");
  const selectNext = () =>
    setValue((current) => {
      const index = FILTER_ITEMS.findIndex((item) => item.value === current);
      return FILTER_ITEMS[(index + 1) % FILTER_ITEMS.length].value!;
    });

  return (
    <div className="flex flex-col items-start gap-6">
      <button type="button" className={BUTTON_CLASS} onClick={selectNext}>
        Select next
      </button>
      <div className={SPECIMEN_ROW_CLASS}>
        <Specimen
          label="animated"
          detail="Default — the fill travels to the new segment"
          items={FILTER_ITEMS}
          value={value}
          onChange={setValue}
        />
        <Specimen
          label="animated={false}"
          detail="The fill swaps in place"
          items={FILTER_ITEMS}
          value={value}
          onChange={setValue}
          animated={false}
        />
        <Specimen
          label="vertical"
          detail="The slide follows the orientation"
          items={FILTER_ITEMS}
          value={value}
          onChange={setValue}
          orientation="vertical"
        />
      </div>
    </div>
  );
}

// ─── Showcase — in context ───────────────────────────────────────────────────

function PricingCard() {
  const [period, setPeriod] = useState<string | number>("monthly");
  const yearly = period === "yearly";

  return (
    <div className={cn(CARD_CLASS, "flex w-72 flex-col gap-4")}>
      <Live
        fullWidth
        size="sm"
        items={[
          { value: "monthly", label: "Monthly" },
          { value: "yearly", label: "Yearly" },
        ]}
        value={period}
        onChange={setPeriod}
        aria-label="Billing period"
      />
      <div className="space-y-1">
        <p className={STRONG_TEXT_CLASS}>Pro</p>
        <p className="flex items-baseline gap-1">
          <span className="text-3xl font-bold tabular-nums text-neutral-900 dark:text-neutral-100">
            {yearly ? "$120" : "$12"}
          </span>
          <span className={PROSE_CLASS}>/ {yearly ? "year" : "month"}</span>
        </p>
        <p className={SPECIMEN_DETAIL_CLASS}>
          {yearly
            ? "Two months free, billed once a year"
            : "Billed monthly, cancel anytime"}
        </p>
      </div>
    </div>
  );
}

const VISITORS: Record<string, [total: string, change: string]> = {
  day: ["1,284", "+4% on yesterday"],
  week: ["8,902", "+11% on last week"],
  month: ["36,410", "−2% on last month"],
  year: ["412,077", "+38% on last year"],
};

function VisitorsCard() {
  const [range, setRange] = useState<string | number>("week");
  const [total, change] = VISITORS[range];

  return (
    <div className={cn(CARD_CLASS, "flex w-80 flex-col gap-4")}>
      <div className="flex items-center justify-between gap-4">
        <p className={STRONG_TEXT_CLASS}>Visitors</p>
        <Live
          size="xs"
          containerVariant="ghost"
          items={[
            { value: "day", label: "D", "aria-label": "Day" },
            { value: "week", label: "W", "aria-label": "Week" },
            { value: "month", label: "M", "aria-label": "Month" },
            { value: "year", label: "Y", "aria-label": "Year" },
          ]}
          value={range}
          onChange={setRange}
          aria-label="Range"
        />
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold tabular-nums text-neutral-900 dark:text-neutral-100">
          {total}
        </p>
        <p className={SPECIMEN_DETAIL_CLASS}>{change}</p>
      </div>
    </div>
  );
}

const FILES = [
  { name: "Q3 report.pdf", size: "2.4 MB", edited: "Today" },
  { name: "Roadmap.fig", size: "8.1 MB", edited: "Yesterday" },
  { name: "Invoices.xlsx", size: "640 KB", edited: "Mon" },
  { name: "Notes.md", size: "12 KB", edited: "Sep 2" },
];

function FileBrowserCard() {
  const [view, setView] = useState<string | number>("list");

  return (
    <div className={cn(CARD_CLASS, "flex w-96 flex-col gap-4")}>
      <div className="flex items-center justify-between gap-4">
        <p className={STRONG_TEXT_CLASS}>Files</p>
        <Live
          size="sm"
          containerVariant="outline"
          items={VIEW_ITEMS}
          value={view}
          onChange={setView}
          aria-label="View"
        />
      </div>
      {view === "grid" ? (
        <div className="grid grid-cols-2 gap-3">
          {FILES.map((file) => (
            <div key={file.name} className="flex flex-col gap-2">
              <div className={cn(THUMB_CLASS, "h-16")} />
              <span className={cn(STRONG_TEXT_CLASS, "truncate")}>
                {file.name}
              </span>
            </div>
          ))}
        </div>
      ) : view === "table" ? (
        <table className="w-full text-start text-sm">
          <thead>
            <tr className={SPECIMEN_DETAIL_CLASS}>
              <th className="py-1 text-start font-medium">Name</th>
              <th className="py-1 text-end font-medium">Size</th>
              <th className="py-1 text-end font-medium">Edited</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
            {FILES.map((file) => (
              <tr key={file.name}>
                <td className={cn(STRONG_TEXT_CLASS, "py-2")}>{file.name}</td>
                <td className={cn(PROSE_CLASS, "py-2 text-end tabular-nums")}>
                  {file.size}
                </td>
                <td className={cn(PROSE_CLASS, "py-2 text-end")}>
                  {file.edited}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className="m-0 list-none divide-y divide-neutral-200 p-0 dark:divide-neutral-700">
          {FILES.map((file) => (
            <li key={file.name} className="flex items-center gap-3 py-2">
              <div className={cn(THUMB_CLASS, "h-8 w-8 shrink-0")} />
              <span className={cn(STRONG_TEXT_CLASS, "flex-1 truncate")}>
                {file.name}
              </span>
              <span className={cn(PROSE_CLASS, "tabular-nums")}>
                {file.size}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const SETTINGS_PAGES: Record<string, [title: string, body: string]> = {
  general: ["General", "Workspace name, language and time zone."],
  notifications: [
    "Notifications",
    "Choose which events email you and which only appear in the app.",
  ],
  privacy: ["Privacy", "Who can see your profile, activity and files."],
};

function SettingsCard() {
  const [page, setPage] = useState<string | number>("general");
  const [title, body] = SETTINGS_PAGES[page];

  return (
    <div className={cn(CARD_CLASS, "flex w-full max-w-md gap-5")}>
      <div className="w-40 shrink-0">
        <Live
          orientation="vertical"
          fullWidth
          appearance="soft"
          containerVariant="ghost"
          size="sm"
          items={[
            {
              value: "general",
              label: "General",
              prefix: { type: "icon" as const, name: "@settings" },
            },
            {
              value: "notifications",
              label: "Notifications",
              prefix: { type: "icon" as const, name: "@bell" },
            },
            {
              value: "privacy",
              label: "Privacy",
              prefix: { type: "icon" as const, name: "@lock" },
            },
          ]}
          value={page}
          onChange={setPage}
          aria-label="Settings"
        />
      </div>
      <div className="min-w-0 space-y-1">
        <p className={STRONG_TEXT_CLASS}>{title}</p>
        <p className={PROSE_CLASS}>{body}</p>
      </div>
    </div>
  );
}

// ─── Showcase ────────────────────────────────────────────────────────────────

// --- story: Showcase ---
export default function SegmentedControlShowcase() {
  const [globals, setGlobals] = useLocalGlobals();

    const theme = getShowcaseTheme(globals);
    // const [, setGlobals] = useGlobals(); -> useLocalGlobals() above
    const updateToolbarGlobals: UpdateGlobals = React.useCallback(
      (newGlobals) => setGlobals(newGlobals),
      [setGlobals],
    );

    return (
      <ShowcaseColorContext.Provider value={theme.color}>
        <ShowcaseShell
          globals={globals}
          className={cn(
            SHOWCASE_CONTAINER_CLASS,
            "w-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100",
          )}
        >
          <div className={SHOWCASE_HEADER_WRAP_CLASS}>
            <h1 className={SHOWCASE_TITLE_CLASS}>SegmentedControl Showcase</h1>
            <p className={SHOWCASE_SUBTITLE_CLASS}>
              Reference for the container, its segments and how the selection
              moves between them. Every control here is live — click a segment
              or use the arrow keys. Controls without their own radius or
              density follow the toolbar (now {theme.radius} radius,{" "}
              {theme.spacing} spacing).
            </p>
          </div>

          {/* Anatomy */}
          <LazySection>
            <ShowcaseSection
              title="Anatomy"
              description="A radio group drawn as one surface. Only the items are required."
            >
              <div className={SPECIMEN_ROW_CLASS}>
                <Live
                  items={NAV_ITEMS}
                  defaultValue="search"
                  withSeparator
                  aria-label="Anatomy example"
                />
                <dl className="flex max-w-xl flex-col gap-3 text-sm">
                  {ANATOMY.map(([term, definition, props]) => (
                    <div key={term} className="flex gap-4">
                      <dt className="w-24 shrink-0 font-semibold text-neutral-900 dark:text-neutral-100">
                        {term}
                      </dt>
                      <dd className="m-0 flex flex-col gap-0.5">
                        <span className={PROSE_CLASS}>{definition}</span>
                        <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                          {props}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Sliding selection */}
          <LazySection>
            <ShowcaseSection
              title="Sliding selection"
              description="On change the fill slides from the old segment to the new one, resizing and reshaping its corners on the way; a second click mid-slide re-targets it from where it is. It is skipped under prefers-reduced-motion, while disabled or loading, and on the first selection."
            >
              <SlidingComparison />
            </ShowcaseSection>
          </LazySection>

          {/* Sizes */}
          <LazySection>
            <ShowcaseSection
              title="Sizes"
              description="size scales the segment height, padding, label and icons together."
            >
              <div className="flex flex-col items-start gap-4">
                {SHOWCASE_SIZES.map((size) => (
                  <div key={size} className="flex items-center gap-6">
                    <span className={cn(SPECIMEN_LABEL_CLASS, "w-10 shrink-0")}>
                      {size}
                    </span>
                    <Live
                      items={NAV_ITEMS}
                      size={size}
                      defaultValue="home"
                      aria-label={`Sections, ${size}`}
                    />
                    <Live
                      items={VIEW_ITEMS}
                      size={size}
                      defaultValue="list"
                      aria-label={`View, ${size}`}
                    />
                  </div>
                ))}
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Appearance × container */}
          <LazySection>
            <ShowcaseTable
              title="Appearance × container"
              description="appearance sets how the selected segment is filled; containerVariant styles the surface around the segments. The two are independent."
              rowHeaderLabel="Appearance"
              rows={SHOWCASE_APPEARANCES.map((key) => ({ key, label: key }))}
              columns={SHOWCASE_CONTAINER_VARIANTS.map((key) => ({
                key,
                label: key,
              }))}
              renderCell={(appearance, containerVariant) => (
                <div className="inline-flex">
                  <Live
                    items={PERIOD_ITEMS}
                    size="sm"
                    defaultValue="week"
                    appearance={appearance}
                    containerVariant={containerVariant}
                    aria-label={`${appearance} on ${containerVariant}`}
                  />
                </div>
              )}
            />
          </LazySection>

          {/* Unselected state */}
          <LazySection>
            <ShowcaseTable
              title="Unselected state"
              description="neutral keeps the idle segments and the container grey whatever the color; semantic tints them with it. Hover an idle segment to compare."
              rowHeaderLabel="Appearance"
              rows={SHOWCASE_APPEARANCES.map((key) => ({ key, label: key }))}
              columns={(["neutral", "semantic"] as const).map((key) => ({
                key,
                label: key,
              }))}
              renderCell={(appearance, unselectedState) => (
                <div className="inline-flex">
                  <Live
                    items={PERIOD_ITEMS}
                    size="sm"
                    defaultValue="week"
                    appearance={appearance}
                    unselectedState={unselectedState}
                    aria-label={`${appearance}, ${unselectedState} unselected`}
                  />
                </div>
              )}
            />
          </LazySection>

          {/* Colour */}
          <LazySection>
            <ShowcaseSection
              title="Colour"
              description="color tints the selected segment. Semantic palettes first, then the accent palettes from the theme config."
            >
              {(
                [
                  ["Semantic", SHOWCASE_SEMANTIC_COLORS],
                  ["Accent", ACCENT_PALETTES],
                  ["Neutral extremes", ["white", "black"]],
                ] as const
              ).map(([group, palettes]) =>
                palettes.length ? (
                  <div key={group} className="space-y-3">
                    <p className={GROUP_LABEL_CLASS}>{group}</p>
                    <div className={cn(SHOWCASE_ROW_CLASS, "gap-6")}>
                      {palettes.map((color) => (
                        <Specimen
                          key={color}
                          label={color}
                          color={color}
                          items={PERIOD_ITEMS}
                          size="sm"
                          defaultValue="week"
                        />
                      ))}
                    </div>
                  </div>
                ) : null,
              )}
            </ShowcaseSection>
          </LazySection>

          {/* Content */}
          <LazySection>
            <ShowcaseSection
              title="Content"
              description="Segments size to their content. An icon-only segment has no label to name it, so each item needs its own aria-label."
            >
              <div className={SPECIMEN_ROW_CLASS}>
                <Specimen
                  label="Label"
                  items={PERIOD_ITEMS}
                  defaultValue="week"
                />
                <Specimen
                  label="Icon + label"
                  detail="item.prefix"
                  items={NAV_ITEMS}
                  defaultValue="home"
                />
                <Specimen
                  label="Icon only"
                  detail="item.icon + item.aria-label"
                  items={VIEW_ITEMS}
                  defaultValue="grid"
                />
                <Specimen
                  label="Mixed widths"
                  items={FILTER_ITEMS}
                  defaultValue="unread"
                />
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Selection indicator */}
          <LazySection>
            <ShowcaseSection
              title="Selection indicator"
              description="selectionIndicator adds a check before or after the selected segment's label."
            >
              <div className={SPECIMEN_ROW_CLASS}>
                {(["none", "start", "end"] as const).map((indicator) => (
                  <Specimen
                    key={indicator}
                    label={indicator}
                    items={PERIOD_ITEMS}
                    defaultValue="week"
                    selectionIndicator={indicator}
                  />
                ))}
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Separators */}
          <LazySection>
            <ShowcaseSection
              title="Separators"
              description="withSeparator draws a divider between every neighbouring pair, whichever segment is selected, on any container."
            >
              <div className={SPECIMEN_ROW_CLASS}>
                <Specimen label="Off" items={PERIOD_ITEMS} defaultValue="day" />
                {PERIOD_ITEMS.map((item) => (
                  <Specimen
                    key={item.value}
                    label={`${item.label} selected`}
                    items={PERIOD_ITEMS}
                    defaultValue={item.value}
                    withSeparator
                  />
                ))}
              </div>
              <div className={SPECIMEN_ROW_CLASS}>
                {SHOWCASE_CONTAINER_VARIANTS.map((containerVariant) => (
                  <Specimen
                    key={containerVariant}
                    label={containerVariant}
                    items={PERIOD_ITEMS}
                    defaultValue="week"
                    withSeparator
                    containerVariant={containerVariant}
                  />
                ))}
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Orientation & width */}
          <LazySection>
            <ShowcaseSection
              title="Orientation & width"
              description="orientation stacks the segments and switches the arrow keys to ↑/↓. fullWidth stretches the control across its parent and shares the width equally."
            >
              <div className={SPECIMEN_ROW_CLASS}>
                <Specimen
                  label="horizontal"
                  items={NAV_ITEMS}
                  defaultValue="home"
                />
                <Specimen
                  label="vertical"
                  items={NAV_ITEMS}
                  defaultValue="search"
                  orientation="vertical"
                />
                <div className={cn(SPECIMEN_CLASS, "w-full max-w-md")}>
                  <SpecimenCaption
                    label="fullWidth"
                    detail="Inside a 28rem parent, outlined"
                  />
                  <div className="w-full rounded-md border border-dashed border-neutral-300 p-2 dark:border-neutral-600">
                    <Live
                      fullWidth
                      items={PERIOD_ITEMS}
                      defaultValue="week"
                      aria-label="fullWidth"
                    />
                  </div>
                </div>
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Radius mode */}
          <LazySection>
            <RadiusModeSection
              globals={globals}
              updateGlobals={updateToolbarGlobals}
            />
          </LazySection>

          {/* Radius */}
          <LazySection>
            <ThemePreviewSection
              label="Radius"
              desc="Global corner radius — pick an option to preview every control on the page with it."
              options={["none", "sm", "md", "lg", "full"]}
              defaultOption={theme.radius || "md"}
              themeKey="radius"
              globals={globals}
              updateGlobals={updateToolbarGlobals}
            />
          </LazySection>

          {/* Spacing */}
          <LazySection>
            <ThemePreviewSection
              label="Spacing"
              desc="Global density — compact, standard or spacious sets the container padding, the segment padding and the inset corner."
              options={["compact", "standard", "spacious"]}
              defaultOption={theme.spacing || "standard"}
              themeKey="spacing"
              globals={globals}
              updateGlobals={updateToolbarGlobals}
            />
          </LazySection>

          {/* Font */}
          <LazySection>
            <ThemePreviewSection
              label="Font"
              desc="Global font family — pick a typeface to preview how the labels render."
              options={["inter", "arial", "mono"]}
              defaultOption={theme.font || "inter"}
              themeKey="font"
              globals={globals}
              updateGlobals={updateToolbarGlobals}
            />
          </LazySection>

          {/* States */}
          <LazySection>
            <ShowcaseSection
              title="States"
              description="A disabled segment is skipped by the keyboard; disabled and loading block the whole control."
            >
              <div className={SPECIMEN_ROW_CLASS}>
                <Specimen
                  label="Default"
                  items={NAV_ITEMS}
                  defaultValue="home"
                />
                <Specimen
                  label="Item disabled"
                  detail="item.disabled"
                  items={NAV_ITEMS.map((item) =>
                    item.value === "search"
                      ? { ...item, disabled: true }
                      : item,
                  )}
                  defaultValue="home"
                />
                <Specimen
                  label="Disabled"
                  items={NAV_ITEMS}
                  defaultValue="home"
                  disabled
                />
                <Specimen
                  label="Loading"
                  items={NAV_ITEMS}
                  defaultValue="home"
                  loading
                />
                <Specimen
                  label="Loading, icon only"
                  items={VIEW_ITEMS}
                  defaultValue="list"
                  loading
                />
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Adaptive */}
          <LazySection>
            <ShowcaseSection
              title="Adaptive"
              description='Only appearance="strong" reads adaptive — soft and dualTone always follow dark mode. Every other control on this page is adaptive. The right-hand panel forces dark mode on its contents, so the difference shows in either theme.'
            >
              <div className={SPECIMEN_ROW_CLASS}>
                {[false, true].map((adaptive) => (
                  <div key={String(adaptive)} className={SPECIMEN_CLASS}>
                    <SpecimenCaption
                      label={adaptive ? "adaptive" : "adaptive={false}"}
                      detail={
                        adaptive
                          ? "Moves to the dark ramp on a dark surface"
                          : "Default — keeps its light treatment everywhere"
                      }
                    />
                    <div className="flex flex-wrap items-center gap-4">
                      {[PAGE_PANEL_CLASS, DARK_PANEL_CLASS].map((panel) => (
                        <div key={panel} className={panel}>
                          <Live
                            items={PERIOD_ITEMS}
                            defaultValue="week"
                            appearance="strong"
                            adaptive={adaptive}
                            aria-label={`adaptive ${adaptive}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* In context */}
          <LazySection>
            <ShowcaseSection
              title="In context"
              description="A few places a segmented control earns its keep — each one drives the content next to it."
            >
              <div className={cn(SHOWCASE_ROW_CLASS, "items-start gap-6")}>
                <PricingCard />
                <VisitorsCard />
                <FileBrowserCard />
                <SettingsCard />
              </div>
            </ShowcaseSection>
          </LazySection>

          {/* Keyboard */}
          <LazySection>
            <ShowcaseTable
              title="Keyboard"
              description="Selection follows focus, as in a native radio group. Disabled segments are skipped, and a disabled or loading control ignores the keyboard."
              rowHeaderLabel="Key"
              rows={KEYBOARD_ROWS.map(({ key, label }) => ({ key, label }))}
              columns={[
                { key: "behaviour", label: "Behaviour", align: "left" },
              ]}
              renderCell={(row) => (
                <span className={PROSE_CLASS}>
                  {KEYBOARD_ROWS.find(({ key }) => key === row)?.behaviour}
                </span>
              )}
            />
          </LazySection>
        </ShowcaseShell>
      </ShowcaseColorContext.Provider>
    );
  
}
