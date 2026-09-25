// Showcase ported from origin/label:src/components/Label/stories/Label.stories.tsx
import type { LabelProps } from "@inventive-ui/components/Label";
import type { SemanticColor } from "@inventive-ui/framework";
import { getStorybookAccentColorKeys } from "../storybook";
import { Label } from "@inventive-ui/components/Label";
import { LazySection } from "../storybook";

/**
 * Label Component Stories
 * Interactive Storybook stories showcasing all Label component props and variations
 */

//  * only-Story args
type LabelStoryArgs = LabelProps & {
  color?: SemanticColor;
};

//  * Meta

// Utility: pick color from args or globals.themeColor
const getColor = (args: LabelStoryArgs, globals: any) =>
  args.color || globals.themeColor;

const commonArgs = {
  align: "start",
  label: "This is a Label",
  description: "This description provides additional context or guidance.",
  size: "base",
  disabled: false,
  invalid: false,
  colon: false,
  adaptive: false,
  children: undefined,

  // Updated required / optional
  required: true,
  requiredIndicator: "*",
  optionalIndicator: "",
  indicatorPlacement: "end",

  infoTip: {
    type: "info-tip",
    icon: { type: "icon", name: "@info" },
    placement: "end",
  },
} as LabelProps;

const buildIndicatorProps = (args: LabelStoryArgs) => {
  const props: Partial<LabelProps> = {};

  // ===== REQUIRED / OPTIONAL =====
  props.required = args.required;
  props.requiredIndicator = args.requiredIndicator ?? "*";
  props.optionalIndicator = args.optionalIndicator;
  props.indicatorPlacement = args.indicatorPlacement ?? "start";

  return props;
};

// Main interactive story with all controls

