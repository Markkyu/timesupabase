import { useParams } from "react-router-dom";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import { Button, Stack } from "@mui/material";
import useCourses from "@hooks/useCourses";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const uniqueYears = [1, 2, 3, 4];
const uniqueSemesters = [1, 2];

const SchedulerPage = () => {
  const { collegeID } = useParams();
  const { courses, courses_loading } = useCourses(collegeID);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto min-h-0">
        {uniqueYears.map((year) => (
          <div key={year} className="mb-10 w-full max-w-7xl mx-auto">
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
              Year {year}
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              {uniqueSemesters.map((sem) => {
                const filteredCourses = courses.filter(
                  (course) =>
                    course.course_year === year &&
                    course.semester === sem &&
                    course.course_college == collegeID
                );

                return (
                  <div
                    key={sem}
                    className="flex-1 min-w-[300px] bg-white border border-gray-200 shadow-sm rounded-xl p-4"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Semester {sem}
                      </h3>
                      <Stack direction="row" gap={1}>
                        <Button
                          variant="contained"
                          endIcon={<AutoAwesomeIcon />}
                          sx={{ textTransform: "none" }}
                          color="info"
                        >
                          Auto-Plot Schedule
                        </Button>
                        <Button
                          variant="contained"
                          endIcon={<EditCalendarIcon />}
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

                    {filteredCourses.length > 0 ? (
                      filteredCourses.map((course) => (
                        <div
                          key={course.course_id}
                          className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-3 flex justify-between items-center"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {course.course_name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Hours/Week: {course.hours_week}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400 italic text-center">
                        No courses available for this semester.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulerPage;
