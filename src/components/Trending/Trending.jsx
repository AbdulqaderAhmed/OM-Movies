import { Card, Typography, CardMedia, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";

export default function Trending({ apikey }) {
  const [movies, setMovies] = useState([]);
  const urlTrendingMovie = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apikey}`;

  const fetchMovie = async () => {
    const res = await axios.get(urlTrendingMovie);
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 10, mb: 2 }}>
        Trending Movie
      </Typography>

      <Grid container spacing={2}>
        <ReactOwlCarousel
          items={5}
          className="owl-theme"
          loop
          autoplay={true}
          margin={12}
        >
          {movies.length > 0 ? (
            movies.map((movie, index) => {
              return (
                <Grid item key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path
                      }
                      alt={movie.title}
                    />
                  </Card>
                </Grid>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </ReactOwlCarousel>
      </Grid>
    </>
  );
}
