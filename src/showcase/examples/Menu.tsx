// @ts-nocheck
// Ported from origin/menu:src/components/Menu/stories/Menu.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/menu:src/components/Menu/stories/Menu.stories.tsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn, semanticColors } from "@inventive-ui/framework";
import type { Slot } from "@inventive-ui/framework";
import { Menu } from "@inventive-ui/components/Menu";
import { MenuItem } from "@inventive-ui/components/Menu";
import { MenuList } from "@inventive-ui/components/Menu";
import { getMenuSeparatorClass } from "../story-helpers/Menu/styles";
import { useSlotRenderer } from "@inventive-ui/framework/slots";
import type { MenuItemAppearance, MenuItemData, MenuItemVariant, MenuListProps, MenuPlacement, MenuProps, MenuRadius, MenuSize, MenuSpacing } from "@inventive-ui/components/Menu";
import { LazySection } from "../storybook";
import { ShowcaseTable } from "../story-helpers/Menu/showcase-layout";
import { getStorybookAccentColorKeys } from "../storybook";
import themeConfig from "../../../iui.config";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS, SHOWCASE_HEADER_WRAP_CLASS, SHOWCASE_ROW_CLASS, SHOWCASE_SCROLL_X_CLASS, SHOWCASE_SECTION_CLASS, SHOWCASE_SECTION_DESC_CLASS, SHOWCASE_SECTION_TITLE_CLASS, SHOWCASE_SUBTITLE_CLASS, SHOWCASE_TITLE_CLASS } from "../storybook";

const HEADER_FOOTER_TEXT_CLASS = "text-sm text-neutral-500";

/* -------------------------------------------------------------------------- */
/* Showcase — style constants                                                  */
/* -------------------------------------------------------------------------- */

const SPECIMEN_ROW_CLASS = cn(SHOWCASE_ROW_CLASS, "items-start gap-8");
const SPECIMEN_CLASS = "flex flex-col items-start gap-3";
const SPECIMEN_LABEL_CLASS =
  "text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300";
const SPECIMEN_DETAIL_CLASS = "text-xs text-neutral-500 dark:text-neutral-400";
const PROSE_CLASS = "text-sm text-neutral-600 dark:text-neutral-400";
const MENU_TITLE_TEXT_CLASS =
  "text-sm font-medium text-neutral-900 dark:text-neutral-100";
const MENU_META_TEXT_CLASS = "text-xs text-neutral-500 dark:text-neutral-400";

/** Standalone `MenuList` has no surface of its own — this stands in for one. */
const LIST_CARD_CLASS =
  "rounded-md border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800";

const TRIGGER_CLASS =
  "inline-flex cursor-pointer items-center rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700";

/** Selection-style matrix — the same cell treatment as the shared ShowcaseTable. */
const MATRIX_CELL_BORDER_CLASS =
  "border border-neutral-200 dark:border-neutral-700";
const MATRIX_CORNER_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "bg-neutral-100 px-4 py-2 text-start text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
);
const MATRIX_HEAD_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "bg-neutral-100 px-3 py-2 text-center text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
);
const MATRIX_SUBHEAD_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "bg-neutral-50 px-3 py-1.5 text-center text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400",
);
const MATRIX_ROW_HEAD_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "bg-neutral-100 px-4 py-3 text-start text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
);
const MATRIX_CELL_CLASS = cn(
  MATRIX_CELL_BORDER_CLASS,
  "px-3 py-3 text-center align-middle",
);

/* -------------------------------------------------------------------------- */
/* Showcase — data                                                             */
/* -------------------------------------------------------------------------- */

const icon = (name: string): Slot => ({ type: "icon", name });
const CHEVRON = icon("@chevron-right");

// Glyphs with no `@` alias in assets.config.json are written as literal slot
// objects rather than through `icon()`: the asset scanner only binds a glyph
// it can see as `type: "icon"` beside `name: "…"` in one object, and an
// unbound glyph renders nothing.
const DESKTOP_ICON: Slot = { type: "icon", name: "desktop_windows" };
const SPEAKER_ICON: Slot = { type: "icon", name: "speaker" };
const HEADPHONES_ICON: Slot = { type: "icon", name: "headphones" };
const TODO_ICON: Slot = { type: "icon", name: "radio_button_unchecked" };

const ACTION_ITEMS: MenuItemData[] = [
  { value: "copy", label: "Copy link", prefix: icon("@copy") },
  { value: "share", label: "Share", prefix: icon("@share"), divider: true },
  { value: "delete", label: "Delete", prefix: icon("@trash"), color: "danger" },
];

const ACCOUNT_ITEMS: MenuItemData[] = [
  { value: "profile", label: "Profile", prefix: icon("@user") },
  { value: "settings", label: "Settings", prefix: icon("@settings") },
  {
    value: "notifications",
    label: "Notifications",
    prefix: icon("@notifications"),
    divider: true,
  },
  { value: "help", label: "Help", prefix: icon("@help") },
  {
    value: "logout",
    label: "Log out",
    prefix: icon("@logout"),
    color: "danger",
  },
];

const PLAIN_ITEMS: MenuItemData[] = [
  { value: "rename", label: "Rename" },
  { value: "duplicate", label: "Duplicate" },
  { value: "archive", label: "Archive" },
];

const VISIBILITY_ITEMS: MenuItemData[] = [
  {
    value: "public",
    label: "Public",
    description: { text: "Anyone with the link" },
    prefix: icon("@globe"),
  },
  {
    value: "team",
    label: "Team",
    description: { text: "Members of your workspace" },
    prefix: icon("@user"),
  },
  {
    value: "private",
    label: "Private",
    description: { text: "Only you" },
    prefix: icon("@lock"),
  },
];

const LINK_ITEMS: MenuItemData[] = [
  {
    value: "docs",
    label: "Documentation",
    prefix: icon("@file"),
    suffix: icon("@external-link"),
  },
  {
    value: "changelog",
    label: "Changelog",
    prefix: icon("@history"),
    suffix: icon("@external-link"),
  },
  {
    value: "status",
    label: "System status",
    prefix: icon("@report"),
    suffix: icon("@external-link"),
  },
];

