const Movie = ({ movieName, movieImg, isLargeRow }) => {
  return (
    <li className={`movie ${isLargeRow && "poster_large"}`}>
      <img src={movieImg} alt={movieName} />
    </li>
  );
};

export default Movie;
