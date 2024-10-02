import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  //console.log(data, error, loading);

  if (!data) return null; // Si no hay nada, retornamos null y no pintamos nada.

  if (error) { 
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`; //Se crea el nombre de la clase dinamicamente
  let label = title.charAt(0).toUpperCase() + title.slice(1); // Convertimos la primera letra del titulo en mayuscula.
  let options = data.response[title]; //Definimos una variable con la estructura de la respuesta de la api. El title es el name en el componente SelectList.
  //console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => ( // Ejecuto un map con las opciones que traen los estados, municipios o colonias.  
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList;
