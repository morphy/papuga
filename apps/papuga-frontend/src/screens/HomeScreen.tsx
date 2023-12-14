import React from "react";
import { Box, Paper } from "@mui/material";
import { useUserContext } from "../UserContext";

const HomeScreen = () => {
  const x = useUserContext();

  return (
    <Box p={8}>
      <Paper elevation={1} sx={{ p: 8 }}>
        gówno {(x as any)?.name}
      </Paper>
    </Box>
  );
};

export default HomeScreen;
