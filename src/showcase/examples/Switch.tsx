// Showcase ported from origin/switch:src/components/Switch/stories/SwitchShowcase.stories.tsx
import { useState } from "react";
import type { SwitchProps } from "@inventive-ui/components/Switch";

// Import the explicitly separated components
import { Switch } from "@inventive-ui/components/Switch";
import { availableColorPalettes, cn } from "@inventive-ui/framework";
import { LazySection } from "../storybook";
import {
  getShowcaseTheme,
  SHOWCASE_CONTAINER_CLASS,
  ShowcaseShell,
} from "../storybook";

const commonArgs: Partial<SwitchProps> = {
  size: "base",
  appearance: "strong",
  adaptive: true,
  disabled: false,
  className: "",
  thumb: {
    type: "icon",
    checked: {
      type: "icon",
      name: "@check",
      filled: false,
    },
    unchecked: {
      type: "icon",
      name: "@close",
      filled: false,
    },
    indeterminate: {
      type: "icon",
      name: "@minus",
      filled: false,
    },
  },
  loading: false,
};

const InlineLayoutDemo = ({
  title,
  propLabel,
  isCard,
  groupClassName,
  items,
  width,
}: any) => {
  const [selected, setSelected] = useState([items[0].value]);

  return (
    // 'w-full' ensures it fills the available grid column, 'overflow-hidden' prevents children break-out
    <div
      className={cn(
        "p-6 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-70 rounded-xl w-full shadow-sm overflow-hidden",
        width,
      )}
    >
      {/* Header matching your Checkbox design */}
      <div className="flex justify-between items-end border-b border-gray-80 dark:border-gray-40 pb-2 mb-6">
        <span className="text-[15px] font-bold text-gray-80 dark:text-gray-20">
          {title}
        </span>
        <span className="text-xs font-mono font-medium text-gray-40 dark:text-gray-50">
          {propLabel}
        </span>
      </div>

      <Switch.Group
        defaultValue={selected}
        onChange={setSelected}
        className={cn("w-full", groupClassName)}
      >
        {items.map((item: any) => (
          <Switch.Default
            key={item.value}
            value={item.value}
            label={item.label}
            description={item.description}
            isCard={isCard}
            cTag="switch-primary"
            size="sm"
            // Use w-full for cards, but keep switches flexible for rows
            className={isCard ? "w-full" : "shrink-0"}
          />
        ))}
      </Switch.Group>
    </div>
  );
};

