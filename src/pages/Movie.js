import axios from "../utils/axios";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getGenresUrl from "../utils/similarMoviesUrl";
import ErrorComponent from "../components/error/ErrorComponent";
import Footer from "../components/footer/Footer";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams(); // getting movie_id from url when click on target movie link
  const genresList = getGenresUrl(id);
  const [userInput, setUserInput] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    // Fetching movie data of specific id
    const fetchMovieData = async () => {
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
      }
    };

    fetchMovieData();
    setUserInput("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // fetching list of movies based upon search query
  const fetchMoviesData = async (searchedText) => {
    setUserInput(searchedText);
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
  return (
    <>
      {!error ? (
        <>
          <Header
            movie={movie}
            fetchMoviesData={fetchMoviesData}
            userInput={userInput}
          />
          <Main
            genresList={genresList}
            searchedMovies={searchedMovies}
            userInput={userInput}
          />
          <Outlet />
          <Footer />
        </>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export default Movie;
