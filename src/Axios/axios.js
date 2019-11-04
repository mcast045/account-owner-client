import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rocky-crag-02316.herokuapp.com',
    headers: {
        headerType: 'example header type'
    }
});
export default instance;