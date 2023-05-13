import axios from "axios";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getGenresUrl from "../utils/similarMoviesUrl";
import NoDataFound from "../components/main/NoDataFound";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [isFetched, setIsFetched] = useState(true);
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
  // fetching list of movies based upon search query
  const fetchMoviesData = async (userInput) => {
    if (userInput.length > 0) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${userInput}&page=1&include_adult=false`
      );
      const results = res.data.results;
      if (results.length > 0) {
        setMovies(results);
        setIsFetched(true);
      } else {
        setMovies([]);
        setIsFetched(false);
      }
    } else {
      setMovies([]);
    }
  };
  return (
    <>
      <Header movie={movie} fetchMoviesData={fetchMoviesData} />
      {isFetched ? (
        <Main genresList={genresList} movies={movies} isFetched={isFetched} />
      ) : (
        <NoDataFound />
      )}
      <Outlet />
    </>
  );
};

export default Movie;
