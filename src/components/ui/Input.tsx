import React from "react";
import merge from "@/lib/merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  className?: string;
}

const Input = ({ label, className, placeholder, ...props }: InputProps) => {
  return (
    <>
      {label ? (
        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs">{label}</label>
          <input
            {...props}
            className={merge("bg-white px-2 py-3 text-sm text-login focus:outline-none focus:border-l-4 focus:border-login transition-all duration-75 ease-in-out", className)}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <input
          {...props}
          className={merge("px-2 py-3 text-sm text-login focus:outline-none focus:border-l-4 focus:border-login transition-all duration-75 ease-in-out", className)}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default Input;
