import React, { Component } from "react";
import data from "../top10.json";

class Test extends Component {
  state = {
    listings: data
  };

  createListing = () => {
    return this.state.listings.map((each, i) => {
      return (
        <div className="col-6" key={i}>
          <div className="row">
            <div className="col-5">
              <img src={each.picture_url} alt="" className="img-fluid"/>
            </div>
            <div className="col-7 text-left">
              <h6>{each.bedrooms} Bedroom</h6>
              <h5>{each.name}</h5>
              <p>{each.accommodates} Guests - {each.bedrooms} rooms - {each.beds} beds - {each.bathrooms} bath</p>
              <p>{each.property_type}, {each.room_type}</p>
              <p>Rating: {each.review_scores_rating}</p>
              <p>{each.price}/night</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        {this.createListing()}
      </div>
    );
  }
}

export default Test;
