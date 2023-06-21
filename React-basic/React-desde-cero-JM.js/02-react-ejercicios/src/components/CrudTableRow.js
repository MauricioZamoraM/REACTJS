import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el; //Aqui se extraen los campos del elemento para usarse dentro del componente.

  return (
    < div style={{border:'solid 3px', borderColor: 'red' }}>
      <p>Componente CrudTableRow</p>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>Editar</button> {/* Le pasa el registro del objeto al que le dio click para que se pueda editar correctamente */}
          <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </div>

  );
};

export default CrudTableRow;
