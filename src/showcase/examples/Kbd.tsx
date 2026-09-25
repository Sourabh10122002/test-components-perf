// @ts-nocheck
// Ported from origin/kbd:src/components/Kbd/stories/Kbd.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/kbd:src/components/Kbd/stories/Kbd.stories.tsx
import React from "react";
import { cn } from "@inventive-ui/framework";

import { Kbd } from "@inventive-ui/components/Kbd";
import { KEY_SYMBOLS } from "../story-helpers/Kbd/constants";
import { getShortcutLabel } from "../story-helpers/Kbd/utils";
import type { KbdProps } from "@inventive-ui/components/Kbd";

import { LazySection } from "../storybook";
import {
  getStorybookAccentColorKeys,
  getStorybookColorOptions,
} from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_HEADER_WRAP_CLASS,
  SHOWCASE_PALETTE_GRID_CLASS,
  SHOWCASE_ROW_CLASS,
  SHOWCASE_SCROLL_X_CLASS,
  SHOWCASE_SECTION_CLASS,
  SHOWCASE_SECTION_DESC_CLASS,
  SHOWCASE_SECTION_TITLE_CLASS,
  SHOWCASE_SUBTITLE_CLASS,
  SHOWCASE_TITLE_CLASS,
} from "../storybook";

const VARIANTS = ["solid", "solid-outline", "outline", "ghost"] as const;
const APPEARANCES = ["soft", "strong"] as const;
const SIZES = ["xs", "sm", "base", "lg", "xl"] as const;
const SPACINGS = ["compact", "standard", "spacious"] as const;
const RADII = ["none", "sm", "md", "lg", "full"] as const;

/**
 * Grouped from the component's own table, so the reference cannot drift from
 * what `keys` actually accepts — several names share a glyph ("cmd"/"command").
 */
const GLYPH_NAMES = Object.entries(KEY_SYMBOLS).reduce<
  Record<string, string[]>
>((groups, [name, glyph]) => {
  (groups[glyph] ??= []).push(name);
  return groups;
}, {});

/** The same action, spelled for each platform's modifier keys. */
const PLATFORM_SHORTCUTS = [
  { action: "Save", mac: ["command", "s"], windows: ["control", "s"] },
  {
    action: "Redo",
    mac: ["command", "shift", "z"],
    windows: ["control", "y"],
  },
  {
    action: "Force quit",
    mac: ["command", "option", "escape"],
    windows: ["control", "alt", "delete"],
  },
] as const;

const PALETTE_COMMANDS = [
  { label: "Go to file…", keys: ["command", "p"] },
  { label: "Toggle terminal", keys: ["control", "`"] },
  { label: "Split editor", keys: ["command", "\\"] },
] as const;

/** Bottom row of a keyboard — modifiers around a space bar that takes the rest. */
const SPACE_ROW_MODIFIERS = ["control", "option", "command"] as const;

const ANNOUNCED_EXAMPLES = [
  ["command"],
  ["shift"],
  ["escape"],
  ["command", "k"],
] as const;

const MENU_SHORTCUTS = [
  { label: "New file", keys: ["command", "n"] },
  { label: "Save", keys: ["command", "s"] },
  { label: "Find in files", keys: ["command", "shift", "f"] },
  { label: "Close tab", keys: ["command", "w"] },
] as const;

const CHEAT_SHEET = [
  {
    group: "Navigation",
    items: [
      { label: "Go to line", keys: ["control", "g"] },
      { label: "Next tab", keys: ["control", "tab"] },
    ],
  },
  {
    group: "Editing",
    items: [
      { label: "Undo", keys: ["command", "z"] },
      { label: "Delete line", keys: ["command", "shift", "k"] },
    ],
  },
] as const;

const SEMANTIC_COLORS = [
  "brand",
  "neutral",
  "success",
  "warning",
  "danger",
  "info",
] as const;

