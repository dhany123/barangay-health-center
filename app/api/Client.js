import axios from 'axios'

const client = axios.create({
    // baseURL: process.env.baseURL,
    baseURL: `http://localhost:5000/`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

export default client;

