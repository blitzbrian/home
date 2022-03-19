import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { about } from "../../site.json";
export default function About() {
  let text = useRef();
  useEffect(() => {
    document.title = "About";
    text.current.innerHTML = about;
  }, []);
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
          color: "#e2e2e2",
          textShadow: "0px 10px 8px black",
        }}
      >
        <Typography variant="h3">
          <Link to="/">Dazerstudios</Link> About
        </Typography>
        <Typography variant="h5" ref={text}/>
      </Box>
    </>
  );
}
