export interface CreateQuestionPayload {
  title: string;
  description: string;
  tags: Tags[];
}
interface Tags {
  name: string;
}
export interface Tag {
  id: number;
  name: string;
}
interface Result {
  id: number;
  title: string;
  description: string;
  author: string;
  created_at: string;
  tags: Tag[];
  numberOfAnswers: number;
  totalLikes: number;
}

export interface QuestionResponseAll {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface QuestionResponse {
  author: string | undefined;
  createdAt: string;
  description: string;
  id: number;
  number_of_answers: number;
  tags: Tag[];
  title: string;
}
