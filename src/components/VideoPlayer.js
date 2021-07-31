import React from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

export default function VideoPlayer() {
  const curerntlyPlaying = useSelector((state) => state.app.currentlyPlaying);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="video-player">
      <YouTube
        videoId={curerntlyPlaying.videoId}
        opts={opts}
        onReady={_onReady}
      />
      <div style = {{ textAlign: "left", marginLeft: 30 }}>
          <h2>{curerntlyPlaying.title}</h2>
          <p>{curerntlyPlaying.description}</p>
      </div>
    </div>
  );
}