/** Props plus the control-only flags the meta uses to gate other controls. */
type KbdStoryProps = KbdProps & {
  /** Drives the `if:` on the adaptive control; never reaches the component. */
  _adaptiveVisible?: boolean;
};

/* ------------------------------ SHOWCASE PARTS ----------------------------- */

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section className={SHOWCASE_SECTION_CLASS}>
    <div>
      <h2 className={SHOWCASE_SECTION_TITLE_CLASS}>{title}</h2>
      {description && (
        <p className={SHOWCASE_SECTION_DESC_CLASS}>{description}</p>
      )}
    </div>
    {children}
  </section>
);

const CAPTION_CLASS =
  "text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400";
const LABELED_CLASS = "flex flex-col items-center gap-2";
const MATRIX_TABLE_CLASS = "border-collapse";
const STACK_CLASS = "space-y-4";
const SHORTCUT_ROW_CLASS = "flex items-center gap-4";
const SHORTCUT_LABEL_CLASS =
  "w-40 text-sm text-neutral-600 dark:text-neutral-400";
const DARK_PANEL_CLASS =
  "dark flex flex-wrap items-center gap-8 rounded-lg bg-neutral-950 p-8";
const PROSE_CLASS = "space-y-4 text-sm text-neutral-700 dark:text-neutral-300";
const SEARCH_FIELD_CLASS =
  "flex w-80 items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 dark:border-neutral-700";
const WIDE_CLASS = "w-80";
const GLYPH_GRID_CLASS =
  "grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6";
const ARROW_CLUSTER_CLASS = "flex flex-col items-center gap-1";
const ARROW_ROW_CLASS = "flex items-center gap-1";
const PANEL_CLASS =
  "w-96 max-w-full rounded-lg border border-neutral-200 p-2 dark:border-neutral-700";
const PANEL_ROW_CLASS =
  "flex items-center justify-between gap-6 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800";
const CHEAT_GRID_CLASS = "grid gap-8 sm:grid-cols-2";
const CHEAT_GROUP_TITLE_CLASS =
  "mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400";
const CHEAT_ROW_CLASS =
  "flex items-center justify-between gap-6 border-b border-neutral-100 py-2 text-sm text-neutral-700 last:border-0 dark:border-neutral-800 dark:text-neutral-300";
const TD_START_CLASS =
  "border border-neutral-200 dark:border-neutral-700 px-4 py-3 text-start text-sm text-neutral-700 dark:text-neutral-300";
const PLATFORM_GRID_CLASS = "grid gap-6 sm:grid-cols-2";
const PLATFORM_CARD_CLASS =
  "rounded-lg border border-neutral-200 p-4 dark:border-neutral-700";
const PALETTE_SHELL_CLASS =
  "w-full max-w-md overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900";
const PALETTE_INPUT_CLASS =
  "flex items-center justify-between gap-3 border-b border-neutral-200 px-4 py-3 text-sm text-neutral-400 dark:border-neutral-700 dark:text-neutral-500";
const PALETTE_LIST_CLASS = "p-2";
const PALETTE_FOOTER_CLASS =
  "flex flex-wrap items-center gap-4 border-t border-neutral-200 px-4 py-2 text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400";
const FOOTER_HINT_CLASS = "flex items-center gap-1.5";
const SPACE_ROW_CLASS = "flex w-96 max-w-full items-center gap-1.5";
const SPACE_BAR_CLASS = "flex-1";
const GUIDANCE_GRID_CLASS = "grid gap-6 sm:grid-cols-2";
const GUIDANCE_CARD_CLASS =
  "space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-700";
const GUIDANCE_DO_CLASS =
  "text-xs font-semibold uppercase tracking-wider text-success-600 dark:text-success-400";
const GUIDANCE_DONT_CLASS =
  "text-xs font-semibold uppercase tracking-wider text-danger-600 dark:text-danger-400";
const GUIDANCE_NOTE_CLASS = "text-sm text-neutral-600 dark:text-neutral-400";
const CODE_CLASS =
  "rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300";

