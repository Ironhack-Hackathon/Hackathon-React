import React, { Component } from "react";
import GoogleMaps from "./Maps";
import Navbar from "./Navbar";
import Test from "./Test";

class Listing extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div id="navback"></div>
          <GoogleMaps />
          <div id="push-row" className="row papa-listin">
            <Test />
          </div>
        </div>

        {/* RTesting new Shit */}
      </React.Fragment>
    );
  }
}

export default Listing;
