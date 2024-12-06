import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const AuthRegisterGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  const toNavigate =
    location?.state?.from?.pathname + location?.state?.from?.search || "/home";
  if (user) {
    return <Navigate to={toNavigate} />;
  }
  return children || <Outlet />;
};
export default AuthRegisterGuard;
