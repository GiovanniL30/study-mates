import { Link } from "react-router-dom";
import data from "@/data/data.json";
import { ContentWrapper } from "@/components/ui/Wrapper";
import CourseCard from "@/components/ui/CourseCard";
import course1 from "@/assets/course1.webp";
import course2 from "@/assets/course2.webp";
import course3 from "@/assets/course3.webp";
import course4 from "@/assets/course4.webp";
import course5 from "@/assets/course5.webp";
import course6 from "@/assets/course6.webp";

const Courses = () => {
  const courseImages = [course1, course2, course3, course4, course5, course6];
  const courseData = data.courses;
  const courses = courseData.map((course, i) => {
    return { ...course, image: courseImages[i] };
  });
  return (
    <ContentWrapper>
      <div className="grid grid-cols-4 gap-2 place-items-center">
        {courses.map((course, i) => {
          return (
            <Link className="bg-white rounded-md" to={"/"}>
              <CourseCard
                key={i}
                image={course.image}
                categories={course.categories}
                title={course.title}
                teacher={course.teacher}
              />
            </Link>
          );
        })}
      </div>
    </ContentWrapper>
  );
};

export default Courses;
