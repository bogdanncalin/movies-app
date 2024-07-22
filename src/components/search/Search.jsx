// import SearchIcon from "./icons/Search-icon"; // one way of doing things, by creating your own icon with svg
import { HiOutlineSearch } from "react-icons/hi"; // another way of importing icons, by using react-icons library
import "./Search.css";
import PropTypes from 'prop-types'

function Search({ onSearchChange }) {
  function inputChange(event) {
    onSearchChange(event.target.value); // to get the value from the input box everytime it changes
  }

  return (
    <div className="search-container">
      <HiOutlineSearch className="search-icon" />
      <input
        onChange={inputChange}
        className="search"
        type="text"
        placeholder="Search for movies or TV series"
      ></input>
    </div>
  );
}

export default Search;

Search.propTypes = {
    onSearchChange: PropTypes.func,
}