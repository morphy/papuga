import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import { Button } from "@mui/material";

type ItemProps = {
  name: string;
  description: string;
  img: string;
};

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { name, description, img } = props;

  return (
    <Paper sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={1} display="flex" alignItems="center">
          <IconButton>
            <CheckBoxOutlineBlank />
          </IconButton>
        </Grid>

        <Grid item xs={2} display="flex" alignItems="center">
          <img
            src={img}
            alt="item photo"
            style={{
              width: "96px",
              height: "60px"
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2" color="disabled">
            {description}
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="contained" disableElevation>
            Button
          </Button>
        </Grid>

        <Grid
          item
          xs={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton>
            <ModeEditIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Item;
