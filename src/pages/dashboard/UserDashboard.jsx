import { useEffect, useState } from "react";
import useAuthStore from "@stores/useAuthStore";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { user, profile } = useAuthStore();

  // If no college program is assigned to a regular user
  const isDisabled = !profile?.colleges?.college_name;

  return (
    <div className="h-full flex flex-col text-center bg-gray-200">
      <h1 className="pt-20">
        <span className="text-5xl font-heading">
          <strong>Welcome {profile?.username}!</strong>
        </span>
        <p className="pt-4 text-xl text-gray-800">
          You are assigned to this college program:{" "}
          <span className="underline">
            {profile?.assigned_department
              ? profile?.colleges.college_name
              : "No program assigned, Contact mods"}
            {/* Add a link where when they click moderators it will show a list of moderators */}
          </span>
        </p>
      </h1>
      <div className="flex-1 overflow-auto min-h-0 justify-center items-center p-20 grid grid-cols-2 gap-6">
        <Link
          to={`/scheduler/${profile.assigned_department}`}
          style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          className="cursor-pointer hover:bg-gray-100 shadow-md bg-gray-50 h-full content-center col-span-2 rounded-2xl"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Generate Schedule
          </h1>
        </Link>
        <Link
          to={`/course-list/${profile.assigned_department}`}
          style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          className="cursor-pointer hover:bg-gray-100 shadow-md bg-gray-50 h-full content-center rounded-2xl"
        >
          <h1 className="text-4xl font-bold text-gray-800">Courses</h1>
        </Link>
        <Link
          to={`/teachers/${profile.assigned_department}`}
          style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          className="cursor-pointer hover:bg-gray-100 shadow-md bg-gray-50 h-full  content-center rounded-2xl"
        >
          <h1 className="text-4xl font-bold text-gray-800">Teachers</h1>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
