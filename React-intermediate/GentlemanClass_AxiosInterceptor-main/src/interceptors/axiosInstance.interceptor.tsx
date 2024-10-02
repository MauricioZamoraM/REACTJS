// INTERCEPTORES DEFINIDOS DE A NIVEL DE INSTANCIA DE LA APLICACION

import axios from 'axios';
import { getValidationError } from '../utilities';
import { SnackbarUtilities } from '../utilities/snackbar-manager';
// Crear una instancia de Axios con una configuración personalizada
const axiosInstance = axios.create({
  //La URL base de la API se utiliza para establecer una URL común que se utilizará como prefijo para todas las solicitudes realizadas a través de Axios
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

//Interceptor de solicitud
axiosInstance.interceptors.request.use(
  function (config) {
    // Modificar la configuración de la solicitud
    config.headers['Authorization'] = 'Bearer token123';
    return config;
  },
  function (error) {
    // Manejar errores de solicitud
    return Promise.reject(error);
  }
);

//Interceptor de respuesta
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Respuesta desde el interceptor', response);
    SnackbarUtilities.success('Success'); // Se intercepta la respuesta y muestra el mensaje de exito
    return response;
  },
  (error) => {
    SnackbarUtilities.error(getValidationError(error.code)); // Se intercepta la respuesta y muestra el mensaje del error
    return Promise.reject(error); // Hagarra la promesa y le hace un reject, eso quiere decir que mata a la respuesta
  }
);
// Se debe exportar la instacia y remplazarla por la palabra axios al momento de hacer la peticion
export default axiosInstance;



