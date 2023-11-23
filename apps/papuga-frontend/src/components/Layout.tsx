import React from "react";
import { Outlet } from "react-router-dom";

import Grid from "@mui/material/Grid";

import Menu from "./Menu";
import User from "./User";

const Layout = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={2}>
        <User name="Twoja Stara" email="twojastara@gmail.com" />
        <Menu />
      </Grid>
      <Grid item xs={10} sx={{ backgroundColor: "secondary.main" }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
