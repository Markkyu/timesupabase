import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function TeacherSkeletonLoader() {
  return (
    <div className="w-full mt-10 pl-12 pr-25 flex justify-between">
      {/* Left side (course info) */}
      <Stack direction="row" spacing={10}>
        <Skeleton variant="text" width={170} height={20} animation="wave" />
        <Skeleton variant="text" width={170} height={20} animation="wave" />
        <Skeleton variant="text" width={170} height={20} animation="wave" />
      </Stack>

      {/* Right side (icons) */}
      <Stack direction="row" spacing={1}>
        <Skeleton
          variant="rectangular"
          width={80}
          height={25}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width={80}
          height={25}
          animation="wave"
        />
      </Stack>
    </div>
  );
}
