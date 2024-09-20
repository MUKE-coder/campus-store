import React from "react";
import { columns } from "./columns";
import Unauthorized from "@/components/Unauthorized";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import DataTable from "@/components/DataTable/DataTable";
import TableHeader from "@/components/DataTable/TableHeader";
import { getAllProducts } from "@/actions/products";
 
export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const role = user?.role;
  if (role === "USER") {
    return(
      <Unauthorized/>
    )
  }
  const products = await getAllProducts() || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
        data={products}
        model="products"
      />
      <div className="py-8">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}