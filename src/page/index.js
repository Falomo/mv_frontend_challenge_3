import React from "react";
import Playlist from "../components/Playlist";
import VideoPlayer from "../components/VideoPlayer";
import './style.css'

export default function HomePage() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div>
      {/* <div>Nav Header</div> */}
      <div className="video">
        <VideoPlayer  />
        <Playlist  />
      </div>
    </div>
  );
}
