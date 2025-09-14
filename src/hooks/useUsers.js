// import { useState, useEffect } from "react";
// import axios from "axios";
// import supabase from "@config/supabase";

// export default function useUsers() {
//   const [users, setUsers] = useState([]);
//   const [users_loading, setLoading] = useState(true);
//   const [users_error, setError] = useState(null);

//   useEffect(() => {
//     const loadUsers = async () => {
//       try {
//         setLoading(true);
//         const { data, error } = await supabase.from("profiles").select();
//         console.log(data);
//         setUsers(data);
//       } catch (error) {
//         console.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//   }, []);

//   // const [users, setUsers] = useState([]);
//   // const [users_loading, setLoading] = useState(true);
//   // const [users_error, setError] = useState(null);

//   // useEffect(() => {
//   //   const loadUsers = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const { data } = await axios.get(`${API_URL}/api/users`);
//   //       setUsers(data);
//   //     } catch (err) {
//   //       setError(err.message || "Failed to load users");
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   loadUsers();
//   // }, []);

//   return { users, users_loading, users_error };
// }

import supabase from "@config/supabase";
import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [users_loading, setLoading] = useState(true);
  const [users_error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("profiles").select();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return { users, users_loading, users_error };
};

export default useUsers;
