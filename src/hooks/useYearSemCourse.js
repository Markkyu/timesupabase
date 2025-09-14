import { useEffect, useState } from "react";
import supabase from "@config/supabase";

const useYearSemCourse = (year, sem, collegeID) => {
  const [courses, setCourses] = useState([]);
  const [courses_loading, setLoading] = useState(false);
  const [courses_error, setError] = useState(null);

  useEffect(() => {
    try {
      const loadCourses = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from("courses")
          .select(
            `*, teachers(first_name, last_name, teacher_availability), colleges(college_name)`
          )
          .eq("course_college", collegeID)
          .eq("course_year", year)
          .eq("semester", sem);

        setCourses(data);
      };

      loadCourses();
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { courses, courses_loading, courses_error };
};

export default useYearSemCourse;
