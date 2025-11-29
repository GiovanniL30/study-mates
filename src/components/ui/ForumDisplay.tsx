import { GoPersonFill } from "react-icons/go";

interface ForumDisplayProps {
  forumTitle: string;
  postedBy: string;
}

const ForumDisplay = ({ forumTitle, postedBy }: ForumDisplayProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border p-2 rounded-full">
        <GoPersonFill />
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold">{forumTitle}</h2>
        <h3 className="font-extralight text-xs text-gray-700">{postedBy}</h3>
      </div>
    </div>
  );
};

export default ForumDisplay;