// ----------------------------------------------------------------
// SHOWCASE STORY
// ----------------------------------------------------------------
export default function SwitchShowcase() {
    const globals = {};
    const args = { ...commonArgs } as SwitchProps;
    /* ---------------------------- HOOKS & STATE ---------------------------------- */
    const theme = getShowcaseTheme(globals);
    // @ts-ignore -- unused in the original story (noUnusedLocals)
    const switchDefaults = { ...theme.componentProps, color: theme.color };

    const [adaptive, setAdaptive] = useState(true);
    const [dark, setDark] = useState(false);

    /* ---------------------------- LOGIC ------------------------------------------ */
    const types = ["solid", "raised", "default"] as const;
    const sizes = ["xs", "sm", "base", "lg", "xl"] as const;
    const trackVariants = ["solid", "outline", "solid-outline"] as const;
    const thumbVariants = ["solid", "solid-outline"] as const;

    // Styles
    const labelStyle =
      "text-xs font-bold text-gray-40 uppercase tracking-wider mb-2 block";
    const gridStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";

    const [prefix, setPrefix] = useState(false);
    const [suffix, setsuffix] = useState(false);

    /* ---------------------------- RENDER ----------------------------------------- */
    return (
      <ShowcaseShell globals={globals} className={cn(SHOWCASE_CONTAINER_CLASS, "p-0")}>
        <div
          className={cn(
            "min-h-screen bg-neutral-50 dark:bg-black p-4 rounded-lg font-sans text-gray-90 dark:text-gray-10 space-y-4",
          )}
        >
          {/* HEADER */}
          <header className={cn("flex justify-between items-center")}>
            <div>
              <h1 className={cn("text-3xl font-bold mb-2 text-gray-12 dark:text-gray-84")}>
                Switch Component Showcase
              </h1>
              <p className={cn("text-gray-48 dark:text-gray-92")}>
                Comprehensive catalog of all states and variations.
              </p>
            </div>
          </header>


          <LazySection enabled={true}>
            <section>
              <span className={cn({ labelStyle }, "text-gray-48 dark:text-gray-92")}>States</span>
              <div className={cn(gridStyle, " ")}>
                {/* Loading */}
                <div
                  className={cn(
                    "flex flex-row items-center w-fit p-6 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-50 rounded-xl gap-4",
                  )}
                >
                  <div
                    className={cn(
                      "flex w-35 p-2 items-center mx-2 rounded-lg border border-gray-20 dark:border-gray-60",
                    )}
                  >
                    <span
                      className={cn(
                        "flex text-sm text-gray-60 dark:text-gray-40 font-medium mx-2",
                      )}
                    >
                      unchecked
                    </span>
                    <div className={cn("flex gap-4")}>
                      <Switch cTag="switch-primary" checked={false} />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex w-35 p-2 items-center mx-2 rounded-lg border border-gray-20 dark:border-gray-60",
                    )}
                  >
                    <span
                      className={cn(
                        "flex text-sm text-gray-60 dark:text-gray-40 font-medium mx-2",
                      )}
                    >
                      checked
                    </span>
                    <div className={cn("flex gap-4")}>
                      <Switch cTag="switch-primary" checked />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex w-45 p-2 items-center mx-2 rounded-lg border border-gray-20 dark:border-gray-60",
                    )}
                  >
                    <span
                      className={cn(
                        "flex text-sm text-gray-60 dark:text-gray-40 font-medium mx-2",
                      )}
                    >
                      Indeterminate
                    </span>
                    <div className={cn("flex gap-4")}>
                      <Switch
                        cTag="switch-primary"
                        indeterminate
                        thumb={{
                          type: "icon",
                          checked: {
                            type: "icon",
                            name: "@check",
                            filled: false,
                          },
                          unchecked: {
                            type: "icon",
                            name: "@close",
                            filled: false,
                          },
                          indeterminate: {
                            type: "icon",
                            name: "@minus",
                            filled: false,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection >
            <section>
              <span className={cn({ labelStyle }, "my-4 text-gray-48 dark:text-gray-92")}>
                Semantic Color options
              </span>
              <div
                className={cn(
                  "grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2",
                )}
              >
                {["brand", "neutral", "info", "success", "warning", "danger"].map(
                  (color) => (
                    <div
                      key={color}
                      className={cn(
                        "flex flex-col items-center border bg-white dark:bg-gray-90 border-gray-20 dark:border-gray-50 rounded-lg p-4 gap-2",
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm text-gray-60 dark:text-gray-40 font-medium",
                        )}
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </span>
                      <Switch
                        cTag="switch-primary"
                        color={color}
                        defaultChecked={true}
                        thumb={{
                          type: "icon",
                          indeterminate: { type: "icon", name: "@minus" },
                        }}
                      />
                    </div>
                  ),
                )}
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section>
              <span className={cn({ labelStyle }, "my-4 text-gray-48 dark:text-gray-92")}>
                Accent Color options
              </span>
              <div
                className={cn(
                  "grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2",
                )}
              >
                {availableColorPalettes
                  .filter(
                    (c) =>
                      ![
                        "brand",
                        "neutral",
                        "success",
                        "warning",
                        "danger",
                        "info",
                      ].includes(c),
                  )
                  .map((color) => (
                    <div
                      key={color}
                      className={cn(
                        `flex flex-col items-center border ${color === "white" ? "bg-black dark:bg-gray-90" : "bg-white dark:bg-gray-90"} border-gray-20 dark:border-gray-50 rounded-lg p-4 gap-2`,
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm text-gray-60 dark:text-gray-40 font-medium",
                        )}
                      >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </span>
                      <Switch
                        cTag="switch-primary"
                        color={color}
                        defaultChecked={true}
                        thumb={{
                          type: "icon",
                          indeterminate: { type: "icon", name: "@minus" },
                        }}
                      />
                    </div>
                  ))}
              </div>
            </section>
          </LazySection>

          {/* 1. MATRIX: Types vs Sizes */}
          <LazySection>
            <section className={cn("my-4")}>
              <span className={cn({ labelStyle }, "text-gray-48 dark:text-gray-92")}>Types & Sizes</span>
              <div
                className={cn(
                  "overflow-x-auto bg-white dark:bg-gray-90 rounded-xl border border-gray-20 dark:border-gray-50 shadow-sm",
                )}
              >
                <table className={cn("w-full text-start")}>
                  <thead>
                    <tr
                      className={cn(
                        "border-b border-gray-10 dark:border-gray-80",
                      )}
                    >
                      <th
                        className={cn(
                          "p-4 text-xs text-gray-48 dark:text-gray-92 font-medium",
                        )}
                      >
                        Type / Size
                      </th>
                      {sizes.map((s) => (
                        <th
                          key={s}
                          className={cn(
                            "p-4 text-xs text-gray-60 dark:text-gray-40 font-medium uppercase text-center",
                          )}
                        >
                          {s}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody
                    className={cn(
                      "divide-y divide-gray-10 dark:divide-gray-80",
                    )}
                  >
                    {types.map((type) => {
                      const CurrentSwitch =
                        type === "solid"
                          ? Switch
                          : type === "raised"
                            ? Switch.Raised
                            : Switch.Default;
                      return (
                        <tr key={type}>
                          <td
                            className={cn(
                              "p-4 font-semibold text-sm text-gray-60 dark:text-gray-40 capitalize",
                            )}
                          >
                            {type}
                          </td>
                          {sizes.map((size) => (
                            <td
                              key={`${type}-${size}`}
                              className={cn(
                                "p-4 border border-gray-30 rounded-lg dark:border-gray-60",
                              )}
                            >
                              <div
                                className={cn(
                                  "flex flex-col items-center justify-center w-full h-full",
                                  CurrentSwitch === Switch.Raised
                                    ? "gap-5"
                                    : "gap-2",
                                )}
                              >
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size={size}
                                  checked
                                  className={"py-2"}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size={size}
                                  checked={false}
                                  className={"py-2"}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size={size}
                                  indeterminate={true}
                                  className={"py-2"}
                                />
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </LazySection>

          {/* MATRIX: Types vs Variants */}
          <LazySection>
            <section className={cn("my-4")}>
              <span className={cn({ labelStyle }, "text-gray-48 dark:text-gray-92")}>
                Types, Track & Thumb Variants (Size: base) (Appearance: Strong)
              </span>
              <div className={cn("flex justify-start items-end mb-1")}>
                <div
                  className={cn(
                    "flex items-center gap-3 bg-white dark:bg-gray-80 p-2 rounded-lg border border-gray-20 dark:border-gray-50 shadow-sm",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold text-gray-48 dark:text-gray-92 uppercase tracking-wider block",
                    )}
                  >
                    Adaptive:
                  </span>
                  <Switch
                    cTag="switch-primary"
                    size="sm"
                    track={{
                      type: "text",
                      checked: "T",
                      unchecked: "F",
                    }}
                    onClick={() => setAdaptive(!adaptive)}
                    checked={adaptive}
                  />
                </div>
                <div
                  className={cn(
                    "flex items-center gap-3 bg-white dark:bg-gray-80 p-2 rounded-lg border border-gray-20 dark:border-gray-50 shadow-sm",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold text-gray-48 dark:text-gray-92 uppercase tracking-wider block",
                    )}
                  >
                    Dark theme:
                  </span>
                  <Switch
                    cTag="switch-primary"
                    size="sm"
                    track={{
                      type: "text",
                      checked: "T",
                      unchecked: "F",
                    }}
                    onClick={() => setDark(!dark)}
                    checked={dark}
                  />
                </div>
              </div>
              <div
                className={cn(
                  "overflow-x-auto bg-white dark:bg-black rounded-xl border border-gray-20 dark:border-gray-50 shadow-sm",
                  `${dark && "bg-black"}`,
                )}
              >
                <table className={cn("w-full text-start")}>
                  <thead>
                    <tr
                      className={cn(
                        "border-b border-gray-10 dark:border-gray-80",
                      )}
                    >
                      <th
                        className={cn(
                          "p-4 text-xs text-gray-48 dark:text-gray-92 font-medium truncate",
                          `${dark && "text-gray-30"}`,
                        )}
                      >
                        Type \ Variant
                      </th>
                      {/* TRACK VARIANT HEADERS */}
                      {trackVariants.map((v) => (
                        <th
                          key={`header-track-${v}`}
                          className={cn(
                            "p-4 text-xs text-gray-60 dark:text-gray-30 font-medium uppercase text-center border-l border-gray-10 dark:border-gray-90",
                            `${dark && "text-gray-30"}`,
                          )}
                        >
                          Track: {v.replace("+", " + ")}
                        </th>
                      ))}
                      {/* THUMB VARIANT HEADERS */}
                      {thumbVariants.map((v) => (
                        <th
                          key={`header-thumb-${v}`}
                          className={cn(
                            "p-4 text-xs text-gray-60 dark:text-gray-30 font-medium uppercase text-center border-l border-gray-10 dark:border-gray-80",
                            `${dark && "text-gray-30"}`,
                          )}
                        >
                          Thumb: {v.replace("+", " + ")}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody
                    className={cn(
                      "divide-y divide-gray-10 dark:divide-gray-80",
                    )}
                  >
                    {types.map((type) => {
                      const CurrentSwitch =
                        type === "solid"
                          ? Switch.Solid
                          : type === "raised"
                            ? Switch.Raised
                            : Switch.Default;
                      return (
                        <tr key={type}>
                          <td
                            className={cn(
                              "p-4 font-semibold text-gray-60 dark:text-gray-40 text-sm capitalize",
                              `${dark && "text-gray-30"}`,
                            )}
                          >
                            {type}
                          </td>
                          {/* TRACK VARIANT CELLS */}
                          {trackVariants.map((variant) => (
                            <td
                              key={`track-${type}-${variant}`}
                              className={cn(
                                "p-4 border-l border-gray-10 dark:border-gray-80 w-48",
                              )}
                            >
                              <div
                                className={cn(
                                  "flex flex-col items-center gap-5 justify-center w-full h-full",
                                  CurrentSwitch === Switch.Raised
                                    ? "gap-5"
                                    : "gap-2",
                                )}
                              >
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: variant as any,
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: args.thumb?.checked,
                                    unchecked: args.thumb?.unchecked,
                                    indeterminate: args.thumb?.indeterminate,
                                    variant: "solid" as any, // Base variant for Thumb
                                  }}
                                  // color="black"
                                  appearance="strong"
                                  adaptive={adaptive}
                                  checked
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: variant as any,
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: args.thumb?.checked,
                                    unchecked: args.thumb?.unchecked,
                                    indeterminate: args.thumb?.indeterminate,
                                    variant: "solid",
                                  }}
                                  // color="black"
                                  appearance="strong"
                                  adaptive={adaptive}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: variant as any,
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: args.thumb?.checked,
                                    unchecked: args.thumb?.unchecked,
                                    indeterminate: args.thumb?.indeterminate,
                                    variant: "solid",
                                  }}
                                  // color="black"
                                  appearance="strong"
                                  adaptive={adaptive}
                                  indeterminate={true}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                              </div>
                            </td>
                          ))}
                          {/* THUMB VARIANT CELLS */}
                          {thumbVariants.map((variant) => (
                            <td
                              key={`thumb-${type}-${variant}`}
                              className={cn(
                                "p-4 border-l border-gray-10 dark:border-gray-80 w-48",
                              )}
                            >
                              <div
                                className={cn(
                                  "flex flex-col items-center justify-center w-full h-full",
                                  CurrentSwitch === Switch.Raised
                                    ? "gap-5"
                                    : "gap-2",
                                )}
                              >
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: "solid" as any, // Base variant for Track
                                  }}
                                  // color="black"
                                  thumb={{
                                    type: "icon",
                                    checked: {
                                      type: "icon",
                                      name: "@check",
                                      filled: false,
                                    },
                                    unchecked: {
                                      type: "icon",
                                      name: "@close",
                                      filled: false,
                                    },
                                    indeterminate: {
                                      type: "icon",
                                      name: "@minus",
                                      filled: false,
                                    },
                                    variant: variant as any,
                                  }}
                                  appearance="strong"
                                  adaptive={adaptive}
                                  checked
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: "solid" as any, // Base variant for Track
                                  }}
                                  // color="black"
                                  thumb={{
                                    type: "icon",
                                    checked: {
                                      type: "icon",
                                      name: "@check",
                                      filled: false,
                                    },
                                    unchecked: {
                                      type: "icon",
                                      name: "@close",
                                      filled: false,
                                    },
                                    indeterminate: {
                                      type: "icon",
                                      name: "@minus",
                                      filled: false,
                                    },
                                    variant: variant as any,
                                  }}
                                  appearance="strong"
                                  adaptive={adaptive}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: "solid" as any, // Base variant for Track
                                  }}
                                  // color="black"
                                  thumb={{
                                    type: "icon",
                                    checked: {
                                      type: "icon",
                                      name: "@check",
                                      filled: false,
                                    },
                                    unchecked: {
                                      type: "icon",
                                      name: "@close",
                                      filled: false,
                                    },
                                    indeterminate: {
                                      type: "icon",
                                      name: "@minus",
                                      filled: false,
                                    },
                                    variant: variant as any,
                                  }}
                                  appearance="strong"
                                  adaptive={adaptive}
                                  indeterminate={true}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </LazySection>

          {/* 3. MAIN MATRIX: Types vs Variants onColor */}
          <LazySection>
            <section className={cn("my-2")}>
              <span className={cn({ labelStyle }, "text-gray-48 dark:text-gray-92")}>
                Types, Track & Thumb Variants (Size: base) (Appearance: OnColor)
              </span>
              <div className={cn("flex justify-start items-end mb-1")}>
                <div
                  className={cn(
                    "flex items-center gap-3 bg-white dark:bg-gray-80 p-2 rounded-lg border border-gray-20 dark:border-gray-50 shadow-sm",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold text-gray-48 dark:text-gray-92 uppercase tracking-wider block",
                    )}
                  >
                    Adaptive:
                  </span>
                  <Switch
                    cTag="switch-primary"
                    size="sm"
                    track={{
                      type: "text",
                      checked: "T",
                      unchecked: "F",
                    }}
                    onClick={() => setAdaptive(!adaptive)}
                    checked={adaptive}
                  />
                </div>
                <div
                  className={cn(
                    "flex items-center gap-3 bg-white dark:bg-gray-80 p-2 rounded-lg border border-gray-20 dark:border-gray-50 shadow-sm",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold text-gray-48 dark:text-gray-92 uppercase tracking-wider block",
                    )}
                  >
                    Dark theme:
                  </span>
                  <Switch
                    cTag="switch-primary"
                    size="sm"
                    track={{
                      type: "text",
                      checked: "T",
                      unchecked: "F",
                    }}
                    onClick={() => setDark(!dark)}
                    checked={dark}
                  />
                </div>
              </div>
              <div
                className={cn(
                  "overflow-x-auto bg-white dark:bg-black rounded-xl border border-gray-20 dark:border-gray-80 shadow-sm",
                  `${dark && "bg-black"}`,
                )}
              >
                <table className={cn("w-full text-start")}>
                  <thead>
                    <tr
                      className={cn(
                        "border-b border-gray-10 dark:border-gray-80",
                      )}
                    >
                      <th
                        className={cn(
                          "p-4 text-xs text-gray-48 dark:text-gray-92 font-medium truncate",
                          `${dark && "text-gray-30"}`,
                        )}
                      >
                        Type \ Variant
                      </th>
                      {/* TRACK VARIANT HEADERS */}
                      {trackVariants.map((v) => (
                        <th
                          key={`oncolor-header-track-${v}`}
                          className={cn(
                            "p-4 text-xs text-gray-60 dark:text-gray-30 font-medium uppercase text-center border-l border-gray-10 dark:border-gray-80",
                            `${dark && "text-gray-30"}`,
                          )}
                        >
                          Track: {v.replace("+", " + ")}
                        </th>
                      ))}
                      {/* THUMB VARIANT HEADERS */}
                      {thumbVariants.map((v) => (
                        <th
                          key={`oncolor-header-thumb-${v}`}
                          className={cn(
                            "p-4 text-xs text-gray-60 dark:text-gray-30 font-medium uppercase text-center border-l border-gray-10 dark:border-gray-80",
                            `${dark && "text-gray-30"}`,
                          )}
                        >
                          Thumb: {v.replace("+", " + ")}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody
                    className={cn(
                      "divide-y divide-gray-10 dark:divide-gray-80",
                    )}
                  >
                    {types.map((type) => {
                      const CurrentSwitch =
                        type === "solid"
                          ? Switch
                          : type === "raised"
                            ? Switch.Raised
                            : Switch.Default;
                      return (
                        <tr key={type}>
                          <td
                            className={cn(
                              "p-4 font-semibold text-gray-60 dark:text-gray-30 text-sm capitalize",
                              `${dark && "text-gray-30"}`,
                            )}
                          >
                            {type}
                          </td>
                          {/* TRACK VARIANT CELLS */}
                          {trackVariants.map((variant) => (
                            <td
                              key={`oncolor-track-${type}-${variant}`}
                              className={cn(
                                "p-4 border-l border-gray-20 dark:border-gray-80 bg-brand-500 dark:bg-brand-400 w-48",
                                `${dark && "bg-brand-400"}`,
                              )}
                            >
                              <div
                                className={cn(
                                  "flex flex-col items-center justify-center w-full h-full",
                                  CurrentSwitch === Switch.Raised
                                    ? "gap-5"
                                    : "gap-2",
                                )}
                              >
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  thumb={{
                                    type: "icon",
                                    checked: args.thumb?.checked,
                                    unchecked: args.thumb?.unchecked,
                                    indeterminate: args?.thumb?.indeterminate,
                                    variant: "solid",
                                  }}
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: variant as any,
                                  }}
                                  appearance="onColor"
                                  adaptive={adaptive}
                                  checked
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: variant as any,
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: args.thumb?.checked,
                                    unchecked: args.thumb?.unchecked,
                                    indeterminate: args?.thumb?.indeterminate,
                                    variant: "solid",
                                  }}
                                  appearance="onColor"
                                  adaptive={adaptive}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: variant as any,
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: args.thumb?.checked,
                                    unchecked: args.thumb?.unchecked,
                                    indeterminate: args?.thumb?.indeterminate,
                                    variant: "solid",
                                  }}
                                  appearance="onColor"
                                  adaptive={adaptive}
                                  indeterminate={true}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                              </div>
                            </td>
                          ))}
                          {/* THUMB VARIANT CELLS */}
                          {thumbVariants.map((variant) => (
                            <td
                              key={`oncolor-thumb-${type}-${variant}`}
                              className={cn(
                                "p-4 border-l border-gray-20 dark:border-gray-80 bg-brand-500 dark:bg-brand-400 w-48",
                                `${dark && "bg-brand-400"}`,
                              )}
                            >
                              <div
                                className={cn(
                                  "flex flex-col items-center justify-center w-full h-full",
                                  CurrentSwitch === Switch.Raised
                                    ? "gap-5"
                                    : "gap-2",
                                )}
                              >
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: "solid" as any, // Base variant for Track
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: {
                                      type: "icon",
                                      name: "@check",
                                      filled: false,
                                    },
                                    unchecked: {
                                      type: "icon",
                                      name: "@close",
                                      filled: false,
                                    },
                                    indeterminate: {
                                      type: "icon",
                                      name: "@minus",
                                      filled: false,
                                    },
                                    variant: variant as any,
                                  }}
                                  appearance="onColor"
                                  adaptive={adaptive}
                                  checked
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: "solid" as any, // Base variant for Track
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: {
                                      type: "icon",
                                      name: "@check",
                                      filled: false,
                                    },
                                    unchecked: {
                                      type: "icon",
                                      name: "@close",
                                      filled: false,
                                    },
                                    indeterminate: {
                                      type: "icon",
                                      name: "@minus",
                                      filled: false,
                                    },
                                    variant: variant as any,
                                  }}
                                  appearance="onColor"
                                  adaptive={adaptive}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                                <CurrentSwitch
                                  cTag="switch-primary"
                                  {...args}
                                  size="base"
                                  track={{
                                    type: "text",
                                    checked: "On",
                                    unchecked: "Off",
                                    variant: "solid" as any, // Base variant for Track
                                  }}
                                  thumb={{
                                    type: "icon",
                                    checked: {
                                      type: "icon",
                                      name: "@check",
                                      filled: false,
                                    },
                                    unchecked: {
                                      type: "icon",
                                      name: "@close",
                                      filled: false,
                                    },
                                    indeterminate: {
                                      type: "icon",
                                      name: "@minus",
                                      filled: false,
                                    },
                                    variant: variant as any,
                                  }}
                                  appearance="onColor"
                                  adaptive={adaptive}
                                  indeterminate={true}
                                  checked={false}
                                  className={cn(dark ? "dark" : "", "py-2")}
                                />
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </LazySection>

          {/* 3. INTERACTIVE STATES */}
          <LazySection>
            <section>
              <span
                className={cn(
                  "text-xs font-bold text-gray-48 dark:text-gray-92 uppercase tracking-wider mb-2 ",
                )}
              >
                Interactive States (Loading & Disabled) (Size: base)
              </span>
              <div className={cn("flex flex-row gap-6 my-2")}>
                {/* Loading */}
                <div
                  className={cn(
                    "p-6 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-50 rounded-xl flex flex-col gap-4 w-fit",
                  )}
                >
                  <span
                    className={cn(
                      "text-sm  text-gray-60 dark:text-gray-40 font-medium uppercase",
                    )}
                  >
                    Loading
                  </span>
                  {/* ------------------ 1. HEADER ROW (Rendered Once) ------------------ */}
                  <div className={cn("flex gap-4")}>
                    <div className={cn("w-16")} />
                    {["Inactive", "Active", "Indeterminate"].map((label) => (
                      <div
                        key={label}
                        className={cn("flex w-34.25 items-center justify-center")}
                      >
                        <span
                          className={cn(
                            "text-sm font-medium text-gray-60 dark:text-gray-40",
                          )}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* ------------------ 2. DATA ROWS (The Switches) ------------------ */}
                  {types.map((type) => {
                    const CurrentSwitch =
                      type === "solid"
                        ? Switch
                        : type === "raised"
                          ? Switch.Raised
                          : Switch.Default;
                    return (
                      <div key={type} className={cn("flex gap-4")}>
                        {/* Type Label Column */}
                        <div
                          className={cn("flex items-center justify-center w-16")}
                        >
                          <span
                            className={cn(
                              "text-xs font-bold text-gray-60 dark:text-gray-40 uppercase tracking-wider",
                            )}
                          >
                            {type}
                          </span>
                        </div>
                        {/* Switch Columns */}
                        {[
                          { state: undefined }, // Inactive
                          { state: "active" },
                          { state: "indeterminate" },
                        ].map(({ state }, index) => (
                          <div
                            key={index}
                            className={cn(
                              "flex flex-col w-34.25 border border-gray-20 dark:border-gray-60 rounded-lg items-center justify-center py-4",
                            )}
                          >
                            <CurrentSwitch
                              cTag="switch-primary"
                              {...args}
                              indeterminate={state === "indeterminate"}
                              checked={state === "active"}
                              size="base"
                              disabled={false}
                              loading={true}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
                {/* Disabled */}
                <div
                  className={cn(
                    "p-6 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-50 rounded-xl flex flex-col gap-4 w-fit",
                  )}
                >
                  <span className={cn("text-sm font-medium uppercase")}>
                    Disabled
                  </span>
                  {/* ------------------ 1. HEADER ROW (Rendered Once) ------------------ */}
                  <div className={cn("flex gap-4")}>
                    <div className={cn("w-16")} />
                    {["Inactive", "Active", "Indeterminate"].map((label) => (
                      <div
                        key={label}
                        className={cn("flex w-34.25 items-center justify-center")}
                      >
                        <span
                          className={cn(
                            "text-sm font-medium text-gray-60 dark:text-gray-40",
                          )}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* ------------------ 2. DATA ROWS (The Switches) ------------------ */}
                  {types.map((type) => {
                    const CurrentSwitch =
                      type === "solid"
                        ? Switch
                        : type === "raised"
                          ? Switch.Raised
                          : Switch.Default;
                    return (
                      <div key={type} className={cn("flex gap-4")}>
                        {/* Type Label Column */}
                        <div
                          className={cn("flex items-center justify-center w-16")}
                        >
                          <span
                            className={cn(
                              "text-xs font-bold  text-gray-60 dark:text-gray-40 uppercase tracking-wider",
                            )}
                          >
                            {type}
                          </span>
                        </div>
                        {/* Switch Columns */}
                        {[
                          { state: undefined }, // Inactive
                          { state: "active" },
                          { state: "indeterminate" },
                        ].map(({ state }, index) => (
                          <div
                            key={index}
                            className={cn(
                              "flex flex-col w-34.25 border border-gray-20 dark:border-gray-60 rounded-lg items-center justify-center py-4",
                            )}
                          >
                            <CurrentSwitch
                              cTag="switch-primary"
                              {...args}
                              indeterminate={state === "indeterminate"}
                              checked={state === "active"}
                              size="base"
                              disabled
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </LazySection>

          {/* 4. INLINE EXAMPLES */}
          <LazySection>
            <section>
              <span
                className={cn(
                  "text-xs font-bold text-gray-48 dark:text-gray-92 uppercase tracking-wider p-2",
                )}
              >
                Label-Icon Configuration
              </span>
              {/* Stack vertically on small screens (flex-col), row on large (lg:flex-row) */}
              <div className={cn("flex flex-col lg:flex-row gap-6 mt-4")}>
                {/* CARD 1: The Grid */}
                <div
                  className={cn(
                    "p-6 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-50 rounded-xl w-full lg:w-auto",
                  )}
                >
                  {/* Scrollable container for ultra-small phones */}
                  <div className={cn("overflow-x-auto max-w-full")}>
                    <div className="min-w-[360px]">
                      {/* Header (Horizontal Bottom Border Only) */}
                      <div
                        className={cn(
                          "flex items-center border-b border-gray-80 dark:border-gray-40 pb-2",
                        )}
                      >
                        <div
                          className={cn(
                            "w-[120px] px-2 py-2 flex items-center justify-center text-xs font-bold text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                          )}
                        >
                          Text / Icon
                        </div>
                        <div
                          className={cn(
                            "w-[120px] px-2 py-2 flex items-center justify-center text-xs font-bold text-gray-80 dark:text-gray-20 uppercase tracking-wider",
                          )}
                        >
                          True
                        </div>
                        <div
                          className={cn(
                            "w-[120px] px-2 py-2 flex items-center justify-center text-xs font-bold text-gray-80 dark:text-gray-20 uppercase tracking-wider",
                          )}
                        >
                          False
                        </div>
                      </div>
                      {/* Row 1: True (Horizontal Bottom Border Only) */}
                      <div
                        className={cn(
                          "flex items-center border-b border-gray-80 dark:border-gray-40 py-3",
                        )}
                      >
                        <div
                          className={cn(
                            "w-[120px] px-2 flex items-center justify-center text-xs font-bold text-gray-80 dark:text-gray-20 uppercase tracking-wider",
                          )}
                        >
                          True
                        </div>
                        {/* Cell: True/True */}
                        <div className="w-[120px] flex items-center justify-center">
                          <div
                            className={cn(
                              "px-4 py-3 border border-gray-30 dark:border-gray-70 rounded-lg flex items-center justify-center",
                            )}
                          >
                            <Switch
                              cTag="switch-primary"
                              thumb={{
                                type: "icon",
                                checked: {
                                  type: "icon",
                                  name: "@check",
                                  filled: false,
                                },
                                unchecked: {
                                  type: "icon",
                                  name: "@close",
                                  filled: false,
                                },
                                indeterminate: {
                                  type: "icon",
                                  name: "@minus",
                                  filled: false,
                                },
                              }}
                              track={{
                                type: "text",
                                checked: "On",
                                unchecked: "Off",
                              }}
                            />
                          </div>
                        </div>
                        {/* Cell: True/False */}
                        <div className="w-[120px] flex items-center justify-center">
                          <div
                            className={cn(
                              "px-4 py-3 border border-gray-20 dark:border-gray-80 rounded-lg flex items-center justify-center",
                            )}
                          >
                            <Switch
                              cTag="switch-primary"
                              track={{
                                type: "text",
                                checked: "On",
                                unchecked: "Off",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Row 2: False (No Bottom Border) */}
                      <div className={cn("flex items-center pt-3")}>
                        <div
                          className={cn(
                            "w-[120px] px-2 flex items-center justify-center text-xs font-bold text-gray-80 dark:text-gray-20 uppercase tracking-wider",
                          )}
                        >
                          False
                        </div>
                        {/* Cell: False/True */}
                        <div className="w-[120px] flex items-center justify-center">
                          <div
                            className={cn(
                              "px-4 py-3 border border-gray-30 dark:border-gray-70 rounded-lg flex items-center justify-center",
                            )}
                          >
                            <Switch
                              cTag="switch-primary"
                              thumb={{
                                type: "icon",
                                checked: {
                                  type: "icon",
                                  name: "@check",
                                  filled: false,
                                },
                                unchecked: {
                                  type: "icon",
                                  name: "@close",
                                  filled: false,
                                },
                                indeterminate: {
                                  type: "icon",
                                  name: "@minus",
                                  filled: false,
                                },
                              }}
                            />
                          </div>
                        </div>
                        {/* Cell: False/False */}
                        <div className="w-[120px] flex items-center justify-center">
                          <div
                            className={cn(
                              "px-4 py-3 border border-gray-20 dark:border-gray-80 rounded-lg flex items-center justify-center",
                            )}
                          >
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CARD 2: Icon Position */}
                <div
                  className={cn(
                    "px-10 py-10 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-50 rounded-xl flex flex-col gap-6 w-full lg:w-auto items-center justify-center",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-bold text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                    )}
                  >
                    Icon Position
                  </span>
                  <div
                    className={cn(
                      "flex flex-row lg:flex-col gap-8 lg:gap-10 w-full justify-center",
                    )}
                  >
                    <div
                      className={cn(
                        "flex w-[120px] flex-col items-center text-center gap-3",
                      )}
                    >
                      <Switch
                        cTag="switch-primary"
                        thumb={{
                          type: "icon",
                          checked: {
                            type: "icon",
                            name: "@check",
                            filled: false,
                          },
                          unchecked: {
                            type: "icon",
                            name: "@close",
                            filled: false,
                          },
                          indeterminate: {
                            type: "icon",
                            name: "@minus",
                            filled: false,
                          },
                        }}
                      />
                      <span
                        className={cn(
                          "text-xs font-bold text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                        )}
                      >
                        Inside Thumb
                      </span>
                    </div>
                    <div
                      className={cn(
                        "flex w-[120px] flex-col items-center text-center gap-3",
                      )}
                    >
                      <Switch
                        cTag="switch-primary"
                        track={{
                          type: "icon",
                          checked: {
                            type: "icon",
                            name: "@check",
                            filled: false,
                          },
                          unchecked: {
                            type: "icon",
                            name: "@close",
                            filled: false,
                          },
                        }}
                      />
                      <span
                        className={cn(
                          "text-xs font-bold text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                        )}
                      >
                        Outside Thumb
                      </span>
                    </div>
                  </div>
                </div>
                {/* CARD 3: Text Options */}
                <div
                  className={cn(
                    "px-10 py-10 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-50 rounded-xl flex flex-col gap-6 w-full lg:w-auto items-center justify-center",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-bold text-gray-60 dark:text-gray-40 uppercase tracking-wider",
                    )}
                  >
                    Text Options
                  </span>
                  <div className={cn("space-y-6 flex flex-col items-center")}>
                    <Switch
                      cTag="switch-primary"
                      checked
                      track={{ type: "text", checked: "On", unchecked: "Off" }}
                    />
                    <Switch
                      cTag="switch-primary"
                      checked
                      track={{ type: "text", checked: "Yes", unchecked: "no" }}
                    />
                    <Switch
                      cTag="switch-primary"
                      checked={false}
                      track={{ type: "text", checked: "1", unchecked: "0" }}
                    />
                    <Switch
                      cTag="switch-primary"
                      checked={false}
                      track={{ type: "text", checked: "T", unchecked: "F" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          <LazySection>
            <section>
              <span
                className={cn(
                  "text-xs font-bold  text-gray-48 dark:text-gray-92 uppercase tracking-wider p-2",
                )}
              >
                Label Position
              </span>
              <div className={cn("flex flex-row gap-6")}>
                <div
                  className={cn(
                    "px-16 py-10 bg-white dark:bg-gray-90 border border-gray-20 dark:border-gray-50 rounded-xl flex flex-col gap-4",
                  )}
                >
                  <div className={cn("flex flex-co gap-16")}>
                    <div className={cn("flex w-[120px] flex-col")}>
                      <span
                        className={cn(
                          "text-sm font-extrabold ms-11 mb-5 text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                        )}
                      >
                        Start
                      </span>
                      <Switch
                        cTag="switch-primary"
                        label={prefix ? "Start" : "Stop"}
                        indicator={{
                          placement: "start",
                        }}
                        onClick={() => setPrefix((pre) => !pre)}
                        checked={prefix ? true : false}
                      />
                    </div>
                    <div className={cn("flex w-[120px] flex-col")}>
                      <span
                        className={cn(
                          "text-sm font-extrabold ms-3 mb-5 text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                        )}
                      >
                        End
                      </span>
                      <Switch
                        cTag="switch-primary"
                        label={suffix ? "Start" : "Stop"}
                        indicator={{
                          placement: "end",
                        }}
                        onClick={() => setsuffix((pre) => !pre)}
                        checked={suffix ? true : false}
                      />
                    </div>
                    <div className={cn("flex w-[120px] flex-col")}>
                      <span
                        className={cn(
                          "text-sm font-extrabold ms-3 mb-5 text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                        )}
                      >
                        Top
                      </span>
                      <Switch
                        cTag="switch-primary"
                        label={suffix ? "Start" : "Stop"}
                        indicator={{
                          placement: "top",
                          align: "start",
                        }}
                        onClick={() => setsuffix((pre) => !pre)}
                        checked={suffix ? true : false}
                      />
                    </div>
                    <div className={cn("flex w-[120px] flex-col")}>
                      <span
                        className={cn(
                          "text-sm font-extrabold ms-0 mb-5 text-gray-48 dark:text-gray-92 uppercase tracking-wider",
                        )}
                      >
                        Bottom
                      </span>
                      <Switch
                        cTag="switch-primary"
                        label={suffix ? "Start" : "Stop"}
                        indicator={{
                          placement: "bottom",
                          align: "start",
                        }}
                        onClick={() => setsuffix((pre) => !pre)}
                        checked={suffix ? true : false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </LazySection>

          {/* NEW: LAYOUT CONFIGURATIONS SECTION */}
          <LazySection>
            <section className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-1 text-gray-46 dark:text-gray-84">
                  Layout Configurations
                </h2>
                <p className="text-gray-48 dark:text-gray-92">
                  Demonstrating various layout directions for switch groups and
                  cards
                </p>
              </div>
              <div className="grid grid-cols-1 w-full">
                {/* COLUMN 1: Standard Group */}
                <div className="space-y-8 min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-gray-48 dark:text-gray-92">
                    Standard Group
                  </h3>
                  <div className="flex flex-col gap-6">
                    <InlineLayoutDemo
                      title="Horizontal"
                      propLabel='direction="row"'
                      isCard={false}
                      groupClassName="flex flex-row flex-wrap gap-x-8 gap-y-6"
                      items={[
                        {
                          value: "1",
                          label: "Option 1",
                          description: "Description 1",
                        },
                        {
                          value: "2",
                          label: "Option 2",
                          description: "Description 2",
                        },
                        {
                          value: "3",
                          label: "Option 3",
                          description: "Description 3",
                        },
                      ]}
                      width="w-130"
                    />
                    <InlineLayoutDemo
                      title="Vertical"
                      propLabel='direction="column"'
                      isCard={false}
                      groupClassName="flex flex-col gap-6"
                      items={[
                        {
                          value: "1",
                          label: "Option 1",
                          description: "Description 1",
                        },
                        {
                          value: "2",
                          label: "Option 2",
                          description: "Description 2",
                        },
                        {
                          value: "3",
                          label: "Option 3",
                          description: "Description 3",
                        },
                      ]}
                      width="w-130"
                    />
                  </div>
                </div>
                {/* COLUMN 2: Card Grid */}
                <div className="space-y-8 min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-gray-48 dark:text-gray-92">
                    Card Grid
                  </h3>
                  <div className="flex flex-col gap-6">
                    <InlineLayoutDemo
                      title="2 Columns Grid"
                      propLabel="grid-cols-2"
                      isCard={true}
                      groupClassName="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      items={[
                        {
                          value: "1",
                          label: "Option 1",
                          description: "Description 1",
                        },
                        {
                          value: "2",
                          label: "Option 2",
                          description: "Description 2",
                        },
                        {
                          value: "3",
                          label: "Option 3",
                          description: "Description 3",
                        },
                        {
                          value: "4",
                          label: "Option 4",
                          description: "Description 4",
                        },
                      ]}
                      width="w-140"
                    />
                    <InlineLayoutDemo
                      title="3 Columns Grid"
                      propLabel="grid-cols-3"
                      isCard={true}
                      groupClassName="grid grid-cols-1 sm:grid-cols-3 gap-2"
                      items={[
                        {
                          value: "1",
                          label: "Option 1",
                          description: "Description 1",
                        },
                        {
                          value: "2",
                          label: "Option 2",
                          description: "Description 2",
                        },
                        {
                          value: "3",
                          label: "Option 3",
                          description: "Description 3",
                        },
                      ]}
                      width="w-140"
                    />
                  </div>
                </div>
              </div>
            </section>
          </LazySection>
        </div>
      </ShowcaseShell>
    );
}
