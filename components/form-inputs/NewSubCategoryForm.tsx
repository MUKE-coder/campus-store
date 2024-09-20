"use client";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import ImageUploader from "./ImageUploader";
import SubmitButton from "./SubmitButton";

export default function NewSubCategoryForm({ updateData = {}, categories }:any) {
  const id = updateData?.id ?? "";
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...updateData,
    },
  });
  const initialSubImage = updateData?.image ? [updateData.image] : [];
  const [subImages, setSubImages] = useState(initialSubImage);
  console.log(subImages)
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/sub-categories");
  }
  async function onSubmit(data:any) {
    
    data.image =subImages[0] || "https://utfs.io/f/aa568418-002c-40a1-b13f-a0fd7eef1353-9w6i5v.svg";
    // console.log(data);
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
         <ImageUploader imageUrls={subImages} setImageUrls={setSubImages} endpoint="subCategoryUploader"  label="Sub-Category Image"/>
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