const STATE_ITEMS: MenuItemData[] = [
  { value: "default", label: "Default" },
  { value: "selected", label: "Selected" },
  { value: "disabled", label: "Disabled", disabled: true },
  { value: "loading", label: "Loading", loading: true },
  { value: "danger", label: "Danger colour", color: "danger" },
];

const FOLDER_ITEMS: MenuItemData[] = [
  "Inbox",
  "Drafts",
  "Sent",
  "Archive",
  "Receipts",
  "Travel",
  "Projects",
  "Design",
  "Finance",
  "Hiring",
  "Legal",
  "Personal",
].map((label) => ({
  value: label.toLowerCase(),
  label,
  prefix: icon("@folder"),
}));

/** A check at the end of the selected row — `indicator.type: "icon"` renders only while selected. */
const CHECK_INDICATOR: MenuItemData["indicator"] = {
  type: "icon",
  name: "@check",
  placement: "end",
};

const SORT_ITEMS: MenuItemData[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "name", label: "Name" },
  { value: "size", label: "File size" },
].map((item) => ({
  ...item,
  role: "menuitemradio",
  indicator: CHECK_INDICATOR,
}));

const COLUMN_ITEMS: MenuItemData[] = [
  { value: "owner", label: "Owner" },
  { value: "modified", label: "Last modified" },
  { value: "size", label: "Size" },
  { value: "tags", label: "Tags" },
  { value: "location", label: "Location" },
].map((item) => ({
  ...item,
  role: "menuitemcheckbox",
  indicator: CHECK_INDICATOR,
}));

const FONT_SIZE_ITEMS: MenuItemData[] = [10, 12, 14, 16, 20, 24, 32, 48].map(
  (size) => ({
    value: String(size),
    label: `${size}px`,
    role: "menuitemradio",
    indicator: CHECK_INDICATOR,
  }),
);

const FILE_ITEMS: MenuItemData[] = [
  { value: "new", label: "New file", prefix: icon("@plus") },
  {
    value: "recent",
    label: "Open recent",
    prefix: icon("@history"),
    suffix: CHEVRON,
    items: [
      { value: "q3-report", label: "Q3 report.pdf", prefix: icon("@file") },
      { value: "roadmap", label: "Roadmap.xlsx", prefix: icon("@table") },
      { value: "notes", label: "Meeting notes.md", prefix: icon("@file") },
    ],
  },
  {
    value: "export",
    label: "Export",
    prefix: icon("@upload"),
    suffix: CHEVRON,
    divider: true,
    items: [
      { value: "pdf", label: "As PDF" },
      { value: "csv", label: "As CSV" },
      {
        value: "more-formats",
        label: "More formats",
        suffix: CHEVRON,
        items: [
          { value: "json", label: "As JSON" },
          { value: "xml", label: "As XML" },
        ],
      },
    ],
  },
  { value: "delete", label: "Delete", prefix: icon("@trash"), color: "danger" },
];

const ANATOMY: [term: string, definition: string][] = [
  [
    "Surface",
    "Border, shadow and radius — bordered, rounded, minWidth, maxHeight.",
  ],
  ["Header", "Pinned above the list. Not keyboard-navigable — header."],
  ["Items", "MenuItem rows, rendered through ListItem — items or children."],
  ["Divider", "A separator after a row — divider on the item."],
  ["Footer", "Pinned below the list — footer."],
];

const SIZES: MenuSize[] = ["xs", "sm", "base", "lg", "xl"];
const DENSITIES: MenuSpacing[] = ["compact", "standard", "spacious"];
const RADII: MenuRadius[] = ["none", "sm", "md", "lg", "full"];
const ITEM_VARIANTS: MenuItemVariant[] = [
  "solid",
  "solid-outline",
  "outline",
  "ghost",
];
const ITEM_APPEARANCES: MenuItemAppearance[] = ["strong", "soft", "dualTone"];
const SEMANTIC_PALETTES = Object.keys(semanticColors ?? {});

/**
 * Every palette a row can take, grouped as the theme config groups them:
 * `brand`/`neutral` sit at the top of `theme.colors` beside the `semantic` and
 * `accent` maps, and `semanticColors` holds only the four semantic ones. All
 * three sources are complete when this module is evaluated —
 * `availableColorPalettes` isn't (initFramework grows it later), which would
 * shrink the list to eight — and none include `gray`/`warm`/`cool`, which are
 * safelisted but paint nothing.
 */
const COLOR_GROUPS: { label: string; palettes: string[] }[] = [
  {
    label: "Theme",
    // A palette is a colour, or a `{ set }` seed — which leaves out the
    // `semantic`/`accent` maps and `gradients` beside them.
    palettes: Object.entries(themeConfig.theme?.colors ?? {})
      .filter(
        ([, value]) =>
          typeof value === "string" ||
          (typeof value === "object" && value !== null && "set" in value),
      )
      .map(([key]) => key),
  },
  { label: "Semantic", palettes: SEMANTIC_PALETTES },
  {
    label: "Accent",
    palettes: getStorybookAccentColorKeys().filter(
      (color) => !SEMANTIC_PALETTES.includes(color),
    ),
  },
];

/**
 * Selected, but drawn like any other row — for rows whose control shows the
 * state. `color: "none"` drops the row's fill and tint, but ListItem still
 * picks the indicator and description colours as if the row were filled:
 * `ghost` gets the radio its ring back, and `soft` keeps the description from
 * turning white-on-white.
 */
const QUIET_SELECT_STYLE: MenuItemData["selectStyle"] = {
  variant: "ghost",
  appearance: "soft",
  color: "none",
};

const QUICK_SETTINGS: MenuItemData[] = [
  { value: "dnd", label: "Do not disturb", prefix: icon("@notifications") },
  { value: "previews", label: "Show previews", prefix: icon("@eye") },
  { value: "microphone", label: "Microphone", prefix: icon("@mic") },
  { value: "private", label: "Private mode", prefix: icon("@lock") },
];

