import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Recipe from "./Recipe";
import Login from "./Login";
import Collection from "./Collection";
import Journal from "./Journal";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/recipe" component={Recipe} />
      <Route exact path="/account" component={Login} />
      <Route exact path="/collections" component={Collection} />
      <Route exact path="/journal" component={Journal} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
