import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "transparent";
  width?: string;
  height?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  width = "auto",
  height = "auto",
  onClick,
  children,
  className = "",
}) => {
  const baseStyles =
    "w-full md:w-[378px] flex items-center justify-center font-medium rounded focus:outline-none transition duration-300";

  const variantStyles = {
    primary:
      "bg-[#4f46e5] text-white hover:bg-[#6366f1] focus:ring-2 focus:ring-[#6366f1]",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary:
      "bg-[#320972] text-white hover:bg-[#6366f1] focus:ring-2 focus:ring-[#6366f1]",
    outline:
      "border border-white text-white hover:bg-white hover:text-[#4f46e5] transition-colors duration-300",
    transparent:
      "bg-transparent text-[#6366f1] hover:text-white hover:bg-[#6366f1] border border-[#6366f1]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ width, height }}
    >
      {children}
    </button>
  );
};

export default Button;
