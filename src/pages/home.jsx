import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Home() {
  useEffect(() => {
    document.title = "Dazerstudios";
  }, []);
  return (
    <>
      <Box
        sx={{
          mt: "30px",
          mx: "auto",
          textAlign: "center",
          textShadow: "0px 10px 8px black",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#e2e2e2",
          }}
        >
          Dazerstudios
        </Typography>
        <Link key={1} to="/games">
          <Typography variant="h5">Games</Typography>
        </Link>
        <Link key={2} to="/apps">
          <Typography variant="h5">Apps</Typography>
        </Link>
        <Link to="/about">
          <Typography variant="h5">About</Typography>
        </Link>
      </Box>
    </>
  );
}