const SETUP_STEPS: MenuItemData[] = [
  { value: "workspace", label: "Create a workspace", done: true },
  { value: "team", label: "Invite your team", done: true },
  { value: "repository", label: "Connect a repository", done: true },
  { value: "billing", label: "Set up billing", done: false },
  { value: "publish", label: "Publish a page", done: false },
].map(({ done, ...item }) => ({
  ...item,
  prefix: done ? icon("@check_circle") : TODO_ICON,
}));

const NOTIFICATION_ITEMS: MenuItemData[] = [
  {
    value: "comment",
    label: "Ada commented on Q3 report",
    description: { text: "2 minutes ago" },
    prefix: icon("@message"),
  },
  {
    value: "deploy",
    label: "Production deploy finished",
    description: { text: "15 minutes ago" },
    prefix: icon("@success"),
  },
  {
    value: "invite",
    label: "Grace invited you to Design",
    description: { text: "1 hour ago" },
    prefix: icon("@user"),
  },
];

const AUDIO_DEVICES: MenuItemData[] = [
  { value: "system", label: "System default", prefix: DESKTOP_ICON },
  { value: "headphones", label: "Studio headphones", prefix: HEADPHONES_ICON },
  { value: "speakers", label: "Built-in speakers", prefix: SPEAKER_ICON },
  { value: "virtual", label: "Virtual audio device", prefix: HEADPHONES_ICON },
];

const toLabelItem = (label: string): MenuItemData => ({
  value: label.toLowerCase(),
  label,
  role: "menuitemcheckbox",
  prefix: icon("@tag"),
  indicator: CHECK_INDICATOR,
});

const LABEL_ITEMS = ["Bug", "Feature", "Documentation", "Design"].map(
  toLabelItem,
);

const FORMAT_TOGGLES: MenuItemData[] = [
  { value: "bold", label: "Bold" },
  { value: "italic", label: "Italic" },
  { value: "underline", label: "Underline" },
].map((item) => ({
  ...item,
  role: "menuitemcheckbox",
  indicator: CHECK_INDICATOR,
}));

const INDICATOR_COLUMNS = [
  { key: "none", label: "None" },
  { key: "radio", label: "Radio" },
  { key: "checkbox", label: "Checkbox" },
] as const;

type IndicatorColumn = (typeof INDICATOR_COLUMNS)[number]["key"];

const ALIGN_ITEMS: MenuItemData[] = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
];

/** What each indicator column lists, and how it selects. */
const INDICATOR_SPECIMENS: Record<
  IndicatorColumn,
  { items: MenuItemData[]; selection: SelectionMode; defaultSelected: string[] }
> = {
  none: {
    items: ALIGN_ITEMS,
    selection: "single",
    defaultSelected: ["center"],
  },
  radio: {
    items: ALIGN_ITEMS.map((item) => ({
      ...item,
      role: "menuitemradio",
      indicator: { type: "default" },
    })),
    selection: "single",
    defaultSelected: ["center"],
  },
  checkbox: {
    items: [
      { value: "bold", label: "Bold" },
      { value: "italic", label: "Italic" },
      { value: "strike", label: "Strike" },
    ].map((item) => ({
      ...item,
      role: "menuitemcheckbox",
      indicator: { type: "default" },
    })),
    selection: "multiple",
    defaultSelected: ["bold", "strike"],
  },
};

/** Laid out as the 3×3 grid around an anchor they describe; `null` is the centre. */
const PLACEMENT_GRID: (MenuPlacement | null)[] = [
  "top-start",
  "top",
  "top-end",
  "left-start",
  null,
  "right-start",
  "bottom-start",
  "bottom",
  "bottom-end",
];

type KeyboardRowKey =
  | "arrows"
  | "page"
  | "home-end"
  | "typeahead"
  | "activate"
  | "right"
  | "left"
  | "tab"
  | "escape";

const KEYBOARD_ROWS: {
  key: KeyboardRowKey;
  label: string;
  behaviour: string;
}[] = [
  {
    key: "arrows",
    label: "↓ / ↑",
    behaviour: "Move the highlight one row, wrapping at either end",
  },
  {
    key: "page",
    label: "PageDown / PageUp",
    behaviour: "Move the highlight a page at a time",
  },
  {
    key: "home-end",
    label: "Home / End",
    behaviour: "Jump to the first / last enabled row",
  },
  {
    key: "typeahead",
    label: "Letters",
    behaviour: "Jump to the next row whose label starts with what was typed",
  },
  {
    key: "activate",
    label: "Enter / Space",
    behaviour: "Activate the highlighted row, or open its submenu",
  },
  {
    key: "right",
    label: "→",
    behaviour: "Open the highlighted row's submenu and move into it",
  },
  {
    key: "left",
    label: "←",
    behaviour: "Close the submenu and return to its parent row",
  },
  {
    key: "tab",
    label: "Tab / Shift+Tab",
    behaviour:
      "Move the highlight like ↓ / ↑ — focus stays inside an open menu",
  },
  {
    key: "escape",
    label: "Escape",
    behaviour:
      "Close the innermost submenu; at the root, close the menu and return focus to the trigger",
  },
];

/* -------------------------------------------------------------------------- */
/* Showcase — helpers                                                          */
/* -------------------------------------------------------------------------- */

type SelectionMode = "single" | "multiple";

function useSelection(mode: SelectionMode, initial: string[] = []) {
  const [selected, setSelected] = useState(initial);
  const toggle = useCallback(
    (value: string) =>
      setSelected((prev) => {
        if (mode === "single") return [value];
        return prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value];
      }),
    [mode],
  );
  return [selected, toggle] as const;
}

/**
 * Stamps `selected`/`onClick` onto each leaf row. Submenu triggers are left
 * alone: they aren't selectable, and a leaf picked inside one reaches the
 * trigger's `onClick` with the *leaf's* value.
 */
