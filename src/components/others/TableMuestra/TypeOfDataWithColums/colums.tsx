"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "./Esquema";
import { DataTableColumnHeader } from "../TableAndComplements/TableOrder";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
    enableHiding: true,
  },
  {
    id: "imagen",
    cell: ({ row }) => (
      <div className="w-20 h-28 overflow-hidden rounded-md shadow-md">
        <img
          src={`/pelicula/${row.getValue("id")}.jpg`}
          alt={row.getValue("Titulo")}
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "Titulo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titulo" />
    ),
    cell: ({ row }) => (
      <div className="max-w-48 overflow-y-auto whitespace-pre-wrap">
        {row.getValue("Titulo")}
      </div>
    ),
  },
  {
    accessorKey: "Sinopsis",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sinopsis" />
    ),
    cell: ({ row }) => (
      <div className="max-h-28 max-w- overflow-y-auto whitespace-pre-wrap">
        {row.getValue("Sinopsis")}
      </div>
    ),
  },
  {
    accessorKey: "Link",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trailer" />
    ),
    cell: ({ row }) => {
      const videoId = row.getValue("Link");
      return (
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-20 h-14 overflow-hidden rounded-md shadow-md"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Miniatura del trailer"
            className="w-full h-full object-cover"
          />
        </a>
      );
    },
  },
];
