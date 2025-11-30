import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "@/lib/context/CourseContext";

const SelectedCourse = () => {
  const { courseData } = useContext(CourseContext)!;
  const courseId = useParams();
  return <div className="bg-white"></div>;
};

export default SelectedCourse;
