import React from "react";
import "./App.css";
import Listing from "./components/Listing";
import GoogleMaps from "./components/Maps";
import berlin from "./images/berlin.jpg";
import Video from "./components/Video";
import logo from "./images/airbnb-2.svg"

function App() {
  return (
    <div className="main">
    <Video />
      <nav className="navbar navbar-expand-lg">

        <div className="navlinks">
          <a id="help-button" className="navbar-brand" href="#">
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
      <div className="papa-div container">
        
        <div className="row">
          <div className="col-12 search-div">
          <img id="logo" src={logo} alt=""></img>
          <h3 className="city-header">BERLIN</h3>
          <input id="search-bar" type="text" placeholder="Search Berlin..."></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
