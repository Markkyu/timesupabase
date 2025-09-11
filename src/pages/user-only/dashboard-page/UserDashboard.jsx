import React from "react";
import useAuthStore from "@stores/useAuthStore";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="h-full flex flex-col text-center bg-gray-200">
      <h1 className="text-3xl pt-20">
        <strong>Welcome {user.username}!</strong> You are assigned to this
        department:{" "}
        {user.department
          ? user.college_name
          : "No departments assigned. Contact moderators"}
        {/* Add a link where when they click moderators it will show a list of moderators */}
      </h1>
      <div className="flex-1 overflow-auto min-h-0 justify-center items-center p-20 grid grid-cols-2 gap-6">
        <Link
          to={`/schedule/${user.department}`}
          className="cursor-pointer hover:bg-gray-100 shadow-md bg-gray-50 h-full content-center col-span-2 rounded-2xl"
        >
          <h1 className="text-5xl font-bold text-gray-800">
            Generate Schedule
          </h1>
        </Link>
        <Link
          to={`/course-list/${user.department}`}
          className="cursor-pointer hover:bg-gray-100 shadow-md bg-gray-50 h-full content-center rounded-2xl"
        >
          <h1 className="text-5xl font-bold text-gray-800">Courses</h1>
        </Link>
        <Link
          to={`/teacher-list/${user.department}`}
          className="cursor-pointer hover:bg-gray-100 shadow-md bg-gray-50 h-full  content-center rounded-2xl"
        >
          <h1 className="text-5xl font-bold text-gray-800">Teachers</h1>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