function withSelection(
  items: MenuItemData[],
  selected: string[],
  onSelect: (value: string) => void,
): MenuItemData[] {
  return items.map((item) =>
    item.items
      ? item
      : {
          ...item,
          selected: selected.includes(item.value ?? item.label),
          onClick: onSelect,
        },
  );
}

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

type StaticMenuProps = Omit<
  MenuProps,
  "open" | "anchorEl" | "onClose" | "items" | "children"
>;

/**
 * A specimen's rows — or a function of what's selected, for rows that show
 * their own state somewhere else too (a switch in the suffix).
 */
type SpecimenItems = MenuItemData[] | ((selected: string[]) => MenuItemData[]);

const resolveItems = (items: SpecimenItems, selected: string[]) =>
  typeof items === "function" ? items(selected) : items;

interface MenuSpecimenProps extends StaticMenuProps {
  label: string;
  detail?: string;
  items?: SpecimenItems;
  selection?: SelectionMode;
  defaultSelected?: string[];
  /** Rendered after `items` — blocks that sit in the list without being rows. */
  children?: React.ReactNode;
}

/**
 * A real `Menu`, held open in the page flow. `Menu` normally portals a
 * `position: fixed` surface beside its `anchorEl`; here it anchors to its own
 * wrapper, renders in place (`disablePortal`) and drops back into the flow
 * through `static`, which wins the class merge over the surface's `fixed`.
 * It never asks to close and never auto-focuses — a page of open menus would
 * otherwise fight over focus — and lets Tab leave (`trapTab: false`) so a
 * keyboard user can walk the page. Rows stay live: hover, arrow keys and
 * clicks all behave as in a real menu.
 */
function MenuSpecimen({
  label,
  detail,
  items = [],
  selection = "single",
  defaultSelected,
  className,
  MenuListProps,
  children,
  ...menuProps
}: MenuSpecimenProps) {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
  const [selected, select] = useSelection(selection, defaultSelected);

  // Resolves to the wrapper exactly once — enough for `Menu` to measure and
  // reveal the surface — then reports no anchor, which `Menu` treats as
  // nothing to reposition. A static surface never moves, and letting every
  // open menu re-measure and re-render on each scroll event took the page
  // from ~8ms to ~210ms a frame.
  const measuredRef = useRef(false);
  const anchorEl = useMemo(
    () => () => {
      if (!wrapper || measuredRef.current) return null;
      measuredRef.current = true;
      return wrapper;
    },
    [wrapper],
  );

  return (
    <div className={SPECIMEN_CLASS}>
      <SpecimenCaption label={label} detail={detail} />
      {/* `flex` so the now-static surface sizes to its content, as the
          fixed one does, instead of stretching to the row. */}
      <div ref={setWrapper} className="flex">
        <Menu
          aria-label={label}
          {...menuProps}
          open
          anchorEl={anchorEl}
          disablePortal
          autoFocus={false}
          className={cn("static", className)}
          MenuListProps={{ trapTab: false, ...MenuListProps }}
          items={withSelection(resolveItems(items, selected), selected, select)}
        >
          {children}
        </Menu>
      </div>
    </div>
  );
}

interface ListSpecimenProps extends Omit<MenuListProps, "items" | "children"> {
  label?: string;
  items: MenuItemData[];
  selection?: SelectionMode;
  defaultSelected?: string[];
}

/** A standalone `MenuList` — the same list `Menu` wraps — on a stand-in surface. */
function ListSpecimen({
  label,
  items,
  selection = "single",
  defaultSelected,
  ...listProps
}: ListSpecimenProps) {
  const [selected, select] = useSelection(selection, defaultSelected);

  return (
    // `inline-flex` so a centred table cell centres the card.
    <div className={cn(SPECIMEN_CLASS, "inline-flex")}>
      {label ? <SpecimenCaption label={label} /> : null}
      <div className={LIST_CARD_CLASS}>
        <MenuList
          aria-label={label}
          {...listProps}
          items={withSelection(items, selected, select)}
        />
      </div>
    </div>
  );
}

/**
 * `selectStyle` across every variant (down) and appearance (across), each
 * shown with no indicator, a radio and a checkbox — the same comparison the
 * ListboxItem showcase makes, on the list `Menu` wraps.
 */
