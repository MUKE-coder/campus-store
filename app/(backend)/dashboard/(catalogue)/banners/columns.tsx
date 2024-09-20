"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Banner } from "@prisma/client";
import SortableColumn from "@/components/DataTable/SortableColumn";
import ImageColumn from "@/components/DataTable/ImageColumn";
import DateColumn from "@/components/DataTable/DateColumn";
import ActionColumn from "@/components/DataTable/ActionColumn";

export const columns: ColumnDef<Banner>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
      checked={table.getIsAllPageRowsSelected()}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
    />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "imageUrl",
    header: "Banner Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const banner = row.original;
      return (
        <ActionColumn
          row={row}
          title="Banner"
          editEndpoint={`banners/update/${banner.id}`}
          endpoint={`banners/${banner.id}`}
        />
      );
    },
  },
];