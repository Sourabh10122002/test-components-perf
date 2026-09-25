// @ts-nocheck
// Ported from origin/cascader:src/components/Cascader/stories/Cascader.stories.tsx; API drift vs installed v0.0.35 — see report
// Showcase ported from origin/cascader:src/components/Cascader/stories/Cascader.stories.tsx (story "Showcase", name "Showcase / Overview")
import { useState } from "react";
import { Cascader } from "@inventive-ui/components/Cascader";
import type { CascaderItem, CascaderPlacement } from "@inventive-ui/components/Cascader";
import { useTheme } from "@inventive-ui/framework";

import { LazySection } from "../storybook";
// ----------------------------------------------------------------------
// 1. Mock Data (The Tree)
// ----------------------------------------------------------------------
const addressItems: CascaderItem[] = [
  {
    value: "usa",
    label: "United States",
    children: [
      {
        value: "california",
        label: "California",
        children: [
          { value: "sf", label: "San Francisco" },
          { value: "la", label: "Los Angeles" },
          { value: "sd", label: "San Diego", disabled: true },
        ],
      },
      {
        value: "new-york",
        label: "New York",
        children: [
          { value: "nyc", label: "New York City" },
          { value: "buffalo", label: "Buffalo" },
        ],
      },
    ],
  },
  {
    value: "india",
    label: "India",
    children: [
      {
        value: "west-bengal",
        label: "West Bengal",
        children: [
          { value: "kolkata", label: "Kolkata" },
          { value: "darjeeling", label: "Darjeeling" },
          { value: "burdwan", label: "Burdwan" },
        ],
      },
      {
        value: "maharashtra",
        label: "Maharashtra",
        children: [
          { value: "mumbai", label: "Mumbai" },
          { value: "pune", label: "Pune" },
          { value: "nagpur", label: "Nagpur" },
          { value: "nashik", label: "Nashik" },
        ],
      },
    ],
  },
  {
    value: "japan",
    label: "Japan",
    disabled: true, // Testing disabled parent
  },
];


// Story decorator from Showcase.decorators
export default function CascaderShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-12 min-h-screen">
      <CascaderShowcaseStory />
    </div>
  );
}

