import React from "react";
import Question from "../components/question";
import AnswerCard from "../components/answerCard";
import AnswerFild from "../components/answerField";
import { useParams } from "react-router";
import { useDetailQuestion } from "@/react-query/query/questions";
import { useGetAnswer } from "@/react-query/query/answers";

const SingleQuestionView: React.FC = () => {
  const { id } = useParams();
  const { data: detailQuestion } = useDetailQuestion(id);
  const { data: answersList } = useGetAnswer(id);
  const answers = Array.isArray(answersList?.results)
    ? answersList.results
    : [];
  return (
    <div className="py-10 px-4 md:px-0 max-w-[820px] mx-auto">
      <Question
        author={detailQuestion?.author}
        createdAt={detailQuestion?.createdAt}
        description={detailQuestion?.description}
        tags={detailQuestion?.tags}
        title={detailQuestion?.title}
      />
      <div>
        {answers.map((answer, index) => (
          <AnswerCard key={index} answer={answer} />
        ))}
      </div>
      <AnswerFild />
    </div>
  );
};

export default SingleQuestionView;
