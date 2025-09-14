import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [colleges_loading, setLoading] = useState(true);
  const [colleges_error, setError] = useState(null);

  useEffect(() => {
    const loadColleges = async () => {
      const { data, error } = await supabase
        .from("colleges")
        .select()
        .order("college_id");

      if (data) {
        setColleges(data);
        setLoading(false);
      }

      if (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadColleges();
  }, []);

  return { colleges, colleges_loading, colleges_error };
};

export default useColleges;
