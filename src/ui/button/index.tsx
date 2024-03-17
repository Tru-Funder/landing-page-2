import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  variant?: "contained" | "outlined";
}

export function Button({
  children,
  className,
  disabled,
  isLoading,
  onClick,
  type,
  variant,
}: ButtonProps) {
  // Classes
  const containedClass = "bg-green-500 text-white hover:bg-green-700";
  const outlinedClass = "text-green-500 bg-white hover:bg-green-50";

  //   Logics
  const variantClass = variant === "contained" ? containedClass : outlinedClass;

  return (
    <button
      className={`px-6 py-2 rounded-xl font-semibold transition-all grid grid-flow-col w-max items-center gap-2 ${variantClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
