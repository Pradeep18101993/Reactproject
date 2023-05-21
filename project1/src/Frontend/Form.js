import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
// import { getApi } from "../API/Register";

const Form = () => {
  const[data,setData]=useState('');
  const [register, setRegister] = useState({
    name:'',
    email:'',
    password:'',
  })
  
const handlechange=(e)=>{
     setRegister({
      ...register,
      [e.target.name]:e.target.value
     });
     console.log(register,"adfg")
   
}
const values = {
  name: register.name,
  email: register.email,
  password: register.password,
};

const handlesubmit = async (e) => {
  await axios.post("http://localhost:5000/api", values).then((res) => {
    setData(res);
     setRegister({
      name:'',
      email:'',
      password:''
     })
    console.log(res);
  });
};



  // const fetchapidata=async()=>{
  //   const payload = {
  //     name: register.name,
  //     email: register.email,
  //     password: register.password,
  //   };
  //  await getApi(payload).then((res) => {
  //    setData(res); //you dont have to add data it will give error, as response from api already stored
  //    // in data in backend. if you want to add res.data then in backend you should remove it
  //  console.log(res);
  //   });
  // }

  // useEffect(()=>{
  //     fetchapidata();
  // },[])

  
  return (
    <Box sx={{ margin: "30px 196px", padding: "47px" }}>
      <Typography>REGISTER FORM</Typography>
      <Stack direction="column" spacing={2}>
        <TextField
          id="outlined-basic"
          name="name"
          value={register.name}
          onChange={handlechange}
          label="Outlined"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="email"
          value={register.email}
          label="Outlined"
          variant="outlined"
          onChange={handlechange}
        />
        <TextField
          id="outlined-basic"
          name="password"
          value={register.password}
          label="Outlined"
          variant="outlined"
          onChange={handlechange}
        />
        <Button type="submit" variant="contained" onClick={handlesubmit}>
          SUBMIT
        </Button>
        {data && (
          <>
        <p>Successfully Resgistered .please Login</p>
        <Button >
          LOGIN
        </Button>
        </>
        )}
      </Stack>
    </Box>
  );
};

export default Form;
