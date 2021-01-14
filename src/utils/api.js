import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.datamuse.com/',
    timeout: 1500 
});

export default http