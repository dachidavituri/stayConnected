import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";

const QuestionPageData = {
  question: {
    title: "What is a Jotai?",
    description:
      "Jotai is a simple and fast state management library for Next.js. It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are derived state that can be created using the selector function.",
    askedBy: {
      name: "Tinatin Gordadze",
      avatarUrl: "/avatar.png",
    },
    date: "02.11.2024",
  },
};

const Question: React.FC = () => {
  return (
    <Card className="p-6 md:p-8 bg-white rounded-lg flex flex-col gap-8">
      <div className="flex justify-end items-center gap-6">
        <span className="text-sm text-black font-bold">
          {QuestionPageData.question.askedBy.name}
        </span>
        <span className="text-sm text-gray-500">
          {QuestionPageData.question.date}
        </span>
      </div>

      <Heading level={1} className="text-2xl md:text-3xl font-bold">
        {QuestionPageData.question.title}
      </Heading>

      <p className="text-base text-gray-700 leading-relaxed">
        {QuestionPageData.question.description}
      </p>
    </Card>
  );
};

export default Question;
