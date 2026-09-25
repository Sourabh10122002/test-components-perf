// Showcase ported from origin/sidebar:src/components/SideBar/stories/SideBar.stories.tsx (ShowCase)
import React, { useState } from "react";
import { SideBar, MainContent, SideBarCollapseButton } from "@inventive-ui/components/SideBar";
import SideBarProvider from "@inventive-ui/components/SideBar";
import type { SidebarOnInteraction } from "@inventive-ui/components/SideBar";
import { LazySection } from "../storybook";
import { ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../storybook";
import type { JSX } from "react/jsx-runtime";
import { SIDEBAR_INNER_COLLAPSED_WIDTH } from "../story-helpers/SideBar/utils";
import { cn } from "@inventive-ui/framework";
import { SlotRenderer } from "@inventive-ui/framework/slots";

/* ----------------------------- DATA FOR STORIES ------------------------------ */

const sidebarMenuData = [
  {
    type: "Item",
    children: "Dashboard",
    props: {
      id: "0",
      active: true,
      prefix: { type: "icon", name: "@placeholder", size: "md", filled: false },
    },
  },
  {
    type: "Item",
    children: "Profile",
    props: {
      id: "1",
      active: false,
      prefix: { type: "icon", name: "@placeholder", size: "md", filled: false },
    },
  },
  {
    type: "Item",
    children: "Messages",
    props: {
      id: "2",
      active: false,
      prefix: { type: "icon", name: "@placeholder", size: "md", filled: false },
    },
  },
  {
    type: "Item",
    children: "Settings",
    props: {
      id: "3",
      active: false,
      prefix: { type: "icon", name: "@placeholder", size: "md", filled: false },
    },
  },
  {
    type: "Item",
    children: "Help & Support",
    props: {
      id: "4",
      active: false,
      prefix: { type: "icon", name: "@placeholder", size: "md", filled: false },
    },
  },
];

const sidebarLabelOnlyData = [
  {
    type: "Item",
    children: "Dashboard",
    props: {
      id: "0",
      // href: "/dashboard",
      active: true,
    },
  },
  {
    type: "Item",
    children: "Profile",
    props: {
      id: "1",
      // href: "/profile",
      active: false,
    },
  },
  {
    type: "Item",
    children: "Messages",
    props: {
      id: "2",
      // href: "/messages",
      active: false,
    },
  },
  {
    type: "Item",
    children: "Settings",
    props: {
      id: "3",
      // href: "/settings",
      active: false,
    },
  },
  {
    type: "Item",
    children: "Help & Support",
    props: {
      id: "4",
      // href: "/help",
      active: false,
    },
  },
];

const mapInteractionVariantToOnInteraction = (
  interactionVariant: "none" | "solid" | "solid-outline" | "ghost",
): SidebarOnInteraction => {
  const map = {
    none: "none",
    solid: "hover-solid",
    "solid-outline": "hover-solid-outline",
    ghost: "hover-ghost",
  } as const;

  return map[interactionVariant] || "none";
};

const applyItemControlProps = (
  items: Record<string, any>[] | undefined,
  args: any,
): Record<string, any>[] | undefined => {
  if (!items) return items;

  return items.map((item, index): Record<string, any> => {
    if (item.type === "Item") {
      const isFirstItem = index === 0;

      return {
        ...item,
        props: {
          ...item.props,
          active: isFirstItem ? args.active : item.props?.active,
          disabled: args.disabled,
          showItemMenu: args.showItemMenu,
          helperText: isFirstItem ? args.helperText : item.props?.helperText,
          helperTextPosition: isFirstItem
            ? args.helperTextPosition
            : item.props?.helperTextPosition,
        },
      };
    }

    if (item.type === "Group" || item.type === "GroupContent") {
      return {
        ...item,
        children: applyItemControlProps(item.children, args),
      };
    }

    return item;
  });
};

const otherArgs = {
  collapseBtnPosition: "bottom",
  footer: false,
  header: true,
};

type RenderComponentProps = {
  bodyContent: Record<string, any>[] | string | undefined;
};

const RenderComponent = (
  args: RenderComponentProps,
): JSX.Element | null | string => {
  const { bodyContent } = args;

  if (!bodyContent) return <></>;
  if (typeof bodyContent === "string") return bodyContent;

  return (
    <>
      {bodyContent.map((item, index) => {
        if (item.type === "Group") {
          return (
            <SideBar.Group {...item.props} key={index}>
              <RenderComponent bodyContent={item.children} />
            </SideBar.Group>
          );
        } else if (item.type === "GroupLabel") {
          return (
            <SideBar.GroupLabel {...item.props} key={index}>
              <RenderComponent bodyContent={item.children} />
            </SideBar.GroupLabel>
          );
        } else if (item.type === "GroupContent") {
          return (
            <SideBar.GroupContent {...item.props} key={index}>
              <RenderComponent bodyContent={item.children} />
            </SideBar.GroupContent>
          );
        } else if (item.type === "Item") {
          return (
            <SideBar.Item {...item.props} key={index}>
              <RenderComponent bodyContent={item.children} />
            </SideBar.Item>
          );
        }

        return "none";
      })}
    </>
  );
};

const DefaultSidebar = (props: any): JSX.Element => {
  const args = { ...otherArgs, ...props.args };
  const itemMenuOnInteraction = mapInteractionVariantToOnInteraction(
    args.interactionVariant || "none",
  );

  const itemMenuContent = args.itemMenuContent || [
    {
      label: "Pin",
      onInteraction: itemMenuOnInteraction,
    },
    {
      label: "Duplicate",
      onInteraction: itemMenuOnInteraction,
    },
    {
      label: "Delete",
      color: "danger",
      onInteraction: itemMenuOnInteraction,
    },
  ];

  const resolvedItems = applyItemControlProps(args.items, args);
  const DefaultcollapseBtn = args.defaultCollapseBtn || false;

  return (
    <SideBarProvider {...args} itemMenuContent={itemMenuContent}>
      <SideBar>
        {args.header && (
          <SideBar.Header
            className={cn(
              "p-4 border-b border-gray-20",
              args.sidebarClassName,
            )}
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold shrink-0 shadow-sm">
                UI
              </div>
              {args.open && args.collapseLayout != "compact-hidden" && (
                <span className="font-bold text-lg text-slate-800 flex-1 ms-3 truncate">
                  Inventive App
                </span>
              )}
            </div>
          </SideBar.Header>
        )}
        <SideBar.Body className={cn("py-2", args.bodyClassName)}>
          {args.body || <RenderComponent bodyContent={resolvedItems} />}
        </SideBar.Body>
        {args.footer && (
          <SideBar.Footer className={cn("w-full py-2 ", args.footerClassName)}>
            <div className={"p-2 border-t border-gray-20"}>
              <SlotRenderer
                slot={{
                  type: "button",
                  color: "white",
                  className:
                    "flex items-center justify-between w-full p-2 gap-5 hover:bg-slate-200/50 transition-colors text-start outline-none",
                }}
              >
                <div className="w-9 h-9 rounded-full bg-indigo-600 shrink-0 border-2 border-white shadow-sm flex items-center justify-center text-white font-bold text-xs">
                  AD
                </div>

                <div className="flex flex-col ms-4">
                  <span className="text-sm font-semibold text-slate-500 truncate">
                    Admin User
                  </span>
                  <span className="text-xs text-slate-500 truncate">
                    admin@inventive.io
                  </span>
                </div>
              </SlotRenderer>
            </div>
          </SideBar.Footer>
        )}
        {DefaultcollapseBtn && (
          <div className="absolute top-4 -end-4 z-[999] flex items-center justify-center bg-white dark:bg-neutral-800 shadow-md border border-gray-20 rounded-lg transition-all">
            <SideBarCollapseButton />
          </div>
        )}
      </SideBar>

      <MainContent
        className={cn(
          "relative bg-slate-50 border-s border-gray-20 flex flex-col overflow-visible",
          args.mainContentClassName,
        )}
      >
        {/* Added overflow-visible to the wrapper so the negative positioning isn't clipped */}
        <div className="relative w-full h-full flex flex-col overflow-visible">
          {props.children ? (
            props.children
          ) : (
            <div className="p-8 w-full h-full flex flex-col items-center justify-center text-gray-40 border-2 border-dashed border-gray-30 rounded-lg">
              Main Content Area
            </div>
          )}
        </div>
      </MainContent>
    </SideBarProvider>
  );
};

const FocusPropsExample = (props: { args: any }): JSX.Element => {
  const { args } = props;
  const [open, setOpen] = useState(false);
  const [returnFocusOnClose, setReturnFocusOnClose] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const triggerButtonRef = React.useRef<HTMLButtonElement>(null);

  // Filter the data based on the search query
  const filteredData = sidebarLabelOnlyData.filter((item) =>
    typeof item.children === "string"
      ? item.children.toLowerCase().includes(searchQuery.toLowerCase())
      : true,
  );

  return (
    <div className="mt-4 grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <button
          ref={triggerButtonRef}
          type="button"
          onClick={() => setOpen((currentOpen) => !currentOpen)}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          {open ? "Close sidebar" : "Open sidebar"}
        </button>
        <p className="text-gray-50">
          Opening focuses the search field; closing returns focus to this button
          when enabled.
        </p>
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-60">
        <input
          type="checkbox"
          checked={returnFocusOnClose}
          onChange={(event) => setReturnFocusOnClose(event.target.checked)}
        />
        Return focus to the trigger on close
      </label>

      <div className="relative h-96">
        <SideBarProvider
          {...args}
          open={open}
          initialFocusRef={searchInputRef}
          finalFocusRef={triggerButtonRef}
          returnFocusOnClose={returnFocusOnClose}
          items={sidebarLabelOnlyData}
          collapseLayout={"standard"}
        >
          <SideBar>
            <SideBar.Header>
              <h2
                className="text-center"
                style={{ width: SIDEBAR_INNER_COLLAPSED_WIDTH }}
              >
                IUI
              </h2>
            </SideBar.Header>
            <SideBar.Body>
              <SideBar.Group hideOnClose>
                <SideBar.GroupContent>
                  <div className="px-3 pb-3">
                    <input
                      ref={searchInputRef}
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full rounded-md border border-gray-20 px-3 py-2 text-sm outline-none transition focus:border-slate-500"
                    />
                  </div>
                </SideBar.GroupContent>
              </SideBar.Group>

              <RenderComponent bodyContent={filteredData} />

              {filteredData.length === 0 && (
                <div className="px-4 py-6 text-center text-sm text-gray-50">
                  No results found
                </div>
              )}
            </SideBar.Body>
          </SideBar>
          <MainContent className="relative z-0">
            <div className="p-6 text-sm text-gray-50">
              Use the button to open and close the sidebar. Type in the input to
              see filtering in action.
            </div>
          </MainContent>
        </SideBarProvider>
      </div>
    </div>
  );
};

const NavigationWithSearchExample = (props: { args: any }): JSX.Element => {
  const { args } = props;
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = sidebarMenuData.filter((item) =>
    typeof item.children === "string"
      ? item.children.toLowerCase().includes(searchQuery.toLowerCase())
      : true,
  );

  return (
    <DefaultSidebar
      args={{
        ...args,
        className: "h-[650px]", // Made it consistent with the other examples
        mainContentClassName: "p-4",
        body: (
          <>
            {/* ADDED hideOnClose to hide the custom input entirely when collapsed */}
            <SideBar.Group hideOnClose>
              <SideBar.GroupContent>
                <div className="px-3 pb-2 pt-4">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search workspace..."
                    className="w-full rounded-md border border-gray-30 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
                  />
                </div>
              </SideBar.GroupContent>
            </SideBar.Group>

            <SideBar.Group>
              <SideBar.GroupLabel>Main Menu</SideBar.GroupLabel>
              <SideBar.GroupContent>
                <RenderComponent bodyContent={filteredData} />
                {filteredData.length === 0 && (
                  <div className="px-4 py-6 text-center text-sm text-gray-50">
                    No results found
                  </div>
                )}
              </SideBar.GroupContent>
            </SideBar.Group>
          </>
        ),
      }}
    />
  );
};

// Story params were: (args, { globals })
const commonArgs = {
  adaptive: true,
  appearance: "soft",
  active: true,
  collapseBehaviour: "scroll",
  collapseLayout: "compact",
  disabled: false,
  helperText: "",
  showLabel: false,
  helperTextPosition: "below",
  indicator: false,
  argsColor: undefined,
  defaultCollapseBtn: false,
  interactionVariant: "none",
  type: "Inline",
  open: true,
  size: "base",
  variant: "solid",
  header: false,
  footer: true,
};

// Story args: { ...(commonArgs as any) } (meta defines no args)
export default function SideBarShowcase() {
  const globals = {};
  const args = { ...(commonArgs as any) };
    return (
      <ShowcaseShell
        globals={globals}
        className={cn(SHOWCASE_CONTAINER_CLASS, "p-0")}
      >
        <div className="p-4">
          <h3>Variants x Appearence</h3>
          <p className="text-gray-50">Solid x Soft</p>
          <LazySection>
            <DefaultSidebar
              args={{
                ...args,
                footer: false,
                variant: "solid",
                appearance: "soft",
                items: sidebarMenuData,
                mainContentClassName: "p-4",
                defaultCollapseBtn: true,
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">Solid x Strong</p>
            <DefaultSidebar
              args={{
                ...args,
                variant: "solid",
                appearance: "strong",
                items: sidebarMenuData,
                mainContentClassName: "p-4",
                defaultCollapseBtn: true,
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">Outline</p>
            <DefaultSidebar
              args={{
                ...args,
                variant: "outline",
                appearance: "soft",
                items: sidebarMenuData,
                mainContentClassName: "p-4",
                defaultCollapseBtn: true,
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">Solid Outline</p>
            <DefaultSidebar
              args={{
                ...args,
                variant: "solid-outline",
                appearance: "soft",
                items: sidebarMenuData,
                mainContentClassName: "p-4",
                defaultCollapseBtn: true,
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">Ghost</p>
            <DefaultSidebar
              args={{
                ...args,
                variant: "ghost",
                appearance: "soft",
                items: sidebarMenuData,
                mainContentClassName: "p-4",
                defaultCollapseBtn: true,
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <h3>Sizes</h3>
          <LazySection>
            <p className="text-gray-50">XS</p>
            <DefaultSidebar
              args={{ ...args, size: "xs", items: sidebarMenuData,mainContentClassName: "p-4",
                defaultCollapseBtn: true, }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">SM</p>
            <DefaultSidebar
              args={{ ...args, size: "sm", items: sidebarMenuData, mainContentClassName: "p-4",
                defaultCollapseBtn: true, }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">Base</p>
            <DefaultSidebar
              args={{ ...args, size: "base", items: sidebarMenuData,mainContentClassName: "p-4",
                defaultCollapseBtn: true, }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">LG</p>
            <DefaultSidebar
              args={{ ...args, size: "lg", items: sidebarMenuData, mainContentClassName: "p-4",
                defaultCollapseBtn: true, }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <p className="text-gray-50">XL</p>
            <DefaultSidebar
              args={{ ...args, size: "xl", items: sidebarMenuData, mainContentClassName: "p-4",
                defaultCollapseBtn: true, }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>1. Icon Only (Without Expandable)</h3>
            <DefaultSidebar
              args={{
                ...args,
                variant: "solid",
                open: false,
                showLabel: false,
                size: "lg",
                items: sidebarMenuData,
                mainContentClassName: "p-4"
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>2. Icon Only (With Expandable)</h3>
            <DefaultSidebar
              args={{
                ...args,
                variant: "solid",
                open: false,
                showLabel: false,
                size: "base",
                items: sidebarMenuData,
                mainContentClassName: "p-4",
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>3. Icon With Labels (Without Expandable)</h3>
            <DefaultSidebar
              args={{
                ...args,
                variant: "solid",
                open: false,
                showLabel: true,
                items: sidebarMenuData,
                mainContentClassName: "p-4"
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>4. Label Only (Without Collapse)</h3>
            <DefaultSidebar
              args={{
                ...args,
                variant: "solid",
                open: true,
                items: sidebarLabelOnlyData,
                mainContentClassName: "p-4"
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>5. Focus Props Example</h3>
            <FocusPropsExample
              args={{
                ...args,
                variant: "solid",
                appearance: "soft",
                showLabel: true,
                collapseLayout: "compact",
                collapseBehaviour: "scroll",
                items: sidebarLabelOnlyData,
                header: false,
                footer: false,
                mainContentClassName: "p-4",
                defaultCollapseBtn: true,
              }}
            />
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>6. Navigation with Search</h3>
            <p className="text-gray-50 mb-4">
              Sidebar containing a search input for global filtering and
              navigation.
            </p>
            <div className="relative border border-gray-20 rounded-xl overflow-hidden shadow-sm bg-white">
              <NavigationWithSearchExample args={args} />
            </div>
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>7. Filter & Input Panel</h3>
            <p className="text-gray-50 mb-4">
              Sidebar acting as a filtering sidebar with checkboxes, selects,
              and generic inputs.
            </p>
            <div className="relative h-[650px] border border-gray-20 rounded-xl overflow-hidden shadow-sm bg-white">
              <DefaultSidebar
                args={{
                  ...args,
                  header: false,
                  footer: false,
                  mainContentClassName: "p-4",
                  body: (
                    <>
                      {/* ADDED hideOnClose to all custom filter groups */}
                      <SideBar.Group hideOnClose>
                        <SideBar.GroupContent>
                          <div className="px-3 py-3 font-semibold text-gray-70">
                            Filters
                          </div>
                        </SideBar.GroupContent>
                      </SideBar.Group>

                      <SideBar.Group hideOnClose>
                        <SideBar.GroupLabel>Categories</SideBar.GroupLabel>
                        <SideBar.GroupContent>
                          <div className="px-4 py-2 flex flex-col gap-3 text-sm text-gray-60">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-30"
                                defaultChecked
                              />
                              Design Systems
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-30"
                              />
                              Templates
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-30"
                                defaultChecked
                              />
                              Components
                            </label>
                          </div>
                        </SideBar.GroupContent>
                      </SideBar.Group>

                      <SideBar.Group hideOnClose>
                        <SideBar.GroupLabel>Sort By</SideBar.GroupLabel>
                        <SideBar.GroupContent>
                          <div className="px-4 py-2">
                            <select className="w-full rounded-md border border-gray-20 px-2 py-2 text-sm outline-none cursor-pointer bg-white">
                              <option>Most Recent</option>
                              <option>Alphabetical</option>
                              <option>Most Popular</option>
                            </select>
                          </div>
                        </SideBar.GroupContent>
                      </SideBar.Group>

                      <SideBar.Group hideOnClose>
                        <SideBar.GroupLabel>Price Range</SideBar.GroupLabel>
                        <SideBar.GroupContent>
                          <div className="px-4 py-2 flex items-center gap-2">
                            <input
                              type="number"
                              placeholder="Min"
                              className="w-full rounded border border-gray-20 px-2 py-1.5 text-sm outline-none"
                            />
                            <span>-</span>
                            <input
                              type="number"
                              placeholder="Max"
                              className="w-full rounded border border-gray-20 px-2 py-1.5 text-sm outline-none"
                            />
                          </div>
                        </SideBar.GroupContent>
                      </SideBar.Group>
                    </>
                  ),
                }}
              />
            </div>
          </LazySection>
          <br />
          <br />
          <br />
          <LazySection>
            <h3>8. Workspace & User Profile</h3>
            <p className="text-gray-50 mb-4">
              A production-ready application sidebar featuring a dropdown
              workspace switcher, secondary utility navigation, and a user
              profile context menu.
            </p>

            <div className="relative h-[650px] bg-white border border-gray-20 rounded-xl overflow-hidden shadow-sm">
              <SideBarProvider {...args} open={true}>
                <SideBar>
                  {/* Custom Workspace Header */}
                  <SideBar.Header className="w-full">
                    <div className={cn("border-b border-gray-10 p-2")}>
                      <button className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded-lg transition-colors group outline-none focus:ring-2 focus:ring-brand-500">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-8 h-8 rounded bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                            Ac
                          </div>
                          {/* flex-1 and min-w-0 ensures the text smoothly clips when collapsed */}
                          <div className="flex flex-col items-start flex-1 min-w-0">
                            <span className="text-sm font-semibold leading-tight text-gray-90 truncate w-full text-left">
                              Acme Corp
                            </span>
                            <span className="text-xs text-gray-50 truncate font-medium mt-0.5 w-full text-left">
                              Enterprise Plan
                            </span>
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-40 group-hover:text-gray-60 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                          />
                        </svg>
                      </button>
                    </div>
                  </SideBar.Header>

                  <SideBar.Body>
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <RenderComponent bodyContent={sidebarMenuData} />
                      </div>

                      {/* ADDED hideOnClose for the custom secondary utility navigation */}
                      <SideBar.Group hideOnClose>
                        <SideBar.GroupContent>
                          <div className="px-3 pb-2 pt-6">
                            <div className="mb-2 px-3 text-xs font-semibold text-gray-40 uppercase tracking-wider">
                              Your Team
                            </div>
                            <div className="space-y-1">
                              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-60 hover:bg-gray-50 hover:text-gray-90 rounded-md transition-colors outline-none">
                                <svg
                                  className="w-4 h-4 text-gray-40"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                  />
                                </svg>
                                Invite Members
                              </button>
                              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-60 hover:bg-gray-50 hover:text-gray-90 rounded-md transition-colors outline-none">
                                <svg
                                  className="w-4 h-4 text-gray-40"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                Workspace Settings
                              </button>
                            </div>
                          </div>
                        </SideBar.GroupContent>
                      </SideBar.Group>
                    </div>
                  </SideBar.Body>

                  <SideBar.Footer className="w-full">
                    <div className="border-t border-gray-10 p-3">
                      <button className="flex items-center justify-between w-full hover:bg-gray-50 rounded-lg p-2 transition-colors group outline-none focus:ring-2 focus:ring-brand-500">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0 border border-slate-200">
                            <svg
                              className="w-5 h-5 text-slate-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          {/* flex-1 and min-w-0 ensures the text smoothly clips when collapsed */}
                          <div className="flex flex-col items-start flex-1 min-w-0">
                            <span className="text-sm font-semibold text-gray-90 truncate w-full text-left">
                              Jane Doe
                            </span>
                            <span className="text-xs text-gray-50 truncate w-full text-left mt-0.5">
                              jane@inventive-ui.com
                            </span>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-40 group-hover:text-gray-70 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </SideBar.Footer>
                </SideBar>

                <MainContent className="relative z-0 bg-white border-s border-gray-20">
                  <div className="h-16 border-b border-gray-10 flex items-center px-8 bg-white/80 backdrop-blur-sm sticky top-0">
                    <h1 className="text-xl font-semibold text-gray-90 tracking-tight">
                      Overview
                    </h1>
                  </div>
                  <div className="p-8 w-full h-[calc(100%-4rem)] flex flex-col items-center justify-center bg-slate-50/30">
                    <div className="text-gray-40 border-2 border-dashed border-gray-20 rounded-xl p-12 text-center max-w-sm w-full bg-white">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                        <svg
                          className="w-6 h-6 text-slate-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-90 mb-1">
                        Select an item
                      </h3>
                      <p className="text-sm text-gray-50">
                        Navigate using the sidebar to view detailed information.
                      </p>
                    </div>
                  </div>
                </MainContent>
              </SideBarProvider>
            </div>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
  }