export default function LabelShowcase() {
  const globals: Record<string, any> = {};
  const args = { ...commonArgs, as: "label" } as LabelProps;
  const color = getColor(args, globals);
  const indicatorProps = buildIndicatorProps(args);

  return (
    <div className="flex flex-col gap-12 p-8">
      {/* ================= SIZES ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Sizes</h3>
          <div className="flex flex-col gap-3">
            {(["xs", "sm", "base", "lg", "xl"] as const).map((size) => (
              <Label
                key={size}
                {...args}
                {...indicatorProps}
                size={size}
                color={color}
                label={`Label size – ${size.toUpperCase()}`}
              />
            ))}
          </div>
        </section>
      </LazySection>

      {/* ================= ALIGNMENT ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Align</h3>
          <div className="flex flex-col gap-3">
            <Label
              {...args}
              {...indicatorProps}
              align="start"
              color={color}
              label="Start aligned label"
            />
            <Label
              {...args}
              {...indicatorProps}
              align="end"
              color={color}
              label="End aligned label"
            />
          </div>
        </section>
      </LazySection>

      {/* ================= INDICATORS ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Indicators</h3>
          <Label
            {...args}
            {...indicatorProps}
            color={color}
            label="Required field"
            required
            indicatorPlacement="end"
          />

          <Label
            {...args}
            color={color}
            label="Optional field"
            required={false}
            optionalIndicator="(optional)"
            indicatorPlacement="end"
          />
        </section>
      </LazySection>

      {/* ================= INDICATOR PLACEMENT ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold">Indicator Placement</h3>
            <p className="text-sm text-muted-foreground">
              Control where the required/optional indicator appears relative
              to the label.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Required - Start */}
            <Label
              {...args}
              color={color}
              label="Required (start)"
              required
              indicatorPlacement="start"
            />

            {/* Required - End */}
            <Label
              {...args}
              color={color}
              label="Required (end)"
              required
              indicatorPlacement="end"
            />

            {/* Optional - Start */}
            <Label
              {...args}
              color={color}
              label="Optional (start)"
              required={false}
              optionalIndicator="(optional)"
              indicatorPlacement="start"
            />

            {/* Optional - End */}
            <Label
              {...args}
              color={color}
              required={false}
              label="Optional (end)"
              optionalIndicator="(optional)"
              indicatorPlacement="end"
            />
          </div>
        </section>
      </LazySection>

      {/* ================= STATES ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">States</h3>

          <Label {...args} color={color} label="Default label" />

          <Label {...args} color={color} label="Disabled label" disabled />

          <Label
            {...args}
            {...indicatorProps}
            color={color}
            label="Invalid label"
            invalid
            description="This field has an error"
          />
        </section>
      </LazySection>

      {/* ================= VISUALLY HIDDEN ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold">Visually Hidden</h3>
            <p className="text-sm text-muted-foreground">
              Required indicator and description are hidden visually but
              remain accessible to screen readers.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Label
              {...args}
              color={color}
              label="Accessible meta (visually hidden)"
              visuallyHidden
            />

            <input
              placeholder="Input with visually hidden indicator & description"
              className="border p-2 rounded"
            />
          </div>
        </section>
      </LazySection>

      {/* ================= FLOAT LABEL ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Floating Label</h3>

          <Label.Float
            {...args}
            {...indicatorProps}
            color={color}
            label="Floating label"
            prefix={{
              type: "icon",
              name: "@info",
            }}
          />
        </section>
      </LazySection>

      {/* ================= COLOR PALETTE ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold">Color Palette</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive display of all available semantic, base, and
              accent color palettes supported by the floating label.
            </p>
          </div>

          <div className="space-y-10">
            {/* Semantic Colors */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                Semantic Colors
              </h4>

              <div className="grid grid-cols-5 gap-6">
                {[
                  "brand",
                  "neutral",
                  "success",
                  "warning",
                  "danger",
                  "info",
                ].map((color) => (
                  <div key={color} className="flex flex-col gap-2">
                    <Label.Float
                      {...args}
                      {...indicatorProps}
                      color={color}
                      label={color.charAt(0).toUpperCase() + color.slice(1)}
                      prefix={{
                        type: "icon",
                        name: "@info",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Colors */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                Accent Colors
              </h4>

              <div className="grid grid-cols-5 gap-6">
                {getStorybookAccentColorKeys().map((color: string) => (
                  <div key={color} className="flex flex-col gap-2">
                    <Label.Float
                      {...args}
                      {...indicatorProps}
                      color={color}
                      label={color.charAt(0).toUpperCase() + color.slice(1)}
                      prefix={{
                        type: "icon",
                        name: "@info",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* ================= COLON ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Colon Feature</h3>
          <p className="text-sm text-muted-foreground">
            Automatically appends ":" after the label text for consistent form
            separation.
          </p>

          <Label
            {...args}
            color={color}
            indicatorPlacement="start"
            label="Label with colon"
            colon
          />

          <Label
            {...args}
            color={color}
            indicatorPlacement="start"
            label="Label without colon"
            colon={false}
          />
        </section>
      </LazySection>

      {/* ================= Icon placement ================= */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h3 className="text-xl font-bold">Info placement</h3>
            <p className="text-sm text-muted-foreground">
              Info indicator placement options for the label.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Label
              {...args}
              color={color}
              label="Info on start"
              infoTip={{
                type: "info-tip" as any,
                icon: {
                  type: "icon",
                  name: "@info",
                },
                tooltip: {
                  type: "tooltip",
                  cTag: "label-tooltip",
                  description: { children: "info" },
                },
                placement: "start",
              }}
            />

            <Label
              {...args}
              color={color}
              label="Info on end"
              infoTip={{
                type: "info-tip" as any,
                icon: { type: "icon", name: "@info" },
                tooltip: {
                  type: "tooltip",
                  cTag: "label-tooltip",
                  description: { children: "info" },
                },
                placement: "end",
              }}
            />
          </div>
        </section>
      </LazySection>

      {/* ================= Info tooltip ================= */}
      <LazySection>
        <section className="flex flex-col gap-2">
          <div>
            <h3 className="text-xl font-bold">Info Indicator</h3>
            <p className="text-sm text-muted-foreground">
              Label with and without informational tooltip.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Label
              {...args}
              color={color}
              label="Label with info"
              infoTip={{
                type: "info-tip" as any,
                cTag: "label-info-tip",
                icon: {
                  type: "icon",
                  name: "@info",
                },
                tooltip: {
                  type: "tooltip",
                  cTag: "label-tooltip",
                  description: {
                    children: "Additional information ",
                  },
                },
                placement: "end",
              }}
            />

            <Label
              {...args}
              color={color}
              label="Label without info"
              infoTip={undefined}
            />
          </div>
        </section>
      </LazySection>

      {/* ================= CHILDREN FLOW ================= */}
      <LazySection>
        <section className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Children Composition Flow
            </h3>
            <p className="text-sm text-gray-600">
              Demonstrates how the component behaves when using children
              instead of the <code>text</code> prop. Children overrides text.
            </p>
          </div>

          <div className="flex flex-col gap-6 border rounded-lg p-6 bg-gray-100">
            {/* Simple children */}
            <Label color={color}>Simple children tooltip</Label>

            {/* Children with icon */}
            <Label color={color}>
              <div className="flex items-center gap-2">
                Username
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
                  🔒 Secure
                </span>
              </div>
            </Label>

            {/* Children replacing text */}
            <Label {...args} color={color} label="This will NOT show">
              <div className="flex items-center gap-2 font-semibold text-green-600">
                Children Content → Fully Custom Layout
              </div>
            </Label>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
