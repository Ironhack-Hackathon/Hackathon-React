import React, { Component } from 'react';
import GoogleMaps from "./Maps";
import Navbar from "./Navbar"


class Listing extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <div id="navback">
                </div>
                <GoogleMaps />
                <div id="push-row" className="row papa-listin">
                    <div className="col-6">
                        <div className="listing-card">

                            <div  className="row">
                                <div className="col-6">
                                    <img id="listing-image" src="https://a0.muscache.com/im/pictures/53900851/95a1e352_original.jpg?aki_policy=large" alt=""></img>
                                </div>
                                <div className="col-6">
                                    <h4>2 Bedroom</h4>
                                    <h3>Title of palce</h3>
                                    <h6>4 Guests - 2 rooms - 2 beds - 1 bath</h6>
                                    <h6>Amenities:</h6>
                                    <ul>
                                        <li>WiFi</li>
                                        <li>Full Shower</li>
                                        <li>Washer/Dryer</li>
                                        <li>Gym</li>
                                    </ul>
                                    <h6>Rating: 4.1/5</h6>
                                    <h6>$120/night</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="listing-card">

                            <div className="row">
                                <div className="col-6">
                                    <img id="listing-image" src="https://a0.muscache.com/im/pictures/57acbee7-f3ed-4762-9822-87a37f29fcbc.jpg?aki_policy=large" alt=""></img>
                                </div>
                                <div className="col-6">
                                    <h4>2 Bedroom</h4>
                                    <h3>Title of palce</h3>
                                    <h6>4 Guests - 2 rooms - 2 beds - 1.5 baths</h6>
                                    <h6>Amenities:</h6>
                                    <ul>
                                        <li>WiFi</li>
                                        <li>Full Shower</li>
                                        <li>Washer/Dryer</li>
                                        <li>Gym</li>
                                    </ul>
                                    <h6>Rating: 4.5/5</h6>
                                    <h6>$150/night</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* RTesting new Shit */}

                    



            </React.Fragment>
        );
    }
}

export default Listing;