const SelectionStyleMatrix = () => (
  <section className={SHOWCASE_SECTION_CLASS}>
    <div>
      <h2 className={SHOWCASE_SECTION_TITLE_CLASS}>Selection styles</h2>
      <p className={SHOWCASE_SECTION_DESC_CLASS}>
        selectStyle on each row — variant down, appearance across. The radio and
        checkbox come from indicator type "default": a radio, or a checkbox on a
        menuitemcheckbox row.
      </p>
    </div>
    <div className={SHOWCASE_SCROLL_X_CLASS}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th rowSpan={2} className={MATRIX_CORNER_CLASS}>
              Variant
            </th>
            {ITEM_APPEARANCES.map((appearance) => (
              <th
                key={appearance}
                colSpan={INDICATOR_COLUMNS.length}
                className={MATRIX_HEAD_CLASS}
              >
                {appearance}
              </th>
            ))}
          </tr>
          <tr>
            {ITEM_APPEARANCES.flatMap((appearance) =>
              INDICATOR_COLUMNS.map(({ key, label }) => (
                <th
                  key={`${appearance}-${key}`}
                  className={MATRIX_SUBHEAD_CLASS}
                >
                  {label}
                </th>
              )),
            )}
          </tr>
        </thead>
        <tbody>
          {ITEM_VARIANTS.map((variant) => (
            <tr key={variant}>
              <th scope="row" className={MATRIX_ROW_HEAD_CLASS}>
                {variant}
              </th>
              {ITEM_APPEARANCES.flatMap((appearance) =>
                INDICATOR_COLUMNS.map(({ key }) => {
                  const { items, selection, defaultSelected } =
                    INDICATOR_SPECIMENS[key];
                  return (
                    <td
                      key={`${appearance}-${key}`}
                      className={MATRIX_CELL_CLASS}
                    >
                      <ListSpecimen
                        aria-label={`${variant} ${appearance} ${key}`}
                        size="sm"
                        selection={selection}
                        items={items.map((item) => ({
                          ...item,
                          selectStyle: { variant, appearance },
                        }))}
                        defaultSelected={defaultSelected}
                      />
                    </td>
                  );
                }),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

interface MenuTriggerProps extends StaticMenuProps {
  label: string;
  items: MenuItemData[];
  defaultSelected?: string[];
}

/** A trigger button and its anchored, portaled `Menu` — the real open/close flow. */
function MenuTrigger({
  label,
  items,
  defaultSelected,
  ...menuProps
}: MenuTriggerProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selected, select] = useSelection("single", defaultSelected);
  const open = Boolean(anchorEl);

  return (
    <>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className={TRIGGER_CLASS}
        onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
      >
        {label}
      </button>
      <Menu
        aria-label={label}
        {...menuProps}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        items={withSelection(items, selected, select)}
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Showcase — embedded controls                                                */
/* -------------------------------------------------------------------------- */

/**
 * A slot for another component. Switch, Slider, Progress and Button reach this
 * story the way ListItem reaches Menu — through the slot registry — so the
 * story still builds on a branch without one of them, and that part of an
 * example simply doesn't render. Only the generated registry knows these slot
 * types, hence the cast.
 */
const componentSlot = (slot: { type: string } & Record<string, unknown>) =>
  slot as unknown as Slot;

/** Renders one slot outside a row — see `componentSlot`. */
const SlotView = ({ slot }: { slot: Slot }) => {
  const renderSlot = useSlotRenderer();
  return <>{renderSlot({ slot })}</>;
};

/**
 * The switches' variant. Switch takes it on `track`, which also wants a
 * content `type` — with no `checked`/`unchecked` content, as here, the track
 * stays plain and only the variant applies.
 */
const SWITCH_TRACK = { type: "icon", variant: "solid-outline" } as const;

/**
 * Toggle rows: each is a `menuitemcheckbox` that owns the state, and its
 * switch only mirrors it — a click on the switch bubbles to the row, so it
 * toggles once. The quiet select style leaves the switch as the only sign of
 * "on", instead of a filled row as well.
 */
const withSwitches =
  (items: MenuItemData[]) =>
  (selected: string[]): MenuItemData[] =>
    items.map((item) => ({
      ...item,
      role: "menuitemcheckbox",
      selectStyle: QUIET_SELECT_STYLE,
      suffix: componentSlot({
        type: "switch",
        checked: selected.includes(item.value ?? item.label),
        size: "sm",
        track: SWITCH_TRACK,
        "aria-label": item.label,
      }),
    }));

/** A label and a read-out over whatever sits under them. */
const LabelledBlock = ({
  label,
  detail,
  children,
}: {
  label: string;
  detail?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-baseline justify-between gap-4">
      <span className={MENU_TITLE_TEXT_CLASS}>{label}</span>
      {detail ? <span className={MENU_META_TEXT_CLASS}>{detail}</span> : null}
    </div>
    {children}
  </div>
);

/**
 * A control that sits in the list without being a row. `Menu` passes
 * non-`MenuItem` children through untouched, but the list's key handler would
 * still see the control's keys bubble up — arrows would walk the row highlight
 * while the slider moved. Stopping them here leaves them to the control;
 * Escape still bubbles, so it closes the menu.
 */
const MenuControlBlock = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div
    role="group"
    aria-label={label}
    className="px-3 py-2"
    onKeyDown={(e) => {
      if (e.key !== "Escape") e.stopPropagation();
    }}
  >
    {children}
  </div>
);

function VolumeControl({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: number;
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <MenuControlBlock label={label}>
      <LabelledBlock label={label} detail={`${value}%`}>
        <SlotView
          slot={componentSlot({
            type: "slider",
            value,
            onChange: (next: number) => setValue(next),
            size: "sm",
            "aria-label": label,
          })}
        />
      </LabelledBlock>
    </MenuControlBlock>
  );
}

/**
 * A live input meter — a dashed Progress with enough thin, tall, square
 * dashes to read as a tick scale. The level is simulated: a small random walk
 * that runs only while it is mounted (the menu is open) and holds still for
 * anyone who asks for reduced motion.
 */
function InputLevelMeter() {
  const [level, setLevel] = useState(36);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setLevel((prev) =>
        Math.round(
          Math.min(78, Math.max(8, prev + (Math.random() - 0.5) * 24)),
        ),
      );
    }, 140);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="px-3 py-2">
      <LabelledBlock label="Input level">
        <SlotView
          slot={componentSlot({
            type: "progress-dashed",
            value: level,
            dashCount: 26,
            dashGap: 4,
            thickness: 18,
            rounded: "none",
            color: "green",
            // `strong` tints the unlit dashes green too; `dualTone` leaves
            // them on the neutral track, so only the lit ones carry colour.
            appearance: "dualTone",
            // Short enough to keep up with the level, long enough to not flicker.
            animationDuration: 120,
            "aria-label": "Input level",
          })}
        />
      </LabelledBlock>
    </div>
  );
}

const MenuSeparator = () => (
  <div
    role="separator"
    aria-orientation="horizontal"
    className={getMenuSeparatorClass()}
  />
);

/**
 * Menu composed the way a call app's audio popover is: a submenu row that
 * reads out its current choice, a slider, a live input meter, a switch row and
 * a plain action.
 */
function AudioMenuDemo() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [device, setDevice] = useState("system");
  const [noiseSuppression, setNoiseSuppression] = useState(true);
  const open = Boolean(anchorEl);
  const current = AUDIO_DEVICES.find(({ value }) => value === device);

  return (
    <>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className={TRIGGER_CLASS}
        onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
      >
        Audio settings
      </button>
      <Menu
        aria-label="Audio settings"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        placement="top-start"
        minWidth={280}
        closeOnSelect={false}
      >
        <MenuItem
          value="output"
          description={{ text: current?.label }}
          suffix={CHEVRON}
          divider
          items={AUDIO_DEVICES.map((item) => ({
            ...item,
            role: "menuitemradio",
            indicator: { type: "default", placement: "end" },
            selectStyle: QUIET_SELECT_STYLE,
            selected: item.value === device,
            onClick: setDevice,
          }))}
        >
          Output device
        </MenuItem>
        <VolumeControl label="Output volume" defaultValue={55} />
        <MenuSeparator />
        <InputLevelMeter />
        <MenuItem
          value="noise-suppression"
          role="menuitemcheckbox"
          selected={noiseSuppression}
          selectStyle={QUIET_SELECT_STYLE}
          suffix={componentSlot({
            type: "switch",
            checked: noiseSuppression,
            size: "sm",
            track: SWITCH_TRACK,
            "aria-label": "Noise suppression",
          })}
          onClick={() => setNoiseSuppression((on) => !on)}
        >
          Noise suppression
        </MenuItem>
        <MenuItem
          value="voice-settings"
          prefix={icon("@settings")}
          onClick={() => setAnchorEl(null)}
        >
          Voice settings
        </MenuItem>
      </Menu>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Showcase — inputs                                                           */
/* -------------------------------------------------------------------------- */

/**
 * A filter in the header. It sits outside the list, so what you type never
 * reaches the list's typeahead. Escape clears a query first — stopped here so
 * a real menu stays open — and only closes the menu once the field is empty.
 */
function FolderFilterSpecimen() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const matches = FOLDER_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(needle),
  );

  return (
    <MenuSpecimen
      label="Filter"
      detail="A search field in the header"
      minWidth={240}
      maxHeight={220}
      items={
        matches.length > 0
          ? matches
          : [
              {
                value: "no-match",
                label: `No folders match "${query.trim()}"`,
                disabled: true,
              },
            ]
      }
      header={
        <SlotView
          slot={componentSlot({
            type: "input-search",
            variant: "outline",
            value: query,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value),
            onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Escape" && query) {
                e.stopPropagation();
                setQuery("");
              }
            },
            placeholder: "Filter folders",
            prefix: { type: "icon", name: "@search" },
            size: "sm",
            fullWidth: true,
            "aria-label": "Filter folders",
          })}
        />
      }
      footer={
        <span className={HEADER_FOOTER_TEXT_CLASS}>
          {matches.length} of {FOLDER_ITEMS.length} folders
        </span>
      }
    />
  );
}

