import { makeStyles } from "@mui/styles";
import React from "react";
// ---------------------------------------------
const useStyles = makeStyles({
  Topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    backgroundColor: "#f1f1f1",
    padding: "0 20px",
  },
});

// --------------------------------------------
const Topbar = () => {
  const classes = useStyles();
  // -------------------------------------------
  return (
    <div className={classes.Topbar}>
      <div>image log</div>
      <div className={classes.Listitems}>
        <ul>
          <li>CONTACT</li>
          <li>BLOG</li>
          <li>PROFILE</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
