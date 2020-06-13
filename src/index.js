import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Jokes from "./components/Jokes";
import "./index.css";
import { Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import createBrowserHistory from "history/createBrowserHistory";
import MusicMaster from "./projects/music-master";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
      <Route
        path="/music-master"
        render={() => (
          <Header>
            <MusicMaster />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
