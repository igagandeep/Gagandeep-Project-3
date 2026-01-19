import MovieSearchList from "./MovieSearchList";
import Row from "./Row";
import { v4 } from "uuid";
import NoDataFound from "./NoDataFound";
import useMovieContext from "../../context/useMovieContext";

const Main = ({ genresList }) => {
    const { searchedMovies, userInput } = useMovieContext();

    return (
        <main className="main">
            {userInput ? (
                <>
                    {searchedMovies.length > 0 ? (
                        <MovieSearchList />
                    ) : (
                        <NoDataFound />
                    )}
                </>
            ) : (
                genresList.map((genre) => {
                    // this will render row of list of movies of specific category
                    return (
                        <Row
                            key={v4()}
                            title={genre.title}
                            fetchUrl={genre.fetchUrl}
                        />
                    );
                })
            )}
        </main>
    );
};

export default Main;
