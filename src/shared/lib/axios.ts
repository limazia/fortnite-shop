import axios from "axios";

const ENABLE_API_DELAY = false;

export const api = axios.create({
  baseURL: process.env.FORTNITE_API_BASE_URL,
  headers: {
    Authorization: process.env.FORTNITE_API_TOKEN,
  },
});

if (ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 4000))
    );

    return config;
  });
}
