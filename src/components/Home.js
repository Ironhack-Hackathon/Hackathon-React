import React, { Component } from "react";

class componentName extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 search-div">
          <img id="logo" src={this.props.logo} alt=""></img>
          <h3 className="city-header">BERLIN</h3>
          <input
            id="search-bar"
            type="text"
            placeholder="Search Berlin..."
          ></input>
        </div>
      </div>
    );
  }
}

export default componentName;
