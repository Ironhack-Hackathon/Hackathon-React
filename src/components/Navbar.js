import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="navlinks">
          <a id="help-button" className="navbar-brand" href="https://www.airbnb.com/help">
            Help
          </a>
          <a className="navbar-brand" href="#">
            Sign Up
          </a>
          <a className="navbar-brand" href="#">
            Login
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
