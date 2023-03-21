import { Axios } from "axios";

const axios = new Axios({
    baseURL: 'https://localhost:8443',
    withCredentials: true,
    // xsrfCookieName: 'XSRF-TOKEN',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axios;