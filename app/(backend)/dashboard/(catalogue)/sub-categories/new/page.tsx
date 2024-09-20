import FormHeader from "@/components/back-end/FormHeader";
import NewSubCategoryForm from "@/components/form-inputs/NewSubCategoryForm";
import { getData } from "@/lib/getData";
import { Category } from "@prisma/client";

export default async function NewSubCategory() {
  const categoriesData:Category[] = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="New Sub Category" />
      <NewSubCategoryForm categories={categories} />
    </div>
  );
}
