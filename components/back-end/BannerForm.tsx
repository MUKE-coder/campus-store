"use client";
import { getAllProducts } from "@/actions/products";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ImageInput from "../form-inputs/ImageInput";
import SubmitButton from "../form-inputs/SubmitButton";
import TextInput from "../form-inputs/TextInput";
import ToggleInput from "../form-inputs/ToggleInput";
import { FancyMultiSelect } from "../form-inputs/MultiSelectPrdt";

export default function BannerForm({ updateData = {} }:any) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const previewImageUrl = updateData?.previewImageUrl  ?? "";
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [bannerImageUrl, setBannerImageUrl] = useState(previewImageUrl);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const [selectedProducts, setSelectedProducts] = useState(updateData.productIds||[]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getAllProducts();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/banners");
  }  
  async function onSubmit(data:any) {
    data.imageUrl = imageUrl;
    data.bannerImageUrl = previewImageUrl ;
    data.productIds = selectedProducts.map((product:any) => product.id);

    console.log(data)

    if (id) {
      makePutRequest(setLoading, `api/banners/${id}`, data, "Banner", redirect);
    } else {
      makePostRequest(
        setLoading,
        "api/banners",
        data,
        "Banner",
        reset,
        redirect
      );
      setImageUrl("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <FancyMultiSelect
        products={products}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Banner Title"
          name="title"
          register={register}
          errors={errors}
        />
       <div className="flex lg:flex-row flex-col gap-2 w-full">
       <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="bannerImageUploader"
          label="Banner Image"
        />
        <ImageInput
          imageUrl={bannerImageUrl}
          setImageUrl={setBannerImageUrl}
          endpoint="bannerPreviewImageUploader"
          label="Preview Banner Image"
        />
       </div>
        <ToggleInput
          label="Publish your Banner"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Banner" : "Create Banner"}
        loadingButtonTitle={`${id ? "Updating" : "Creating"} Banner please wait...`}
      />
    </form>
  );
}
