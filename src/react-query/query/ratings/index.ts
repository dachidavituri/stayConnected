import { getRatings } from "@/api/ratings";
import { useQuery } from "@tanstack/react-query";

export const useRatings = () => {
  return useQuery({
    queryKey: ["rating-list"],
    queryFn: getRatings,
  });
};
