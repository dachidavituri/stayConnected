/* eslint-disable @typescript-eslint/no-explicit-any */
interface QuestionTag {
  id: number;
  name: string;
}

export interface QuestionItemProps {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  tags: QuestionTag[];
  numberOfAnswers?: number;
}

export type RatingItem = {
  username: string;
  rating: number;
};
export interface AnswerCardProps {
  answer: {
    id: number;
    content: string;
    author: string;
    question: number;
    createdAt: string;
    isAccepted: boolean;
    likes: any[];
  };
}

interface Tag {
  name: string;
  id: number;
}

export interface DetailQuestionProps {
  author: string | undefined;
  createdAt: string | undefined;
  description: string | undefined;
  tags: Tag[] | undefined;
  title: string | undefined;
}
