"use client";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import TextInput from "./FormInputs/TextInput";
import SubmitButton from "./FormInputs/SubmitButton";
export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const id = searchParams.get("id");
    data.id = id;
    console.log(data);
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/users/update-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        // await signOut();
        setLoading(false);
        router.push("/login");
        toast.success("Password Updated Successfully");
      } else {
        setLoading(false);
        toast.error("Something Went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 " action="#">
      <TextInput
        label="New Password"
        name="password"
        register={register}
        errors={errors}
        type="password"
        className="sm:col-span-2 mb-3"
      />
      <SubmitButton
        isLoading={loading}
        buttonTitle="Reset Password"
        loadingButtonTitle="Updating please wait..."
      />
    </form>
  );
}
