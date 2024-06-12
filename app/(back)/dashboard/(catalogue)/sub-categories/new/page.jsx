import FormHeader from "@/components/backoffice/FormHeader";
import NewSubCategoryForm from "@/components/backoffice/Forms/NewSubCategoryForm";
import { getData } from "@/lib/getData";
export default async function NewSubCategory() {
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
      <FormHeader title="New Sub Category" />
      <NewSubCategoryForm categories={categories} />
    </div>
  );
}
