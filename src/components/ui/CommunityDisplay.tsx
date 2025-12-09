import { BiAward } from "react-icons/bi";

interface CommunityDisplayProps {
  title: string;
  description: string;
}

const CommunityDisplay = ({ title, description }: CommunityDisplayProps) => {
  return (
    <div className="flex gap-2 p-1 rounded-md items-center transition-all hover:bg-q-body hover:cursor-pointer">
      <div className="p-1 rounded-md bg-gray-500">
        <BiAward color="white" size={24} />
      </div>
      <div className="flex flex-col gap">
        <span className="font-semibold  text-white">{title}</span>
        <span className="text-xs text-gray-400">{description}</span>
      </div>
    </div>
  );
};

export default CommunityDisplay;
