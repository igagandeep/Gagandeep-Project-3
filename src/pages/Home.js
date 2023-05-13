import axios from "../axios";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { useState, useEffect } from "react";
import getGenresUrl from "../utils/allMoviesUrl";
import NoDataFound from "../components/main/NoDataFound";

const Home = () => {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [isFetched, setIsFetched] = useState(true);
  const genresList = getGenresUrl();

  useEffect(() => {
    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //randomly fetching movie instance from popular movies api and updating state
  const fetchMovieData = async () => {
    const request = await axios.get(genresList[0].fetchUrl);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  };

  // fetching list of movies based upon search query
  const fetchMoviesData = async (userInput) => {
    if (userInput.length > 0) {
      const res = await axios.get(
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${userInput}&page=1&include_adult=false`
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
    </>
  );
};

export default Home;
