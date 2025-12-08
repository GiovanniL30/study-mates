import React, { useState } from "react";
import { IoMdBook } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

interface CourseRowProps {
  children?: React.ReactNode;
  title: string;
  description: string;
}

interface CourseRowContentProps {
  children: React.ReactNode;
}

export const CourseRow = ({ children, title, description }: CourseRowProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 bg-gray-100 rounded-md">
      <div className="flex justify-between items-center p-2 rounded-md">
        <div className="flex items-center gap-4">
          <IoMdBook size={48} />
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">{title}</h1>
            <p className=" text-md font-extralight max-w-[700px]">{description}</p>
          </div>
        </div>
        <div onClick={() => setOpen((prev) => !prev)} className="flex gap-2 items-center hover:cursor-pointer select-none">
          <span className="text-md font-extralight">{open ? "Collapse" : "Expand"}</span>
          <FaArrowDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </div>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

export const CourseRowContent = ({ children }: CourseRowContentProps) => {
  return (
    <div className="pl-18 pb-3 font-extralight flex flex-col w-fit hover:text-red-500">
      <div className="flex items-center">
        <MdArrowRight size={24} />
        {children}
      </div>
    </div>
  );
};
