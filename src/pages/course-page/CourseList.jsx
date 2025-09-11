import { useParams } from "react-router-dom";
import useCourses from "@hooks/useCourses";
import SemesterSection from "./SemesterSection";

const uniqueYears = [1, 2, 3, 4];
const uniqueSemesters = [1, 2];

export default function CourseList() {
  const { collegeID } = useParams();
  const { courses, courses_loading } = useCourses(collegeID);

  return (
    <div className="h-full flex flex-col p-5 font-sans overflow-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Course List</h1>
      {uniqueYears.map((year) => (
        <div
          key={year}
          className="mb-5 border border-gray-300 rounded-lg bg-gray-50 p-4"
        >
          <h2 className="text-2xl font-bold text-center mb-2">Year {year}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {uniqueSemesters.map((sem) => (
              <SemesterSection
                key={sem}
                sem={sem}
                year={year}
                collegeID={collegeID}
                courses={courses}
                loading={courses_loading}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
