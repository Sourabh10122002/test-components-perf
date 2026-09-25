// Showcase ported from origin/rating:src/components/Rating/stories/Rating.stories.tsx
import { availableColorPalettes } from "@inventive-ui/framework";
import { Rating } from "@inventive-ui/components/Rating";
import type { RatingProps, RatingColor, RatingItem } from "@inventive-ui/components/Rating";
import { LazySection } from "../storybook";

// Showcase layout classes — mirrors the Text/Checkbox showcase stories
const SHOWCASE_WRAPPER = "space-y-12 p-8 min-h-screen";
const SHOWCASE_HEADER = "space-y-2";
const SHOWCASE_H1 = "text-4xl font-bold text-gray-900 dark:text-gray-100";
const SHOWCASE_SUBTITLE = "text-lg text-gray-600 dark:text-gray-400";
const SHOWCASE_SECTION = "space-y-6";
const SHOWCASE_SECTION_TITLE =
  "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1";
const SHOWCASE_SECTION_DESC = "text-sm text-gray-600 dark:text-gray-400";
const SHOWCASE_CARD =
  "p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm";
const SHOWCASE_CARD_LABEL =
  "text-sm font-bold text-gray-400 uppercase tracking-widest";
const SHOWCASE_ITEM_LABEL = "text-xs font-medium text-gray-500 italic";

const SENTIMENT_ITEMS: RatingItem[] = [
  {
    customIcon: "sentiment_very_dissatisfied",
    iconLibrary: "material",
    label: "Very Bad",
    color: "#dc2626",
    tooltip: "Very dissatisfied",
  },
  {
    customIcon: "sentiment_dissatisfied",
    iconLibrary: "material",
    label: "Bad",
    color: "#f59e0b",
    tooltip: "Dissatisfied",
  },
  {
    customIcon: "sentiment_neutral",
    iconLibrary: "material",
    label: "Okay",
    color: "#fbbf24",
    tooltip: "Neutral",
  },
  {
    customIcon: "sentiment_satisfied",
    iconLibrary: "material",
    label: "Good",
    color: "#84cc16",
    tooltip: "Satisfied",
  },
  {
    customIcon: "sentiment_very_satisfied",
    iconLibrary: "material",
    label: "Excellent",
    color: "#22c55e",
    tooltip: "Very satisfied",
  },
];

