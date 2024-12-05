import { getAllQuestion, getQuestion } from "@/api/questions";
import { useQuery } from "@tanstack/react-query";

export const useQuestions = (nextPageUrl: string | null) => {
  return useQuery({
    queryKey: ["all-question", nextPageUrl],
    queryFn: () => getAllQuestion(nextPageUrl),
  });
};

export const useDetailQuestion = (id: string | undefined) => {
  return useQuery({
    queryKey: ["one-question", id],
    queryFn: () => getQuestion(id),
  });
};
