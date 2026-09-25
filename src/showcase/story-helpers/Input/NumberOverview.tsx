// Showcase ported from origin/input:src/components/Input/stories/Number.stories.tsx (story "Overview", storyName "Showcase / Overview")
import { Input } from "@inventive-ui/components/Input";
import type { InputProps as Props } from "@inventive-ui/components/Input";
import { LazySection, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../../storybook";
import { getColor } from "./input.story-utils";

const commonArgs = {
  size: "base",
  disabled: false,
  loading: false,
  placeholder: "Enter a number",
  allowClear: false,
  required: false,
  focusStyle: {
    variant: "none",
    appearance: "none",
    color: "",
  },
  readOnly: false,
  step: 1,
  fullWidth: false,
  variant: "solid",
  appearance: "dualTone",
  className: "",
  showValidationMessage: true,
  showControls: false,
  keyboard: false,
  scrubber: false,
  mousewheel: false,
  floatingLabel: undefined,
} as Props;

const radiusScale = [
  { key: "none", label: "none", className: "rounded-none" },
  { key: "sm", label: "sm", className: "rounded-sm" },
  { key: "md", label: "md", className: "rounded-md" },
  { key: "lg", label: "lg", className: "rounded-lg" },
  { key: "full", label: "full", className: "rounded-full" },
];

// Overview story args
const args = {
  ...commonArgs,
  placeholder: "0",
};

export function NumberOverview() {
  const globals = {};
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="flex flex-col gap-16">
        {/* ================= CONTROLS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Controls Variations
              </h2>
              <p className="text-sm text-gray-600">
                Default input and input with increment / decrement controls
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Default */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Default
                </span>

                <Input.Number
                  {...args}
                  showControls={false}
                  className="w-60"
                />
              </div>

              {/* With Controls */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  With Controls
                </span>

                <Input.Number
                  {...args}
                  color={getColor(args, globals)}
                  showControls={true}
                  className="w-60"
                />
              </div>

              {/* With Floating Label */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  With Floating Label
                </span>

                <Input.Number
                  {...args}
                  color={getColor(args, globals)}
                  floatingLabel={{
                    label: "Number",
                    float: "in",
                  }}
                  className="w-60"
                />
              </div>

              {/* Mobile Stepper */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Mobile Stepper
                </span>

                <Input.Number
                  {...args}
                  variant="ghost"
                  style={{ textAlign: "center" }}
                  color={getColor(args, globals)}
                  className="w-40 text-center"
                  prefix={{
                    type: "button",
                    cTag: "prefix-stepper",
                    icon: { type: "icon", name: "@minus" },
                    action: "decrement",
                  }}
                  suffix={{
                    type: "button",
                    cTag: "suffix-stepper",
                    icon: { type: "icon", name: "@plus" },
                    action: "increment",
                  }}
                />
              </div>

              {/* Options Stepper */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Options Stepper
                </span>

                <Input.Number
                  {...args}
                  color={getColor(args, globals)}
                  focused={false}
                  style={{ textAlign: "center" }}
                  options={[
                    "text-xs",
                    "text-sm",
                    "text-base",
                    "text-lg",
                    "text-xl",
                  ]}
                  className="w-40"
                  prefixAddon={{
                    type: "button",
                    color: "neutral",
                    size: "sm",
                    cTag: "prefix-options-stepper",
                    icon: {
                      type: "icon",
                      library: "lucide",
                      name: "minus",
                    },
                    action: "decrement",
                  }}
                  suffixAddon={{
                    type: "button",
                    color: "neutral",
                    size: "sm",
                    cTag: "suffix-options-stepper",
                    icon: {
                      type: "icon",
                      library: "lucide",
                      name: "plus",
                    },
                    action: "increment",
                  }}
                />

                <span className="block text-sm text-gray-500">
                  text-xs → text-sm → text-base → text-lg → text-xl
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Attached Stepper */}
        <div className="col-span-2 space-y-4">
          <div>
            <span className="text-2xl font-semibold text-gray-900">
              Attached Stepper
            </span>
            <p className="mt-1 text-sm text-gray-500">
              Increment and decrement buttons attached to the number input
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Solid */}
            <div className="space-y-2">
              <span className="block text-xs font-medium text-gray-500">
                Solid
              </span>

              <Input.Number
                {...args}
                variant="solid"
                readOnly
                style={{ textAlign: "center" }}
                color={getColor(args, globals)}
                className="w-30"
                focused={false}
                prefixAddon={{
                  type: "button",
                  color: "neutral",
                  size: "sm",
                  cTag: "prefix-stepper-solid",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "minus",
                  },
                  action: "decrement",
                }}
                suffixAddon={{
                  type: "button",
                  color: "neutral",
                  size: "sm",
                  cTag: "suffix-stepper-solid",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "plus",
                  },
                  action: "increment",
                }}
              />
            </div>

            {/* Outline */}
            <div className="space-y-2">
              <span className="block text-xs font-medium text-gray-500">
                Outline
              </span>

              <Input.Number
                {...args}
                variant="outline"
                readOnly
                style={{ textAlign: "center" }}
                color={getColor(args, globals)}
                className="w-30"
                focused={false}
                prefixAddon={{
                  type: "button",
                  color: "neutral",
                  size: "sm",
                  variant: "outline",
                  cTag: "prefix-stepper-outline",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "minus",
                  },
                  action: "decrement",
                }}
                suffixAddon={{
                  type: "button",
                  color: "neutral",
                  size: "sm",
                  variant: "outline",
                  cTag: "suffix-stepper-outline",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "plus",
                  },
                  action: "increment",
                }}
              />
            </div>

            {/* solid-outline */}
            <div className="space-y-2">
              <span className="block text-xs font-medium text-gray-500">
                Solid-outline
              </span>

              <Input.Number
                {...args}
                variant="solid-outline"
                readOnly
                style={{ textAlign: "center" }}
                color={getColor(args, globals)}
                className="w-30"
                focused={false}
                prefixAddon={{
                  type: "button",
                  size: "sm",
                  color: "neutral",
                  appearance: "dualtone",
                  variant: "solid-outline",
                  cTag: "prefix-stepper-solid-outline",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "minus",
                  },
                  action: "decrement",
                }}
                suffixAddon={{
                  type: "button",
                  appearance: "dualtone",
                  variant: "solid-outline",
                  size: "sm",
                  color: "neutral",
                  cTag: "suffix-stepper-solid-outline",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "plus",
                  },
                  action: "increment",
                }}
              />
            </div>

            {/* Ghost */}
            <div className="space-y-2">
              <span className="block text-xs font-medium text-gray-500">
                Ghost
              </span>

              <Input.Number
                {...args}
                variant="ghost"
                readOnly
                style={{ textAlign: "center" }}
                color={getColor(args, globals)}
                className="w-30"
                focused={false}
                prefixAddon={{
                  type: "button",
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  cTag: "prefix-stepper-ghost",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "minus",
                  },
                  action: "decrement",
                }}
                suffixAddon={{
                  type: "button",
                  color: "neutral",
                  size: "sm",
                  variant: "ghost",
                  cTag: "suffix-stepper-ghost",
                  icon: {
                    type: "icon",
                    library: "lucide",
                    name: "plus",
                  },
                  action: "increment",
                }}
              />
            </div>
          </div>
        </div>

        {/* ================= FORMATTING ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Formatting Variations
              </h2>

              <p className="text-sm text-gray-600">
                Number formatting using Intl.NumberFormat options
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Currency */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Currency
                </span>

                <Input.Number
                  {...args}
                  className="w-60"
                  value={1250}
                  formatOptions={{
                    style: "currency",
                    currency: "USD",
                  }}
                />
              </div>

              {/* Percent */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Percent
                </span>

                <Input.Number
                  {...args}
                  className="w-60"
                  value={78}
                  formatOptions={{
                    style: "percent",
                  }}
                  formatter={(value: any) => `${value}%`}
                />
              </div>

              {/* Unit */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Unit
                </span>

                <Input.Number
                  {...args}
                  className="w-60"
                  value={12}
                  formatOptions={{
                    style: "unit",
                    unit: "inch",
                    unitDisplay: "long",
                  }}
                />
              </div>

              {/* Locale */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Locale
                </span>

                <Input.Number
                  {...args}
                  className="w-60"
                  value={1234567.89}
                  locale="de-DE"
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= FEATURES ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Features
              </h2>
              <p className="text-sm text-gray-600">
                Interactive behaviors and input capabilities
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Step */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Step Increment
                </span>

                <Input.Number
                  {...args}
                  color={getColor(args, globals)}
                  showControls
                  step={3}
                  placeholder="0"
                  className="w-60"
                />
                <span className="block text-sm text-gray-500">
                  Step is set to 3
                </span>
              </div>

              {/* Mouse Wheel */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Mouse Wheel
                </span>

                <Input.Number
                  {...args}
                  color={getColor(args, globals)}
                  mousewheel
                  placeholder="0"
                  className="w-60"
                />
              </div>

              {/* Scrubber */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Scrubber
                </span>

                <Input.Number
                  {...args}
                  color={getColor(args, globals)}
                  scrubber
                  showControls
                  placeholder="0"
                  className="w-60"
                />
              </div>

              {/* Min Max */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Min / Max Validation
                </span>

                <Input.Number
                  {...args}
                  color={getColor(args, globals)}
                  validationRules={[
                    {
                      rule: "max",
                      value: 150,
                      description: "Maximum value is 150",
                      state: "error",
                    },
                    {
                      rule: "min",
                      value: 10,
                      description: "Minimum value is 10",
                      state: "error",
                    },
                  ]}
                  placeholder="10 - 150"
                  className="w-60"
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= SIZE ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Size Variations
              </h2>
              <p className="text-sm text-gray-600">
                Different sizes for number input
              </p>
            </div>

            <div className="grid gap-6">
              {["xs", "sm", "base", "lg", "xl"].map((size) => (
                <div key={size} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {size}
                  </span>

                  <Input.Number
                    {...args}
                    size={size as any}
                    color={getColor(args, globals)}
                    showControls={true}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= RADIUS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Radius Variations
              </h2>
              <p className="text-sm text-gray-600">
                Different border radius styles
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {radiusScale.map((r) => (
                <div key={r.key} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {r.label}
                  </span>

                  <Input.Number
                    {...args}
                    rounded={r.key as any}
                    color={getColor(args, globals)}
                    showControls={true}
                    className={`w-60 ${r.className}`}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= ERROR STATE ================= */}
        <LazySection>
          <section className="space-y-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Error State
              </h2>
              <p className="text-sm text-gray-600">
                Input with Invalid message
              </p>
            </div>

            <Input.Number
              {...args}
              appearance="dualTone"
              invalid
              validationRules={[
                {
                  rule: "min",
                  value: 10,
                  description: "Minimum value is 10",
                  state: "error",
                },
              ]}
              inlineMessage={{
                cTag: "error-state",
                description: "Minimum value is 10",
                state: "error",
              }}
              showControls={true}
            />
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
                <Input.Number
                  {...args}
                  disabled
                  color={getColor(args, globals)}
                  className="min-w-[20rem]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Loading
                </label>
                <Input.Number
                  {...args}
                  loading
                  className="min-w-[20rem]"
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>
      </div>
    </ShowcaseShell>
  );
}
