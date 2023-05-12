import axios from "../axios";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { useState, useEffect } from "react";
import getGenresUrl from "../utils/allMoviesUrl";

const Home = () => {
  const [movie, setMovie] = useState({});
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

  return (
    <>
      <Header movie={movie} />
      <Main genresList={genresList} />
    </>
  );
};

export default Home;
