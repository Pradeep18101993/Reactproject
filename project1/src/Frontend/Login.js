import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getlogin } from "../API/Register";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [login, setLogin] = useState({
    email: "",
    name: "",
  });

  const handlechange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
    console.log(login, "adfg");
  };

  const values = {
    name: login.name,
    email: login.email,
  };

  // -------other way of navigation with try and catch block-----------------//

  // const handlelogin = async (e) => {
  //   try{

  //     const response=await getlogin(values);
  //       if (response) {
  //         navigate('/home');
  //
  //         // history.push('/home');--------->old not working
  //         setData(res.data[0].name)
  //         // window.location.href = "/home";-------->working only on console
  //       }
  //       else{
  //         console.log('error occured');
  //       }
  //       console.log(response, "log");
  //     ;
  //   }
  //   catch(error){
  //      console.log('error occured',error);

  //   }
  // };

  const handlelogin = async (e) => {
    try {
      const res = await getlogin(values);

      if (res && res.token) {
        // Check if the token is present in the response
        setData(res);
        navigate("/home"); // Navigate to the home page or your desired destination after login
      } else {
        console.log("Error occurred during login");
      }
    } catch (error) {
      // Handle API error
      console.error("An error occurred:", error);
      // Perform additional error handling or display an error message to the user
    }
  };

  return (
    <Box sx={{ margin: "30px 196px", padding: "47px" }}>
      <Typography>LOGIN</Typography>
      <Stack direction="column" spacing={2}>
        <TextField
          id="outlined-basic"
          name="name"
          value={login.name}
          label="Outlined"
          variant="outlined"
          onChange={handlechange}
        />
        <TextField
          id="outlined-basic"
          name="email"
          value={login.email}
          label="Outlined"
          variant="outlined"
          onChange={handlechange}
        />

        <Button onClick={handlelogin}>LOGIN</Button>
      </Stack>
    </Box>
  );
};

export default Login;
