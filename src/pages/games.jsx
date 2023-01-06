import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { games } from "../../site.json";

export default function Games() {
  useEffect(() => {
    document.title = "Games";
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
          <Link to="/">Dazerstudios</Link> Games
        </Typography>

        {games.map((game, i) => (
          <Game key={i} game={game} />
        ))}
      </Box>
    </>
  );
}

const Game = ({ game }) => {
  return (
    <>
      <Typography variant="h5" sx={{ mt: "20px", color: "#e2e2e2" }}>
        <a href={game.url}>{game.name}</a>
      </Typography>
      <a href={game.url}>
        <img
          src={game.img}
          className={game.pixelArt ? "pixel" : null}
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
