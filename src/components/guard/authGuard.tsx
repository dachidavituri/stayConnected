import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router";

const AuthRegisterGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = false;
  if (user) {
    return <Navigate to={`/questions`} />;
  }
  return children || <Outlet />;
};
export default AuthRegisterGuard;
