import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState(""); // Estados
  const [town, setTown] = useState(""); // Ciudades
  const [suburb, setSuburb] = useState(""); //Municipios

  const TOKEN = "caac742e-eb55-4799-97b4-67fee19140c4";

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => { // Esta funcion dispara el cambio que se realize en el input select y con ella podemos actualizar el estado de la variable.
          setState(e.target.value);
        }}
      />
      {state && ( // Hasta que state tenga datos, mostramos la info.
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
