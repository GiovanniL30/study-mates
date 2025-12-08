import merge from "@/lib/merge";
import { type SelectedAnswer } from "@/types/SelectedAnswer";

interface QuestionCardChoiceProps {
  choiceId: string;
  choice: string;
  questionId: string;
  selectedAnswer: SelectedAnswer[];
  setSelectedAnswer: (value: SelectedAnswer[]) => void;
  answerId: string;
  answerSubmitted: boolean;
}

const QuestionCardChoice = ({
  questionId,
  choiceId,
  choice,
  selectedAnswer,
  setSelectedAnswer,
  answerId,
  answerSubmitted,
}: QuestionCardChoiceProps) => {
  const selectedChoice = selectedAnswer.some((answer) => answer.questionId === questionId && answer.choiceId === choiceId); //object
  const isCorrectChoice = answerId === choiceId;
  const isSelected = Boolean(selectedChoice); //object exist = true
  const isSubmitted = answerSubmitted === true;
  const isSelectedCorrect = isCorrectChoice && isSubmitted;
  const isSelectedWrong = isSelected && !isCorrectChoice && isSubmitted;

  const handleAnswerClick = () => {
    if (answerSubmitted === false) {
      const otherAnswers = selectedAnswer.filter((answer) => answer.questionId !== questionId);
      const updatedAnswers = [...otherAnswers, { questionId, choiceId }];
      setSelectedAnswer(updatedAnswers);
    }
  };

  return (
    <div className="flex gap-2 pl-2 items-center">
      <div onClick={handleAnswerClick} className="p-0.5 border rounded-full hover:cursor-pointer hover:bg-amber-500">
        <div
          className={merge(
            "rounded-full p-1.5",
            isSelectedCorrect && "bg-q-select",
            isSelectedWrong && "bg-red-500",
            !isSubmitted && isSelected && "bg-amber-500"
          )}
        ></div>
      </div>
      <span className="text-sm">{choice}</span>
    </div>
  );
};

export default QuestionCardChoice;
