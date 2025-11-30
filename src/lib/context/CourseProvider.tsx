import React, { useState } from "react";
import { CourseContext } from "@/lib/context/CourseContext";
import { type CourseData } from "@/types/CourseData";

interface CourseProviderProps {
  children: React.ReactNode;
}
const CourseProvider = ({ children }: CourseProviderProps) => {
  const [courseData, setCourseData] = useState<CourseData[] | undefined>(undefined);
  return <CourseContext.Provider value={{ courseData, setCourseData }}>{children}</CourseContext.Provider>;
};

export default CourseProvider;
