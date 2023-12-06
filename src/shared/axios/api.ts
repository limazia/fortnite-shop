import axios from 'axios';

const API_URL = "https://fortniteapi.io/v2";
const API_KEY = "aabed524-49bf8d62-726e9551-7fb0a317";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': API_KEY
  }
});