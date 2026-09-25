// Showcase ported from origin/input:src/components/Input/stories/Input.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React from "react";
import { Input } from "@inventive-ui/components/Input";
import type { InputProps as Props } from "@inventive-ui/components/Input";
import { LazySection, ShowcaseShell, SHOWCASE_CONTAINER_CLASS, getShowcaseTheme, getStorybookAccentColorKeys } from "../../storybook";

const commonArgs = {
  size: "base",
  disabled: false,
  loading: false,
  placeholder: "Placeholder",
  className: "min-w-[20rem]",
  fullWidth: false,
  allowClear: false,
  required: false,
  focusStyle: {
    variant: "none",
    appearance: "none",
    color: "",
  },
  appearance: "dualTone",
  showValidationMessage: true,
  autoFocus: false,
  readOnly: false,
  counter: false,
  variant: "solid",
  counterPlacement: "inline",
  floatingLabel: undefined,
} as Props;

const radiusScale = [
  { key: "none", label: "none", className: "rounded-none" },
  { key: "sm", label: "sm", className: "rounded-sm" },
  { key: "md", label: "md", className: "rounded-md" },
  { key: "lg", label: "lg", className: "rounded-lg" },
  { key: "full", label: "full", className: "rounded-full" },
];
const fontVariants = [
  { key: "inter", label: "Inter", className: "font-sans" },
  { key: "arial", label: "Arial", className: "font-arial" },
  { key: "mono", label: "Mono", className: "font-mono" },
];

/* =============== TextInput =============== */


type ShowcaseTableColumn<T extends string> = {
  key: T;
  label: string;
  align?: "left" | "center";
  width?: string;
};

type ShowcaseTableProps<RowKey extends string, ColKey extends string> = {
  title: string;
  description?: string;
  rowHeaderLabel: string;
  rows: { key: RowKey; label: string }[];
  columns: ShowcaseTableColumn<ColKey>[];
  renderCell: (row: RowKey, column: ColKey) => React.ReactNode;
};

