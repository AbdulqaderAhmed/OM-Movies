import { Card, Typography, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    transitionProperty: "transform",
    transitionDelay: "0.1s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

export default function Trending({ trending }) {
  const classes = useStyles();
  const imgPath = "https://image.tmdb.org/t/p/w500" + trending.poster_path;

  return (
    <Card className={classes.card}>
      <CardMedia component="img" image={imgPath} alt={trending.title} />
    </Card>
  );
}
