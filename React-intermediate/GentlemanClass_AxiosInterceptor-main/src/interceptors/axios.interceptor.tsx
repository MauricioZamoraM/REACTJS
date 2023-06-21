// INTERCEPTORES DEFINIDOS DE A NIVEL GLOBAL DE LA APLICACION

import axios, { AxiosRequestConfig } from 'axios';
import { getInLocalStorage, getValidationError, LocalStorageKeys, saveInLocalStorage } from '../utilities';
import { SnackbarUtilities } from '../utilities/snackbar-manager';

// Creamos el interceptor
export const AxiosInterceptor = () => {

  saveInLocalStorage(LocalStorageKeys.TOKEN, '123123123123');

  const updateHeader = (request: AxiosRequestConfig) => {
    const token = getInLocalStorage(LocalStorageKeys.TOKEN); // Obtenemos nuetro token de autenticacion de local storage
    const newHeaders = { //vamos a crear unos nuevos headers
      Authorization: token, // Este va a aceptar el token
      'Content-Type': 'application/json' // De que tipo va a ser la req que nosotros vamos a estar utilizando
    };
    request.headers = newHeaders; // Asignamos los nuevos headers y los retornamos
    return request;
  };
// Nos retorna la request para trabajar con ella
// Se intercepta cada peticion que nosotros hagamos al otro lado
  axios.interceptors.request.use(
    (request) => {
    // Si la request es un assets no necesita la autenticacion(token)
    if (request.url?.includes('assets')) return request; // si la request en la url incluye el string assets, retornamos de una vez
    return updateHeader(request); // llamamos a updateHeader y le pasamos la resquest, retornamos el header actualizado
    // Entonces cada peticion que hagamos al backend va a utilizar el TOKEN que le hemos seteado
    // Automaticamente ya estamos cambiando todas las peticiones de la aplicacion para utilizar el token
  });
// El use va a utiliza 2 respuestas, la primera para la respuesta en si y la otra para el manejo de errores.
  axios.interceptors.response.use(
    (response) => {
      console.log('response', response);
      SnackbarUtilities.success('Success'); // Se intercepta la respuesta y muestra el mensaje de exito
      return response;
    },
    (error) => {
      SnackbarUtilities.error(getValidationError(error.code)); // Se intercepta la respuesta y muestra el mensaje del error
      return Promise.reject(error); // Hagarra la promesa y le hace un reject, eso quiere decir que mata a la respuesta
    }
  );
};
