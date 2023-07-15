import React from 'react'
import Topbar from './Layout/Topbar'
import Sidebar from './Layout/Sidebar'
import Mainpage from './Layout/Mainpage'
import { Box, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
  container: {
    display: "flex",
  },
  sidebar: {
    width: "15%",
    backgroundColor: "grey",
  },
  mainpage: {
    width: "85%",
    backgroundColor: "lightgrey",
  },
});
const Home = () => {
  const classes=useStyles();
  return (
    <>
      <Topbar />
      <Box className={classes.container}>
        <Box className={classes.sidebar}>
          <Sidebar />
        </Box>
        <Box className={classes.mainpage}>
          <Mainpage />
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
}

export default Home