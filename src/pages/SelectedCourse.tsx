import { useParams } from "react-router-dom";
import courses from "@/lib/getCourseData";
import { CiClock1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const SelectedCourse = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const selectedCourse = courses.find((course) => course.id === courseId);

  return (
    <div className="bg-white p-6 flex flex-col gap-2 rounded-md">
      <div className="flex gap-4">
        <img className="rounded w-[300px]" src={selectedCourse?.image} alt="Course Picture" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{selectedCourse?.title}</h1>
          <p className="font-extralight">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
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
    </div>
  );
};

export default SelectedCourse;
