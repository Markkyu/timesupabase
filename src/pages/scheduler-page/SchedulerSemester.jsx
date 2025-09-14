import { Button, Stack } from "@mui/material";
import SchedulerCard from "./SchedulerCard";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CourseSkeletonLoader from "@components/CourseSkeletonLoader";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

const SchedulerSemester = ({ sem, courses, year, collegeID, loading }) => {
  const filteredCourses = courses?.filter(
    (course) =>
      course.course_year === year &&
      course.semester === sem &&
      course.course_college == collegeID
  );

  return (
    <div className="flex-1 min-w-[300px] bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-xl text-center flex-1 m-0">
          Semester {sem}
        </h3>
        <Stack direction="row" gap={1}>
          <Button
            component={Link}
            to={`/scheduler/${collegeID}/timetable?year=${year}&sem=${sem}`}
            variant="contained"
            startIcon={<AutoAwesomeIcon />}
            sx={{ textTransform: "none" }}
            color="info"
          >
            Auto-Plot Schedule
          </Button>
          <Button
            component={Link}
            to={`/scheduler/${collegeID}/timetable?year=${year}&sem=${sem}`}
            variant="contained"
            startIcon={<EditCalendarIcon />}
            sx={{
              textTransform: "none",
              backgroundColor: "#737373",
              color: "white",
            }}
          >
            Manual Plot
          </Button>
        </Stack>
      </div>

      {loading ? (
        <Box className="flex justify-center py-2">
          <CourseSkeletonLoader />
        </Box>
      ) : filteredCourses?.length > 0 ? (
        filteredCourses?.map((course) => (
          <SchedulerCard key={course.course_id} course={course} />
        ))
      ) : (
        <SchedulerCard course={null} />
      )}
    </div>
  );
};

export default SchedulerSemester;
