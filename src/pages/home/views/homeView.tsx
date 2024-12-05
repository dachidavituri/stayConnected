import React, { useState } from "react";
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
import { useQuestions } from "@/react-query/query/questions";
import { useRatings } from "@/react-query/query/ratings";

const HomeView: React.FC = () => {
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: questionsArr } = useQuestions(nextPageUrl);
  const { data: ratingsArr } = useRatings();
  console.log(ratingsArr);
  const totalPages = (questionsArr && questionsArr?.count / 4) || 1;
  console.log(questionsArr);
  const { currentItems, handleNextPage, handlePreviousPage } = usePagination(
    questionsArr?.results || [],
    4,
  );
  const handleNextPageClick = () => {
    if (questionsArr?.next) {
      const queryString = new URL(questionsArr.next).search;
      setNextPageUrl(queryString);
      setCurrentPage((prevCur) => prevCur + 1);
    }
    handleNextPage();
  };
  const handlePreviousPageClick = () => {
    if (questionsArr?.previous) {
      const queryString = new URL(questionsArr.previous).search;
      setNextPageUrl(queryString);
      setCurrentPage((prevCur) => prevCur - 1);
    }
    handlePreviousPage();
  };
  return (
    <section>
      <Container>
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          <div className="w-full xl:w-[30%]">
            <Card className="flex flex-col gap-6">
              <Heading level={1}>Top users</Heading>
              {ratingsArr &&
                ratingsArr.results.map((data, index) => {
                  return <RatingItem key={index} {...data} />;
                })}
            </Card>
          </div>
          <div className="flex flex-col gap-6 w-full xl:w-[70%]">
            {currentItems.map((data, index) => (
              <Link to={`/questions/${data.id}`} key={index}>
                <QuestionItem {...data} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination className="mt-2">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPageClick} />
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
              <PaginationNext onClick={handleNextPageClick} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Container>
    </section>
  );
};

export default HomeView;
