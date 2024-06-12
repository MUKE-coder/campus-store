"use client";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import TextInput from "./FormInputs/TextInput";
import SubmitButton from "./FormInputs/SubmitButton";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users/forgot-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setLoading(false);
        setShowNotification(true);
        reset();
        toast.success("Password reset link sent Successfully");
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      {showNotification && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Please Check your Email!</span> We have
          sent you a Password Reset Link and Click on the Link in Order to
          create a new password
        </Alert>
      )}
      <TextInput
        label="Email Address"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3"
      />
      <SubmitButton
        isLoading={loading}
        buttonTitle="Send Email"
        loadingButtonTitle="Sending please wait..."
      />
      <div className="my-6">
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
          Do remember your Password?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
