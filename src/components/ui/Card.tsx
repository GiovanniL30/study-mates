import React from "react";
import merge from "@/lib/merge";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return <div className={merge("bg-white p-3 rounded-md", className)}>{children}</div>;
};

export default Card;
