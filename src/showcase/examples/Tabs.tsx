// Showcase ported from origin/tabs:src/components/Tabs/stories/Tabs.stories.tsx
import React, { useEffect, useState } from "react";
import { cn } from "@inventive-ui/framework";
import {
  LazySection,
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";
import { DeferredRenderer } from "../story-helpers/Tabs/DeferredRenderer";

import { Tabs } from "@inventive-ui/components/Tabs";
import { tabBigData, tabData, tabSmallData } from "../story-helpers/Tabs/constants";
import { availableColorPalettes } from "@inventive-ui/framework";

// Stand-in for Storybook's action() from @storybook/addon-actions.
const action = (name: string) => (...values: unknown[]) => console.log(name, ...values);

const commonArgs = {
  adaptive: true,
  appearance: "soft",
  closable: false,
  closeButtonProps: { "aria-label": "Close tab" },
  centered: false,
  indicatorAnimation: "slide",
  layout: "dropdown",
  lazyMount: false,
  fullWidth: false,
  orientation: "horizontal",
  rearrangeable: false,
  role: "tab",
  "aria-label": "Tabs List",
  "aria-orientation": "horizontal",
  showAddButton: false,
  size: "base",
  iconPosition: "start",
  tabGap: 0,
  unmountOnExit: false,
  variant: "ghost",
} as any;

/* ---------------------------- HELPER FUNCTIONS FOR STORYBOOK DEMO ONLY ------------------------------- */

const STORY_SECTION_CLASS = "space-y-4";

const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1";

const STORY_SECTION_DESC_CLASS = "text-sm text-gray-600 dark:text-gray-400";

const STORY_CARD_CLASS =
  "flex flex-col items-center gap-2 p-4  w-full border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800";

const STORY_GRID_CLASS = "grid grid-cols-1 gap-4";

const PREFIX_SLOTS_DATA = [
  {
    id: "icon",
    label: "Icon",
    content: "Icon content",
    prefix: { type: "icon", name: "@placeholder" },
  },
  {
    id: "avatar",
    label: "Avatar",
    content: "Avatar content",
    prefix: {
      type: "avatar",
      name: "profile",
      img: { src: "https://i.pravatar.cc/300", alt: "User" },
      size: "xs",
    },
  },
  {
    id: "badge-counter",
    label: "Counter",
    content: "Counter content",
    prefix: {
      type: "badge-counter",
      counter: 99,
      size: "sm",
      color: "brand",
      variant: "solid",
      appearance: "strong",
      className: "text-white",
    },
  },
  {
    id: "badge-dot",
    label: "Dot",
    content: "Dot content",
    prefix: {
      type: "badge-dot",
      variant: "solid",
      appearance: "strong",
      color: "success",
      size: "lg",
    },
  },
  {
    id: "badge-label",
    label: "Label",
    content: "Label content",
    prefix: {
      type: "badge-label",
      color: "success",
      label: "new",
      className: "text-white",
      size: "xs",
    },
  },
  {
    id: "badge-status",
    label: "Status",
    content: "Status content",
    prefix: {
      type: "badge-status-indicator",
      adaptive: true,
      appearance: "strong",
      cTag: "online",
      disabled: false,
      invisible: false,
      layer: { size: "", color: "" },
      size: "base",
      color: "success",
      iconSlot: "@check",
      tooltip: {
        cTag: "primary",
        placement: "top",
        trigger: "hover",
        variant: "solid",
        appearance: "strong",
        showArrow: true,
        offset: 0,
        noWrap: false,
        enterDelay: 150,
        color: "accent-4",
        description: "",
      },
      variant: "solid",
    },
  },
  {
    id: "color-logo",
    label: "Color Logo",
    content: "Color Logo content",
    prefix: {
      type: "color-logo",
      name: "@placeholder",
    },
  },
  {
    id: "color-swatch",
    label: "Swatch",
    content: "Swatch content",
    prefix: {
      type: "color-swatch",
      color: "#3b82f6",
      ratio: "2:1",
    },
  },
  {
    id: "emoji",
    label: "Emoji",
    content: "Emoji content",
    prefix: {
      type: "emoji",
      name: "@placeholder",
    },
  },
  {
    id: "file-type",
    label: "File",
    content: "File content",
    prefix: {
      type: "file-type",
      extension: "@placeholder",
      size: "base",
    },
  },
  {
    id: "flag",
    label: "Flag",
    content: "Flag content",
    prefix: {
      type: "flag",
      code: "@placeholder",
      shape: "rectangle",
      size: "base",
    },
  },
  {
    id: "kbd",
    label: "Kbd",
    content: "Kbd content",
    prefix: {
      type: "kbd",
      label: "C",
      size: "xs",
      appearance: "soft",
    },
  },
  {
    id: "loader",
    label: "Loader",
    content: "Loader content",
    prefix: {
      type: "loader",
      size: "xs",
    },
  },
  {
    id: "logo",
    label: "Logo",
    content: "Logo content",
    prefix: {
      type: "logo",
      name: "@placeholder",
      color: "currentcolor",
    },
  },
];

const STORY_TH_CENTER_CLASS =
  "border border-gray-300 dark:border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-zinc-300";

const STORY_TD_CONTENT_CLASS =
  "border border-gray-300 dark:border-zinc-700 px-6 py-8 text-center";

const STORY_CENTER_FLEX_CLASS = "w-100";

const STORY_TD_LABEL_CLASS =
  "border border-gray-300 dark:border-zinc-700 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent dark:bg-zinc-800 dark:text-zinc-300";

interface TabsDefaultProps {
  args: any;
  globals: any;
}

const TabsDefault: React.FC<TabsDefaultProps> = ({ args, globals }) => {
  const getColor = (args: any, globals: any) =>
    args.color || globals.themeColor || globals.color;

  const [tabs, setTabs] = useState<Record<string, any>[]>(args.tabs || []);

  const [activeTab, setActiveTab] = useState(args.activeTab || tabs[0]?.id);

  const addTab = () => {
    if (args.layout === "dynamic" && tabs.length >= 9) return;
    if (args.layout !== "dynamic" && tabs.length >= 12) return;

    const newTabId = `tab${crypto.randomUUID().slice(0, 8)}`;
    setTabs((prevTabs) => [
      ...prevTabs,
      {
        id: newTabId,
        label: `Tabs`,
        content: `tab content`,
        disabled: false,
        active: false,
        lslot: {
          type: "icon",
          name: "@plus",
        },
        helperText: "",
        helperTextPosition: "bottom",
      },
    ]);
    handleOnValueChange(newTabId);
    action("tab added")(newTabId);
  };

  const handleCloseTab = (closedTabId: string) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== closedTabId));

    action("tab closed")(closedTabId);
  };

  const handleOnValueChange = (newValue: string) => {
    action("value changed")(newValue);

    setActiveTab(newValue);
  };

  const handleReorder = (newItems: string[]) => {
    const items = [...newItems];

    const id_tab = new Map();

    tabs.forEach((tab) => {
      id_tab.set(tab.id, tab);
    });

    const newTabsArray = items.map((itemId) => ({ ...id_tab.get(itemId) }));

    setTabs(newTabsArray);

    action("Reordered");
  };
  const handleNewTabs = () => {
    if (!args.tabs) return;
    setTabs(args.tabs);
  };

  useEffect(() => {
    handleNewTabs();
  }, [args.tabs]);

  return (
    <DeferredRenderer>
      <Tabs
        {...args}
        color={getColor(args, globals)}
        onAdd={addTab}
        onCloseTab={handleCloseTab}
        onValueChange={handleOnValueChange}
        reorder={handleReorder}
        activeTab={activeTab}
      >
        <Tabs.List dropdownLabel={args.dropdownLabel} className="w-fit">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              prefix={tab.prefix}
              suffix={tab.suffix}
              icon={tab.icon}
              iconPosition={tab.iconPosition || args.iconPosition}
              loading={tab.loading}
              disabled={tab.disabled}
              helperText={tab.helperText}
              helperTextPosition={tab.helperTextPosition}
              tooltip={tab.tooltip}
              description={tab.description}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {!args.hideContent &&
          (args.useContentGroup ? (
            <Tabs.ContentGroup
              className={cn(args.contentGropClassName)}
              smoothScroll={args.smoothScroll}
            >
              {tabs.map((tab) => (
                <Tabs.Content
                  preload={tab.preload}
                  key={tab.id}
                  value={tab.id}
                  className={"p-2 text-start"}
                >
                  {tab.content}
                </Tabs.Content>
              ))}
            </Tabs.ContentGroup>
          ) : (
            tabs.map((tab) => (
              <Tabs.Content
                preload={tab.preload}
                key={tab.id}
                value={tab.id}
                className={"p-2 text-start"}
              >
                {tab.content}
              </Tabs.Content>
            ))
          ))}
      </Tabs>
    </DeferredRenderer>
  );
};

