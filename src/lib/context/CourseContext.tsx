import React, { createContext } from "react";
import { type CourseData } from "@/types/CourseData";

export interface CourseContextProps {
  courseData: CourseData[] | undefined;
  setCourseData: React.Dispatch<React.SetStateAction<CourseData[] | undefined>>;
}

export const CourseContext = createContext<CourseContextProps | null>(null);
