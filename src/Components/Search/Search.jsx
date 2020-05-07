import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event) => {
    const inputValue = event.target.value;
    const cityNameCapitalized = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setSearchValue(cityNameCapitalized);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className={styles.margin}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search city or country"
      />
      <input
        className={styles.button}
        onClick={callSearchFunction}
        type="submit"
        value="SEARCH"
      />
    </form>
  );
};

export default Search;
