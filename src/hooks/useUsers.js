import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [users_loading, setLoading] = useState(true);
  const [users_error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      console.log("inside user");
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_URL}/api/users`);
        setUsers(data);
        console.log("Users");
      } catch (err) {
        setError(err.message || "Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return { users, users_loading, users_error };
}
