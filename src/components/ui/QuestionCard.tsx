import { type QuestionChoice } from "@/types/CourseData";
import QuestionCardChoice from "@/components/ui/QuestionCardChoice";
import { type SelectedAnswer } from "@/types/SelectedAnswer";

interface QuestionCardProps {
  answerSubmitted: boolean;
  questionNumber: string;
  question: string;
  questionId: string;
  questionChoices: QuestionChoice[];
  answerId: string;
  selectedAnswer: SelectedAnswer[];
  setSelectedAnswer: (value: SelectedAnswer[]) => void;
}

const QuestionCard = ({
  question,
  questionNumber,
  questionChoices,
  questionId,
  answerId,
  answerSubmitted,
  selectedAnswer,
  setSelectedAnswer,
}: QuestionCardProps) => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex items-center gap-2 bg-q-header p-2 rounded-t-md">
        <div className="bg-q-body py-1 px-3 rounded-full font-bold text-sm">{questionNumber}</div>
        <span className="font-bold text-lg">{question}</span>
      </div>
      <div className="flex flex-col gap-2 bg-q-body p-4 rounded-b-md">
        {questionChoices.map((choice) => {
          return (
            <QuestionCardChoice
              key={choice.choiceId}
              questionId={questionId}
              choiceId={choice.choiceId}
              choice={choice.choice}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              answerId={answerId}
              answerSubmitted={answerSubmitted}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
