import React from "react";
import Movie from "./Movie";
import useMovieContext from "../../context/useMovieContext";

const MovieSearchList = () => {
  const { searchedMovies } = useMovieContext();

  return (
    <section className="movies-results">
      <div className="wrapper">
        <ul className="movies">
          {searchedMovies.map((movie) => {
            return (
              movie.poster_path && (
                <Movie
                  key={movie.id}
                  movieId={movie.id}
                  movieName={movie.title}
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

export default MovieSearchList;
