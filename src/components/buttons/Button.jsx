import React from "react";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

  secondary:
    "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",

  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",

  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",

  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-50",

  ghost:
    "text-gray-700 hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-medium
        transition
        duration-200
        focus:outline-none
        focus:ring-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4A10 10 0 002 12h2z"
          />
        </svg>
      )}

      {!loading && leftIcon}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
}