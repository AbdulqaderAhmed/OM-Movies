import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import Trending from "../Trending/Trending";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TrendingTvShows from "../Trending/TrendingTvShows";

const API_KEY = "2101faa422ed30d7f1f0fcc2d9cc19f7";

export default function Home() {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const urlTrendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const urlTrendingTvShows = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;

  const fetchTrendingMovie = async () => {
    const res = await axios.get(urlTrendingMovies);
    setTrendingMovie(res.data.results);
  };

  const fetchTrendingTvShows = async () => {
    const res = await axios.get(urlTrendingTvShows);
    setTrendingTvShows(res.data.results);
  };

  useEffect(() => {
    fetchTrendingMovie();
    fetchTrendingTvShows();
  }, []);

  return (
    <>
      {/* trending movies */}
      <Typography variant="h5" component="h3" sx={{ mt: 10, mb: 2 }}>
        Trending Movies
      </Typography>
      <Grid container spacing={2}>
        <ReactOwlCarousel
          items={5}
          className="owl-theme"
          loop
          autoplay={true}
          margin={12}
        >
          {trendingMovie.length > 0 ? (
            trendingMovie.map((movie, index) => {
              return (
                <Grid item key={index}>
                  <Trending trending={movie} />
                </Grid>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </ReactOwlCarousel>
      </Grid>

      {/* trending tv shows */}
      <Typography variant="h5" component="h2" sx={{ mt: 8, mb: 2 }}>
        Trending Tv Shows
      </Typography>
      <Grid container spacing={2}>
        <ReactOwlCarousel
          items={5}
          className="owl-theme"
          loop
          autoplay={true}
          margin={12}
        >
          {trendingTvShows.length > 0 ? (
            trendingTvShows.map((movie, index) => {
              return (
                <Grid item key={index}>
                  <TrendingTvShows trending={movie} />
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
