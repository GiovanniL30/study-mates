import React from "react";
import merge from "@/lib/merge";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  const hasBg = className?.includes("bg-");

  return <div className={merge(hasBg ? "" : "bg-white", "p-3 rounded-md", className)}>{children}</div>;
};

export default Card;
