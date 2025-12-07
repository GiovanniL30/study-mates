import { useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "@/components/ui/QuestionCard";
import courses from "@/lib/getCourseData";
import { type SelectedAnswer } from "@/types/SelectedAnswer";

const SelectedCourseActivity = () => {
  const [selectedAnswersId, setSelectedAnswersId] = useState<SelectedAnswer[]>([]);
  const { courseId, activityId } = useParams();
  const selectedCourse = courses.find((course) => course.courseId === courseId);
  const selectedLesson = selectedCourse?.lessons.find((lesson) => lesson.activity.activityId === activityId);
  const questions = selectedLesson?.activity.questions ?? [];

  return (
    <div className="grid grid-cols-4 w-full mt-4">
      <div className="col-start-1 col-end-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col items-center gap-0.5">
            <span>Progress Bar</span>
            <span>Questions: 10 / 10</span>
          </div>
          <span>End Quiz Button</span>
        </div>
      </div>
      <div className="col-start-2 col-end-4 flex flex-col gap-4">
        {questions.map((question, i) => {
          return (
            <QuestionCard
              answer={question.answer}
              questionNumber={`${i + 1}`}
              question={question.question}
              questionId={question.questionId}
              questionChoices={question.choices}
              selectedAnswer={selectedAnswersId}
              setSelectedAnswer={setSelectedAnswersId}
            ></QuestionCard>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedCourseActivity;
