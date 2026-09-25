// Showcase ported from origin/text:src/components/Text/stories/Text.stories.tsx
import React from "react";
import { Text } from "@inventive-ui/components/Text";
import type { TextProps, TextFontFamily } from "@inventive-ui/components/Text";
import {
  availableColorPalettes,
  semanticColors,
  accentColors,
} from "@inventive-ui/framework";
import {
  fontSize,
  fontWeight as fontWeightTokens,
  fontFamily as fontFamilyTokens,
} from "@inventive-ui/framework";
import { LazySection } from "../storybook";
import {
  getShowcaseTheme,
  ShowcaseShell,
  SHOWCASE_CONTAINER_CLASS,
  SHOWCASE_SCROLL_X_CLASS,
} from "../storybook";

const SHOWCASE_SIZES = Object.keys(fontSize) as TextProps["size"][];
const SHOWCASE_WEIGHTS = Object.keys(fontWeightTokens) as TextProps["weight"][];
const SHOWCASE_FONTS = Object.keys(
  fontFamilyTokens,
) as TextProps["fontFamily"][];

const SHOWCASE_SEMANTIC_COLORS_LIST = ["brand", ...Object.keys(semanticColors)];
const SHOWCASE_ACCENT_COLORS_LIST = Object.keys(accentColors);
const SHOWCASE_GRAY_COLORS_LIST = ["gray", "slate", "zinc", "neutral", "stone"];
const SHOWCASE_SPECIAL_COLORS_LIST = ["black", "white"];

const SHOWCASE_EXCLUDE_LIST = [
  ...SHOWCASE_SEMANTIC_COLORS_LIST,
  ...SHOWCASE_ACCENT_COLORS_LIST,
  ...SHOWCASE_GRAY_COLORS_LIST,
  ...SHOWCASE_SPECIAL_COLORS_LIST,
];
const SHOWCASE_BASE_COLORS_LIST = availableColorPalettes.filter(
  (c) => !SHOWCASE_EXCLUDE_LIST.includes(c),
);

