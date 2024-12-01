import React from "react";
import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";
// import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";

type QuestionItemProps = {
  title: string;
  author: string;
  date: string;
  question: string;
  badges: string[];
  link: string;
  answers: number;
};

const QuestionItem: React.FC<QuestionItemProps> = ({
  title,
  author,
  date,
  question,
  answers,
  badges,
  link,
}) => {
  return (
    <Link to={link}>
      <Card className=" flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <Heading level={1}>{title}</Heading>
          <Heading level={3}>{author}</Heading>
        </div>
        <div className="">{question}</div>
        <div className="flex flex-col md:flex-row  justify-between items-center gap-6">
          <div className="flex flex-wrap  gap-2">
            {badges.map((badge, index) => {
              return <Badge key={index}>{badge}</Badge>;
            })}
          </div>
          <div className="w-full flex items-center gap-4 md:w-48 justify-end ">
            <div>
              <span className="font-semibold text-lg">{answers}</span>
              <span className="font-semibold ml-1">answers</span>
            </div>
            <div className="text-[12px] text-gray-500 font-semibold mt-1">
              {date}
            </div>
          </div>
        </div>

        {/*{badges.map((badge, index) => (
        <Badge key={index}>{badge}</Badge>
      ))} */}
      </Card>
    </Link>
  );
};

export default QuestionItem;
