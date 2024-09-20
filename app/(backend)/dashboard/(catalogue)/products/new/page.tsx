import FormHeader from "@/components/back-end/FormHeader";
import NewProductForm from "@/components/form-inputs/NewProductForm";
import { getData } from "@/lib/getData";
import { Category } from "@prisma/client";
import React from "react";

export default async function NewProduct() {
  //Categories and Farmers
  const [categoriesData, subCategoriesData] = await Promise.all([
    getData("categories"),
    getData("sub-categories")
  ]);
  
  // Example loading state
  if (!categoriesData || !subCategoriesData) {
    return <div>Loading...</div>;
  }
  // console.log(farmers);
  const categories = categoriesData.map((category:Category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  const subCategories = subCategoriesData.map((category:Category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="New Product" />
      <NewProductForm categories={categories} subCategories={subCategories} />
    </div>
  );
}
