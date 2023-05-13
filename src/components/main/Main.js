import "./Main.scss";
import MovieSearchList from "./MovieSearchList";
import Row from "./Row";
import { v4 } from "uuid";

const Main = ({ genresList, movies, isFetched }) => {
  return (
    <main>
      {movies && movies.length > 0 ? (
        <MovieSearchList movies={movies} />
      ) : (
        genresList.map((genre) => {
          // this will render row of list of movies of specific category
          return (
            <Row key={v4()} title={genre.title} fetchUrl={genre.fetchUrl} />
          );
        })
      )}
    </main>
  );
};

export default Main;
