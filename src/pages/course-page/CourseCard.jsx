import { IconButton, Tooltip, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import supabase from "@config/supabase";
import AddCourseForm from "./AddCourseForm";
import EditCourseForm from "./EditCourseForm";
import { useState } from "react";

export default function CourseCard({ course }) {
  const [openPopup, setOpenPopup] = useState(false);

  const handleEdit = () => {
    setOpenPopup(true);
  };

  const handleDelete = async () => {
    const confirmDeletion = confirm(
      "Are you sure you want to delete this course?"
    );

    if (confirmDeletion) {
      const response = await supabase
        .from("courses")
        .delete()
        .eq("course_id", course.course_id);
    }
  };

  const handleTeacher = () => {
    alert("Editing assigned teacher (🚧 working on it 🚧)");
  };

  if (!course) {
    return (
      <div className="mb-3 p-4 border border-dashed border-gray-300 rounded-md text-center text-gray-400">
        No courses available
      </div>
    );
  }

  return (
    <div className=" p-2 border-b border-gray-200 flex justify-between items-center">
      <div>
        <p className="m-1">
          <strong>Course Name:</strong> {course.course_name}
        </p>
        <p className="m-1">
          <strong>Hours / Week:</strong> {course.hours_week}
        </p>
        {/* <p className="m-1">
          <strong>Assigned Teacher:</strong>
        </p> */}
      </div>
      <Stack direction="row">
        <Tooltip title="Edit Course">
          <IconButton onClick={handleEdit}>
            <EditSquareIcon color="info" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Assign Teacher">
          <IconButton onClick={handleTeacher}>
            <AssignmentIndIcon color="success" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Course">
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      </Stack>
      {/* Edit course form popup */}
      <EditCourseForm
        course={course}
        open={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </div>
  );
}
