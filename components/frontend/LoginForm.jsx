"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import TextInput from "../FormInputs/TextInput";
import { Loader } from "lucide-react";
import SubmitButton from "../FormInputs/SubmitButton";
import PasswordInput from "../FormInputs/PasswordInput";
export default function LoginForm() {
  const router = useRouter();
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
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
      } else {
        // Sign-in was successful
        toast.success("Login Successful");
        reset();
        router.push("/dashboard");
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
      <TextInput
        label="Email Address"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3"
      />
      <PasswordInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
        type="password"
        forgotPasswordLink="/forgot-password"
      />
      <SubmitButton
        isLoading={loading}
        buttonTitle="Login"
        loadingButtonTitle="Signing you in please wait..."
      />

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Dont have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
