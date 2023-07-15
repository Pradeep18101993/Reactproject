import { Button } from "@mui/material";
import React from "react";
import { getlogout } from "../../API/Register/index1";

const Mainpage = () => {
  const handlelogout = async () => {
    try {
      // Get the JWT token from localStorage
      const token = localStorage.getItem("accessToken");

      if (!token) {
        console.error("No token found");
        return;
      }

      // Call the getlogout function to handle the logout process on the server
      await getlogout(token);

      // Remove the JWT token from localStorage
      localStorage.removeItem("accessToken");

      // Redirect the user to the login page or perform any other action after logout.
      // For example, you can use a frontend router to navigate to the login page:
      window.location.href = "/"; // Replace '/login' with your login page route
    } catch (error) {
      // Handle any errors that may occur during logout
      console.error("Logout error:", error);
    }
  };
  return (
    <div>
      Mainpage
      <Button onClick={handlelogout}>Logout</Button>
    </div>
  );
};

export default Mainpage;
