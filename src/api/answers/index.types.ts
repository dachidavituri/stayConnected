export interface AnswerPayload {
  content: string;
  question: number;
}
interface Answer {
  id: number;
  content: string;
  author: string;
  question: number;
  createdAt: string;
  isAccepted: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  likes: any[];
}

export interface AnswerListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Answer[];
}
