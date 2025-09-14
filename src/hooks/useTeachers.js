import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [teachers_loading, setLoading] = useState(true);
  const [teachers_error, setError] = useState(null);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("teachers").select();

        setTeachers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

      // if (data) {
      //   setTeachers(data);
      //   setLoading(false);
      // }

      // if (error) {
      //   setError(error);
      //   setLoading(false);
      // }
    };

    loadTeachers();
  }, []);

  return { teachers, teachers_loading, teachers_error };
};

export default useTeachers;
