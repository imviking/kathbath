// client/src/api.js
import CONFIG from "../../config.js"; // adjust path if needed

// Axios is global (from CDN)
const api = axios.create({
  baseURL: CONFIG.API_SERVER_URL, // use config here
  withCredentials: true
});

export default api;
