import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router";

const AuthRegisterGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to={`/home`} />;
  }
  return children || <Outlet />;
};
export default AuthRegisterGuard;
