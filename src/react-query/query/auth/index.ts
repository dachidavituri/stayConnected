import { setAuthorizationHeader } from "@/api";
import { getMe } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export const useGetMe = ({
  isEnabled,
  accessToken,
}: {
  isEnabled: boolean;
  accessToken: string | null;
}) => {
  if (accessToken) {
    setAuthorizationHeader(`Bearer ${accessToken}`);
  }
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: 0,
    gcTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
    enabled: isEnabled,
  });
};
