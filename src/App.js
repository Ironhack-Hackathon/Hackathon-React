import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from "./components/Listing";
import GoogleMaps from "./components/Maps"
import GoogleMapReact from 'google-map-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Listing />
        <h1>MAPS DIV</h1>
        <GoogleMaps/>
      </header>
    </div>
  );
}

export default App;
