// Showcase ported from origin/input:src/components/Input/stories/Password.stories.tsx (story "Overview", storyName "Showcase / Overview")
import { Input } from "@inventive-ui/components/Input";
import type { InputProps as Props } from "@inventive-ui/components/Input";
import { LazySection, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../../storybook";
import { createSlotDefaultArgs, type SlotControlConfig } from "./slot/slot-controls";
import { getPasswordToggleSuffix } from "./input-utils";
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
] as const;
const CommonDefaults: Partial<SlotControlConfig> = {
  defaultType: "none",
  defaultIcon: {
    name: "@lock",
    size: "md",
  },
  defaultLogo: {
    name: "@placeholder",
    size: "md",
  },
  defaultEmoji: {
    name: "@locked",
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
      name: "@lock",
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
  placeholder: "Enter your password",
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
  showPassword: false,
  checklistState: "checked",
  strengthVariant: "segment",

  ...createSlotDefaultArgs("prefixSlot", prefixSlotConfig),
  ...createSlotDefaultArgs("suffixSlot", suffixSlotConfig),
  ...createSlotDefaultArgs("prefixAddonSlot", prefixAddonSlotConfig),
  ...createSlotDefaultArgs("suffixAddonSlot", suffixAddonSlotConfig),
} as Props;

// Overview story args
const args = {
  ...commonArgs,
  placeholder: "Enter your password",
};

export function PasswordOverview() {
  const globals = {};
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="flex flex-col gap-16">
        {/* ================= PASSWORD BASICS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Password Basics
              </h2>
              <p className="text-sm text-gray-600">
                Standard password input with optional label and icon support
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Default
                </span>
                <Input.Password
                  {...args}
                  floatingLabel={undefined}
                  placeholder="Enter your password"
                  color={getColor(args, globals)}
                  className="w-80"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  With Label
                </span>
                <Input.Password
                  {...args}
                  color={getColor(args, globals)}
                  className="w-80"
                  floatingLabel={{
                    type: "label-float",
                    label: "Password",
                    float: "in",
                    prefix: {
                      type: "icon",
                      name: "@lock",
                      filled: false,
                    },
                  }}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= PASSWORD TOGGLE ================= */}

        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Password Toggle
              </h2>
              <p className="text-sm text-gray-600">
                Allows users to switch between hidden and visible password
                input suffix.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <Input.Password
                  {...args}
                  color={getColor(args, globals)}
                  className="w-80"
                  value="test"
                  placeholder="Enter your password"
                  suffix={getPasswordToggleSuffix(false)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= STRENGTH BAR ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Password Strength Indicator
              </h2>
              <p className="text-sm text-gray-600">
                Visual feedback that reflects the strength of the entered
                password
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                "segment",
                "linear",
                "line-dots",
                "dots",
                "square",
                "emoji",
              ].map((mode) => (
                <div key={mode} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {mode} mode
                  </span>

                  <Input.Password
                    {...args}
                    color={getColor(args, globals)}
                    className="w-80"
                    strengthVariant={mode as any}
                    maxLevels={5}
                    showValidationMessage={false}
                    strengthLevels={[
                      { percentage: [0, 39], color: "danger" },
                      { percentage: [40, 74], color: "warning" },
                      { percentage: [75, 100], color: "success" },
                    ]}
                    validationRules={[
                      {
                        rule: "min",
                        value: 8,
                      },
                      {
                        rule: "pattern",
                        value: /[A-Z]/,
                      },
                      {
                        rule: "pattern",
                        value: /[a-z]/,
                      },
                      {
                        rule: "pattern",
                        value: /[0-9]/,
                      },
                      {
                        rule: "pattern",
                        value: /[!@#$%^&*(),.?\":{}|<>]/,
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= CHECKLIST ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Password Checklist
              </h2>
              <p className="text-sm text-gray-600">
                Rule-based checklist indicating password validity with global
                states
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { state: "checked", label: "Checked" },
                { state: "disabled", label: "Disabled" },
                { state: "strike", label: "Strike" },
                { state: "disabled-strike", label: "Disabled + Strike" },
              ].map(({ state, label }) => (
                <div key={state} className="space-y-2">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {label} state
                  </span>

                  <Input.Password
                    {...args}
                    color={getColor(args, globals)}
                    className="w-80"
                    checklistState={state as any}
                    maxLevels={0}
                    showValidationMessage={false}
                    validationRules={[
                      {
                        rule: "min",
                        value: 8,
                        checklistLabel: "At least 8 characters",
                      },
                      {
                        rule: "pattern",
                        value: /[A-Z]/,
                        checklistLabel: "One uppercase letter",
                      },
                      {
                        rule: "pattern",
                        value: /[a-z]/,
                        checklistLabel: "One lowercase letter",
                      },
                      {
                        rule: "pattern",
                        value: /[0-9]/,
                        checklistLabel: "One number",
                      },
                      {
                        rule: "pattern",
                        value: /[!@#$%^&*(),.?\":{}|<>]/,
                        checklistLabel: "One special character",
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= TOOLTIP  ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Password Tooltip
              </h2>
              <p className="text-sm text-gray-600">
                Combined experience with strength indicator, checklist tooltip
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Tooltip enabled */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  With Tooltip
                </span>

                <Input.Password
                  {...args}
                  color={getColor(args, globals)}
                  className="w-80"
                  checklistState="checked"
                  strengthVariant="segment"
                  maxLevels={5}
                  strengthLevels={[
                    { percentage: [0, 39], color: "danger" },
                    { percentage: [40, 74], color: "warning" },
                    { percentage: [75, 100], color: "success" },
                  ]}
                  validationRules={[
                    {
                      rule: "min",
                      value: 8,
                      checklistLabel: "At least 8 characters",
                    },
                    {
                      rule: "pattern",
                      value: /[A-Z]/,
                      checklistLabel: "One uppercase letter",
                    },
                    {
                      rule: "pattern",
                      value: /[a-z]/,
                      checklistLabel: "One lowercase letter",
                    },
                    {
                      rule: "pattern",
                      value: /[0-9]/,
                      checklistLabel: "One number",
                    },
                    {
                      rule: "pattern",
                      value: /[!@#$%^&*(),.?\":{}|<>]/,
                      checklistLabel: "One special character",
                    },
                  ]}
                  passwordTooltip={{
                    placement: "bottom",
                    appearance: "soft",
                    showArrow: true,
                    maxWidth: 240,
                    trigger: "focus",
                    className: "bg-white text-black",
                  }}
                />
              </div>
            </div>
          </section>
        </LazySection>
      </div>
    </ShowcaseShell>
  );
}
