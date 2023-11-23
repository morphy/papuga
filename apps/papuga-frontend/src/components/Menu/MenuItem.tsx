import React from "react";

import { styled } from "@mui/material";
import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";
import { Link, useLocation } from "react-router-dom";

const Button = styled(ButtonBase)<ButtonBaseProps>(({ theme }) => ({
  width: "100%",
  color: "black",
  borderRadius: "0",
  justifyContent: "flex-start",
  textTransform: "none",
  padding: "1rem 1.5rem",
  fontSize: "1rem",
  transitionDuration: "0.1s",

  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
    marginRight: "1rem"
  },

  "&:hover": {
    backgroundColor: theme.palette.grey["300"]
  },

  "&.active": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

type MenuItemProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  path: string;
};

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { children, icon, path } = props;

  const location = useLocation();
  const active = location.pathname.includes(path);

  return (
    <Link to={path}>
      <Button className={active ? "active" : ""} disableRipple>
        {icon}
        {children}
      </Button>
    </Link>
  );
};

export default MenuItem;
