import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

import theme from "styles/theme";

import Menu from "./Menu";
import TopBar from "./TopBar";

const menuWidth = 200;

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => setMenuOpen((oldMenuOpen) => !oldMenuOpen);

  return (
    <>
      <TopBar
        onMenuClick={handleMenuClick}
        menuOpen={menuOpen}
        menuWidth={menuWidth}
      />

      <Menu open={menuOpen} width={menuWidth} />

      <Box
        sx={{
          pl: menuOpen ? menuWidth + "px" : "0px",
          backgroundColor: theme.palette.grey["200"],
          pt: 8,
          minHeight: "100%"
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
