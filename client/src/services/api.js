import axios from "axios";
import { API_URL } from "./config";

export default () => {
  return axios.create({
    baseURL: API_URL
  });
};
