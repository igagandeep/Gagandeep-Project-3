import Nav from "./Nav";
import Banner from "./Banner";

const Header = ({ movie, fetchMoviesData, userInput, isTyping }) => {
  return (
    <header>
      <Nav fetchMoviesData={fetchMoviesData} />
      {!userInput && <Banner movie={movie} />}
    </header>
  );
};

export default Header;
