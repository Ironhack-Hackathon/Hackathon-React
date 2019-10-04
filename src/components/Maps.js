import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import houseIcon from "../images/airbnb-2.svg";

const House1 = ({ text }) => <div id="map-text">{text}</div>;
const House2 = ({ text }) => <div id="map-text">{text}</div>;

const Interest1 = ({ text }) => <div id="map-text">{text}</div>;
const Interest2 = ({ text }) => <div id="map-text">{text}</div>;
const Interest3 = ({ text }) => <div id="map-text">{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 52.5131462,
      lng: 13.4016983
    },
    zoom: 12
  };

  render() {
    let myPic = <img src={houseIcon}></img>;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCSM6gvLt0YVPtpeqWQm3JNNXQ332_uMXQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <House1 lat={52.5131462} lng={13.4016983} text="🏠" />
          <House2 lat={52.5431462} lng={13.4416083} text="🏠" />

          <Interest1 lat={52.5331462} lng={13.4016983} text="⬇️" />
          <Interest2 lat={52.4931462} lng={13.4616983} text="⬇️" />
          <Interest3 lat={52.5181462} lng={13.3616983} text="⬇️" />



        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;
