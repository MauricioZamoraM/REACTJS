export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = { // Simplemente se define la cabecera de la peticion
      accept: "application/json", // Cuando se hace una peticion a una api, aqui se deben especificar las credenciales que se necesiten para recibir la data.
    };

    const controller = new AbortController(); // Es como un manejador de errores para abordar o cancelar la peticion despues de un determinado tiempo.
    options.signal = controller.signal; // Creamos un objeto de tipo controller

    options.method = options.method || "GET"; // Si el usuario no especifico ningun metodo, por default es GET.
    options.headers = options.headers // Si la propiedad header de las opciones viene sumamos las cabeceras que vienen del usuario mas la que tenemos como defaultHeader.
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false; //parseamos el objeto que viene a cadena
    if (!options.body) delete options.body; // Si body es falso eliminamos la propiedad del objeto ya que body no puede ser false.

    console.log(options);
    setTimeout(() => controller.abort(), 3000); // Si la api o el servidor no responde en 3 segundos ejecuto el metodo abort.

    return fetch(endpoint, options) // Retornamos el metodo fetch con la respuesta procesada.
      .then((res) =>
        res.ok //Si la propiedad de la respuesta viene
          ? res.json() //Parseamos la respuesta a json
          : Promise.reject({ //Rechazamos la promesa y configuramos el objeto de error.
              err: true,
              status: res.status || "00", //Aveses la api no trae status entonces le asignamos un valor para identificarlo.
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };
// Utilizamos el customFetch que creamos previamente en estos metodos
//El metodo get va a recibir una url y puede ser que reciba opciones, si el usuario no manda opciones para que no de error le damos el valor de un objeto vacio.
  const get = (url, options = {}) => customFetch(url, options); // El metodo GET ejecuta la funcion custom fetch

  const post = (url, options = {}) => {
    options.method = "POST"; // Como es una peticion post le indicamos que el metodo http tiene que ser post tambien.
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
