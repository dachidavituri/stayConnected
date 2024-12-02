import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";

interface QuestionProps {
  question: {
    author: string;
    date: string;
    title: string;
    description: string;
  };
}

const Question: React.FC<QuestionProps> = ({question}) => {
  return (
    <Card className="p-6 md:p-8 bg-white rounded-lg flex flex-col gap-8">
      <div className="flex justify-end items-center gap-6">
        <span className="text-sm text-black font-bold">
          {question.author}
        </span>
        <span className="text-sm text-gray-500">
          {question.date}
        </span>
      </div>

      <Heading level={1} className="text-2xl md:text-3xl font-bold">
        {question.title}
      </Heading>

      <p className="text-base text-gray-700 leading-relaxed">
        {question.description}
      </p>
    </Card>
  );
};

export default Question;
