// Local copy of origin/tooltip:.storybook/showcase-layout.tsx (ShowcaseTable is not in the ../storybook shim).
import React from "react";
import {
  SHOWCASE_SCROLL_X_CLASS,
  SHOWCASE_SECTION_CLASS,
  SHOWCASE_SECTION_DESC_CLASS,
  SHOWCASE_SECTION_TITLE_CLASS,
} from "../../storybook";

export type ShowcaseTableColumn<T extends string> = {
  key: T;
  label: string;
  align?: "left" | "center";
  width?: string;
};

export type ShowcaseTableProps<
  RowKey extends string,
  ColKey extends string,
> = {
  title: string;
  description?: string;
  rowHeaderLabel: string;
  rows: { key: RowKey; label: string }[];
  columns: ShowcaseTableColumn<ColKey>[];
  renderCell: (row: RowKey, column: ColKey) => React.ReactNode;
};

/** Wide comparison tables — scroll horizontally within the section only. */
export function ShowcaseTable<RowKey extends string, ColKey extends string>({
  title,
  description,
  rowHeaderLabel,
  rows,
  columns,
  renderCell,
}: ShowcaseTableProps<RowKey, ColKey>) {
  return (
    <section className={SHOWCASE_SECTION_CLASS}>
      <div>
        <h2 className={SHOWCASE_SECTION_TITLE_CLASS}>{title}</h2>
        {description ? (
          <p className={SHOWCASE_SECTION_DESC_CLASS}>{description}</p>
        ) : null}
      </div>
      <div className={SHOWCASE_SCROLL_X_CLASS}>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                {rowHeaderLabel}
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="border border-gray-200 bg-gray-100 px-6 py-3 text-sm font-semibold dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  style={{ textAlign: col.align ?? "center", width: col.width }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <td className="border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  {row.label}
                </td>
                {columns.map((col) => (
                  <td
                    key={`${row.key}-${col.key}`}
                    className="border border-gray-200 px-6 py-4 align-middle dark:border-gray-700"
                    style={{ textAlign: col.align ?? "center" }}
                  >
                    {renderCell(row.key, col.key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
