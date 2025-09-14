import { useParams, useNavigate } from "react-router-dom";
import useCourses from "@hooks/useCourses";
import SchedulerSemester from "./SchedulerSemester";
import useAuthStore from "@stores/useAuthStore";
import { useEffect } from "react";

const uniqueYears = [1, 2, 3, 4];
const uniqueSemesters = [1, 2];

export default function SchedulerList() {
  const { collegeID } = useParams();
  const { courses, courses_loading } = useCourses(collegeID);

  // Frontend check of user assigned department
  // const { profile } = useAuthStore();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const validEndPoint =
  //     profile.role.includes("user") && collegeID == profile.assigned_department;

  //   if (!validEndPoint) {
  //     console.warn("Not a valid endpoint, redirecting...");
  //     navigate(`/`, { replace: true });
  //   }
  // }, [collegeID, profile, navigate]);

  return (
    <div className="h-full flex flex-col p-5 font-sans overflow-auto">
      <h1 className="text-4xl font-bold text-center mb-5">
        Course List
        <p className="text-gray-600 text-lg font-normal">
          🚧 Still working on manual plotting. Both buttons lead to the same
          page 🚧
        </p>
      </h1>
      {uniqueYears.map((year) => (
        <div
          key={year}
          className="mb-5 border border-gray-300 rounded-lg bg-gray-50 p-4"
        >
          <h2 className="text-2xl font-bold text-center mb-2">Year {year}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {uniqueSemesters.map((sem) => (
              <SchedulerSemester
                key={sem}
                sem={sem}
                year={year}
                collegeID={collegeID}
                courses={courses}
                loading={courses_loading}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
