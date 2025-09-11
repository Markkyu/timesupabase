import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,

      login: async (username, password) => {
        const { data } = await axios.post(`${API_URL}/login`, {
          username,
          password,
        });

        const user = data.user;

        set({ user });

        return user;
      },

      logout: () => {
        console.log("Log out clicked");
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export default useAuthStore;
