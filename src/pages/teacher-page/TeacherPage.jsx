import { useParams } from "react-router-dom";
import { Button, Stack, Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import useTeachers from "@hooks/useTeachers";
import useTeachersDepartment from "@hooks/useTeachersDepartment";
import TeacherSkeletonLoader from "@components/TeacherSkeletonLoader";

function TeacherPage() {
  const { department } = useParams();
  const { teachers, teachers_loading, teachers_error } =
    useTeachersDepartment(department);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-4 overflow-auto">
      <div className="max-w-6xl mx-auto w-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex px-6 py-4 bg-red-800">
          <h2 className="text-2xl font-bold text-white">
            Teacher List for {teachers[0] ? teachers[0]?.college_name : "..."}
          </h2>
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
                    <th className="px-6 py-3 text-center">Actions</th>
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
                        {teacher.college_name}
                      </td>
                      <td className="flex justify-center px-6 py-4">
                        <Stack direction="row" spacing={1}>
                          <Button
                            variant="contained"
                            endIcon={<EditIcon />}
                            color="primary"
                            sx={{ borderRadius: 3, textTransform: "none" }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            endIcon={<DeleteIcon />}
                            color="error"
                            sx={{ borderRadius: 3, textTransform: "none" }}
                          >
                            Delete
                          </Button>
                        </Stack>
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
