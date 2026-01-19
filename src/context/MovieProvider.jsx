import { useState } from "react";
import axios from "../utils/axios";
import getGenresUrl from "../utils/allMoviesUrl";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({});
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch a random movie for the banner (Home page)
  const fetchRandomMovie = async () => {
    setLoading(true);
    try {
      const genresList = getGenresUrl();
      const res = await axios.get(genresList[0].fetchUrl);
      const movieObj =
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ];
      setMovie(movieObj);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a specific movie by ID (Movie page)
  const fetchMovieById = async (id) => {
    setLoading(true);
    const API_KEY = process.env.REACT_APP_API_KEY;
    try {
      const res = await axios.get(`/movie/${id}`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      });
      setMovie(res.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch movies based on search query
  const fetchMoviesData = async (searchedText) => {
    setUserInput(searchedText);
    const API_KEY = process.env.REACT_APP_API_KEY;

    if (searchedText.length > 0) {
      try {
        const res = await axios.get(`/search/movie`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            query: searchedText,
            page: 1,
            include_adult: false,
          },
        });
        const results = res.data.results;
        if (results.length > 0) {
          setSearchedMovies(results);
        } else {
          setSearchedMovies([]);
        }
        setError(false);
      } catch (error) {
        setError(true);
      }
    } else {
      setSearchedMovies([]);
      setUserInput("");
    }
  };

  // Clear search results
  const clearSearch = () => {
    setSearchedMovies([]);
    setUserInput("");
  };

  const value = {
    movie,
    searchedMovies,
    userInput,
    error,
    loading,
    setUserInput,
    fetchRandomMovie,
    fetchMovieById,
    fetchMoviesData,
    clearSearch,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
