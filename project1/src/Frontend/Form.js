import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Form = () => {
  return (
    <Box sx={{ margin: "30px 196px", padding: "47px" }}>
        <Typography>REGISTER FORM</Typography>
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
