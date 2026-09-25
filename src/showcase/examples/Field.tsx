// Showcase ported from origin/field:src/components/Field/stories/Field.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React from "react";
import { Field } from "@inventive-ui/components/Field";
import type { FieldProps } from "@inventive-ui/components/Field";
import { SlotRenderer } from "@inventive-ui/framework/slots";
import { LazySection } from "../storybook";

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  base: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

// ================= COMMON ARGS =================

const commonArgs: FieldProps = {
  label: {
    label: "Example field",
  } as any,
  input: {
    type: "input-text",
    placeholder: "Placeholder",
    className: "min-w-[20rem]",
    appearance: "dualTone",
  },
  size: "base",
  invalid: false,
  required: false,
  orientation: "vertical",
  inlineMessage: undefined,
};

// Overview story args
const args = commonArgs;

export default function FieldShowcase() {
  const [radioValue, setRadioValue] = React.useState<string | undefined>(
    undefined,
  );
  // @ts-ignore -- setter is unused in the original story (trips noUnusedLocals)
  const [checkboxValue, setCheckboxValue] = React.useState<
    string | undefined
  >(undefined);
  return (
    <div className="flex flex-col gap-15 px-6">
      {/* ===== BASIC ===== */}
      <LazySection>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Basic</h2>

          <p className="text-sm text-gray-600 mb-4">
            Default field with label and input
          </p>

          <Field {...commonArgs} />
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
              Available Field sizes for different layout densities
            </p>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            {["xs", "sm", "base", "lg", "xl"].map((size) => (
              <div key={size} className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {size}
                </span>
                <Field {...args} size={size as any} />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== WITH MESSAGE ===== */}
      <LazySection>
        <section>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              With Inline Message
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Displays helper or validation message below the input
            </p>
          </div>

          <div className="">
            <Field
              {...args}
              inlineMessage={{
                type: "inline-message",
                id: "",
                description: "Helper text or hint shown below the input",
                state: "help",
                showIcon: false,
              }}
            />
          </div>
        </section>
      </LazySection>

      {/* ===== REQUIRED ===== */}
      <LazySection>
        <section>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Required Field
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Indicates mandatory input using required label indicator
            </p>
          </div>

          <div className="">
            <Field
              {...args}
              label={{
                type: "label",
                label: "Required field",
              }}
              input={{
                type: "input-text",
                required: true,
                placeholder: "Required Field",
                className: "min-w-[20rem]",
              }}
            />
          </div>
        </section>
      </LazySection>

      {/* ===== ORIENTATION ===== */}
      <LazySection>
        <section>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Orientation
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Vertical and horizontal layout variations
            </p>
          </div>

          <div className="grid grid-cols gap-10">
            {["vertical", "horizontal"].map((orientation) => (
              <div key={orientation} className="flex flex-col gap-4">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {orientation}
                </span>
                {/* Field Preview */}
                <Field {...args} orientation={orientation as any} />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== FONT OPTIONS ===== */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Font Variants
            </h2>

            <p className="text-sm text-gray-600">
              Available typography styles for the Field component
            </p>
          </div>

          <div className="flex flex-col-3 gap-4 w-fit">
            {["inter", "arial", "mono"].map((font) => (
              <div key={font} className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {font}
                </span>

                <Field
                  {...args}
                  label={{
                    label: `${font}`,
                    className: `font-${font}`,
                  }}
                  input={{
                    type: "input-text",
                    font: `${font}`,
                    placeholder: "Placeholder",
                    className: `min-w-[15rem]`,
                    appearance: "dualTone",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== RADIUS OPTIONS ===== */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Radius Variants
            </h2>

            <p className="text-sm text-gray-600">
              Different border radius styles supported by the Field component
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {["none", "sm", "md", "lg", "full"].map((radius) => (
              <div key={radius} className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {radius}
                </span>

                <Field
                  {...args}
                  input={{
                    type: "input-text",
                    placeholder: "Placeholder",
                    className: `min-w-[17rem] ${radiusClasses[radius as keyof typeof radiusClasses]}`,
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ===== INVALID ===== */}
      <LazySection>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Invalid Field
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Displays the field in an invalid state with validation feedback.
          </p>

          <Field
            {...commonArgs}
            invalid
            label={{
              type: "label",
              label: "Email",
            }}
            input={{
              type: "input-email",
              placeholder: "Enter your email",
              className: "min-w-[20rem]",
              appearance: "dualTone",
            }}
            inlineMessage={{
              type: "inline-message",
              id: "",
              description: "Please enter a valid email address.",
              state: "error",
              showIcon: true,
            }}
          />
        </section>
      </LazySection>

      {/* ===== Infotip ===== */}
      <LazySection>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            InfoTip
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Use InfoTip to offer extra information without cluttering the UI,
            accessible via tooltip.
          </p>

          <Field
            {...commonArgs}
            label={{
              type: "label",
              label: "Field with an infotip",
              infoTip: {
                type: "info-tip",
                state: "info",
                icon: {
                  type: "icon",
                  name: "@info",
                },
                tooltip: {
                  type: "tooltip",
                  cTag: "label-tooltip",
                  placement: "top",
                  description: { children: "Example info" },
                },
                placement: "end",
              },
            }}
          />
        </section>
      </LazySection>

      {/* ===== Disabled control ===== */}
      <LazySection>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Disabled control
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Disables user interaction for the input while keeping the label
            visible.
          </p>

          <Field
            {...commonArgs}
            disabled
            label={{
              type: "label",
              label: "Field with disabled control",
            }}
            input={{
              type: "input-text",
              placeholder: "Placeholder",
              className: "min-w-[20rem]",
            }}
          />
        </section>
      </LazySection>

      {/* ===== Component Examples ===== */}
      <LazySection>
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Component Examples
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Field can be used with any input components in this library. This
            story shows some examples.
          </p>

          <div className="flex flex-col gap-4">
            <Field
              {...commonArgs}
              label={{ type: "label", label: "Input" }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Password" }}
              input={{
                type: "input-password",
                variant: "solid",
                placeholder: "Enter your password",
                className: "min-w-[20rem]",
                total: 0,
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Card input" }}
              input={{
                type: "input-card",
                variant: "solid",
                placeholder: "0000 0000 0000 0000",
                className: "min-w-[20rem]",
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "URL input" }}
              input={{
                type: "input-url",
                placeholder: "https://example.com",
                variant: "solid",
                className: "min-w-[20rem]",
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Tag input" }}
              input={{
                type: "input-tag",
                placeholder: "Type and press enter",
                className: "min-w-[20rem]",
                variant: "solid",
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Search" }}
              input={{
                type: "input-search",
                placeholder: "Search...",
                className: "min-w-[20rem]",
                variant: "solid",
              }}
            />
            <Field
              {...commonArgs}
              label={{ type: "label", label: "Telephone" }}
              input={{
                type: "input-telephone",
                className: "min-w-[15rem]",
                subregions: ["asia", "southern-asia", "eastern-asia"],
                defaultCountry: "In",
                prefixAddon: {
                  type: "dropdown",
                  telephoneCountries: true,
                  countryDisplay: "flag-dialCode",

                  listbox: {
                    type: "listbox",
                    className: "min-w-[18rem]",
                  },
                },
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Textarea" }}
              input={{
                type: "input-text-area",
                placeholder: "Enter your Message",
                rows: 2,
                className: "min-w-[20rem]",
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Select" }}
              input={{
                type: "select",
                placeholder: "Select Option",
                className: "min-w-[20rem]",
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
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Number" }}
              input={{
                type: "input-number",
                scrubber: false,
                showControls: true,
                placeholder: "0",
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Dropdown" }}
              input={{
                type: "dropdown",
                placeholder: "Select framework",
                className: "min-w-[20rem]",
                listbox: {
                  type: "listbox",
                  select: {
                    variant: "solid",
                    appearance: "dualTone",
                  },
                  hover: {
                    variant: "solid",
                    appearance: "dualTone",
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
                    {
                      label: "Svelte",
                      value: "svelte",
                    },
                  ],
                },
              }}
            />

            <Field
              {...commonArgs}
              label={{
                type: "label",
                label: "",
              }}
              input={{
                type: "checkbox",
                label: "Checkbox",
              }}
              inlineMessage={{
                type: "inline-message",
                id: "",
                description:
                  "Checkboxes use their own label instead of the Field label.",
                state: "help",
                showIcon: false,
                size: "sm",
              }}
            />

            <Field
              {...commonArgs}
              label={{ type: "label", label: "Switch" }}
              input={{
                type: "switch" as any,
                appearance: "strong",
                indicator: {
                  align: "center",
                  placement: "start",
                },
              }}
            />

            <Field
              label={{ type: "label", label: "Radio Group" }}
              inlineMessage={
                radioValue
                  ? {
                      type: "inline-message",
                      id: "radio-msg",
                      cTag: "field-msg",
                      description: `Selected: ${radioValue}`,
                      state: "success",
                      showIcon: true,
                    }
                  : {
                      type: "inline-message",
                      id: "radio-msg",
                      cTag: "field-msg",
                      description: "Please select one option.",
                      state: "help",
                      showIcon: false,
                    }
              }
            >
              <SlotRenderer
                slot={{
                  type: "radio-group",
                  value: radioValue,
                  onChange: setRadioValue,
                  direction: "column",
                  gap: 8,
                }}
              >
                <SlotRenderer
                  slot={{ type: "radio", value: "email", label: "Email" }}
                />
                <SlotRenderer
                  slot={{ type: "radio", value: "phone", label: "Phone" }}
                />
                <SlotRenderer
                  slot={{
                    type: "radio",
                    value: "sms",
                    label: "SMS",
                    disabled: true,
                  }}
                />
              </SlotRenderer>
            </Field>

            <Field
              label={{ type: "label", label: "Checkbox Group" }}
              inlineMessage={
                checkboxValue
                  ? {
                      type: "inline-message",
                      id: "radio-msg",
                      cTag: "field-msg",
                      description: `Selected: ${checkboxValue}`,
                      state: "success",
                      showIcon: true,
                    }
                  : {
                      type: "inline-message",
                      id: "radio-msg",
                      cTag: "field-msg",
                      description: "Please select options.",
                      state: "help",
                      showIcon: false,
                    }
              }
            >
              <SlotRenderer
                slot={{
                  type: "checkbox-group",
                  direction: "column",
                }}
              >
                <SlotRenderer
                  slot={{
                    type: "checkbox",
                    value: "email",
                    label: "Email notifications",
                  }}
                />
                <SlotRenderer
                  slot={{
                    type: "checkbox",
                    value: "sms",
                    label: "SMS notifications",
                  }}
                />
                <SlotRenderer
                  slot={{
                    type: "checkbox",
                    value: "push",
                    label: "Push notifications",
                  }}
                />
              </SlotRenderer>
            </Field>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
