import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Logout from "./components/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
