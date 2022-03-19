import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { apps } from "../../site.json";

export default function Apps() {
  useEffect(() => {
    document.title = "Apps";
  }, []);
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mx: "auto",
          textShadow: "0px 10px 8px black",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#e2e2e2",
          }}
        >
          <Link to="/">Dazerstudios</Link> Apps
        </Typography>

        {apps.map((app, i) => (
          <App key={i} app={app} />
        ))}
      </Box>
    </>
  );
}

const App = ({ app }) => {
  return (
    <>
      <Typography variant="h5" sx={{ mt: "20px", color: "#e2e2e2" }}>
        <a href={app.url}>{app.name}</a>
      </Typography>
      <a href={app.url}>
        <img
          src={app.img}
          alt={app.name}
          className={app.pixelArt ? "pixel" : null}
          style={{
            marginTop: "10px",
            width: "400px",
            height: "250px",
            maxWidth: "90%",
            borderRadius: "25px",
            objectFit: "cover",
            boxShadow: "0px 15px 8px black",
          }}
        />
      </a>
    </>
  );
};
