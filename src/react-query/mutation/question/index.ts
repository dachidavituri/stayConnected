import { useMutation } from "@tanstack/react-query";
import { createQuestion } from "@/api/questions";

export const useCreateQuestion = () => {
  return useMutation({
    mutationKey: ["create-question"],
    mutationFn: createQuestion,
  });
};
