const SERVER_PATH ='http://localhost:5200';
let api = axios.create({baseURL:SERVER_PATH})
export default api