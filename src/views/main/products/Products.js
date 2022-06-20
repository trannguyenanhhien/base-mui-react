import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  test: {
    margin: 200,
    marginLeft: 190,
  },
}));

const Products = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.test}>
        <TextField>ABC</TextField>
      </div>

      <div className={classes.test}>ABC</div>
      <Outlet />
    </div>
  );
};

export default Products;
