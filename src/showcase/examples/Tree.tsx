// Showcase ported from origin/tree:src/components/Tree/stories/Tree.stories.tsx
import { useState } from "react";
import { Tree } from "@inventive-ui/components/Tree";
import type { TreeNodeData } from "@inventive-ui/components/Tree";
import { useTheme } from "@inventive-ui/framework";
import { LazySection } from "../storybook";

const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

const workChildren: TreeNodeData[] = [
  {
    id: "report",
    label: "report.docx",
    prefix: { type: "icon", name: "@placeholder" },
  },
  {
    id: "presentation",
    label: "presentation.pptx",
    prefix: { type: "icon", name: "@placeholder" },
  },
];

const personalChildren: TreeNodeData[] = [
  {
    id: "resume",
    label: "resume.pdf",
    prefix: { type: "icon", name: "@placeholder" },
  },
  {
    id: "photos",
    label: "photos.zip",
    prefix: { type: "icon", name: "@placeholder" },
  },
];

const imagesChildren: TreeNodeData[] = [
  {
    id: "wallpaper",
    label: "wallpaper.png",
    prefix: { type: "icon", name: "@placeholder" },
  },
  {
    id: "logo",
    label: "logo.svg",
    prefix: { type: "icon", name: "@placeholder" },
  },
];

const archivesChildren: TreeNodeData[] = [
  {
    id: "backup",
    label: "backup.zip",
    prefix: { type: "icon", name: "@placeholder" },
  },
  {
    id: "logs",
    label: "logs.tar.gz",
    prefix: { type: "icon", name: "@placeholder" },
  },
];

const downloadsChildren: TreeNodeData[] = [
  {
    id: "images",
    label: "Images",
    prefix: { type: "icon", name: "@placeholder" },
    children: imagesChildren,
    loadChildren: async () => {
      await delay(600);
      return imagesChildren;
    },
  },
  {
    id: "archives",
    label: "Archives",
    prefix: { type: "icon", name: "@placeholder" },
    children: archivesChildren,
    loadChildren: async () => {
      await delay(600);
      return archivesChildren;
    },
  },
];

const nestedData: TreeNodeData[] = [
  {
    id: "work",
    label: "Work",
    children: [
      {
        id: "report",
        label: "report.docx",
      },
      {
        id: "presentation",
        label: "presentation.pptx",
      },
    ],
  },
  {
    id: "personal",
    label: "Personal",
    children: [
      {
        id: "resume",
        label: "resume.pdf",
      },
      {
        id: "photos",
        label: "photos.zip",
      },
    ],
  },
  {
    id: "downloads",
    label: "Downloads",
    children: [
      {
        id: "images",
        label: "Images",
        children: [
          {
            id: "wallpaper",
            label: "wallpaper.png",
          },
          {
            id: "logo",
            label: "logo.svg",
          },
        ],
      },
      {
        id: "archives",
        label: "Archives",
        children: [
          {
            id: "backup",
            label: "backup.zip",
          },
          {
            id: "logs",
            label: "logs.tar.gz",
          },
        ],
      },
    ],
  },
  {
    id: "README.md",
    label: "README.md",
  },
];

const prefixedItems: TreeNodeData[] = [
  {
    id: "work",
    label: "Work",
    prefix: { type: "icon", name: "@placeholder" },
    children: workChildren,
  },
  {
    id: "personal",
    label: "Personal",
    prefix: { type: "icon", name: "@placeholder" },
    children: personalChildren,
  },
  {
    id: "downloads",
    label: "Downloads",
    prefix: { type: "icon", name: "@placeholder" },
    children: downloadsChildren,
  },
  {
    id: "README.md",
    label: "README.md",
    prefix: { type: "icon", name: "@placeholder" },
  },
];

// Same structure as nestedData, but branch nodes expose loadChildren so the
// lazyLoad prop can be demonstrated. loadChildren is inert unless lazyLoad is
// true, so this data is safe to use anywhere nestedData is used.
const lazyItems: TreeNodeData[] = nestedData.map((node) => {
  if (node.id !== "work" && node.id !== "personal" && node.id !== "downloads") {
    return node;
  }
  return {
    ...node,
    loadChildren: async () => {
      await delay(600);
      return node.children ?? [];
    },
  };
});

