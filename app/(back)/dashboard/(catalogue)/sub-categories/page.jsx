import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";

import Link from "next/link";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
export default async function page() {
  const subCategories = await getData("sub-categories");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Sub Categories"
        href="/dashboard/sub-categories/new"
        linkTitle="Add Sub Category"
      />

      <div className="py-0">
        <DataTable data={subCategories} columns={columns} />
      </div>
    </div>
  );
}
