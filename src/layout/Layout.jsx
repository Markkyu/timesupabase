import { Outlet, useNavigate } from "react-router-dom";

import Header from "@components/Header";
import useAuthStore from "@stores/useAuthStore";

import Sidebar, { SidebarItem } from "../components/Sidebar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AssignmentReturnedOutlinedIcon from "@mui/icons-material/AssignmentReturnedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function Layout() {
  const { user, profile } = useAuthStore();
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="h-dvh flex flex-col overflow-hidden">
        <Header user_name={profile?.username} user_role={profile?.role} />
        <div className="flex flex-1 min-h-0">
          <Sidebar>
            <SidebarItem
              icon={<DashboardOutlinedIcon size={20} />}
              text="Dashboard"
              path=""
            />
            <SidebarItem
              icon={<PeopleAltOutlinedIcon size={20} />}
              text="Teachers"
              path="teachers"
            />
            <SidebarItem
              icon={<AssignmentReturnedOutlinedIcon size={20} />}
              text="User Assigment"
              path="assign-user"
            />
            <SidebarItem
              icon={<KeyOutlinedIcon size={20} />}
              text="Manage Roles"
              path="role-management"
            />
            <hr className="my-3" />
            <SidebarItem
              icon={<InfoOutlinedIcon size={20} />}
              text="About"
              path="about"
            />
            <SidebarItem
              icon={<HelpOutlineOutlinedIcon size={20} />}
              text="Tutorial"
              path="tutorial"
            />
            <SidebarItem
              icon={<LogoutIcon size={20} />}
              text="Logout"
              onClick={handleLogout}
            />
          </Sidebar>
          <main className="flex-1 overflow-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
