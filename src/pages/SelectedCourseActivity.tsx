import { useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "@/components/ui/QuestionCard";
import courses from "@/lib/getCourseData";
import { type SelectedAnswer } from "@/types/SelectedAnswer";
import Button from "@/components/ui/Button";
import merge from "@/lib/merge";

const SelectedCourseActivity = () => {
  const [selectedAnswersId, setSelectedAnswersId] = useState<SelectedAnswer[]>([]);
  const [answersSubmitted, setAnswersSubmitted] = useState(false);
  const { courseId, activityId } = useParams();
  const selectedCourse = courses.find((course) => course.courseId === courseId);
  const selectedLesson = selectedCourse?.lessons.find((lesson) => lesson.activity.activityId === activityId);
  const questions = selectedLesson?.activity.questions ?? [];

  const submitAnswers = () => {
    setAnswersSubmitted(true);
  };

  return (
    <div className="grid grid-cols-4 w-full mt-4">
      <div className="col-start-1 col-end-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col items-center gap-0.5">
            <span>Progress Bar</span>
            <span>{selectedAnswersId.length} Question Answered</span>
            <span>{questions.length - selectedAnswersId.length} Question Remaning</span>
          </div>
          <Button
            disabled={selectedAnswersId.length !== questions.length}
            onClick={submitAnswers}
            className={merge(
              "bg-login",
              selectedAnswersId.length !== questions.length ? "opacity-50 hover:cursor-not-allowed" : "hover:cursor-pointer"
            )}
            label="End Quiz"
          />
        </div>
      </div>
      <div className="col-start-2 col-end-4 flex flex-col gap-4">
        {questions.map((question, i) => {
          return (
            <QuestionCard
              key={question.questionId}
              answerSubmitted={answersSubmitted}
              answerId={question.answer}
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
