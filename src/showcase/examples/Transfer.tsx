// Showcase ported from origin/transfer:src/components/Transfer/stories/Transfer.stories.tsx
import { useState } from "react";
import { Transfer } from "@inventive-ui/components/Transfer";
import { SlotRenderer } from "@inventive-ui/framework/slots";
import { LazySection } from "../storybook";
import { getShowcaseTheme, ShowcaseShell, SHOWCASE_CONTAINER_CLASS } from "../storybook";

// Mock data
const mockData = [
  {
    label: "Source",
    targetLabel: "Target",
    type: "label",
  },
  {
    key: "1",
    label: "Option 1",
  },
  {
    key: "2",
    label: "Option 2",
  },
  {
    key: "3",
    label: "Option 3",
  },
  {
    key: "4",
    label: "Option 4",
  },
  {
    key: "5",
    label: "Option 5",
  },
  {
    key: "6",
    label: "Option 6",
  },
  {
    key: "7",
    label: "Option 7",
  },
  {
    key: "8",
    label: "Option 8",
  },
  {
    key: "9",
    label: "Option 9",
  },
  {
    key: "10",
    label: "Option 10",
  },
];

// Story params were: (_, { globals })
// Story args were { items: mockData } (unused by the render)
export default function TransferShowcase() {
  const globals = {};
    const theme = getShowcaseTheme(globals);
    const themeColor = theme.color;

    // Local state wrappers
    const InternalTransferDemo = () => {
      const [targetKeys, setTargetKeys] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Internal Transfer (List Reordering)
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Demonstrates sorting and arranging items internally within the
              Source and Target lists. Select one or more items to enable the
              Move to Top, Move Up, Move Down, and Move to Bottom buttons.
              (Transfer buttons are hidden).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Transfer Component */}
            <div className="lg:col-span-7 flex justify-center bg-neutral-50 dark:bg-neutral-850 p-6 rounded-xl border border-gray-100 dark:border-neutral-800">
              <Transfer
                items={mockData}
                targetKeys={targetKeys}
                onChange={setTargetKeys}
                color={themeColor}
                operations={{
                  transfer: {
                    toRight: { type: "button", style: { display: "none" } },
                    toLeft: { type: "button", style: { display: "none" } },
                    allToRight: { type: "button", style: { display: "none" } },
                    allToLeft: { type: "button", style: { display: "none" } },
                  },
                }}
              />
            </div>

            {/* Explanatory Guide for the 4 Internal Buttons */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-neutral-200 uppercase tracking-wider">
                Active Reordering Buttons (4 in total)
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@doubleUp" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move to Top{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.reorder.toTop
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Snaps all selected items to the absolute top of the
                      current list.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@up" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move Up{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.reorder.up
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Shifts selected items up by one position, preserving
                      relative order.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@down" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move Down{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.reorder.down
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Shifts selected items down by one position, preserving
                      relative order.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@doubleDown" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move to Bottom{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.reorder.toBottom
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Snaps all selected items to the absolute bottom of the
                      current list.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const ExternalTransferDemo = () => {
      const [targetKeys, setTargetKeys] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              External Transfer (Source ⇄ Target)
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Demonstrates transferring items between the Source and Target
              panels. Select items to enable the Move Right and Move Left
              buttons, or use the Move All buttons. (Internal reorder buttons
              are hidden).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Transfer Component */}
            <div className="lg:col-span-7 flex justify-center bg-neutral-50 dark:bg-neutral-850 p-6 rounded-xl border border-gray-100 dark:border-neutral-800">
              <Transfer
                items={mockData}
                targetKeys={targetKeys}
                onChange={setTargetKeys}
                color={themeColor}
                operations={{
                  reorder: {
                    toTop: { type: "button", style: { display: "none" } },
                    up: { type: "button", style: { display: "none" } },
                    down: { type: "button", style: { display: "none" } },
                    toBottom: { type: "button", style: { display: "none" } },
                  },
                }}
              />
            </div>

            {/* Explanatory Guide for the 4 External Buttons */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-neutral-200 uppercase tracking-wider">
                Active Transfer Buttons (4 in total)
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@arrowForwardIos" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move Right{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.transfer.toRight
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Transfers selected items from the Source (left) list over
                      to the Target (right) list.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@doubleRight" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move All Right{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.transfer.allToRight
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Transfers all items currently in the Source list over to
                      the Target list.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@arrowBackIos" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move Left{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.transfer.toLeft
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Transfers selected items from the Target (right) list back
                      to the Source (left) list.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/40 rounded-lg border border-gray-100 dark:border-neutral-800/60">
                  <div className="flex-shrink-0 mt-0.5">
                    <SlotRenderer
                      slot={{
                        type: "button",
                        variant: "solid",
                        color: themeColor,
                        size: "base",
                        prefix: { type: "icon", name: "@doubleLeft" },
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
                      Move All Left{" "}
                      <code className="text-xs text-brand-600 dark:text-brand-400 font-mono ml-1 font-bold">
                        operations.transfer.allToLeft
                      </code>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                      Transfers all items currently in the Target list back to
                      the Source list.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const TwoWayTransfer = () => {
      const [targetKeys, setTargetKeys] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              Two-Way Transfer
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Allows moving items freely between the source and target list, as
              well as reordering within both panels.
            </p>
          </div>
          <div className="flex justify-center">
            <Transfer
              items={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              color={themeColor}
            />
          </div>
        </div>
      );
    };

    const OneWayTransfer = () => {
      const [targetKeys, setTargetKeys] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              One-Way Transfer
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Items can only be sent from source to target. Target items feature
              a delete action suffix for removal.
            </p>
          </div>
          <div className="flex justify-center">
            <Transfer
              items={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              oneWay={true}
              color={themeColor}
            />
          </div>
        </div>
      );
    };

    const SearchableTransfer = () => {
      const [targetKeys, setTargetKeys] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              Searchable Panels
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Equip both panels with filter input fields to search items by
              labels in real-time.
            </p>
          </div>
          <div className="flex justify-center">
            <Transfer
              items={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              searchable={true}
              color={themeColor}
            />
          </div>
        </div>
      );
    };

    // @ts-ignore -- defined but never rendered in the original story (noUnusedLocals)

    const LoadingTransfer = () => {
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              Loading States
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Independently display loading indicator overlays on the source,
              target, or both lists.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-2 border border-dashed border-gray-200 dark:border-neutral-800 p-4 rounded-lg">
              <span className="text-xs font-medium text-gray-500">
                Source Panel Loading
              </span>
              <Transfer
                items={mockData}
                targetKeys={[]}
                loading={{ source: true, target: false }}
                color={themeColor}
              />
            </div>
            <div className="flex flex-col items-center gap-2 border border-dashed border-gray-200 dark:border-neutral-800 p-4 rounded-lg">
              <span className="text-xs font-medium text-gray-500">
                Target Panel Loading
              </span>
              <Transfer
                items={mockData}
                targetKeys={[]}
                loading={{ source: false, target: true }}
                color={themeColor}
              />
            </div>
          </div>
        </div>
      );
    };

    // @ts-ignore -- defined but never rendered in the original story (noUnusedLocals)

    const DisabledTransfer = () => {
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              Disabled State
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Disables selection, all list interactions, search inputs, and
              action buttons.
            </p>
          </div>
          <div className="flex justify-center">
            <Transfer
              items={mockData}
              targetKeys={[]}
              disabled={true}
              searchable={true}
              color={themeColor}
            />
          </div>
        </div>
      );
    };

    // @ts-ignore -- defined but never rendered in the original story (noUnusedLocals)

    const ColorThemesTransfer = () => {
      const colors = [
        "brand",
        "success",
        "danger",
        "warning",
        "info",
        "neutral",
      ];
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              Theme Colors
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Buttons, search focus indicators, and action controls style
              automatically according to the design system color tokens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {colors.map((c) => (
              <div
                key={c}
                className="flex flex-col items-center gap-2 border border-gray-100 dark:border-neutral-800 p-4 rounded-lg"
              >
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {c}
                </span>
                <Transfer
                  items={mockData}
                  targetKeys={["2", "3"]}
                  color={c}
                  searchable={true}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };

    const CustomActionTransfer = () => {
      const [targetKeys, setTargetKeys] = useState<string[]>(["3"]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              Slot Action Button Customization
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Customize the transferring or reordering controls via slots (e.g.,
              customize variants, shapes, colors, or add custom button text
              labels).
            </p>
          </div>
          <div className="flex justify-center">
            <Transfer
              items={mockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              color={themeColor}
              operations={{
                transfer: {
                  toRight: {
                    type: "button",
                    label: "Send",
                    variant: "outline",
                    color: "success",
                    prefix: { type: "icon", name: "@arrowForwardIos" },
                  },
                  toLeft: {
                    type: "button",
                    label: "Return",
                    variant: "outline",
                    color: "danger",
                    prefix: { type: "icon", name: "@arrowBackIos" },
                  },
                },
              }}
            />
          </div>
        </div>
      );
    };

    // @ts-ignore -- defined but never rendered in the original story (noUnusedLocals)

    const RichItemsTransfer = () => {
      const richMockData = [
        { type: "divider" as const },
        { label: "Programming Languages", type: "label" as const },
        {
          key: "ts",
          label: "TypeScript",
          helperText: "Typed superset of JavaScript",
          prefix: { type: "icon" as const, name: "settings" },
        },
        {
          key: "py",
          label: "Python",
          helperText: "Interpreted language",
          prefix: { type: "icon" as const, name: "settings" },
        },
        {
          key: "go",
          label: "Go",
          helperText: "Compiled language by Google",
          prefix: { type: "icon" as const, name: "settings" },
        },
        { type: "divider" as const },
        { label: "Design Tools", type: "label" as const },
        {
          key: "figma",
          label: "Figma",
          helperText: "Collaborative design tool",
          prefix: { type: "icon" as const, name: "settings" },
        },
        {
          key: "sketch",
          label: "Sketch",
          helperText: "Vector graphics app",
          prefix: { type: "icon" as const, name: "settings" },
        },
      ];
      const [targetKeys, setTargetKeys] = useState<string[]>(["ts", "figma"]);

      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
              Rich Items with Metadata & Icons
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Items can include descriptions, helpers, custom suffixes/prefixes,
              avatars, badges, or swatches to present comprehensive metadata.
            </p>
          </div>
          <div className="flex justify-center">
            <Transfer
              items={richMockData}
              targetKeys={targetKeys}
              onChange={setTargetKeys}
              color={themeColor}
            />
          </div>
        </div>
      );
    };

    // @ts-ignore -- defined but never rendered in the original story (noUnusedLocals)

    const ListboxStyleInteractionMatrix = () => {
      const selectVariants = [
        "solid",
        "solid-outline",
        "outline",
        "ghost",
      ] as const;
      const hoverVariants = [
        "solid",
        "outline",
        "solid-outline",
        "ghost",
      ] as const;

      const [selectAppearance, setSelectAppearance] = useState<
        "strong" | "soft" | "dualTone"
      >("strong");
      const [hoverAppearance, setHoverAppearance] = useState<
        "strong" | "soft" | "dualTone"
      >("soft");

      const [matrixSelections, setMatrixSelections] = useState<
        Record<string, string[]>
      >(() => {
        const initial: Record<string, string[]> = {};
        selectVariants.forEach((s) => {
          hoverVariants.forEach((h) => {
            initial[`${s}-${h}`] = ["2", "4"];
          });
        });
        return initial;
      });

      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6 w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-neutral-800 pb-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
                listbox variant Matrix
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Explore how different select styles (rows) interact with hover
                behaviors (columns). Use the controls on the right to
                dynamically adjust select/hover appearances.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                  Select Appearance
                </span>
                <select
                  value={selectAppearance}
                  onChange={(e) => setSelectAppearance(e.target.value as any)}
                  className="bg-neutral-50 border border-gray-200 text-gray-800 text-xs rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 font-medium cursor-pointer"
                >
                  <option value="strong">Strong</option>
                  <option value="soft">Soft</option>
                  <option value="dualTone">Dual Tone</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                  Hover Appearance
                </span>
                <select
                  value={hoverAppearance}
                  onChange={(e) => setHoverAppearance(e.target.value as any)}
                  className="bg-neutral-50 border border-gray-200 text-gray-800 text-xs rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 font-medium cursor-pointer"
                >
                  <option value="strong">Strong</option>
                  <option value="soft">Soft</option>
                  <option value="dualTone">Dual Tone</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 dark:border-neutral-800">
              <thead>
                <tr>
                  <th className="border border-gray-200 dark:border-neutral-800 p-4 text-center text-xs font-bold text-gray-700 dark:text-neutral-300 bg-neutral-50/50 dark:bg-neutral-850/30 uppercase tracking-wider w-40">
                    Style / Interaction
                  </th>
                  {hoverVariants.map((hv) => (
                    <th
                      key={hv}
                      className="border border-gray-200 dark:border-neutral-800 p-4 text-center text-xs font-bold text-gray-700 dark:text-neutral-300 bg-neutral-50/50 dark:bg-neutral-850/30 uppercase tracking-wider"
                    >
                      {hv === "solid-outline"
                        ? "Solid-Outline"
                        : hv.charAt(0).toUpperCase() + hv.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selectVariants.map((sv) => (
                  <tr
                    key={sv}
                    className="hover:bg-neutral-50/20 dark:hover:bg-neutral-850/10 transition-colors"
                  >
                    <td className="border border-gray-200 dark:border-neutral-800 p-4 font-bold text-xs text-gray-800 dark:text-neutral-200 capitalize bg-neutral-50/30 dark:bg-neutral-850/10 w-40">
                      {sv === "solid-outline"
                        ? "Solid-Outline"
                        : sv.charAt(0).toUpperCase() + sv.slice(1)}
                    </td>
                    {hoverVariants.map((hv) => {
                      const cellKey = `${sv}-${hv}`;
                      return (
                        <td
                          key={cellKey}
                          className="border border-gray-200 dark:border-neutral-800 p-4"
                        >
                          <div className="flex justify-center scale-95 origin-center">
                            <Transfer
                              items={mockData}
                              targetKeys={matrixSelections[cellKey]}
                              onChange={(nextKeys) =>
                                setMatrixSelections((prev) => ({
                                  ...prev,
                                  [cellKey]: nextKeys,
                                }))
                              }
                              color={themeColor}
                              listbox={{
                                selectStyle: {
                                  variant: sv,
                                  appearance: selectAppearance,
                                },
                                hoverStyle: {
                                  variant: hv,
                                  appearance: hoverAppearance,
                                  color: "neutral",
                                },
                              }}
                            />
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    // @ts-ignore -- defined but never rendered in the original story (noUnusedLocals)

    const AdaptiveTransferDemo = () => {
      const [keysLightFalse, setKeysLightFalse] = useState<string[]>([
        "2",
        "4",
      ]);
      const [keysLightTrue, setKeysLightTrue] = useState<string[]>(["2", "4"]);
      const [keysDarkFalse, setKeysDarkFalse] = useState<string[]>(["2", "4"]);
      const [keysDarkTrue, setKeysDarkTrue] = useState<string[]>(["2", "4"]);

      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Adaptive Dark Mode Alignment
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Automatic styling adjustments for Listboxes and search inputs when
              switching between light and dark modes when the{" "}
              <code>adaptive</code> prop is enabled.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Light Mode Column */}
            <div className="flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded-xl">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider border-b pb-2">
                Light Mode
              </span>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-gray-400">
                    Adaptive: false (Selected item text color is white)
                  </span>
                  <div className="flex justify-center scale-95 origin-center bg-neutral-50 p-4 rounded-lg">
                    <Transfer
                      items={mockData}
                      targetKeys={keysLightFalse}
                      onChange={setKeysLightFalse}
                      searchable={true}
                      adaptive={false}
                      color={themeColor}
                      listbox={{
                        selectStyle: {
                          variant: "solid",
                          appearance: "strong",
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-gray-400">
                    Adaptive: true (Default - Selected item text color is white)
                  </span>
                  <div className="flex justify-center scale-95 origin-center bg-neutral-50 p-4 rounded-lg">
                    <Transfer
                      items={mockData}
                      targetKeys={keysLightTrue}
                      onChange={(keysLightTrue) =>
                        setKeysLightTrue(keysLightTrue)
                      }
                      searchable={true}
                      adaptive={true}
                      color={themeColor}
                      listbox={{
                        selectStyle: {
                          variant: "solid",
                          appearance: "strong",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Mode Simulation Column */}
            <div className="flex flex-col gap-6 p-6 bg-neutral-950 border border-neutral-800 rounded-xl dark text-white">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-800 pb-2">
                Dark Mode
              </span>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-neutral-500">
                    Adaptive: false (Selected item text color is white)
                  </span>
                  <div className="flex justify-center scale-95 origin-center bg-neutral-900 p-4 rounded-lg">
                    <Transfer
                      items={mockData}
                      targetKeys={keysDarkFalse}
                      onChange={setKeysDarkFalse}
                      searchable={true}
                      adaptive={false}
                      color={themeColor}
                      listbox={{
                        selectStyle: {
                          variant: "solid",
                          appearance: "strong",
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-neutral-500">
                    Adaptive: true (Default - Selected item text color is
                    dark/black)
                  </span>
                  <div className="flex justify-center scale-95 origin-center bg-neutral-900 p-4 rounded-lg">
                    <Transfer
                      items={mockData}
                      targetKeys={keysDarkTrue}
                      onChange={setKeysDarkTrue}
                      searchable={true}
                      adaptive={true}
                      color={themeColor}
                      listbox={{
                        selectStyle: {
                          variant: "solid",
                          appearance: "strong",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <ShowcaseShell
        globals={globals}
        className={`${SHOWCASE_CONTAINER_CLASS} space-y-12 p-8 min-h-screen w-full bg-white dark:bg-neutral-950`}
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-neutral-50">
            Transfer Showcase
          </h1>
          <p className="text-lg text-gray-600 dark:text-neutral-40">
            A side-by-side demonstration of all configuration modes, custom
            behavior patterns, and structural styling details of the Transfer
            component.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Section 1: Internal vs External Transfer */}
          <LazySection>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">
                1. Internal vs External Transfer
              </h2>
              <div className="grid grid-cols-1 gap-8">
                <InternalTransferDemo />
                <ExternalTransferDemo />
              </div>
            </div>
          </LazySection>
          {/* Section 2: Interaction Modes */}
          <LazySection>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">
                2. Interaction Modes
              </h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <TwoWayTransfer />
                <OneWayTransfer />
              </div>
            </div>
          </LazySection>
          {/* Section 3: Search Capabilities */}
          <LazySection>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">
                3. Search Capabilities
              </h2>
              <SearchableTransfer />
            </div>
          </LazySection>

          {/* Section 4: Rich Options */}
          {/* <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">4. Rich Content Integration</h2>
                        <RichItemsTransfer />
                    </div> */}

          {/* Section 5: Loading & Disable States */}
          {/* <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">5. Loading & Disable States</h2>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                            <LoadingTransfer />
                            <DisabledTransfer />
                        </div>
                    </div> */}

          {/* Section 6: Customized Slots */}
          <LazySection>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">
                6. Custom Actions (Slots)
              </h2>
              <CustomActionTransfer />
            </div>
          </LazySection>

          {/* Section 7: Color Themes */}
          {/* <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">7. Theme Options</h2>
                        <ColorThemesTransfer />
                    </div> */}

          {/* Section 8: Style × Interaction Variant Matrix */}

          {/* <LazySection>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">8. Listbox variant Matrix</h2>
                            <ListboxStyleInteractionMatrix />
                        </div>
                    </LazySection> */}

          {/* Section 9: Adaptive Dark Mode Alignment */}
          {/* <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-10">9. Adaptive Dark Mode Alignment</h2>
                        <AdaptiveTransferDemo />
                    </div> */}
        </div>
      </ShowcaseShell>
    );
  }
