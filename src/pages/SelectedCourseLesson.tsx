import { BsEmojiNeutral } from "react-icons/bs";

const SelectedCourseLesson = () => {
  return (
    <div className="w-full h-[calc(100dvh-100px)] p-4 flex flex-col items-center justify-center bg-white rounded-md ">
      <p className="text-center">
        You just clicked a lesson from a course! <br />
        This section would contain the relevant learning materials for the chosen lesson <br />
        But due to time constraints we will leave this section like this <br />
        So just proceed directly to the activity
      </p>
      <BsEmojiNeutral />
    </div>
  );
};

export default SelectedCourseLesson;
