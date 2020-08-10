import React from "react";
import "./style.css";

const Search = (props) => {
  return (
    <div className="d-flex justify-content-center mx-auto">
      <input
        placeholder="Search for a user here"
        name="search"
        type="text"
        className="form-control-lg search-font mx-auto"
        onChange={props.searchForm}
      />
    </div>
  );
};

export default Search;
