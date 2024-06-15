import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";

import React from "react";
import { columns } from "./columns";
import { getAllProducts } from "@/actions/products";

export default async function page() {
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
