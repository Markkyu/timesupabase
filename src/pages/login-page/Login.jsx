import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import LoginForm from "./LoginForm";
import useAuthStore from "@stores/useAuthStore";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      <div className="container-fluid h-dvh flex flex-col relative">
        <div className="flex grow-1 relative">
          <div className="w-full flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-300 px-4 relative overflow-hidden">
            <div className="max-w-6xl grid grid-cols-2 items-center gap-12">
              <div className="text-center md:text-left space-y-6">
                <h1 className="text-5xl 2xl:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
                  Create schedules with Timelyfy for MSEUF-CI
                </h1>
                <p className="text-lg md:text-xl text-gray-800 font-medium">
                  Timelyfy helps you automate schedules. Just add courses,
                  assign teachers — and we’ll handle the rest.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6 z-10 relative">
                  <Button
                    onClick={() => setShowLogin(true)}
                    size="large"
                    variant="contained"
                    color="primary"
                    endIcon={<LoginIcon />}
                    sx={{ fontWeight: "bold", borderRadius: 4 }}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={logout}
                    size="large"
                    variant="contained"
                    color="error"
                    endIcon={<LogoutIcon />}
                    sx={{ fontWeight: "bold", borderRadius: 4 }}
                  >
                    Logout
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  // src="https://cdni.iconscout.com/illustration/premium/thumb/scheduling-timetable-illustration-download-in-svg-png-gif-file-formats--task-management-time-business-planning-schedule-effective-artistry-pack-people-illustrations-5295176.png?f=webp"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/scheduling-task-management-illustration-download-in-svg-png-gif-file-formats--time-business-planning-schedule-people-illustrations-3702194.png"
                  alt="Scheduling Illustration"
                  className="w-full max-w-md z-1"
                />
              </div>

              {/* Decorative background circles */}
              <div className="absolute top-20 left-20 w-64 h-64 bg-red-600 rounded-full opacity-20 blur-2xl z-0" />
              <div className="absolute -bottom-20 -right-20 w-130 h-130 bg-red-500 rounded-full opacity-20 blur-3xl z-0" />
              <div className="absolute top-0 right-0 w-50 h-50 bg-red-500 rounded-full opacity-20 blur-2xl z-0" />
              <div className="absolute bottom-40 left-100 w-68 h-68 bg-red-500 rounded-full opacity-20 blur-3xl z-0" />
            </div>
          </div>
        </div>
      </div>

      <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
    </>
  );
};

export default Login;
