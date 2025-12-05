import { type QuestionChoice } from "@/types/CourseData";

interface QuestionCardProps {
  questionNumber: string;
  question: string;
  questionChoices: QuestionChoice[];
}

const QuestionCard = ({ question, questionNumber, questionChoices }: QuestionCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <div>{questionNumber}</div>
        <span>{question}</span>
      </div>
      <div className="flex flex-col gap-2">
        {questionChoices.map((choice) => {
          return (
            <div>
              <span>{choice.choice}</span>
              <span>{choice.choiceId}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
