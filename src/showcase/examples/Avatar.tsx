// @ts-nocheck
// Ported from origin/avatar:src/components/Avatar/stories/Avatar.stories.tsx; not API drift: the story itself has strict-null errors (`variant`/`appearance` possibly undefined) — see report
// Showcase ported from origin/avatar:src/components/Avatar/stories/Avatar.stories.tsx
import React from "react";
import { SlotRenderer } from "@inventive-ui/framework/slots";
import { Avatar } from "@inventive-ui/components/Avatar";
import {
  generateStackingMargins,
  getStackingMargin,
  getZIndexClass,
} from "../story-helpers/Avatar/utils";
import type {
  AvatarGroupProps,
  AvatarProps,
  AvatarSlotPosition,
  AvatarSlots,
} from "@inventive-ui/components/Avatar";
import { AVATAR_COLOR_OPTIONS } from "../story-helpers/Avatar/avatar-story-controls";

function LazySection({
  children,
  height = 200,
}: {
  children: React.ReactNode;
  height?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref}>
      {visible ? children : <div style={{ minHeight: height }} />}
    </div>
  );
}

const STORY_SECTION_CLASS = "space-y-4";

const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1";

const STORY_SECTION_DESC_CLASS = "text-sm text-gray-600 dark:text-gray-400";

const STORY_CARD_CLASS =
  "flex flex-col items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800";

const STORY_FLEX_WRAP_CLASS = "flex items-center gap-4 flex-wrap";

const STORY_LABEL_CLASS =
  "text-xs text-gray-500 dark:text-gray-400 font-medium";

const STORY_H3_CLASS = "text-lg font-semibold text-gray-900 dark:text-gray-100";

const STORY_TABLE_CLASS =
  "min-w-full border-collapse border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm";

const STORY_TH_CLASS =
  "border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300";

const STORY_TH_CENTER_CLASS =
  "border border-gray-300 dark:border-gray-700 px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300";

const STORY_TD_LABEL_CLASS =
  "border border-gray-300 dark:border-gray-700 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300";

const STORY_TD_CONTENT_CLASS =
  "border border-gray-300 dark:border-gray-700 px-6 py-4 text-center";

const STORY_ADAPTIVE_CONTAINER =
  "dark bg-neutral-900 p-8 rounded-lg flex items-center gap-12 border border-neutral-800 shadow-inner";

const STORY_ADAPTIVE_COL = "flex flex-col items-center gap-3";

const STORY_SPAN_LABEL =
  "text-neutral-400 text-xs font-medium uppercase tracking-wider";

const SHOWCASE_CONTAINER_CLASS = "space-y-12 p-8 min-h-screen";

const SHOWCASE_HEADER_WRAP_CLASS = "space-y-2";

const SHOWCASE_TITLE_CLASS =
  "text-4xl font-bold text-gray-900 dark:text-gray-100";

const SHOWCASE_SUBTITLE_CLASS = "text-lg text-gray-600 dark:text-gray-400";

// ─── Slot helpers ─────────────────────────────────────────────────────────────

/** Converts a slot config (from `buildSlotFromArgs`) into a rendered slot node. */

