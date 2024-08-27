import DataTable from "@/components/data-table-components/DataTable";
import React from "react";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import PageHeader from "@/components/backoffice/PageHeader";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Unauthorized from "@/components/Unauthorized";
export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const role = user?.role;
  if (role === "USER") {
    return(
      <Unauthorized/>
    )
  }
  const banners = await getData("banners");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add Banner"
      />
      <div className="py-8">
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
}
