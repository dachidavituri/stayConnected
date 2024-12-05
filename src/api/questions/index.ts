import { httpClient } from "..";
import { QUESTION_ENDPOINTS } from "./index.enum";
import {
  CreateQuestionPayload,
  QuestionResponse,
} from "./index.types";

export const createQuestion = async (payload: CreateQuestionPayload) => {
    const response = await httpClient.post(QUESTION_ENDPOINTS.CREATE, payload);
    return response.data;
};
export const getQuestion = async (id: number) => {
  const endpoint = QUESTION_ENDPOINTS.GET_ONE.replace(":id", id.toString());
  return httpClient.get<QuestionResponse>(endpoint).then((res) => res.data);
};

