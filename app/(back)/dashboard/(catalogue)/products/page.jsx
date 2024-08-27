import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";

import React from "react";
import { columns } from "./columns";
import { getAllProducts } from "@/actions/products";
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
  // const allProducts = await getData("products/all");
  const products = await getAllProducts();
  // console.log(products);
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add Product"
      />
      <div className="py-8">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}
