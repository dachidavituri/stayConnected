import { getAnswers } from "@/api/answers";
import { useQuery } from "@tanstack/react-query";

export const useGetAnswer = (id: string | undefined) => {
  return useQuery({
    queryKey: ["answers-list"],
    queryFn: () => getAnswers(id),
    retry: 0,
    refetchOnWindowFocus: false,
  });
};
