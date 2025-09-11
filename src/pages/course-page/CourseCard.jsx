import { IconButton, Tooltip, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EditSquareIcon from "@mui/icons-material/EditSquare";

export default function CourseCard({ course }) {
  if (!course) {
    return (
      <div className="mb-3 p-4 border border-dashed border-gray-300 rounded-md text-center text-gray-400">
        No courses available
      </div>
    );
  }

  return (
    <div className="mb-3 p-2 border-b border-gray-200 flex justify-between items-center">
      <div>
        <p className="m-1">
          <strong>Name:</strong> {course.course_name}
        </p>
        <p className="m-1">
          <strong>Hours / Week:</strong> {course.hours_week}
        </p>
      </div>

      <Stack direction="row">
        <Tooltip title="Delete Course">
          <IconButton>
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Assign Teacher">
          <IconButton>
            <AssignmentIndIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit Course">
          <IconButton>
            <EditSquareIcon color="success" />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  );
}
