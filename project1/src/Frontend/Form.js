import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { getApi } from "../API/Register";

const Form = () => {
  const[data,setData]=useState('');

  const fetchapidata=async()=>{
   await getApi().then((res) => {
     setData(res);        //you dont have to add data it will give error, as response from api already stored 
    // in data in backend. if you want to add res.data then in backend you should remove it
   });
  }

  useEffect(()=>{
      fetchapidata();
  },[])
  return (
    <Box sx={{ margin: "30px 196px", padding: "47px" }}>
        <Typography>REGISTER FORM</Typography>
        {/* {data.message} */}
        {data.message}
      <Stack direction="column" spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button type="submit" variant="contained">
          SUBMIT
        </Button>
      </Stack>
    </Box>
  );
};

export default Form;
