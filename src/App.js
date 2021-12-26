import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Favourite from "./pages/Favourite/Favourite";
import Search from "./pages/Search/Search";
import WatchLater from "./pages/WatchLater";
import Main from "./pages/Main";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main"></Redirect>
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/favourite">
          <Favourite />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/watchlater">
          <WatchLater />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
