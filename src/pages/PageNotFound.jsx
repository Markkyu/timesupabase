import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const PageNotFound = () => {
  const navigate = useNavigate();

  const [initMessage, setMessage] = useState("404 :(");

  return (
    <div className="h-full mx-auto bg-white/90 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 animate-pulse">
          {initMessage}
        </h1>
        <p className="text-4xl md:text-3xl font-semibold mt-4 text-gray-700 animate-pulse">
          Oops! Page not found
        </p>
        <p className="text-gray-500 my-2 text-2xl md:text-xl ">
          The page you're looking for doesn't exist.
        </p>
        {/* <button */}
        <Button
          variant="contained"
          color="error"
          endIcon={<HomeRoundedIcon />}
          size="large"
          sx={{ borderRadius: 5, textTransform: "none" }}
          onClick={() => {
            setMessage(
              <div className="text-6xl">
                Redirecting...
                <CircularProgress color="inherit" size={60} />
              </div>
            );
            navigate("/");
          }}
          className="mt-6 text-white bg-black hover:bg-gray-800 cursor-pointer rounded-2xl font-semibold px-6 py-3"
        >
          <strong>Go Home</strong>
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
