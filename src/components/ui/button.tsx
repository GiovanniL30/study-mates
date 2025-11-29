import React from "react";
import merge from "@/lib/merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
}

const Button = ({ className, label, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={merge("px-12 py-2 rounded-md  hover:cursor-pointer transition duration-75 ", className)}
    >
      <span className="text-white font-bold">{label}</span>
    </button>
  );
};

export default Button;
