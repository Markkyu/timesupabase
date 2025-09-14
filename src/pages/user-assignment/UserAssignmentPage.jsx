import { Link } from "react-router-dom";
import { Stack, Button, Tooltip, IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import EditIcon from "@mui/icons-material/Edit";

import useUsers from "@hooks/useUsers";

const UserAssignmentPage = () => {
  const { users, users_loading, users_error } = useUsers();

  const userRoleOnly = users.filter((user) =>
    user.role.trim().includes("user")
  );

  return (
    <div className="h-full bg-gray-100 p-6 flex items-center justify-center overflow-auto">
      <div className="max-w-6xl mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-maroon-800 bg-red-800 ">
          <h2 className="text-2xl font-bold text-white">User Role List</h2>
          <p className="text-sm text-white">
            🚧 This page is under construction 🚧
          </p>
        </div>

        {/* Table wrapper with fixed height */}
        <div className="flex-1">
          {users_loading ? (
            <div className="flex items-center justify-center h-[75vh]">
              <p className="text-gray-600 font-medium">Loading users...</p>
            </div>
          ) : users.length === 0 ? (
            <div className="flex items-center justify-center h-[75vh]">
              <p className="text-gray-600 font-medium">
                No users found. Go to register user to begin.
              </p>
            </div>
          ) : (
            <div className="overflow-auto h-[75vh]">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm sticky top-0">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Assigned Deparment</th>
                    <th className="px-6 py-3">Actions</th>
                    <th className="px-6 py-3 text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userRoleOnly.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition border-b last:border-none"
                    >
                      <td className="px-6 py-4 text-lg text-gray-800 font-medium">
                        {user.username}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-800 font-medium">
                        {user.college_name
                          ? user.college_name
                          : "No program assigned"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 flex-wrap">
                          {/* 
                            Create a check where if user role is user, have promote button
                            if user role is moderator, have demote button                            
                        */}
                          <Stack direction="row" spacing={1}>
                            <Button
                              variant="contained"
                              color="info"
                              size="medium"
                              startIcon={<SystemUpdateAltIcon />}
                              sx={{ borderRadius: 5, textTransform: "none" }}
                            >
                              Assign User
                            </Button>
                            <Button
                              variant="contained"
                              color="success"
                              size="medium"
                              startIcon={<EditIcon />}
                              sx={{ borderRadius: 5, textTransform: "none" }}
                            >
                              Edit Assign
                            </Button>
                          </Stack>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Tooltip title={`Delete ${user.username}`}>
                          <IconButton>
                            <DeleteIcon color="error" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAssignmentPage;
