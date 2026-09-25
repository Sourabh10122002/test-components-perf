// Showcase ported from origin/pagination:src/components/Pagination/stories/pagination.stories.tsx
import React, { useState, useEffect } from "react";
import { Pagination } from "@inventive-ui/components/Pagination";
import { PaginationItem } from "@inventive-ui/components/Pagination";
import type { PaginationProps } from "@inventive-ui/components/Pagination";

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-6 mb-16 last:mb-0 w-full border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0">
    <div className="text-left">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
    {children}
  </section>
);

const LabeledItem = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-3 min-w-20">
    <div className="flex items-center justify-center h-16 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      {children}
    </div>
    <span className="text-xs text-center text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
      {label}
    </span>
  </div>
);

// ✅ Updated Wrapper: Handles both Page AND PageSize state (needed for Advanced variant)
type PaginationWrapperProps = Omit<
  PaginationProps,
  "current" | "onPageChange"
> &
  Partial<Pick<PaginationProps, "current" | "onPageChange">>;

const PaginationWrapper = (args: PaginationWrapperProps) => {
  const [page, setPage] = useState(args.current || 1);
  const [currentSize, setCurrentSize] = useState(args.pageSize || 10);

  // ✅ Track whether the user has changed size via the dropdown locally.
  // Prevents the useEffect below from overwriting the dropdown selection
  // when Storybook re-renders the story after an action fires.
  const hasLocalSizeChange = React.useRef(false);

  // ✅ Sync pageSize from Storybook controls — but only if the user
  // hasn't already changed it via the "Items per page" dropdown.
  useEffect(() => {
    if (!hasLocalSizeChange.current && args.pageSize !== undefined) {
      setCurrentSize(args.pageSize);
    }
    // When the control value actually changes, allow re-sync
    hasLocalSizeChange.current = false;
  }, [args.pageSize]);

  useEffect(() => {
    if (args.current !== undefined) setPage(args.current);
  }, [args.current]);

  return (
    <Pagination
      {...args}
      current={page}
      pageSize={currentSize}
      onPageChange={(p) => {
        setPage(p);
        args.onPageChange?.(p);
      }}
      onPageSizeChange={(newSize) => {
        // ✅ Mark as local change so the useEffect doesn't reset it
        hasLocalSizeChange.current = true;
        setCurrentSize(newSize);
        setPage(1); // Reset to first page on size change
        args.onPageSizeChange?.(newSize);
      }}
    />
  );
};

// ============================================================================
// 4. SHOWCASE STORY (Visual Guide)
// ============================================================================

