import React from "react";
import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";

import { Badge } from "@/components/ui/badge";

interface QuestionTag {
  id: number;
  name: string;
}

interface QuestionItemProps {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  tags: QuestionTag[];
  number_of_answers?: number;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  title,
  description,
  author,
  createdAt,
  tags,
  number_of_answers,
}) => {
  const dateObj = new Date(createdAt);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;
  return (
    <Card className=" flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <Heading level={1}>{title}</Heading>
        <Heading level={3}>{author}</Heading>
      </div>
      <div className="">{description}</div>
      <div className="flex flex-col md:flex-row  justify-between items-center gap-6">
        <div className="flex flex-wrap  gap-2">
          {tags.map((badge, index) => {
            return <Badge key={index}>{badge.name}</Badge>;
          })}
        </div>
        <div className="w-full flex items-center gap-4 md:w-48 justify-end ">
          <div>
            <span className="font-semibold text-lg">{number_of_answers}</span>
            <span className="font-semibold ml-1">answers</span>
          </div>
          <div className="text-[12px] text-gray-500 font-semibold mt-1">
            {formattedDate}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuestionItem;
