// axios
import axios from "axios";

const createApi = () => {
  return axios.create({
    baseURL: `http://localhost:3000`,
    timeout: 5000,
    withCredentials: true,
  });

};

export const api = createApi();
