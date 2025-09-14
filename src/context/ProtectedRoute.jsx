import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@stores/useAuthStore";

const ProtectedRoute = ({ roles }) => {
  const { user, profile } = useAuthStore();

  if (!profile) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(profile.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