export default function TextShowcase() {
  const globals: Record<string, any> = {};
  const theme = getShowcaseTheme(globals);
  const ThemedText = ({
    fontFamily,
    ...rest
  }: React.ComponentProps<typeof Text>) => (
    <Text
      fontFamily={fontFamily ?? (theme.font as TextFontFamily)}
      {...theme.layoutProps}
      {...rest}
    />
  );
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Text Component Showcase
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A comprehensive guide to typography, alignment, and overflow
          controls in the design system.
        </p>
      </div>

      {/* 1. Typography Section */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Typography Fundamentals
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Basic building blocks: sizes, weights, and font families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sizes */}
            <div className="space-y-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Sizes
              </h3>
              <div className="space-y-2">
                {SHOWCASE_SIZES.map((size) => (
                  <div key={size} className="flex items-baseline gap-4">
                    <span className="w-12 text-2xs text-gray-400 font-mono">
                      {size}
                    </span>
                    <ThemedText size={size} cTag="text-default">
                      The quick brown fox
                    </ThemedText>
                  </div>
                ))}
              </div>
            </div>

            {/* Weights & Fonts */}
            <div className="space-y-8">
              <div className="space-y-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Weights
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-4 items-baseline">
                  {SHOWCASE_WEIGHTS.slice(0, 7).map((weight) => (
                    <div key={weight} className="flex flex-col">
                      <ThemedText
                        weight={weight}
                        size="lg"
                        cTag="text-default"
                      >
                        {weight}
                      </ThemedText>
                      <span className="text-2xs text-gray-400 font-mono mt-1">
                        {weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Font Families
                </h3>
                <div className="space-y-3">
                  {SHOWCASE_FONTS.slice(0, 5).map((font) => (
                    <div key={font} className="flex items-center gap-4">
                      <span className="w-12 text-2xs text-gray-400 font-mono">
                        {font}
                      </span>
                      <ThemedText
                        fontFamily={font}
                        size="lg"
                        cTag="text-default"
                      >
                        The quick brown fox jumps over the lazy dog
                      </ThemedText>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 2. Weight x Size Matrix */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Typography Matrix
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Visual reference for weight and size combinations.
            </p>
          </div>
          <div
            className={`${SHOWCASE_SCROLL_X_CLASS} rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900`}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-start text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Size \ Weight
                  </th>
                  {SHOWCASE_WEIGHTS.map((w) => (
                    <th
                      key={w}
                      className="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-widest"
                    >
                      {w}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SHOWCASE_SIZES.map((s) => (
                  <tr
                    key={s}
                    className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4 text-xs font-bold text-gray-400 font-mono">
                      {s}
                    </td>
                    {SHOWCASE_WEIGHTS.map((w) => (
                      <td key={`${s}-${w}`} className="px-6 py-4 text-center">
                        <ThemedText size={s} weight={w} cTag="text-default">
                          Aa
                        </ThemedText>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>

      {/* 3. Wrapping & Overflow */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Wrapping & Overflow Control
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Precise control over how text behaves in constrained widths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Wrap (Default: true)
              </h3>
              <div className="w-full py-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg">
                <ThemedText wrap={true} cTag="text-default">
                  This text will wrap into multiple lines as the parent
                  container gets narrower. This is the standard behavior for
                  most textual content.
                </ThemedText>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                No-Wrap (wrap: false)
              </h3>
              <div
                className={`${SHOWCASE_SCROLL_X_CLASS} w-full py-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg`}
              >
                <ThemedText wrap={false} cTag="text-default">
                  This text is forced to stay on a single line and will never
                  wrap, even if it overflows the parent container.
                </ThemedText>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Truncation (truncate: true)
              </h3>
              <div className="max-w-50 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg relative">
                <ThemedText truncate cTag="text-default">
                  This text is too long for its container and will be
                  truncated with an ellipsis.
                </ThemedText>
                <div className="absolute -end-2 top-0 h-full w-px bg-red-400/50 dashed" />
              </div>
              <p className="text-2xs text-gray-400 italic">
                Container restricted to 200px
              </p>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 4. Alignment & Block */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Alignment & Block
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Positioning text within its layout container.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-6">
            <div className="grid grid-cols-1 gap-2">
              <ThemedText
                block
                align="start"
                className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded"
                cTag="text-default"
              >
                Start Aligned (Default)
              </ThemedText>
              <ThemedText
                block
                align="center"
                className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded"
                cTag="text-default"
              >
                Center Aligned
              </ThemedText>
              <ThemedText
                block
                align="end"
                className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded"
                cTag="text-default"
              >
                End Aligned
              </ThemedText>
              <ThemedText
                block
                align="justify"
                className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded"
                cTag="text-default"
              >
                Justified alignment ensures that the text fills the full width
                of the container, creating a clean straight edge on both the
                left and right sides. This is often used in newspaper or
                magazine layouts.
              </ThemedText>
            </div>
            <div className="flex flex-wrap items-center gap-12 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="space-y-1">
                <span className="text-2xs font-bold text-gray-400 uppercase">
                  Inline Behavior
                </span>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-100 dark:border-gray-700 gap-2 flex">
                  <ThemedText
                    className="bg-white dark:bg-gray-900 px-1 shadow-sm"
                    cTag="text-default"
                  >
                    Inline 1
                  </ThemedText>
                  <ThemedText
                    className="bg-white dark:bg-gray-900 px-1 shadow-sm"
                    cTag="text-default"
                  >
                    Inline 2
                  </ThemedText>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-2xs font-bold text-gray-400 uppercase">
                  Block Behavior
                </span>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-100 dark:border-gray-700 gap-2 flex flex-col min-w-30">
                  <ThemedText
                    block
                    className="bg-white dark:bg-gray-900 px-1 shadow-sm"
                    cTag="text-default"
                  >
                    Block 1
                  </ThemedText>
                  <ThemedText
                    block
                    className="bg-white dark:bg-gray-900 px-1 shadow-sm"
                    cTag="text-default"
                  >
                    Block 2
                  </ThemedText>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 5. Modifiers & Transformations */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Modifiers & Transformations
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Visual enhancements and text case controls for different
              contexts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visual Modifiers */}
            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Visual Modifiers
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4 items-center">
                <div className="flex flex-col">
                  <ThemedText italic cTag="text-default">
                    Italic
                  </ThemedText>
                  <span className="text-2xs text-gray-400 mt-1 italic">
                    italic
                  </span>
                </div>
                <div className="flex flex-col">
                  <ThemedText underline cTag="text-default">
                    Underline
                  </ThemedText>
                  <span className="text-2xs text-gray-400 mt-1">
                    underline
                  </span>
                </div>
                <div className="flex flex-col">
                  <ThemedText strikethrough cTag="text-default">
                    Strikethrough
                  </ThemedText>
                  <span className="text-2xs text-gray-400 mt-1">
                    strikethrough
                  </span>
                </div>
                <div className="flex flex-col">
                  <ThemedText underline strikethrough cTag="text-default">
                    Combined
                  </ThemedText>
                  <span className="text-2xs text-gray-400 mt-1">
                    both decorations
                  </span>
                </div>
              </div>
            </div>

            {/* Text Transformation */}
            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Text Transformation
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-2xs text-gray-400 font-mono">
                    uppercase
                  </span>
                  <ThemedText transform="uppercase" cTag="text-default">
                    The quick brown fox
                  </ThemedText>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-2xs text-gray-400 font-mono">
                    lowercase
                  </span>
                  <ThemedText transform="lowercase" cTag="text-default">
                    THE QUICK BROWN FOX
                  </ThemedText>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-2xs text-gray-400 font-mono">
                    capitalize
                  </span>
                  <ThemedText transform="capitalize" cTag="text-default">
                    the quick brown fox
                  </ThemedText>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>
      {/* 6. Color Palette */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Color Palette
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A variety of semantic, accent, and base colors tailored for
              different UI contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Semantic & Grayscale */}
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Semantic Colors
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {SHOWCASE_SEMANTIC_COLORS_LIST.map((color) => (
                    <div key={color} className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full bg-${color}-500 border border-gray-200 dark:border-gray-700`}
                      />
                      <ThemedText
                        color={color as any}
                        weight="medium"
                        cTag="text-default"
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </ThemedText>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Grayscale & Special
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {SHOWCASE_GRAY_COLORS_LIST.concat(
                    SHOWCASE_SPECIAL_COLORS_LIST,
                  ).map((color) => (
                    <div key={color} className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full bg-${color === "white" ? "white" : color === "black" ? "black" : color + "-500"} border border-gray-200 dark:border-gray-700`}
                      />
                      <ThemedText
                        color={color as any}
                        weight="medium"
                        className={
                          color === "white" ? "bg-gray-900 px-1 rounded" : ""
                        }
                        cTag="text-default"
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </ThemedText>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Base Palette */}
            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Base Palette
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                {SHOWCASE_BASE_COLORS_LIST.map((color) => (
                  <div key={color} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-sm bg-${color}-500`} />
                    <ThemedText
                      color={color as any}
                      size="sm"
                      cTag="text-default"
                    >
                      {color}
                    </ThemedText>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Colors */}
            <div className="md:col-span-2 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Accent Colors
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {SHOWCASE_ACCENT_COLORS_LIST.map((color) => (
                  <div key={color} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md bg-${color}-500 shadow-sm`}
                    />
                    <ThemedText
                      color={color as any}
                      weight="semibold"
                      cTag="text-default"
                    >
                      {color}
                    </ThemedText>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 6. Custom Styles (Inline `style` prop) */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Custom Styles
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Using the `style` prop for specific decorative needs.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
            <div className="space-y-4">
              <ThemedText
                style={{
                  color: "#6200ee",
                  fontSize: "24px",
                  fontWeight: "900",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
                cTag="text-default"
              >
                Premium Custom Style
              </ThemedText>
              <ThemedText
                style={{
                  background: "linear-gradient(90deg, #ff00cc, #3333ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
                cTag="text-default"
              >
                Gradient Text
              </ThemedText>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 7. Polymorphism (as prop) */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Semantic Polymorphism
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Using the `as` prop to render semantically correct HTML elements
              while maintaining visual consistency.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col gap-2">
              <span className="text-2xs font-bold text-gray-400 uppercase">
                H1 Element
              </span>
              <ThemedText as="h1" size="2xl" weight="bold" cTag="heading">
                Main Title
              </ThemedText>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col gap-2">
              <span className="text-2xs font-bold text-gray-400 uppercase">
                Paragraph
              </span>
              <ThemedText as="p" size="base" cTag="text-default">
                This is rendered as a &lt;p&gt; tag.
              </ThemedText>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col gap-2">
              <span className="text-2xs font-bold text-gray-400 uppercase">
                Strong Tag
              </span>
              <ThemedText as="strong" size="sm" cTag="text-default">
                Strong Semantic Text
              </ThemedText>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col gap-2">
              <span className="text-2xs font-bold text-gray-400 uppercase">
                Emphasized
              </span>
              <ThemedText as="em" size="sm" cTag="text-default">
                Italic Emphasized Tag
              </ThemedText>
            </div>
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700 flex flex-col gap-2">
              <span className="text-2xs font-bold text-gray-400 uppercase">
                Preformatted
              </span>
              <ThemedText
                as="pre"
                size="xs"
                fontFamily="mono"
                className="text-gray-200"
                cTag="text-default"
              >
                npm install @inventive-ui/framework
              </ThemedText>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col gap-2">
              <span className="text-2xs font-bold text-gray-400 uppercase">
                Span Tag
              </span>
              <ThemedText as="span" size="sm" cTag="text-default">
                Simple inline span element.
              </ThemedText>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 8. Theme Adaptation (adaptive) */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Theme Adaptation
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The `adaptive` prop allows text to automatically adjust its
              color shade based on the theme (e.g. lighter in dark mode).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light Mode Container */}
            <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-2xs font-bold text-gray-400 uppercase tracking-widest">
                  Standard Light Mode
                </span>
                <p className="text-xs text-gray-400">
                  Default behavior in light backgrounds.
                </p>
              </div>

              <div className="flex flex-col gap-2 space-y-4">
                {["brand", "blue", "red", "green"].map((color) => (
                  <div
                    key={color}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                  >
                    <span className="text-xs font-mono text-gray-400">
                      {color}
                    </span>
                    <div className="flex gap-8">
                      <div className="flex flex-col items-center gap-1">
                        <ThemedText
                          color={color as any}
                          adaptive={true}
                          weight="semibold"
                          cTag="text-default"
                        >
                          Adaptive
                        </ThemedText>
                        <span className="text-2.5 text-gray-300 font-mono uppercase">
                          On
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <ThemedText
                          color={color as any}
                          adaptive={false}
                          weight="semibold"
                          cTag="text-default"
                        >
                          Static
                        </ThemedText>
                        <span className="text-2.5 text-gray-300 font-mono uppercase">
                          Off
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Mode Container */}
            <div className="dark p-8 bg-gray-900 border border-gray-800 rounded-2xl shadow-xl space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-2xs font-bold text-gray-500 uppercase tracking-widest">
                  Forced Dark Mode
                </span>
                <p className="text-xs text-gray-500">
                  Adaptive text becomes lighter (e.g. shade 400).
                </p>
              </div>

              <div className="flex flex-col gap-2 space-y-4">
                {["brand", "blue", "red", "green"].map((color) => (
                  <div
                    key={color}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800 border border-gray-700"
                  >
                    <span className="text-xs font-mono text-gray-500">
                      {color}
                    </span>
                    <div className="flex gap-8">
                      <div className="flex flex-col items-center gap-1">
                        <ThemedText
                          color={color as any}
                          adaptive={true}
                          weight="semibold"
                          cTag="text-default"
                        >
                          Adaptive
                        </ThemedText>
                        <span className="text-2.5 text-gray-500 font-mono uppercase">
                          On
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <ThemedText
                          color={color as any}
                          adaptive={false}
                          weight="semibold"
                          cTag="text-default"
                        >
                          Static
                        </ThemedText>
                        <span className="text-2.5 text-gray-500 font-mono uppercase">
                          Off
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>
    </ShowcaseShell>
  );
}
