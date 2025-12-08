import { Link } from "react-router-dom";
import { ContentWrapper } from "@/components/ui/Wrapper";
import CourseCard from "@/components/ui/CourseCard";
import courses from "@/lib/getCourseData";

const Courses = () => {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-4 gap-2 place-items-center">
        {courses.map((course, i) => {
          return (
            <Link key={i} className="bg-white rounded-md" to={`/c/${course.courseId}`}>
              <CourseCard image={course.image} categories={course.categories} title={course.title} teacher={course.teacher} />
            </Link>
          );
        })}
      </div>
    </ContentWrapper>
  );
};

export default Courses;
