"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./TableVIstadeOpciones";

import { estatus } from "../TypeOfDataWithColums/Estadosdepago";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between p-2 rounded-lg  border-blue-100">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filtrar por Titulo"
          value={(table.getColumn("Titulo")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Titulo")?.setFilterValue(event.target.value)
          }
          className="h-9 w-[150px] lg:w-[250px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-blue-50/50 placeholder:text-blue-400"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-9 px-3 lg:px-4 text-blue-600 hover:text-blue-700 hover:bg-blue-100 transition-colors"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
