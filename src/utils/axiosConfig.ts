import axios from "axios";
import { serviceUrl } from "./urls";

const axiosConfig = axios.create({
  baseURL: serviceUrl.baseUrl,
});

axiosConfig.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosConfig.defaults.headers.common["Content-Type"] = "application/json";
axiosConfig.defaults.headers.common["Accept"] = "application/json";

export default axiosConfig;
