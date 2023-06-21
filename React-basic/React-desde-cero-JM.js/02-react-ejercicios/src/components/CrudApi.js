import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp(); //Invocamos y importamos el help.
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true); //Muestra el loader al cargar la pagina.
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) { // Cuando la res no triga error, actualizamos la variable db con la respuesta.
          setDb(res);
          setError(null); // Si no hubo un error se actualiza la variable a null.
        } else {
          setDb(null); // Sino que no cargue la info y cargamos el error.
          setError(res); // Si no hubo un error se muestra le pasamos el mensaje de error que creamos en el helper.
        }
        setLoading(false); // Oculto el loader despues de que carga la data.
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) { // Si no existe un error, actualize la data de la bd con la respuesta.
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`; // el endpoint va a ser la union de la url y el /id para obtener el registro con el id correspondiente.
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        // Creamos un nuevo dato que mapee el objeto db, luego que valide el id de cada registro y cuando coincida este le asigne el valor de data a el new data que es el que contiene el registro actualizado del formulario.
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`; // Creamos el endpoint para identificar cual es el registro a eliminar.
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id); // Creamos un nuevo array con todos los elementos que cumplan la condicion.
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
