import { DataTable } from "./data-table.js";
import { Payment, columns } from "./columns.js";

async function getData() {
  // Fetch data from your API here.
  return DataTable;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    React.createElement("div", { className: "container mx-auto py-10" },
      React.createElement(DataTable, { columns: columns, data: data })
    )
  );
}

