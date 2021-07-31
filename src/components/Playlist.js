import React, { useEffect, useState } from "react";
import youtube from "../apis";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddPlaylistModal from "./AddPlaylistForm";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import {
  addYoutubeVideo,
  removeFromPlaylist,
  playVideo,
} from "../redux/actions/utility";
import VideoItem from "./VideoItem";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Playlist() {
  const dispatch = useDispatch();
  const videoPlaylist = useSelector((state) => state.app.playlist);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="playlist">
      <div className="playlist-control">
        <h4>Playlist</h4>
        <Button
          style={{
            height: 37,
          }}
          onClick={handleOpen}
          variant="contained"
          color="primary"
        >
          Add Playlist
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add to playlist</h2>
            <AddPlaylistModal  handleModalClose = {() => setOpen(false)}/>
          </div>
        </Fade>
      </Modal>
      <div className="playlist-list">
        {videoPlaylist.map((playlist) => {
          return (
            <VideoItem
              key={playlist.title}
              video={playlist}
              handleVideoSelect={(video) => dispatch(playVideo(video))}
              handleRemoveFromPlaylist={(video) =>
                dispatch(removeFromPlaylist(video.id))
              }
            />
          );
        })}
      </div>
    </div>
  );
}
