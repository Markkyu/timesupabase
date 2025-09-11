// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useCoursesAll = () => {
  const [courses, setCourses] = useState([]);
  const [courses_loading, setLoading] = useState(true);
  const [courses_error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      const { data, error } = await supabase.from("courses").select();

      if (error) {
        setError(error);
        setLoading(false);
      } else {
        setCourses(data);
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  return { courses, courses_loading, courses_error };
};

export default useCoursesAll;

// export default function useCoursesAll() {
//   const [courses, setCourses] = useState([]);
//   const [courses_loading, setLoading] = useState(true);
//   const [courses_error, setError] = useState(null);

//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(`${API_URL}/api/courses`);
//         setCourses(data);
//       } catch (err) {
//         setError(err.message || "Failed to load courses");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadCourses();
//   }, []);

//   return { courses, courses_loading, courses_error };
// }
