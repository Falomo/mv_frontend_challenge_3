import axios from 'axios';
const KEY = 'AIzaSyAyKPA2rcrispbbkXV3SPXKyViAnVIvbV4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})