import axios from "axios";

const KEY = "AIzaSyCaOCY51OJI-NojKAWO74tp5pnEDHtHoIw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
  }
});
