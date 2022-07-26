import React, { useMemo } from "react";
import { useTable } from "react-table";

export default function ListBudaya({ columnTable, dataTable, isLoading }) {
  const columns = useMemo(() => columnTable, [columnTable]);
  const data = useMemo(() => dataTable, [dataTable]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      className="border-spacing-0 shadow-md rounded-md"
    >
      <thead className="border-none bg-blue-300">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {data.length > 0 ? (
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="text-center">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={columns.length}>Data Belum Ada</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