const PaginationShowcase = () => {
  const [pageA, setPageA] = useState(2);
  const [pageB, setPageB] = useState(5);
  // @ts-ignore -- unused in the original story (noUnusedLocals)
  const [pageC, setPageC] = useState(1);
  const [pageD, setPageD] = useState(10);

  // ✅ State for Advanced Variant Example
  const [advPage, setAdvPage] = useState(1);
  const [advSize, setAdvSize] = useState(10);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Pagination Design System
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          A complete guide to the available styles, logic variants, and atomic
          states of the pagination system.
        </p>
      </div>

      {/* 1. APPEARANCE STYLES */}
      <Section
        title="Appearance Styles"
        description="Visual hierarchies. (Color inherited from Global Theme)"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <LabeledItem label="Ghost (Default)">
            <PaginationItem active selectStyle={{ variant: "ghost" }}>
              1
            </PaginationItem>
          </LabeledItem>
          <LabeledItem label="Solid">
            <PaginationItem active selectStyle={{ variant: "solid" }}>
              1
            </PaginationItem>
          </LabeledItem>
          <LabeledItem label="Outline">
            <PaginationItem active selectStyle={{ variant: "outline" }}>
              1
            </PaginationItem>
          </LabeledItem>
          <LabeledItem label="Solid + Outline">
            <PaginationItem active selectStyle={{ variant: "solid-outline" }}>
              1
            </PaginationItem>
          </LabeledItem>
        </div>
      </Section>

      {/* 2. INDICATORS */}
      <Section
        title="Indicators"
        description="Optional active indicators. (Color inherited from Global Theme)"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <LabeledItem label="Bottom Indicator">
            <PaginationItem active selectStyle={{ indicator: "bottom" }}>
              1
            </PaginationItem>
          </LabeledItem>
          <LabeledItem label="Top Indicator">
            <PaginationItem active selectStyle={{ indicator: "top" }}>
              1
            </PaginationItem>
          </LabeledItem>

          <LabeledItem label="Solid (Inverse Text)">
            <PaginationItem active selectStyle={{ variant: "solid" }}>
              1
            </PaginationItem>
          </LabeledItem>
        </div>
      </Section>

      {/* 3. LOGIC VARIANTS */}
      <Section
        title="Functional Variants"
        description="Different ways to navigate large datasets. (Color/Radius/Spacing inherited from Global Theme)"
      >
        <div className="space-y-12">
          {/* Standard */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Standard Number List
            </h4>
            <Pagination
              total={100}
              pageSize={10}
              current={pageA}
              onPageChange={setPageA}
              selectStyle={{ variant: "ghost", indicator: "bottom" }}
            />
          </div>

          {/* Attached */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Attached List
            </h4>
            <Pagination
              total={100}
              pageSize={10}
              current={pageA}
              onPageChange={setPageA}
              type="attached"
              selectStyle={{ variant: "outline" }}
            />
          </div>

          {/* Separator */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Simple Separator
            </h4>
            <Pagination
              total={50}
              pageSize={10}
              current={pageB}
              onPageChange={setPageB}
              type="separator"
            />
          </div>

          {/* Dropdown */}
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Dropdown Jump (Large)
              </h4>
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Pagination
                  total={200}
                  pageSize={20}
                  current={pageD}
                  onPageChange={setPageD}
                  type="dropdown"
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* ✅ New: Advanced Variant */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Advanced Toolbar
            </h4>
            <p className="text-sm text-gray-500">
              Integrated items-per-page selector, range display, and page
              navigation.
            </p>
            <div className="p-4 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg space-y-8">
              <div>
                <p className="text-xs text-neutral-400 mb-2 font-mono uppercase">
                  Size: base (Default)
                </p>
                <Pagination
                  type="advanced"
                  total={500}
                  current={advPage}
                  pageSize={advSize}
                  onPageChange={setAdvPage}
                  onPageSizeChange={setAdvSize}
                  pageSizeOptions={[10, 20, 50, 100]}
                  hoverStyle={{ variant: "ghost" }}
                />
              </div>
              <div>
                <p className="text-xs text-neutral-400 mb-2 font-mono uppercase">
                  Size: xl (Extra Large)
                </p>
                <Pagination
                  type="advanced"
                  size="xl"
                  total={500}
                  current={advPage}
                  pageSize={advSize}
                  onPageChange={setAdvPage}
                  onPageSizeChange={setAdvSize}
                  pageSizeOptions={[10, 20, 50, 100]}
                />
              </div>
            </div>
          </div>

          {/* ✅ Edge Case Validations */}
          <div className="pt-12 border-t border-gray-100 dark:border-gray-800 text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Edge Case & Prop Validations
            </h3>
            <div className="space-y-12">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Negative Page Size (Defaults to 1)
                </h4>
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 inline-block">
                  <PaginationWrapper total={10} pageSize={-5} />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Large Sibling Count (Capped at 5)
                </h4>
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 inline-block">
                  <PaginationWrapper
                    total={500}
                    pageSize={10}
                    siblingCount={20}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Direct Total Count (Zero State)
                </h4>
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 inline-block">
                  <PaginationWrapper total={0} pageSize={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

// Story params were: ()
export default function PaginationShowcasePage() {
    return (
      <PaginationShowcase />
    );
  }
