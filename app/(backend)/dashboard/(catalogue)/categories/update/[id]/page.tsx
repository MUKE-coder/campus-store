import FormHeader from "@/components/back-end/FormHeader";
import NewCategoryForm from "@/components/form-inputs/NewCategoryForm";
import { getData } from "@/lib/getData";
import React from "react";

interface Params {
  id: string;
}

export default async function UpdateCategory({ params: { id } }: { params: Params }) {
  const category = await getData(`categories/${id}`);
  
  return (
    <div>
      <FormHeader title="Update category" />
      <NewCategoryForm updateData={category} />
    </div>
  );
}
