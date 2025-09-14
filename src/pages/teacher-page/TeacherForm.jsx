// import { useState, forwardRef, useEffect } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   Button,
//   IconButton,
//   Checkbox,
//   FormControlLabel,
//   Slide,
//   Typography,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { useNavigate } from "react-router-dom";
// import supabase from "@config/supabase";
// import useCourses from "@hooks/useCourses";

// // Slide transition for dialog
// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const TeacherForm = ({ open, onClose, department }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await supabase.from("teachers").insert({
//         first_name: firstName,
//         last_name: lastName,
//         department: department,
//         teacher_availability: "full",
//       });

//       if (error) throw error;
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//       onClose();
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={() => onClose()}
//       fullWidth
//       maxWidth="xs"
//     >
//       <IconButton
//         onClick={() => onClose()}
//         sx={{
//           position: "absolute",
//           right: 12,
//           top: 12,
//           color: "grey.500",
//         }}
//       >
//         <CloseIcon />
//       </IconButton>

//       <DialogTitle>
//         <Typography
//           variant="h5"
//           component="span"
//           align="center"
//           display="block"
//         >
//           Add Teacher
//         </Typography>
//       </DialogTitle>

//       <DialogContent>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             fullWidth
//             margin="normal"
//             required
//           />

//           <TextField
//             label="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             fullWidth
//             margin="normal"
//             required
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             loading={loading}
//             loadingPosition="end"
//             fullWidth
//             sx={{
//               bgcolor: "maroon",
//             }}
//           >
//             Add Teacher
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default TeacherForm;

import { useState, forwardRef, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import supabase from "@config/supabase";

// Slide transition for dialog
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TeacherForm = ({ open, onClose, department, mode, teacher }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pre-fill when editing
  useEffect(() => {
    if (mode === "edit" && teacher) {
      setFirstName(teacher.first_name);
      setLastName(teacher.last_name);
    } else {
      setFirstName("");
      setLastName("");
    }
  }, [mode, teacher, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (mode === "add") {
        const { error } = await supabase.from("teachers").insert({
          first_name: firstName,
          last_name: lastName,
          department,
          teacher_availability: "full",
        });
        if (error) throw error;
      } else if (mode === "edit" && teacher) {
        const { error } = await supabase
          .from("teachers")
          .update({
            first_name: firstName,
            last_name: lastName,
          })
          .eq("teacher_id", teacher.teacher_id);
        if (error) throw error;
      }
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
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <IconButton
        onClick={onClose}
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
          {mode === "edit" ? "Edit Teacher" : "Add Teacher"}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
            sx={{ bgcolor: "maroon" }}
          >
            {mode === "edit" ? "Save Changes" : "Add Teacher"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherForm;
