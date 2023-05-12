import { useState, useEffect } from "react";
import axios from "../../axios";
import Movie from "./Movie";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    };
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
};

export default Row;
