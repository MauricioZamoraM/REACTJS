import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  // Captura la informacion del formulario que envia a la tabla para que este componente la muestre.
  const createData = (data) => {
    data.id = Date.now(); // Se genera un id unico segun la cantidad de milisegundos
    console.log(data);
    setDb([...db, data]); // Almacena el nuevo registro que viene del componente crudForm.
  };

  const updateData = (data) => { //La data que recibe por parametro es la de un registro que ya existe, solo que con los cambios que fueron editados pero el id es el mismo.
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id); //Devuelve un nuevo array con los elementos donde el id sea diferente al id que se recibe por parametro.-
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div style={{border:'solid 3px', borderColor: 'black'}}>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
