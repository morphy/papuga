import React from "react";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

type TopBarProps = {
  onMenuClick: () => void;
  menuOpen: boolean;
  menuWidth: number;
};

const TopBar: React.FC<TopBarProps> = (props: TopBarProps) => {
  const { onMenuClick, menuOpen, menuWidth } = props;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ pl: menuOpen ? menuWidth + "px" : "0" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">Papuga</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
