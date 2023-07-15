import { makeStyles } from "@mui/styles";
import React from "react";
import logo from '../imges/logo.png'
// ---------------------------------------------
const useStyles = makeStyles({
  Topbar: {
    width:'100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    backgroundColor: "#f1f1f1",
    padding: "0 0px",
  },
  Listitems:{
    display: 'flex',
    justifyContent: 'center',
    gap: '112px',
    listStyle: 'none',
    padding:'20px'
  }
});

// --------------------------------------------
const Topbar = () => {
  const classes = useStyles();
  // -------------------------------------------
  return (
    <div className={classes.Topbar}>
      <img src={logo} alt="logo" width="150px" height="50px" />
      <div >
        <ul className={classes.Listitems}>
          <li>CONTACT</li>
          <li>BLOG</li>
          <li>PROFILE</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
