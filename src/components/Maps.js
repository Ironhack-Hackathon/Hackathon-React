import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
    static defaultProps = {
        center: {
            lat: 25.766111,
            lng: -80.196183
        },
        zoom: 15
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '400px', width: '400px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCSM6gvLt0YVPtpeqWQm3JNNXQ332_uMXQ'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={25.766111}
                lng={-80.196183}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        );
      }
    }

export default GoogleMaps
