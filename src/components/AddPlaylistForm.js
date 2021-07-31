import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import { useDispatch } from "react-redux";
import { addYoutubeVideo } from '../redux/actions/utility'
import { CustomButton } from "./CustomButton";


export default function AddPlaylistForm({ handleModalClose }) {

  const dispatch = useDispatch();

  const [playlistUrl, setPlaylistUrl] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);



  const handleChange = (event) => {
    setErrorText(null)
    setPlaylistUrl(event.target.value);
  };

  const handleClick = () => {
   
   
    let videoId 
    let urlParams
    try{
      if(!playlistUrl.includes('youtube')){
        throw Error()
      }
      urlParams = new URL(playlistUrl);
      videoId = urlParams.searchParams.get("v")
    }catch(error){
      setErrorText("Invalid URL.")
    }
    
    setLoading(true)
    dispatch(addYoutubeVideo(videoId, () => setLoading(false)))
  }

  return (
    <div>
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText={errorText}
        fullWidth
        margin="normal"
        value={playlistUrl}
        error = {!!errorText}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div style = {{ display: "flex", justifyContent: "space-between", marginTop: 20}}>
      <CustomButton  loading = {loading} onClick={handleClick} variant="contained" color="primary">
        Add Playlist
      </CustomButton>
      <Button onClick = {handleModalClose} style = {{ marginLeft: 100 }} variant="contained">Close</Button>
      </div>
    
    </div>
  );
}
