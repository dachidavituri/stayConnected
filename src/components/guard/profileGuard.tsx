import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const ProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  console.log(location);
  console.log(user);
  if (!user) {
    return <Navigate state={{ from: location }} to={`/login`} />;
  }
  return children || <Outlet />;
};
export default ProfileGuard;
