import FormHeader from "@/components/back-end/FormHeader";
import NewProductForm from "@/components/form-inputs/NewProductForm";
import { getData } from "@/lib/getData";
import { Category } from "@prisma/client";
import React from "react";

export default async function UpdateProduct({ params: { id } }:any) {
  const product = await getData(`products/${id}`);
  // console.log(product)
  const subCategoriesData = await getData("sub-categories");
  //Categories and Farmers
  const categoriesData = await getData("categories");
 
  const subCategories = subCategoriesData.map((category:Category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  const categories = categoriesData.map((category:Category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="Update Product" />
      <NewProductForm
        updateData={product}
        categories={categories}
        subCategories={subCategories}
      />
    </div>
  );
}
