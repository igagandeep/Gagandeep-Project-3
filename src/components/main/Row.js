import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Movie from "./Movie";
import ErrorComponent from "../error/ErrorComponent";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setMovies(res.data.results);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!error ? (
        <section className="movies-container">
          <div className="movies-wrapper">
            <h2 className="title">{title}</h2>
            <ul className="movies">
              {movies.map((movie) => {
                return (
                  movie.poster_path && (
                    <Movie
                      key={movie.id}
                      movieId={movie.id}
                      movieName={movie.name}
                      movieImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                  )
                );
              })}
            </ul>
          </div>
        </section>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export default Row;
