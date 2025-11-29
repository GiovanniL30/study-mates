import React from "react";
import merge from "@/lib/merge";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const PageWrapper = ({ className, children }: WrapperProps) => {
  return <div className={merge("grid place-items-center m-0 h-dvh", className)}>{children}</div>;
};

export const ContentWrapper = ({ className, children }: WrapperProps) => {
  return <div className={merge("px-5, py-2", className)}>{children}</div>;
};
