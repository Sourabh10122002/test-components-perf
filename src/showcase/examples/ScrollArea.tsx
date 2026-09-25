// Showcase ported from origin/scrollarea:src/components/ScrollArea/stories/Scrollbar.stories.tsx
import { LazySection } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";
import { ScrollArea } from "@inventive-ui/components/ScrollArea";
import { cn } from "@inventive-ui/framework";

// "../ScrollAreaHorizontal" is not exported by the package subpath; it is the same
// component the package exposes as ScrollArea.Horizontal.
const ScrollAreaHorizontal = ScrollArea.Horizontal;

export default function ScrollAreaShowcase() {
    const globals = {};
    const theme = getShowcaseTheme(globals);
    const scrollDefaults = { ...theme.componentProps, color: theme.color };
    const sizes = ["sm", "base", "lg"] as const;
    const variants = ["solid", "solid-outline", "ghost"] as const;
    const appearances = ["strong", "soft", "dualTone", "onColor"] as const;

    const Content = () => (
      <div className="space-y-3">
        {Array.from({ length: 15 }).map((_, i) => (
          <p key={i} className="text-sm text-gray-700">
            Item {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        ))}
      </div>
    );

    const HContent = () => (
      <div className="inline-flex space-x h-fit">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="w-40 h-24 bg-blue-500 rounded text-white flex items-center justify-center"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    );
    return (
      <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
        <div className="bg-gray-100 space-y-12 p-8 min-h-screen">
          <div>
            <h1 className="text-4xl font-bold text-gray-700">
              ScrollArea Showcase
            </h1>
          </div>
          {/* Appearances */}
          <LazySection enabled={false}>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">Appearances</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {appearances.map((appearance) => (
                  <div
                    key={appearance}
                    className={cn(
                      "p-4 rounded-lg space-y-2",
                      appearance === "onColor" ? "bg-blue-600" : "bg-white",
                    )}
                  >
                    <span
                      className={cn(
                        "text-xs font-bold capitalize",
                        appearance === "onColor"
                          ? "text-white"
                          : "text-gray-500",
                      )}
                    >
                      {appearance}
                    </span>
                    <ScrollArea.Vertical
                      {...scrollDefaults}
                      cTag="none"
                      size="base"
                      height="120px"
                      appearance={appearance}
                      withArrows
                      appearOn="always"
                    >
                      <div
                        className={cn(
                          "p-4 text-sm",
                          appearance === "onColor"
                            ? "text-white"
                            : "text-gray-600",
                        )}
                      >
                        {Array.from({ length: 10 }).map((_, i) => (
                          <p key={i}>Item {i + 1}</p>
                        ))}
                      </div>
                    </ScrollArea.Vertical>
                    <ScrollArea.Horizontal
                      cTag="none"
                      size="base"
                      appearance={appearance}
                      withArrows
                      appearOn="always"
                    >
                      <div className="inline-flex space-x-2 p-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className={cn(
                              "w-10 h-10 rounded flex items-center justify-center text-2.5",
                              appearance === "onColor"
                                ? "bg-white text-blue-600"
                                : "bg-blue-100 text-blue-600",
                            )}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </ScrollArea.Horizontal>
                  </div>
                ))}
              </div>
            </section>
          </LazySection>
          {/* Color Palette */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">
                Color Palette
              </h2>
              <div className="grid w-full max-w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {[
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
                ].map((color) => (
                  <div key={color} className="space-y-1">
                    <span className="text-xs text-gray-500 capitalize">
                      {color}
                    </span>
                    <ScrollArea.Vertical
                      cTag="none"
                      size="base"
                      height="120px"
                      variant="solid"
                      color={color}
                      withArrows
                      appearOn="always"
                      appearance="strong"
                    >
                      <div className="p-4 text-sm text-gray-600">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <p key={i}>Item {i + 1}</p>
                        ))}
                      </div>
                    </ScrollArea.Vertical>
                  </div>
                ))}
              </div>
            </section>
          </LazySection>
          <div>
            <h1 className="text-2xl font-bold text-black">
              vertical ScrollArea Showcase
            </h1>
            <p className="text-sm text-gray-700">
              Visual reference of all vertical ScrollArea sizes, variants and
              states
            </p>
          </div>
          {/* Size × Variant Matrix */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">
                Vertical ScrollArea – Size × Variant
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {variants.map((variant) => (
                  <div key={variant} className="space-y-3 gap-6">
                    <h3 className="font-medium capitalize text-black">
                      {variant}
                    </h3>
                    {sizes.map((size) => (
                      <div key={size} className="space-y-1 mb-6">
                        <span className="text-xs text-gray-500">{size}</span>
                        <ScrollArea.Vertical
                          cTag="none"
                          size={size}
                          height="160px"
                          variant={variant}
                          withArrows
                          appearOn="always"
                        >
                          <Content />
                        </ScrollArea.Vertical>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </LazySection>

          {/* Auto Hide */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">Auto Hide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    appearOn = 'hover'
                  </span>
                  <ScrollArea.Vertical
                    cTag="none"
                    height="160px"
                    appearOn="hover"
                  >
                    <Content />
                  </ScrollArea.Vertical>
                </div>
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    appearOn = 'scroll'
                  </span>
                  <ScrollArea.Vertical
                    cTag="none"
                    height="160px"
                    appearOn="scroll"
                  >
                    <Content />
                  </ScrollArea.Vertical>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Disabled */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl font-semibold text-black">
                Disabled State
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    Disabled = true
                  </span>
                  <ScrollArea.Vertical cTag="none" height="160px" disabled>
                    <Content />
                  </ScrollArea.Vertical>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Arrow State */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl font-semibold text-black">Arrow State</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    withArrows = true
                  </span>
                  <ScrollArea.Vertical cTag="none" height="160px" withArrows>
                    <Content />
                  </ScrollArea.Vertical>
                </div>

                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    withArrows = false
                  </span>
                  <ScrollArea.Vertical
                    cTag="none"
                    height="160px"
                    withArrows={false}
                  >
                    <Content />
                  </ScrollArea.Vertical>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Adaptive */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">Dark Mode </h2>
              <div className="dark bg-neutral-900 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ScrollArea.Vertical cTag="none" height="160px">
                    <Content />
                  </ScrollArea.Vertical>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Horizontal ScrollArea */}
          <div>
            <h1 className="text-2xl font-bold text-black">
              Horizontal ScrollArea Showcase
            </h1>
            <p className="text-sm text-gray-700">
              Visual reference of all Horizontal ScrollArea sizes, variants and
              states
            </p>
          </div>
          {/* Size × Variant Matrix */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">
                Horizontal ScrollArea – Size × Variant
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {variants.map((variant) => (
                  <div key={variant} className="space-y-3">
                    <h3 className="font-medium capitalize text-black">
                      {variant}
                    </h3>
                    {sizes.map((size) => (
                      <div key={size} className="space-y-1">
                        <span className="text-xs text-gray-500">{size}</span>
                        <ScrollArea.Horizontal
                          cTag="none"
                          size={size}
                          variant={variant}
                          withArrows
                          appearOn="always"
                        >
                          <HContent />
                        </ScrollArea.Horizontal>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </LazySection>
          {/* Auto Hide */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">Auto Hide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    appearOn = 'hover'
                  </span>
                  <ScrollArea.Horizontal
                    cTag="none"
                    height="fit-content"
                    appearOn="hover"
                  >
                    <HContent />
                  </ScrollArea.Horizontal>
                </div>
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    appearOn = 'scroll'
                  </span>
                  <ScrollArea.Horizontal
                    cTag="none"
                    height="fit-content"
                    appearOn="scroll"
                  >
                    <HContent />
                  </ScrollArea.Horizontal>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Disabled */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl font-semibold text-black">
                Disabled State
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    Disabled = true
                  </span>
                  <ScrollAreaHorizontal
                    cTag="none"
                    height="fit-content"
                    disabled
                  >
                    <HContent />
                  </ScrollAreaHorizontal>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Arrow State */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl font-semibold text-black">Arrow State</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    withArrows = true
                  </span>
                  <ScrollAreaHorizontal
                    cTag="none"
                    height="fit-content"
                    withArrows
                  >
                    <HContent />
                  </ScrollAreaHorizontal>
                </div>

                <div>
                  <span className="text-xs text-gray-500 mb-2">
                    withArrows = false
                  </span>
                  <ScrollAreaHorizontal
                    cTag="none"
                    height="fit-content"
                    withArrows={false}
                  >
                    <HContent />
                  </ScrollAreaHorizontal>
                </div>
              </div>
            </section>
          </LazySection>
          {/* Adaptive */}
          <LazySection>
            <section className="space-y-4 mb-20">
              <h2 className="text-xl text-black font-semibold">Dark Mode</h2>
              <div className="dark bg-neutral-900 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ScrollAreaHorizontal cTag="none" height="fit-content">
                    <HContent />
                  </ScrollAreaHorizontal>
                </div>
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
}
