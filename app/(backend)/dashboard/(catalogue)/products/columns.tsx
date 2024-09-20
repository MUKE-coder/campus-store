"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import {Product } from "@prisma/client";
import SortableColumn from "@/components/DataTable/SortableColumn";
import ImageColumn from "@/components/DataTable/ImageColumn";
import DateColumn from "@/components/DataTable/DateColumn";
import ActionColumn from "@/components/DataTable/ActionColumn";
export const columns: ColumnDef<Product | any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        
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
    header: "Product Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },
  {
    accessorKey: "categoryId",
    header: "Category Name",
    cell: ({ row }) => {
      const product = row.original;
      return <h2>{product.category.title}</h2>;
    },
  },

  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <ActionColumn
        row={row}
        title="Product"
        editEndpoint={`products/update/${product.id}`}
        endpoint={`products/${product.id}`}
      />
      );
    },
  },
];