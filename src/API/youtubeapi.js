import axios from "axios";

const KEY ="AIzaSyAIXEN1MC3Culjb6mXcb0VMROMztY9CX0I";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
    },
})