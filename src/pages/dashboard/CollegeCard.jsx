import { Link } from "react-router-dom";
import { Button, Tooltip, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SubjectIcon from "@mui/icons-material/Subject";

const CollegeCard = ({ college }) => {
  return (
    <div className="border h-full border-gray-300 rounded-xl p-5 shadow-sm bg-gray-50 hover:shadow-md transition flex flex-col justify-between">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {college.college_name}
      </h3>

      {/* Actions */}
      <Stack
        direction={{ lg: "column", xl: "row" }}
        className="flex justify-evenly"
        spacing={1}
      >
        <Button
          component={Link}
          to={`/scheduler/${college.college_id}`}
          variant="contained"
          color="success"
          fullWidth={true}
          startIcon={<CalendarMonthIcon />}
          sx={{
            borderRadius: 3,
            textTransform: "none",
          }}
        >
          Schedule
        </Button>
        <Button
          component={Link}
          to={`/course-list/${college.college_id}`}
          variant="contained"
          color="info"
          fullWidth={true}
          startIcon={<SubjectIcon />}
          sx={{
            borderRadius: 3,
            textTransform: "none",
          }}
        >
          Courses
        </Button>
        <Button
          component={Link}
          to={`/teachers/${college.college_id}`}
          variant="contained"
          color="warning"
          fullWidth={true}
          startIcon={<CoPresentIcon />}
          sx={{
            borderRadius: 3,
            textTransform: "none",
          }}
        >
          Teachers
        </Button>
      </Stack>

      {/* Delete icon */}
      {/* <div className="mt-3 flex justify-end">
        <Tooltip title={`Delete ${college.college_name}`}>
          <IconButton size="small" disabled>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div> */}
    </div>
  );
};

export default CollegeCard;
