"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DataTable({
  columns,
  data,
}) {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    React.createElement("div", { className: "rounded-md border" },
      React.createElement(Table, null,
        React.createElement(TableHeader, null,
          table.getHeaderGroups().map((headerGroup) =>
            React.createElement(TableRow, { key: headerGroup.id },
              headerGroup.headers.map((header) => {
                return (
                  React.createElement(TableHead, { key: header.id },
                    header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                  )
                );
              })
            )
          )
        ),
        React.createElement(TableBody, null,
          table.getRowModel().rows && table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) =>
              React.createElement(TableRow, {
                key: row.id,
                "data-state": row.getIsSelected() ? "selected" : undefined,
              },
                row.getVisibleCells().map((cell) =>
                  React.createElement(TableCell, { key: cell.id },
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )
                )
              )
            )
          ) : (
            React.createElement(TableRow, null,
              React.createElement(TableCell, {
                colSpan: columns.length,
                className: "h-24 text-center",
              }, "No results.")
            )
          )
        )
      )
    )
  );
}

export { DataTable };
