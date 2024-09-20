
import FormHeader from "@/components/back-end/FormHeader";
import NewSubCategoryForm from "@/components/form-inputs/NewSubCategoryForm";
import { getData } from "@/lib/getData";
import { Category } from "@prisma/client";
import React from "react";

export default async function UpdateCategory({ params: { id } }:any) {
  const subCategory = await getData(`sub-categories/${id}`);
  //Categories and Farmers
  const categoriesData:Category[] = await getData("categories");
  // console.log(farmers);
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="Update Sub category" />
      <NewSubCategoryForm updateData={subCategory} categories={categories} />
    </div>
  );
}
