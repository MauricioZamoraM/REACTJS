import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AxiosInterceptor } from "./interceptors/axios.interceptor";
// import {axiosInstance} from './interceptors/axiosInstance.interceptor'
//Importamos el interceptor de axios
AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
