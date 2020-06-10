import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../index.css";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="aligncenter">
        <h2>Admin Page, only authorized people can access page</h2>
        <Link to="/loout">Logout</Link>
      </div>
    );
  }
}
