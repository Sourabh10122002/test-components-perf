// Showcase ported from origin/input:src/components/Input/stories/Otp.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React from "react";
import { Input } from "@inventive-ui/components/Input";
import type { InputProps as Props } from "@inventive-ui/components/Input";
import { LazySection, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../../storybook";
import { getColor } from "./input.story-utils";

const commonArgs = {
  size: "base",
  disabled: false,
  loading: false,
  placeholder: "0",
  allowClear: false,
  required: false,
  readOnly: false,
  variant: "solid",
  appearance: "dualTone",
  className: "",
  showValidationMessage: true,
  maskMode: "never",
  otpType: "numeric",
  attached: false,
} as Props;

const radiusScale = [
  { key: "none", label: "none", className: "rounded-none" },
  { key: "sm", label: "sm", className: "rounded-sm" },
  { key: "md", label: "md", className: "rounded-md" },
  { key: "lg", label: "lg", className: "rounded-lg" },
  { key: "full", label: "full", className: "rounded-full" },
];
const variants = [
  "solid",
  "outline",
  "underline",
  "solid-outline",
  "solid-underline",
  "ghost",
];


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
const appearanceRows = ["soft", "dualTone"].map((a) => ({
  key: a,
  label: a,
}));

const variantColumns = variants.map((v) => ({
  key: v,
  label: v,
  align: "center" as const,
}));

function ControlledOTPExample(args: any) {
  const [otp, setOtp] = React.useState("");

  return (
    <div className="space-y-4">
      <Input.OTP {...args} value={otp} setLocalValue={setOtp} />

      <div className="text-sm text-neutral-600">
        Current Value: {otp || "Empty"}
      </div>
    </div>
  );
}

function StateManagementOTPExample(args: any) {
  const [otp, setOtp] = React.useState("");

  return (
    <div className="space-y-4">
      <Input.OTP {...args} value={otp} setLocalValue={setOtp} />

      <div className="flex gap-4">
        <button
          type="button"
          className="px-3 py-2 border border-gray-500 bg-gray-100 rounded-md cursor-pointer"
          onClick={() => setOtp("123456")}
        >
          Set Value
        </button>

        <button
          type="button"
          className="px-3 py-2 border border-gray-500 bg-gray-100 rounded-md cursor-pointer"
          onClick={() => setOtp("")}
        >
          Clear Value
        </button>
      </div>
    </div>
  );
}


// Overview story args
const args = {
  ...commonArgs,
  placeholder: "0",
};

export function OtpOverview() {
  const globals = {};
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="flex flex-col gap-16">
        {/*============= Basic ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Basic</h2>
              <p className="text-sm text-gray-600">
                Basic OTP input configurations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Default
                </span>

                <Input.OTP {...args} color={getColor(args, globals)} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Attached
                </span>

                <Input.OTP
                  {...args}
                  variant="outline"
                  attached
                  color={getColor(args, globals)}
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
                Available sizes for different layout densities
              </p>
            </div>
            <div className="flex flex-col gap-4 w-fit">
              {["xs", "sm", "base", "lg", "xl"].map((size) => (
                <div key={size} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {size}
                  </span>

                  <Input.OTP key={size} {...args} size={size as any} />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ============== VARIANTS ============== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Style Variants
              </h2>
              <p className="text-sm text-gray-600">
                Different visual styles available for OTP inputs
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {variants.map((v) => (
                <div key={v} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {v}
                  </span>

                  <Input.OTP
                    {...args}
                    variant={v as any}
                    color={getColor(args, globals)}
                    placeholder="0"
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
              <h2 className="text-2xl font-semibold text-gray-900">
                Radius Variants
              </h2>
              <p className="text-sm text-gray-600">
                Different corner radius styles
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {radiusScale.map((r) => (
                <div key={r.key} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {r.label}
                  </span>

                  <Input.OTP
                    {...args}
                    rounded="none"
                    color={getColor(args, globals)}
                    className={r.className}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/*============= OTP Interaction ========== */}
        <LazySection>
          <ShowcaseTable
            title="OTP Appearance × Variant"
            description="Combinations of appearance and variant in focus interaction"
            rowHeaderLabel="Appearance"
            rows={appearanceRows}
            columns={variantColumns}
            renderCell={(appearance, variant) => (
              <Input.OTP
                {...args}
                color={getColor(args, globals)}
                variant="solid"
                appearance={appearance as any}
                focusStyle={{
                  variant: variant as any,
                  appearance: appearance as any,
                  color: "",
                }}
              />
            )}
          />
        </LazySection>

        {/*============= size and spacing varients ========== */}
        <LazySection>
          <ShowcaseTable
            title="Size × Spacing Matrix"
            description="Visualize OTP appearance across all size and spacing combinations"
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
              <Input.OTP
                {...args}
                size={size as any}
                spacing={spacing as any}
                color={getColor(args, globals)}
              />
            )}
          />
        </LazySection>

        {/*============= autoFocus ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Auto Focus
              </h2>
              <p className="text-sm text-gray-600">
                Automatically focuses the first OTP field on mount.
              </p>
            </div>

            <Input.OTP {...args} color={getColor(args, globals)} autoFocus />
          </section>
        </LazySection>

        {/*============= Placeholder ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Placeholder
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              Display placeholder characters for empty OTP fields.
            </p>

            <Input.OTP
              {...args}
              placeholder="🥳"
              color={getColor(args, globals)}
            />
          </section>
        </LazySection>

        {/*============= controlled ========== */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Controlled</h3>
              <p className="text-sm text-neutral-600">
                Control the OTP value externally using state.
              </p>
            </div>

            <ControlledOTPExample {...args} color={getColor(args, globals)} />
          </section>
        </LazySection>

        {/*============= stateManagement ========== */}
        <LazySection>
          <section className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">State Management</h3>
              <p className="text-sm text-neutral-600">
                Set and clear OTP values programmatically.
              </p>
            </div>

            <StateManagementOTPExample
              {...args}
              color={getColor(args, globals)}
            />
          </section>
        </LazySection>

        {/*============= maxLength ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Max Length Handling
              </h2>
              <p className="text-sm text-gray-600">
                Compare OTP inputs with different maximum lengths.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-2 font-medium text-neutral-700">4 Digits</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  validationRules={[{ rule: "max", value: 4 }]}
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">6 Digits</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  validationRules={[{ rule: "max", value: 6 }]}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============= maskMode ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Mask Mode
              </h2>
              <p className="text-sm text-gray-600">
                Control how OTP values are displayed while typing and after
                entry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-2 font-medium text-neutral-700">Never</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  value="1234"
                  maskMode="never"
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Always</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  value="1234"
                  maskMode="always"
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">On Blur</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  value="1234"
                  maskMode="onBlur"
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============= paste handling ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Paste Handling
              </h2>
              <p className="text-sm text-gray-600">
                Paste a complete OTP value and the component automatically
                distributes characters across all fields.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-500">
                Click the button, then paste into the OTP field.
              </span>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText("1234")}
                className="px-3 py-2 border border-gray-500 bg-gray-100 rounded-md"
              >
                Copy OTP (1234)
              </button>
            </div>

            <Input.OTP
              {...args}
              placeholder="0"
              color={getColor(args, globals)}
            />
          </section>
        </LazySection>

        {/*============= Separator Indexes ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Separator Indexes</h3>
              <p className="text-sm text-neutral-600">
                Add separators at specific positions between OTP fields.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium">Single Separator</p>

                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  separator="/"
                  separatorIndexes={[3]}
                  validationRules={[
                    {
                      rule: "max",
                      value: 6,
                      description: "6 digits",
                    },
                  ]}
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">
                  Multiple Separators
                </p>

                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  separator="-"
                  separatorIndexes={[2, 4]}
                  validationRules={[
                    {
                      rule: "max",
                      value: 6,
                      description: "6 digits",
                    },
                  ]}
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">
                  Between Every Field
                </p>

                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  separator="/"
                  separatorIndexes={[1, 2, 3, 4, 5]}
                  validationRules={[
                    {
                      rule: "max",
                      value: 6,
                      description: "6 digits",
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/*============= otpTypes ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                OTP Types
              </h2>
              <p className="text-sm text-gray-600">
                Restrict OTP input to numeric, alphabetic, or alphanumeric
                characters.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-2 font-medium text-neutral-700">Numeric</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  otpType="numeric"
                  placeholder="0"
                />
                <p className="mt-2 text-xs text-neutral-500">Accepts: 0-9</p>
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">
                  Alphabetic
                </p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  otpType="alphabetic"
                  placeholder="A"
                />
                <p className="mt-2 text-xs text-neutral-500">
                  Accepts: A-Z, a-z
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">
                  Alphanumeric
                </p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  otpType="alphanumeric"
                  placeholder="A1"
                />
                <p className="mt-2 text-xs text-neutral-500">
                  Accepts: A-Z, a-z, 0-9
                </p>
              </div>
            </div>
          </section>
        </LazySection>

        {/*============= Invalid state ========== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Invalid
              </h2>
              <p className="text-sm text-gray-600">
                Invalid state for OTP input.
              </p>
            </div>

            <Input.OTP {...args} color={getColor(args, globals)} invalid />
          </section>

          {/*============= readOnly ========== */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Read Only
              </h2>
              <p className="text-sm text-gray-600">
                OTP input in read-only mode.
              </p>
            </div>

            <Input.OTP
              {...args}
              color={getColor(args, globals)}
              readOnly
              value="1234"
            />
          </section>
        </LazySection>

        {/*============= States ========== */}
        <LazySection>
          <section className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">
                States
              </h3>
              <p className="text-sm text-neutral-600">
                Visual and interaction states of the OTP component
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="mb-2 font-medium text-neutral-700">Default</p>
                <Input.OTP {...args} color={getColor(args, globals)} />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Hover</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  hovered
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Disabled</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  disabled
                />
              </div>

              <div>
                <p className="mb-2 font-medium text-neutral-700">Loading</p>
                <Input.OTP
                  {...args}
                  color={getColor(args, globals)}
                  loading
                />
              </div>
            </div>
          </section>
        </LazySection>
      </div>
    </ShowcaseShell>
  );
}
