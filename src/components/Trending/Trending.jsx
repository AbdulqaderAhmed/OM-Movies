import { Card, Typography, CardMedia } from "@mui/material";
import React from "react";

export default function Trending({ trending }) {
  const classes = useStyles();
  const imgPath = "https://image.tmdb.org/t/p/w500" + trending.poster_path;

  return (
    <Card>
      <CardMedia component="img" image={imgPath} alt={trending.title} />
    </Card>
  );
}
