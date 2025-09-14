import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useCourses = (collegeID) => {
  const [courses, setCourses] = useState([]);
  const [courses_loading, setLoading] = useState(true);
  const [courses_error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const { data, error } = await supabase
          .from("courses")
          .select(`* , teachers(first_name, last_name)`)
          .eq("course_college", collegeID)
          .order("course_name");

        setCourses(data);
      } catch (err) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  return { courses, courses_loading, courses_error };
};

export default useCourses;
