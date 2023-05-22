import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getlogin } from "../API/Register";

const Login = () => {
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
  const handlelogin = async (e) => {
    await getlogin(values).then((res) => {
      if (res.data) {
        setData(res.data[0].name);
      }
      console.log(res, "log");
    });
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
        <Link to="/login">
          <Button onClick={handlelogin}>LOGIN</Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Login;
