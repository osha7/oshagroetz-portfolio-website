import axios from 'axios';

export const customFetch = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});

