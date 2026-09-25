// Showcase ported from origin/divider:src/components/Divider/stories/Divider.stories.tsx

import { Divider } from "@inventive-ui/components/Divider";
import { availableColorPalettes, cn } from "@inventive-ui/framework";
import { LazySection } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
} from "../storybook";

// stories/Divider.stories.tsx

/* ===========================================================
 * STORIES
 * =========================================================== */

export default function DividerShowcase() {
  const globals: Record<string, any> = {};
  const theme = getShowcaseTheme(globals);
  // ----------------------------------------------------------------
  // 1. SHARED CONSTANTS & HELPERS
  // ----------------------------------------------------------------

  const commonWithIconProps = {
    cTag: "divider-primary",
    color: theme.color,
    type: "single",
    placement: "middle",
    lineStroke: 1,
    primarySlot: {
      type: "text",
      children: "Divider Text",
      truncate: true,
    },
  } as any;

  const commonPlainProps = {
    cTag: "divider-primary",
    color: theme.color,
    type: "none",
    lineStroke: 1,
  } as const;

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3
      className={cn(
        "text-sm font-bold text-gray-50 uppercase tracking-wider mb-4",
      )}
    >
      {children}
    </h3>
  );

  const Variant = ({
    label,
    children,
    className,
  }: {
    label: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <span className={cn("flex flex-col gap-2", className)}>
      <span
        className={cn(
          "font-semibold text-neutral-500 dark:text-neutral-200 capitalize",
        )}
      >
        {label}
      </span>
      {children}
    </span>
  );

  // ----------------------------------------------------------------
  // 2. RENDER
  // ----------------------------------------------------------------
  return (
    <ShowcaseShell globals={globals} className={cn(SHOWCASE_CONTAINER_CLASS, "p-0")}>
      <div
        className={cn("flex flex-col p-6 gap-10 w-full font-sans text-gray-70")}
      >
        {/* Header */}
        <div className={cn("")}>
          <h1 className={cn("text-2xl font-bold")}>Divider Showcase</h1>
          <p className={cn("text-gray-50")}>
            All available variations, styles, and orientations.
          </p>
        </div>
        {/* 1. LINE STYLES */}
        <LazySection>
          <div>
            <SectionTitle>Line Styles</SectionTitle>
            <div className={cn("flex flex-col p-4 gap-6")}>
              {["solid", "dashed", "dotted", "double"].map((style) => (
                <Variant label={style} key={style}>
                  <Divider {...commonWithIconProps} lineStyle={style as any} />
                  <Divider
                    {...commonPlainProps}
                    lineStyle={style as any}
                    infix={{
                      type: "text",
                      children: "Divider Text",
                      truncate: true,
                    }}
                  />
                </Variant>
              ))}
            </div>
          </div>
        </LazySection>

        {/* FONT STYLES */}
        <LazySection>
          <div>
            <SectionTitle>FONT STYLES</SectionTitle>
            <div className={cn("flex flex-col p-4 gap-6")}>
              {["inter", "arial", "mono"].map((style) => (
                <Variant label={style} key={style}>
                  <Divider
                    {...commonWithIconProps}
                    infix={{
                      type: "text",
                      children: "Divider Text",
                      className: `font-${style}`,
                      truncate: true,
                    }}
                  />
                </Variant>
              ))}
            </div>
          </div>
        </LazySection>

        {/* SPACING */}
        <LazySection>
          <div>
            <SectionTitle>SPACING</SectionTitle>
            <div className={cn("flex flex-col p-4 gap-6")}>
              {["Compact", "Standard", "Spacious"].map((style) => (
                <Variant label={style} key={style}>
                  <Divider
                    {...commonWithIconProps}
                    infix={{
                      type: "text",
                      children: "Divider Text",
                      truncate: true,
                    }}
                    className={`gap-${style === "Compact" ? 0 : style === "Standard" ? 1 : 2}`}
                  />
                </Variant>
              ))}
            </div>
          </div>
        </LazySection>

        {/* 2. BORDER WIDTHS */}
        <LazySection>
          <div>
            <SectionTitle>lineStroke</SectionTitle>
            <div className={cn("flex flex-col p-4 gap-6")}>
              {[1, 2, 3, 4, 5].map((width) => (
                <Variant label={width.toLocaleString()} key={width}>
                  <Divider {...commonWithIconProps} lineStroke={width as any} />
                  <Divider
                    {...commonPlainProps}
                    lineStroke={width as any}
                    infix={{
                      type: "text",
                      children: "Divider Text",
                      truncate: true,
                    }}
                  />
                </Variant>
              ))}
            </div>
          </div>
        </LazySection>

        {/* 3. WIDTH VARIANTS */}
        <LazySection>
          <div>
            <SectionTitle>Width Constraints</SectionTitle>
            <div className={cn("flex flex-col gap-6 p-4")}>
              {["full", "inset", "middle"].map((w) => (
                <Variant label={w} key={w}>
                  <Divider
                    {...commonWithIconProps}
                    lineStroke={1}
                    lengthPercentage={
                      w === "full" ? 100 : w === "inset" ? 80 : 30
                    }
                  />
                  <Divider
                    {...commonPlainProps}
                    infix={{
                      type: "text",
                      children: "Divider Text",
                      truncate: true,
                    }}
                    lengthPercentage={
                      w === "full" ? 100 : w === "inset" ? 80 : 30
                    }
                  />
                </Variant>
              ))}
            </div>
          </div>
        </LazySection>

        {/* 4. CONTENT POSITIONING (Horizontal) */}
        <LazySection>
          <div>
            <SectionTitle>Content Positioning</SectionTitle>
            <div className={cn("flex flex-col p-4 gap-6")}>
              <Variant label={"Extreme Start"}>
                <Divider
                  {...commonWithIconProps}
                  prefix={{
                    type: "text",
                    children: "Divider Text",
                    truncate: true,
                    className: "text-left ps-0 ms-0",
                  }}
                />
              </Variant>
              <Variant label={"Inset Start"}>
                <Divider
                  {...commonWithIconProps}
                  prefix={{
                    insetStart: true,
                    type: "text",
                    children: "Divider Text",
                    truncate: true,
                  }}
                />
              </Variant>
              <Variant label={"Middle"}>
                <Divider
                  {...commonWithIconProps}
                  infix={{
                    type: "text",
                    children: "Divider Text",
                    truncate: true,
                  }}
                />
              </Variant>
              <Variant label={"Inset End"}>
                <Divider
                  {...commonWithIconProps}
                  postfix={{
                    insetEnd: true,
                    type: "text",
                    children: "Divider Text",
                    truncate: true,
                  }}
                />
              </Variant>
              <Variant label={"Extreme End"}>
                <Divider
                  {...commonWithIconProps}
                  postfix={{
                    type: "text",
                    children: "Divider Text",
                    truncate: true,
                  }}
                />
              </Variant>
            </div>
          </div>
        </LazySection>

        {/* 4. Colors */}
        <LazySection>
          <div>
            <SectionTitle>Color variants</SectionTitle>
            <div className={cn("flex flex-col p-4 gap-0")}>
              {availableColorPalettes.map((col) => (
                <Variant
                  className={
                    col === "white"
                      ? "bg-black dark:bg-white p-2 rounded-md"
                      : "p-2 rounded-md"
                  }
                  label={col}
                  key={col}
                >
                  <Divider {...commonWithIconProps} color={col} />
                </Variant>
              ))}
            </div>
          </div>
        </LazySection>

        {/* 5. Content type */}
        <LazySection>
          <div>
            <SectionTitle>Content Type</SectionTitle>
            <div className={cn("flex flex-col p-4 gap-6")}>
              <span className={cn("text-base text-gray-50 font-semibold")}>
                None
              </span>
              <Divider {...commonPlainProps} color="red" />
            </div>
            <div className={cn("flex flex-col p-4 gap-6")}>
              <span className={cn("text-base text-gray-50 font-semibold")}>
                Text
              </span>
              <Divider
                cTag="divider"
                color="red"
                infix={{
                  type: "text",
                  children: "Divider Text",
                  truncate: true,
                }}
              />
            </div>
            <div className={cn("flex flex-col p-4 gap-6")}>
              <span className={cn("text-base text-gray-50 font-semibold")}>
                Button
              </span>
              <Divider
                cTag="divider"
                color="red"
                infix={{
                  type: "text",
                  children: "Divider Text",
                  truncate: true,
                }}
                prefix={{
                  type: "button",
                  label: "Add Field",
                  lslot: {
                    type: "icon",
                    library: "material-symbols",
                    name: "add",
                  },
                  size: "sm",
                  className: "w-30",
                }}
              />
            </div>
            <div className={cn("flex flex-col p-4 gap-6")}>
              <span className={cn("text-base text-gray-50 font-semibold")}>
                Badge
              </span>
              <Divider
                cTag="divider"
                color="red"
                infix={{
                  type: "text",
                  children: "Divider Text",
                  truncate: true,
                }}
                prefix={{
                  type: "badge-ribbon",
                  label: "Badge",
                }}
              />
            </div>
            <div className={cn("flex flex-col p-4 gap-6")}>
              <span className={cn("text-base text-gray-50 font-semibold")}>
                Dual Label Divider
              </span>
              <Divider
                cTag="divider"
                color="red"
                infix={{
                  type: "text",
                  children: "Divider Text",
                  truncate: true,
                }}
                prefix={{
                  type: "badge-ribbon",
                  label: "Badge",
                  size: "sm",
                  pointer: "outward",
                }}
              />
            </div>
            <div className={cn("flex flex-col p-4 gap-6")}>
              <span className={cn("text-base text-gray-50 font-semibold")}>
                Any Custom Slot
              </span>
              <Divider
                cTag="divider"
                color="red"
                infix={{
                  type: "button",
                  label: "Slot",
                  size: "sm",
                  lslot: {
                    type: "icon",
                    library: "material-symbols",
                    name: "add_photo_alternate",
                  },
                }}
                prefix={{
                  type: "badge-ribbon",
                  label: "Badge",
                  size: "sm",
                  pointer: "outward",
                }}
              />
            </div>
          </div>
        </LazySection>

        {/* 6. VERTICAL ORIENTATION */}
        <LazySection>
          <div className={cn("w-full p-4")}>
            <SectionTitle>Orientation</SectionTitle>
            <div className={cn("flex flex-col gap-6")}>
              {/* Horizontal */}
              <Variant label="Horizontal" className="w-full">
                <Divider
                  {...commonPlainProps}
                  orientation="horizontal"
                  lineStroke={1}
                />
                <Divider
                  {...commonWithIconProps}
                  orientation="horizontal"
                  lineStroke={1}
                  infix={{
                    type: "text",
                    children: "Divider Text",
                    truncate: true,
                  }}
                />
              </Variant>
              {/* Vertical */}
              <Variant label="Vertical">
                <div className="flex flex-row items-center justify-center h-[800px] gap-[15px]">
                  <Divider
                    {...commonWithIconProps}
                    orientation="vertical"
                    lineStroke={1}
                  />
                  <Divider
                    {...commonPlainProps}
                    orientation="vertical"
                    lineStroke={1}
                    infix={{
                      type: "text",
                      children: "Divider Text",
                      truncate: true,
                    }}
                  />
                </div>
              </Variant>
            </div>
          </div>
        </LazySection>
      </div>
    </ShowcaseShell>
  );
}
