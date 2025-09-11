import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@stores/useAuthStore";

const LoginForm = ({ showLogin, setShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const loggedInUser = await login(username, password);
      console.log("Logged in:", loggedInUser);
      setShowLogin(false);

      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all animate-fadeIn">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 relative animate-slideIn">
        {/* Close Button */}
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-600 hover:cursor-pointer"
        >
          &times;
        </button>

        {/* Form */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log in to your account
        </h2>
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          <div>
            {/* Username input */}
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              autoComplete="off"
              autoFocus
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div>
            {/* Password input */}
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="rounded-sm"
              />
              <label>Show Password</label>
            </div>

            <a href="#" className="text-red-800 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-red-800 hover:bg-red-700 text-white rounded-md font-semibold shadow"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
