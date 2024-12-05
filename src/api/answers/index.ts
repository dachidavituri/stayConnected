import { httpClient } from "..";
import { AnswerPayload } from "./index.types";

export const createAnswer = async (
  payload: AnswerPayload,
  id: string | undefined,
) => {
  return await httpClient
    .post(`forum/questions/${id}/answers/`, payload)
    .then((res) => res.data);
};
