import { Link } from "react-router-dom";
import { Button, Tooltip, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SubjectIcon from "@mui/icons-material/Subject";

const CollegeCard = ({ college }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-gray-50 hover:shadow-md transition flex flex-col justify-between">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {college.college_name}
      </h3>

      {/* Actions */}
      <Stack direction={{ lg: "column", xl: "row" }} spacing={1}>
        <Button
          component={Link}
          to={`/scheduler/${college.college_id}`}
          variant="contained"
          color="success"
          size="medium"
          startIcon={<CalendarMonthIcon />}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Schedule
        </Button>
        <Button
          component={Link}
          to={`/course-list/${college.college_id}`}
          variant="contained"
          color="info"
          size="medium"
          startIcon={<SubjectIcon />}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Courses
        </Button>
        <Button
          component={Link}
          to={`/teachers/${college.college_id}`}
          variant="contained"
          color="warning"
          size="medium"
          startIcon={<CoPresentIcon />}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Teachers
        </Button>
      </Stack>

      {/* Delete icon */}
      <div className="mt-3 flex justify-end">
        <Tooltip title={`Delete ${college.college_name}`}>
          <IconButton size="small" disabled>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default CollegeCard;
