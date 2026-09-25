// Showcase ported from origin/input:src/components/Input/stories/Card.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React from "react";
import { Input } from "@inventive-ui/components/Input";
import type { InputProps as Props } from "@inventive-ui/components/Input";
import { LazySection, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../../storybook";
import { createSlotDefaultArgs, type SlotControlConfig } from "./slot/slot-controls";
import type { SemanticColor } from "@inventive-ui/framework";
import { getCardBrand } from "./input-utils";
import { getColor } from "./input.story-utils";

const commonTypes = [
  "icon",
  "color-logo",
  "logo",
  "emoji",
  "text",
  "flag",
  "button",
] as const;
const CommonDefaults: Partial<SlotControlConfig> = {
  defaultType: "none",
  defaultIcon: {
    name: "@CreditCard",
    filled: false,
    size: "md",
  },
  defaultFlag: {
    code: "@placeholder",
    shape: "rectangle",
  },
  defaultLogo: {
    name: "@visa",
    size: "md",
  },
  defaultColorLogo: {
    name: "@visa",
    size: "md",
  },
  defaultEmoji: {
    name: "@credit_card",
    size: "medium",
  },
  defaultText: {
    children: "Text",
  },
  defaultButton: {
    size: "xs",
    prefix: {
      type: "icon",
      name: "@CreditCard",
    },
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
const prefixAddonSlotConfig: SlotControlConfig = {
  category: "prefix-addon",
  enabledTypes: [...commonTypes],
  ...CommonDefaults,
};
const suffixAddonSlotConfig: SlotControlConfig = {
  category: "suffix-addon",
  enabledTypes: [...commonTypes],
  ...CommonDefaults,
};

const commonArgs = {
  size: "base",
  disabled: false,
  loading: false,
  placeholder: "0000 0000 0000 0000",
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
  maskMode: "never",

  ...createSlotDefaultArgs("prefixSlot", prefixSlotConfig),
  ...createSlotDefaultArgs("suffixSlot", suffixSlotConfig),
  ...createSlotDefaultArgs("prefixAddonSlot", prefixAddonSlotConfig),
  ...createSlotDefaultArgs("suffixAddonSlot", suffixAddonSlotConfig),
} as Props;


// Overview story args
const args = {
  ...commonArgs,
};

export function CardOverview() {
  const globals = {};
  // @ts-ignore -- defined but never rendered in the original story (trips noUnusedLocals)
  const ServerValidationDemo = () => {
    const [value, setValue] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const validateCard = async () => {
      if (!value) {
        setMessage("Please enter a card number.");
        return;
      }

      setLoading(true);
      setMessage("");

      // Simulate server request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const digits = value.replace(/\D/g, "");

      if (digits === "4111111111111111") {
        setMessage("Card verified successfully.");
      } else {
        setMessage("Card could not be verified.");
      }

      setLoading(false);
    };

    return (
      <div className="max-w-md space-y-4">
        <Input.Card
          inputId="server-validation-card"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.value);
            setMessage("");
          }}
          placeholder="0000 0000 0000 0000"
          loading={loading}
        />

        <button
          type="button"
          onClick={validateCard}
          disabled={loading}
          className="rounded-md px-4 py-2 text-sm font-medium bg-gray-900 text-white disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify Card"}
        </button>

        {message && <p className="text-sm text-gray-600">{message}</p>}

        <div className="space-y-1 text-xs text-gray-500">
          <p>Test card:</p>
          <p>• 4111111111111111 → Valid</p>
          <p>• Any other number → Invalid</p>
        </div>
      </div>
    );
  };
  const CardBrandDemo = ({ color }: { color: SemanticColor }) => {
    const [value, setValue] = React.useState("");

    const brand = getCardBrand(value);

    const brandLogos = {
      visa: "@visa",
      mastercard: "@mastercard",
      amex: "@amex",
      discover: "@discover",
    };

    const suffix = brandLogos[brand as keyof typeof brandLogos]
      ? {
          type: "color-logo" as const,
          name: brandLogos[brand as keyof typeof brandLogos],
        }
      : {
          type: "icon" as const,
          name: "@CreditCard",
        };

    return (
      <Input.Card
        inputId="card-brand-demo"
        value={value}
        className="w-80"
        onChange={(e: any) => setValue(e.target.value)}
        suffix={suffix}
        showValidationMessage={false}
        placeholder="0000 0000 0000 0000"
        color={color}
      />
    );
  };

  const customBrands = [
    {
      name: "paypal",
      pattern: /^7777/,
      maxDigits: 16,
      formattedLength: 19,
    },
  ];

  const CustomBrandDemo = ({ color }: { color: SemanticColor }) => {
    const [value, setValue] = React.useState("");

    const brand = getCardBrand(value, customBrands);

    return (
      <Input.Card
        inputId="custom-card-brand-demo"
        value={value}
        className="w-80"
        customBrands={customBrands}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="Enter your card number"
        color={color}
        showValidationMessage={false}
        suffix={
          brand
            ? {
                type: "color-logo",
                name: brand,
              }
            : {
                type: "icon",
                name: "@CreditCard",
              }
        }
      />
    );
  };

  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="flex flex-col gap-16 p-8">
        {/* ================= BASICS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Card Input Basics
              </h2>

              <p className="text-sm text-gray-600">
                Secure card number input with automatic formatting, brand
                detection and masking support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Default */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Default
                </span>

                <Input.Card {...args} color={getColor(args, globals)} />
              </div>

              {/* Card Number */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Card Number
                </span>

                <Input.Card
                  {...args}
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>

              {/* Required */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Required
                </span>

                <Input.Card
                  {...args}
                  required
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>

              {/* Masked */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Masked
                </span>

                <Input.Card
                  {...args}
                  maskMode="onBlur"
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= CARD BRAND DETECTION ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Card Brand Detection
              </h2>

              <p className="text-sm text-gray-600">
                Type a card number to see the detected card brand update
                automatically.
              </p>
            </div>

            <CardBrandDemo color={getColor(args, globals)} />

            <div className="space-y-1 text-xs text-gray-500">
              <p>Try:</p>
              <p>• Visa: 4111111111111111</p>
              <p>• Mastercard: 5555555555554444</p>
              <p>• AMEX: 378282246310005</p>
              <p>• Discover: 6011111111111117</p>
            </div>
          </section>
        </LazySection>

        {/* ================= CUSTOM CARD BRAND ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Custom Card Brand
              </h2>

              <p className="text-sm text-gray-600">
                Demonstrates adding a custom card brand configuration without
                modifying the component source.
              </p>
            </div>

            <CustomBrandDemo color={getColor(args, globals)} />

            <div className="space-y-1 text-xs text-gray-500">
              <p>Configured custom brand:</p>
              <p>• RuPay: starts with 7777</p>
              <p>• Example: 7777 1234 5678 9012</p>
            </div>
          </section>
        </LazySection>

        {/* ============== MASK MODE ============== */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Mask Mode
              </h2>

              <p className="text-sm text-gray-600">
                Control when the card number is masked for privacy and
                security.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Never */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Never
                </span>

                <Input.Card
                  {...args}
                  maskMode="never"
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />

                <p className="text-xs text-gray-500">
                  Card number remains visible while typing and after blur.
                </p>
              </div>

              {/* On Blur */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  On Blur
                </span>

                <Input.Card
                  {...args}
                  maskMode="onBlur"
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />

                <p className="text-xs text-gray-500">
                  Card number is masked after the input loses focus.
                </p>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= SERVER-SIDE VALIDATION ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Validation
              </h2>

              <p className="text-sm text-gray-600">
                Validate card input using required, pattern, and custom
                validation rules.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Required */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Required
                </span>

                <Input.Card
                  {...args}
                  required
                  validationRules={[
                    {
                      rule: "required",
                      description: "Card number is required",
                      state: "error",
                    },
                  ]}
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>

              {/* Pattern */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Pattern
                </span>

                <Input.Card
                  {...args}
                  validationRules={[
                    {
                      rule: "pattern",
                      value: "^[0-9 ]+$",
                      description: "Only numbers are allowed",
                      state: "error",
                    },
                  ]}
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>

              {/* Custom */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Custom
                </span>

                <Input.Card
                  {...args}
                  validationRules={[
                    {
                      rule: "custom",
                      validator: (value) => {
                        const digits = String(value ?? "").replace(/\D/g, "");

                        return digits.length >= 16;
                      },
                      description:
                        "Card number must contain at least 16 digits",
                      state: "error",
                    },
                  ]}
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>

              {/* Multiple Rules */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Multiple Rules
                </span>

                <Input.Card
                  {...args}
                  validationRules={[
                    {
                      rule: "required",
                      description: "Card number is required",
                      state: "error",
                    },
                    {
                      rule: "pattern",
                      value: "^[0-9 ]+$",
                      description: "Only numbers are allowed",
                      state: "error",
                    },
                  ]}
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= AFFIX SLOTS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Affix Slots
              </h2>

              <p className="text-sm text-gray-600">
                Add content before or after the card input using prefix and
                suffix slots.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Prefix */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Prefix
                </span>

                <Input.Card
                  {...args}
                  prefix={{
                    type: "icon",
                    name: "@CreditCard",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Suffix */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Suffix
                </span>

                <Input.Card
                  {...args}
                  suffix={{
                    type: "icon",
                    name: "@Check",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Prefix + Suffix */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Prefix + Suffix
                </span>

                <Input.Card
                  {...args}
                  prefix={{
                    type: "icon",
                    name: "@CreditCard",
                  }}
                  suffix={{
                    type: "icon",
                    name: "@Check",
                  }}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= AddonS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Addons</h2>

              <p className="text-sm text-gray-600">
                Attach additional controls or content outside the main card
                input.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Prefix Addon */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Prefix Addon
                </span>

                <Input.Card
                  {...args}
                  className="min-w-[18rem]"
                  prefixAddon={{
                    type: "button",
                    size: "xs",
                    prefix: {
                      type: "icon",
                      name: "@CreditCard",
                    },
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Suffix Addon */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Suffix Addon
                </span>

                <Input.Card
                  {...args}
                  className="min-w-[18rem]"
                  suffixAddon={{
                    type: "button",
                    size: "xs",
                    prefix: {
                      type: "icon",
                      name: "@Check",
                    },
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Prefix + Suffix Addon */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Prefix Addon + Suffix Addon
                </span>

                <Input.Card
                  {...args}
                  className="min-w-[18rem]"
                  prefixAddon={{
                    type: "button",
                    size: "xs",
                    prefix: {
                      type: "icon",
                      name: "@CreditCard",
                    },
                  }}
                  suffixAddon={{
                    type: "button",
                    size: "xs",
                    prefix: {
                      type: "icon",
                      name: "@Check",
                    },
                  }}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= STATES ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Card States
              </h2>

              <p className="text-sm text-gray-600">
                Common states for card number entry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Disabled */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Disabled
                </span>

                <Input.Card
                  {...args}
                  disabled
                  placeholder="0000 0000 0000 0000"
                  color={getColor(args, globals)}
                />
              </div>

              {/* Loading */}
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase text-gray-500">
                  Loading
                </span>

                <Input.Card
                  {...args}
                  loading
                  placeholder="0000 0000 0000 0000"
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