/** A field in the footer that adds a row — Enter creates the label. */
function LabelPickerSpecimen() {
  const [labels, setLabels] = useState(LABEL_ITEMS);
  const [draft, setDraft] = useState("");

  const addLabel = () => {
    const name = draft.trim();
    if (!name) return;
    setLabels((prev) =>
      prev.some(({ label }) => label.toLowerCase() === name.toLowerCase())
        ? prev
        : [...prev, toLabelItem(name)],
    );
    setDraft("");
  };

  return (
    <MenuSpecimen
      label="Create"
      detail="A text field in the footer — Enter adds"
      selection="multiple"
      defaultSelected={["bug"]}
      closeOnSelect={false}
      minWidth={240}
      items={labels}
      header={<span className={HEADER_FOOTER_TEXT_CLASS}>Labels</span>}
      footer={
        <SlotView
          slot={componentSlot({
            type: "input-text",
            variant: "outline",
            value: draft,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setDraft(e.target.value),
            onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addLabel();
              }
            },
            placeholder: "Create a label",
            prefix: { type: "icon", name: "@plus" },
            size: "sm",
            fullWidth: true,
            "aria-label": "New label name",
          })}
        />
      }
    />
  );
}

/** A value field between rows — a block, so its keys stay with the field. */
const TextFormatSpecimen = () => (
  <MenuSpecimen
    label="Number"
    detail="A number field between rows"
    selection="multiple"
    defaultSelected={["bold"]}
    closeOnSelect={false}
    minWidth={240}
    items={FORMAT_TOGGLES}
    header={<span className={HEADER_FOOTER_TEXT_CLASS}>Text</span>}
  >
    <MenuSeparator />
    <MenuControlBlock label="Font size">
      <div className="flex items-center justify-between gap-4">
        <span className={MENU_TITLE_TEXT_CLASS}>Font size</span>
        <div className="w-28">
          <SlotView
            slot={componentSlot({
              type: "input-number",
              variant: "outline",
              defaultValue: 16,
              min: 8,
              max: 72,
              // Arrow keys step it. The stepper buttons are Button slots,
              // so they'd need Button in the tree.
              scrubber: false,
              size: "sm",
              "aria-label": "Font size",
            })}
          />
        </div>
      </div>
    </MenuControlBlock>
  </MenuSpecimen>
);

/* -------------------------------------------------------------------------- */
/* Showcase / Overview story                                                   */
/* -------------------------------------------------------------------------- */

