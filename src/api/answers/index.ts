import { httpClient } from "..";
import { AnswerListResponse, AnswerPayload } from "./index.types";

export const createAnswer = async (
  payload: AnswerPayload,
  id: string | undefined,
) => {
  return await httpClient
    .post(`forum/questions/${id}/answers/`, payload)
    .then((res) => res.data);
};
export const getAnswers = async (id: string | undefined) => {
  return httpClient
    .get<AnswerListResponse>(`/forum/questions/${id}/answers`, {
      headers: { "ngrok-skip-browser-warning": "true" },
    })
    .then((res) => res.data);
};
