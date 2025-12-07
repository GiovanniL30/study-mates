import merge from "@/lib/merge";
import { type SelectedAnswer } from "@/types/SelectedAnswer";

interface QuestionCardChoiceProps {
  choiceId: string;
  choice: string;
  questionId: string;
  selectedAnswer: SelectedAnswer[];
  setSelectedAnswer: (value: SelectedAnswer[]) => void;
}

const QuestionCardChoice = ({
  questionId,
  choiceId,
  choice,
  selectedAnswer,
  setSelectedAnswer,
}: QuestionCardChoiceProps) => {
  const handleAnswerClick = () => {
    const ohterAnswers = selectedAnswer.filter((answer) => answer.questionId !== questionId);
    const updatedAnswers = [...ohterAnswers, { questionId, choiceId }];
    setSelectedAnswer(updatedAnswers);
  };

  return (
    <div className="flex gap-2 pl-2 items-center">
      <div
        onClick={handleAnswerClick}
        className={merge(
          "p-2 border rounded-full hover:cursor-pointer hover:bg-q-select",
          selectedAnswer.some((answer) => answer.questionId === questionId && answer.choiceId === choiceId) &&
            "bg-q-select"
        )}
      ></div>
      <span className="text-sm">{choice}</span>
    </div>
  );
};

export default QuestionCardChoice;
