// @ts-nocheck
// Ported from origin/drawer:src/components/Drawer/stories/Drawer.showcase.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/drawer:src/components/Drawer/stories/Drawer.showcase.stories.tsx
import { useState } from "react";
import type { DrawerBackdrop, DrawerProps } from "@inventive-ui/components/Drawer";
import { cn } from "@inventive-ui/framework";
import { LazySection } from "../storybook";
import { ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../storybook";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from "@inventive-ui/components/Drawer";

/* ---------------------------- MAPPERS ------------------------------- */

const positionLabelMap: Record<string, string> = {
  start: "Left Drawer",
  end: "Right Drawer",
  top: "Top Drawer",
  bottom: "Bottom Drawer",
};

const sizeLabelMap: Record<string, string> = {
  xs: "Extra Small",
  sm: "Small",
  base: "Medium",
  lg: "Large",
  full: "Full",
};

const backdropLabelMap: Record<string, string> = {
  none: "none",
  dim: "dim light",
  blur: "blurry effect",
};

export default function DrawerShowcase() {
  const globals: Record<string, any> = {};
    const placements: DrawerProps["placement"][] = [
      "start",
      "end",
      "top",
      "bottom",
    ];

    const sizes: DrawerProps["size"][] = ["xs", "sm", "base", "lg", "full"];
    const backdrop = ["none", "blur", "dim"];
    const [isOpen, setIsOpen] = useState(false);

    const sectionTitle =
      "text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200";

    const gridStyle =
      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12";

    const cardStyle =
      "flex flex-col items-center justify-center gap-3 p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all cursor-pointer";

    return (
      <ShowcaseShell globals={globals} className={cn(SHOWCASE_CONTAINER_CLASS, "p-0")}>
        <div className="min-h-screen bg-slate-50 p-8 text-slate-700">
          <div className="max-w-7xl mx-auto">
            {/* ------------------------------------------------------ */}
            {/* HEADER */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <header className="mb-10">
                <h1 className="text-3xl font-extrabold text-slate-900">
                  Drawer Showcase
                </h1>
                <p className="text-slate-500 mt-2">
                  Interactive gallery showcasing all Drawer configurations.
                  Click any card to open a Drawer.
                </p>
              </header>
            </LazySection>
            {/* ------------------------------------------------------ */}
            {/* POSITIONS */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Positions</h2>
                <div className={gridStyle}>
                  {placements.map((placement) => (
                    <div key={placement} className={cardStyle}>
                      <span className="text-sm font-semibold">
                        {positionLabelMap[placement as any]}
                      </span>
                      <Drawer.Overlay
                        cTag="drawer-primary"
                        placement={placement}
                        size="xs"
                        closeOnInteractionOutside
                        trigger={{ type: "button", label: placement }}
                        header={{
                          title: { label: "Drawer Position", align: "start" },
                          variant: "divider",
                        }}
                        footer={{
                          primaryAction: { type: "button", label: "Button" },
                          secondaryAction: { type: "button", label: "Button" },
                          align: "end",
                        }}
                      >
                        <DrawerHeader />
                        <DrawerBody>
                          <div className="w-full h-full">
                            <div
                              className={cn(
                                "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                              )}
                            >
                              placement : {placement}
                            </div>
                          </div>
                        </DrawerBody>
                        <DrawerFooter />
                      </Drawer.Overlay>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* SIZES */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Sizes</h2>
                <div className={gridStyle}>
                  {sizes.map((size) => (
                    <div key={size} className={cardStyle}>
                      <span className="text-sm font-semibold">
                        {sizeLabelMap[size as any]}
                      </span>
                      <Drawer.Overlay
                        cTag="drawer-primary"
                        size={size}
                        placement="end"
                        trigger={{ type: "button", label: size as string }}
                        // closeMode="default"
                        header={{
                          title: { label: "Drawer Size", align: "start" },
                          variant: "divider",
                          // closeIconPosition: "end"
                        }}
                        footer={{
                          primaryAction: { type: "button", label: "Button" },
                          secondaryAction: { type: "button", label: "Button" },
                          align: "end",
                        }}
                      >
                        <DrawerHeader />
                        <DrawerBody>
                          <div className="w-full h-full">
                            <div className="h-full flex bg-violet-100 items-center justify-center border border-dashed rounded">
                              Size: {size}
                            </div>
                          </div>
                        </DrawerBody>
                        <DrawerFooter />
                      </Drawer.Overlay>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* DRAWER TYPES */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Drawer Types</h2>
                <div className="relative w-[97%] min-h-[420px] bg-slate-100 border border-dashed border-slate-300 rounded-xl p-6 mb-12">
                  <div className="absolute inset-0 z-0 flex items-center justify-center text-slate-300 text-sm pointer-events-none uppercase tracking-[0.2em] font-bold">
                    Layout / Page Area
                  </div>
                  <div className="relative grid grid-cols-1 gap-6">
                    {/* ---------------- OVERLAY ---------------- */}
                    <div className={cardStyle}>
                      <div className="flex flex-col items-center justify-center w-full h-30 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                          Type : Overlay
                        </span>
                        <Drawer.Overlay
                          cTag="drawer-primary"
                          placement="end"
                          size="xs"
                          trigger={{ type: "button", label: "Launch Overlay" }}
                          header={{
                            title: { label: "Focus Mode" },
                            variant: "divider",
                          }}
                        >
                          <DrawerHeader />
                          <DrawerBody>
                            <div className="py-10 px-4 text-center">
                              <h1 className="text-3xl font-light text-slate-900 tracking-tighter mb-4">
                                The <span className="font-bold">Overlay</span>.
                              </h1>
                              <p className="text-sm text-slate-500 leading-relaxed">
                                Focus on the task at hand. Everything else is
                                temporarily hidden behind the veil.
                              </p>
                              <div className="mt-8 h-1 w-12 bg-violet-600 mx-auto rounded-full" />
                            </div>
                          </DrawerBody>
                        </Drawer.Overlay>
                      </div>
                    </div>
                    {/* ---------------- INLINE ---------------- */}
                    <div className={cn(cardStyle, "overflow-hidden h-[450px]")}>
                      <div className="flex flex-col w-full h-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        {/* Header with Custom Controlled Button */}
                        <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-slate-100 z-10">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                              Type : Inline
                            </span>
                            <span className="text-[10px] text-emerald-500 font-medium">
                              Layout: {isOpen ? "Compressed" : "Full"}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="px-3 py-1.5 bg-violet-100 text-violet-700 hover:bg-violet-200 rounded text-xs font-medium transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {isOpen ? "Release Content" : "Compress Layout"}
                          </button>
                        </div>
                        {/* The Magic Container */}
                        <div className="flex flex-1 overflow-auto relative bg-slate-50/50">
                          {/* 1. MAIN CONTENT AREA - Now with "Shrink" logic */}
                          <div
                            className={cn(
                              "flex-1 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out origin-center",
                              isOpen
                                ? "p-4 scale-[0.85] opacity-80"
                                : "p-12 scale-100 opacity-100",
                            )}
                          >
                            {/* Animated Visual Box */}
                            <div
                              className={cn(
                                "relative transition-all duration-700",
                                isOpen ? "mb-2" : "mb-6",
                              )}
                            >
                              <div
                                className={cn(
                                  "bg-violet-600 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-700 ease-spring",
                                  isOpen
                                    ? "w-16 h-16 rotate-0"
                                    : "w-24 h-24 rotate-12",
                                )}
                              >
                                <span className="text-white font-black text-2xl">
                                  D
                                </span>
                              </div>
                              {/* Decorative indicator of "pushed" space */}
                              <div
                                className={cn(
                                  "absolute -end-12 top-1/2 w-8 h-px bg-violet-200 transition-opacity duration-700",
                                  isOpen ? "opacity-100" : "opacity-0",
                                )}
                              />
                            </div>
                            <h3
                              className={cn(
                                "font-bold text-slate-800 transition-all duration-700",
                                isOpen ? "text-base" : "text-xl",
                              )}
                            >
                              Project Dashboard
                            </h3>
                            <p
                              className={cn(
                                "text-slate-400 transition-all duration-700 overflow-hidden",
                                isOpen
                                  ? "max-h-0 opacity-0"
                                  : "max-h-20 opacity-100 mt-2 text-sm max-w-[200px]",
                              )}
                            >
                              This area will reduce its scale and fade slightly
                              to prioritize the sidebar.
                            </p>
                            {/* Mock Content Blocks that resize */}
                            <div className="mt-6 flex gap-2">
                              <div className="h-1.5 w-8 bg-slate-200 rounded-full" />
                              <div className="h-1.5 w-12 bg-slate-200 rounded-full" />
                              <div className="h-1.5 w-8 bg-slate-200 rounded-full" />
                            </div>
                          </div>
                          <div
                            className={cn(
                              "flex-1 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out origin-center",
                              isOpen
                                ? "p-4 scale-[0.85] opacity-80"
                                : "p-12 scale-100 opacity-100",
                            )}
                          >
                            {/* Animated Visual Box */}
                            <div
                              className={cn(
                                "relative transition-all duration-700",
                                isOpen ? "mb-2" : "mb-6",
                              )}
                            >
                              <div
                                className={cn(
                                  "bg-violet-600 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-700 ease-spring",
                                  isOpen
                                    ? "w-16 h-16 rotate-0"
                                    : "w-24 h-24 -rotate-12",
                                )}
                              >
                                <span className="text-white font-black text-2xl">
                                  S
                                </span>
                              </div>
                              {/* Decorative indicator of "pushed" space */}
                              <div
                                className={cn(
                                  "absolute -end-12 top-1/2 w-8 h-px bg-violet-200 transition-opacity duration-700",
                                  isOpen ? "opacity-100" : "opacity-0",
                                )}
                              />
                            </div>
                            <h3
                              className={cn(
                                "font-bold text-slate-800 transition-all duration-700",
                                isOpen ? "text-base" : "text-xl",
                              )}
                            >
                              Project Dashboard
                            </h3>
                            <p
                              className={cn(
                                "text-slate-400 transition-all duration-700 overflow-hidden",
                                isOpen
                                  ? "max-h-0 opacity-0"
                                  : "max-h-20 opacity-100 mt-2 text-sm max-w-[200px]",
                              )}
                            >
                              This area will reduce its scale and fade slightly
                              to prioritize the sidebar.
                            </p>
                            {/* Mock Content Blocks that resize */}
                            <div className="mt-6 flex gap-2">
                              <div className="h-1.5 w-8 bg-slate-200 rounded-full" />
                              <div className="h-1.5 w-12 bg-slate-200 rounded-full" />
                              <div className="h-1.5 w-8 bg-slate-200 rounded-full" />
                            </div>
                          </div>
                          {/* 2. CONTROLLED DRAWER */}
                          <Drawer.Inline
                            cTag="drawer-primary"
                            placement="end"
                            size="xs"
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            className="shadow-[-20px_0_40px_rgba(0,0,0,0.02)] border-l border-slate-200"
                            closeMode="none"
                            header={{
                              title: { label: "Inline Drawer" },
                              variant: "divider",
                            }}
                          >
                            <DrawerHeader />
                            <DrawerBody className="bg-white">
                              <div className="space-y-6 py-4 px-2">
                                <div className="text-[10px] font-black text-violet-600 uppercase tracking-widest px-2">
                                  Live Dynamics
                                </div>
                                <div className="space-y-4">
                                  {[1, 2, 3, 4].map((i) => (
                                    <div
                                      key={i}
                                      className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100 animate-in fade-in slide-in-from-end duration-500"
                                      style={{ animationDelay: `${i * 100}ms` }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </DrawerBody>
                          </Drawer.Inline>
                        </div>
                      </div>
                    </div>
                    {/* ---------------- FLOAT ---------------- */}
                    <div className={cardStyle}>
                      <div className="flex flex-col items-center justify-center w-full h-30 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                          Type : Float
                        </span>
                        <Drawer.Float
                          cTag="drawer-primary"
                          placement="end"
                          size="xs"
                          trigger={{
                            type: "button",
                            variant: "solid",
                            label: "Hover Float",
                          }}
                          header={{
                            title: { label: "Quick Action" },
                            variant: "divider",
                          }}
                        >
                          <DrawerHeader />
                          <DrawerBody>
                            <div className="py-10 px-4 text-end">
                              <h1 className="text-3xl font-light text-slate-900 tracking-tighter mb-4">
                                The{" "}
                                <span className="font-bold italic">Float</span>.
                              </h1>
                              <p className="text-sm text-slate-500 leading-relaxed">
                                I hover gracefully. Use me for quick
                                configurations that don't interrupt your flow.
                              </p>
                              <div className="mt-8 flex justify-end gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                                <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                                <div className="h-1.5 w-8 rounded-full bg-violet-600" />
                              </div>
                            </div>
                          </DrawerBody>
                        </Drawer.Float>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* SWIPEABLE EDGE */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Swipeable Edge</h2>
                <div className={gridStyle}>
                  {(["start", "end", "bottom"] as const).map((placement) => (
                    <div key={placement} className={cardStyle}>
                      <span className="text-sm font-semibold">
                        Swipeable {placement}
                      </span>
                      <Drawer.Overlay
                        cTag="drawer-primary"
                        placement={placement}
                        swipeable
                        size="xs"
                        closeOnInteractionOutside={true}
                        trigger={{ type: "button", label: "Open" }}
                        header={{
                          prefix: {
                            icon: false,
                            addOn: false,
                          },
                          title: {
                            label: "Swipeable Drawer",
                            align: "start",
                            leading: false,
                            trailing: false,
                          },
                          variant: "divider",
                          closeIconPosition: "end",
                          description: "hello world i am best",
                          layout: "inline",
                          suffix: {
                            icon: false,
                            addOn: false,
                          },
                        }}
                        footer={{
                          primaryAction: { type: "button", label: "Button" },
                          align: "end",
                        }}
                      >
                        <DrawerHeader />
                        <DrawerBody>
                          <div className="h-full w-full bg-violet-100">
                            <div className="h-full flex items-center justify-center px-4 text-center border border-gray-40 border-dashed rounded">
                              Swiped from {placement} <br />A Swipeable Edge
                              Enabled Drawer is a high-interaction layout
                              component that remains partially visible at the
                              edge of the screen even when "closed." Instead of
                              fully unmounting, it leaves a tactile "swipe
                              handle" or "peek area" that users can click or
                              drag to pull the drawer into view. This pattern
                              mimics native mobile OS behaviors, such as pulling
                              down a notification shade or pulling up a bottom
                              sheet, providing a more fluid and intuitive user
                              experience than a traditional toggle-only drawer.
                            </div>
                          </div>
                        </DrawerBody>
                        <DrawerFooter />
                      </Drawer.Overlay>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* EXTRA CONTROLS */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Extra Controls</h2>
                <div className={gridStyle}>
                  <div className={cardStyle}>
                    <span className="text-sm font-semibold">Outlined</span>
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      outlined
                      trigger={{ type: "button", label: "Outlined" }}
                      header={{
                        title: { label: "Outlined Drawer" },
                        variant: "divider",
                      }}
                      footer={{
                        primaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed truncate border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Drawer with Outlined Style
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm font-semibold">Resizable</span>
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      resize={{ allowed: true, min: 200, max: 600 }}
                      trigger={{ type: "button", label: "Resize" }}
                      header={{
                        title: { label: "Resizable Drawer" },
                        variant: "divider",
                      }}
                      footer={{
                        primaryAction: { type: "button", label: "Button" },
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700",
                              "flex items-center justify-center",
                              "text-center p-4",
                            )}
                          >
                            Drawer with Resized feature enabled <br /> Feel free
                            to drag from the edge to get any size. <br />
                            (Min: 200px , Max: 600px) <br /> You can set any
                            size for max and min as per your requirement.
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm font-semibold">Loading</span>
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      loading
                      trigger={{ type: "button", label: "Loading" }}
                      header={{ title: { label: "Loading State" } }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed truncate border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Drawer with Outlined Style
                          </div>
                        </div>
                      </DrawerBody>
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm font-semibold">Mini Drawer</span>
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      trigger={{ type: "button", label: "mini drawer" }}
                      header={{ title: { label: "Loading State" } }}
                      height={70}
                      align="top"
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-[90%]">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700",
                              "flex items-center justify-center",
                              "text-center p-4",
                            )}
                          >
                            Drawer with smaller height <br />
                            align - top <br /> You can set any height as per
                            your requirement.
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 3. BACKDROP */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Backdrop</h2>
                <div className={gridStyle}>
                  {backdrop.map((backdrop) => (
                    <div
                      key={backdrop}
                      className={cardStyle}
                      //
                    >
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        Backdrop: {backdropLabelMap[backdrop]}
                      </span>
                      {/* Drawer INSTANCE */}
                      <Drawer.Overlay
                        cTag="drawer-primary"
                        size="xs"
                        placement="start"
                        backdrop={backdrop as DrawerBackdrop}
                        // trigger={{
                        //   label: backdrop,
                        //   class: "",
                        // }}
                        trigger={{ type: "button", label: backdrop }}
                        header={{
                          title: {
                            label: "BackDrop",
                            align: "start",
                          },
                          variant: "divider",
                        }}
                        footer={{
                          align: "end",
                          primaryAction: { type: "button", label: "Button" },
                          variant: "divider",
                        }}
                      >
                        <DrawerHeader />
                        <DrawerBody>
                          <div className="w-full h-full">
                            <div
                              className={cn(
                                "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                              )}
                            >
                              BackDrop Showcase
                            </div>
                          </div>
                        </DrawerBody>
                        <DrawerFooter />
                      </Drawer.Overlay>
                    </div>
                  ))}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* Close Mode */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Close Mode</h2>
                <div className={gridStyle}>
                  {/* {sizes.map((size) => ( */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Default/Start
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      trigger={{ type: "button", label: "default" }}
                      header={{
                        title: {
                          label: "Close Mode/Start",
                        },
                        variant: "divider",
                        closeIconPosition: "start",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center truncate justify-center",
                            )}
                          >
                            Drawer with Close Icon on Start
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Default/end
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      trigger={{ type: "button", label: "default" }}
                      header={{
                        title: {
                          label: "Close Mode/end",
                        },
                        variant: "divider",
                        closeIconPosition: "end",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center truncate justify-center",
                            )}
                          >
                            Drawer with Close Icon on end
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Over the Drawer
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      trigger={{ type: "button", label: "over the drawer" }}
                      closeMode="over-the-drawer"
                      header={{
                        title: {
                          label: "over the drawer",
                        },
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center truncate justify-center",
                            )}
                          >
                            Drawer with Close Icon over the Drawer
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Floating
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      trigger={{ type: "button", label: "floating" }}
                      closeMode="floating"
                      header={{
                        title: {
                          label: "Floating",
                        },
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center truncate justify-center",
                            )}
                          >
                            Drawer with Close Icon Floating
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Detached
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="start"
                      trigger={{ type: "button", label: "detached" }}
                      closeMode="detached"
                      header={{
                        title: {
                          label: "Detached",
                        },
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center truncate justify-center",
                            )}
                          >
                            Drawer with Close Icon Detached
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1.Header  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Header</h2>
                <div className={gridStyle}>
                  {/* {sizes.map((size) => ( */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Without-description
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      trigger={{ type: "button", label: "w/o desc" }}
                      header={{
                        title: {
                          label: "Header Without description",
                        },
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Drawer Without description
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Without-Close button
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      closeOnInteractionOutside={true}
                      closeMode="none"
                      trigger={{ type: "button", label: "w/o close" }}
                      header={{
                        title: { label: "Drawer without close button" },
                        description: "Click Outside To Close Enabled",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Without Close Button <br /> Overlay - true
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      With-Available Slots
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="sm"
                      closeMode="none"
                      closeOnInteractionOutside
                      trigger={{ type: "button", label: "available slots" }}
                      header={{
                        prefix: {
                          icon: {
                            type: "button",
                            prefix: {
                              type: "icon",
                              name: "@placeholder",
                            },
                            size: "base",
                            className: "p-0",
                          },
                          addOn: {
                            type: "button",
                            prefix: {
                              type: "icon",
                              name: "@placeholder",
                            },
                            size: "base",
                            className: "p-0",
                          },
                        },
                        title: {
                          leading: {
                            type: "button",
                            prefix: {
                              type: "icon",
                              name: "@placeholder",
                            },
                            size: "base",
                            className: "p-0",
                          },
                          label: "with available slots",
                          trailing: {
                            type: "button",
                            prefix: {
                              type: "icon",
                              name: "@placeholder",
                            },
                            size: "base",
                            className: "p-0",
                          },
                          align: "center",
                        },
                        suffix: {
                          icon: {
                            type: "button",
                            prefix: {
                              type: "icon",
                              name: "@placeholder",
                            },
                            size: "base",
                            className: "p-0",
                          },
                          addOn: {
                            type: "button",
                            prefix: {
                              type: "icon",
                              name: "@placeholder",
                            },
                            size: "base",
                            className: "p-0",
                          },
                        },
                        description: "Showcasing Drawer with available slots",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "flex items-center justify-center text-center h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700",
                            )}
                          >
                            Drawer with slots available <br /> Feel free to
                            replace any slot with whatever you want
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      title-Center
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      // trigger={{
                      //   label: "trailing buttons",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "center" }}
                      header={{
                        title: {
                          label: "Title center",
                          align: "center",
                        },
                        description: "Showcasing Drawer with content center",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Title Center
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Layout - Stack
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="start"
                      trigger={{ type: "button", label: "layout-stack" }}
                      header={{
                        title: {
                          label: "stacked layout",
                          align: "start",
                        },
                        layout: "stack",
                        description: "Showcasing Drawer with layout stack",
                        closeIconPosition: "start",
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Layout - Stack
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  {/* <div className={cardStyle}>
                      <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                        Forge Element
                      </span>
                      <Drawer
                        size="xs"
                        trigger={{ type: "button", label: "forge element" }}
                        header={{
                          title: {
                            label: "forge element",
                          },
                          description: "Showcasing Drawer with Link as close button",
                        }}
                        footer={{
                          align: "end",
                          primaryAction: { type: "button", label: "Label" },
                          secondaryAction: { type: "button", label: "Label" },
                        }}
                      >
                        <DrawerHeader />
                        <DrawerBody></DrawerBody>
                        <DrawerFooter />
                      </Drawer>
                    </div> */}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1.Header Variants  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Header Variants</h2>
                <div className={gridStyle}>
                  {/* {sizes.map((size) => ( */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - none
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      outlined
                      // trigger={{
                      //   label: "none",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "none" }}
                      header={{
                        title: {
                          label: "Header variants",
                        },
                        description: "Showcasing different header variants",
                        variant: "none",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Variant - none
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - filled
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      outlined
                      // trigger={{
                      //   label: "filled",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "filled" }}
                      header={{
                        title: {
                          label: "Header variants",
                        },
                        description: "Showcasing different header variants",
                        variant: "solid",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Variant - filled
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      outlined
                      // trigger={{
                      //   label: "divider",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "divider" }}
                      header={{
                        title: {
                          label: "Header variants",
                        },
                        description: "Showcasing different header variants",
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Variant - divider
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize truncate">
                      variant - filled + divider
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      outlined
                      trigger={{ type: "button", label: "filled + divider" }}
                      header={{
                        title: {
                          label: "Header variants",
                        },
                        description: "Showcasing different header variants",
                        variant: "solid-divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Variant - filled + divider
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  {/* // ))} */}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1. Footer */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Footer</h2>
                <div className={gridStyle}>
                  {/* {sizes.map((size) => ( */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Single-button/Start
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      trigger={{ type: "button", label: "1 button Start" }}
                      header={{
                        title: {
                          label: "Footer",
                        },
                        description: "Footer with single button Start",
                        variant: "divider",
                      }}
                      footer={{
                        primaryAction: { type: "button", label: "Button" },
                        align: "start",
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody></DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Single-button/end
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      // trigger={{
                      //   label: "w/o subtitle",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "1 button end" }}
                      header={{
                        title: {
                          label: "Footer",
                        },
                        description: "Footer with single button end",
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody></DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Double-button/Start
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      trigger={{ type: "button", label: "2 button Start" }}
                      header={{
                        title: {
                          label: "Footer",
                        },
                        description: "Footer with double button Start",
                        variant: "divider",
                      }}
                      footer={{
                        align: "start",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody />
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Double-button/end
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      // trigger={{
                      //   label: "w/o subtitle",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "2 button end" }}
                      header={{
                        title: {
                          label: "Footer",
                        },
                        description: "Footer with double button end",
                        variant: "divider",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody />
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      centered button
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="start"
                      // trigger={{
                      //   label: "w/o subtitle",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "2 button center" }}
                      header={{
                        title: {
                          label: "Footer",
                        },
                        description: "Footer with double button center",
                        variant: "divider",
                      }}
                      footer={{
                        align: "center",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody></DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Button-Justify
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      // trigger={{
                      //   label: "w/o subtitle",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "2 button justify" }}
                      header={{
                        title: {
                          label: "Footer",
                        },
                        description: "Footer with double button align justify",
                        variant: "divider",
                      }}
                      footer={{
                        align: "justify",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody></DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Single wide button
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      // trigger={{
                      //   label: "w/o subtitle",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "1 wide button" }}
                      header={{
                        title: {
                          label: "Wide button",
                        },
                        description: "Footer with wide button",
                        variant: "divider",
                      }}
                      footer={{
                        align: "center",
                        primaryAction: { type: "button", label: "Button", fullWidth: true },
                        // shape: "wide",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody />
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize">
                      Double wide button
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      // trigger={{
                      //   label: "w/o subtitle",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "2 wide button" }}
                      header={{
                        title: {
                          label: "Wide buttons",
                        },
                        description: "Footer with wide button",
                        variant: "divider",
                      }}
                      footer={{
                        align: "center",
                        primaryAction: { type: "button", label: "Button", fullWidth: true },
                        secondaryAction: { type: "button", label: "Button", fullWidth: true },
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody></DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  {/* // ))} */}
                </div>
              </section>
            </LazySection>

            {/* ------------------------------------------------------ */}
            {/* 1.Header Variants  */}
            {/* ------------------------------------------------------ */}
            <LazySection>
              <section>
                <h2 className={sectionTitle}>Footer Variants</h2>
                <div className={gridStyle}>
                  {/* {sizes.map((size) => ( */}
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - none
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      outlined
                      // trigger={{
                      //   label: "none",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "none" }}
                      header={{
                        title: {
                          label: "Footer variants",
                        },
                        description: "Showcasing different footer variants",
                        variant: "none",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "none",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed truncate border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Footer Variant - None
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - filled
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="end"
                      outlined
                      // trigger={{
                      //   label: "filled",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "filled" }}
                      header={{
                        title: {
                          label: "Footer variants",
                        },
                        description: "Showcasing different footer variants",
                        variant: "none",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "solid",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed truncate border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Footer Variant - filled
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold truncate capitalize">
                      variant - divider
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="start"
                      outlined
                      // trigger={{
                      //   label: "divider-full",
                      //   class: "",
                      // }}
                      trigger={{ type: "button", label: "divider" }}
                      header={{
                        title: {
                          label: "Footer variants",
                        },
                        description: "Showcasing different footer variants",
                        variant: "none",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed truncate border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Footer Variant - Divider
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  <div className={cardStyle}>
                    <span className="text-sm text-gray-60 dark:text-gray-40 font-medium font-semibold capitalize truncate">
                      variant - filled + divider
                    </span>
                    {/* Drawer INSTANCE */}
                    <Drawer.Overlay
                      cTag="drawer-primary"
                      size="xs"
                      placement="start"
                      outlined
                      trigger={{ type: "button", label: "filled + divider" }}
                      header={{
                        title: {
                          label: "Footer variants",
                        },
                        description: "Showcasing different footer variants",
                        variant: "none",
                      }}
                      footer={{
                        align: "end",
                        primaryAction: { type: "button", label: "Button" },
                        secondaryAction: { type: "button", label: "Button" },
                        variant: "solid-divider",
                      }}
                    >
                      <DrawerHeader />
                      <DrawerBody>
                        <div className="w-full h-full">
                          <div
                            className={cn(
                              "h-full bg-violet-100 text-brand-500 rounded border border-dashed border-violet-700 flex items-center justify-center",
                            )}
                          >
                            Variant - filled + divider
                          </div>
                        </div>
                      </DrawerBody>
                      <DrawerFooter />
                    </Drawer.Overlay>
                  </div>
                  {/* // ))} */}
                </div>
              </section>
            </LazySection>
          </div>
        </div>
      </ShowcaseShell>
    );
}