/* ------------------------------------------------------------------ */
/* Showcase                                                            */
/* ------------------------------------------------------------------ */

// Story params were: (_, { globals })
export default function TreeShowcase() {
  const globals: Record<string, any> = {};
    const { globalColor } = useTheme();
    const themeColor = globalColor || globals?.themeColor || "brand";

    const ExpandOnHoverDemo = () => {
      const [defaultVal, setDefaultVal] = useState<string[]>([]);
      const [hoverVal, setHoverVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Hover to Toggle
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              By default, the expand chevron appears in a separate slot on
              hover. When <code>expandOnHover</code> is enabled, the icon and
              expand chevron share a single interchangeable slot.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Default
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={defaultVal}
                  onSelect={(ids) => setDefaultVal(ids)}
                  color={themeColor}
                  expandOnHover={false}
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                expandOnHover
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={hoverVal}
                  onSelect={(ids) => setHoverVal(ids)}
                  color={themeColor}
                  expandOnHover
                />
              </div>
            </div>
          </div>
        </div>
      );
    };

    const SelectionModesDemo = () => {
      const [singleVal, setSingleVal] = useState<string[]>([]);
      const [multiVal, setMultiVal] = useState<string[]>([]);
      const [noneVal, setNoneVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Selection Modes
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Single selection (default), multi-select, or no selection.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Single
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={singleVal}
                  onSelect={(ids) => setSingleVal(ids)}
                  color={themeColor}
                  selectionMode="single"
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Multiple
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={multiVal}
                  onSelect={(ids) => setMultiVal(ids)}
                  color={themeColor}
                  selectionMode="multiple"
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                None
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={noneVal}
                  onSelect={(ids) => setNoneVal(ids)}
                  color={themeColor}
                  selectionMode="none"
                />
              </div>
            </div>
          </div>
        </div>
      );
    };

    const CustomIconsDemo = () => {
      const [selVal, setSelVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Custom Icons
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Nodes can override the default folder/file fallback with custom
              prefix icons via the <code>prefix</code> slot.
            </p>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
            <Tree
              items={prefixedItems}
              selectedIds={selVal}
              onSelect={(ids) => setSelVal(ids)}
              color={themeColor}
            />
          </div>
        </div>
      );
    };

    const CheckableDemo = () => {
      const [selVal, setSelVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Checkable (Checkboxes)
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Multi-select with visible checkbox indicators via the{" "}
              <code>checkable</code> prop. Partially selected parent nodes show
              an indeterminate state.
            </p>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
            <Tree
              items={nestedData}
              selectedIds={selVal}
              onSelect={(ids) => setSelVal(ids)}
              color={themeColor}
              selectionMode="multiple"
              checkable
              indicator={{ type: "default" }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Checkboxes placed at the end of each node via{" "}
            <code>checkboxPlacement="end"</code>.
          </p>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
            <Tree
              items={nestedData}
              selectedIds={selVal}
              onSelect={(ids) => setSelVal(ids)}
              color={themeColor}
              selectionMode="multiple"
              checkable
              checkboxPlacement="end"
              indicator={{ type: "default" }}
            />
          </div>
        </div>
      );
    };

    const IndentVariantDemo = () => {
      const [stdVal, setStdVal] = useState<string[]>([]);
      const [algVal, setAlgVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Indent Variant
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Standard indentation offsets children deeper. Aligned keeps all
              items flush left.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Standard
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={stdVal}
                  onSelect={(ids) => setStdVal(ids)}
                  color={themeColor}
                  indentVariant="standard"
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Aligned
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={algVal}
                  onSelect={(ids) => setAlgVal(ids)}
                  color={themeColor}
                  indentVariant="aligned"
                />
              </div>
            </div>
          </div>
        </div>
      );
    };

    const ShowLinesDemo = () => {
      const [linesVal, setLinesVal] = useState<string[]>([]);
      const [noLinesVal, setNoLinesVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Show Lines
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Toggle connecting lines between parent and child nodes.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                With Lines (default)
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={linesVal}
                  onSelect={(ids) => setLinesVal(ids)}
                  color={themeColor}
                  showLines
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Without Lines
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={noLinesVal}
                  onSelect={(ids) => setNoLinesVal(ids)}
                  color={themeColor}
                  showLines={false}
                />
              </div>
            </div>
          </div>
        </div>
      );
    };

    const DefaultExpandAllDemo = () => {
      const [collapsedVal, setCollapsedVal] = useState<string[]>([]);
      const [expandedVal, setExpandedVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Default Expand All
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Start with all nodes collapsed by default or expanded on initial
              render.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Collapsed (default)
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={collapsedVal}
                  onSelect={(ids) => setCollapsedVal(ids)}
                  color={themeColor}
                  defaultExpandAll={false}
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                Expanded
              </span>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
                <Tree
                  items={nestedData}
                  selectedIds={expandedVal}
                  onSelect={(ids) => setExpandedVal(ids)}
                  color={themeColor}
                  defaultExpandAll
                />
              </div>
            </div>
          </div>
        </div>
      );
    };

    const LazyLoadDemo = () => {
      const [selVal, setSelVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Lazy Loading
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Nodes with a <code>loadChildren</code> function fetch children
              asynchronously on first expand.
            </p>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
            <Tree
              items={lazyItems}
              selectedIds={selVal}
              onSelect={(ids) => setSelVal(ids)}
              color={themeColor}
              lazyLoad
            />
          </div>
        </div>
      );
    };

    const RearrangeableDemo = () => {
      const [items, setItems] = useState<TreeNodeData[]>(nestedData);
      const [selVal, setSelVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Drag-and-Drop onReorder
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Drag visible nodes to onReorder them within the tree.
            </p>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
            <Tree
              items={items}
              selectedIds={selVal}
              onSelect={(ids) => setSelVal(ids)}
              color={themeColor}
              rearrangeable
              onReorder={(newTree) => setItems(newTree as any)}
            />
          </div>
        </div>
      );
    };

    const SearchableDemo = () => {
      const [selVal, setSelVal] = useState<string[]>([]);
      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Searchable
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Filter nodes by label in real-time using the search input above
              the tree.
            </p>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
            <Tree
              items={nestedData}
              selectedIds={selVal}
              onSelect={(ids) => setSelVal(ids)}
              color={themeColor}
              searchable
              searchPlaceholder="Search files..."
            />
          </div>
        </div>
      );
    };

    const EditableNodesDemo = () => {
      const [items, setItems] = useState<TreeNodeData[]>(nestedData);
      const [selVal, setSelVal] = useState<string[]>([]);

      const handleNodeEdit = (id: string, newLabel: string) => {
        const updateNodes = (nodes: TreeNodeData[]): TreeNodeData[] =>
          nodes.map((node) => {
            if (node.id === id) return { ...node, label: newLabel };
            if (node.children)
              return { ...node, children: updateNodes(node.children) };
            return node;
          });
        setItems(updateNodes(items));
      };

      return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
              Inline Editing
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Double-click any node label to edit it inline. Press Enter to
              commit or Escape to cancel.
            </p>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-850 rounded-lg border border-gray-100 dark:border-neutral-800">
            <Tree
              items={items}
              selectedIds={selVal}
              onSelect={(ids) => setSelVal(ids)}
              color={themeColor}
              isItemEditable
              onNodeEdit={handleNodeEdit}
            />
          </div>
        </div>
      );
    };

    return (
      <div className="space-y-8 max-w-5xl mx-auto p-8">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-100">
            Tree Component Overview
          </h2>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            A composable hierarchical selection component with nested data
            support, selection modes, expand/collapse, drag-to-onReorder,
            search, lazy loading, and inline editing.
          </p>
        </div>

        <LazySection>
          <ExpandOnHoverDemo />
        </LazySection>
        <LazySection>
          <SelectionModesDemo />
        </LazySection>
        <LazySection>
          <CustomIconsDemo />
        </LazySection>
        <LazySection>
          <CheckableDemo />
        </LazySection>
        <LazySection>
          <IndentVariantDemo />
        </LazySection>
        <LazySection>
          <ShowLinesDemo />
        </LazySection>
        <LazySection>
          <DefaultExpandAllDemo />
        </LazySection>
        <LazySection>
          <LazyLoadDemo />
        </LazySection>
        <LazySection>
          <RearrangeableDemo />
        </LazySection>
        <LazySection>
          <SearchableDemo />
        </LazySection>
        <LazySection>
          <EditableNodesDemo />
        </LazySection>
      </div>
    );
  }
