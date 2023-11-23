import React from "react";

import Stack from "@mui/material/Stack";

import WorkIcon from "@mui/icons-material/Work";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SegmentIcon from "@mui/icons-material/Segment";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ViewListIcon from "@mui/icons-material/ViewList";
import HomeIcon from "@mui/icons-material/Home";

import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <Stack>
      <MenuItem path="home" icon={<HomeIcon />}>
        Dashboard
      </MenuItem>

      <MenuItem path="items" icon={<ViewListIcon />}>
        Przedmioty
      </MenuItem>

      <MenuItem path="sets" icon={<WorkIcon />}>
        Zestawy
      </MenuItem>

      <MenuItem path="cars" icon={<DirectionsCarIcon />}>
        Pojazdy
      </MenuItem>

      <MenuItem path="rentals" icon={<SegmentIcon />}>
        Wypożyczenia
      </MenuItem>

      <MenuItem path="inspections" icon={<FactCheckIcon />}>
        Przeglądy
      </MenuItem>
    </Stack>
  );
};

export default Menu;
