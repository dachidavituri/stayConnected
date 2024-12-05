import { useMutation } from "@tanstack/react-query";
import { createQuestion } from "@/api/questions";
import { createAnswer } from "@/api/answers";
import { AnswerPayload } from "@/api/answers/index.types";

export const useCreateQuestion = () => {
  return useMutation({
    mutationKey: ["create-question"],
    mutationFn: createQuestion,
  });
};

export const useCreateAnswer = (id: string | undefined) => {
  return useMutation({
    mutationKey: ["create-answer", id],
    mutationFn: (payload: AnswerPayload) => createAnswer(payload, id),
  });
};
