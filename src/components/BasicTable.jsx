import React, { useMemo, useState } from "react";
import { lopData } from "../data/dataLop";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt, FaSearch } from "react-icons/fa";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Button from "../components/Button";
import FieldInput from "../components/Input";
import { usePagination } from "react-table";

const COLUMNS = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "lop_id",
    header: "Lớp ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "ten_lop",
    header: "Tên Lớp",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "thao_tac",
    header: "Thao Tác",
    cell: () => {
      return (
        <div className="flex items-center gap-6">
          <FaEdit className="w-6 h-6 cursor-pointer" />
          <FaTrashAlt className="w-6 h-6 cursor-pointer" />
        </div>
      );
    },
  },
];

function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => lopData, []);
  const [columnFilters, setColumFilters] = useState();

  const tableInstance = useReactTable({
    columns,
    data,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="">
      {/* <Filter columFilters={columnFilters} setColumFilters={setColumFilters} /> */}
      <table className="w-full">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className={`w-[${header.getSize()}]`} key={header.id}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className={`text-black w-[${cell.column.getSize()}]`} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          onClick={() => tableInstance.previousPage()}
          disable={!tableInstance.getCanPreviousPage()}
          name="Prev"
          className=" bg-blue-400 rounded-xl "
        />
        <Button
          onClick={() => tableInstance.nextPage()}
          disable={!tableInstance.getCanPreviousPage()}
          name="Next"
          className=" bg-blue-400 rounded-xl "
        />
      </div>
    </div>
  );
}

export default BasicTable;