const ShowcaseTable = <RowKey extends string, ColKey extends string>({
  title,
  description,
  rowHeaderLabel,
  rows,
  columns,
  renderCell,
}: ShowcaseTableProps<RowKey, ColKey>) => (
  <section className="space-y-3">
    {/* Header */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold">
              {rowHeaderLabel}
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                className="border border-gray-200 bg-gray-100 px-6 py-3 text-sm font-semibold"
                style={{ textAlign: col.align ?? "center", width: col.width }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              <td className="border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-medium">
                {row.label}
              </td>

              {columns.map((col) => (
                <td
                  key={`${row.key}-${col.key}`}
                  className="border border-gray-200 px-6 py-4 align-middle"
                  style={{ textAlign: col.align ?? "center" }}
                >
                  {renderCell(row.key, col.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

// Overview story args
const args = {
  ...commonArgs,
};

export function InputOverview() {
  const globals = {};
  const theme = getShowcaseTheme(globals);
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="flex flex-col gap-12">
        {/*============== INPUT TYPES ============*/}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Input Types
              </h2>
              <p className="text-sm text-gray-600">
                Pre-configured input variants for common data formats and use
                cases
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Text */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Text
                </span>
                <Input.Text {...args} color={theme.color} className="w-80" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Email
                </span>
                <Input.Email
                  {...args}
                  color={theme.color}
                  className="w-80"
                  placeholder="Enter your email"
                />
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Password
                </span>
                <Input.Password
                  {...args}
                  color={theme.color}
                  className="w-80"
                  placeholder="Enter your Password"
                  maxLevels={0}
                />
              </div>

              {/* URL */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  URL
                </span>
                <Input.Url
                  {...args}
                  color={theme.color}
                  className="w-80"
                  prefix="https://"
                  placeholder="yoursite.com"
                  suffix={{
                    type: "button",
                    cTag: "copy-btn",
                    variant: "ghost",
                    className: "p-0",
                    prefix: {
                      type: "icon",
                      name: "@copy",
                    },
                    action: "copy",
                  }}
                />
              </div>

              {/* Card */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Card
                </span>
                <Input.Card
                  {...args}
                  color={theme.color}
                  className="w-80"
                  placeholder="0000 0000 0000 0000"
                  suffix={{
                    type: "icon",
                    name: "@credit-card",
                  }}
                />
              </div>

              {/* Telephone */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Telephone
                </span>
                <Input.Telephone
                  {...args}
                  color={theme.color}
                  className="w-80"
                  placeholder="Phone number"
                />
              </div>

              {/* Number */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Number
                </span>
                <Input.Number
                  {...args}
                  color={theme.color}
                  className=""
                  placeholder="0"
                  scrubber={false}
                  showControls
                />
              </div>

              {/* OTP */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  OTP
                </span>
                <Input.OTP
                  {...args}
                  color={theme.color}
                  className=""
                  validationRules={[
                    {
                      rule: "max",
                      value: 4,
                    },
                  ]}
                  placeholder="0"
                />
              </div>

              {/* SEARCH */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Search
                </span>
                <Input.Search
                  {...args}
                  color={theme.color}
                  className="w-80"
                  placeholder="Search..."
                  suffix={{
                    type: "icon",
                    name: "@search",
                  }}
                />
              </div>

              {/* Tag */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Tag Input
                </span>
                <Input.Tag
                  {...args}
                  color={theme.color}
                  className="w-80"
                  placeholder="Type & Press Enter"
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============== SIZES ============ */}
        <LazySection>
          <section className="flex flex-col gap-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Size Variants
              </h2>
              <p className="text-sm text-gray-600">
                Available input sizes for different layout densities
              </p>
            </div>
            <div className="flex flex-col gap-4 w-fit">
              {["xs", "sm", "base", "lg", "xl"].map((size) => (
                <div key={size} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {size}
                  </span>

                  <Input.Text
                    color={theme.color}
                    {...args}
                    size={size as any}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ============== RADIUS ============== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Radius Variants
              </h3>
              <p className="text-sm text-gray-600">
                Corner radius presets from the global theme scale
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {radiusScale.map((r) => (
                <div key={r.key} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {r.key}
                  </span>

                  <Input.Text
                    {...args}
                    color={theme.color}
                    className={`w-60 ${r.className}`}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ============== VARIANT MATRIX ============== */}
        <LazySection>
          <ShowcaseTable
            title="Style Variant Matrix"
            description="Visualize input styles across different variant combinations"
            rowHeaderLabel="Variant"
            rows={[
              { key: "solid", label: "Solid" },
              { key: "outline", label: "Outline" },
              { key: "solid-outline", label: "Solid Outline" },
              { key: "underline", label: "Underline" },
              { key: "solid-underline", label: "Solid Underline" },
              { key: "ghost", label: "Ghost" },
            ]}
            columns={[
              { key: "dualTone", label: "Dual Tone" },
              { key: "soft", label: "Soft" },
            ]}
            renderCell={(variant, appearance) => (
              <Input.Text
                {...args}
                variant={variant as any}
                appearance={appearance as any}
                placeholder={`${variant} / ${appearance}`}
                className="w-60"
                color={theme.color}
              />
            )}
          />
        </LazySection>

        {/* ============== FONT OPTIONS ============== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Font Variants
              </h3>

              <p className="text-sm text-gray-600">
                Typography options from the global font scale
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {fontVariants.map((font) => (
                <div key={font.key} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {font.key}
                  </span>

                  <Input.Text
                    {...args}
                    font={font.key as any}
                    color={theme.color}
                    className={`w-60`}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= FULL WIDTH ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Full Width
              </h2>
              <p className="text-sm text-gray-600">
                Expands to fill its container width.
              </p>
            </div>
            <div>
              <Input.Text
                {...args}
                className=""
                fullWidth={true}
                floatingLabel={{ label: "Full Width", float: "on" }}
                placeholder="Takes full container width"
                color={theme.color}
              />
            </div>
          </section>
        </LazySection>

        {/*===============  validation tooltip ===============*/}

        <LazySection>
          <section className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Native Validation Tooltip
              </h3>
              <p className="text-sm text-gray-500">
                Browser-generated validation messages based on input type and
                validation rules.
              </p>
            </div>

            <form className="flex flex-col gap-4">
              <Input.Text
                type="email"
                required
                className="w-75"
                variant="outline"
                placeholder="Enter email"
                floatingLabel={{ label: "Email", float: "on" }}
              />

              <button type="submit" className="px-6 w-30 py-4 cursor-pointer">
                Submit
              </button>
            </form>
          </section>
        </LazySection>

        {/*=============== FLOATING LABEL ===============*/}
        <LazySection>
          <section className="flex flex-col gap-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Floating Label
              </h3>
              <p className="text-sm text-gray-600">
                Label positioning behavior inside the input field
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Input.Text
                color={theme.color}
                {...args}
                variant={"outline"}
                className="w-60"
                floatingLabel={{ label: "Float-on", float: "on" }}
              />
              <Input.Text
                color={theme.color}
                {...args}
                variant={"solid"}
                className="w-60"
                floatingLabel={{ label: "Float-in", float: "in" }}
              />
              <Input.Text
                color={theme.color}
                {...args}
                variant={"solid"}
                className="w-60"
                floatingLabel={{ label: "Float-over", float: "over" }}
              />
            </div>
          </section>
        </LazySection>

        {/* ============== INPUT TIPS ============== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Input Tips
              </h2>
              <p className="text-sm text-gray-600">
                Contextual guidance and additional information displayed
                alongside inputs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Username Tip */}
              <Input.Text
                {...args}
                color={theme.color}
                className="w-80"
                placeholder="Enter username"
                controlStatus={{
                  type: "info-tip",
                  icon: {
                    type: "icon",
                    name: "@info",
                  },
                  className: "p-0",
                  color: "neutral",
                  tooltip: {
                    type: "tooltip",
                    cTag: "Username-Tip",
                    title: {
                      children: "Username Requirements",
                    },
                    description: {
                      children:
                        "Usernames can contain letters, numbers, and underscores only.",
                    },
                    placement: "bottom",
                    trigger: "hover",
                    variant: "solid",
                    appearance: "strong",
                    showArrow: true,
                    prefix: {
                      type: "icon",
                      name: "@info",
                      filled: false,
                    },
                  },
                  as: "button",
                  cTag: "Control-status",
                }}
              />
            </div>
          </section>
        </LazySection>

        {/*============== LABELS ============*/}
        <LazySection>
          <section className="flex flex-col gap-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Labels</h3>
              <p className="text-sm text-gray-600">
                Different label compositions and visibility options
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 w-fit">
              {/* Text only */}
              <Input.Text
                {...args}
                color={theme.color}
                variant={"outline"}
                className="w-60"
                floatingLabel={{ label: "Username", float: "on" }}
                placeholder="Text only"
              />

              {/* Icon + Text */}
              <Input.Text
                {...args}
                color={theme.color}
                variant={"outline"}
                className="w-60"
                floatingLabel={{
                  label: "Username",
                  float: "on",
                  prefix: {
                    type: "icon",
                    name: "@person",
                  },
                }}
                placeholder="Icon + text"
              />

              {/* No Label */}
              <Input.Text
                {...args}
                variant={"outline"}
                className="w-60"
                color={theme.color}
                placeholder="No label"
              />
            </div>
          </section>
        </LazySection>

        {/*============== Adaptive Variants ============ */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Adaptive Variants
              </h2>
              <p className="text-sm text-gray-600">
                Automatic styling adjustments for light/dark mode with
                adaptive toggle
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Light Mode */}
              <div className="flex flex-col gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Light Mode
                </span>
                {["soft", "dualTone"].map((appearance) => (
                  <div
                    key={appearance}
                    className="grid grid-cols-2 gap-4 items-center"
                  >
                    <Input.Text
                      {...args}
                      appearance={appearance as any}
                      color={theme.color}
                      adaptive={false}
                      placeholder={`${appearance} - adaptive: false`}
                      floatingLabel={{
                        label: `${appearance} (adaptive: false)`,
                        float: "on",
                      }}
                      className="w-72"
                    />
                    <Input.Text
                      {...args}
                      appearance={appearance as any}
                      color={theme.color}
                      adaptive={true}
                      placeholder={`${appearance} - adaptive: true`}
                      floatingLabel={{
                        label: `${appearance} (adaptive: true)`,
                        float: "on",
                      }}
                      className="w-72"
                    />
                  </div>
                ))}
              </div>

              {/* Dark Mode */}
              <div className="flex flex-col gap-4 p-4 bg-gray-900 border border-gray-700 rounded-lg dark">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Dark Mode
                </span>
                {["soft", "dualTone"].map((appearance) => (
                  <div
                    key={appearance}
                    className="grid grid-cols-2 gap-4 items-center"
                  >
                    <Input.Text
                      {...args}
                      appearance={appearance as any}
                      color={theme.color}
                      adaptive={false}
                      placeholder={`${appearance} - adaptive: false`}
                      floatingLabel={{
                        label: `${appearance} (adaptive: false)`,
                        float: "on",
                      }}
                      className="w-72 dark"
                    />
                    <Input.Text
                      {...args}
                      appearance={appearance as any}
                      color={theme.color}
                      adaptive={true}
                      placeholder={`${appearance} - adaptive: true`}
                      floatingLabel={{
                        label: `${appearance} (adaptive: true)`,
                        float: "on",
                      }}
                      className="w-72 dark"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* ============== density ============ */}
        <LazySection>
          <ShowcaseTable
            title="Size × Spacing Matrix"
            description="Visualize input appearance across all size and spacing combinations"
            rowHeaderLabel="Size"
            rows={[
              { key: "xs", label: "XS" },
              { key: "sm", label: "SM" },
              { key: "base", label: "base" },
              { key: "lg", label: "LG" },
              { key: "xl", label: "XL" },
            ]}
            columns={[
              { key: "compact", label: "Compact" },
              { key: "standard", label: "Standard" },
              { key: "spacious", label: "Spacious" },
            ]}
            renderCell={(size, spacing) => (
              <Input.Text
                {...args}
                size={size as any}
                spacing={spacing as any}
                placeholder={`${size} / ${spacing}`}
                className="w-60"
                color={theme.color}
              />
            )}
          />
        </LazySection>

        {/*=============== STATES ============*/}
        <LazySection>
          <section className="space-y-8">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">
                States
              </h3>
              <p className="text-sm text-neutral-600">
                Visual and interaction states of the input component
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="mb-2 font-medium text-neutral-700">Default</p>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-70"
                  placeholder="Default state"
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Hover</p>
                <Input.Text
                  {...args}
                  hovered={true}
                  color={theme.color}
                  placeholder="Hover State"
                  className="w-70 bg-neutral-200"
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Focus</p>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-70 border-brand-500 focus-within:ring-1 focus-within:ring-brand-500"
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Select</p>
                <Input.Text
                  {...args}
                  selected
                  focused={false}
                  className="w-70 border-neutral-400"
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Disabled</p>
                <Input.Text
                  {...args}
                  color={theme.color}
                  disabled
                  className="w-70"
                  placeholder="Disabled state"
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Loading</p>
                <Input.Text
                  {...args}
                  color={theme.color}
                  loading
                  className="w-70"
                  placeholder="Loading state"
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============== invalid ============ */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Invalid
              </h2>
              <p className="text-sm text-gray-600">
                invalid prop to indicate that the number input is invalid.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Error Message
              </span>

              <Input.Text
                {...args}
                required
                invalid
                placeholder="Placeholder"
                className="w-72"
                inlineMessage={{
                  description: "This field is required",
                  state: "error",
                }}
              />
            </div>
          </section>
        </LazySection>

        {/*=============== REQUIRED vs OPTIONAL ============*/}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Required & Optional
              </h3>
              <p className="text-sm text-gray-600">
                Demonstrates required validation versus optional inputs
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Required */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Required
                </span>

                <Input.Email
                  {...args}
                  color={theme.color}
                  required
                  className="w-72"
                  placeholder="Enter email"
                  floatingLabel={{
                    type: "label-float",
                    label: "Email",
                    float: "in",
                  }}
                />
              </div>

              {/* Optional */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Optional
                </span>

                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Enter email"
                  floatingLabel={{
                    type: "label-float",
                    label: "Email",
                    float: "in",
                  }}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============== APPEARANCE ============*/}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Appearance
              </h3>
              <p className="text-sm text-gray-600">
                Controls the visual emphasis of the input surface
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Soft */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Soft
                </span>

                <Input.Text
                  {...args}
                  color={theme.color}
                  appearance="soft"
                  className="w-72"
                  placeholder="Soft appearance"
                  floatingLabel={{
                    type: "label-float",
                    label: "Soft",
                    float: "in",
                  }}
                />
              </div>

              {/* DualTone */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Dual Tone
                </span>

                <Input.Text
                  {...args}
                  color={theme.color}
                  appearance="dualTone"
                  className="w-72"
                  placeholder="Dual tone appearance"
                  floatingLabel={{
                    type: "label-float",
                    label: "Dual Tone",
                    float: "in",
                  }}
                />
              </div>
            </div>
          </section>
        </LazySection>
        {/* ============== COLORS ============== */}
        <LazySection>
          <section className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Color Palette
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All semantic, base, and accent color options available for
                inputs.
              </p>
            </div>

            <div className="space-y-8">
              {/* Semantic Roles */}
              <div className="space-y-4">
                <h4 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                  Semantic Roles
                </h4>

                <div className="flex flex-wrap gap-6">
                  {[
                    "brand",
                    "neutral",
                    "success",
                    "warning",
                    "danger",
                    "info",
                  ].map((color) => (
                    <div
                      key={color}
                      className="flex flex-col items-center gap-2"
                    >
                      <Input.Text
                        {...args}
                        color={color as any}
                        variant="solid"
                        appearance="soft"
                        placeholder={color}
                        className="w-60"
                      />

                      <span className="text-xs capitalize text-gray-500 dark:text-gray-400">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent Colors */}
              <div className="space-y-4">
                <h4 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                  Accent Colors
                </h4>

                <div className="flex flex-wrap gap-6">
                  {getStorybookAccentColorKeys().map((color: string) => (
                    <div
                      key={color}
                      className="flex flex-col items-center gap-2"
                    >
                      <Input.Text
                        {...args}
                        color={color as any}
                        variant="solid"
                        appearance="soft"
                        placeholder={color}
                        className="w-60"
                      />

                      <span className="text-xs capitalize text-gray-500 dark:text-gray-400">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/*============== CORE PROPS ============*/}
        <LazySection>
          <section className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Core Props
              </h3>
              <p className="text-sm text-gray-500">
                Fundamental behavioral properties of the Input component.
              </p>
            </div>

            <div className="flex flex-col gap-10 max-w-xl">
              {/* Controlled */}
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Controlled Value
                  </p>
                  <p className="text-xs text-gray-500">
                    Input with predefined value.
                  </p>
                </div>

                <Input.Text
                  {...args}
                  value="Pre-filled value"
                  floatingLabel={{ label: "Controlled", float: "on" }}
                  className="w-72"
                  color={theme.color}
                />
              </div>

              {/* ReadOnly */}
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Read Only
                  </p>
                  <p className="text-xs text-gray-500">
                    Value cannot be modified.
                  </p>
                </div>

                <Input.Text
                  {...args}
                  value="Read-only content"
                  readOnly
                  floatingLabel={{ label: "Read Only", float: "on" }}
                  className="w-72"
                  color={theme.color}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============== Prefix & Suffix ============*/}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Prefix & Suffix
              </h3>
              <p className="text-sm text-gray-600">
                Slot types supported inside input fields
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* TEXT */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Text
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Text prefix"
                  prefix="https://"
                />
              </div>

              {/* ICON */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Icon
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Icon prefix"
                  prefix={{
                    type: "icon",
                    name: "@search",
                  }}
                />
              </div>

              {/* FLAG */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Flag
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Flag prefix"
                  prefix={{
                    type: "flag",
                    code: "IN",
                    shape: "circle",
                  }}
                />
              </div>

              {/* EMOJI */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Emoji
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Emoji prefix"
                  suffix={{
                    type: "emoji",
                    name: "link",
                  }}
                />
              </div>

              {/* LOGO */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Logo
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Logo prefix"
                  prefix={{
                    type: "logo",
                    name: "@google",
                  }}
                />
              </div>

              {/* COLOUR LOGO */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Colour Logo
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Logo prefix"
                  prefix={{
                    type: "color-logo",
                    name: "@chrome",
                  }}
                />
              </div>

              {/* BUTTON */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Button
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Button suffix"
                  suffix={{
                    ctag: "clear-btn",
                    type: "button",
                    label: "search",
                    size: "xs",
                    variant: "solid",
                    appearance: "strong",
                  }}
                />
              </div>

              {/* FILE TYPE */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  File Type
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="File Type Suffix"
                  suffix={{
                    type: "file-type",
                    extension: "@placeholder",
                  }}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ----------------- Input with Multiple Affixes ----------------- */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Input with Multiple Affixes
              </h2>
              <p className="text-sm text-gray-600">
                Inputs with multiple prefix and suffix elements for common
                search and action patterns
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <Input.Text
                  {...args}
                  color={theme.color}
                  fullWidth
                  placeholder="Search products..."
                  prefix={[{ type: "logo", name: "@google" }]}
                  suffix={[
                    {
                      type: "button",
                      action: "clear",
                      className: "pe-2 ps-0 pt-0 pb-0",
                      variant: "ghost",
                      appearance: "dualTone",
                      hover: {
                        variant: "solid",
                        appearance: "dualTone",
                      },
                      prefix: { type: "icon", name: "@close" },
                    },
                    {
                      type: "button",
                      className: "pe-2 ps-0 pt-0 pb-0",
                      variant: "ghost",
                      appearance: "dualTone",
                      hover: {
                        variant: "solid",
                        appearance: "dualTone",
                      },
                      prefix: { type: "icon", name: "@mic" },
                    },
                    {
                      type: "button",
                      className: "pe-2 ps-0 pt-0 pb-0",
                      variant: "ghost",
                      appearance: "dualTone",
                      hover: {
                        variant: "solid",
                        appearance: "dualTone",
                      },
                      prefix: { type: "icon", name: "@image-search" },
                    },
                    {
                      type: "button",
                      className: "pe-2 ps-0 pt-0 pb-0",
                      variant: "ghost",
                      appearance: "dualTone",
                      hover: {
                        variant: "solid",
                        appearance: "dualTone",
                      },
                      prefix: { type: "icon", name: "@search" },
                    },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <Input.Text
                  {...args}
                  color={theme.color}
                  fullWidth={true}
                  prefix={{
                    type: "button",
                    action: "clear",
                    className: "p-0",
                    variant: "ghost",
                    appearance: "dualTone",
                    hover: {
                      variant: "solid",
                      appearance: "dualTone",
                    },
                    prefix: { type: "icon", name: "@plus" },
                  }}
                  suffix={[
                    {
                      type: "button",
                      action: "clear",
                      className: "pe-2 ps-0 pt-0 pb-0",
                      variant: "ghost",
                      appearance: "dualTone",
                      hover: {
                        variant: "solid",
                        appearance: "dualTone",
                      },
                      prefix: { type: "icon", name: "@close" },
                    },
                    {
                      type: "button",
                      action: "copy",
                      className: "pe-2 ps-0 pt-0 pb-0",
                      variant: "ghost",
                      appearance: "dualTone",
                      hover: {
                        variant: "solid",
                        appearance: "dualTone",
                      },
                      prefix: { type: "icon", name: "@copy" },
                    },
                    {
                      type: "button",
                      className: "pe-2 ps-0 pt-0 pb-0",
                      variant: "ghost",
                      appearance: "dualTone",
                      hover: {
                        variant: "solid",
                        appearance: "dualTone",
                      },
                      prefix: { type: "icon", name: "@share" },
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============== Addons ============*/}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Addon Variants
              </h3>
              <p className="text-sm text-gray-600">
                Addon slots rendered outside the input field for grouped
                inputs
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* TEXT */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Text
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Text addon"
                  prefixAddon="https://"
                />
              </div>

              {/* ICON */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Icon
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Icon addon"
                  prefixAddon={{
                    type: "icon",
                    name: "@search",
                  }}
                />
              </div>

              {/* FLAG */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Flag
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Flag addon"
                  prefixAddon={{
                    type: "flag",
                    code: "IN",
                    shape: "circle",
                  }}
                />
              </div>

              {/* EMOJI */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Emoji
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Emoji addon"
                  suffixAddon={{
                    type: "emoji",
                    name: "link",
                  }}
                />
              </div>

              {/* LOGO */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Logo
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Logo addon"
                  prefixAddon={{
                    type: "logo",
                    name: "@google",
                  }}
                />
              </div>

              {/* COLOUR LOGO */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Colour Logo
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Logo addon"
                  prefixAddon={{
                    type: "color-logo",
                    name: "@chrome",
                  }}
                />
              </div>

              {/* FILE TYPE */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  File Type
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="File Type addon"
                  prefixAddon={{
                    type: "file-type",
                    extension: "@placeholder",
                  }}
                />
              </div>

              {/* BUTTON */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Button
                </span>
                <Input.Text
                  {...args}
                  color={theme.color}
                  className="w-72"
                  placeholder="Button addon"
                  suffixAddon={{
                    type: "button",
                    label: "Search",
                    size: "xs",
                    prefix: {
                      type: "icon",
                      name: "@search",
                    },
                  }}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= CHILDREN FLOW ================= */}
        <LazySection>
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Custom Styling
              </h2>
              <p className="text-sm text-gray-600">
                One-off style overrides using className and inline styles
              </p>
            </div>

            <div className="flex flex-col-2 gap-8 border rounded-lg px-8 py-12 bg-gray-100">
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Shadow
                </span>
                <Input.Text
                  {...args}
                  className="w-72 shadow-md"
                  placeholder="Shadow input"
                />
              </div>

              {/* Focus Ring Override */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Focus Ring
                </span>
                <Input.Text
                  {...args}
                  variant="outline"
                  className="w-72 caret-purple-500 focus-within:ring-2 focus-within:ring-purple-500"
                  placeholder="Custom focus"
                />
              </div>
            </div>
          </section>
        </LazySection>
      </div>
    </ShowcaseShell>
  );
}
