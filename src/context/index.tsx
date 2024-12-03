import { useGetMe } from "@/react-query/query/auth";
import { createContext, PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AuthContextType = any;

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: user } = useGetMe();
  // console.log(user)

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
