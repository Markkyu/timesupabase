import { useParams } from "react-router-dom";
import { Button, Box, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import useTeachersDepartment from "@hooks/useTeachersDepartment";
import TeacherSkeletonLoader from "@components/TeacherSkeletonLoader";
import TeacherForm from "./TeacherForm";
import { useState } from "react";
import supabase from "@config/supabase";

function TeacherPage() {
  const { department } = useParams();
  const { teachers, teachers_loading, teachers_error } =
    useTeachersDepartment(department);

  const [openForm, setOpenForm] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    const confirmDeletion = confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (confirmDeletion) {
      try {
        setLoading(true);
        const { error } = await supabase
          .from("teachers")
          .delete()
          .eq("teacher_id", id);

        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-4 overflow-auto">
      <div className="max-w-6xl mx-auto w-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between px-6 py-4 bg-red-800">
          <h2 className="text-2xl font-bold text-white">
            Teacher List for{" "}
            {teachers ? teachers[0]?.colleges?.college_name : "..."}
          </h2>
          <p className="text-sm text-white text-center mb-5">
            📝 At the moment, manual refresh muna to show the items after add,
            edit, and deletion. Still figuring out pa.
          </p>
        </div>

        {/* Table */}
        <div className="flex-1">
          {teachers_loading ? (
            <div className="h-[75vh]">
              <TeacherSkeletonLoader />
            </div>
          ) : teachers.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[75vh]">
              <p className="text-gray-600 font-medium">
                No teachers found. Click "Add Teacher" to begin.
              </p>
              <Box
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  textAlign: "center",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => {
                  setMode("add");
                  setSelectedTeacher(null);
                  setOpenForm(true);
                }}
              >
                Add a teacher. <strong>Click here.</strong>
              </Box>
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
                      <td className="px-6 py-4 text-center font-medium">
                        {teacher.first_name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {teacher.last_name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {teacher.teacher_availability}
                      </td>
                      <td className="flex justify-center px-6 py-4">
                        <Stack direction="row" spacing={1}>
                          <Button
                            onClick={() => {
                              setMode("edit");
                              setSelectedTeacher(teacher);
                              setOpenForm(true);
                            }}
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
                            loading={loading}
                            loadingPosition="end"
                            sx={{ borderRadius: 3, textTransform: "none" }}
                            onClick={() => handleDelete(teacher.teacher_id)}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Box
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setMode("add");
                  setSelectedTeacher(null);
                  setOpenForm(true);
                }}
              >
                Add a teacher. <strong>Click here.</strong>
              </Box>
            </div>
          )}
        </div>
      </div>

      {/* Add or Edit form */}
      <TeacherForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        department={department}
        mode={mode}
        teacher={selectedTeacher}
      />
    </div>
  );
}

export default TeacherPage;
