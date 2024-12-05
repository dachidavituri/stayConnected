import { httpClient } from "..";
import { QUESTION_ENDPOINTS } from "./index.enum";
import {
  CreateQuestionPayload,
  QuestionResponse,
  QuestionResponseAll,
} from "./index.types";

export const createQuestion = async (payload: CreateQuestionPayload) => {
  const response = await httpClient.post(QUESTION_ENDPOINTS.CREATE, payload);
  return response.data;
};
export const getAllQuestion = async (query: string | null) => {
  const URL = "/forum/questions/";
  const url = query ? `${URL}${query}` : URL;
  return httpClient
    .get<QuestionResponseAll>(url, {
      headers: { "ngrok-skip-browser-warning": "true" },
    })
    .then((res) => res.data);
};

export const getQuestion = async (id: string | undefined) => {
  return httpClient
    .get<QuestionResponse>(`/forum/questions/${id}`, {
      headers: { "ngrok-skip-browser-warning": "true" },
    })
    .then((res) => res.data);
};