// Story params were: ()
export default function RatingShowcase() {
    const COLOR_VARIANTS: { label: string; color: RatingColor }[] = [
      { label: "Brand", color: "brand" },
      { label: "Neutral", color: "neutral" },
      { label: "Success", color: "success" },
      { label: "Warning", color: "warning" },
      { label: "Danger", color: "danger" },
      { label: "Info", color: "info" },
    ];
    const ACCENT_COLORS = availableColorPalettes.filter(
      (c) =>
        !["brand", "neutral", "success", "warning", "danger", "info"].includes(
          c,
        ) &&
        c !== "white" &&
        c !== "black",
    );
    const SIZE_VARIANTS: { label: string; size: RatingProps["size"] }[] = [
      { label: "XS", size: "xs" },
      { label: "SM", size: "sm" },
      { label: "BASE", size: "base" },
      { label: "LG", size: "lg" },
      { label: "XL", size: "xl" },
    ];
    const VARIANT_VARIANTS: {
      label: string;
      variant: RatingProps["variant"];
    }[] = [
      { label: "Outline", variant: "outline" },
      { label: "Solid", variant: "solid" },
      { label: "Solid + Outline", variant: "solid-outline" },
      { label: "Ghost", variant: "ghost" },
    ];
    const APPEARANCE_VARIANTS: RatingProps["appearance"][] = [
      "strong",
      "soft",
      "dualTone",
      "onColor",
    ];
    const TYPE_VARIANTS: { label: string; type: RatingProps["type"] }[] = [
      { label: "Star", type: "star" },
      { label: "Emoji", type: "emoji" },
      { label: "Number", type: "number" },
      { label: "Alphabet", type: "alphabet" },
      { label: "Custom Icon", type: "custom-icon" },
    ];

    return (
      <div className={SHOWCASE_WRAPPER}>
        {/* Header */}
        <div className={SHOWCASE_HEADER}>
          <h1 className={SHOWCASE_H1}>Rating Component Showcase</h1>
          <p className={SHOWCASE_SUBTITLE}>
            A comprehensive guide to colors, sizes, variants, appearances,
            types, precision, and interactive modes supported by the Rating
            component — sized and colored consistently with Button.
          </p>
        </div>

        {/* 1. Colors */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Colors</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Semantic and accent color palettes applied to filled rating
                items.
              </p>
            </div>
            <div className="space-y-4">
              <div className={`${SHOWCASE_CARD} space-y-4`}>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Semantic Roles
                </h3>
                <div className="flex flex-wrap gap-8">
                  {COLOR_VARIANTS.map(({ label, color }) => (
                    <div key={color} className="flex flex-col gap-2">
                      <span className={SHOWCASE_ITEM_LABEL}>{label}</span>
                      <Rating color={color} defaultValue={3} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${SHOWCASE_CARD} space-y-4`}>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Accent Colors
                </h3>
                <div className="flex flex-wrap gap-8">
                  {ACCENT_COLORS.map((color) => (
                    <div key={color} className="flex flex-col gap-2">
                      <span className={SHOWCASE_ITEM_LABEL}>{color}</span>
                      <Rating color={color} defaultValue={3} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* 2. Sizes */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Sizes</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Five size variants — xs/sm/base/lg/xl — matching Button's
                icon-size scale exactly.
              </p>
            </div>
            <div className={`${SHOWCASE_CARD} flex flex-col gap-4`}>
              {SIZE_VARIANTS.map(({ label, size }) => (
                <div key={size} className="flex items-center gap-4">
                  <span className={`w-10 ${SHOWCASE_ITEM_LABEL}`}>{label}</span>
                  <Rating size={size} defaultValue={4} />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 3. Variant */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Variant</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Outline, solid, solid+outline, and ghost styles — the same
                vocabulary as Button's variant prop.
              </p>
            </div>
            <div className={`${SHOWCASE_CARD} flex flex-wrap gap-8`}>
              {VARIANT_VARIANTS.map(({ label, variant }) => (
                <div key={variant} className="flex flex-col gap-2">
                  <span className={SHOWCASE_ITEM_LABEL}>{label}</span>
                  <Rating variant={variant} color="brand" defaultValue={4} />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 4. Appearance */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>
                Variant × Appearance Matrix
              </h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Appearance layers a shade intensity on top of variant — strong,
                soft, dualTone, or onColor — matching Button.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <th className="px-6 py-4 text-start text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Variant \ Appearance
                    </th>
                    {APPEARANCE_VARIANTS.map((a) => (
                      <th
                        key={a}
                        className="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-widest"
                      >
                        {a}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VARIANT_VARIANTS.map(({ label, variant }) => (
                    <tr
                      key={variant}
                      className="border-b border-gray-100 dark:border-gray-700 last:border-0"
                    >
                      <td className="px-6 py-4 text-xs font-bold text-gray-400 font-mono">
                        {label}
                      </td>
                      {APPEARANCE_VARIANTS.map((appearance) => {
                        const cellClass =
                          appearance === "onColor"
                            ? "px-6 py-4 text-center bg-brand-500"
                            : "px-6 py-4 text-center";
                        return (
                          <td
                            key={`${variant}-${appearance}`}
                            className={cellClass}
                          >
                            <Rating
                              variant={variant}
                              appearance={appearance}
                              color="brand"
                              defaultValue={3}
                              max={5}
                              size="sm"
                            />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </LazySection>

        {/* 5. Rating Types */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Rating Types</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Star, emoji, number, alphabet, and custom-icon rating styles.
              </p>
            </div>
            <div className={`${SHOWCASE_CARD} flex flex-wrap gap-8`}>
              {TYPE_VARIANTS.map(({ label, type }) => (
                <div key={type} className="flex flex-col gap-2">
                  <span className={SHOWCASE_ITEM_LABEL}>{label}</span>
                  <Rating type={type} defaultValue={3} />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* 6. Custom Icons */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Custom Icons</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Icons from Material Symbols, Lucide, or Phosphor — either
                uniform across all items, or configured per item.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${SHOWCASE_CARD} flex flex-col gap-3`}>
                <h3 className={SHOWCASE_CARD_LABEL}>Uniform (favorite icon)</h3>
                <Rating
                  type="custom-icon"
                  customIcon="favorite"
                  iconLibrary="material"
                  color="danger"
                  variant="solid-outline"
                  precision={0.5}
                  defaultValue={3.5}
                  max={5}
                />
              </div>
              <div className={`${SHOWCASE_CARD} flex flex-col gap-3`}>
                <h3 className={SHOWCASE_CARD_LABEL}>
                  Per-item (sentiment scale)
                </h3>
                <Rating
                  type="custom-icon"
                  color="info"
                  variant="solid-outline"
                  defaultValue={3}
                  data={SENTIMENT_ITEMS}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* 7. Precision */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Precision</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Fractional-step ratings — any precision, not just halves.
              </p>
            </div>
            <div className={`${SHOWCASE_CARD} flex flex-wrap gap-8`}>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>
                  precision=0.5, 3.5 / 5
                </span>
                <Rating precision={0.5} defaultValue={3.5} color="warning" />
              </div>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>
                  precision=0.25, 2.75 / 5
                </span>
                <Rating
                  precision={0.25}
                  defaultValue={2.75}
                  color="brand"
                  variant="solid"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>
                  precision=0.2, 4.4 / 5
                </span>
                <Rating
                  precision={0.2}
                  defaultValue={4.4}
                  color="success"
                  variant="solid-outline"
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* 8. Interaction Modifiers */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Interaction Modifiers</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                highlightSelectedOnly and clearable change how selection is
                displayed and committed.
              </p>
            </div>
            <div className={`${SHOWCASE_CARD} flex flex-wrap gap-8`}>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>
                  Default — items up to the value fill
                </span>
                <Rating defaultValue={3} color="brand" />
              </div>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>
                  highlightSelectedOnly — only item 3 fills
                </span>
                <Rating defaultValue={3} color="brand" highlightSelectedOnly />
              </div>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>
                  clearable — click the selected star again to reset
                </span>
                <Rating defaultValue={3} color="brand" clearable />
              </div>
            </div>
          </section>
        </LazySection>

        {/* 9. Keyboard Navigation */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>Keyboard Navigation</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Rating uses a roving-tabindex radiogroup, the same pattern as
                RadioGroup: Tab focuses the current (or first) item, then Arrow
                Left/Right/Up/Down move and commit by one precision step, and
                Home/End jump to the minimum/maximum value.
              </p>
            </div>
            <div className={`${SHOWCASE_CARD} flex flex-col gap-3`}>
              <span className={SHOWCASE_ITEM_LABEL}>
                Try it: Tab into the stars below, then use the arrow keys
              </span>
              <Rating defaultValue={2} color="brand" />
            </div>
          </section>
        </LazySection>

        {/* 10. States */}
        <LazySection>
          <section className={SHOWCASE_SECTION}>
            <div>
              <h2 className={SHOWCASE_SECTION_TITLE}>States</h2>
              <p className={SHOWCASE_SECTION_DESC}>
                Read-only and disabled states for non-interactive contexts.
              </p>
            </div>
            <div className={`${SHOWCASE_CARD} flex flex-wrap gap-8`}>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>Read-only</span>
                <Rating readOnly defaultValue={4} />
              </div>
              <div className="flex flex-col gap-2">
                <span className={SHOWCASE_ITEM_LABEL}>Disabled</span>
                <Rating disabled defaultValue={2} />
              </div>
            </div>
          </section>
        </LazySection>
      </div>
    );
  }
