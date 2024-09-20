"use client";
import { ColumnDef } from "@tanstack/react-table";
import { SubCategory } from "@prisma/client";
import SortableColumn from "@/components/DataTable/SortableColumn";
import DateColumn from "@/components/DataTable/DateColumn";
import ActionColumn from "@/components/DataTable/ActionColumn";
export const columns: ColumnDef<SubCategory | any>[] = [

  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "categoryId",
    header: "Category Name",
    cell: ({ row }) => {
      const subCategory = row.original;
      return <h2>{subCategory.category.title}</h2>;
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
      const category = row.original;
      return (
        <ActionColumn
        row={row}
        title="SubCategory"
        editEndpoint={`sub-categories/update/${category.id}`}
        endpoint={`sub-categories/${category.id}`}
      />
      );
    },
  },
];