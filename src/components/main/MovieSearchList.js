import React from "react";
import Movie from "./Movie";

const MovieSearchList = ({ movies }) => {
  return (
    <section className="movies-results">
      <div className="wrapper">
        <ul className="movies">
          {movies.map((movie) => {
            return (
              movie.poster_path && (
                <Movie
                  key={movie.id}
                  movieId={movie.id}
                  movieName={movie.title}
                  movieImg={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
