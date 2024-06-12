import Link from "next/link";

export default function PasswordInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <Link
          href="/forgot-password"
          className="text-sm shrink-0 font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Forgot Password
        </Link>
      </div>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-xs text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
