import { useRef, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useHttp from "../hooks/useHttp";
import { searchByKeyword } from "../lib/api";

import classes from "./Search.module.css";

const Search = () => {
  const { sendRequest, data, status, error } = useHttp(searchByKeyword);
  const inputRef = useRef(null);
  const [searchResult, setSearchResult] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const submitHandler = (event) => {
    console.log(inputRef.current.value);

    event.preventDefault();
    setNoResult(false);
    setSearchResult(false);
    if (inputRef.current.value === 0) {
      return;
    }
    sendRequest(inputRef.current.value);
  };

  useEffect(() => {
    if (!error && status === "completed") {
      setSearchResult(true);
    }

    if (data?.total_results === 0) {
      setNoResult(true);
    }
  }, [error, status, data]);

  return (
    <Fragment>
      <h1>Search</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>
          <input type="text" placeholder="search movie" ref={inputRef} />
        </label>
        <input className={classes.submit} type="submit" value="Submit" />
      </form>

      {searchResult && (
        <div>
          <h1>Result</h1>
          <ul className={classes.result}>
            {data?.results.map((result) => {
              return (
                <li key={result.id}>
                  <Link key={result.id} to={`/movie/${result.id}`}>
                    {" "}
                    {result.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {noResult && <p className={classes.noResult}>No search result</p>}
    </Fragment>
  );
};

export default Search;
