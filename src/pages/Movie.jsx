import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import getGenresUrl from "../utils/similarMoviesUrl";
import ErrorComponent from "../components/error/ErrorComponent";
import Footer from "../components/footer/Footer";
import useMovieContext from "../context/useMovieContext";

const Movie = () => {
  const { id } = useParams(); // getting movie_id from url when click on target movie link
  const genresList = getGenresUrl(id);
  const { error, fetchMovieById, clearSearch } = useMovieContext();

  useEffect(() => {
    // Fetching movie data of specific id
    fetchMovieById(id);
    clearSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {!error ? (
        <>
          <Header />
          <Main genresList={genresList} />
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
