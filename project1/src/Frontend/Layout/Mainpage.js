import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getlogout } from "../../API/Register/index1";
import { homepage } from "../../API/Register/index";
import { useNavigate } from "react-router-dom";
const Mainpage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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

      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
    } else {
      // Function to fetch data from the protected homepage API
      const fetchData = async (token) => {
        try {
          // Make the API request to the protected homepage route using the homepage function
          const response = await homepage(token);
          setMessage(response);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData(token);
    }
  }, []);

  return (
    <div>
      Mainpage
      <p>{message}</p>
      <Button onClick={handlelogout}>Logout</Button>
    </div>
  );
};

export default Mainpage;
