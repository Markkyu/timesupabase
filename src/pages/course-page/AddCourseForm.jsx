// import { forwardRef } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
// import Slide from "@mui/material/Slide";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function PopupForm({ open, onClose }) {
//   return (
//     <Dialog
//       open={open}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={onClose}
//       maxWidth="sm"
//       fullWidth
//     >
//       <DialogTitle className="font-bold ">Add a New Course</DialogTitle>

//       <DialogContent>
//         <Box
//           component="form"
//           id="course-form"
//           className="flex flex-col gap-4 py-2"
//         >
//           <TextField
//             autoFocus
//             required
//             label="Course Name"
//             name="courseName"
//             fullWidth
//             variant="outlined"
//           />

//           <TextField
//             required
//             label="Course Code"
//             name="courseCode"
//             fullWidth
//             variant="outlined"
//           />

//           <TextField
//             label="Hours per Week"
//             name="hours / week"
//             type="number"
//             fullWidth
//             inputProps={{ min: 0, max: 10 }}
//             variant="outlined"
//           />

//           <TextField
//             label="Instructor"
//             name="instructor"
//             fullWidth
//             variant="outlined"
//           />
//         </Box>
//       </DialogContent>

//       <DialogActions className="px-6 pb-4">
//         <Button onClick={onClose} color="error" variant="outlined">
//           Cancel
//         </Button>
//         <Button type="submit" variant="contained" color="primary">
//           Save
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

import { useState, forwardRef, useEffect } from "react";
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
import supabase from "@config/supabase";
import useCourses from "@hooks/useCourses";

// Slide transition for dialog
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddCourseForm = ({ open, onClose, sem, year, collegeID }) => {
  const [courseName, setCourseName] = useState("");
  const [hoursWeek, setHoursWeek] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("courses")
        .insert({
          course_name: courseName,
          hours_week: hoursWeek,
          course_year: year,
          semester: sem,
          course_college: collegeID,
        })
        .select();

      if (error) throw error;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => onClose()}
      fullWidth
      maxWidth="xs"
    >
      <IconButton
        onClick={() => onClose()}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          color: "grey.500",
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle>
        <Typography
          variant="h5"
          component="span"
          align="center"
          display="block"
        >
          Add Course
        </Typography>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Hours per Week"
            type="number"
            fullWidth
            value={hoursWeek}
            onChange={(e) => setHoursWeek(e.target.value)}
            inputProps={{ min: 0, max: 10 }}
            variant="outlined"
            margin="normal"
            required
          />

          <Button
            type="submit"
            variant="contained"
            loading={loading}
            loadingPosition="end"
            fullWidth
            sx={{
              bgcolor: "maroon",
            }}
          >
            Add Course
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseForm;
