// Showcase ported from origin/select:src/components/Select/stories/Select.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React, { useState } from "react";
import { Select } from "@inventive-ui/components/Select";
import type { SelectProps } from "@inventive-ui/components/Select";
import { LazySection } from "../storybook";
import { getColor } from "../story-helpers/Select/input.story-utils";

const commonArgs: SelectProps = {
  size: "base",
  disabled: false,
  loading: false,
  placeholder: "Select option",
  className: "min-w-[20rem]",
  fullWidth: false,
  state: undefined,
  required: false,
  appearance: "dualTone",
  autoFocus: false,
  readOnly: false,
  variant: "solid",

  options: [
    {
      label: "React",
      value: "react",
    },
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "Angular",
      value: "angular",
    },
  ],
};

const radiusScale = [
  { key: "none", label: "none", className: "rounded-none" },
  { key: "sm", label: "sm", className: "rounded-sm" },
  { key: "md", label: "md", className: "rounded-md" },
  { key: "lg", label: "lg", className: "rounded-lg" },
  { key: "full", label: "full", className: "rounded-full" },
];

// Overview story args
const args = commonArgs;

export default function SelectShowcase() {
  const globals = {};
  const ControlledSelectDemo = () => {
    const [value, setValue] = useState("react");

    return (
      <div className="flex flex-col gap-3">
        <Select
          options={[
            { label: "React", value: "react" },
            { label: "Vue", value: "vue" },
            { label: "Angular", value: "angular" },
            { label: "Svelte", value: "svelte" },
          ]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-80"
        />

        <p className="text-sm text-gray-600">
          Selected value: <strong>{value}</strong>
        </p>
      </div>
    );
  };

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
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
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
                  style={{
                    textAlign: col.align ?? "center",
                    width: col.width,
                  }}
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

  return (
    <div className="flex flex-col gap-15 px-6">
      {/* ===== SIZE ===== */}
      <LazySection>
        <section>
          <h2 className="text-2xl font-semibold mb-1">Size Variants</h2>

          <div className="flex flex-col gap-4 w-fit">
            {["xs", "sm", "base", "lg", "xl"].map((size) => (
              <Select
                key={size}
                {...args}
                color={getColor(args, globals)}
                size={size as any}
              />
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== VARIANT STYLES ===== */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Variant Styles
            </h2>

            <p className="text-sm text-gray-600">
              Available visual variants for the Select component
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "solid",
              "outline",
              "underline",
              "solid-outline",
              "solid-underline",
              "ghost",
            ].map((variant) => (
              <div key={variant} className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {variant}
                </span>

                <Select
                  {...args}
                  className="min-w-[18rem]"
                  color={getColor(args, globals)}
                  variant={variant as any}
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== RADIUS VARIANTS ===== */}
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

                <Select
                  {...args}
                  color={getColor(args, globals)}
                  className={`w-60 ${r.className}`}
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== FONT VARIANTS ===== */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Font Variants
            </h2>

            <p className="text-sm text-gray-600">
              Available typography styles for the Select component
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["sans", "serif", "mono"].map((font) => (
              <div key={font} className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {font}
                </span>

                <Select
                  {...args}
                  font={font as any}
                  color={getColor(args, globals)}
                  className="min-w-[15rem]"
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== FULL WIDTH ===== */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Full Width</h2>

            <p className="text-sm text-gray-600">
              Expands the Select component to fill the available horizontal
              space
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <Select {...args} fullWidth color={getColor(args, globals)} />
          </div>
        </section>
      </LazySection>

      {/* ============== SIZE × SPACING MATRIX ============== */}
      <LazySection>
        <ShowcaseTable
          title="Size × Spacing Matrix"
          description="Visualize Select appearance across all size and spacing combinations"
          rowHeaderLabel="Size"
          rows={[
            { key: "xs", label: "XS" },
            { key: "sm", label: "SM" },
            { key: "base", label: "Base" },
            { key: "lg", label: "LG" },
            { key: "xl", label: "XL" },
          ]}
          columns={[
            { key: "compact", label: "Compact" },
            { key: "standard", label: "Standard" },
            { key: "spacious", label: "Spacious" },
          ]}
          renderCell={(size, spacing) => (
            <Select
              {...args}
              size={size as any}
              spacing={spacing as any}
              className="w-60"
              color={getColor(args, globals)}
            />
          )}
        />
      </LazySection>

      {/* ===== CONTROLLED ===== */}
      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Controlled Select
            </h2>

            <p className="text-sm text-gray-600">
              Manage the selected value externally using React state.
            </p>
          </div>

          <ControlledSelectDemo />
        </section>
      </LazySection>

      {/* ===== REQUIRED & OPTIONAL (SELECT) ===== */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Required vs Optional
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              Demonstrates required and optional states for Select component
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* REQUIRED */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Required
              </span>

              <Select
                {...args}
                color={getColor(args, globals)}
                required
                focused
                inlineMessage={{
                  type: "inline-message",
                  id: "select-required",
                  description: "This field is required",
                  state: "error",
                  showIcon: true,
                }}
              />
            </div>

            {/* OPTIONAL */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Optional
              </span>

              <Select
                {...args}
                required={false}
                color={getColor(args, globals)}
                inlineMessage={{
                  type: "inline-message",
                  id: "select-optional",
                  description: "This field is optional",
                  state: "help",
                  showIcon: false,
                }}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= STATES ================= */}
      <LazySection>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">States</h2>
            <p className="text-sm text-gray-600">
              Different validation and interaction states
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Disabled
              </label>
              <Select {...args} disabled color={getColor(args, globals)} />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Loading
              </label>
              <Select {...args} loading color={getColor(args, globals)} />
            </div>

            <div>
              <p className="mb-2 font-medium text-neutral-700">Hover</p>
              <Select {...args} hovered color={getColor(args, globals)} />
            </div>

            <div>
              <p className="mb-2 font-medium text-neutral-700">Focus</p>
              <Select {...args} focused color={getColor(args, globals)} />
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
