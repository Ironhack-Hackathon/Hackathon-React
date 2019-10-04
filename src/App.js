import React from "react";
import "./App.css";
import Listing from "./components/Listing";
import GoogleMaps from "./components/Maps";
import berlin from "./images/berlin.jpg";
import Video from "./components/Video";
import logo from "./images/airbnb-2.svg"
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="main">
    <Video />
    <Navbar />
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
