import React from "react";

interface IconContainerProps {
  children: React.ReactNode;
}

const IconContainer = ({ children }: IconContainerProps) => {
  return (
    <div className="p-4 bg-white rounded-3xl hover:cursor-pointer hover:bg-gray-200 transition-all">{children}</div>
  );
};

export default IconContainer;
