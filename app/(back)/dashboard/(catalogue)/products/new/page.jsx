import FormHeader from "@/components/backoffice/FormHeader";
import NewProductForm from "@/components/backoffice/NewProductForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewProduct() {
  //Categories and Farmers
  const categoriesData = await getData("categories");
  const subCategoriesData = await getData("sub-categories");
  const usersData = (await getData("users")) ?? [];
  // Example loading state
  if (!categoriesData || !subCategoriesData) {
    return <div>Loading...</div>;
  }
  // console.log(farmers);
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  const subCategories = subCategoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  console.log(subCategories)
  return (
    <div>
      <FormHeader title="New Product" />
      <NewProductForm categories={categories} subCategories={subCategories} />
    </div>
  );
}
