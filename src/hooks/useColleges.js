// import { useState, useEffect } from "react";
// import axios from "axios";

import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [colleges_loading, setLoading] = useState(true);
  const [colleges_error, setError] = useState(null);

  useEffect(() => {
    const loadColleges = async () => {
      const { data, error } = await supabase.from("colleges").select();

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

// const API_URL = import.meta.env.VITE_API_URL;

// export default function useColleges() {
//   const [colleges, setColleges] = useState([]);
//   const [colleges_loading, setLoading] = useState(true);
//   const [colleges_error, setError] = useState(null);

//   useEffect(() => {
//     const loadColleges = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(`${API_URL}/api/colleges`);
//         setColleges(data);
//       } catch (err) {
//         setError(err.message || "Failed to load courses");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadColleges();
//   }, []);

//   return { colleges, colleges_loading, colleges_error };
// }
