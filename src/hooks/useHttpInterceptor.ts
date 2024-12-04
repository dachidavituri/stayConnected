import { httpClient } from "@/api";
import { refresh } from "@/api/auth";
import { afterSignInSuccess } from "@/pages/login/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHttpInterceptor = () => {
  const navigate = useNavigate();
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    httpClient.interceptors.response.use(
      (res) => {
        return res;
      },
      (resErr) => {
        const refreshToken = localStorage.getItem("refreshToken");
        console.log(`refreshtoken is`, refreshToken);
        if (resErr.status === 401 && refreshToken) {
          setIsRefreshLoading(true);

          refresh({ payload: { refresh: refreshToken } })
            .then((res) => {
              afterSignInSuccess({
                accessToken: res.access,
                refreshToken: res.refresh,
              });
              queryClient.invalidateQueries({ queryKey: ["me"] });
              navigate("/home");
            })
            .catch(() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              navigate("/login");
            })
            .finally(() => {
              setIsRefreshLoading(false);
            });
        }

        if (resErr.status === 401) {
          navigate("/login");
        }

        return resErr;
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isRefreshLoading };
};
