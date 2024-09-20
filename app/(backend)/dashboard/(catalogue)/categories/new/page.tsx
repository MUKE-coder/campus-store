import FormHeader from "@/components/back-end/FormHeader";
import NewCategoryForm from "@/components/form-inputs/NewCategoryForm";

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New category" />
      <NewCategoryForm />
    </div>
  );
}
