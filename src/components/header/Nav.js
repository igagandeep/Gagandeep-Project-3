import { useState, useEffect } from "react";

const Nav = () => {
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
        <img
          className="logo"
          src="assets/netflix.png"
          alt="this is logo icon"
        />

        <img
          className="profile"
          src="assets/avatar.png"
          alt="this is profile icon"
        />
      </div>
    </nav>
  );
};

export default Nav;
