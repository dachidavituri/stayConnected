import { useMutation } from "@tanstack/react-query";
import { createAnswer } from "@/api/answers";
import { AnswerPayload } from "@/api/answers/index.types";

export const useCreateAnswer = (id: string | undefined) => {
  return useMutation({
    mutationKey: ["create-answer", id],
    mutationFn: (payload: AnswerPayload) => createAnswer(payload, id),
  });
};
