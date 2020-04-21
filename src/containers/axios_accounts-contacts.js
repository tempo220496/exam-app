import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-project-1493788864125.firebaseio.com/'
});

export default instance;

//if request.auth != null