import useColleges from "@hooks/useColleges";
import useTeachers from "@hooks/useTeachers";
import useCoursesAll from "@hooks/useCoursesAll";

import StatCard from "./StatCard";
import CollegeCard from "./CollegeCard";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SchoolIcon from "@mui/icons-material/School";
import PeopleAltIcon from "@mui/icons-material/People";
import useAuthStore from "@stores/useAuthStore";

function GlobalDashboard() {
  const { colleges, colleges_error, colleges_loading } = useColleges();
  const { teachers, teachers_error, teachers_loading } = useTeachers();
  const { courses, courses_error, courses_loading } = useCoursesAll();

  const { user, profile } = useAuthStore();

  const stats = {
    courses: courses?.length,
    teachers: teachers?.length,
    scheduled: 0,
    conflicts: 0,
  };

  return (
    <main className="h-full flex flex-col bg-gray-200 p-6 overflow-hidden gap-6">
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Courses" count={stats.courses} icon={SchoolIcon} />
        <StatCard
          title="Teachers"
          count={stats.teachers}
          icon={PeopleAltIcon}
        />
        <StatCard
          title="Scheduled Slots"
          count={stats.scheduled}
          icon={EventAvailableIcon}
        />
        <StatCard
          title="Conflicts"
          count={stats.conflicts}
          icon={WarningAmberIcon}
        />
      </div>

      {/* Colleges */}
      <div className="flex flex-col flex-1 bg-white min-h-0 rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-4 flex rounded-lg">
          College Programs
        </h2>

        {colleges_loading ? (
          <div className="flex flex-1 bg-gray-100 rounded-2xl items-center justify-center">
            <p className="text-gray-600 font-medium text-2xl">
              Loading colleges...
            </p>
          </div>
        ) : colleges.length === 0 ? (
          <div className="flex flex-1 items-center bg-gray-100 rounded-2xl justify-center">
            <p className="text-gray-600 font-medium text-2xl">
              No college folder found. Click "Add College" to begin.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6 overflow-auto flex-1">
            {colleges.map((college) => (
              <CollegeCard key={college.college_id} college={college} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default GlobalDashboard;
