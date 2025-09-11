import { Backdrop, CircularProgress } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LoadingBackdrop() {
  return (
    <>
      <Header />
      <Sidebar>
        <Backdrop
          sx={{
            color: "white",
            zIndex: 100,
          }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Sidebar>
    </>
  );
}
