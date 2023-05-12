import "./Main.scss";
import Row from "./Row";
import { v4 } from "uuid";

const Main = ({ genresList }) => {
  return (
    <main>
      {genresList.map((genre) => {
        // this will render row of list of movies of specific category
        return <Row key={v4()} title={genre.title} fetchUrl={genre.fetchUrl} />;
      })}
    </main>
  );
};

export default Main;
