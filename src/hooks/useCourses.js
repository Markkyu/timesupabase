// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useCourses = (collegeID) => {
  const [courses, setCourses] = useState([]);
  const [courses_loading, setLoading] = useState(true);
  const [courses_error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select()
        .eq("course_college", collegeID);

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

export default useCourses;

// export default function useCourses(collegeID) {
//   const [courses, setCourses] = useState([]);
//   const [courses_loading, setLoading] = useState(true);
//   const [courses_error, setError] = useState(null);

//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(
//           `${API_URL}/api/courses/course-college/${collegeID}`
//         );
//         setCourses(data);
//       } catch (err) {
//         setError(err.message || "Failed to load courses");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadCourses();
//   }, [collegeID]);

//   return { courses, courses_loading, courses_error };
// }
