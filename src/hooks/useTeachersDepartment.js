// import { useState, useEffect } from "react";
// import axios from "axios";

import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useTeachersDepartment = (department) => {
  const [teachers, setTeachers] = useState([]);
  const [teachers_loading, setLoading] = useState(true);
  const [teachers_error, setError] = useState(null);

  useEffect(() => {
    const loadTeachersDepartment = async () => {
      const { data, error } = await supabase
        .from("teachers")
        .select(
          `*, colleges(
          college_name
        )`
        )
        .eq("department", department);

      if (data) {
        setTeachers(data);
        setLoading(false);
      }

      if (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadTeachersDepartment();
  }, []);

  return { teachers, teachers_loading, teachers_error };
};

export default useTeachersDepartment;

// const API_URL = import.meta.env.VITE_API_URL;

// export default function useTeachersDepartment(department) {
//   const [teachers, setTeachers] = useState([]);
//   const [teachers_loading, setLoading] = useState(true);
//   const [teachers_error, setError] = useState(null);

//   useEffect(() => {
//     const loadTeachers = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(
//           `${API_URL}/api/teachers/department/${department}`
//         );
//         setTeachers(data);
//       } catch (err) {
//         setError(err.message || "Failed to load teachers");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadTeachers();
//   }, []);

//   return { teachers, teachers_error, teachers_loading };
// }
