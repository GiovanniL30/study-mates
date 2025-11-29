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
    <Card className="flex flex-col gap-2">
      <img src={image} alt="Course Thumbnail" />
      <div className="flex">
        {categories.map((category, i) => {
          return <div key={i}>{category}</div>;
        })}
      </div>
      <h1>{title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <GoPersonFill />
          <h2>{teacher}</h2>
        </div>
        <div className="flex gap-2">
          <FaStar />
          <span>48 Reviews</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <FaBook />
          <span>05</span>
        </div>
        <div className="flex gap-1">
          <CiClock2 />
          <span>12H 30M</span>
        </div>
        <div className="flex gap-1">
          <FaGraduationCap />
          <span>22</span>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
