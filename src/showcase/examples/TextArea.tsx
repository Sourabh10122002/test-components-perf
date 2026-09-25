// Showcase ported from origin/textarea:src/components/Textarea/stories/TextArea.stories.tsx (story "Overview"; no story named Showcase exists)
import { TextArea } from "@inventive-ui/components/Textarea";
import type { TextAreaProps } from "@inventive-ui/components/Textarea";
import { LazySection } from "../storybook";
import { getColor } from "../story-helpers/TextArea/input.story-utils";

const commonArgs = {
  disabled: false,
  loading: false,
  placeholder: "Enter your Message",
  allowClear: false,
  required: false,
  focusStyle: {
    variant: "none",
    appearance: "none",
    color: "",
  },
  appearance: "dualTone",
  variant: undefined,
  rows: 2,
  cols: 50,
  className: "",
  counter: false,
  counterPlacement: "bottom",
  resize: "vertical",
  showValidationMessage: true,
} as TextAreaProps;

// Overview story args
const args = {
  ...commonArgs,
  size: "base",
  placeholder: "Enter your message",
} as TextAreaProps;

export default function TextAreaShowcase() {
  const globals = {};
  return (
    <div className="flex flex-col gap-16">
      {/* ================= BASICS ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Textarea Basics
            </h2>
            <p className="text-sm text-gray-600">
              Standard textarea with optional label and configuration support
            </p>
          </div>

          <div className="grid grid-cols gap-8">
            {/* Default */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Default
              </span>
              <TextArea
                {...args}
                color={getColor(args, globals)}
                className="mt-3"
              />
            </div>

            {/* With Label */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                With Label
              </span>
              <TextArea
                {...args}
                variant="outline"
                floatingLabel={{ label: "Message", float: "on" }}
                placeholder="Message"
                color={getColor(args, globals)}
                className="mt-3"
              />
            </div>

            {/* Label With Icon */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Label With Icon
              </span>
              <TextArea
                {...args}
                variant="outline"
                floatingLabel={{
                  label: "Message",
                  float: "on",
                  prefix: {
                    type: "icon",
                    library: "lucide",
                    name: "message-square",
                  },
                }}
                placeholder="Message"
                color={getColor(args, globals)}
                className="mt-3"
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= REQUIRED & Optional ================= */}
      <LazySection>
        <section className="space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Required vs Optional
            </h2>
            <p className="text-sm text-gray-600">
              Comparison between required and optional textarea behavior
            </p>
          </div>

          <div className="grid grid-cols gap-6">
            {/* Required */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Required
              </span>

              <TextArea
                {...args}
                required
                variant="outline"
                floatingLabel={{ label: "Required Message", float: "on" }}
                placeholder="Required field"
                color={getColor(args, globals)}
                className="mt-3"
              />
            </div>

            {/* Optional */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Optional
              </span>

              <TextArea
                {...args}
                required={false}
                variant="outline"
                floatingLabel={{ label: "Optional Message", float: "on" }}
                placeholder="Optional field"
                color={getColor(args, globals)}
                className="mt-3"
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= SIZE VARIATIONS ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Size Variations
            </h2>
            <p className="text-sm text-gray-600">
              Different textarea sizes for layout flexibility
            </p>
          </div>

          <div className="grid grid-cols gap-6">
            {["xs", "sm", "base", "lg", "xl"].map((size) => (
              <div key={size}>
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {size}
                </span>

                <TextArea
                  {...args}
                  size={size as any}
                  rows={2}
                  cols={50}
                  resize="vertical"
                  placeholder={`Size ${size}`}
                  color={getColor(args, globals)}
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* =============== Varients ================ */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Style Variants
            </h2>
            <p className="text-sm text-gray-600">
              Different visual styles for various use cases
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "solid",
              "outline",
              "underline",
              "solid-outline",
              "solid-underline",
              "ghost",
            ].map((variant) => (
              <TextArea
                key={variant}
                {...args}
                variant={variant as any}
                rows={2}
                cols={40}
                placeholder={variant}
                color={getColor(args, globals)}
              />
            ))}
          </div>
        </section>
      </LazySection>

      {/* =============== floating varients ================ */}
      <LazySection>
        <div className="grid grid-cols gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Floating Variants
            </h2>
            <p className="text-sm text-gray-600">
              Different floating label behaviors: in, on, and over
            </p>
          </div>

          {/* Float: In */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-gray-500 uppercase">
              Float: In
            </span>
            <TextArea
              {...args}
              variant="outline"
              floatingLabel={{ label: "Message", float: "in" }}
              placeholder=" "
              className="mt-3"
              color={getColor(args, globals)}
            />
          </div>

          {/* Float: On */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-gray-500 uppercase">
              Float: On
            </span>
            <TextArea
              {...args}
              variant="outline"
              floatingLabel={{ label: "Message", float: "on" }}
              placeholder=" "
              className="mt-3"
              color={getColor(args, globals)}
            />
          </div>

          {/* Float: Over */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-gray-500 uppercase">
              Float: Over
            </span>
            <TextArea
              {...args}
              variant="outline"
              floatingLabel={{ label: "Message", float: "over" }}
              placeholder=" "
              className="mt-4"
              color={getColor(args, globals)}
            />
          </div>
        </div>
      </LazySection>

      {/* ================= RESIZE MODES ================= */}

      <LazySection>
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Visual comparison of all resize behaviors
            </h2>
          </div>

          <div className="overflow-hidden rounded-md border border-gray-300">
            <table className="w-full border-collapse">
              {/* Header */}
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/4 border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Resize
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    key: "vertical",
                    label: "Vertical",
                    description: "Resize vertically only",
                  },
                  {
                    key: "horizontal",
                    label: "Horizontal",
                    description: "Resize horizontally only",
                  },
                  {
                    key: "both",
                    label: "Both",
                    description: "Resize in both directions",
                  },
                  {
                    key: "none",
                    label: "None",
                    description: "Resizing disabled",
                  },
                  {
                    key: "auto",
                    label: "Auto",
                    description: "Automatically grows based on content",
                  },
                  {
                    key: "auto-5",
                    label: "Auto (Max 5 Rows)",
                    description: "Auto-expands up to 5 rows",
                  },
                ].map((item) => (
                  <tr key={item.key} className="bg-white">
                    {/* Left Column */}
                    <td className="border border-gray-300 px-4 py-6 align-top">
                      <div className="text-sm font-semibold text-gray-900">
                        {item.label}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        {item.description}
                      </div>
                    </td>

                    {/* Right Column */}
                    <td className="border border-gray-300 px-6 py-6">
                      <TextArea
                        {...args}
                        resize={item.key as any}
                        rows={item.key.includes("auto") ? 2 : 3}
                        cols={60}
                        placeholder={`${item.key} resize`}
                        color={getColor(args, globals)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </LazySection>

      {/* ================= MAX LENGTH ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Max Length Validation
            </h2>
            <p className="text-sm text-gray-600">
              Textarea with character limit, counter, and validation state
              handling
            </p>
          </div>

          <div className="grid grid-cols gap-6">
            {/* Max Length Example */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Max 150 Characters
              </span>

              <TextArea
                {...args}
                size="base"
                counter
                rows={5}
                cols={60}
                resize="none"
                counterPlacement="bottom"
                validationRules={[
                  {
                    rule: "max",
                    value: 150,
                    description: "Maximum 150 characters allowed",
                    state: "error",
                  },
                ]}
                placeholder="Enter your message"
                color={getColor(args, globals)}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= ROW VARIATIONS ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Row Variations
            </h2>
            <p className="text-sm text-gray-600">
              Adjust height using rows property
            </p>
          </div>

          <div className="grid grid-cols gap-8">
            {[2, 4, 6].map((row) => (
              <div key={row} className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase">
                  {row} rows
                </span>

                <TextArea
                  {...args}
                  rows={row}
                  cols={80}
                  resize="vertical"
                  color={getColor(args, globals)}
                />
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* ================= CHARACTER LIMIT ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Character Limit
            </h2>
            <p className="text-sm text-gray-600">
              Restrict input length using maxLength
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs mb-3 font-medium text-gray-500 uppercase">
              Max 120 characters
            </span>

            <TextArea
              {...args}
              validationRules={[
                {
                  rule: "max",
                  value: 120,
                  description: "Maximum 120 characters allowed",
                  state: "error",
                },
              ]}
              rows={5}
              cols={60}
              resize="none"
              counter={true}
              counterPlacement="bottom"
              color={getColor(args, globals)}
            />
          </div>
        </section>
      </LazySection>

      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Character Counter
            </h2>
            <p className="text-sm text-gray-600">
              Displays character count in different positions
            </p>
          </div>

          <div className="grid grid-cols gap-6">
            {["top", "inline", "bottom"].map((position) => (
              <TextArea
                key={position}
                {...args}
                rows={2}
                cols={50}
                validationRules={[
                  {
                    rule: "max",
                    value: 50,
                    description: "",
                    // state: { undefined },
                  },
                ]}
                counter={true}
                resize="none"
                counterPlacement={position as any}
                color={getColor(args, globals)}
              />
            ))}
          </div>
        </section>
      </LazySection>

      {/* ================= Invalid state ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Invalid State
            </h2>
            <p className="text-sm text-gray-600">
              Textarea displaying validation errors and invalid states
            </p>
          </div>

          <div className="grid grid-cols gap-6">
            {/* Invalid State */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Invalid Textarea
              </span>

              <TextArea
                {...args}
                variant="outline"
                size="base"
                rows={4}
                placeholder="Enter message"
                invalid
                color={getColor(args, globals)}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= INLINE MESSAGE ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Inline Message
            </h2>
            <p className="text-sm text-gray-600">
              Validation and feedback message support
            </p>
          </div>

          <TextArea
            {...args}
            inlineMessage={{
              description: "This is an inline message",
              state: "error",
            }}
            rows={4}
            showValidationMessage={true}
            color={getColor(args, globals)}
          />
        </section>
      </LazySection>

      {/* ================= PREFIX & SUFFIX ================= */}
      <LazySection>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Prefix & Suffix
            </h2>
            <p className="text-sm text-gray-600">
              Textarea with prefix and suffix slots for contextual actions or
              indicators
            </p>
          </div>

          <div className="grid grid-cols gap-6">
            {/* Prefix Icon */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                With Prefix Icon
              </span>

              <TextArea
                {...args}
                variant="outline"
                size="base"
                rows={4}
                placeholder="Enter message"
                prefix={{
                  type: "icon",
                  library: "lucide",
                  name: "message-square",
                }}
                color={getColor(args, globals)}
                className="mt-3"
              />
            </div>

            {/* Prefix + Suffix */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                Prefix + Suffix
              </span>

              <TextArea
                {...args}
                variant="outline"
                size="base"
                rows={1}
                resize="auto"
                placeholder="Enter message"
                prefix={{
                  type: "icon",
                  library: "lucide",
                  name: "message-square",
                }}
                suffix={{
                  type: "button",
                  prefix: { type: "icon", name: "@send", library: "lucide" },
                  variant: "ghost",
                  className: "p-0",
                  size: "sm",
                }}
                color={getColor(args, globals)}
                className="mt-3"
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= STATES ================= */}
      <LazySection>
        <section className="space-y-8">
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">
              Textarea States
            </h2>
            <p className="text-sm text-gray-600">
              Demonstrates disabled, loading, and validation states for
              textareas
            </p>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Disabled */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Disabled
              </label>
              <TextArea
                {...args}
                disabled
                rows={2}
                cols={40}
                resize="none"
                placeholder="This textarea is disabled"
                color={getColor(args, globals)}
              />
            </div>

            {/* Loading */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Loading
              </label>
              <TextArea
                {...args}
                loading
                rows={2}
                cols={35}
                placeholder="Loading..."
                color={getColor(args, globals)}
              />
            </div>

            {/* Success */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Success
              </label>
              <TextArea
                {...args}
                state="success"
                resize="none"
                rows={2}
                cols={35}
                placeholder="Looks good!"
                color={getColor(args, globals)}
              />
            </div>

            {/* error */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Error
              </label>
              <TextArea
                {...args}
                state="error"
                resize="none"
                rows={2}
                cols={35}
                placeholder="There is an error"
                color={getColor(args, globals)}
              />
            </div>

            {/* Warning */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Warning
              </label>
              <TextArea
                {...args}
                state="warning"
                resize="none"
                rows={2}
                cols={35}
                placeholder="Be careful!"
                color={getColor(args, globals)}
              />
            </div>

            {/* Info */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Info
              </label>
              <TextArea
                {...args}
                state="info"
                resize="none"
                rows={2}
                cols={35}
                placeholder="Some info here"
                color={getColor(args, globals)}
              />
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
