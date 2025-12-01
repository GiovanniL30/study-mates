import React, { useState } from "react";
import { IoMdBook } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

interface CourseRowProps {
  children?: React.ReactNode;
  title: string;
}

interface CourseRowContentProps {
  children: React.ReactNode;
}

export const CourseRow = ({ children, title }: CourseRowProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 bg-gray-200 rounded-md">
      <div className="flex justify-between items-center p-2 rounded-md">
        <div className="flex items-center gap-4">
          <IoMdBook size={48} />
          <div className="flex flex-col">
            <h1 className="font-bold">Lesson 1 for {title}</h1>
            <p className=" text-md font-extralight max-w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit cumque provident eveniet! Unde
              quas temporibus vitae ullam perferendis suscipit officiis est nemo aliquid tenetur? Enim libero eligendi
              asperiores officia?
            </p>
          </div>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex gap-2 items-center hover:cursor-pointer select-none"
        >
          <span className="text-md font-extralight">{open ? "Collapse" : "Expand"}</span>
          <FaArrowDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </div>
      </div>
      <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[500px]" : "max-h-0"}`}>
        {open && children}
      </div>
    </div>
  );
};

export const CourseRowContent = ({ children }: CourseRowContentProps) => {
  return <div>{children}</div>;
};
