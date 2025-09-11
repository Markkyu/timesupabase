import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@stores/useAuthStore";

const ProtectedRoute = ({ roles }) => {
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
