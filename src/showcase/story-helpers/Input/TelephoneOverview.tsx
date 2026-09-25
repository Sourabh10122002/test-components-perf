// Showcase ported from origin/input:src/components/Input/stories/Telephone.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React from "react";
import { Input } from "@inventive-ui/components/Input";
import type { InputProps as Props } from "@inventive-ui/components/Input";
import { LazySection, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../../storybook";
import { createSlotDefaultArgs, type SlotControlConfig } from "./slot/slot-controls";
import { getColor } from "./input.story-utils";

const withAddonButtonSize = (config: SlotControlConfig): SlotControlConfig => {
  if (
    config.category === "prefix-addon" ||
    config.category === "suffix-addon"
  ) {
    return {
      ...config,
      defaultButton: {
        ...config.defaultButton,
        size: "sm" as const,
      },
    };
  }

  return config;
};

const commonTypes = [
  "icon",
  "color-logo",
  "logo",
  "emoji",
  "text",
  "flag",
  "button",
  "dropdown",
] as const;
const CommonDefaults: Partial<SlotControlConfig> = {
  defaultType: "none",
  defaultIcon: {
    name: "@phone",
    size: "md",
  },
  defaultLogo: {
    name: "@placeholder",
    size: "md",
  },
  defaultEmoji: {
    name: "@placeholder",
  },
  defaultColorLogo: {
    name: "@placeholder",
    size: "md",
  },
  defaultText: {
    children: "Password",
  },
  defaultButton: {
    size: "xs",
    prefix: {
      type: "icon",
      name: "@phone",
    },
  },
  defaultDropdown: {
    size: "base",
    placeholder: "select...",
  },
};

const prefixSlotConfig: SlotControlConfig = {
  category: "prefix",
  enabledTypes: [...commonTypes],
  ...CommonDefaults,
};
const suffixSlotConfig: SlotControlConfig = {
  category: "suffix",
  enabledTypes: [...commonTypes],
  ...CommonDefaults,
};
const prefixAddonSlotConfig: SlotControlConfig = withAddonButtonSize({
  category: "prefix-addon",
  enabledTypes: [...commonTypes],
  ...CommonDefaults,
});
const suffixAddonSlotConfig: SlotControlConfig = withAddonButtonSize({
  category: "suffix-addon",
  enabledTypes: [...commonTypes],
  ...CommonDefaults,
});


const commonArgs = {
  size: "base",
  disabled: false,
  loading: false,
  placeholder: "",
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
  variant: undefined,
  showValidationMessage: true,

  ...createSlotDefaultArgs("prefixSlot", prefixSlotConfig),
  ...createSlotDefaultArgs("suffixSlot", suffixSlotConfig),
  ...createSlotDefaultArgs("prefixAddonSlot", prefixAddonSlotConfig),
  ...createSlotDefaultArgs("suffixAddonSlot", suffixAddonSlotConfig),
} as Props;


// Overview story args
const args = {
  ...commonArgs,
};

export function TelephoneOverview() {
  const globals = {};
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
    rows: readonly { key: RowKey; label: string }[];
    columns: readonly ShowcaseTableColumn<ColKey>[];
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
  const countryDisplayRows = [
    {
      key: "flag",
      label: "Flag",
    },
    {
      key: "dialCode",
      label: "Dial Code",
    },
    {
      key: "country",
      label: "Country",
    },
    {
      key: "flag-dialCode",
      label: "Flag + Dial Code",
    },
    {
      key: "country-dialCode",
      label: "Country + Dial Code",
    },
    {
      key: "flag-country-dialCode",
      label: "Flag + Country + Dial Code",
    },
  ] as const;
  const countryDisplayColumns = [
    {
      key: "example",
      label: "Example",
      align: "left" as const,
    },
  ];
  const countryDropdownAddon = {
    type: "dropdown" as const,
    telephoneCountries: true,
    searchable: true,
    countryDisplay: "flag-dialCode" as const,

    listbox: {
      type: "listbox" as const,
      className: "min-w-[18rem]",
    },
  };

  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="flex flex-col gap-16">
        {/* ================= BASICS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Telephone Basics
              </h2>
              <p className="text-sm text-gray-600">
                Standard telephone input with country selection support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Default
                </span>
                <Input.Telephone
                  {...args}
                  placeholder="Enter phone number"
                  color={getColor(args, globals)}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Floating Label
                </span>
                <Input.Telephone
                  {...args}
                  variant="outline"
                  floatingLabel={{
                    label: "Phone Number",
                    float: "on",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Floating Label with Prefix Icon
                </span>
                <Input.Telephone
                  {...args}
                  variant="outline"
                  floatingLabel={{
                    label: "Phone Number",
                    float: "on",
                    prefix: {
                      type: "icon",
                      name: "@phone",
                    },
                  }}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= REQUIRED VS OPTIONAL ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Required vs Optional
              </h2>
              <p className="text-sm text-gray-600">
                Compare required and optional telephone fields.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Required
                </span>

                <Input.Telephone
                  {...args}
                  required
                  variant="outline"
                  floatingLabel={{
                    label: "Required Phone",
                    float: "on",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Optional
                </span>

                <Input.Telephone
                  {...args}
                  variant="outline"
                  required={false}
                  floatingLabel={{
                    label: "Optional Phone",
                    float: "on",
                  }}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= VALIDATION ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Validation
              </h2>
              <p className="text-sm text-gray-600">
                Telephone validation examples.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Required Validation
                </span>

                <Input.Telephone
                  {...args}
                  required
                  placeholder="Enter phone number"
                  validationRules={[
                    {
                      rule: "required",
                      description: "Phone number is required",
                    },
                  ]}
                  color={getColor(args, globals)}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Indian Phone Number Pattern
                </span>

                <Input.Telephone
                  {...args}
                  placeholder="Enter phone number"
                  validationRules={[
                    {
                      rule: "pattern",
                      value: /^[6-9]\d{9}$/,
                      description: "Enter a valid Indian phone number",
                    },
                  ]}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= COUNTRY DATA MANAGEMENT ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Country Data Management
              </h2>

              <p className="text-sm text-gray-600">
                Control which countries are available in the telephone country
                selector using regions, sub-regions, preferred countries, and
                excluded countries.
              </p>
            </div>

            <div className="grid grid-cols gap-6">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  All Countries
                </span>

                <Input.Telephone
                  {...args}
                  defaultCountry="IN"
                  color={getColor(args, globals)}
                  prefixAddon={countryDropdownAddon}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Region — Asia
                </span>

                <Input.Telephone
                  {...args}
                  defaultCountry="IN"
                  color={getColor(args, globals)}
                  regions={["asia"]}
                  prefixAddon={countryDropdownAddon}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Sub-region
                </span>

                <Input.Telephone
                  {...args}
                  defaultCountry="IN"
                  color={getColor(args, globals)}
                  subregions={["southern-asia"]}
                  prefixAddon={countryDropdownAddon}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Preferred Countries
                </span>

                <Input.Telephone
                  {...args}
                  defaultCountry="IN"
                  color={getColor(args, globals)}
                  regions={["asia"]}
                  preferredCountries={["IN", "US", "GB"]}
                  prefixAddon={countryDropdownAddon}
                />
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  Excluded Countries
                </span>

                <Input.Telephone
                  {...args}
                  defaultCountry="LB"
                  color={getColor(args, globals)}
                  regions={["asia"]}
                  excludedCountries={["IN", "US"]}
                  prefixAddon={countryDropdownAddon}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= COUNTRY GROUPING ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Country Grouping
              </h2>
              <p className="text-sm text-gray-600">
                Countries are automatically grouped by region or sub-region
                when region-based filtering is applied.
              </p>

              <div className="grid grid-cols gap-6">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">
                    Regions with Specific Countries
                  </span>

                  <Input.Telephone
                    {...args}
                    color={getColor(args, globals)}
                    defaultCountry="FR"
                    regions={{
                      asia: ["IN", "JP", "SG", "TH", "MY"],
                      europe: ["GB", "DE", "FR"],
                      africa: ["NG", "ZA", "KE", "EG"],
                    }}
                    prefixAddon={countryDropdownAddon}
                  />
                </div>

                {/* Multiple Regions */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">
                    Multiple Regions
                  </span>

                  <Input.Telephone
                    {...args}
                    color={getColor(args, globals)}
                    regions={["asia", "europe", "africa"]}
                    defaultCountry="FR"
                    prefixAddon={{
                      type: "dropdown",
                      telephoneCountries: true,
                      countryDisplay: "flag-dialCode",
                      listbox: {
                        type: "listbox",
                        className: "min-w-[18rem]",
                      },
                    }}
                  />
                </div>

                {/* Sub-regions */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">
                    Sub-regions
                  </span>

                  <Input.Telephone
                    {...args}
                    color={getColor(args, globals)}
                    subregions={["southern-asia", "eastern-asia"]}
                    defaultCountry="JP"
                    prefixAddon={{
                      type: "dropdown",
                      telephoneCountries: true,
                      countryDisplay: "flag-dialCode",

                      listbox: {
                        type: "listbox",
                        className: "min-w-[18rem]",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= COUNTRY DISPLAY ================= */}
        <LazySection>
          <ShowcaseTable
            title="Country Display"
            description="Control how the selected country is displayed in the telephone dropdown. This example uses the Asia region to populate the country list from the country metadata."
            rowHeaderLabel="Display"
            rows={countryDisplayRows}
            columns={countryDisplayColumns}
            renderCell={(row) => (
              <Input.Telephone
                {...args}
                color={getColor(args, globals)}
                regions={["asia"]}
                defaultCountry="IN"
                prefixAddon={{
                  type: "dropdown",
                  telephoneCountries: true,
                  countryDisplay: row,

                  listbox: {
                    type: "listbox",
                    className: "min-w-[18rem]",
                  },
                }}
              />
            )}
          />
        </LazySection>

        {/* =================  prefix and suffix ================= */}
        <LazySection>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Affix</h3>

              <p className="mt-1 text-sm text-gray-500">
                Add content before or after the telephone input using prefix
                and suffix.
              </p>
            </div>

            {/* Prefix */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Prefix
              </span>

              <Input.Telephone
                {...args}
                color={getColor(args, globals)}
                defaultCountry="IN"
                regions={["asia"]}
                prefix={{
                  type: "dropdown",
                  className: "px-0 py-0",
                  telephoneCountries: true,
                  listbox: {
                    type: "listbox",
                    className: "min-w-[18rem]",
                  },
                }}
              />
            </div>

            {/* Suffix */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Suffix
              </span>

              <Input.Telephone
                {...args}
                color={getColor(args, globals)}
                suffix={{
                  type: "button",
                  variant: "ghost",
                  className: "p-0",
                  prefix: {
                    type: "icon",
                    name: "@phone",
                  },
                }}
              />
            </div>

            {/* Prefix + Suffix */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Prefix + Suffix
              </span>

              <Input.Telephone
                {...args}
                color={getColor(args, globals)}
                defaultCountry="US"
                regions={["america"]}
                prefix={{
                  type: "dropdown",
                  className: "px-0 py-0",
                  telephoneCountries: true,
                  listbox: {
                    type: "listbox",
                    className: "min-w-[18rem]",
                  },
                }}
                suffix={{
                  type: "button",
                  variant: "ghost",
                  className: "p-0",
                  prefix: {
                    type: "icon",
                    name: "@phone",
                  },
                }}
              />
            </div>
          </div>
        </LazySection>

        {/* =================  addons ================= */}
        <LazySection>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Addons
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Add interactive controls before or after the telephone input
                using prefix and suffix addons.
              </p>
            </div>

            {/* Prefix Addon */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Prefix Addon
              </span>

              <Input.Telephone
                {...args}
                color={getColor(args, globals)}
                regions={["america"]}
                defaultCountry="US"
                prefixAddon={countryDropdownAddon}
              />
            </div>

            {/* Suffix Addon */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Suffix Addon
              </span>

              <Input.Telephone
                {...args}
                color={getColor(args, globals)}
                suffixAddon={{
                  type: "button",
                  prefix: {
                    type: "icon",
                    name: "@phone",
                  },
                }}
              />
            </div>

            {/* Prefix Addon + Suffix Addon */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Prefix Addon + Suffix Addon
              </span>

              <Input.Telephone
                {...args}
                color={getColor(args, globals)}
                regions={["america"]}
                defaultCountry="US"
                prefixAddon={countryDropdownAddon}
                suffixAddon={{
                  type: "button",
                  prefix: {
                    type: "icon",
                    name: "@phone",
                  },
                }}
              />
            </div>
          </div>
        </LazySection>
      </div>
    </ShowcaseShell>
  );
}
