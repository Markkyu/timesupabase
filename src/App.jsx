import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useAuthStore from "@stores/useAuthStore";
import ProtectedRoute from "@context/ProtectedRoute";
import LoadingBackdrop from "@components/LoadingBackdrop.jsx";
import Layout from "@layout/Layout.jsx";
import UserAssignmentPage from "@pages/user-assignment/UserAssignmentPage";
import SchedulerList from "@pages/scheduler-page/SchedulerList";

const Dashboard = lazy(() => import("@pages/dashboard/Dashboard.jsx"));
const Login = lazy(() => import("@pages/login-page/Login.jsx"));
const TimetablePage = lazy(() =>
  import("@pages/timetable-page/TimetablePage.jsx")
);
const AboutPage = lazy(() => import("@pages/about-page/AboutPage.jsx"));
const Tutorial = lazy(() => import("@pages/Tutorial"));
const PageNotFound = lazy(() => import("@pages/PageNotFound"));
const CourseList = lazy(() => import("@pages/course-page/CourseList"));
const TeacherPage = lazy(() => import("@pages/teacher-page/TeacherPage.jsx"));
const RoleManagement = lazy(() =>
  import("@pages/role-management-page/RoleManagement.jsx")
);
const AllTeachersPage = lazy(() =>
  import("@pages/teacher-page/AllTeachersPage.jsx")
);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingBackdrop />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route
                element={
                  <ProtectedRoute roles={["admin", "moderator", "user"]} />
                }
              >
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/scheduler/:collegeID/timetable"
                  element={<TimetablePage />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/teachers/:department" element={<TeacherPage />} />
                <Route path="/teachers" element={<AllTeachersPage />} />
                <Route
                  path="/course-list/:collegeID"
                  element={<CourseList />}
                />
                <Route
                  path="/scheduler/:collegeID"
                  element={<SchedulerList />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tutorial" element={<Tutorial />} />
              </Route>

              <Route
                element={<ProtectedRoute roles={["admin", "moderator"]} />}
              >
                <Route path="/role-management" element={<RoleManagement />} />
                <Route path="/assign-user" element={<UserAssignmentPage />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