// --- story: Showcase ---
export default function AvatarShowcase() {

    // ── data ────────────────────────────────────────────────────────────────
    const sizes: AvatarProps["size"][] = [
      "xs",
      "sm",
      "base",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "8xl",
      "9xl",
      "10xl",
    ];
    const showcaseSizes: AvatarProps["size"][] = [
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "8xl",
    ];
    const shapes: AvatarProps["shape"][] = ["circle", "square"];
    const variants: AvatarProps["variant"][] = [
      "solid",
      "solid-outline",
      "outline",
    ];
    const appearances: AvatarProps["appearance"][] = [
      "strong",
      "soft",
      "dualTone",
      "onColor",
    ];
    const colors = [...AVATAR_COLOR_OPTIONS];
    const groupLayouts: AvatarGroupProps["layout"][] = [
      "spaced",
      "last-on-top",
      "first-on-top",
      "grid",
      "pie",
    ];
    const spacingVariants = ["compact", "standard", "spacious"] as const;

    const showcaseTypeColumns = [
      {
        label: "solid / strong",
        variant: "solid" as const,
        appearance: "strong" as const,
      },
      {
        label: "solid / soft",
        variant: "solid" as const,
        appearance: "soft" as const,
      },
      {
        label: "outline / strong",
        variant: "outline" as const,
        appearance: "strong" as const,
      },
      {
        label: "solid / dualTone",
        variant: "solid" as const,
        appearance: "dualTone" as const,
      },
      {
        label: "solid / onColor",
        variant: "solid" as const,
        appearance: "onColor" as const,
      },
    ] as const;

    const showcaseTypeColors = [
      "gray",
      "red",
      "green",
      "blue",
      "teal",
      "pink",
      "purple",
      "cyan",
      "orange",
      "yellow",
    ] as const;

    const radiusVariants = [
      { label: "None", className: "rounded-none" },
      { label: "SM", className: "rounded-sm" },
      { label: "MD", className: "rounded-md" },
      { label: "LG", className: "rounded-lg" },
      { label: "Full", className: "rounded-full" },
    ];

    type ShowcaseSlotType = "dot" | "status" | "counter";
    const slotTypes: Array<{ type: ShowcaseSlotType; label: string }> = [
      { type: "dot", label: "Dot Badge" },
      { type: "status", label: "Status" },
      { type: "counter", label: "Counter" },
    ];

    const slotPositions: AvatarSlotPosition[] = [
      "topStart",
      "topEnd",
      "bottomStart",
      "bottomEnd",
    ];

    const positionLabels: Record<AvatarSlotPosition, string> = {
      topStart: "topStart",
      topEnd: "topEnd",
      bottomStart: "bottomStart",
      bottomEnd: "bottomEnd",
    };

    const buildStaticSlot = (
      type: ShowcaseSlotType,
      color = "success",
    ): React.ReactNode => {
      if (type === "dot") {
        return (
          <SlotRenderer
            slot={{
              type: "badge-dot",
              color,
              appearance: "strong",
              variant: "solid",
            }}
          />
        );
      }
      if (type === "status") {
        return (
          <SlotRenderer
            slot={{
              type: "badge-status-indicator",
              color,
              appearance: "strong",
            }}
          />
        );
      }
      if (type === "counter") {
        return (
          <SlotRenderer
            slot={{
              type: "badge-counter",
              counter: 5,
              max: 99,
              color,
              appearance: "strong",
              variant: "solid",
            }}
          />
        );
      }
      return undefined;
    };

    const groupAvatars = [
      { name: "Alice Johnson", color: "success" as AvatarProps["color"] },
      { name: "Vedant Agarwal", color: "neutral" as AvatarProps["color"] },
      { name: "Carol White", color: "purple" as AvatarProps["color"] },
      { name: "David Brown", color: "amber" as AvatarProps["color"] },
      { name: "Eve Davis", color: "pink" as AvatarProps["color"] },
      { name: "Frank Wilson", color: "red" as AvatarProps["color"] },
      { name: "Grace Lee", color: "blue" as AvatarProps["color"] },
    ];

    const imageAvatars: Array<{
      name: string;
      color: AvatarProps["color"];
      img: AvatarProps["img"];
    }> = [
      {
        name: "Ariana Blake",
        color: "brand",
        img: { src: "https://i.pravatar.cc/150?img=11", alt: "Ariana Blake" },
      },
      {
        name: "Brett Cole",
        color: "success",
        img: { src: "https://i.pravatar.cc/150?img=12", alt: "Brett Cole" },
      },
      {
        name: "Clara Diaz",
        color: "purple",
        img: { src: "https://i.pravatar.cc/150?img=13", alt: "Clara Diaz" },
      },
      {
        name: "Dorian Evans",
        color: "warning",
        img: { src: "https://i.pravatar.cc/150?img=14", alt: "Dorian Evans" },
      },
    ];

    const sizeStackAvatars = [
      { name: "Rohan Taneja", color: "neutral" as AvatarProps["color"] },
      { name: "Kriti Singh", color: "purple" as AvatarProps["color"] },
      { name: "Chris Wong", color: "amber" as AvatarProps["color"] },
      { name: "Elena Wilson", color: "success" as AvatarProps["color"] },
      { name: "Ava Adams", color: "pink" as AvatarProps["color"] },
      { name: "Brian Brown", color: "red" as AvatarProps["color"] },
    ];

    const getShowcaseSlots = (
      type: ShowcaseSlotType,
      position: AvatarSlotPosition,
    ): AvatarSlots => ({ [position]: buildStaticSlot(type, "success") });

    return (
      <div className={SHOWCASE_CONTAINER_CLASS}>
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className={SHOWCASE_HEADER_WRAP_CLASS}>
          <h1 className={SHOWCASE_TITLE_CLASS}>Avatar Component Showcase</h1>
          <p className={SHOWCASE_SUBTITLE_CLASS}>
            Comprehensive visual reference of all avatar variants, sizes,
            colors, and configurations.
          </p>
        </div>

        {/* ── Shape Variants ──────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Shape Variants</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Circle (always fully rounded) vs. Square (theme-aware corner
                radius).
              </p>
            </div>
            <div className={STORY_FLEX_WRAP_CLASS}>
              {shapes.map((shape) => (
                <div key={shape} className={STORY_CARD_CLASS}>
                  <Avatar
                    ariaLabel={shape}
                    shape={shape}
                    size="3xl"
                    color="brand"
                  >
                    {shape === "circle" ? "C" : "S"}
                  </Avatar>
                  <span className={STORY_LABEL_CLASS}>{shape}</span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ── Avatar Content Types ─────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Content Types</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Initials via <code>children</code>, an image via{" "}
                <code>img</code>, or an icon via <code>icon</code>.
              </p>
            </div>
            <div className={STORY_FLEX_WRAP_CLASS}>
              <div className={STORY_CARD_CLASS}>
                <Avatar ariaLabel="Nina Parker" size="4xl" color="brand">
                  NP
                </Avatar>
                <span className={STORY_LABEL_CLASS}>initials</span>
              </div>
              <div className={STORY_CARD_CLASS}>
                <Avatar
                  ariaLabel="Nina Parker"
                  img={{
                    src: "https://i.pravatar.cc/150?img=32",
                    alt: "Nina Parker",
                  }}
                  size="4xl"
                  color="brand"
                />
                <span className={STORY_LABEL_CLASS}>image</span>
              </div>
              <div className={STORY_CARD_CLASS}>
                <Avatar
                  ariaLabel="User icon"
                  icon={{ type: "icon", name: "@user" }}
                  size="4xl"
                  color="brand"
                />
                <span className={STORY_LABEL_CLASS}>icon</span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── Size Variants ───────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Size Variants</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                All 14 sizes from <code>xs</code> (16 px) to <code>10xl</code>{" "}
                (128 px).
              </p>
            </div>
            <div className="flex items-end gap-4 flex-wrap">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Avatar ariaLabel={size} size={size} color="brand">
                    {size}
                  </Avatar>
                  <span className={STORY_LABEL_CLASS}>{size}</span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ── Size × Shape Matrix ─────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Size × Shape Matrix</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Visual comparison of sizes across both shapes.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr>
                    <th className={STORY_TH_CLASS}>size</th>
                    {shapes.map((shape) => (
                      <th key={shape} className={STORY_TH_CENTER_CLASS}>
                        {shape}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {showcaseSizes.map((size) => (
                    <tr key={size}>
                      <td className={STORY_TD_LABEL_CLASS}>{size}</td>
                      {shapes.map((shape) => (
                        <td
                          key={`${size}-${shape}`}
                          className={STORY_TD_CONTENT_CLASS}
                        >
                          <div className="flex items-center justify-center">
                            <Avatar
                              ariaLabel={size}
                              size={size}
                              shape={shape}
                              color="brand"
                            >
                              {size}
                            </Avatar>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* ── Image Avatars ───────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Image Avatars</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Avatar with <code>img</code> prop (src + alt). Falls back to
                initials or default icon when the image fails to load.
              </p>
            </div>
            <div className="space-y-6">
              <div className={STORY_FLEX_WRAP_CLASS}>
                {imageAvatars.map((av) => (
                  <div key={av.name} className={STORY_CARD_CLASS}>
                    <Avatar
                      ariaLabel={av.name}
                      img={av.img}
                      color={av.color}
                      size="4xl"
                    >
                      {av.name}
                    </Avatar>
                    <span className={STORY_LABEL_CLASS}>{av.name}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-3">
                <h3 className={STORY_H3_CLASS}>Image Group</h3>
                <Avatar.Group
                  layout="last-on-top"
                  size="3xl"
                  variant="solid"
                  appearance="strong"
                  counter={{ max: 3, color: "brand" }}
                >
                  {imageAvatars.map((av) => (
                    <Avatar
                      key={av.name}
                      ariaLabel={av.name}
                      img={av.img}
                      color={av.color}
                    >
                      {av.name}
                    </Avatar>
                  ))}
                </Avatar.Group>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── Color Palette ───────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Color Palette</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                All semantic and extended palette colors available via the{" "}
                <code>color</code> prop.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {colors.map((color) => (
                <div key={color} className={STORY_CARD_CLASS}>
                  <Avatar
                    ariaLabel={color}
                    color={color === "grey" ? "gray" : color}
                    size="2xl"
                    className={
                      color === "grey" || color === "black"
                        ? "ring-1 ring-gray-300 dark:ring-gray-600"
                        : undefined
                    }
                  >
                    {color.slice(0, 2).toUpperCase()}
                  </Avatar>
                  <span className={STORY_LABEL_CLASS}>{color}</span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ── Style Variants ──────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Style Variants</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                <code>solid</code>, <code>solid-outline</code>, and{" "}
                <code>outline</code>.
              </p>
            </div>
            <div className={STORY_FLEX_WRAP_CLASS}>
              {variants.map((variant) => (
                <div key={variant} className={STORY_CARD_CLASS}>
                  <Avatar
                    ariaLabel={variant}
                    variant={variant}
                    color="brand"
                    size="2xl"
                  >
                    {variant.slice(0, 2).toUpperCase()}
                  </Avatar>
                  <span className={STORY_LABEL_CLASS}>{variant}</span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ── Appearance Variants ─────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Appearance Variants</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                <code>strong</code>, <code>soft</code>, <code>dualTone</code>,
                and <code>onColor</code>.
              </p>
            </div>
            <div className={STORY_FLEX_WRAP_CLASS}>
              {appearances.map((appearance) => (
                <div key={appearance} className={STORY_CARD_CLASS}>
                  <Avatar
                    ariaLabel={appearance}
                    appearance={appearance}
                    color="brand"
                    size="2xl"
                  >
                    {appearance.slice(0, 2).toUpperCase()}
                  </Avatar>
                  <span className={STORY_LABEL_CLASS}>{appearance}</span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ── Variant × Appearance Matrix ─────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Variant × Appearance Matrix
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Every variant paired with every appearance level.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr>
                    <th className={STORY_TH_CLASS}>variant</th>
                    {appearances.map((appearance) => (
                      <th key={appearance} className={STORY_TH_CENTER_CLASS}>
                        {appearance}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {variants.map((variant) => (
                    <tr key={variant}>
                      <td className={STORY_TD_LABEL_CLASS}>{variant}</td>
                      {appearances.map((appearance) => (
                        <td
                          key={`${variant}-${appearance}`}
                          className={STORY_TD_CONTENT_CLASS}
                        >
                          <div
                            className="flex items-center justify-center rounded-md p-2"
                            style={
                              appearance === "onColor"
                                ? {
                                    backgroundColor:
                                      "var(--iui-color-brand-600, #4f46e5)",
                                  }
                                : undefined
                            }
                          >
                            <Avatar
                              ariaLabel="VA"
                              variant={variant}
                              appearance={appearance}
                              color="brand"
                              size="xl"
                            >
                              VA
                            </Avatar>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* ── Color × Type Matrix ─────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Color × Type Matrix</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Color-wise comparison of solid/strong, solid/soft,
                outline/strong, solid/dualTone, and solid/onColor across popular
                palette entries.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className={STORY_TABLE_CLASS}>
                <thead>
                  <tr>
                    <th className={STORY_TH_CLASS}>color</th>
                    {showcaseTypeColumns.map((col) => (
                      <th key={col.label} className={STORY_TH_CENTER_CLASS}>
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {showcaseTypeColors.map((color) => (
                    <tr key={color}>
                      <td className={STORY_TD_LABEL_CLASS}>{color}</td>
                      {showcaseTypeColumns.map((col) => (
                        <td
                          key={`${color}-${col.label}`}
                          className={STORY_TD_CONTENT_CLASS}
                        >
                          <div
                            className="flex items-center justify-center gap-3 rounded-md p-2"
                            style={
                              col.appearance === "onColor"
                                ? {
                                    backgroundColor:
                                      "var(--iui-color-brand-600, #4f46e5)",
                                  }
                                : undefined
                            }
                          >
                            <Avatar
                              ariaLabel="image"
                              img={{
                                src: "https://i.pravatar.cc/150?img=11",
                                alt: "avatar",
                              }}
                              size="2xl"
                              color={color}
                              variant={col.variant}
                              appearance={col.appearance}
                            />
                            <Avatar
                              ariaLabel="initials"
                              size="2xl"
                              color={color}
                              variant={col.variant}
                              appearance={col.appearance}
                            >
                              AB
                            </Avatar>
                            <Avatar
                              ariaLabel="icon"
                              size="2xl"
                              color={color}
                              variant={col.variant}
                              appearance={col.appearance}
                              icon={{ type: "icon", name: "@user" }}
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* ── Radius Variants ─────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>
                Radius Variants (square shape)
              </h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Pass a Tailwind <code>rounded-*</code> class via{" "}
                <code>className</code> to override the global theme radius on
                square avatars.
              </p>
            </div>
            <div className={STORY_FLEX_WRAP_CLASS}>
              {radiusVariants.map((r) => (
                <div key={r.label} className={STORY_CARD_CLASS}>
                  <Avatar
                    ariaLabel={r.label}
                    shape="square"
                    size="2xl"
                    color="brand"
                    className={r.className}
                  >
                    {r.label[0]}
                  </Avatar>
                  <span className={STORY_LABEL_CLASS}>{r.label}</span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ── Disabled ────────────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Disabled State</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Opacity and cursor follow <code>iui.config</code> →{" "}
                <code>states.disabled</code>.
              </p>
            </div>
            <div className={STORY_FLEX_WRAP_CLASS}>
              <div className={STORY_CARD_CLASS}>
                <Avatar
                  ariaLabel="Disabled initials"
                  size="3xl"
                  color="brand"
                  disabled
                >
                  DI
                </Avatar>
                <span className={STORY_LABEL_CLASS}>initials</span>
              </div>
              <div className={STORY_CARD_CLASS}>
                <Avatar
                  ariaLabel={imageAvatars[0].name}
                  img={imageAvatars[0].img}
                  color={imageAvatars[0].color}
                  size="3xl"
                  disabled
                />
                <span className={STORY_LABEL_CLASS}>image</span>
              </div>
              <div className={STORY_CARD_CLASS}>
                <Avatar
                  ariaLabel="Disabled icon"
                  icon={{ type: "icon", name: "@user" }}
                  size="3xl"
                  color="neutral"
                  disabled
                />
                <span className={STORY_LABEL_CLASS}>icon</span>
              </div>
              <div className={STORY_CARD_CLASS}>
                <Avatar.Group
                  layout="last-on-top"
                  size="2xl"
                  disabled
                  counter={{ max: 3, color: "neutral" }}
                >
                  {groupAvatars.slice(0, 4).map((av, i) => (
                    <Avatar key={i} ariaLabel={av.name} color={av.color}>
                      {av.name}
                    </Avatar>
                  ))}
                </Avatar.Group>
                <span className={STORY_LABEL_CLASS}>group</span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── Adaptive Mode ───────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Adaptive Mode</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                <code>adaptive=true</code> inverts the palette in dark mode.
              </p>
            </div>
            <div className={STORY_ADAPTIVE_CONTAINER}>
              <div className={STORY_ADAPTIVE_COL}>
                <span className={STORY_SPAN_LABEL}>adaptive: false</span>
                <Avatar
                  ariaLabel="Non-adaptive"
                  adaptive={false}
                  color="brand"
                  size="2xl"
                >
                  NA
                </Avatar>
              </div>
              <div className={STORY_ADAPTIVE_COL}>
                <span className={STORY_SPAN_LABEL}>adaptive: true</span>
                <Avatar
                  ariaLabel="Adaptive"
                  adaptive={true}
                  color="brand"
                  size="2xl"
                >
                  AD
                </Avatar>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── Slot Options ────────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Corner Slot Options</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Each corner (<code>topStart</code>, <code>topEnd</code>,{" "}
                <code>bottomStart</code>, <code>bottomEnd</code>) accepts any
                React node via the <code>slots</code> prop.
              </p>
            </div>
            {slotTypes.map((slotType) => (
              <div key={slotType.type} className="space-y-2">
                <h3 className={STORY_H3_CLASS}>{slotType.label}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {slotPositions.map((pos) => (
                    <div
                      key={`${slotType.type}-${pos}`}
                      className={STORY_CARD_CLASS}
                    >
                      <Avatar
                        ariaLabel={slotType.label}
                        color="brand"
                        size="6xl"
                        slots={getShowcaseSlots(slotType.type, pos)}
                      >
                        SL
                      </Avatar>
                      <span className={STORY_LABEL_CLASS}>
                        {positionLabels[pos]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* icon filled / outlined */}
            <div className="space-y-2 pt-2">
              <h3 className={STORY_H3_CLASS}>Icon filled vs. outlined</h3>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {[
                  { label: "outlined", filled: false },
                  { label: "filled", filled: true },
                ].map((item) => (
                  <div key={item.label} className={STORY_CARD_CLASS}>
                    <Avatar
                      ariaLabel={`Star ${item.label}`}
                      size="5xl"
                      icon={{
                        type: "icon",
                        name: item.filled ? "@star-filled" : "@star",
                      }}
                    />
                    <span className={STORY_LABEL_CLASS}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot badge variants */}
            <div className="space-y-2 pt-2">
              <h3 className={STORY_H3_CLASS}>Dot badge — variant</h3>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {(["solid", "solid-outline", "outline"] as const).map(
                  (variant) => (
                    <div key={`dot-${variant}`} className={STORY_CARD_CLASS}>
                      <Avatar
                        ariaLabel="DB"
                        size="5xl"
                        slots={{
                          topEnd: (
                            <SlotRenderer
                              slot={{
                                type: "badge-dot",
                                variant,
                                appearance: "strong",
                                color: "success",
                              }}
                            />
                          ),
                        }}
                      >
                        DB
                      </Avatar>
                      <span className={STORY_LABEL_CLASS}>{variant}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Status indicator colors */}
            <div className="space-y-2 pt-2">
              <h3 className={STORY_H3_CLASS}>Status indicator — color</h3>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {(
                  ["success", "warning", "danger", "info", "brand"] as const
                ).map((color) => (
                  <div key={`status-${color}`} className={STORY_CARD_CLASS}>
                    <Avatar
                      ariaLabel={color}
                      size="5xl"
                      slots={{
                        topEnd: (
                          <SlotRenderer
                            slot={{
                              type: "badge-status-indicator",
                              appearance: "strong",
                              color,
                            }}
                          />
                        ),
                      }}
                    >
                      {color.slice(0, 2).toUpperCase()}
                    </Avatar>
                    <span className={STORY_LABEL_CLASS}>{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Counter badge appearances */}
            <div className="space-y-2 pt-2">
              <h3 className={STORY_H3_CLASS}>Counter badge — appearance</h3>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {(["strong", "soft", "onColor", "dualTone"] as const).map(
                  (appearance) => (
                    <div
                      key={`counter-appearance-${appearance}`}
                      className={STORY_CARD_CLASS}
                    >
                      <Avatar
                        ariaLabel={appearance}
                        size="6xl"
                        slots={{
                          topEnd: (
                            <SlotRenderer
                              slot={{
                                type: "badge-counter",
                                variant: "solid",
                                appearance,
                                color: "brand",
                                counter: 7,
                                max: 99,
                              }}
                            />
                          ),
                        }}
                      >
                        {appearance.slice(0, 2).toUpperCase()}
                      </Avatar>
                      <span className={STORY_LABEL_CLASS}>{appearance}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Counter badge variant × color */}
            <div className="space-y-2 pt-2">
              <h3 className={STORY_H3_CLASS}>
                Counter badge — variant × color
              </h3>
              <div className={STORY_FLEX_WRAP_CLASS}>
                {(["solid", "solid-outline", "outline", "ghost"] as const).map(
                  (variant, idx) => {
                    const badgeColor = (
                      ["brand", "success", "warning", "danger"] as const
                    )[idx];
                    return (
                      <div
                        key={`counter-${variant}`}
                        className={STORY_CARD_CLASS}
                      >
                        <Avatar
                          ariaLabel={variant}
                          size="6xl"
                          slots={{
                            topEnd: (
                              <SlotRenderer
                                slot={{
                                  type: "badge-counter",
                                  variant,
                                  appearance: "strong",
                                  color: badgeColor,
                                  counter: 12,
                                  max: 99,
                                }}
                              />
                            ),
                          }}
                        >
                          {variant.slice(0, 2).toUpperCase()}
                        </Avatar>
                        <span className={STORY_LABEL_CLASS}>
                          {variant} / {badgeColor}
                        </span>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── Spacing Variants ────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Spacing Variants</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                Compact, standard, and spacious overlap spacing across stacked
                layouts.
              </p>
            </div>
            <div className="space-y-8">
              {spacingVariants.map((spacing) => {
                const stackingMargins = generateStackingMargins(spacing);
                return (
                  <div
                    key={spacing}
                    className="space-y-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 capitalize">
                      {spacing}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(["last-on-top", "first-on-top"] as const).map(
                        (layout) => (
                          <div
                            key={`${spacing}-${layout}`}
                            className="space-y-2"
                          >
                            <span className={STORY_LABEL_CLASS}>{layout}</span>
                            <div className="flex items-center py-2">
                              {groupAvatars.slice(0, 4).map((av, index) => {
                                const isFirst = index === 0;
                                const marginClass = getStackingMargin(
                                  stackingMargins,
                                  true,
                                  "4xl",
                                  layout,
                                  isFirst,
                                );
                                const zIndexClass =
                                  layout === "first-on-top"
                                    ? ""
                                    : getZIndexClass(index);
                                const zIndexStyle =
                                  layout === "first-on-top"
                                    ? { zIndex: 4 - index + 1 }
                                    : undefined;
                                return (
                                  <Avatar
                                    key={`${spacing}-${layout}-${index}`}
                                    ariaLabel={av.name}
                                    color={av.color}
                                    size="4xl"
                                    className={[
                                      "relative",
                                      zIndexClass,
                                      marginClass,
                                    ]
                                      .filter(Boolean)
                                      .join(" ")}
                                    style={zIndexStyle}
                                  >
                                    {av.name}
                                  </Avatar>
                                );
                              })}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </LazySection>

        {/* ── Group Layouts ───────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Group Layouts</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                All five <code>Avatar.Group</code> layout modes.
              </p>
            </div>
            <div className={STORY_FLEX_WRAP_CLASS}>
              {groupLayouts.map((layout) => (
                <div key={layout} className={STORY_CARD_CLASS}>
                  <Avatar.Group
                    layout={layout}
                    size={
                      layout === "first-on-top" || layout === "last-on-top"
                        ? "2xl"
                        : layout === "pie"
                          ? "3xl"
                          : "xl"
                    }
                    variant="solid"
                    appearance="strong"
                    counter={{ max: 4, color: "brand" }}
                    gridOptions={{ columns: 3 }}
                    pieOptions={{ color: "brand", max: 4 }}
                  >
                    {groupAvatars.map((av, i) => (
                      <Avatar key={i} ariaLabel={av.name} color={av.color}>
                        {av.name}
                      </Avatar>
                    ))}
                  </Avatar.Group>
                  <span className={STORY_LABEL_CLASS}>{layout}</span>
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ── Size Stack ──────────────────────────────────────────────────── */}
        <LazySection>
          <section className={STORY_SECTION_CLASS}>
            <div>
              <h2 className={STORY_SECTION_TITLE_CLASS}>Size Stack</h2>
              <p className={STORY_SECTION_DESC_CLASS}>
                <code>Avatar.Group</code> supports all 14 sizes. Minimum
                recommended size for interactive overlapping avatars is{" "}
                <code>lg</code> (28 px) for WCAG target-size compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(["last-on-top", "first-on-top"] as const).map((layout) => (
                <div
                  key={`size-stack-${layout}`}
                  className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                  <h3 className={STORY_H3_CLASS}>{layout}</h3>
                  <div className="flex flex-col gap-3">
                    {showcaseSizes.map((size) => (
                      <div
                        key={`size-stack-${layout}-${size}`}
                        className="flex items-center gap-4"
                      >
                        <span className="w-14 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {size}
                        </span>
                        <Avatar.Group
                          layout={layout}
                          size={size}
                          shape="circle"
                          variant="solid"
                          appearance="strong"
                          counter={{ max: 4, color: "neutral" }}
                        >
                          {sizeStackAvatars.map((av, i) => (
                            <Avatar
                              key={`${layout}-${size}-${i}`}
                              ariaLabel={av.name}
                              color={av.color}
                            >
                              {av.name}
                            </Avatar>
                          ))}
                        </Avatar.Group>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </LazySection>
      </div>
    );
  
}
