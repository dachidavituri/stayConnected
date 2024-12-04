import Loader from "@/components/loader/loader";
import { useHttpInterceptor } from "@/hooks/useHttpInterceptor";
import { useGetMe } from "@/react-query/query/auth";
import { createContext, PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AuthContextType = any;

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isRefreshLoading } = useHttpInterceptor();
  const accessToken = localStorage.getItem("accessToken");
  const { data: user } = useGetMe({ isEnabled: !!accessToken, accessToken });
  // console.log(user)

  return (
    <AuthContext.Provider value={{ user }}>
      {isRefreshLoading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
