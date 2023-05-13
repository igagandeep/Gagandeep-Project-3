import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({ fetchMoviesData }) => {
  const [isNavBlack, setIsNavBlack] = useState(false);

  //this function update state by checking the scrollY position
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setIsNavBlack(true);
    } else {
      setIsNavBlack(false);
    }
  };
  useEffect(() => {
    //add event listner when user scroll down to page and call func
    window.onscroll = transitionNavbar;
    return () => (window.onscroll = null); // cleanup of eventlistener
  }, []);

  return (
    <nav className={`${isNavBlack && "nav-black"}`}>
      <div className="wrapper">
        <Link to="/">
          <img
            className="logo"
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="this is logo icon"
          />
        </Link>
        <ul className="nav-right">
          <li>
            <SearchBar fetchMoviesData={fetchMoviesData} />
          </li>

          <li>
            <img
              className="profile"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="this is profile icon"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
