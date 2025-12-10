import { useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "@/components/ui/QuestionCard";
import courses from "@/lib/getCourseData";
import { type SelectedAnswer } from "@/types/SelectedAnswer";
import Button from "@/components/ui/Button";
import merge from "@/lib/merge";
import { Link } from "react-router-dom";

const SelectedCourseActivity = () => {
  const [selectedAnswersId, setSelectedAnswersId] = useState<SelectedAnswer[]>([]);
  const [answersSubmitted, setAnswersSubmitted] = useState(false);
  const { courseId, activityId } = useParams();
  const selectedCourse = courses.find((course) => course.courseId === courseId);
  const selectedLesson = selectedCourse?.lessons.find((lesson) => lesson.activity.activityId === activityId);
  const questions = selectedLesson?.activity.questions ?? [];

  const getAnswers = selectedAnswersId.map((answer) =>
    questions.some((question) => answer.questionId === question.questionId && answer.choiceId === question.answer)
  );
  const correctAnswers = getAnswers.filter((answer) => answer === true);
  const wrongAnswers = getAnswers.filter((answer) => answer !== true);

  const submitAnswers = () => {
    setAnswersSubmitted(true);
  };

  return (
    <div className="grid grid-cols-4 mt-4 w-[80%] gap-3">
      <div className="col-span-1">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col items-center gap-2 rounded-md shadow w-full py-4 bg-white">
            <span className="font-bold">Quiz Progress</span>
            <span className="font-light">{selectedAnswersId.length} Question Answered</span>
            <span className="font-light">{questions.length - selectedAnswersId.length} Question Remaning</span>
            <Button
              disabled={answersSubmitted || selectedAnswersId.length !== questions.length}
              onClick={submitAnswers}
              className={merge(
                "bg-login",
                selectedAnswersId.length !== questions.length ? "opacity-50 hover:cursor-not-allowed" : "hover:cursor-pointer"
              )}
              label={answersSubmitted ? "Submitted" : "End Quiz"}
            />
          </div>

          {answersSubmitted && (
            <div className="flex flex-col items-center gap-2 rounded-md shadow w-full py-4 bg-white">
              <span className="font-bold">Quiz Summary</span>
              <span className="font-semibold">
                Score: {correctAnswers.length} / {questions.length}
              </span>
              <span className="font-light">{correctAnswers.length} Question Correct</span>
              <span className="font-light">{wrongAnswers.length} Question Incorrect</span>
              <Link to={"/main/courses"}>
                <Button className="bg-login" label={"Back to Courses"} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex flex-col gap-4">
          {questions.map((question, i) => {
            const answerName = question.choices.find((choice) => choice.choiceId === question.answer);
            return (
              <QuestionCard
                key={question.questionId}
                answerSubmitted={answersSubmitted}
                answerId={question.answer}
                answerName={answerName?.choice}
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
    </div>
  );
};

export default SelectedCourseActivity;
