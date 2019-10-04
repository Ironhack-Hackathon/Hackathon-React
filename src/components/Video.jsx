import React, { Component } from "react";
import video from "../images/CityHyperLapse.mp4";

class Video extends Component {
  render() {
    return (
      <div className="fullscreen-video-wrap">
        <video
          src={video}
          autoplay="true"
          loop="true"
          muted
        ></video>
      </div>
    );
  }
}

export default Video;
