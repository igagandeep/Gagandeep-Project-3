import axios from "axios";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getGenresUrl from "../utils/similarMoviesUrl";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams(); // getting movie_id from url when click on target movie link
  const genresList = getGenresUrl(id);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    // Fetching movie data of specific id
    const fetchMovieData = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      });
      setMovie(res.data);
    };

    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Header movie={movie} />
      <Main genresList={genresList} />
      <Outlet />
    </>
  );
};

export default Movie;
