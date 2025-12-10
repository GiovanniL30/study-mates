import kutosan from "@/assets/kutosan.webp";
import { BsEmojiNeutral } from "react-icons/bs";

const Chat = () => {
  return (
    <div className="w-full h-[calc(100dvh-100px)] p-4 flex flex-col items-center justify-center bg-white rounded-md ">
      <div className="flex flex-col items-center gap-2">
        <img className="size-[150px]" src={kutosan} alt="Kutosan Logo" />
        <h1 className="text-2xl">
          Meet <strong>Kutosan!</strong>
        </h1>
        <h2 className="text-xl font-semibold">Your Own AI Assistant</h2>
        <h3 className="text-md text-center font-light w-[65%]">Ask Questions and Receive Answers with the help of Artificial Intellegence</h3>
        <span className="text-md font-light  flex gap-2 items-center">
          This feature is currently in development <BsEmojiNeutral />
        </span>
      </div>
    </div>
  );
};

export default Chat;
