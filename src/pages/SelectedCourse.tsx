import { useParams, Link } from "react-router-dom";
import courses from "@/lib/getCourseData";
import { CiClock1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CourseRow, CourseRowContent } from "@/components/ui/CourseRow";
const SelectedCourse = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const selectedCourse = courses.find((course) => course.courseId === courseId)!;

  return (
    <>
      <div className="bg-white w-[75%] px-4 py-2 flex flex-col gap-2 rounded-md">
        <div className="flex gap-4 items-center">
          <img className="rounded w-[300px] h-[200px]" src={selectedCourse?.image} alt="Course Picture" />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{selectedCourse?.title}</h1>
            <p className="font-extralight max-w-[600px]">The description for the course {selectedCourse?.title} is written here.</p>
            <div className="flex gap-4">
              <div className="flex gap-0.5 items-center">
                <CiClock1 />
                <span className="text-sm font-extralight">12H 30M</span>
              </div>
              <div className="flex gap-0.5 items-center">
                <FaStar color="#f8bc24" />
                <span className="font-sm font-extralight text-[#ff7401] ">4.9</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {selectedCourse.lessons.map((lesson, i) => {
            return (
              <CourseRow key={lesson.lessonId} title={`Lesson  ${i + 1} `} description={lesson.lessonDescription}>
                <CourseRowContent>
                  <Link to={`/c/${courseId}/l/${lesson.lessonId}`}>
                    <span>Click to start reading</span>
                  </Link>
                </CourseRowContent>
                <CourseRowContent>
                  <Link to={`/c/${courseId}/a/${lesson.activity.activityId}`}>
                    <span>Finished Reading? Take the Acvity!</span>
                  </Link>
                </CourseRowContent>
              </CourseRow>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectedCourse;
