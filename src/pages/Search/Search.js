import { useRef, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useHttp from "../../hooks/useHttp";
import { searchMovies } from "../../lib/api";

import classes from "./Search.module.css";
import FlexContainer from "../../components/layout/Flex/FlexContainer";

const Search = () => {
  const { sendRequest, data, status, error } = useHttp(searchMovies);
  const inputRef = useRef(null);
  const [noKeyword, setNoKeyword] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const submitHandler = (event) => {
    console.log(inputRef.current.value);

    event.preventDefault();
    setNoResult(false);
    setSearchResult(false);
    if (inputRef.current.value.length === 0) {
      setNoKeyword(true);
      return;
    }
    sendRequest(inputRef.current.value);
  };

  useEffect(() => {
    setNoKeyword(false);

    if (!error && status === "completed") {
      setSearchResult(true);
    }

    if (data?.total_results === 0) {
      setNoResult(true);
    }
  }, [error, status, data]);

  const noKeywordError = (
    <div className={classes.noKeyword}>Please enter search keyword</div>
  );

  return (
    <Fragment>
      <h1>Search</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>
          <input type="text" placeholder="search movie" ref={inputRef} />
        </label>
        <input className={classes.submit} type="submit" value="Submit" />
      </form>

      {noKeyword && noKeywordError}

      {searchResult && (
        <div>
          <h1>Result Total: {data.total_results}</h1>
          <FlexContainer>
            <ul className={classes.result}>
              {data?.results.map((result) => {
                return (
                  <li key={result.id}>
                    <Link key={result.id} to={`/movie/${result.id}`}>
                      {result.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </FlexContainer>
        </div>
      )}
      {noResult && <p className={classes.noResult}>No search result</p>}
    </Fragment>
  );
};

export default Search;
