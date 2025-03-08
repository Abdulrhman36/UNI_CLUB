"use client";
import * as React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`gap-2 self-stretch px-3 py-4 w-full text-xl font-medium leading-tight text-white whitespace-nowrap bg-blue-800 rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
