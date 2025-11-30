import Card from "@/components/ui/Card";
import { GoPersonFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";

interface CourseCardProps {
  image: string;
  categories: string[];
  title: string;
  teacher: string;
}

const CourseCard = ({ image, categories, title, teacher }: CourseCardProps) => {
  return (
    <Card className="flex flex-col gap-2 hover:bg-gray-300 transition-all border border-gray-100 shadow">
      <img className="rounded" src={image} alt="Course Thumbnail" />
      <div className="flex gap-1">
        {categories.map((category, i) => {
          return (
            <div key={i} className="text-xs font-extralight bg-gray-100 px-2 py-0.5 rounded-full">
              {category}
            </div>
          );
        })}
      </div>
      <h1 className="font-semibold text-xl">{title}</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <GoPersonFill />
          <h2 className="text-md font-light text-gray-500">{teacher}</h2>
        </div>
        <div className="flex items-center gap-1">
          <FaStar color="#f8bc24" />
          <span className="text-md font-light text-gray-500">48 Reviews</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <FaBook />
          <span className="text-md font-light text-gray-500">05</span>
        </div>
        <div className="flex items-center gap-1">
          <CiClock2 />
          <span className="text-md font-light text-gray-500">12H 30M</span>
        </div>
        <div className="flex items-center gap-1">
          <FaGraduationCap />
          <span className="text-md font-light text-gray-500">22</span>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
