// Showcase ported from origin/dropdown:src/components/Dropdown/stories/Dropdown.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React from "react";
import { Dropdown } from "@inventive-ui/components/Dropdown";
import type { DropdownProps } from "@inventive-ui/components/Dropdown";
import { LazySection } from "../storybook";
import { getColor } from "../story-helpers/Dropdown/input.story-utils";

/* ============ Common Args ============== */

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
  variant: "solid",
  floatingLabel: undefined,
} as DropdownProps;

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
const fontVariants = [
  { key: "inter", label: "Inter", className: "font-sans" },
  { key: "arial", label: "Arial", className: "font-arial" },
  { key: "mono", label: "Mono", className: "font-mono" },
];

// Overview story args
const args = {
  ...commonArgs,
  className: "w-75",
  listbox: {
    type: "listbox",
    selectStyle: {
      variant: "solid",
      appearance: "dualTone",
    },
    hoverStyle: {
      variant: "solid",
      appearance: "dualTone",
    },
    indicator: {
      type: "icon",
      name: "@check",
    },
    indicatorPosition: "end",
    items: [
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
  },
} as DropdownProps;

export default function DropdownShowcase() {
  const globals = {};
  const ControlledSingleDropdown = () => {
    const [value, setValue] = React.useState("react");

    return (
      <div className="space-y-3">
        <Dropdown
          {...args}
          value={value}
          placeholder="Select framework"
          color={getColor(args, globals)}
          listbox={{
            type: "listbox",
            selectStyle: { variant: "solid", appearance: "dualTone" },
            hoverStyle: { variant: "solid", appearance: "dualTone" },
            indicator: { type: "icon", name: "@check" },
            indicatorPosition: "end",
            value,
            onChange: (val: string) => {
              setValue(val);
            },
            items: [
              { label: "React", value: "react" },
              { label: "Vue", value: "vue" },
              { label: "Angular", value: "angular" },
            ],
          }}
        />

        <p className="text-sm text-gray-500">Selected: {value}</p>
      </div>
    );
  };

  const ControlledMultipleDropdown = () => {
    const [value, setValue] = React.useState(["react", "vue"]);

    return (
      <div className="space-y-3">
        <Dropdown
          {...args}
          value={value}
          placeholder="Select frameworks"
          color={getColor(args, globals)}
          listbox={{
            type: "listbox",
            multiple: true,
            selectStyle: { variant: "solid", appearance: "dualTone" },
            hoverStyle: { variant: "solid", appearance: "dualTone" },
            indicator: { type: "icon", name: "@check" },
            indicatorPosition: "end",
            value,
            onChange: (val: string[]) => {
              setValue(val);
            },
            items: [
              { label: "React", value: "react" },
              { label: "Vue", value: "vue" },
              { label: "Angular", value: "angular" },
            ],
          }}
        />

        <p className="text-sm text-gray-500">Selected: {value.join(", ")}</p>
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

  const appearanceRows = ["soft", "dualTone"].map((a) => ({
    key: a,
    label: a,
  }));
  const variantColumns = variants.map((v) => ({
    key: v,
    label: v,
    align: "center" as const,
  }));

  return (
    <div className="flex flex-col gap-16">
      {/*============== LABELS ============*/}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Labels</h3>
            <p className="text-sm text-gray-600">
              Different label compositions and visibility options
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 w-fit">
            <Dropdown
              {...args}
              variant="outline"
              color={getColor(args, globals)}
              placeholder="Default"
            />
            {/* Text only */}
            <Dropdown
              {...args}
              color={getColor(args, globals)}
              variant="outline"
              floatingLabel={{
                type: "label-float",
                label: "Label",
                float: "on",
              }}
              placeholder="Label only"
            />

            {/* Icon + Text */}
            <Dropdown
              {...args}
              color={getColor(args, globals)}
              variant="outline"
              floatingLabel={{
                type: "label-float",
                label: "Icon + Label",
                float: "on",
                prefix: { type: "icon", name: "@placeholder" },
              }}
              placeholder="Icon + Label"
            />
          </div>
        </section>
      </LazySection>

      {/* ================= MULTI SELECT ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Multi Select
            </h2>

            <p className="text-sm text-gray-600">
              Select multiple values from the dropdown list
            </p>
          </div>

          <div className="grid gap-8">
            {/* Default Multi Select */}
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Default Multi Select
              </span>

              <Dropdown
                {...args}
                placeholder="Select frameworks"
                color={getColor(args, globals)}
                listbox={{
                  type: "listbox",
                  multiple: true,
                  selectStyle: { variant: "solid", appearance: "dualTone" },
                  hoverStyle: { variant: "solid", appearance: "dualTone" },
                  indicator: { type: "icon", name: "@check" },
                  indicatorPosition: "end",
                  items: [
                    { label: "React", value: "react" },
                    { label: "Vue", value: "vue" },
                    { label: "Angular", value: "angular" },
                    { label: "Svelte", value: "svelte" },
                  ],
                }}
              />
            </div>

            {/* Preselected Values */}
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Preselected Values
              </span>

              <Dropdown
                {...args}
                value={["react", "vue"]}
                placeholder="Select frameworks"
                color={getColor(args, globals)}
                listbox={{
                  type: "listbox",
                  multiple: true,
                  selectStyle: { variant: "solid", appearance: "dualTone" },
                  hoverStyle: { variant: "solid", appearance: "dualTone" },
                  indicator: { type: "icon", name: "@check" },
                  indicatorPosition: "end",
                  items: [
                    { label: "React", value: "react" },
                    { label: "Vue", value: "vue" },
                    { label: "Angular", value: "angular" },
                    { label: "Svelte", value: "svelte" },
                  ],
                }}
              />
            </div>

            {/* Validation */}
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Multi Select Validation
              </span>

              <Dropdown
                {...args}
                required
                showValidationMessage
                placeholder="Select at least one framework"
                color={getColor(args, globals)}
                validationRules={[
                  {
                    rule: "required",
                    description: "Please select at least one option",
                    state: "error",
                  },
                  {
                    rule: "max",
                    value: 3,
                    description: "Maximum 3 selections allowed",
                    state: "error",
                  },
                ]}
                listbox={{
                  type: "listbox",
                  multiple: true,
                  selectStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hoverStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  indicatorPosition: "end",
                  items: [
                    { label: "React", value: "react" },
                    { label: "Vue", value: "vue" },
                    { label: "Angular", value: "angular" },
                    { label: "Svelte", value: "svelte" },
                    { label: "Solid", value: "solid" },
                  ],
                }}
              />
              <span className="text-xs text-gray-500">
                Select up to 3 frameworks
              </span>
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= ITEM DESCRIPTION ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Item Description
            </h2>

            <p className="text-sm text-gray-600">
              Each dropdown item can include an optional helper description
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Dropdown
              {...commonArgs}
              color={getColor(args, globals)}
              placeholder="With descriptions"
              listbox={{
                type: "listbox",
                selectStyle: { variant: "solid", appearance: "dualTone" },
                hoverStyle: { variant: "solid", appearance: "dualTone" },
                indicator: { type: "icon", name: "@check" },
                indicatorPosition: "end",
                items: [
                  {
                    label: "React",
                    value: "react",
                    helperText: "A JavaScript library for building UI",
                  },
                  {
                    label: "Vue",
                    value: "vue",
                    helperText: "Progressive framework for web apps",
                  },
                  {
                    label: "Angular",
                    value: "angular",
                    helperText: "Full-featured enterprise framework",
                  },
                ],
              }}
            />
          </div>
        </section>
      </LazySection>

      {/* ================= ITEMS WITH PREFIX (AVATAR) ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Avatar Select
            </h2>

            <p className="text-sm text-gray-600">
              Dropdown items can include avatar prefixes for improved visual
              identification and richer selection experiences
            </p>
          </div>

          <div className="grid gap-6">
            <Dropdown
              {...args}
              placeholder="Select a developer"
              color={getColor(args, globals)}
              listbox={{
                type: "listbox",
                selectStyle: { variant: "solid", appearance: "dualTone" },
                hoverStyle: { variant: "solid", appearance: "dualTone" },
                indicator: { type: "icon", name: "@check" },
                indicatorPosition: "end",

                items: [
                  {
                    label: "Kenneth Johnson",
                    value: "Kenneth",
                    helperText: "Frontend Developer • React & TypeScript",
                    prefix: {
                      type: "avatar",
                      shape: "square",
                      img: {
                        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
                        alt: "Kenneth Johnson",
                      },
                    },
                  },

                  {
                    label: "Emma Wilson",
                    value: "emma",
                    helperText: "UI/UX Designer • Figma Specialist",
                    prefix: {
                      type: "avatar",
                      shape: "square",
                      img: {
                        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
                        alt: "Emma Wilson",
                      },
                    },
                  },

                  {
                    label: "David Chen",
                    value: "david",
                    helperText: "Backend Engineer • Node.js & GraphQL",
                    prefix: {
                      type: "avatar",
                      shape: "square",
                      img: {
                        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
                        alt: "David Chen",
                      },
                    },
                  },
                ],
              }}
              className="w-80"
            />
          </div>
        </section>
      </LazySection>

      {/* ================= GROUPED OPTIONS ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Grouped Options
            </h2>

            <p className="text-sm text-gray-600">
              Organize dropdown items using labels and dividers
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Default Grouped */}
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Framework Categories
              </span>

              <Dropdown
                {...args}
                placeholder="Select framework"
                color={getColor(args, globals)}
                listbox={{
                  type: "listbox",
                  selectStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hoverStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  indicatorPosition: "end",
                  items: [
                    { type: "label", label: "Frontend" },
                    { label: "React", value: "react" },
                    { label: "Vue", value: "vue" },
                    { label: "Svelte", value: "svelte" },

                    { type: "divider" },
                    { type: "label", label: "Backend" },
                    { label: "Node.js", value: "node" },
                    { label: "Laravel", value: "laravel" },
                    { label: "Express", value: "express" },
                  ],
                }}
              />
            </div>

            {/* Multiple Grouped */}
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Multi Select Frameworks
              </span>

              <Dropdown
                {...args}
                placeholder="Select frameworks"
                color={getColor(args, globals)}
                listbox={{
                  type: "listbox",
                  multiple: true,
                  selectStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hoverStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  indicatorPosition: "end",
                  items: [
                    { type: "label", label: "Frontend" },
                    { label: "React", value: "react" },
                    { label: "Vue", value: "vue" },
                    { label: "Svelte", value: "svelte" },

                    { type: "divider" },
                    { type: "label", label: "Backend" },
                    { label: "Node.js", value: "node" },
                    { label: "Laravel", value: "laravel" },
                    { label: "Express", value: "express" },
                  ],
                }}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= SIZE ================= */}
      <LazySection>
        <ShowcaseTable
          title="Size Variations"
          description="Compare Dropdown and Dropdown.IconButton across sizes"
          rowHeaderLabel="Size"
          rows={[
            { key: "xs", label: "XS" },
            { key: "sm", label: "SM" },
            { key: "base", label: "Base" },
            { key: "lg", label: "LG" },
            { key: "xl", label: "XL" },
          ]}
          columns={[
            { key: "dropdown", label: "Dropdown" },
            { key: "iconButton", label: "Icon Button" },
          ]}
          renderCell={(size, type) =>
            type === "dropdown" ? (
              <Dropdown
                {...args}
                size={size as any}
                color={getColor(args, globals)}
              />
            ) : (
              <Dropdown.IconButton
                {...args}
                className=""
                placeholderIcon={{
                  type: "icon",
                  name: "@keyboard_arrow_down",
                }}
                value="react"
                listbox={{
                  type: "listbox",
                  className: "min-w-60",
                  selectStyle: { variant: "solid", appearance: "dualTone" },
                  hoverStyle: { variant: "solid", appearance: "dualTone" },
                  indicator: { type: "icon", name: "@check" },
                  indicatorPosition: "end",
                  items: [
                    {
                      label: "React",
                      value: "react",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                      helperText: "Frontend library",
                    },
                    {
                      label: "Vue",
                      value: "vue",
                      prefix: {
                        type: "icon",
                        name: "@bolt",
                      },
                      helperText: "Progressive framework",
                    },
                    {
                      label: "Angular",
                      value: "angular",
                      prefix: {
                        type: "icon",
                        name: "@dashboard",
                      },
                      helperText: "Enterprise framework",
                    },
                  ],
                }}
                size={size as any}
                color={getColor(args, globals)}
              />
            )
          }
        />
      </LazySection>

      {/* ================= RADIUS ================= */}
      <LazySection>
        <ShowcaseTable
          title="Radius Variations"
          description="Compare Dropdown and Dropdown.IconButton across radius values"
          rowHeaderLabel="Radius"
          rows={radiusScale.map((r) => ({
            key: r.key,
            label: r.label,
          }))}
          columns={[
            { key: "dropdown", label: "Dropdown" },
            { key: "iconButton", label: "Icon Button" },
          ]}
          renderCell={(radius, type) => {
            const radiusConfig = radiusScale.find((r) => r.key === radius);

            if (type === "dropdown") {
              return (
                <Dropdown
                  {...args}
                  rounded={radius as any}
                  listbox={{
                    type: "listbox",
                    className: `w-60 ${radiusConfig?.className ?? ""}`,
                    rounded: radius as any,
                    selectStyle: { variant: "solid", appearance: "dualTone" },
                    hoverStyle: { variant: "solid", appearance: "dualTone" },
                    indicatorPosition: "end",
                    items: [
                      { label: "React", value: "react" },
                      { label: "Vue", value: "vue" },
                      { label: "Angular", value: "angular" },
                    ],
                  }}
                  className={`w-60 ${radiusConfig?.className ?? ""}`}
                  color={getColor(args, globals)}
                />
              );
            }

            return (
              <Dropdown.IconButton
                {...args}
                className={`${radiusConfig?.className ?? ""}`}
                rounded={radius as any}
                value="react"
                placeholderIcon={{
                  type: "icon",
                  name: "@keyboard_arrow_down",
                }}
                listbox={{
                  type: "listbox",
                  className: `min-w-60 ${radiusConfig?.className ?? ""}`,
                  selectStyle: { variant: "solid", appearance: "dualTone" },
                  hoverStyle: { variant: "solid", appearance: "dualTone" },
                  indicator: { type: "icon", name: "@check" },
                  indicatorPosition: "end",
                  items: [
                    {
                      label: "React",
                      value: "react",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Vue",
                      value: "vue",
                      prefix: {
                        type: "icon",
                        name: "@bolt",
                      },
                    },
                    {
                      label: "Angular",
                      value: "angular",
                      prefix: {
                        type: "icon",
                        name: "@dashboard",
                      },
                    },
                  ],
                }}
                color={getColor(args, globals)}
              />
            );
          }}
        />
      </LazySection>

      {/* ================= SEARCHABLE DROPDOWN ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Searchable Dropdown
            </h2>

            <p className="text-sm text-gray-600">
              Enable search to quickly find options within the dropdown list
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Search Options
              </span>

              <Dropdown
                {...commonArgs}
                searchable
                placeholder="Select framework"
                color={getColor(args, globals)}
                listbox={{
                  type: "listbox",
                  selectStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hoverStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  indicator: {
                    type: "icon",
                    name: "@check",
                  },
                  indicatorPosition: "end",
                  items: [
                    { label: "React", value: "react" },
                    { label: "Vue", value: "vue" },
                    { label: "Angular", value: "angular" },
                    { label: "Svelte", value: "svelte" },
                    { label: "Solid", value: "solid" },
                    { label: "Next.js", value: "next" },
                    { label: "Nuxt", value: "nuxt" },
                    { label: "Remix", value: "remix" },
                  ],
                }}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ============== APPEARANCE × VARIANT MATRIX ============== */}
      <LazySection>
        <ShowcaseTable
          title="Appearance × Variant Matrix"
          description="Visualize dropdown styles across appearance and variant combinations"
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
            <Dropdown
              {...args}
              variant={variant as any}
              appearance={appearance as any}
              placeholder={`${variant} / ${appearance}`}
              className="w-60"
              color={getColor(args, globals)}
            />
          )}
        />
      </LazySection>

      {/* ============== FONT VARIANTS ============== */}
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

                <Dropdown
                  {...args}
                  font={font.key as any}
                  placeholder={`${font.key} dropdown`}
                  color={getColor(args, globals)}
                  className={`w-60`}
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ============== SIZE × SPACING MATRIX ============== */}
      <LazySection>
        <ShowcaseTable
          title="Size × Spacing Matrix"
          description="Visualize dropdown appearance across all size and spacing combinations"
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
            <Dropdown
              {...args}
              size={size as any}
              spacing={spacing as any}
              placeholder={`${size} / ${spacing}`}
              className="w-60"
              color={getColor(args, globals)}
            />
          )}
        />
      </LazySection>

      <LazySection>
        <ShowcaseTable
          title="Size × Spacing Matrix"
          description="Visualize Dropdown.IconButton across all size and spacing combinations"
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
            <Dropdown.IconButton
              {...args}
              className=""
              size={size as any}
              spacing={spacing as any}
              value="react"
              placeholderIcon={{
                type: "icon",
                name: "@keyboard_arrow_down",
              }}
              listbox={{
                type: "listbox",
                className: "min-w-60",
                selectStyle: { variant: "solid", appearance: "dualTone" },
                hoverStyle: { variant: "solid", appearance: "dualTone" },
                indicator: { type: "icon", name: "@check" },
                indicatorPosition: "end",
                items: [
                  {
                    label: "React",
                    value: "react",
                    prefix: {
                      type: "icon",
                      name: "@placeholder",
                    },
                  },
                  {
                    label: "Vue",
                    value: "vue",
                    prefix: {
                      type: "icon",
                      name: "@bolt",
                    },
                  },
                  {
                    label: "Angular",
                    value: "angular",
                    prefix: {
                      type: "icon",
                      name: "@dashboard",
                    },
                  },
                ],
              }}
              color={getColor(args, globals)}
            />
          )}
        />
      </LazySection>

      {/* ============== APPEARANCE × VARIANT MATRIX ============== */}
      <LazySection>
        <ShowcaseTable
          title="Dropdown Appearance × Variant (focus interaction)"
          description="Combinations of appearance and variant in focus interaction"
          rowHeaderLabel="Appearance"
          rows={appearanceRows}
          columns={variantColumns}
          renderCell={(appearance, variant) => (
            <Dropdown
              {...args}
              color={getColor(args, globals)}
              variant="solid"
              appearance={appearance as any}
              focusStyle={{
                variant: variant as any,
                appearance: appearance as any,
                color: getColor(args, globals),
              }}
              floatingLabel={{
                type: "label-float",
                label: "Variant",
                float: "on",
              }}
              placeholder="Select option"
              className="w-55"
            />
          )}
        />
      </LazySection>

      {/*=============  VARIANTS ========== */}
      <LazySection>
        <ShowcaseTable
          title="Style Variants"
          description="Compare Dropdown and Dropdown.IconButton across all variants"
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
            { key: "dropdown", label: "Dropdown" },
            { key: "iconButton", label: "Icon Button" },
          ]}
          renderCell={(variant, type) =>
            type === "dropdown" ? (
              <Dropdown
                {...args}
                variant={variant as any}
                placeholder={variant}
                color={getColor(args, globals)}
              />
            ) : (
              <Dropdown.IconButton
                {...args}
                className=""
                variant={variant as any}
                value="react"
                placeholderIcon={{
                  type: "icon",
                  name: "@keyboard_arrow_down",
                }}
                listbox={{
                  type: "listbox",
                  className: "min-w-60",
                  selectStyle: { variant: "solid", appearance: "dualTone" },
                  hoverStyle: { variant: "solid", appearance: "dualTone" },
                  indicator: { type: "icon", name: "@check" },
                  indicatorPosition: "end",
                  items: [
                    {
                      label: "React",
                      value: "react",
                      prefix: {
                        type: "icon",
                        name: "@placeholder",
                      },
                    },
                    {
                      label: "Vue",
                      value: "vue",
                      prefix: {
                        type: "icon",
                        name: "@bolt",
                      },
                    },
                    {
                      label: "Angular",
                      value: "angular",
                      prefix: {
                        type: "icon",
                        name: "@dashboard",
                      },
                    },
                  ],
                }}
                color={getColor(args, globals)}
              />
            )
          }
        />
      </LazySection>

      {/*============== Focus Variant Matrix ============*/}
      <LazySection>
        <ShowcaseTable
          title="Focus Variant"
          description="Visualize focus styles across all focus variants"
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
            { key: "solid", label: "Focus Solid" },
            { key: "outline", label: "Focus Outline" },
            { key: "solid-outline", label: "Focus Solid Outline" },
            { key: "underline", label: "Focus Underline" },
            { key: "solid-underline", label: "Focus Solid Underline" },
            { key: "ghost", label: "Focus Ghost" },
          ]}
          renderCell={(variant, focusVariant) => (
            <Dropdown
              {...args}
              variant={variant as any}
              floatingLabel={{
                type: "label-float",
                label: "Label",
                float: "in",
              }}
              focusStyle={{
                variant: focusVariant as any,
                appearance: "none",
                color: "",
              }}
              color={getColor(args, globals)}
              className="w-60"
            />
          )}
        />
      </LazySection>

      <LazySection>
        <ShowcaseTable
          title="Icon Button Focus Variant Matrix"
          description="Visualize Dropdown.IconButton focus styles across all focus variants"
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
            { key: "solid", label: "Focus Solid" },
            { key: "outline", label: "Focus Outline" },
            { key: "solid-outline", label: "Focus Solid Outline" },
            { key: "underline", label: "Focus Underline" },
            { key: "solid-underline", label: "Focus Solid Underline" },
            { key: "ghost", label: "Focus Ghost" },
          ]}
          renderCell={(variant, focusVariant) => (
            <Dropdown.IconButton
              {...args}
              className=""
              variant={variant as any}
              focusStyle={{
                variant: focusVariant as any,
                appearance: "none",
                color: "",
              }}
              value="react"
              placeholderIcon={{
                type: "icon",
                name: "@keyboard_arrow_down",
              }}
              listbox={{
                type: "listbox",
                className: "min-w-60",
                selectStyle: { variant: "solid", appearance: "dualTone" },
                hoverStyle: { variant: "solid", appearance: "dualTone" },
                indicator: { type: "icon", name: "@check" },
                indicatorPosition: "end",
                items: [
                  {
                    label: "React",
                    value: "react",
                    prefix: {
                      type: "icon",
                      name: "@placeholder",
                    },
                  },
                  {
                    label: "Vue",
                    value: "vue",
                    prefix: {
                      type: "icon",
                      name: "@bolt",
                    },
                  },
                  {
                    label: "Angular",
                    value: "angular",
                    prefix: {
                      type: "icon",
                      name: "@dashboard",
                    },
                  },
                ],
              }}
              color={getColor(args, globals)}
            />
          )}
        />
      </LazySection>

      {/*============== DROPDOWN LABELS ============*/}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Floating Label
            </h3>

            <p className="text-sm text-gray-600">
              Label positioning behavior inside the dropdown
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Float On */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Float On
              </span>

              <Dropdown
                {...args}
                color={getColor(args, globals)}
                variant="outline"
                floatingLabel={{
                  type: "label-float",
                  label: "Select framework",
                  float: "on",
                }}
                placeholder="Float on"
              />
            </div>

            {/* Float In */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Float In
              </span>

              <Dropdown
                {...args}
                color={getColor(args, globals)}
                floatingLabel={{
                  type: "label-float",
                  label: "Select framework",
                  float: "in",
                }}
                placeholder="Float in"
              />
            </div>

            {/* Float Over */}
            <div className="space-y-4">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Float Over
              </span>

              <Dropdown
                {...args}
                color={getColor(args, globals)}
                floatingLabel={{
                  type: "label-float",
                  label: "Select framework",
                  float: "over",
                }}
                placeholder="Float over"
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= CONTROLLED VALUE ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Controlled Value
            </h2>

            <p className="text-sm text-gray-600">
              Dropdown value controlled externally using React state
            </p>
          </div>

          <div className="grid gap-8">
            {/* Controlled Single */}
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Controlled Single Select
              </span>

              <ControlledSingleDropdown />
            </div>

            {/* Controlled Multiple */}
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase text-gray-500">
                Controlled Multiple Select
              </span>

              <ControlledMultipleDropdown />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= READONLY ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Readonly</h2>

            <p className="text-sm text-gray-600">
              Displays a selected value while preventing user interaction
            </p>
          </div>

          <div className="space-y-2">
            <Dropdown
              {...args}
              readOnly
              value="react"
              color={getColor(args, globals)}
              placeholder="Readonly dropdown"
            />
          </div>
        </section>
      </LazySection>

      {/*============ Truncated Value ============*/}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Truncated Value
            </h3>
            <p className="text-sm text-gray-600">
              Demonstrates how long selected values are truncated when the
              dropdown width is limited.
            </p>
          </div>

          <div className="grid grid-cols gap-8">
            <div className="space-y-2">
              <Dropdown
                {...args}
                variant="outline"
                value="in-long"
                color={getColor(args, globals)}
                placeholder="Select Option"
                listbox={{
                  type: "listbox",
                  textOverflow: "wrap",
                  selectStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hoverStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  indicator: {
                    type: "icon",
                    name: "@check",
                  },
                  indicatorPosition: "end",
                  items: [
                    {
                      label:
                        "United States of America - Washington D.C. Region",
                      value: "us-long",
                    },
                    {
                      label:
                        "Republic of India - National Capital Territory of New Delhi",
                      value: "in-long",
                    },
                    {
                      label: "French Republic - Paris Metropolitan Area",
                      value: "fr-long",
                    },
                    {
                      label:
                        "Federal Republic of Germany - Berlin Capital Region",
                      value: "de-long",
                    },
                  ],
                }}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/*============ Disabled Value ============*/}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Disabled Options
            </h3>
            <p className="text-sm text-gray-600">
              Demonstrates how dropdown list items can be disabled to prevent
              users from selecting unavailable options.
            </p>
          </div>

          <div className="grid grid-cols gap-8">
            <div className="space-y-2">
              <Dropdown
                {...args}
                color={getColor(args, globals)}
                placeholder="Select a country"
                listbox={{
                  type: "listbox",
                  selectStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hoverStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  indicator: {
                    type: "icon",
                    name: "@check",
                  },
                  indicatorPosition: "end",
                  items: [
                    { label: "India", value: "in" },
                    { label: "France", value: "fr", disabled: true },
                    { label: "Germany", value: "de" },
                    { label: "United States", value: "us" },
                  ],
                }}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= ALLOW CLEAR ================= */}
      <LazySection>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Allow Clear
            </h2>
            <p className="text-sm text-gray-600">
              Displays a clear button to remove the selected value(s).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Single Select
              </span>
              <Dropdown
                {...args}
                allowClear
                placeholder="Select framework"
                color={getColor(args, globals)}
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Multiple Select
              </span>
              <Dropdown
                {...args}
                allowClear
                placeholder="Select countries"
                listbox={{
                  type: "listbox",
                  multiple: true,
                  selectStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hoverStyle: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  indicator: {
                    type: "icon",
                    name: "@check",
                  },
                  indicatorPosition: "end",
                  items: [
                    { label: "India", value: "in" },
                    { label: "France", value: "fr", disabled: true },
                    { label: "Germany", value: "de" },
                    { label: "United States", value: "us" },
                  ],
                }}
                color={getColor(args, globals)}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= FULL WIDTH ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Full Width Dropdown
            </h2>
            <p className="text-sm text-gray-600">
              Demonstrates a dropdown expanding to fill the available
              container width
            </p>
          </div>
          <div>
            <Dropdown
              {...args}
              color={getColor(args, globals)}
              fullWidth={true}
              className=""
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
              Automatic styling adjustments for light/dark mode with adaptive
              toggle
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
                  <Dropdown
                    {...args}
                    appearance={appearance as any}
                    color={getColor(args, globals)}
                    adaptive={false}
                    placeholder={`${appearance} - adaptive: false`}
                    className="w-72"
                  />
                  <Dropdown
                    {...args}
                    appearance={appearance as any}
                    color={getColor(args, globals)}
                    adaptive={true}
                    placeholder={`${appearance} - adaptive: true`}
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
                  <Dropdown
                    {...args}
                    appearance={appearance as any}
                    color={getColor(args, globals)}
                    adaptive={false}
                    placeholder={`${appearance} - adaptive: false`}
                    className="w-72 dark"
                  />
                  <Dropdown
                    {...args}
                    appearance={appearance as any}
                    color={getColor(args, globals)}
                    adaptive={true}
                    placeholder={`${appearance} - adaptive: true`}
                    className="w-72 dark"
                  />
                </div>
              ))}
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
              Different validation states
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Disabled
              </label>
              <Dropdown {...args} disabled color={getColor(args, globals)} />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Loading
              </label>
              <Dropdown {...args} loading color={getColor(args, globals)} />
            </div>

            <div>
              <p className="mb-2 font-medium text-neutral-700">Hover</p>
              <Dropdown
                {...args}
                color={getColor(args, globals)}
                placeholder="Hover State"
                className="w-75 bg-neutral-200"
              />
            </div>

            <div>
              <p className="mb-2 font-medium text-neutral-700">Focus</p>
              <Dropdown
                {...args}
                color={getColor(args, globals)}
                className="w-75 border-brand-500 focus-within:ring-1 focus-within:ring-brand-500"
              />
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
