import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router";

const ProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = true;
  if (!user) {
    return <Navigate to={`/login`} />;
  }
  return children || <Outlet />;
};
export default ProfileGuard;
