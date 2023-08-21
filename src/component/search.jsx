import React, { useState } from "react";
import "./search.css";
const Search = () => {
    //   let searchText = "KFC Burger";
    const [searchText, setSearchText] = useState();
  return (
    <div className="food-search">
      <div className="input-search">
        <input
          type="text"
          className="form-control search-box"
          placeholder="Search For Food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="btn btn-dark">Search</button>
      </div>
      {/*<div className="search-content">
        <p>Result Showing for "{searchText}"</p>
        </div>*/}
    </div>
  );
};

export default Search;
