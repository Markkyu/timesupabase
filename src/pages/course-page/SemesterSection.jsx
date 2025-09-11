import { Button } from "@mui/material";
import CourseCard from "./CourseCard";
import Box from "@mui/material/Box";
import CourseSkeletonLoader from "@components/CourseSkeletonLoader";

const SemesterSection = ({ sem, courses, year, collegeID, loading }) => {
  const filteredCourses = courses.filter(
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
        <Button
          variant="contained"
          size="small"
          sx={{ marginLeft: "auto", textTransform: "none" }}
        >
          <strong>Add Course</strong>
        </Button>
      </div>

      {loading ? (
        <Box className="flex justify-center py-2">
          <CourseSkeletonLoader />
        </Box>
      ) : filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <CourseCard key={course.course_id} course={course} />
        ))
      ) : (
        <CourseCard course={null} />
      )}
    </div>
  );
};

export default SemesterSection;
