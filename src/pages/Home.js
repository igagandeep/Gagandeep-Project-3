import axios from "../utils/axios";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import getGenresUrl from "../utils/allMoviesUrl";
import NoDataFound from "../components/main/NoDataFound";
import ErrorComponent from "../components/error/ErrorComponent";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [randomMovie, setRandomMovie] = useState({}); //to store random movie on banner
  const [searchedMovies, setSearchedMovies] = useState([]); // to store list of movies when search title
  const [isFetched, setIsFetched] = useState(true); // checking if any title matches with query
  const genresList = getGenresUrl(); // to get list of genres
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //randomly fetching movie instance from popular movies api and updating state
  const fetchMovieData = async () => {
    try {
      const res = await axios.get(genresList[0].fetchUrl);
      const movieObj =
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ];
      setRandomMovie(movieObj);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  // fetching list of movies based upon search query
  const fetchMoviesData = async (userInput) => {
    if (userInput.length > 0) {
      try {
        const res = await axios.get(`/search/movie`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "en-US",
            query: userInput,
            page: 1,
            include_adult: false,
          },
        });
        const results = res.data.results;
        if (results.length > 0) {
          setSearchedMovies(results);
          setIsFetched(true);
        } else {
          setSearchedMovies([]);
          setIsFetched(false);
        }
        setError(false);
      } catch (error) {
        setError(true);
      }
    } else {
      setSearchedMovies([]);
    }
  };

  return (
    <>
      {!error ? (
        <>
          <Header movie={randomMovie} fetchMoviesData={fetchMoviesData} />
          {isFetched ? (
            <Main genresList={genresList} searchedMovies={searchedMovies} />
          ) : (
            <NoDataFound />
          )}
          <Footer />
        </>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export default Home;
