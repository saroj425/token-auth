import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../index.css";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div className="aligncenter">
        <h2>You have logged out............</h2>
        <Link to="/">Go to home Page</Link>
      </div>
    );
  }
}
