import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useCoursesAll = () => {
  const [courses, setCourses] = useState([]);
  const [courses_loading, setLoading] = useState(true);
  const [courses_error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const { data, error } = await supabase.from("courses").select();

        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  return { courses, courses_loading, courses_error };
};

export default useCoursesAll;
