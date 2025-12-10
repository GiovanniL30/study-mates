import { BsEmojiNeutral } from "react-icons/bs";

const Settings = () => {
  return (
    <div className="w-full h-[calc(100dvh-100px)] p-4 flex flex-col items-center justify-center bg-white rounded-md ">
      <div className="flex flex-col items-center gap-2">
        <span className="text-md font-light  flex gap-2 items-center">
          This feature is currently in development <BsEmojiNeutral />
        </span>
      </div>
    </div>
  );
};

export default Settings;
