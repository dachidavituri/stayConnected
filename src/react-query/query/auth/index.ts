import { getMe } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export const useGetMe = () => {
  return useQuery({ queryKey: ["me"], queryFn: getMe });
};
