import FormHeader from "@/components/backoffice/FormHeader";
import NewSubCategoryForm from "@/components/backoffice/Forms/NewSubCategoryForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateCategory({ params: { id } }) {
  const subCategory = await getData(`sub-categories/${id}`);
  //Categories and Farmers
  const categoriesData = await getData("categories");
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
