// Showcase ported from origin/carousel:src/components/Carousel/stories/carousel.stories.tsx
import React from "react";
import { Carousel } from "@inventive-ui/components/Carousel";

// ============================================
// SHOWCASE HELPERS
// ============================================

const ShowcaseHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mb-6 border-b border-slate-200 pb-4">
    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
      {title}
    </h2>
    <p className="text-slate-500 mt-2 text-sm max-w-3xl leading-relaxed">
      {description}
    </p>
  </div>
);

const BrowserFrame = ({
  label,
  children,
  dark = false,
}: {
  label: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <div
    className={`rounded-xl overflow-hidden shadow-sm border ${
      dark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
    }`}
  >
    <div
      className={`px-4 py-3 border-b flex items-center justify-between ${
        dark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"
      }`}
    >
      <span
        className={`text-xs font-bold uppercase tracking-wider ${
          dark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {label}
      </span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
      </div>
    </div>
    <div className="relative">{children}</div>
  </div>
);

export default function CarouselShowcase() {
  return (
    (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* PATTERN 1: The Immersive Hero */}
      <section>
        <ShowcaseHeader
          title="1. The Immersive Hero"
          description="High-impact header section. Uses 'FullWidth' layout with dots overlaid on the image. Demonstrates how to position HTML content (text/buttons) on top of the carousel using absolute positioning."
        />

        <BrowserFrame label="Landing Page Header">
          <div className="relative w-full h-150 group">
            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/60 via-transparent to-transparent">
              <div className="relative h-full w-full px-8 md:px-20">
                {/* 1. TEXT GROUP: Shifted UP to 'top-20' so it sits higher in the slide */}
                <div className="absolute top-20 left-8 md:left-20 max-w-lg text-white pointer-events-auto">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-blue-900 uppercase bg-blue-100 rounded-full">
                    New Collection
                  </span>
                  <h1 className="mb-3 text-5xl font-extrabold leading-tight shadow-sm">
                    Redefining <br />
                    <span className="text-blue-400">Modern Design</span>
                  </h1>
                  <p className="text-lg text-slate-100/90 leading-relaxed">
                    Explore our latest architectural marvels designed to inspire
                    and captivate.
                  </p>
                </div>

                {/* 2. BUTTON GROUP: Kept anchored at the BOTTOM (bottom-16) */}
                <div className="absolute bottom-16 left-8 md:left-20 pointer-events-auto">
                  <button className="px-8 py-3.5 text-sm font-bold text-slate-900 transition-transform bg-white rounded-lg shadow-lg border border-slate-200 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0">
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>

            {/* The Carousel */}
            <Carousel
              layout="FullWidth"
              slidesToShow={1}
              boxWidth="full"
              autoSlide={true}
              interval={5000}
              dot={{
                show: true,
                position: "bottom-overlay",
                color: "white",
                variant: "outline",
                shape: "pill",
              }}
              arrow={{
                show: true,
                position: "inside",
                icon: "chevron",
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              // Force exact 600px height for stability
              className="h-full [&_img]:!h-150 [&_img]:object-cover"
            />
          </div>
        </BrowserFrame>
      </section>

      {/* PATTERN 2 */}
      <section>
        <ShowcaseHeader
          title="2. Product & Card Slider"
          description="Standard pattern for e-commerce 'You may also like' sections. Uses 'FullView-Inset' to add padding between items. Features the 'Combined Bottom Control' bar for a tidy UI."
        />

        <BrowserFrame label="Shopify / Amazon Style Row">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Trending Products
              </h3>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View all
              </a>
            </div>

            <Carousel
              layout="FullView-Inset"
              slidesToShow={4}
              dot={{
                show: true,
                position: "bottom",
              }}
              arrow={{
                show: true,
                position: "bottom-center",
                icon: "arrow",
                backgroundColor: "#f1f5f9",
                color: "#0f172a",
              }}
              className="[&_img]:aspect-[3/4] [&_img]:object-cover [&_img]:rounded-lg [&_img]:shadow-sm"
              mobileBreakpoint={768}
            />
          </div>
        </BrowserFrame>
      </section>

      {/* PATTERN 3 */}
      <section>
        <ShowcaseHeader
          title="3. Editorial Spotlight"
          description="Ideal for featured articles or portfolio highlights. Uses 'CenteredSlide-CenterBig' to emphasize the active item while hinting at previous/next context."
        />

        <BrowserFrame label="Dark Mode Portfolio" dark>
          <div className="py-12">
            <Carousel
              layout="CenteredSlide-CenterBig"
              slidesToShow={1}
              dot={{
                show: true,
                position: "bottom",
                color: "white",
                shape: "circle",
                variant: "solid",
              }}
              arrow={{
                show: true,
                position: "inside",
                icon: "chevron",
                backgroundColor: "#000000",
                color: "#ffffff",
              }}
              className="h-100"
            />
          </div>
        </BrowserFrame>
      </section>

      {/* PATTERN 4 */}
      <section>
        <ShowcaseHeader
          title="4. Streaming Gallery (Peek Next)"
          description="The 'Netflix' style. A sliver of the next slide is visible to encourage interaction. Uses inside-positioned arrows."
        />

        <BrowserFrame label="Media Gallery">
          <div className="p-8 bg-slate-900 text-white">
            <h3 className="mb-4 text-lg font-semibold">Continue Watching</h3>
            <Carousel
              layout="PeekNext-Inset"
              slidesToShow={1}
              dot={{
                show: false,
              }}
              arrow={{
                show: true,
                position: "inside",
                icon: "chevron",
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              className="[&_img]:h-64 [&_img]:object-cover [&_img]:rounded-md [&_img]:opacity-80 [&_div:hover_img]:opacity-100 [&_img]:transition-opacity"
            />
          </div>
        </BrowserFrame>
      </section>

      {/* PATTERN 5 */}
      <section>
        <ShowcaseHeader
          title="5. Vertical Navigation"
          description="Useful for sidebars, detailed product viewers, or full-screen vertical scrolling experiences. Uses 'up-down' arrow positioning and side dots."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BrowserFrame label="Product Detail Viewer">
            <div className="h-125 w-full flex">
              <div className="w-full h-full relative">
                <Carousel
                  layout="FullWidth"
                  slidesToShow={1}
                  boxWidth="full"
                  dot={{
                    show: true,
                    position: "vertically-right-overlay",
                    shape: "pill",
                    color: "light",
                    variant: "solid",
                  }}
                  arrow={{
                    show: true,
                    position: "up-down",
                    icon: "chevron",
                    backgroundColor: "white",
                    color: "#334155",
                  }}
                  className="h-full [&_img]:h-full [&_img]:object-cover"
                />
              </div>
            </div>
          </BrowserFrame>

          <div className="flex flex-col justify-center text-sm text-slate-500 bg-slate-100 rounded-xl border border-slate-200 p-8 border-dashed">
            <h4 className="font-bold text-slate-700 mb-2">
              Implementation Note
            </h4>
            <p>
              Vertical navigation changes the user's mental model. Notice how we
              place the dots on the right side (`vertically-right-overlay`) and
              switch the arrows to `up-down` mode.
            </p>
            <p className="mt-4">
              This pattern is excellent for fashion product pages where you want
              to show a tall model shot without taking up the full page width.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
  );
}