function CascaderShowcaseStory() {
  const globals: { themeColor?: string } = {};
  const { globalColor } = useTheme();
  const themeColor = globalColor || globals?.themeColor || "brand";

  const SelectionModesDemo = () => {
    const [singleVal, setSingleVal] = useState<string[]>([]);
    const [multiVal, setMultiVal] = useState<string[][]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Selection Modes (Single vs Multiple)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Choose between selecting a single hierarchical path or multiple
            paths using checkboxes.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Single Selection
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={singleVal}
                onChange={(v) => setSingleVal(v as string[])}
                color={themeColor}
                placeholder="Select location..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Multiple Selection
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={multiVal}
                onChange={(v) => setMultiVal(v as string[][])}
                multiple={true}
                color={themeColor}
                placeholder="Select locations..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TriggersDemo = () => {
    const [clickVal, setClickVal] = useState<string[]>([]);
    const [hoverVal, setHoverVal] = useState<string[]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Expand Triggers (Click vs Hover)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Customize whether submenu levels expand on hover or on click.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Click Trigger (Default)
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={clickVal}
                onChange={(v) => setClickVal(v as string[])}
                trigger="click"
                color={themeColor}
                placeholder="Click to expand..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Hover Trigger
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={hoverVal}
                onChange={(v) => setHoverVal(v as string[])}
                trigger="hover"
                color={themeColor}
                placeholder="Hover to expand..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PlacementDemo = () => {
    const placements: CascaderPlacement[] = [
      "bottom-start",
      "bottom",
      "bottom-end",
      "top-start",
      "top",
      "top-end",
      "start-top",
      "start",
      "start-bottom",
      "end-top",
      "end",
      "end-bottom",
    ];
    const [placement, setPlacement] =
      useState<CascaderPlacement>("bottom-start");
    const [placementVal, setPlacementVal] = useState<string[]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col gap-3 border-b border-gray-100 dark:border-neutral-800 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-x-12 gap-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Placement
            </h3>
            <div className="flex flex-row flex-wrap items-center gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                  Placement
                </span>
                <select
                  value={placement}
                  onChange={(e) =>
                    setPlacement(e.target.value as CascaderPlacement)
                  }
                  className="bg-neutral-50 border border-gray-200 text-gray-800 text-xs rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 font-medium cursor-pointer"
                >
                  {placements.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-neutral-400 max-w-3xl">
            Choose where the menu list box renders relative to the trigger.
            Use the control above to dynamically switch between all 12
            placements.
            <br></br>
            viewport collisions fall back to the nearest fitting placement.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Live Preview ({placement})
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-64 flex items-center justify-center">
              <Cascader
                items={addressItems}
                value={placementVal}
                onChange={(v) => setPlacementVal(v as string[])}
                placement={placement}
                color={themeColor}
                placeholder="Open to preview placement..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SearchableDemo = () => {
    const [singleVal, setSingleVal] = useState<string[]>([]);
    const [multiVal, setMultiVal] = useState<string[][]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Searchable Options
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Enable search to filter matching leaf options and quickly select
            paths.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Search in Single Select
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={singleVal}
                onChange={(v) => setSingleVal(v as string[])}
                searchable={true}
                color={themeColor}
                placeholder="Type to search..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Search in Multi-Select
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={multiVal}
                onChange={(v) => setMultiVal(v as string[][])}
                multiple={true}
                searchable={true}
                color={themeColor}
                placeholder="Type to search and select..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MenuSearchableDemo = () => {
    const [singleVal, setSingleVal] = useState<string[]>([]);
    const [multiVal, setMultiVal] = useState<string[][]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Menu Searchable (In-Menu Search)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Enable search directly within the cascader menus to filter options
            at each level.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Menu Search in Single Select
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={singleVal}
                onChange={(v) => setSingleVal(v as string[])}
                menuSearchable={true}
                color={themeColor}
                placeholder="Expand to search menus..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Menu Search in Multi-Select
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={multiVal}
                onChange={(v) => setMultiVal(v as string[][])}
                multiple={true}
                menuSearchable={true}
                color={themeColor}
                placeholder="Expand to search and select..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ChangeOnSelectDemo = () => {
    const [standardVal, setStandardVal] = useState<string[]>([]);
    const [changeVal, setChangeVal] = useState<string[]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Select Parent Nodes (changeOnSelect)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            By default, selection is only allowed at the leaf level. Enable{" "}
            <code>changeOnSelect</code> to allow selecting any node at any
            hierarchy depth.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Leaf-Only Selection (Default)
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={standardVal}
                onChange={(v) => setStandardVal(v as string[])}
                changeOnSelect={false}
                color={themeColor}
                placeholder="Must select leaf..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Select Any Level (changeOnSelect)
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={changeVal}
                onChange={(v) => setChangeVal(v as string[])}
                changeOnSelect={true}
                color={themeColor}
                placeholder="Select any level..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckedStrategyDemo = () => {
    const [parentVal, setParentVal] = useState<string[][]>([]);
    const [childVal, setChildVal] = useState<string[][]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Checked Strategy (showCheckedStrategy)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Define how checked values are displayed inside the trigger tag box
            when in multi-select mode.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Show Parent (default)
            </span>
            <p className="text-xs text-gray-400">
              Displays parent node tag if all child nodes are checked.
            </p>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={parentVal}
                onChange={(v) => setParentVal(v as string[][])}
                multiple={true}
                showCheckedStrategy="showParent"
                color={themeColor}
                placeholder="Show parent tags..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Show Child
            </span>
            <p className="text-xs text-gray-400">
              Always displays individual child node tags even if parent is
              checked.
            </p>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={childVal}
                onChange={(v) => setChildVal(v as string[][])}
                multiple={true}
                showCheckedStrategy="showChild"
                color={themeColor}
                placeholder="Show child tags..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StatesDemo = () => {
    const [val1, setVal1] = useState<string[]>([]);
    const [val2, setVal2] = useState<string[]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            States (Disabled & Loading)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Visual look and feel of the component under disabled and loading
            states.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Disabled State
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={val1}
                onChange={(v) => setVal1(v as string[])}
                disabled={true}
                color={themeColor}
                placeholder="Component disabled"
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Loading State
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={val2}
                onChange={(v) => setVal2(v as string[])}
                loading={true}
                color={themeColor}
                placeholder="Loading data..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DefaultValueDemo = () => {
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Default Value Prop (Uncontrolled Initial State)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Initialize the cascader selection with starting values using the{" "}
            <code>defaultValue</code> prop.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Single Select with Default Value
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                defaultValue={["usa", "california", "sf"]}
                color={themeColor}
                placeholder="Select location..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Multi-Select with Default Value
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                defaultValue={[
                  ["usa", "california", "sf"],
                  ["india", "west-bengal", "kolkata"],
                ]}
                multiple={true}
                color={themeColor}
                placeholder="Select locations..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CustomTriggerDemo = () => {
    const [singleVal, setSingleVal] = useState<string[]>([]);
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
            Custom Trigger Slot (Children)
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Replace the default input trigger box by passing custom child
            elements (e.g. buttons or text elements).
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
              Custom Button Trigger
            </span>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800 min-h-30 flex items-center">
              <Cascader
                items={addressItems}
                value={singleVal}
                onChange={(v) => setSingleVal(v as string[])}
                color={themeColor}
              >
                <button className="px-4 py-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white rounded-lg transition-colors font-medium shadow-sm cursor-pointer select-none">
                  {singleVal.length > 0
                    ? `Selected: ${singleVal.join(" / ")}`
                    : "Choose Location"}
                </button>
              </Cascader>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 dark:border-neutral-800 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-100">
          Cascader Component Overview
        </h2>
        <p className="text-sm text-gray-500 dark:text-neutral-400">
          A cascade selection component that allows selecting hierarchical
          options from a menu dropdown list.
        </p>
      </div>

      <LazySection>
        <SelectionModesDemo />
      </LazySection>

      <LazySection>
        <TriggersDemo />
      </LazySection>

      <LazySection>
        <PlacementDemo />
      </LazySection>

      <LazySection>
        <SearchableDemo />
      </LazySection>

      <LazySection>
        <MenuSearchableDemo />
      </LazySection>

      <LazySection>
        <ChangeOnSelectDemo />
      </LazySection>

      <LazySection>
        <ShowCheckedStrategyDemo />
      </LazySection>

      <LazySection>
        <DefaultValueDemo />
      </LazySection>

      <LazySection>
        <CustomTriggerDemo />
      </LazySection>

      <LazySection>
        <StatesDemo />
      </LazySection>
    </div>
  );
}
