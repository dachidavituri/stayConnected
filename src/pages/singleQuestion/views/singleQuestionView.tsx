import Question from "../components/question";
import AnswerCard from "../components/answerCard";
import AnswerFild from "../components/answerField";

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
  answers: [
    {
      body: "Jotai is a simple and fast state management library for Next.js. It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are derived state that can be created using the selector function.",
      answeredBy: {
        name: "Davit Gordadze",
        avatarUrl: "/avatar.png",
        rating: 3,
      },
      date: "06.11.2024",
    },
  ],
};

const SingleQuestionView: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-0 max-w-[820px] mx-auto">
      <Question />
      <div>
        {QuestionPageData.answers.map((answer, index) => (
          <AnswerCard key={index} answer={answer} />
        ))}
      </div>
      <AnswerFild />
    </div>
  );
};

export default SingleQuestionView;
