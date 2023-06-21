import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null); // Guarda la data de la api
  const [error, setError] = useState(null); //Guarda el error 
  const [loading, setLoading] = useState(false); // Almacena el estado si se ha cargado la peticion

  useEffect(() => {
    const abortController = new AbortController(); // Se aborta la peticion si no responde la peticion fetch.
    const signal = abortController.signal;

    const fetchData = async () => { //Definimos la funcion que realiza la peticion fetch.
      setLoading(true); // Mostramos el loader

      try {
        const res = await fetch(url, { signal });

        if (!res.ok) { // Si es resultado no fue exitoso
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }

        const json = await res.json(); // La variable json es igual a la respuesta de la funcion

        if (!signal.aborted) { // Si no se aborto la peticion 
          setData(json); // Asignamos la respuesta a setData.
          setError(null); // Actualizamo el error a null ya que todo salio bien.
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null); // Si se genera un error, adjuntamos el error y la data nulo.
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false); // Finalmente quitamos el loader
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]); // Se ejecuta cada vez que la url cambie

  return { data, error, loading };
};
