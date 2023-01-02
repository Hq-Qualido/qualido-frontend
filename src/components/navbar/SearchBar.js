import React, { useState, useEffect } from "react";
import { baseUrl } from "../../BaseUrl";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";

export default function SearchBar() {
  const [searchBox, setSearchBox] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [searchedData, setsearchedData] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    const url = `${baseUrl}/products/search?tags=${searchBox.target.value}`;
    const response = await fetch(url);
    const data = await response.json();
    setsearchedData(data);
  }
  useEffect(() => {
    if (searchBox.target.value.length > 2) handleSearch(searchBox);
    else if (searchBox.target.value.length === 0) setsearchedData([]);
  }, [searchBox.target.value]);

  return (
    <>
      <form
        className="d-flex nav-searchBar"
        role="search"
        onSubmit={handleSearch}
      >
        <span className="search-icon">
          <FaSearch />
        </span>
        <input
          className="search-bar me-1"
          type="search"
          placeholder="Search items..."
          aria-label="Search"
          value={searchBox}
          onClick={() => {
            setSearchResult(true);
          }}
          onChange={(e) => {
            setSearchBox(e);
            setSearchResult(true);
          }}
        />

        {searchResult ? (
          <SearchResult
            searchResult={setSearchResult}
            searchData={searchedData}
          />
        ) : (
          ""
        )}
      </form>
    </>
  );
}
