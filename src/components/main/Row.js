import { useState, useEffect } from "react";
import axios from "../../axios";
import Movie from "./Movie";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <section className="movies-container">
      <div className="movies-wrapper">
        <h2 className="title">{title}</h2>
        <ul className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                isLargeRow
                movieName={movie.name}
                movieImg={`${baseUrl}${movie.poster_path}`}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Row;
