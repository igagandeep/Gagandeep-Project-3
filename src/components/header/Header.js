import "./Header.scss";
import Nav from "./Nav";
import Banner from "./Banner";

const Header = ({ movie }) => {
  return (
    <header>
      <Nav />
      <Banner movie={movie} />
    </header>
  );
};

export default Header;
