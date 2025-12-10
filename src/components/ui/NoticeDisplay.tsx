import { CiBellOn } from "react-icons/ci";

interface NoticeDisplayProps {
  title: string;
  description: string;
}

const NoticeDisplay = ({ title, description }: NoticeDisplayProps) => {
  return (
    <div className="flex gap-2 items-center rounded-md">
      <CiBellOn size={30} />
      <div className="flex flex-col gap">
        <span className="font-semibold">{title}</span>
        <span className="text-xs font-light">{description}</span>
      </div>
    </div>
  );
};

export default NoticeDisplay;
