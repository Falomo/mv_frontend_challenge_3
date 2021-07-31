import {
	SAVE_COUNTRIES,
	ADD_TO_PLAYLIST,
	REMOVE_FROM_PLAYLIST,
	PLAY_VIDEO
} from "./types";
import youtube from '../../../apis'

const BASE_COUNTRIES_API = '/api/v1/configurations/country'

 
/* ==== action creators ==== */


const addToPlaylist = (payload) => ({
	type: ADD_TO_PLAYLIST,
	payload,
});
export const removeFromPlaylist = (payload) => ({
	type: REMOVE_FROM_PLAYLIST,
	payload
});

export const playVideo = (payload) => ({
	type: PLAY_VIDEO,
	payload
});


/* ==== action creators ==== */

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomId(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const formatYoutubeResponse = (video) => {
	const { snippet, id } = video;
	const { description, channelTitle, title } = snippet;
	return {
		id: generateRandomId(5),
		videoId: id,
		title,
		channelTitle,
		description,
		date: snippet.publishedAt,
		thumbnail: snippet.thumbnails.high
	}
}

export const removeVideoFromPlaylist = (id) => (dispatch) => {
	dispatch(removeFromPlaylist(id))
}


export const addYoutubeVideo = (id, onFinish = () => {}) => (dispatch) => {
	youtube.get('/videos', {
        params: {
            id
        }
    })
	.then(res => {
		// debugger;
		const videoData = formatYoutubeResponse(res.data.items[0])
		dispatch(addToPlaylist(videoData));
		onFinish();
	})
	.catch((error) => {
		// if (error) {
		// 	error = typeof error == "string" ? error : error.message;
		// } else {
		// 	error = Language.NetworkErrorMessage.errorMessage;
		// }
		onFinish && onFinish(false);
	}); 


	
		
};

