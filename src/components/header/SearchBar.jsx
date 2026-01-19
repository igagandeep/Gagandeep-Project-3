import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import useMovieContext from "../../context/useMovieContext";

const SearchBar = () => {
  const { fetchMoviesData, userInput, setUserInput } = useMovieContext();

  useEffect(() => {
    fetchMoviesData(userInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Title, people, genres"
        className="search-input"
        value={userInput}
        onChange={handleChange}
      />
      <button type="button" className="search-icon">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
