export interface CreateQuestionPayload {
  title: string;
  description: string;
  tags: string[];
}

export interface Tag {
  id: number;
  name: string;
}

export interface QuestionResponse {
  id: number;
  title: string;
  description: string;
  author: string;
  created_at: string;
  tags: Tag[];
}
