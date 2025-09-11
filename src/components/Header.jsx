// import { Link } from "react-router-dom";

// function Header({ guest }) {
//   return (
//     <div className="flex relative items-center bg-red-800 text-white text-xl z-1 p-2">
//       <Link to="/" className="hover:text-gray-200 flex items-center">
//         <img
//           className="invert h-8 inline"
//           src="https://static.vecteezy.com/system/resources/previews/019/879/196/non_2x/passage-of-time-icon-on-transparent-background-free-png.png"
//           alt="Timelyfy Logo"
//         />
//         <span>
//           <b>Timelyfy</b> — Automated Scheduler
//         </span>
//       </Link>
//       <div className="flex items-center absolute right-0">
//         <span> {guest} </span>
//         <img
//           className="h-8"
//           src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
//           alt="account"
//         />
//       </div>
//     </div>
//   );
// }

// export default Header;

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Header = ({ user_name, user_role }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#800000", zIndex: "10" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo + Title */}
        <Link to="/" className="flex items-center text-white">
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Timelyfy
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginLeft: "4px" }}>
            : Automated Scheduler
          </Typography>
        </Link>

        {/* Right: Guest + Avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Tooltip title="Username">
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {user_name}
            </Typography>
          </Tooltip>
          <Tooltip title="Role">
            <Typography variant="h6" component="div" sx={{ marginLeft: "4px" }}>
              ({user_role})
            </Typography>
          </Tooltip>
          <IconButton size="large" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
