import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    // <form action="#" className="form">
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Title, people, genres"
        className="search-input"
      />
      <button className="search-icon">
        <FaSearch />
      </button>
    </div>
    // </form>
  );
};

export default SearchBar;
