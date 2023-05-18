import { Link } from "react-router-dom";

const Movie = ({ movieId, movieName, movieImg }) => {
  return (
    <li className="movie">
      <Link to={`/movie/${movieId}`}>
        <img src={movieImg} alt={`this is poster of ${movieName}`} />
      </Link>
    </li>
  );
};

export default Movie;
