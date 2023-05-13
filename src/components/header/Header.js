import "./Header.scss";
import Nav from "./Nav";
import Banner from "./Banner";

const Header = ({ movie, fetchMoviesData }) => {
  return (
    <header>
      <Nav fetchMoviesData={fetchMoviesData} />
      <Banner movie={movie} />
    </header>
  );
};

export default Header;
