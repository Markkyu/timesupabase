import useAuthStore from "@stores/useAuthStore";
import GlobalDashboard from "./GlobalDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const { profile } = useAuthStore();

  const currentUserRole = profile?.role;
  const superRoles = ["admin", "moderator"];

  if (superRoles.includes(currentUserRole)) {
    return <GlobalDashboard />;
  } else {
    return <UserDashboard />;
  }
};

export default Dashboard;
