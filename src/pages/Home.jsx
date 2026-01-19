import { useEffect } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import getGenresUrl from "../utils/allMoviesUrl";
import ErrorComponent from "../components/error/ErrorComponent";
import Footer from "../components/footer/Footer";
import useMovieContext from "../context/useMovieContext";

const Home = () => {
  const { error, fetchRandomMovie } = useMovieContext();
  const genresList = getGenresUrl(); // to get list of genres

  useEffect(() => {
    fetchRandomMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!error ? (
        <>
          <Header />
          <Main genresList={genresList} />
          <Footer />
        </>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export default Home;
