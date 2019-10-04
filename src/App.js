import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Listing from "./components/Listing";
import GoogleMaps from "./components/Maps";
import berlin from "./images/berlin.jpg";
import Video from "./components/Video";

function App() {
  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          AriBnB
        </a>

        <div>
          <a className="navbar-brand" href="#">
            SignUp
          </a>
          <a className="navbar-brand" href="#">
            Login
          </a>
          <a className="navbar-brand" href="#">
            Search
          </a>
        </div>
      </nav>
      <div className="papa-div container">
        <Video />
        <div className="row">
          <div className="col-12 search-div">
          <h3 className="city-header">BERLIN</h3>
          <input id="search-bar" type="text" placeholder="Search Berlin..."></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
