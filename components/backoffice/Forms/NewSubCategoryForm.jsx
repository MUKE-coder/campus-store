"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewSubCategoryForm({ updateData = {}, categories }) {
  const id = updateData?.id ?? "";
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...updateData,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/sub-categories");
  }
  async function onSubmit(data) {
    console.log(data);
    if (id) {
      data.id = id;
      // Make Put Request (Update)
      makePutRequest(
        setLoading,
        `api/sub-categories/${id}`,
        data,
        "SubCategory",
        redirect
      );
      console.log("update Request: ", data);
    } else {
      //Make Post Request (Create)
      makePostRequest(
        setLoading,
        "api/sub-categories",
        data,
        "SubCategory",
        reset,
        redirect
      );
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Sub Category Title"
          name="title"
          register={register}
          errors={errors}
        />
        <SelectInput
          label="Select Category"
          name="categoryId"
          register={register}
          errors={errors}
          className="w-full"
          options={categories}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Sub Category" : "Create Sub Category"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Sub Category please wait...`}
      />
    </form>
  );
}
