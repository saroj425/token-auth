import React, { Component } from "react";
import "../index.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
  }
  render() {
    return (
      <div className="login-screen">
        <h2>Login Page</h2>
        <br />
        <br />
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="User Name"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
