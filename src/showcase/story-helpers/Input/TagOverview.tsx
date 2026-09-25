// @ts-nocheck
// Ported from origin/input:src/components/Input/stories/Tag.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/input:src/components/Input/stories/Tag.stories.tsx (story "Overview", storyName "Showcase / Overview")
import React from "react";
import { Input } from "@inventive-ui/components/Input";
import type { InputProps as Props } from "@inventive-ui/components/Input";
import { LazySection, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../../storybook";
import { SlotRenderer } from "@inventive-ui/framework/slots";
import { getColor } from "./input.story-utils";

const commonArgs = {
  disabled: false,
  loading: false,
  placeholder: "Type & press Enter",
  allowClear: false,
  required: false,
  focusStyle: {
    variant: "none",
    appearance: "none",
    color: "",
  },
  appearance: "dualTone",
  variant: "solid",
  className: "",
  showValidationMessage: true,
  fullWidth: true,
  editable: false,
  mode: "tag",
  tagVariant: "default",
  layout: "inline",
  counter: false,
  counterPlacement: "bottom",
  tagInput: {
    type: "tag-input",
    cTag: "default-tag-input",
    appearance: "soft",
    size: "xs",
    variant: "solid-outline",
  },
  tag: {
    type: "tag",
    cTag: "Customize-tag",
    appearance: "soft",
    size: "xs",
  },
} as Props;


// Overview story args
const args = {
  ...commonArgs,
  initialTags: [
    { value: "React" },
    { value: "Vue" },
    { value: "JavaScript" },
  ],
};

export function TagOverview() {
  const globals = {};
  const [copied, setCopied] = React.useState(false);
  const ControlledTagExample = ({ args, color }: any) => {
    const [tags, setTags] = React.useState([
      { value: "Vue" },
      { value: "TypeScript" },
    ]);

    return (
      <Input.Tag
        {...args}
        initialTags={tags}
        setTags={setTags}
        placeholder="Controlled tags"
        color={color}
      />
    );
  };
  return (
    <ShowcaseShell globals={globals} className={SHOWCASE_CONTAINER_CLASS}>
      <div className="flex flex-col p-8 gap-16">
        {/* ================= BASICS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                TagInput Basics
              </h2>

              <p className="text-sm text-gray-600">
                Standard tag input with chip support, validation and editing
              </p>
            </div>

            <div className="grid grid-cols gap-8">
              {/* Default */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Default
                </span>

                <Input.Tag {...args} color={getColor(args, globals)} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Floating Label
                </span>

                <Input.Tag
                  {...args}
                  floatingLabel={{
                    type: "label-float",
                    label: "Tags",
                    float: "in",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Email Tags
                </span>

                <Input.Tag
                  {...args}
                  tagVariant="email"
                  initialTags={[
                    { value: "react@company.com" },
                    { value: "vue@company.com" },
                  ]}
                  placeholder="Add email"
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= REQUIRED ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Required & Validation
              </h2>

              <p className="text-sm text-gray-600">
                Validation rules with inline feedback states
              </p>
            </div>

            <div className="grid grid-cols gap-6">
              {/* Required */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Required
                </span>

                <Input.Tag
                  {...args}
                  required
                  initialTags={[]}
                  color={getColor(args, globals)}
                />
                <span className="block text-sm text-gray-500">
                  At least one tag is required
                </span>
              </div>

              {/* Max Tags */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Max Tags
                </span>

                <Input.Tag
                  {...args}
                  initialTags={[{ value: "React" }]}
                  validationRules={[
                    {
                      rule: "maxTags",
                      value: 3,
                      description: "Maximum 3 tags allowed",
                      state: "error",
                    },
                  ]}
                  color={getColor(args, globals)}
                />
                <span className="block text-sm text-gray-500">
                  Maximum 3 tags allowed
                </span>
              </div>

              {/* Min Characters */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Min Characters
                </span>

                <Input.Tag
                  {...args}
                  validationRules={[
                    {
                      rule: "min",
                      value: 3,
                      description: "Minimum 3 characters required",
                      state: "error",
                    },
                  ]}
                  color={getColor(args, globals)}
                />
                <span className="block text-sm text-gray-500">
                  Each tag needs 3 character
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= EDITABLE ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Editable Tags
              </h2>
              <p className="text-sm text-gray-600">
                Tags can be edited inline using double click or keyboard
                navigation
              </p>
            </div>

            <div className="space-y-2">
              <Input.Tag {...args} editable color={getColor(args, globals)} />
              <span className="block text-sm text-gray-500">
                Use the arrow keys to navigate and press Enter to edit
              </span>
            </div>
          </section>
        </LazySection>

        {/* ================= COLOR ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Colored Tags
              </h2>
              <p className="text-sm text-gray-600">
                Each tag can have its own semantic color
              </p>
            </div>

            <Input.Tag
              {...args}
              color={getColor(args, globals)}
              variant="outline"
              tagInput={{
                type: "tag-input",
                cTag: "default-tag-input",
                appearance: "soft",
                size: "xs",
              }}
              initialTags={[
                { value: "React", color: "green" },
                { value: "Vue", color: "brand" },
                { value: "JavaScript", color: "info" },
              ]}
            />
          </section>
        </LazySection>

        {/* ================= CLEAR ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Clear Action
              </h2>
              <p className="text-sm text-gray-600">
                Allows users to remove all tags with a single action
              </p>
            </div>

            <Input.Tag
              {...args}
              suffix={{
                type: "button",
                variant: "ghost",
                icon: {
                  type: "icon",
                  name: "@close",
                },
                className: "p-0",
                action: "clear",
              }}
            />
            <span className="block text-sm text-gray-500">
              Click the clear button to remove all tags
            </span>
          </section>
        </LazySection>

        {/* ================= STYLE VARIANTS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Style Variants
              </h2>

              <p className="text-sm text-gray-600">
                Different visual styles for various use cases
              </p>
            </div>

            <div className="grid grid-cols gap-6">
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

                  <Input.Tag
                    {...args}
                    tagInput={{
                      type: "tag-input",
                      cTag: "default-tag-input",
                      appearance: "soft",
                      size: "xs",
                    }}
                    variant={variant as any}
                    color={getColor(args, globals)}
                  />
                </div>
              ))}
            </div>
          </section>
        </LazySection>

        {/* ================= COMMA SEPARATED INPUT ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Comma Separated Input
              </h2>

              <p className="text-sm text-gray-600">
                Add emails separated by commas
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Email Tags
              </span>

              <Input.Tag
                {...args}
                tagVariant="email"
                placeholder="Type email and press comma"
                initialTags={[
                  { value: "john@example.com" },
                  { value: "sara@example.com" },
                ]}
                color={getColor(args, globals)}
              />
            </div>
          </section>
        </LazySection>

        {/* ================= MAX TAGS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Max Tags Limit
              </h2>
              <p className="text-sm text-gray-600">
                Limits the number of tags that can be added
              </p>
            </div>

            <Input.Tag
              {...args}
              color={getColor(args, globals)}
              validationRules={[
                {
                  rule: "maxTags",
                  value: 3,
                  description: "Max 3 Invite guests",
                  state: "error",
                },
              ]}
              counter
              initialTags={[{ value: "abc@company.com" }]}
            />
            <span className="block text-sm text-gray-500">
              Invite guests (max 3)
            </span>
          </section>
        </LazySection>

        {/* ================= READONLY ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Readonly</h2>

              <p className="text-sm text-gray-600">
                Display tags in a non-editable readonly state
              </p>
            </div>

            <div className="grid grid-cols gap-6">
              {/* Default Readonly */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Default Readonly
                </span>

                <Input.Tag
                  {...args}
                  readOnly
                  initialTags={[{ value: "React" }, { value: "Vue" }]}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= CONTROLLED TAG INPUT ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Controlled Tag Input
              </h2>

              <p className="text-sm text-gray-600">
                Manage tags using external React state
              </p>
            </div>

            <ControlledTagExample
              args={args}
              color={getColor(args, globals)}
            />
          </section>
        </LazySection>

        {/* ================= LAYOUT VARIATIONS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Layout Variations
              </h2>

              <p className="text-sm text-gray-600">
                Display tags inline or stack the input below tags
              </p>
            </div>

            <div className="grid grid-cols gap-6">
              {/* Inline Layout */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Inline Layout
                </span>

                <Input.Tag
                  {...args}
                  layout="inline"
                  initialTags={[
                    { value: "React" },
                    { value: "TypeScript" },
                    { value: "Storybook" },
                  ]}
                  tagInput={{
                    type: "tag-input",
                    cTag: "default-tag-input",
                    appearance: "soft",
                    size: "xs",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Stack Layout */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Stack Layout
                </span>

                <Input.Tag
                  {...args}
                  layout="stack"
                  initialTags={[
                    { value: "React" },
                    { value: "TypeScript" },
                    { value: "Storybook" },
                  ]}
                  tagInput={{
                    type: "tag-input",
                    cTag: "default-tag-input",
                    appearance: "soft",
                    size: "xs",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* External-top Layout */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  External-top Layout
                </span>

                <Input.Tag
                  {...args}
                  layout="external-top"
                  initialTags={[
                    { value: "React" },
                    { value: "TypeScript" },
                    { value: "Storybook" },
                  ]}
                  tagInput={{
                    type: "tag-input",
                    cTag: "default-tag-input",
                    appearance: "soft",
                    size: "xs",
                  }}
                  color={getColor(args, globals)}
                />
              </div>

              {/* External Layout-bottom */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  External-bottom Layout
                </span>

                <Input.Tag
                  {...args}
                  layout="external-bottom"
                  initialTags={[
                    { value: "React" },
                    { value: "TypeScript" },
                    { value: "Storybook" },
                  ]}
                  tagInput={{
                    type: "tag-input",
                    cTag: "default-tag-input",
                    appearance: "soft",
                    size: "xs",
                  }}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= COUNTERS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Counters & Limits
              </h2>

              <p className="text-sm text-gray-600">
                Character count and tag limits examples
              </p>
            </div>

            <div className="grid grid-cols gap-6">
              {/* Max Characters */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Max Characters
                </span>

                <Input.Tag
                  {...args}
                  counter
                  counterPlacement="bottom"
                  validationRules={[
                    {
                      rule: "max",
                      value: 12,
                      description: "Maximum 12 characters allowed",
                      state: "error",
                    },
                  ]}
                  placeholder="Type tag..."
                  color={getColor(args, globals)}
                />
              </div>

              {/* Min Characters */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Min Characters
                </span>

                <Input.Tag
                  {...args}
                  counter
                  counterPlacement="bottom"
                  validationRules={[
                    {
                      rule: "min",
                      value: 3,
                      description: "Minimum 3 characters required",
                      state: "error",
                    },
                  ]}
                  placeholder="Minimum 3 chars"
                  color={getColor(args, globals)}
                />
              </div>

              {/* Max Tags */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Max Tags
                </span>

                <Input.Tag
                  {...args}
                  counter
                  counterPlacement="bottom"
                  initialTags={[{ value: "React" }, { value: "Vue" }]}
                  validationRules={[
                    {
                      rule: "maxTags",
                      value: 5,
                      description: "Maximum 5 tags allowed",
                      state: "error",
                    },
                  ]}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Min Tags */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Min Tags
                </span>

                <Input.Tag
                  {...args}
                  counter
                  counterPlacement="bottom"
                  validationRules={[
                    {
                      rule: "minTags",
                      value: 2,
                      description: "Minimum 2 tags required",
                      state: "error",
                    },
                  ]}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= COUNTER PLACEMENT ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Counter Placement
              </h2>

              <p className="text-sm text-gray-600">
                Display counters at the top or bottom of the input
              </p>
            </div>

            <div className="grid grid-cols gap-10">
              {/* Bottom Counter */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Bottom Placement
                </span>

                <Input.Tag
                  {...args}
                  counter
                  counterPlacement="bottom"
                  validationRules={[
                    {
                      rule: "maxTags",
                      value: 5,
                      description: "Maximum 5 tags allowed",
                      state: "error",
                    },
                  ]}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Top Counter */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Top Placement
                </span>

                <div className="pt-6">
                  <Input.Tag
                    {...args}
                    counter
                    counterPlacement="top"
                    validationRules={[
                      {
                        rule: "maxTags",
                        value: 5,
                        description: "Maximum 5 tags allowed",
                        state: "error",
                      },
                    ]}
                    color={getColor(args, globals)}
                  />
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= PASTE TAGS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Paste Tags</h2>

              <p className="text-sm text-gray-600">
                Paste comma-separated values and automatically convert them
                into chips
              </p>
            </div>

            <div className="space-y-4">
              {/* Copy Example */}
              <div className="rounded-xl border border-gray-200 bg-gray-100 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 overflow-auto">
                    <span className="text-xs font-medium text-gray-500 uppercase block mb-2">
                      Example To Paste
                    </span>

                    <code className="text-sm text-gray-800 whitespace-nowrap">
                      React, Chakra UI, TypeScript, Storybook, Tailwind CSS
                    </code>
                  </div>

                  <button
                    type="button"
                    className="rounded-md border-none"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "React, Chakra UI, TypeScript, Storybook, Tailwind CSS",
                      );
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 1000);
                    }}
                  >
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "ghost",
                        appearance: copied ? "soft" : "dualTone",
                        prefix: {
                          type: "icon",
                          name: copied ? "@check" : "@copy",
                        },
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* Tag Input */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Paste Inside Input
                </span>

                <Input.Tag
                  {...args}
                  placeholder="Paste tags here..."
                  initialTags={[]}
                  tagInput={{
                    type: "tag-input",
                    cTag: "default-tag-input",
                    appearance: "soft",
                    size: "xs",
                  }}
                  color={getColor(args, globals)}
                />
                <span className="block text-sm text-gray-500">
                  Paste comma-separated values to generate chips automatically
                </span>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= EXPAND / COLLAPSE TAGS ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Max Visible Tags (Expand / Collapse)
              </h2>

              <p className="text-sm text-gray-600">
                Shows limited tags with “+X” overflow. Click expand to view
                all tags and collapse back.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Max Visible = 3
              </span>

              <Input.Tag
                {...args}
                maxVisibleTags={3}
                initialTags={[
                  { value: "React" },
                  { value: "Vue" },
                  { value: "Angular" },
                  { value: "Svelte" },
                  { value: "Next.js" },
                  { value: "Remix" },
                ]}
                tagInput={{
                  type: "tag-input",
                  cTag: "default-tag-input",
                  appearance: "soft",
                  size: "xs",
                }}
                color={getColor(args, globals)}
              />
            </div>
          </section>
        </LazySection>

        {/* ================= LONG TAG SUPPORT ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Long Tag Support
              </h2>

              <span className="text-sm text-gray-600">
                Long tags should truncate with ellipsis
              </span>
            </div>

            <div className="grid grid-cols gap-6">
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Long Emails & Text
                </span>

                <Input.Tag
                  {...args}
                  className="w-80"
                  initialTags={[
                    { value: "react-developer-long-email@example.com" },
                    {
                      value:
                        "typescript-advanced-patterns-and-design-systems-team@company.com",
                    },
                    {
                      value:
                        "storybook-component-library-with-slot-based-architecture@ui.dev",
                    },
                    { value: "chakra-ui-powerful@design-system.io" },
                    {
                      value:
                        "tailwindcss-utility-first-css-framework-for-modern-ui@frontend.io",
                    },
                  ]}
                  tagInput={{
                    type: "tag-input",
                    cTag: "default-tag-input",
                    appearance: "soft",
                    size: "xs",
                  }}
                  color={getColor(args, globals)}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* ================= DISABLED & LOADING ================= */}
        <LazySection>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Disabled & Loading
              </h2>

              <p className="text-sm text-gray-600">
                Non-interactive and loading input states
              </p>
            </div>

            <div className="grid grid-cols gap-6">
              {/* Disabled */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Disabled
                </span>

                <Input.Tag
                  {...args}
                  disabled
                  initialTags={[{ value: "React" }, { value: "TypeScript" }]}
                  color={getColor(args, globals)}
                />
              </div>

              {/* Loading */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  Loading
                </span>

                <Input.Tag
                  {...args}
                  loading
                  initialTags={[{ value: "React" }, { value: "TypeScript" }]}
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
