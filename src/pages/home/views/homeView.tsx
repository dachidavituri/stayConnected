import React from "react";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import QuestionItem from "../components/questions";
import RatingItem from "../components/raitings";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import usePagination from "@/hooks/pagination";

const QUESTIONITEM_DYMMY_DATA = [
  {
    title: "1 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "Jotai is a simple and fast state management library for React.",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/1",
    answers: 12,
  },
  {
    title: "2 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "What are selectors in Jotai?",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/2",
    answers: 5,
  },
  {
    title: "3 What is the difference between Jotai and Redux?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "How does Jotai differ from Redux in state management?",
    badges: ["react", "Jotai", "Redux", "next"],
    link: "/questions/3",
    answers: 7,
  },
  {
    title: "4 How to use Jotai with TypeScript?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "Can Jotai be used with TypeScript?",
    badges: ["react", "Jotai", "TypeScript", "next"],
    link: "/questions/4",
    answers: 3,
  },
  {
    title: "5 How to implement atoms in Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "How can atoms be created and used in Jotai?",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/5",
    answers: 8,
  },
  {
    title: "6 What is the best way to manage global state in React?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "What strategies can be used to manage global state?",
    badges: ["react", "Jotai", "State Management", "next"],
    link: "/questions/6",
    answers: 20,
  },
];

const RATINGS_DAMMY_DATA = [
  { name: "1 Tiko Gordadze", rating: 32 },
  { name: "2 Tiko Gordadze", rating: 2 },
  { name: "3 Tiko Gordadze", rating: 62 },
];

const HomeView: React.FC = () => {
  const {
    currentItems,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    totalPages,
  } = usePagination(QUESTIONITEM_DYMMY_DATA, 3);
  return (
    <section>
      <Container>
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          <div className="w-full xl:w-[30%]">
            <Card className="flex flex-col gap-6">
              <Heading level={1}>Rating of users</Heading>
              {RATINGS_DAMMY_DATA.map((data, index) => {
                return <RatingItem key={index} {...data} />;
              })}
            </Card>
          </div>
          <div className="flex flex-col gap-6 w-full xl:w-[70%]">
            {currentItems.map((data, index) => (
              <Link to={data.link} key={index}>
                <QuestionItem {...data} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination className="mt-2">
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
      </Container>
    </section>
  );
};

export default HomeView;
