import React from "react";
import { columns } from "./columns";
import Unauthorized from "@/components/Unauthorized";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import DataTable from "@/components/DataTable/DataTable";
import TableHeader from "@/components/DataTable/TableHeader";
import { getData } from "@/lib/getData";
 
export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const role = user?.role;
  if (role === "USER") {
    return(
      <Unauthorized/>
    )
  }
  const subCategories = await getData("sub-categories") || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Sub Categories"
        linkTitle="Add Sub Category"
        href="/dashboard/sub-categories/new"
        data={subCategories}
        model="subCategories"
      />
      <div className="py-8">
        <DataTable data={subCategories} columns={columns} />
      </div>
    </div>
  );
}