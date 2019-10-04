import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCSM6gvLt0YVPtpeqWQm3JNNXQ332_uMXQ'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              /> */}
            </GoogleMapReact>
          </div>
        );
      }
    }




export default GoogleMaps

// function initMap() {
//     // The location of Tropical Park
//     var park = {
//         lat: 25.723354,
//         lng: -80.321624
//     };
//     var lake = {
//         lat: 25.719614,
//         lng: -80.369308
//     };
//     var lake2 = {
//         lat: 25.775193,
//         lng: -80.306342
//     };
//     // The map, centered at Tropical Park
//     var map = new google.maps.Map(
//         document.getElementById('map'), {
//             zoom: 11,
//             center: lake2
//         });
//     // The marker, positioned at park
//     var marker = new google.maps.Marker({
//         position: park,
//         map: map
//     });
//     var marker2 = new google.maps.Marker({
//         position: lake,
//         map: map
//     });
//     var marker3 = new google.maps.Marker({
//         position: lake2,
//         map: map
//     });
// }