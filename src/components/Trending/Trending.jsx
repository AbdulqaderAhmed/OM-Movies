import {
  Card,
  Typography,
  CardMedia,
  Grid,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";

export default function Trending({ apikey }) {
  const [movies, setMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [time, setTime] = useState("day");
  const urlTrendingMovie = `https://api.themoviedb.org/3/trending/all/${time}?api_key=${apikey}`;

  const fetchMovie = async () => {
    const res = await axios.get(urlTrendingMovie);
    setMovies(res.data.results);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log(checked, time);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mt: 10, mb: 2, display: "inline-flex" }}
      >
        Trendings
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label={checked === true ? "Week" : "Day"}
        />
      </FormGroup>

      <Grid container spacing={2}>
        {movies
          ? movies.map((movie, index) => {
              return (
                <Grid key={index}>
                  <Card sx={{ maxHeight: 450, margin: 2 }}>
                    <CardMedia
                      component="img"
                      image={
                        "https://image.tmdb.org/t/p/w300" + movie.poster_path
                      }
                      alt={movie.title}
                    />
                  </Card>
                </Grid>
              );
            })
          : null}
      </Grid>
    </>
  );
}