const Labeled = ({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) => (
  <div className={LABELED_CLASS}>
    {children}
    <span className={CAPTION_CLASS}>{caption}</span>
  </div>
);

/** One row of the screen-reader table: markup, the caps it renders, its name. */
const AnnouncedRow = ({ keys, color }: { keys: string[]; color: string }) => {
  const isSingle = keys.length === 1;
  const markup = isSingle
    ? `<Kbd keys="${keys[0]}" />`
    : `<Kbd.Group keys={${JSON.stringify(keys)}} />`;
  const rendered = isSingle ? (
    <Kbd color={color} raised keys={keys[0]} />
  ) : (
    <Kbd.Group color={color} raised keys={keys} />
  );

  return (
    <tr>
      <td className={TD_START_CLASS}>
        <code className={CODE_CLASS}>{markup}</code>
      </td>
      <td className={TD_CLASS}>{rendered}</td>
      <td className={TD_START_CLASS}>“{getShortcutLabel(keys)}”</td>
    </tr>
  );
};

const TH_CLASS =
  "border border-neutral-200 dark:border-neutral-700 px-4 py-2 text-start text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300";
const TD_CLASS =
  "border border-neutral-200 dark:border-neutral-700 px-4 py-4 text-center";

/* -------------------------------- STORIES --------------------------------- */

export default function KbdShowcase() {
  const globals: Record<string, any> = {};
  const theme = getShowcaseTheme(globals);
  const color = theme.color;

  return (
    <ShowcaseShell
      globals={globals}
      className={cn(SHOWCASE_CONTAINER_CLASS, "space-y-14")}
    >
      <header className={SHOWCASE_HEADER_WRAP_CLASS}>
        <h1 className={SHOWCASE_TITLE_CLASS}>Kbd</h1>
        <p className={SHOWCASE_SUBTITLE_CLASS}>
          Keyboard keys and shortcuts. Palette, size, density and radius all
          follow the theme — the toolbar above drives every key on this page.
        </p>
      </header>

      <Section
        title="Variants and appearance"
        description="Four surfaces, two intensities. Shades come from the same ramps Button uses, so a key sits next to a button without clashing."
      >
        <div className={SHOWCASE_SCROLL_X_CLASS}>
          <table className={MATRIX_TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>Appearance</th>
                {VARIANTS.map((variant) => (
                  <th key={variant} className={TH_CLASS}>
                    {variant}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {APPEARANCES.map((appearance) => (
                <tr key={appearance}>
                  <td className={TH_CLASS}>{appearance}</td>
                  {VARIANTS.map((variant) => (
                    <td key={variant} className={TD_CLASS}>
                      <Kbd
                        color={color}
                        variant={variant}
                        appearance={appearance}
                        raised
                        keys="command"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <LazySection>
        <Section
          title="Content"
          description="`keys` resolves a key name to its glyph. `label` and `children` take anything else — a word, a function key, an element."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Labeled caption='keys="command"'>
              <Kbd color={color} raised keys="command" />
            </Labeled>
            <Labeled caption='keys="F5"'>
              <Kbd color={color} raised keys="F5" />
            </Labeled>
            <Labeled caption='label="Esc"'>
              <Kbd color={color} raised label="Esc" />
            </Labeled>
            <Labeled caption='label="Ctrl"'>
              <Kbd color={color} raised label="Ctrl" />
            </Labeled>
            <Labeled caption="children">
              <Kbd color={color} raised>
                ?
              </Kbd>
            </Labeled>
            <Labeled caption="element">
              <Kbd color={color} raised label={<strong>A</strong>} />
            </Labeled>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Key names"
          description="Every name `keys` understands, grouped by the glyph it prints. Matching is case-insensitive, and an unknown name is printed as typed."
        >
          <div className={GLYPH_GRID_CLASS}>
            {Object.entries(GLYPH_NAMES).map(([glyph, names]) => (
              <Labeled key={glyph} caption={names.join(" · ")}>
                <Kbd color={color} raised keys={names[0]} />
              </Labeled>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Arrow cluster"
          description="Caps are inline-flex boxes with a minimum width of their own height, so a single glyph stays square and clusters line up without extra sizing."
        >
          <div className={ARROW_CLUSTER_CLASS}>
            <Kbd color={color} raised keys="up" />
            <div className={ARROW_ROW_CLASS}>
              <Kbd color={color} raised keys="left" />
              <Kbd color={color} raised keys="down" />
              <Kbd color={color} raised keys="right" />
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Sizes"
          description="Heights match Button at the same size, so a key and a button line up on one row."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {SIZES.map((size) => (
              <Labeled key={size} caption={size}>
                <Kbd color={color} size={size} raised keys="escape" />
              </Labeled>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Density"
          description="Follows the theme spacing. The `spacing` prop overrides it for one key."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {SPACINGS.map((spacing) => (
              <Labeled key={spacing} caption={spacing}>
                <Kbd color={color} spacing={spacing} raised label="Shift" />
              </Labeled>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Radius"
          description="Follows the theme radius and scales with size. The `rounded` prop overrides it for one key."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            {RADII.map((rounded) => (
              <Labeled key={rounded} caption={rounded}>
                <Kbd color={color} rounded={rounded} raised keys="enter" />
              </Labeled>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Raised"
          description="A thicker bottom edge in a darker shade of the palette, which pushes the glyph onto the visible top face. Ghost keys have no surface to lift."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Labeled caption="flat">
              <Kbd color={color} keys="command" />
            </Labeled>
            <Labeled caption="raised">
              <Kbd color={color} raised keys="command" />
            </Labeled>
            <Labeled caption="raised · outline">
              <Kbd color={color} variant="outline" raised keys="command" />
            </Labeled>
            <Labeled caption="raised · strong">
              <Kbd color={color} appearance="strong" raised keys="command" />
            </Labeled>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Palettes"
          description="Any theme palette works, semantic or accent. Semantic colors carry meaning — a danger key for a destructive shortcut. `white` and `black` have no ramp, so they borrow neutral's shades and invert with the theme."
        >
          <div className={STACK_CLASS}>
            <div className={SHOWCASE_PALETTE_GRID_CLASS}>
              {SEMANTIC_COLORS.map((semantic) => (
                <Labeled key={semantic} caption={semantic}>
                  <Kbd color={semantic} raised label="Del" />
                </Labeled>
              ))}
            </div>
            {/* Read at render time: the palette registry is empty until
                initFramework has run. */}
            <div className={SHOWCASE_PALETTE_GRID_CLASS}>
              {getStorybookAccentColorKeys().map((accent) => (
                <Labeled key={accent} caption={accent}>
                  <Kbd color={accent} raised label="Del" />
                </Labeled>
              ))}
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Semantic keys in a row"
          description="A palette per action, at the size a menu or toolbar would use."
        >
          <div className={SHOWCASE_ROW_CLASS}>
            <Labeled caption="confirm">
              <Kbd.Group color="success" keys={["command", "enter"]} raised />
            </Labeled>
            <Labeled caption="destructive">
              <Kbd.Group
                color="danger"
                keys={["command", "backspace"]}
                raised
              />
            </Labeled>
            <Labeled caption="caution">
              <Kbd.Group
                color="warning"
                keys={["command", "shift", "r"]}
                raised
              />
            </Labeled>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Shortcuts"
          description="Kbd.Group renders one cap per key. The caps are hidden from assistive technology and the group carries a single name, so this reads as 'Command K' rather than three fragments."
        >
          <div className={STACK_CLASS}>
            {[
              { label: "Open search", keys: ["command", "k"] },
              { label: "Command palette", keys: ["command", "shift", "p"] },
              { label: "Close", keys: ["escape"] },
            ].map((shortcut) => (
              <div key={shortcut.label} className={SHORTCUT_ROW_CLASS}>
                <span className={SHORTCUT_LABEL_CLASS}>{shortcut.label}</span>
                <Kbd.Group color={color} keys={shortcut.keys} raised />
              </div>
            ))}
            <div className={SHORTCUT_ROW_CLASS}>
              <span className={SHORTCUT_LABEL_CLASS}>Go to project</span>
              <Kbd.Group
                color={color}
                keys={["g", "p"]}
                separator="then"
                raised
              />
            </div>
            <div className={SHORTCUT_ROW_CLASS}>
              <span className={SHORTCUT_LABEL_CLASS}>No separator</span>
              <Kbd.Group
                color={color}
                keys={["control", "alt", "delete"]}
                separator=""
                raised
              />
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Group sizing and style"
          description="A group forwards every styling prop to its keys, and its gap follows the same density as their padding."
        >
          <div className={STACK_CLASS}>
            {SIZES.map((size) => (
              <div key={size} className={SHORTCUT_ROW_CLASS}>
                <span className={SHORTCUT_LABEL_CLASS}>{size}</span>
                <Kbd.Group
                  color={color}
                  size={size}
                  keys={["command", "shift", "k"]}
                  raised
                />
              </div>
            ))}
            {VARIANTS.map((variant) => (
              <div key={variant} className={SHORTCUT_ROW_CLASS}>
                <span className={SHORTCUT_LABEL_CLASS}>{variant}</span>
                <Kbd.Group
                  color={color}
                  variant={variant}
                  keys={["command", "k"]}
                  raised
                />
              </div>
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Screen readers"
          description="A glyph on its own announces as nothing useful, so a key translates it. A group hides its caps and carries one name for the whole shortcut."
        >
          <div className={SHOWCASE_SCROLL_X_CLASS}>
            <table className={MATRIX_TABLE_CLASS}>
              <thead>
                <tr>
                  <th className={TH_CLASS}>Markup</th>
                  <th className={TH_CLASS}>Renders</th>
                  <th className={TH_CLASS}>Announced</th>
                </tr>
              </thead>
              <tbody>
                {ANNOUNCED_EXAMPLES.map((keys) => (
                  <AnnouncedRow
                    key={keys.join("-")}
                    keys={[...keys]}
                    color={color}
                  />
                ))}
                <tr>
                  <td className={TD_START_CLASS}>
                    <code
                      className={CODE_CLASS}
                    >{`<Kbd label="Esc" />`}</code>
                  </td>
                  <td className={TD_CLASS}>
                    <Kbd color={color} raised label="Esc" />
                  </td>
                  <td className={TD_START_CLASS}>
                    “Esc” — plain text needs no translation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Adaptive"
          description="adaptive={false} keeps the light colors under a dark theme — for a key sitting on a surface that never inverts. It applies to strong keys; a soft key's dark cell is the intended one, so it always adapts."
        >
          <div className={DARK_PANEL_CLASS}>
            <Labeled caption="strong · adaptive">
              <Kbd color={color} appearance="strong" raised keys="command" />
            </Labeled>
            <Labeled caption="strong · static">
              <Kbd
                color={color}
                appearance="strong"
                adaptive={false}
                raised
                keys="command"
              />
            </Labeled>
            <Labeled caption="soft · always adapts">
              <Kbd color={color} raised keys="command" />
            </Labeled>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="In context"
          description="A key cap is inline text — it sits on the baseline of the sentence around it, and stretches to its container when asked."
        >
          <div className={PROSE_CLASS}>
            <p>
              Press <Kbd color={color} size="sm" raised keys="command" /> and{" "}
              <Kbd color={color} size="sm" raised label="K" /> to search, or{" "}
              <Kbd color={color} size="sm" raised keys="escape" /> to dismiss.
            </p>
            <div className={SEARCH_FIELD_CLASS}>
              <span>Search…</span>
              <Kbd.Group
                color={color}
                size="xs"
                keys={["command", "k"]}
                raised
              />
            </div>
            <div className={WIDE_CLASS}>
              <Kbd color={color} fullWidth raised label="Space" />
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Menu shortcuts"
          description="The common home for a shortcut: trailing a menu row, one step smaller and quieter than the label it follows."
        >
          <div className={PANEL_CLASS}>
            {MENU_SHORTCUTS.map((item) => (
              <div key={item.label} className={PANEL_ROW_CLASS}>
                <span>{item.label}</span>
                <Kbd.Group
                  color={color}
                  size="xs"
                  variant="outline"
                  keys={[...item.keys]}
                  separator=""
                />
              </div>
            ))}
            <div className={PANEL_ROW_CLASS}>
              <span>Delete file</span>
              <Kbd.Group
                color="danger"
                size="xs"
                variant="outline"
                keys={["command", "backspace"]}
                separator=""
              />
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Chord or sequence"
          description="Two different gestures, told apart by the separator. `+` means held together; a word means pressed one after the other."
        >
          <div className={STACK_CLASS}>
            <div className={SHORTCUT_ROW_CLASS}>
              <span className={SHORTCUT_LABEL_CLASS}>Chord — held</span>
              <Kbd.Group
                color={color}
                keys={["command", "shift", "p"]}
                raised
              />
            </div>
            <div className={SHORTCUT_ROW_CLASS}>
              <span className={SHORTCUT_LABEL_CLASS}>Sequence — in turn</span>
              <Kbd.Group
                color={color}
                keys={["g", "p"]}
                separator="then"
                raised
              />
            </div>
            <div className={SHORTCUT_ROW_CLASS}>
              <span className={SHORTCUT_LABEL_CLASS}>Compact — no gap</span>
              <Kbd.Group
                color={color}
                keys={["command", "k"]}
                separator=""
                raised
              />
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Per platform"
          description="The same action spelled for each platform. Names resolve to glyphs on macOS and stay words on Windows, so one data shape covers both."
        >
          <div className={PLATFORM_GRID_CLASS}>
            <div className={PLATFORM_CARD_CLASS}>
              <h3 className={CHEAT_GROUP_TITLE_CLASS}>macOS</h3>
              {PLATFORM_SHORTCUTS.map((item) => (
                <div key={item.action} className={CHEAT_ROW_CLASS}>
                  <span>{item.action}</span>
                  <Kbd.Group
                    color={color}
                    size="sm"
                    keys={[...item.mac]}
                    separator=""
                    raised
                  />
                </div>
              ))}
            </div>
            <div className={PLATFORM_CARD_CLASS}>
              <h3 className={CHEAT_GROUP_TITLE_CLASS}>Windows</h3>
              {PLATFORM_SHORTCUTS.map((item) => (
                <div key={item.action} className={CHEAT_ROW_CLASS}>
                  <span>{item.action}</span>
                  <Kbd.Group
                    color={color}
                    size="sm"
                    keys={[...item.windows]}
                    raised
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Command palette"
          description="The pattern Kbd exists for: a trigger hint in the field, a shortcut trailing each row, and the navigation keys spelled out along the footer."
        >
          <div className={PALETTE_SHELL_CLASS}>
            <div className={PALETTE_INPUT_CLASS}>
              <span>Type a command…</span>
              <Kbd.Group
                color={color}
                size="xs"
                variant="outline"
                keys={["command", "k"]}
                separator=""
              />
            </div>
            <div className={PALETTE_LIST_CLASS}>
              {PALETTE_COMMANDS.map((item) => (
                <div key={item.label} className={PANEL_ROW_CLASS}>
                  <span>{item.label}</span>
                  <Kbd.Group
                    color={color}
                    size="xs"
                    variant="outline"
                    keys={[...item.keys]}
                    separator=""
                  />
                </div>
              ))}
            </div>
            <div className={PALETTE_FOOTER_CLASS}>
              <span className={FOOTER_HINT_CLASS}>
                <Kbd color={color} size="xs" variant="outline" keys="up" />
                <Kbd color={color} size="xs" variant="outline" keys="down" />
                navigate
              </span>
              <span className={FOOTER_HINT_CLASS}>
                <Kbd color={color} size="xs" variant="outline" keys="enter" />
                select
              </span>
              <span className={FOOTER_HINT_CLASS}>
                <Kbd
                  color={color}
                  size="xs"
                  variant="outline"
                  keys="escape"
                />
                close
              </span>
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Keyboard row"
          description="`fullWidth` lets one cap take the space the others leave — a space bar between its modifiers."
        >
          <div className={SPACE_ROW_CLASS}>
            {SPACE_ROW_MODIFIERS.map((key) => (
              <Kbd key={key} color={color} size="sm" raised keys={key} />
            ))}
            <div className={SPACE_BAR_CLASS}>
              <Kbd
                color={color}
                size="sm"
                raised
                fullWidth
                keys="space"
                aria-label="Space"
              />
            </div>
            {[...SPACE_ROW_MODIFIERS].reverse().map((key) => (
              <Kbd key={key} color={color} size="sm" raised keys={key} />
            ))}
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Guidance"
          description="Where the choice between a group and loose keys actually changes what a screen reader says."
        >
          <div className={GUIDANCE_GRID_CLASS}>
            <div className={GUIDANCE_CARD_CLASS}>
              <span className={GUIDANCE_DO_CLASS}>Do</span>
              <Kbd.Group color={color} keys={["command", "k"]} raised />
              <p className={GUIDANCE_NOTE_CLASS}>
                One group, one name: “{getShortcutLabel(["command", "k"])}”.
                The caps are hidden, so the shortcut is announced as a single
                thing.
              </p>
            </div>
            <div className={GUIDANCE_CARD_CLASS}>
              <span className={GUIDANCE_DONT_CLASS}>Don’t</span>
              <div className={FOOTER_HINT_CLASS}>
                <Kbd color={color} raised keys="command" />
                <span>+</span>
                <Kbd color={color} raised label="K" />
              </div>
              <p className={GUIDANCE_NOTE_CLASS}>
                Loose keys announce as “Command”, “plus”, “K” — three
                fragments with nothing tying them to one gesture.
              </p>
            </div>
            <div className={GUIDANCE_CARD_CLASS}>
              <span className={GUIDANCE_DO_CLASS}>Do</span>
              <Kbd color={color} variant="ghost" label="Esc" />
              <p className={GUIDANCE_NOTE_CLASS}>
                Ghost for a quiet inline mention. It has no surface, so it
                ignores `raised` rather than drawing a stray rule.
              </p>
            </div>
            <div className={GUIDANCE_CARD_CLASS}>
              <span className={GUIDANCE_DONT_CLASS}>Don’t</span>
              <Kbd color={color} raised label="Click me" />
              <p className={GUIDANCE_NOTE_CLASS}>
                A key is a label, not a control. It has no focus or press
                state — reach for Button when something should be clickable.
              </p>
            </div>
          </div>
        </Section>
      </LazySection>

      <LazySection>
        <Section
          title="Cheat sheet"
          description="Reference layouts are where the raised cap earns its keep — the page reads as a keyboard rather than as a list of code spans."
        >
          <div className={CHEAT_GRID_CLASS}>
            {CHEAT_SHEET.map((section) => (
              <div key={section.group}>
                <h3 className={CHEAT_GROUP_TITLE_CLASS}>{section.group}</h3>
                {section.items.map((item) => (
                  <div key={item.label} className={CHEAT_ROW_CLASS}>
                    <span>{item.label}</span>
                    <Kbd.Group
                      color={color}
                      size="sm"
                      keys={[...item.keys]}
                      raised
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>
      </LazySection>
    </ShowcaseShell>
  );
}
