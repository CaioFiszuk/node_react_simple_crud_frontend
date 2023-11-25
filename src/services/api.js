import axios from 'axios';


export const api = axios.create({
    baseURL: "https://bidule-app.onrender.com"
})