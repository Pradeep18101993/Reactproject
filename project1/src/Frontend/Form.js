import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";

const Form = () => {
  const[data,setData]=useState('');

  const fetchapidata=()=>{
    axios.get("http://localhost:5000/api")
    .then((res)=>{
      setData(res.data);
      console.log(res);
      
    }
    );
  }

  useEffect(()=>{
      fetchapidata();
  },[])
  return (
    <Box sx={{ margin: "30px 196px", padding: "47px" }}>
        <Typography>REGISTER FORM</Typography>
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