/* ---------------------------- STORIES ------------------------------- */

// --- story: ShowCaseHorizontal ---
function ShowCaseHorizontalStory() {
  const globals: Record<string, unknown> = {};
  const args = { ...(commonArgs as any), tabs: tabData };

    const theme = getShowcaseTheme(globals);
    const showcaseArgs = { ...args, ...theme.componentProps };
    void showcaseArgs; // unused in the original story; keeps noUnusedLocals quiet
    const semantic = [
      "brand",
      "neutral",
      "danger",
      "warning",
      "success",
      "info",
      "teal",
      "amber",
      "blue",
      "cyan",
      "emerald",
      "fuchsia",
      "gray",
      "green",
      "indigo",
      "orange",
      "pink",
      "purple",
      "red",
      "rose",
      "sky",
      "slate",
      "stone",
      "teal",
      "violet",
      "yellow",
      "zinc",
    ];

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div>
          <LazySection enabled={false}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Color Palette
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 flex-wrap">
                    {semantic.map((color) => (
                      <div
                        key={color}
                        className="flex flex-col items-center gap-2"
                      >
                        <TabsDefault
                          args={{
                            ...args,
                            color: color,
                            variant: "solid",
                            appearance: "soft",
                            tabs: tabSmallData,
                            showAddButton: false,
                          }}
                          globals={globals}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <h3>All Variants With appearance</h3>
          <table>
            <thead>
              <tr>
                <th className={STORY_TH_CENTER_CLASS}></th>
                <th className={STORY_TH_CENTER_CLASS}>Soft</th>
                <th className={STORY_TH_CENTER_CLASS}>Strong</th>
              </tr>
            </thead>
            <tbody>
              {/* Row: solid */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>solid</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        appearance: "soft",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        appearance: "strong",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: solid-outline */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>solid-outline</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid-outline",
                        appearance: "soft",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid-outline",
                        appearance: "strong",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: underline */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>underline</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "underline",
                        appearance: "soft",
                        tabs: tabSmallData,
                        indicatorAnimation: "none",
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "underline",
                        appearance: "strong",
                        indicatorAnimation: "none",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: enclosed */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>enclosed</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "enclosed",
                        appearance: "soft",
                        tabs: tabSmallData,
                        showAddButton: false,
                        className: "w-80",
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "enclosed",
                        appearance: "strong",
                        tabs: tabSmallData,
                        showAddButton: false,
                        className: "w-80",
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: Scoped */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>scoped</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "scoped",
                        appearance: "soft",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "scoped",
                        appearance: "strong",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: Ghost */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>ghost</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "ghost",
                        appearance: "soft",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "ghost",
                        appearance: "strong",
                        tabs: tabSmallData,
                        showAddButton: false,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <h3>All Sizes</h3>
          <p className={"text-gray-500"}>XS</p>
          <TabsDefault args={{ ...args, size: "xs" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>SM</p>
          <TabsDefault args={{ ...args, size: "sm" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>Base</p>
          <TabsDefault args={{ ...args, size: "base" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>LG</p>
          <TabsDefault args={{ ...args, size: "lg" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>XL</p>
          <TabsDefault args={{ ...args, size: "xl" }} globals={globals} />
          <br />
          <br />
          <br />
          <h3>States</h3>
          <p className={"text-gray-500"}>1. Loading</p>
          <TabsDefault
            args={{
              ...args,
              tabs: [
                {
                  id: "1",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "2",
                  label: "Tabs",
                  content: "tab content",
                  loading: true,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "3",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "4",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
              ],
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>2. Disabled</p>
          <TabsDefault
            args={{
              ...args,
              tabs: [
                {
                  id: "1",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "2",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: true,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "3",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "4",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
              ],
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <h3>Tabs Layouts</h3>
          <p className={"opacity-60"}>Reduce the screen width to see effects</p>
          <p className={"text-gray-500"}>1. dropdown</p>
          <div className="w-100">
            <TabsDefault
              args={{
                ...args,
                showAddButton: false,
                tabs: tabBigData,
                layout: "dropdown",
                dropdownLabel: "Tabs",
                style: { width: "335px" },
              }}
              globals={globals}
            />
          </div>
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>2. Dynamic</p>
          <TabsDefault
            args={{
              ...args,
              showAddButton: false,
              tabs: tabBigData,
              layout: "dynamic",
              className: "w-100",
              enableTooltip: true,
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>3. scrollable</p>
          <TabsDefault
            args={{
              ...args,
              showAddButton: false,
              tabs: tabBigData,
              layout: "scrollable",
              className: "w-100",
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <h3>Closable</h3>
          <p className={"opacity-60"}>Closable tabs in different layouts</p>
          <p className={"text-gray-500"}>1. dropdown</p>
          <div className={"h-50"}>
            <div className="w-110">
              <TabsDefault
                args={{
                  ...args,
                  layout: "dropdown",
                  closable: true,
                  showAddButton: true,
                  dropdownLabel: "Tabs",
                  className: "",
                  variant: "scoped",
                  style: { width: "381px" },
                }}
                globals={globals}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>2. Dynamic</p>
          <div className={"h-50"}>
            <TabsDefault
              args={{
                ...args,
                layout: "dynamic",
                closable: true,
                dropdownLabel: "Tabs",
                showAddButton: true,
                enableTooltip: true,
                ClassName: "w-100",
                variant: "scoped",
              }}
              globals={globals}
            />
          </div>
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>3. scrollable</p>
          <div className={"h-50"}>
            <TabsDefault
              args={{
                ...args,
                layout: "scrollable",
                closable: true,
                showAddButton: true,
                className: "w-100",
                variant: "scoped",
              }}
              globals={globals}
            />
          </div>
          <br />
          <br />
          <br />
          <h3>Rearrangeable</h3>
          <TabsDefault
            args={{ ...args, rearrangeable: true, showAddButton: false }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <h3>Add New Tabs</h3>
          <TabsDefault
            args={{ ...args, showAddButton: true }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <h3>Full Width in Dynamic Layout</h3>
          <TabsDefault
            args={{
              ...args,
              variant: "solid",
              fullWidth: true,
              layout: "dynamic",
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <h3>Tab Gap</h3>
          <p>Example of tabGap: 2</p>
          <TabsDefault
            args={{ ...args, tabGap: 2, variant: "solid" }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <p>TabGaps X Layouts</p>
          <table>
            <thead>
              <tr>
                <th className={STORY_TH_CENTER_CLASS}>tabGap</th>
                <th className={STORY_TH_CENTER_CLASS}>Dropdown</th>
                <th className={STORY_TH_CENTER_CLASS}>Dynamic</th>
                <th className={STORY_TH_CENTER_CLASS}>Scrollable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>0</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dropdown",
                        showAddButton: false,
                        tabGap: 0,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        showAddButton: false,
                        tabGap: 0,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        showAddButton: false,
                        tabGap: 0,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>2</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dropdown",
                        showAddButton: false,
                        tabGap: 2,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        showAddButton: false,
                        tabGap: 2,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        showAddButton: false,
                        tabGap: 2,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>4</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={cn(STORY_CENTER_FLEX_CLASS, "w-95")}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dropdown",
                        showAddButton: false,
                        tabGap: 4,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        showAddButton: false,
                        tabGap: 4,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        showAddButton: false,
                        tabGap: 4,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>8</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dropdown",
                        showAddButton: false,
                        tabGap: 8,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        showAddButton: false,
                        tabGap: 8,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        showAddButton: false,
                        tabGap: 8,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>And so on...</td>
                <td className={STORY_TD_CONTENT_CLASS}></td>
                <td className={STORY_TD_CONTENT_CLASS}></td>
                <td className={STORY_TD_CONTENT_CLASS}></td>
              </tr>
            </tbody>
          </table>
          <h3>centered</h3>
          <p className={"text-gray-500"}>Centered</p>
          <div className="flex items-center justify-center">
            <TabsDefault
              args={{
                ...args,
                centered: true,
              }}
              globals={globals}
            />
          </div>
          <br />
          <br />
          <br />
          <LazySection>
            <section className={STORY_SECTION_CLASS}>
              <div>
                <h2 className={STORY_SECTION_TITLE_CLASS}>
                  Prefix Slot Options
                </h2>
                <p className={STORY_SECTION_DESC_CLASS}>
                  All available slot types that can be used in the prefix
                  position (max 5 per group)
                </p>
              </div>
              <div className={STORY_GRID_CLASS}>
                <div className={STORY_CARD_CLASS}>
                  <TabsDefault
                    args={{
                      ...args,
                      tabs: PREFIX_SLOTS_DATA.slice(0, 0 + 5),
                      showAddButton: false,
                      variant: "solid",
                      appearance: "strong",
                      color: theme.color,
                      size: "base",
                      hideContent: true,
                      className: "w-200",
                    }}
                    globals={globals}
                  />
                  <TabsDefault
                    args={{
                      ...args,
                      tabs: PREFIX_SLOTS_DATA.slice(5, 5 + 5),
                      showAddButton: false,
                      variant: "solid",
                      appearance: "strong",
                      color: theme.color,
                      size: "base",
                      hideContent: true,
                      className: "w-200",
                    }}
                    globals={globals}
                  />
                  <TabsDefault
                    args={{
                      ...args,
                      tabs: PREFIX_SLOTS_DATA.slice(10, 10 + 5),
                      showAddButton: false,
                      variant: "solid",
                      appearance: "strong",
                      color: theme.color,
                      size: "base",
                      hideContent: true,
                      className: "w-200",
                    }}
                    globals={globals}
                  />
                </div>
              </div>
            </section>
          </LazySection>
          <br />
          <br />
          <br />
          <h3>Tabs Compositions</h3>
          <TabsDefault
            args={{
              ...args,
              tabs: [
                {
                  id: "6",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  helperText: "",
                },

                {
                  id: "5",
                  label: "",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "start",
                  helperText: "",
                },
                {
                  id: "1",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "top",
                  helperText: "",
                },
                {
                  id: "2",
                  label: "Tabs",
                  content: "tab content",
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "start",
                  helperText: "",
                },
                {
                  id: "3",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "end",
                  helperText: "",
                },

                {
                  id: "4",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "bottom",
                  helperText: "",
                },
              ],

              variant: "solid",
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
        </div>
      </ShowcaseShell>
    );
  
}

// --- story: ShowCaseVertical ---
function ShowCaseVerticalStory() {
  const globals: Record<string, unknown> = {};
  const args = { ...(commonArgs as any), orientation: "vertical", tabs: tabData };

    const theme = getShowcaseTheme(globals);
    const showcaseArgs = { ...args, ...theme.componentProps };
    void showcaseArgs; // unused in the original story; keeps noUnusedLocals quiet
    const semantic = [
      "brand",
      "neutral",
      "danger",
      "warning",
      "success",
      "info",
      "teal",
      "amber",
      "blue",
      "cyan",
      "emerald",
      "fuchsia",
      "gray",
      "green",
      "indigo",
      "orange",
      "pink",
      "purple",
      "red",
      "rose",
      "sky",
      "slate",
      "stone",
      "teal",
      "violet",
      "yellow",
      "zinc",
    ];
    const accent = availableColorPalettes.filter((c) => !semantic.includes(c));
    void accent; // unused in the original story; keeps noUnusedLocals quiet

    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div>
          <LazySection enabled={false}>
            <section className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Color Palette
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 flex-wrap">
                    {semantic.map((color) => (
                      <div
                        key={color}
                        className="flex flex-col items-center gap-2"
                      >
                        <TabsDefault
                          args={{
                            ...args,
                            color: color,
                            variant: "solid",
                            appearance: "soft",
                            tabs: tabSmallData,
                            showAddButton: false,
                          }}
                          globals={globals}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <h3>All Variants With appearance</h3>
          <table>
            <thead>
              <tr>
                <th className={STORY_TH_CENTER_CLASS}></th>
                <th className={STORY_TH_CENTER_CLASS}>Soft</th>
                <th className={STORY_TH_CENTER_CLASS}>Strong</th>
              </tr>
            </thead>
            <tbody>
              {/* Row: solid */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>solid</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        appearance: "soft",
                        tabs: tabSmallData,
                        // size:"sm",
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        appearance: "strong",
                        tabs: tabSmallData,
                        // size:"sm",
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: solid-outline */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>solid-outline</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid-outline",
                        appearance: "soft",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid-outline",
                        appearance: "strong",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: underline */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>underline</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "underline",
                        appearance: "soft",
                        tabs: tabSmallData,
                        indicatorAnimation: "none",
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "underline",
                        appearance: "strong",
                        indicatorAnimation: "none",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: enclosed */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>enclosed</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "enclosed",
                        appearance: "soft",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "enclosed",
                        appearance: "strong",
                        tabs: tabSmallData,
                        // className:"w-80"
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: Scoped */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>scoped</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "scoped",
                        appearance: "soft",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "scoped",
                        appearance: "strong",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              {/* Row: Ghost */}
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>ghost</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "ghost",
                        appearance: "soft",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "ghost",
                        appearance: "strong",
                        tabs: tabSmallData,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <h3>All Sizes</h3>
          <p className={"text-gray-500"}>XS</p>
          <TabsDefault args={{ ...args, size: "xs" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>SM</p>
          <TabsDefault args={{ ...args, size: "sm" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>Base</p>
          <TabsDefault args={{ ...args, size: "base" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>LG</p>
          <TabsDefault args={{ ...args, size: "lg" }} globals={globals} />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>XL</p>
          <TabsDefault args={{ ...args, size: "xl" }} globals={globals} />
          <br />
          <br />
          <br />
          <h3>States</h3>
          <p className={"text-gray-500"}>1. Loading</p>
          <TabsDefault
            args={{
              ...args,
              tabs: [
                {
                  id: "1",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "2",
                  label: "Tabs",
                  content: "tab content",
                  loading: true,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "3",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "4",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
              ],

              className: "h-80",
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>2. Disabled</p>
          <TabsDefault
            args={{
              ...args,
              className: "h-80",
              tabs: [
                {
                  id: "1",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "2",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: true,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "3",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
                {
                  id: "4",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  lslot: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  helperText: "",
                },
              ],
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <h3>Tabs Layouts</h3>
          <p className={"opacity-60"}>Reduce the screen width to see effects</p>
          <p className={"text-gray-500"}>1. dropdown</p>
          <div className={"grid grid-rows-1 h-60"}>
            <TabsDefault
              args={{
                ...args,
                showAddButton: true,
                layout: "dropdown",
                className: "h-48",
                dropdownLabel: "Tabs",
              }}
              globals={globals}
            />
          </div>
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>2. scrollable</p>
          <div className={"grid grid-rows-1 h-60"}>
            <TabsDefault
              args={{
                ...args,
                showAddButton: true,
                tabs: tabBigData,
                layout: "scrollable",
                className: "h-50",
              }}
              globals={globals}
            />
          </div>
          <br />
          <br />
          <br />
          <h3>Closable</h3>
          <p className={"opacity-60"}>Closable tabs in different layouts</p>
          <p className={"text-gray-500"}>1. dropdown</p>
          <TabsDefault
            args={{
              ...args,
              layout: "dropdown",
              closable: true,
              showAddButton: true,
              dropdownLabel: "Tabs",
              variant: "scoped",
              className: "h-48",
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <p className={"text-gray-500"}>2. scrollable</p>
          <div className={"grid grid-rows-1 h-60"}>
            <TabsDefault
              args={{
                ...args,
                variant: "scoped",
                closable: true,
                showAddButton: false,
                tabs: tabBigData,
                layout: "scrollable",
                className: "h-50",
              }}
              globals={globals}
            />
          </div>
          <br />
          <br />
          <br />
          <h3>Rearrangeable</h3>
          <TabsDefault
            args={{
              ...args,
              rearrangeable: true,
              showAddButton: false,
              className: "h-80",
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
          <h3>Add New Tabs</h3>
          <TabsDefault
            args={{
              ...args,
              showAddButton: true,

              className: "h-48",
            }}
            globals={globals}
          />
          <p>TabGaps X Layouts</p>
          <table>
            <thead>
              <tr>
                <th className={STORY_TH_CENTER_CLASS}>tabGap</th>
                <th className={STORY_TH_CENTER_CLASS}>Dropdown</th>
                <th className={STORY_TH_CENTER_CLASS}>Dynamic</th>
                <th className={STORY_TH_CENTER_CLASS}>Scrollable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>0</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={cn(STORY_CENTER_FLEX_CLASS)}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        layout: "dropdown",
                        showAddButton: false,
                        className: "h-50",
                        tabGap: 0,

                        dropdownLabel: "Tabs",
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        className: "w-40",
                        showAddButton: false,
                        tabGap: 0,
                        enableTooltip: true,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        className: "h-30",
                        showAddButton: false,
                        tabGap: 0,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>2</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dropdown",
                        className: "h-50",
                        showAddButton: false,
                        tabGap: 2,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        className: "w-40",
                        showAddButton: false,
                        tabGap: 2,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        className: "h-30",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        showAddButton: false,
                        tabGap: 2,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>4</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={cn(STORY_CENTER_FLEX_CLASS, "w-95")}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dropdown",
                        className: "h-50",
                        showAddButton: false,
                        tabGap: 4,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        className: "w-40",
                        showAddButton: false,
                        tabGap: 4,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        className: "h-50",
                        showAddButton: false,
                        tabGap: 4,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>8</td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dropdown",
                        className: "h-50",
                        showAddButton: false,
                        tabGap: 8,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "dynamic",
                        className: "w-40",
                        showAddButton: false,
                        tabGap: 8,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
                <td className={STORY_TD_CONTENT_CLASS}>
                  <div className={STORY_CENTER_FLEX_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        variant: "solid",
                        // tabs: tabSmallData,
                        layout: "scrollable",
                        className: "h-50",
                        showAddButton: false,
                        tabGap: 8,
                      }}
                      globals={globals}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={STORY_TD_LABEL_CLASS}>And so on...</td>
                <td className={STORY_TD_CONTENT_CLASS}></td>
                <td className={STORY_TD_CONTENT_CLASS}></td>
                <td className={STORY_TD_CONTENT_CLASS}></td>
              </tr>
            </tbody>
          </table>

          <LazySection>
            <section className={STORY_SECTION_CLASS}>
              <div>
                <h2 className={STORY_SECTION_TITLE_CLASS}>
                  Prefix Slot Options
                </h2>
                <p className={STORY_SECTION_DESC_CLASS}>
                  All available slot types that can be used in the prefix
                  position (one per line)
                </p>
              </div>
              <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {PREFIX_SLOTS_DATA.map((tab) => (
                  <div key={tab.id} className={STORY_CARD_CLASS}>
                    <TabsDefault
                      args={{
                        ...args,
                        tabs: [tab],
                        showAddButton: false,
                        variant: "underline",
                        appearance: "soft",
                        color: theme.color,
                        size: "base",
                        hideContent: false,
                        className: "h-fit",
                      }}
                      globals={globals}
                    />
                  </div>
                ))}
              </div>
            </section>
          </LazySection>
          <br />
          <br />
          <br />
          <h3>Tabs Compositions</h3>
          <TabsDefault
            args={{
              ...args,
              className: "h-100",
              tabs: [
                {
                  id: "5",
                  label: "Tab",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  helperText: "",
                },
                {
                  id: "6",
                  label: "",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "top",
                  helperText: "",
                },
                {
                  id: "1",
                  label: "Top",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "top",
                  helperText: "",
                },
                {
                  id: "2",
                  label: "Tabs",
                  content: "tab content",
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "start",
                  helperText: "",
                },
                {
                  id: "3",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "end",
                  helperText: "",
                },
                {
                  id: "4",
                  label: "Tabs",
                  content: "tab content",
                  loading: false,
                  disabled: false,
                  icon: {
                    type: "icon",
                    name: "@placeholder",
                  },
                  iconPosition: "bottom",
                  helperText: "",
                },
              ],
            }}
            globals={globals}
          />
          <br />
          <br />
          <br />
        </div>
      </ShowcaseShell>
    );
  
}

export default function TabsShowcase() {
  return (
    <>
      <h2 style={{ fontSize: 14, fontWeight: 600, margin: "24px 32px 0", opacity: 0.7 }}>Show Case (Horizontal)</h2>
      <ShowCaseHorizontalStory />
      <h2 style={{ fontSize: 14, fontWeight: 600, margin: "24px 32px 0", opacity: 0.7 }}>Show Case (Vertical)</h2>
      <ShowCaseVerticalStory />
    </>
  );
}
