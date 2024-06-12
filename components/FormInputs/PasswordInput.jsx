"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PasswordInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
  forgotPasswordLink,
}) {
  const [passType, setPassType] = useState(type);
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        {forgotPasswordLink && (
          <div className="text-sm">
            <Link
              href={forgotPasswordLink}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>
        )}
      </div>
      <div className="">
        <div className="relative">
          <input
            {...register(`${name}`, { required: isRequired })}
            type={passType}
            name={name}
            id={name}
            defaultValue={defaultValue}
            autoComplete={name}
            className={cn(
              "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm",
              errors[name] && "focus:ring-red-500 pl-8"
            )}
            placeholder={`Type the ${label.toLowerCase()}`}
          />
          <button
            type="button"
            onClick={() =>
              setPassType((prev) => (prev === "password" ? "text" : "password"))
            }
            className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center"
          >
            {passType === "password" ? (
              <Eye className="w-4 h-4 text-slate-600" />
            ) : (
              <EyeOff className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
        {errors[`${name}`] && (
          <span className="text-xs text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
