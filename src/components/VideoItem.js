import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import dayjs from 'dayjs';

export default function VideoItem({
  video,
  handleVideoSelect,
  handleRemoveFromPlaylist,
}) {
  return (
    <div className=" video-item item">
      <div
        onClick={() => handleVideoSelect(video)}
        className="video-img"
      >
        <span className = "overlay"><PlayArrowIcon color = "primary"/></span>
        <img
          className="ui image"
          src={video.thumbnail.url}
          alt={video.description}
        />
      </div>

      <div className="content">
        <div className="header ">{video.title}</div>
      </div>
      <div style  = {{
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center'
      }}>
        <span>{dayjs(video.date).format('DD-MM-YYYY')}</span>
        <Button
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => handleRemoveFromPlaylist(video)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
