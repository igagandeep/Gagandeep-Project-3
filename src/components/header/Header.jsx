import Nav from "./Nav";
import Banner from "./Banner";
import useMovieContext from "../../context/useMovieContext";

const Header = () => {
    const { userInput } = useMovieContext();

    return (
        <header>
            <Nav />
            {!userInput && <Banner />}
        </header>
    );
};

export default Header;
