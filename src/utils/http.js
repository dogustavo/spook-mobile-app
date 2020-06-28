import axios from 'axios';

import config from '../config';

const API_URL = `${config.apiGateway.URL}`;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';

axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error.response)
)

export const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const removeToken = () => {
    delete axios.defaults.headers.common["Authorization"];
}

export default axios;