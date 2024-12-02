import React from "react";
import Question from "../components/question";
import AnswerCard from "../components/answerCard";
import AnswerFild from "../components/answerField";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import usePagination from "@/hooks/pagination";

const QuestionPageData = {
  question: {
    title: "What is a Jotai?",
    description:
      "Jotai is a simple and fast state management library for Next.js. It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are derived state that can be created using the selector function.",
    author: "Tinatin Gordadze",
    date: "02.11.2024",
  },
  answers: [
    {
      body: "Jotai is a simple and fast state management library for Next.js. It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are derived state that can be created using the selector function.",
      answeredBy: {
        name: "Davit Gordadze",
        likes: 3,
      },
      date: "06.11.2024",
    },
    {
      body: "Jotai is a simple and fast state management library for Next.js. It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are derived state that can be created using the selector function.",
      answeredBy: {
        name: "Davit Gordadze",
        likes: 3,
      },
      date: "06.11.2024",
    },
    {
      body: "Jotai is a simple and fast state management library for Next.js. It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are derived state that can be created using the selector function.",
      answeredBy: {
        name: "Davit Gordadze",
        likes: 3,
      },
      date: "06.11.2024",
    },
    {
      body: "Jotai is a simple and fast state management library for Next.js. It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are derived state that can be created using the selector function.",
      answeredBy: {
        name: "Davit Gordadze",
        likes: 3,
      },
      date: "06.11.2024",
    },
  ],
};

const SingleQuestionView: React.FC = () => {
  const {
    currentItems: paginatedAnswers,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    totalPages,
  } = usePagination(QuestionPageData.answers, 2);

  const showPagination = QuestionPageData.answers.length > 2;

  return (
    <div className="py-10 px-4 md:px-0 max-w-[820px] mx-auto">
      <Question question={QuestionPageData.question} />
      <div>
        {paginatedAnswers.map((answer, index) => (
          <AnswerCard key={index} answer={answer} />
        ))}
      </div>
      {showPagination && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="cursor-default">
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
      <AnswerFild />
    </div>
  );
};

export default SingleQuestionView;
