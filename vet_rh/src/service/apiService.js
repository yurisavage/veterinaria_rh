import axios from "axios";

const apiService = axios.create({
    baseURL: 'https://localhost:7052/api/'
})

export default apiService;