// Story params were: (_args, { globals })
export default function MenuShowcase() {
  const globals = {};
    const theme = getShowcaseTheme(globals);

    return (
      <ShowcaseShell
        globals={globals}
        className={cn(
          SHOWCASE_CONTAINER_CLASS,
          "w-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100",
        )}
      >
        <div className={SHOWCASE_HEADER_WRAP_CLASS}>
          <h1 className={SHOWCASE_TITLE_CLASS}>Menu Showcase</h1>
          <p className={SHOWCASE_SUBTITLE_CLASS}>
            Reference for the Menu surface, its rows, and how it opens. Every
            menu here is live — hover, click and use the arrow keys. Menus
            without an explicit radius or density follow the toolbar (now{" "}
            {theme.radius} radius, {theme.spacing} spacing).
          </p>
        </div>

        {/* Anatomy */}
        <LazySection>
          <ShowcaseSection
            title="Anatomy"
            description="A floating surface anchored to a trigger. Only the items are required."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <MenuSpecimen
                label="Account menu"
                items={ACCOUNT_ITEMS}
                defaultSelected={["profile"]}
                header={
                  <div className="flex flex-col">
                    <span className={MENU_TITLE_TEXT_CLASS}>Ada Lovelace</span>
                    <span className={MENU_META_TEXT_CLASS}>
                      ada@example.com
                    </span>
                  </div>
                }
                footer={
                  <span className={MENU_META_TEXT_CLASS}>Version 2.4.0</span>
                }
              />
              <dl className="flex max-w-md flex-col gap-3 text-sm">
                {ANATOMY.map(([term, definition]) => (
                  <div key={term} className="flex gap-4">
                    <dt className="w-20 shrink-0 font-semibold text-neutral-900 dark:text-neutral-100">
                      {term}
                    </dt>
                    <dd className={cn(PROSE_CLASS, "m-0")}>{definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Sizes */}
        <LazySection>
          <ShowcaseSection
            title="Sizes"
            description="size cascades to every row that doesn't set its own, and scales the list padding with it."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              {SIZES.map((size) => (
                <MenuSpecimen
                  key={size}
                  label={size}
                  size={size}
                  items={ACTION_ITEMS}
                  defaultSelected={["copy"]}
                />
              ))}
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Density */}
        <LazySection>
          <ShowcaseSection
            title="Density"
            description="spacing sets the list padding and the gap between rows, and cascades to submenus."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              {DENSITIES.map((spacing) => (
                <MenuSpecimen
                  key={spacing}
                  label={spacing}
                  spacing={spacing}
                  items={ACTION_ITEMS}
                  defaultSelected={["copy"]}
                />
              ))}
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Corner radius */}
        <LazySection>
          <ShowcaseSection
            title="Corner radius"
            description="rounded overrides the theme radius for the surface and, one step inside it, each row's corner. It cascades to submenus."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              {RADII.map((rounded) => (
                <MenuSpecimen
                  key={rounded}
                  label={rounded}
                  detail={
                    rounded === "full"
                      ? "Largest panel corner, not a pill"
                      : undefined
                  }
                  rounded={rounded}
                  items={ACTION_ITEMS}
                  defaultSelected={["copy"]}
                />
              ))}
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Surface */}
        <LazySection>
          <ShowcaseSection
            title="Surface"
            description="bordered is on by default. Without it, the shadow alone lifts the surface off the page."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <MenuSpecimen
                label="Bordered"
                detail="bordered (default)"
                items={PLAIN_ITEMS}
              />
              <MenuSpecimen
                label="Borderless"
                detail="bordered={false}"
                bordered={false}
                items={PLAIN_ITEMS}
              />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Header & footer */}
        <LazySection>
          <ShowcaseSection
            title="Header & footer"
            description="Pinned regions outside the item list. They never scroll with it, and keyboard navigation skips them."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <MenuSpecimen
                label="Header"
                items={FOLDER_ITEMS.slice(0, 4)}
                header={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>
                    Move to folder
                  </span>
                }
              />
              <MenuSpecimen
                label="Footer"
                items={FOLDER_ITEMS.slice(0, 4)}
                footer={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>
                    4 of 12 folders
                  </span>
                }
              />
              <MenuSpecimen
                label="Scrolling list"
                detail="maxHeight={220} — only the items scroll"
                maxHeight={220}
                items={FOLDER_ITEMS}
                header={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>
                    Move to folder
                  </span>
                }
                footer={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>12 folders</span>
                }
              />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Item content */}
        <LazySection>
          <ShowcaseSection
            title="Item content"
            description="Rows are ListItems, so prefix and suffix slots and descriptions work unchanged."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <MenuSpecimen label="Label only" items={PLAIN_ITEMS} />
              <MenuSpecimen label="Leading icon" items={ACTION_ITEMS} />
              <MenuSpecimen
                label="Description"
                items={VISIBILITY_ITEMS}
                defaultSelected={["team"]}
              />
              <MenuSpecimen label="Trailing icon" items={LINK_ITEMS} />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Item states */}
        <LazySection>
          <ShowcaseSection
            title="Item states"
            description="Disabled and loading rows can't be activated, and arrow keys and typeahead skip them. Hover or arrow onto a row to see the highlight."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <MenuSpecimen
                label="States"
                items={STATE_ITEMS}
                defaultSelected={["selected"]}
              />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Selection styles */}
        <LazySection>
          <SelectionStyleMatrix />
        </LazySection>

        {/* Item colour */}
        <LazySection>
          <ShowcaseSection
            title="Item colour"
            description="color on a row sets the palette of its highlight and selected fill — here, every palette in the theme. Unset, rows follow the toolbar colour."
          >
            {COLOR_GROUPS.map(({ label, palettes }) => (
              <div key={label} className="space-y-3">
                <h3 className={MENU_TITLE_TEXT_CLASS}>{label}</h3>
                <div className={SPECIMEN_ROW_CLASS}>
                  {palettes.map((color) => (
                    <ListSpecimen
                      key={color}
                      label={color}
                      size="sm"
                      items={PLAIN_ITEMS.map((item) => ({ ...item, color }))}
                      defaultSelected={["duplicate"]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </ShowcaseSection>
        </LazySection>

        {/* Selection patterns */}
        <LazySection>
          <ShowcaseSection
            title="Selection patterns"
            description="role switches rows to menuitemradio or menuitemcheckbox, which report aria-checked. Pair it with closeOnSelect={false} so a choice doesn't dismiss the menu."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <MenuSpecimen
                label="Single choice"
                detail='role="menuitemradio"'
                items={SORT_ITEMS}
                defaultSelected={["newest"]}
                header={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>Sort by</span>
                }
                closeOnSelect={false}
              />
              <MenuSpecimen
                label="Multiple choice"
                detail='role="menuitemcheckbox"'
                selection="multiple"
                items={COLUMN_ITEMS}
                defaultSelected={["owner", "modified"]}
                header={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>
                    Visible columns
                  </span>
                }
                closeOnSelect={false}
              />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Embedded controls */}
        <LazySection>
          <ShowcaseSection
            title="Embedded controls"
            description="Rows carry other components in their slots, and Menu passes any child that isn't a MenuItem straight through — so switches, sliders, progress and buttons need no special support."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <MenuSpecimen
                label="Switch"
                detail="A menuitemcheckbox row's suffix"
                selection="multiple"
                items={withSwitches(QUICK_SETTINGS)}
                defaultSelected={["previews", "microphone"]}
                closeOnSelect={false}
                minWidth={240}
                header={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>
                    Quick settings
                  </span>
                }
              />
              <MenuSpecimen
                label="Slider"
                detail="A block between rows"
                minWidth={260}
              >
                <VolumeControl label="Output volume" defaultValue={72} />
                <VolumeControl label="Input volume" defaultValue={40} />
                <MenuSeparator />
                <MenuItem value="voice-settings" prefix={icon("@settings")}>
                  Voice settings
                </MenuItem>
              </MenuSpecimen>
              <MenuSpecimen
                label="Progress (dashed)"
                detail="In the header, with a button below"
                minWidth={260}
                items={SETUP_STEPS}
                header={
                  <LabelledBlock label="Getting started" detail="3 of 5">
                    <SlotView
                      slot={componentSlot({
                        type: "progress-dashed",
                        value: 60,
                        dashCount: 5,
                        size: "sm",
                        "aria-label": "Setup progress",
                      })}
                    />
                  </LabelledBlock>
                }
                footer={
                  <SlotView
                    slot={componentSlot({
                      type: "button",
                      label: "Continue setup",
                      size: "sm",
                      fullWidth: true,
                    })}
                  />
                }
              />
              <MenuSpecimen
                label="Button"
                detail="Actions in the footer"
                minWidth={300}
                items={NOTIFICATION_ITEMS}
                header={
                  <span className={HEADER_FOOTER_TEXT_CLASS}>
                    Notifications
                  </span>
                }
                footer={
                  <div className="flex justify-end gap-2">
                    <SlotView
                      slot={componentSlot({
                        type: "button",
                        label: "Mark all as read",
                        variant: "ghost",
                        size: "sm",
                      })}
                    />
                    <SlotView
                      slot={componentSlot({
                        type: "button",
                        label: "View all",
                        size: "sm",
                      })}
                    />
                  </div>
                }
              />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Inputs */}
        <LazySection>
          <ShowcaseSection
            title="Inputs"
            description="An input sits outside the rows — in the header to filter, in the footer to create, or in a block between rows for a value — so what you type stays with the field instead of driving the list's arrow keys and typeahead."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <FolderFilterSpecimen />
              <LabelPickerSpecimen />
              <TextFormatSpecimen />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Composed menu */}
        <LazySection estimatedHeight={160}>
          <ShowcaseSection
            title="Composed menu"
            description="All of it together, the way a call app's audio popover is built: a submenu row that reads out its choice, radio rows with icons, a slider, a live input meter, a switch row and a plain action."
          >
            <div className={SPECIMEN_CLASS}>
              <SpecimenCaption
                label="Audio settings"
                detail="Opens upward when there's room. Hover Output device for the device list."
              />
              <AudioMenuDemo />
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Submenus */}
        <LazySection estimatedHeight={160}>
          <ShowcaseSection
            title="Submenus"
            description="Give a row its own items and it opens a flyout instead of being selectable — nest as deep as needed. Add the chevron yourself with suffix."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              <div className={SPECIMEN_CLASS}>
                <SpecimenCaption
                  label="Nested flyouts"
                  detail="Hover a chevron row, or press → on it. ← or Escape closes one level."
                />
                <MenuTrigger label="File" items={FILE_ITEMS} />
              </div>
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Focus on open */}
        <LazySection estimatedHeight={160}>
          <ShowcaseSection
            title="Focus on open"
            description="variant decides which row is highlighted when the menu opens. Open each with the keyboard (Tab to it, then Enter) to compare."
          >
            <div className={SPECIMEN_ROW_CLASS}>
              {(["menu", "selectedMenu"] as const).map((variant) => (
                <div key={variant} className={SPECIMEN_CLASS}>
                  <SpecimenCaption
                    label={variant}
                    detail={
                      variant === "menu"
                        ? "Highlights the first enabled row"
                        : "Highlights the selected row (24px)"
                    }
                  />
                  <MenuTrigger
                    label="Font size"
                    variant={variant}
                    items={FONT_SIZE_ITEMS}
                    defaultSelected={["24"]}
                  />
                </div>
              ))}
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Placement */}
        <LazySection estimatedHeight={360}>
          <ShowcaseSection
            title="Placement"
            description="placement picks the side and alignment against the anchor. A menu without room there flips to the opposite side, then clamps to stay on screen."
          >
            <div className="mx-auto grid w-fit grid-cols-3 items-center justify-items-center gap-x-16 gap-y-12 py-12">
              {PLACEMENT_GRID.map((placement) =>
                placement ? (
                  <MenuTrigger
                    key={placement}
                    label={placement}
                    placement={placement}
                    items={PLAIN_ITEMS}
                  />
                ) : (
                  <span key="anchor" className={SPECIMEN_DETAIL_CLASS}>
                    Click a trigger
                  </span>
                ),
              )}
            </div>
          </ShowcaseSection>
        </LazySection>

        {/* Keyboard */}
        <LazySection>
          <ShowcaseTable
            title="Keyboard"
            description="Real focus stays on the list; the highlighted row is exposed through aria-activedescendant."
            rowHeaderLabel="Key"
            rows={KEYBOARD_ROWS.map(({ key, label }) => ({ key, label }))}
            columns={[{ key: "behaviour", label: "Behaviour", align: "left" }]}
            renderCell={(row) => (
              <span className={PROSE_CLASS}>
                {KEYBOARD_ROWS.find(({ key }) => key === row)?.behaviour}
              </span>
            )}
          />
        </LazySection>
      </ShowcaseShell>
    );
  }
