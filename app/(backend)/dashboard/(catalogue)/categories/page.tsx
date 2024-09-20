import React from "react";
import { columns } from "./columns";
import Unauthorized from "@/components/Unauthorized";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import DataTable from "@/components/DataTable/DataTable";
import TableHeader from "@/components/DataTable/TableHeader";
 
export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const role = user?.role;
  if (role === "USER") {
    return(
      <Unauthorized/>
    )
  }
  const categories = await getData("categories")||[];
  return (
    <div className="p-8">
      <TableHeader
        title="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
        data={categories}
        model="categories"
      />
      <div className="py-8">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}