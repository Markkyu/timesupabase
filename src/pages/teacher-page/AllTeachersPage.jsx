import { useParams } from "react-router-dom";
import { Button, Tooltip, IconButton } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

import useTeachers from "@hooks/useTeachers";
import TeacherSkeletonLoader from "@components/TeacherSkeletonLoader";

function TeacherPage() {
  const { department } = useParams();
  const { teachers, teachers_loading, teachers_error } = useTeachers();

  // Already tested that if the items overflow it will not break the UI

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-4 overflow-auto">
      <div className="max-w-6xl mx-auto w-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex px-6 py-4 bg-red-800">
          <h2 className="text-2xl font-bold text-white">All Teachers List</h2>
        </div>

        {/* Table wrapper with fixed height */}
        <div className="flex-1">
          {teachers_loading ? (
            <div className="h-[75vh]">
              <TeacherSkeletonLoader />
              <TeacherSkeletonLoader />
              <TeacherSkeletonLoader />
              <TeacherSkeletonLoader />
              <TeacherSkeletonLoader />
            </div>
          ) : teachers.length === 0 ? (
            <div className="flex items-center justify-center h-[75vh]">
              <p className="text-gray-600 font-medium">
                No teachers found. Click "Add Teacher" to begin.
              </p>
            </div>
          ) : (
            <div className="overflow-auto h-[75vh]">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm sticky top-0 z-1">
                  <tr>
                    <th className="px-6 py-3 text-center">First Name</th>
                    <th className="px-6 py-3 text-center">Last Name</th>
                    <th className="px-6 py-3 text-center">Availability</th>
                    <th className="px-6 py-3 text-center">Schedules</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => (
                    <tr
                      key={teacher.teacher_id}
                      className="hover:bg-gray-50 transition border-b last:border-none"
                    >
                      <td className="px-6 py-4 text-center text-gray-800 font-medium">
                        {teacher.first_name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {teacher.last_name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {teacher.teacher_availability}
                      </td>
                      <td className="flex justify-center px-6 py-4">
                        <Button
                          variant="contained"
                          startIcon={<AssignmentIcon />}
                          color="info"
                          sx={{ borderRadius: 3, textTransform: "none" }}
                        >
                          Assigned Schedule
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
