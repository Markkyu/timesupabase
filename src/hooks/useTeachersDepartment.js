import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useTeachersDepartment = (department) => {
  const [teachers, setTeachers] = useState([]);
  const [teachers_loading, setLoading] = useState(true);
  const [teachers_error, setError] = useState(null);

  useEffect(() => {
    const loadTeachersDepartment = async () => {
      try {
        const { data, error } = await supabase
          .from("teachers")
          .select(`*, colleges(college_name)`)
          .eq("department", department);

        setTeachers(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadTeachersDepartment();
  }, []);

  return { teachers, teachers_loading, teachers_error };
};

export default useTeachersDepartment;
