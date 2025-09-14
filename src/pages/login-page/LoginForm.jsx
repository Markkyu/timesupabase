// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuthStore from "@stores/useAuthStore";
// import { CircularProgress, Button } from "@mui/material";

// const LoginForm = ({ showLogin, setShowLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const login = useAuthStore((state) => state.login);
//   const navigate = useNavigate();

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       const loggedInUser = await login(username, password);
//       console.log("Logged in:", loggedInUser);
//       setShowLogin(false);
//       navigate("/");
//     } catch (err) {
//       alert("Invalid Login Credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!showLogin) return null;

//   return (
//     <>
//       <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all animate-fadeIn">
//         <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 relative animate-slideIn">
//           {/* Close Button */}
//           <button
//             onClick={() => setShowLogin(false)}
//             className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-600 hover:cursor-pointer"
//           >
//             &times;
//           </button>

//           {/* Form */}
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//             Log in to your account
//           </h2>
//           <form className="space-y-6" onSubmit={handleLoginSubmit}>
//             <div>
//               {/* Username input */}
//               <label
//                 htmlFor="input-username"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Username
//               </label>
//               <input
//                 id="input-username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 required
//               />
//             </div>

//             <div>
//               {/* Password input */}
//               <label
//                 htmlFor="input-password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 id="input-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type={showPassword ? "text" : "password"}
//                 autoComplete="off"
//                 className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 required
//               />
//             </div>

//             <div className="flex justify-between items-center text-sm">
//               <div className="flex items-center gap-2">
//                 <input
//                   id="show-password"
//                   type="checkbox"
//                   checked={showPassword}
//                   onChange={() => setShowPassword(!showPassword)}
//                   className="rounded-sm"
//                 />
//                 <label htmlFor="show-password">Show Password</label>
//               </div>

//               <a href="#" className="text-red-800 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//             <Button
//               type="submit"
//               variant="contained"
//               loading={loading}
//               loadingPosition="end"
//               fullWidth={true}
//               sx={{
//                 textTransform: "none",
//                 backgroundColor: "#900000",
//                 borderRadius: "5px",
//               }}
//             >
//               Log In
//             </Button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginForm;

import { useState, forwardRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

// Slide transition for dialog
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginForm = ({ showLogin, setShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loggedInUser = await login(username, password);
      setShowLogin(false);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <Dialog
      open={showLogin}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setShowLogin(false)}
      fullWidth
      maxWidth="xs"
    >
      {/* Close button */}
      <IconButton
        onClick={() => setShowLogin(false)}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          color: "grey.500",
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ pb: 1 }}>
        <Typography
          variant="h5"
          component="span"
          align="center"
          display="block"
        >
          Login to Timelyfy
        </Typography>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleLoginSubmit} style={{ marginTop: "1rem" }}>
          {/* Username */}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          {/* Password */}
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            required
          />

          {/* Show password checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                size="small"
              />
            }
            label={<Typography variant="body2">Show Password</Typography>}
          />

          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              bgcolor: "maroon",
              py: 1.2,
              fontWeight: "bold",
            }}
          >
            Log In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
